import React, { useEffect, useRef, useState } from "react";
import { C } from "../theme";

/* ================================================================== *
 *  "SIGN IN WITH GOOGLE" BUTTON
 *
 *  Uses Google Identity Services. Google renders the button itself (that's
 *  a requirement of their branding rules) and hands back a signed ID token,
 *  which the backend verifies at POST /api/auth/google.
 *
 *  Needs one line in frontend/.env:
 *      VITE_GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
 *  (Vite only reads .env at startup — restart `npm run dev` after adding it.)
 *  See backend/src/utils/googleAuth.js for how to create that client ID.
 * ================================================================== */

const SRC = "https://accounts.google.com/gsi/client";
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function loadGoogleScript() {
  return new Promise((resolve, reject) => {
    if (window.google?.accounts?.id) return resolve();

    let el = document.querySelector(`script[src="${SRC}"]`);
    if (!el) {
      el = document.createElement("script");
      el.src = SRC;
      el.async = true;
      el.defer = true;
      document.head.appendChild(el);
    }
    el.addEventListener("load", () => resolve());
    el.addEventListener("error", () => reject(new Error("Could not reach Google's sign-in service. Check your internet connection.")));
    // Script tag already present and finished loading before we attached the listener
    if (window.google?.accounts?.id) resolve();
  });
}

export function GoogleButton({ onCredential, onError, disabled }) {
  const holder = useRef(null);
  const [state, setState] = useState(CLIENT_ID ? "loading" : "unconfigured");

  useEffect(() => {
    if (!CLIENT_ID) return;
    let cancelled = false;

    loadGoogleScript()
      .then(() => {
        if (cancelled || !holder.current) return;
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: (response) => {
            if (response?.credential) onCredential(response.credential);
            else onError?.("Google did not return a sign-in token.");
          },
        });
        window.google.accounts.id.renderButton(holder.current, {
          theme: "outline",
          size: "large",
          width: 320,
          text: "continue_with",
          shape: "rectangular",
          logo_alignment: "center",
        });
        setState("ready");
      })
      .catch((err) => {
        if (cancelled) return;
        setState("error");
        onError?.(err.message);
      });

    return () => { cancelled = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (state === "unconfigured") {
    return (
      <div className="t11 rounded-lg px-3 py-2.5 text-center leading-relaxed" style={{ background: "#F1F3F2", color: C.mute }}>
        Google sign-in isn&apos;t set up yet — add <b>VITE_GOOGLE_CLIENT_ID</b> to <b>frontend/.env</b> and restart the dev server.
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="t11 rounded-lg px-3 py-2.5 text-center" style={{ background: C.redTint, color: C.red }}>
        Google sign-in could not load. You can still use email and password.
      </div>
    );
  }

  return (
    <div className="flex justify-center" style={{ minHeight: 44, opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? "none" : "auto" }}>
      <div ref={holder} />
    </div>
  );
}
