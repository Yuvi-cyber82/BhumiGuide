import nodemailer from "nodemailer";

/* Sends the signup-verification OTP through Gmail's own SMTP server using a
 * Google "App Password". Free, and unlike a sandbox email API it delivers to
 * ANY inbox — your friends', your guide's, anyone testing the project.
 *
 * ── One-time setup (about 3 minutes) ──────────────────────────────────────
 * 1. The Gmail account you send FROM must have 2-Step Verification turned on:
 *      myaccount.google.com  →  Security  →  2-Step Verification
 * 2. Create an App Password:
 *      myaccount.google.com/apppasswords
 *      → app: "Mail", any device name → Google shows a 16-character password
 *        that looks like:  abcd efgh ijkl mnop
 * 3. Put both into backend/.env:
 *      GMAIL_USER=yourname@gmail.com
 *      GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
 *    (Spaces in the password are fine — they're stripped below. This is NOT
 *     your normal Gmail password; never put that here.)
 *
 * That's it — no domain, no paid plan, no DNS records.
 *
 * If these two values are missing or wrong, nothing crashes: auth.routes.js
 * catches the failure and prints the OTP to the backend's own terminal so the
 * flow still works for a local demo. */

let transporter = null;

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");
  if (!user || !pass) {
    throw new Error("GMAIL_USER / GMAIL_APP_PASSWORD are not set in backend/.env");
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
  }
  return transporter;
}

export async function sendOtpEmail({ to, name, otp }) {
  const from = process.env.GMAIL_USER;
  const greeting = name ? `Hi ${name.split(" ")[0]},` : "Hi,";

  await getTransporter().sendMail({
    from: `"BhumiGuide Intelligence" <${from}>`,
    to,
    subject: `Your BhumiGuide verification code: ${otp}`,
    text: `${greeting}\n\nYour BhumiGuide email verification code is:\n\n${otp}\n\nThis code expires in 10 minutes. If you didn't request it, you can ignore this email.`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:460px;margin:0 auto;padding:24px;color:#1B2A20">
        <div style="font-size:18px;font-weight:bold;color:#1E7A46">BhumiGuide Intelligence</div>
        <p style="font-size:14px;margin-top:20px">${greeting}</p>
        <p style="font-size:14px;color:#5B6B61">Use this code to verify your email address:</p>
        <div style="font-size:30px;font-weight:bold;letter-spacing:7px;color:#1E7A46;background:#EEF6F1;border-radius:10px;padding:16px;text-align:center;margin:18px 0">${otp}</div>
        <p style="font-size:12px;color:#5B6B61">This code expires in 10 minutes. If you didn't request it, you can safely ignore this email.</p>
        <p style="font-size:11px;color:#8A9A90;margin-top:24px">Sent by BhumiGuide Intelligence — a final-year academic project.</p>
      </div>`,
  });
}
