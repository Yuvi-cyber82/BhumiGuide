import React, { useState } from "react";
import { X } from "lucide-react";
import { Btn, Input, Label, Logo, Modal } from "./ui";
import { GoogleButton } from "./GoogleButton";
import { useTr } from "../i18n";
import { C } from "../theme";
import * as authApi from "../api/auth";

/* ================================================================== *
 *  AUTH MODAL + TOASTS
 * ================================================================== */

export function AuthModal({ mode, onClose, onDone, toast }) {
  const tr = useTr();
  const [f, setF] = useState({ name: "", email: "", password: "" });
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setF({ ...f, [k]: v });
  const isSignup = mode === "signup";
  const signInWithGoogle = async (credential) => {
    setBusy(true);
    try {
      const result = await authApi.googleLogin(credential);
      onDone(result);
    } catch (err) {
      toast(err.message || tr("Google sign-in failed. Try again."), "red");
    } finally {
      setBusy(false);
    }
  };

  const submit = async () => {
    if (isSignup && f.name.trim().length < 2) return toast(tr("Enter your name."), "amber");
    if (!f.email.includes("@")) return toast(tr("That email address does not look right."), "amber");
    if (f.password.length < 6) return toast(tr("Password needs at least 6 characters."), "amber");
    setBusy(true);
    try {
      const result = isSignup
        ? await authApi.register(f.name.trim(), f.email.trim(), f.password)
        : await authApi.login(f.email.trim(), f.password);
      onDone(result);
    } catch (err) {
      toast(err.message || tr("Something went wrong. Try again."), "red");
    } finally {
      setBusy(false);
    }
  };
  return (
    <Modal open={!!mode} onClose={onClose}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-5">
          <Logo size={40} showTagline />
          <button onClick={onClose}><X size={18} style={{ color: C.mute }} /></button>
        </div>
        <h3 className="text-xl font-extrabold" style={{ color: C.ink }}>{isSignup ? tr("Create your account") : tr("Welcome back")}</h3>
        <p className="text-xs mt-1 mb-5" style={{ color: C.mute }}>
          {isSignup ? tr("Save your progress, documents and verification history.") : tr("Sign in to pick up where you left off.")}
        </p>
        <div className="space-y-3">
          {isSignup && <div><Label required>{tr("Full name")}</Label><Input value={f.name} onChange={set("name")} placeholder={tr("Your name")} /></div>}
          <div><Label required>{tr("Email address")}</Label><Input value={f.email} onChange={set("email")} placeholder="you@example.com" /></div>
          <div><Label required>{tr("Password")}</Label><Input type="password" value={f.password} onChange={set("password")} placeholder={tr("At least 6 characters")} /></div>
          <Btn full onClick={submit} disabled={busy}>{busy ? tr("Please wait…") : isSignup ? tr("Create account") : tr("Login")}</Btn>
        </div>

        <div className="my-4 flex items-center gap-3">
          <div className="flex-1" style={{ height: 1, background: C.line2 }} />
          <span className="t11" style={{ color: C.mute }}>{tr("or")}</span>
          <div className="flex-1" style={{ height: 1, background: C.line2 }} />
        </div>
        <GoogleButton onCredential={signInWithGoogle} onError={(m) => toast(m, "red")} disabled={busy} />
        <div className="mt-4 text-center text-xs" style={{ color: C.mute }}>
          {isSignup ? tr("Already have an account? ") : tr("New here? ")}
          <button className="font-bold" style={{ color: C.green }} onClick={() => onDone(null, isSignup ? "login" : "signup")}>
            {isSignup ? tr("Login instead") : tr("Create one")}
          </button>
        </div>
        <div className="mt-4 rounded-lg px-3 py-2.5 t11" style={{ background: C.blueTint, color: C.body }}>
          {tr("Your account, progress and uploaded documents are saved to the backend database.")}
        </div>
      </div>
    </Modal>
  );
}

