/* Sends the signup-verification OTP using Resend (https://resend.com) — a
 * free-tier email API: sign up, copy an API key into backend/.env, done.
 * No SMTP server or Gmail app password needed.
 *
 * IMPORTANT free-tier limitation: Resend's sandbox sender
 * (onboarding@resend.dev) can only deliver to the Resend ACCOUNT OWNER's own
 * verified email address. If someone signs up with a different email, this
 * call fails with a 403 — that's the sandbox restriction, not a bug in this
 * code. The real fix is verifying a domain you own in the Resend dashboard,
 * which then lets you send to anyone. Until then, routes/auth.routes.js
 * catches the failure and prints the OTP to the backend's own console, so
 * the verification flow still works end to end for a demo. */
const API_URL = "https://api.resend.com/emails";

export async function sendOtpEmail({ to, name, otp }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const body = {
    from: "BhumiGuide <onboarding@resend.dev>",
    to: [to],
    subject: `Your BhumiGuide verification code: ${otp}`,
    text: `Hi ${name || "there"},\n\nYour BhumiGuide email verification code is:\n\n${otp}\n\nThis code expires in 10 minutes. If you didn't request this, you can ignore this email.`,
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend API error ${res.status}: ${detail.slice(0, 300)}`);
  }
  return res.json();
}
