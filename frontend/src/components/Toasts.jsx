import React from "react";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { C, FONT } from "../theme";

export function Toasts({ items }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 space-y-2 mwvw">
      {items.map((t) => {
        const col = { green: C.green, amber: C.amber, red: C.red }[t.tone] || C.green;
        const Icon = t.tone === "red" ? XCircle : t.tone === "amber" ? AlertTriangle : CheckCircle2;
        return (
          <div key={t.id} className="rounded-xl px-4 py-3 flex items-start gap-2.5 bg-white"
            style={{ border: `1px solid ${C.line}`, boxShadow: "0 8px 24px rgba(0,0,0,.10)", minWidth: 260, fontFamily: FONT }}>
            <Icon size={16} style={{ color: col }} className="shrink-0 mt-0.5" />
            <span className="text-xs leading-snug" style={{ color: C.body }}>{t.text}</span>
          </div>
        );
      })}
    </div>
  );
}

