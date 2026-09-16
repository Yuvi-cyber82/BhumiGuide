import { OAuth2Client } from "google-auth-library";

/* Verifies the ID token that Google's "Sign in with Google" button hands to
 * the frontend. The token is a signed JWT — this checks Google's signature,
 * that it hasn't expired, and that it was issued for OUR app (audience =
 * our client ID), so a token minted for some other site can't be replayed
 * here. Only after that do we trust the email inside it.
 *
 * ── One-time setup (free) ────────────────────────────────────────────────
 * 1. console.cloud.google.com → create/select a project
 * 2. APIs & Services → OAuth consent screen → External → fill app name +
 *    your email → save (Testing mode is fine for an academic project)
 * 3. APIs & Services → Credentials → Create credentials →
 *    OAuth client ID → Web application
 *      Authorized JavaScript origins:  http://localhost:5173
 *                                      http://localhost:5174
 * 4. Copy the Client ID into BOTH:
 *      backend/.env    GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
 *      frontend/.env   VITE_GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
 *    (The client SECRET is not needed for this flow — don't put it anywhere.) */

const client = new OAuth2Client();

export async function verifyGoogleCredential(credential) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) throw new Error("GOOGLE_CLIENT_ID is not set in backend/.env");

  const ticket = await client.verifyIdToken({ idToken: credential, audience: clientId });
  const p = ticket.getPayload();
  if (!p?.email) throw new Error("Google did not return an email address.");

  return {
    googleId: p.sub,
    email: String(p.email).toLowerCase().trim(),
    name: p.name || p.given_name || p.email.split("@")[0],
    emailVerified: !!p.email_verified,
  };
}
