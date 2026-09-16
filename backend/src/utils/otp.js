import crypto from "crypto";

/* Email OTP helpers for signup verification. Nothing here talks to the
 * network — see utils/resend.js for actually sending the email. */

export const OTP_TTL_MS = 10 * 60 * 1000; // 10 minutes
export const OTP_RESEND_COOLDOWN_MS = 45 * 1000; // 45 seconds between resends

/** A random 6-digit code, e.g. "042917". Uses crypto.randomInt so it's not
 * predictable the way Math.random() would be. */
export function generateOtp() {
  return String(crypto.randomInt(0, 1000000)).padStart(6, "0");
}

/** We only ever store a hash of the OTP (like a password), never the code
 * itself — so a database leak doesn't hand out valid codes. */
export function hashOtp(otp) {
  return crypto.createHash("sha256").update(String(otp)).digest("hex");
}

export function otpMatches(otp, hash) {
  return !!hash && hashOtp(otp) === hash;
}
