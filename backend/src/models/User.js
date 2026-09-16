import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    /* Not required: accounts created through "Sign in with Google" have no
     * password at all. routes/auth.routes.js refuses password login for
     * those instead of comparing against an empty hash. */
    passwordHash: { type: String, default: null },

    /* Google's stable user id ("sub") for accounts linked to a Google
     * account. Sparse so the many password-only users (null here) don't
     * collide on the unique index. */
    googleId: { type: String, default: null, unique: true, sparse: true },

    /* Email OTP verification (see utils/otp.js + routes/auth.routes.js).
     * Verification is informational only — it never blocks login. */
    emailVerified: { type: Boolean, default: false },
    otpHash: { type: String, default: null },
    otpExpires: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
