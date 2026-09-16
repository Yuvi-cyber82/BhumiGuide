import React, { useEffect, useState } from "react";
import { Mail, RefreshCw, ShieldCheck, X } from "lucide-react";
import { Btn, Input, Modal } from "./ui";
import { C } from "../theme";
import * as authApi from "../api/auth";
import { useFill, useTr } from "../i18n";

/* ================================================================== *
 *  EMAIL OTP VERIFICATION
 *  Purely informational — verifying (or not) never affects the ability
 *  to log in. See backend/src/utils/resend.js for the free-tier
 *  limitation this depends on (OTP emails can only reliably reach the
 *  Resend account owner's own inbox unless a real domain is verified).
 * ================================================================== */

export function VerifyEmailModal({ open, onClose, auth, setAuth, toast }) {
  const tr = useTr();
  const fill = useFill();
  const [otp, setOtp] = useState("");
  const [busy, setBusy] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (open) setOtp("");
  }, [open]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [cooldown]);

  if (!auth) return null;

  const verify = async () => {
    if (otp.trim().length !== 6) return toast(tr("Enter the 6-digit code."), "amber");
    setBusy(true);
    try {
      const { user } = await authApi.verifyOtp(otp.trim());
      setAuth(user);
      toast(tr("Email verified."));
      onClose();
    } catch (err) {
      toast(err.message || tr("Could not verify the code."), "red");
    } finally {
      setBusy(false);
    }
  };

  const resend = async () => {
    setResending(true);
    try {
      const { otpEmailed } = await authApi.resendOtp();
      toast(
        otpEmailed
          ? tr("A new code was emailed to you.")
          : tr(
              "Could not email the code (free-tier limit on this prototype) — ask whoever is running the backend to check its terminal, the code is printed there too."
            ),
        otpEmailed ? "green" : "amber"
      );
      setCooldown(45);
    } catch (err) {
      toast(err.message || tr("Could not resend the code."), "red");
    } finally {
      setResending(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} width={400}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: C.tint }}>
            <Mail size={20} style={{ color: C.green }} />
          </div>
          <button onClick={onClose}><X size={18} style={{ color: C.mute }} /></button>
        </div>
        <h3 className="text-lg font-extrabold" style={{ color: C.ink }}>{tr("Verify your email")}</h3>
        <p className="text-xs mt-1.5 leading-relaxed" style={{ color: C.mute }}>
          {fill(
            "We sent a 6-digit code to {0}. This is optional — it will not stop you from logging in either way.",
            <b>{auth.email}</b>
          )}
        </p>
        <div className="mt-4">
          <Input value={otp} onChange={(v) => setOtp(v.replace(/\D/g, "").slice(0, 6))} placeholder="123456" />
        </div>
        <div className="mt-3">
          <Btn full icon={ShieldCheck} onClick={verify} disabled={busy}>{busy ? tr("Verifying…") : tr("Verify")}</Btn>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button
            className="t11 font-semibold flex items-center gap-1 disabled:opacity-50"
            style={{ color: cooldown > 0 ? C.mute : C.green }}
            onClick={resend}
            disabled={resending || cooldown > 0}
          >
            <RefreshCw size={12} /> {cooldown > 0 ? fill("Resend in {0}s", cooldown) : resending ? tr("Sending…") : tr("Resend code")}
          </button>
          <button className="t11 font-semibold" style={{ color: C.mute }} onClick={onClose}>{tr("Skip for now")}</button>
        </div>
        <div className="mt-4 rounded-lg px-3 py-2.5 t11 leading-relaxed" style={{ background: C.blueTint, color: C.body }}>
          {tr(
            "This is an academic prototype using a free email service (Resend's sandbox sender). It can only guarantee delivery to the project owner's own inbox unless a real domain is verified — if your code doesn't arrive, the same code is also printed to the backend server's terminal."
          )}
        </div>
      </div>
    </Modal>
  );
}
