import { Router } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Progress from "../models/Progress.js";
import { signToken, requireAuth } from "../middleware/auth.js";
import { generateOtp, hashOtp, otpMatches, OTP_TTL_MS, OTP_RESEND_COOLDOWN_MS } from "../utils/otp.js";
import { sendOtpEmail } from "../utils/mailer.js";
import { verifyGoogleCredential } from "../utils/googleAuth.js";

const router = Router();

function publicUser(u) {
  return { id: u._id, name: u.name, email: u.email, emailVerified: !!u.emailVerified };
}

/** Generates a fresh OTP for this user, saves its hash + expiry, and emails
 * it. Never throws — email delivery can fail (see resend.js's note on the
 * free-tier sandbox sender restriction), and that must never break signup or
 * login, which don't depend on verification. On failure the real OTP is
 * logged to the server console instead, so the flow is still usable. */
async function issueOtp(user) {
  const otp = generateOtp();
  user.otpHash = hashOtp(otp);
  user.otpExpires = new Date(Date.now() + OTP_TTL_MS);
  await user.save();
  try {
    await sendOtpEmail({ to: user.email, name: user.name, otp });
    return { emailed: true };
  } catch (err) {
    console.log(`ℹ️  Could not email OTP to ${user.email} (${err.message}). For this demo, the code is: ${otp}`);
    return { emailed: false };
  }
}

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email and password are all required." });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters." });
    }
    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) return res.status(409).json({ error: "An account with this email already exists." });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name: name.trim(), email: email.toLowerCase().trim(), passwordHash });
    await Progress.create({ user: user._id });

    const { emailed } = await issueOtp(user);

    res.status(201).json({ token: signToken(user), user: publicUser(user), otpEmailed: emailed });
  } catch (err) {
    res.status(500).json({ error: "Could not create account.", detail: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: "Email and password are required." });

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) return res.status(401).json({ error: "Invalid email or password." });
    if (!user.passwordHash) {
      return res.status(401).json({ error: "This account was created with Google — use the \"Sign in with Google\" button." });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid email or password." });

    res.json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    res.status(500).json({ error: "Login failed.", detail: err.message });
  }
});

/** "Sign in with Google". The frontend's Google button gives us a signed ID
 * token; we verify it with Google, then log the person in — creating their
 * account on first use. Google has already confirmed the email address, so
 * these accounts skip the OTP step entirely. */
router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body || {};
    if (!credential) return res.status(400).json({ error: "No Google credential was sent." });

    let profile;
    try {
      profile = await verifyGoogleCredential(credential);
    } catch (err) {
      console.error("Google sign-in verification failed:", err.message);
      return res.status(401).json({ error: "Could not verify that Google sign-in. Please try again." });
    }

    let user = await User.findOne({ email: profile.email });

    if (!user) {
      user = await User.create({
        name: profile.name,
        email: profile.email,
        passwordHash: null,          // Google-only account — no password to store
        googleId: profile.googleId,
        emailVerified: profile.emailVerified,
      });
      await Progress.create({ user: user._id });
    } else if (!user.googleId) {
      // Existing password account with the same email — link it to Google.
      user.googleId = profile.googleId;
      if (profile.emailVerified) user.emailVerified = true;
      await user.save();
    }

    res.json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    res.status(500).json({ error: "Google sign-in failed.", detail: err.message });
  }
});

router.get("/me", requireAuth, async (req, res) => {
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ error: "User not found." });
  res.json({ user: publicUser(user) });
});

/** Verifies the 6-digit code sent to the signed-in user's own email.
 * Verification is informational (a badge on the Account page) — it never
 * gates login, so nobody can get locked out. */
router.post("/verify-otp", requireAuth, async (req, res) => {
  try {
    const { otp } = req.body || {};
    if (!otp) return res.status(400).json({ error: "Enter the 6-digit code." });

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: "User not found." });
    if (user.emailVerified) return res.json({ user: publicUser(user) });

    if (!user.otpHash || !user.otpExpires) {
      return res.status(400).json({ error: "No code was requested. Tap \"Resend code\" first." });
    }
    if (user.otpExpires.getTime() < Date.now()) {
      return res.status(400).json({ error: "This code has expired. Tap \"Resend code\" to get a new one." });
    }
    if (!otpMatches(otp, user.otpHash)) {
      return res.status(400).json({ error: "That code is incorrect." });
    }

    user.emailVerified = true;
    user.otpHash = null;
    user.otpExpires = null;
    await user.save();
    res.json({ user: publicUser(user) });
  } catch (err) {
    res.status(500).json({ error: "Could not verify the code.", detail: err.message });
  }
});

/** Re-sends a fresh OTP, with a short cooldown so the button can't be spammed. */
router.post("/resend-otp", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: "User not found." });
    if (user.emailVerified) return res.status(400).json({ error: "This email is already verified." });

    if (user.otpExpires) {
      const generatedAt = user.otpExpires.getTime() - OTP_TTL_MS;
      const waitMore = OTP_RESEND_COOLDOWN_MS - (Date.now() - generatedAt);
      if (waitMore > 0) {
        return res.status(429).json({ error: `Please wait ${Math.ceil(waitMore / 1000)}s before requesting another code.` });
      }
    }

    const { emailed } = await issueOtp(user);
    res.json({ ok: true, otpEmailed: emailed });
  } catch (err) {
    res.status(500).json({ error: "Could not resend the code.", detail: err.message });
  }
});

export default router;
