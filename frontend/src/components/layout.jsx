import React, { useState } from "react";
import { Home, Bell, Check, X, Send, Menu, Globe, LogOut, User } from "lucide-react";
import { Btn, Logo } from "./ui";
import { LANGS, coverage, useTr } from "../i18n";
import { C } from "../theme";

/* ---------------------------- HEADER ---------------------------- */

export const NAV = [
  ["home", "nav.home"], ["landBuying", "nav.landBuying"], ["documents", "nav.documents"],
  ["charges", "nav.charges"], ["ai", "nav.ai"], ["legal", "nav.legal"],
  ["resources", "nav.resources"], ["contact", "nav.contact"],
];

export function Header({ page, onNav, t, lang, setLang, auth, onLogin, onLogout, notifications }) {
  const tr = useTr();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [bell, setBell] = useState(false);
  return (
    <header className="sticky top-0 z-40" style={{ background: "#fff", borderBottom: `1px solid ${C.line}` }}>
      <div className="wrap-wide mx-auto px-4 h-16 flex items-center gap-4">
        <button onClick={() => onNav("home")} aria-label={tr("BhumiGuide Intelligence home")}><Logo size={38} /></button>

        <nav className="xlFlex items-center gap-0.5 ml-3 flex-1 min-w-0 overflow-hidden">
          {NAV.map(([key, label]) => (
            <button
              key={key}
              onClick={() => onNav(key)}
              className="px-2 py-2 text-xs font-semibold rounded-md whitespace-nowrap"
              style={{
                color: page === key ? C.green : C.body,
                borderBottom: page === key ? `2px solid ${C.green}` : "2px solid transparent",
              }}
            >
              {t(label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <div className="relative">
            <button onClick={() => { setLangOpen(!langOpen); setBell(false); }} className="p-2 rounded-lg flex items-center gap-1" style={{ border: `1px solid ${C.line}` }}>
              <Globe size={15} style={{ color: C.body }} />
              <span className="text-xs font-semibold xxlShow" style={{ color: C.body }}>
                {LANGS.find((l) => l.code === lang).label}
              </span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl py-1.5 z-50" style={{ border: `1px solid ${C.line}`, boxShadow: "0 12px 28px rgba(0,0,0,.10)" }}>
                {LANGS.map((l) => {
                  const cov = coverage(l.code);
                  return (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className="w-full text-left px-3 py-2 text-sm flex items-center justify-between gap-2 hover:bg-gray-50"
                      style={{ color: lang === l.code ? C.green : C.body, fontWeight: lang === l.code ? 700 : 500 }}
                    >
                      <span>{l.label}</span>
                      <span className="flex items-center gap-1.5 shrink-0">
                        <span className="t10" style={{ color: cov === 100 ? C.green : C.mute }}>{cov}%</span>
                        {lang === l.code && <Check size={14} />}
                      </span>
                    </button>
                  );
                })}
                <div className="px-3 pt-2 pb-1 t10 leading-snug" style={{ color: C.mute, borderTop: `1px solid ${C.line2}` }}>
                  {tr("The percentage shows how much of the site is translated. Untranslated text falls back to English.")}
                </div>
              </div>
            )}
          </div>

          {auth && (
            <div className="relative">
              <button onClick={() => { setBell(!bell); setLangOpen(false); }} className="p-2 rounded-lg relative" style={{ border: `1px solid ${C.line}` }}>
                <Bell size={16} style={{ color: C.body }} />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full t9 text-white flex items-center justify-center font-bold" style={{ background: C.red }}>
                    {notifications.length}
                  </span>
                )}
              </button>
              {bell && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl overflow-hidden z-50" style={{ border: `1px solid ${C.line}`, boxShadow: "0 12px 28px rgba(0,0,0,.10)" }}>
                  <div className="px-4 py-2.5 text-xs font-bold" style={{ borderBottom: `1px solid ${C.line2}`, color: C.ink }}>{tr("Notifications")}</div>
                  {notifications.length === 0 ? (
                    <div className="px-4 py-6 text-xs text-center" style={{ color: C.mute }}>{tr("Nothing new yet.")}</div>
                  ) : notifications.map((n, i) => (
                    <div key={i} className="px-4 py-3 text-xs" style={{ borderBottom: `1px solid ${C.line2}` }}>
                      <div className="font-semibold" style={{ color: C.ink }}>{n.title}</div>
                      <div style={{ color: C.mute }}>{n.body}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {auth ? (
            <>
              <button onClick={() => onNav("dashboard")} className="smShow">
                <Btn size="sm" variant="outline">{t("nav.dashboard")}</Btn>
              </button>
              <button onClick={() => onNav("account")} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: C.tint }}>
                <User size={17} style={{ color: C.green }} />
              </button>
              <div className="smShow"><Btn size="sm" onClick={onLogout} icon={LogOut}>{t("btn.logout")}</Btn></div>
            </>
          ) : (
            <>
              <div className="smShow"><Btn size="sm" variant="outline" onClick={() => onLogin("login")}>{t("btn.login")}</Btn></div>
              <Btn size="sm" onClick={() => onLogin("signup")}>{t("btn.signup")}</Btn>
            </>
          )}

          <button className="xlHide p-2 rounded-lg" style={{ border: `1px solid ${C.line}` }} onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xlHide wrap-wide mx-auto px-4 pb-4 grid grid-cols-2 gap-1" style={{ borderTop: `1px solid ${C.line2}` }}>
          {[...NAV, ["dashboard", "nav.dashboard"], ["account", "nav.account"]].map(([key, label]) => (
            <button
              key={key}
              onClick={() => { onNav(key); setOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold rounded-lg"
              style={{ color: page === key ? C.green : C.body, background: page === key ? C.tint : "transparent" }}
            >
              {t(label)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------------------------- FOOTER ---------------------------- */

export function Footer({ onNav, toast }) {
  const tr = useTr();
  const [email, setEmail] = useState("");
  const col = (title, items) => (
    <div>
      <div className="text-xs font-bold mb-3 text-white">{title}</div>
      <div className="space-y-2">
        {items.map(([label, page]) => (
          <button key={label} onClick={() => page && onNav(page)} className="block text-xs hover:text-white text-left" style={{ color: "#A9C6B4" }}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
  return (
    <footer style={{ background: C.greenDeep }} className="mt-16">
      <div className="wrap mx-auto px-4 py-12 grid gap-8 m2 l5">
        <div className="lsp1">
          <Logo light size={40} showTagline />
          <p className="text-xs mt-4 leading-relaxed" style={{ color: "#A9C6B4" }}>
            {tr("Your intelligent companion for safe, secure and informed land decisions.")}
          </p>
        </div>
        {col(tr("Quick Links"), [[tr("Home"), "home"], [tr("Land Buying"), "landBuying"], [tr("Documents"), "documents"], [tr("Charges"), "charges"], [tr("AI Assistant"), "ai"]])}
        {col(tr("Important"), [[tr("Legal Verification"), "legal"], [tr("Resources"), "resources"], [tr("Contact"), "contact"], [tr("Dashboard"), "dashboard"]])}
        {col(tr("Policies"), [[tr("Privacy Policy")], [tr("Terms & Conditions")], [tr("Refund Policy")], [tr("Disclaimer")], [tr("FAQs"), "resources"]])}
        <div>
          <div className="text-xs font-bold mb-3 text-white">{tr("Newsletter")}</div>
          <p className="text-xs mb-3" style={{ color: "#A9C6B4" }}>{tr("Updates on land laws and processes.")}</p>
          <div className="flex gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={tr("Enter your email")}
              className="flex-1 min-w-0 rounded-lg px-3 py-2 text-xs text-white ph-soft"
              style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)" }}
            />
            <button
              onClick={() => { if (email.includes("@")) { toast(tr("Subscribed. Check your inbox for a confirmation.")); setEmail(""); } else toast(tr("Enter a valid email address to subscribe."), "amber"); }}
              className="px-3 rounded-lg" style={{ background: C.green }}
            >
              <Send size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 text-center t11" style={{ borderTop: "1px solid rgba(255,255,255,.10)", color: "#8FAF9C" }}>
        © 2026 BhumiGuide Intelligence · Academic project prototype · Information shown is indicative, not legal advice.
      </div>
    </footer>
  );
}

/* ================================================================== *
 *  LOCATION PICKER
 * ================================================================== */

