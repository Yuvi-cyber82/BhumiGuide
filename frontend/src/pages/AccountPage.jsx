import React, { useState } from "react";
import { Home, Bell, Check, CheckCircle2, Lock, Trash2, User, Activity, Folder, RefreshCw } from "lucide-react";
import { Breadcrumb, Btn, Card, IconBadge, PageHead, Pill, Select, Toggle } from "../components/ui";
import { DOCUMENTS } from "../data/documents";
import { LANGS, useTr } from "../i18n";
import { C } from "../theme";

/* ================================================================== *
 *  MY ACCOUNT
 * ================================================================== */

export const ACCOUNT_SECTIONS = [
  ["profile", "Profile overview", User],
  ["notifications", "Notification preferences", Bell],
  ["security", "Security settings", Lock],
  ["activity", "Activity history", Activity],
  ["documents", "Saved documents", Folder],
  ["delete", "Delete account", Trash2],
];

export function AccountPage({ t, onNav, auth, onLogin, toast, prefs, setPrefs, lang, setLang, checked, activity, onLogout, onVerifyEmail }) {
  const tr = useTr();
  const [sec, setSec] = useState("profile");
  if (!auth)
    return (
      <div className="wrap mx-auto px-4 py-20 text-center">
        <IconBadge icon={User} size={56} />
        <h2 className="mt-4 text-xl font-extrabold" style={{ color: C.ink }}>{tr("Sign in to manage your account")}</h2>
        <div className="mt-5 flex gap-2 justify-center">
          <Btn onClick={() => onLogin("login")}>{tr("Login")}</Btn>
          <Btn variant="outline" onClick={() => onLogin("signup")}>{tr("Create an account")}</Btn>
        </div>
      </div>
    );

  return (
    <div className="wrap mx-auto px-4 py-7">
      <Breadcrumb items={[{ label: tr("Home"), page: "home" }, { label: t("nav.account") }]} onNav={onNav} />
      <PageHead title={tr("My account")} sub={tr("Profile, notifications and preferences.")} />

      <div className="grid gap-5 l4">
        <Card pad={false} className="h-fit">
          <div className="p-2">
            {ACCOUNT_SECTIONS.map(([key, label, Icon]) => (
              <button key={key} onClick={() => setSec(key)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2.5"
                style={{ background: sec === key ? C.tint : "transparent", color: key === "delete" ? C.red : sec === key ? C.green : C.body }}>
                <Icon size={15} />{tr(label)}
              </button>
            ))}
          </div>
        </Card>

        <div className="lsp3 space-y-4">
          {sec === "profile" && (
            <>
              <Card>
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: C.tint }}>
                    <User size={30} style={{ color: C.green }} />
                  </div>
                  <div className="flex-1 mw180">
                    <div className="text-lg font-extrabold" style={{ color: C.ink }}>{auth.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: C.mute }}>{auth.email}</div>
                    <div className="mt-2 flex gap-1.5 flex-wrap items-center">
                      <Pill tone="green"><CheckCircle2 size={10} /> {tr("Account active")}</Pill>
                      <Pill tone="gray">{tr("Member since today")}</Pill>
                      {auth.emailVerified ? (
                        <Pill tone="green"><CheckCircle2 size={10} /> {tr("Email verified")}</Pill>
                      ) : (
                        <button onClick={onVerifyEmail} className="inline-flex">
                          <Pill tone="amber">{tr("Email not verified — verify now")}</Pill>
                        </button>
                      )}
                    </div>
                  </div>
                  <Btn size="sm" variant="outline" onClick={() => toast(tr("Profile editing is not part of this prototype."))}>{tr("Edit profile")}</Btn>
                </div>
              </Card>
              <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
                {[[tr("Documents collected"), `${checked.length}/${DOCUMENTS.length}`], [tr("Language"), LANGS.find((l) => l.code === lang).label], [tr("Actions logged"), activity.length]].map(([k, v]) => (
                  <Card key={k}>
                    <div className="t11" style={{ color: C.mute }}>{k}</div>
                    <div className="text-lg font-extrabold mt-1" style={{ color: C.ink }}>{v}</div>
                  </Card>
                ))}
              </div>
              <Card>
                <div className="text-sm font-bold mb-3" style={{ color: C.ink }}>{tr("Preferences")}</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold" style={{ color: C.ink }}>{tr("Language")}</div>
                      <div className="t11" style={{ color: C.mute }}>{tr("Used across the site and in AI answers")}</div>
                    </div>
                    <div className="w-40"><Select value={LANGS.find((l) => l.code === lang).label} options={LANGS.map((l) => l.label)} placeholder={tr("Language")}
                      onChange={(v) => setLang(LANGS.find((l) => l.label === v).code)} /></div>
                  </div>
                </div>
              </Card>
            </>
          )}

          {sec === "notifications" && (
            <Card>
              <div className="text-sm font-bold mb-1" style={{ color: C.ink }}>{tr("Notification preferences")}</div>
              <p className="text-xs mb-4" style={{ color: C.mute }}>{tr("Choose what BhumiGuide tells you about.")}</p>
              <div className="space-y-1">
                {[["email", tr("Email updates"), tr("Verification results and document reminders")],
                ["sms", tr("SMS alerts"), tr("Only for important account updates")],
                ["push", tr("Browser notifications"), tr("Instant alerts while the site is open")],
                ["docUpdates", tr("Document updates"), tr("When an uploaded document is analysed")],
                ["news", tr("General announcements"), tr("New features and land law changes")]].map(([key, label, desc]) => (
                  <div key={key} className="flex items-center justify-between gap-4 py-3" style={{ borderBottom: `1px solid ${C.line2}` }}>
                    <div>
                      <div className="text-xs font-semibold" style={{ color: C.ink }}>{label}</div>
                      <div className="t11 mt-0.5" style={{ color: C.mute }}>{desc}</div>
                    </div>
                    <Toggle on={prefs[key]} onChange={(v) => setPrefs({ ...prefs, [key]: v })} />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Btn size="sm" icon={Check} onClick={() => toast(tr("Preferences saved."))}>{tr("Save preferences")}</Btn>
                <Btn size="sm" variant="ghost" icon={RefreshCw}
                  onClick={() => { setPrefs({ email: true, sms: true, push: true, docUpdates: true, news: false }); toast(tr("Reset to defaults.")); }}>
                  {tr("Reset to default")}
                </Btn>
              </div>
            </Card>
          )}

          {sec === "security" && (
            <Card>
              <div className="text-sm font-bold mb-4" style={{ color: C.ink }}>{tr("Security settings")}</div>
              {[[tr("Change password"), tr("Last changed today"), tr("Change")], [tr("Two-factor authentication"), tr("Adds a code at login"), tr("Enable")],
              [tr("Login alerts"), tr("Email me about new device logins"), tr("Manage")], [tr("Active sessions"), "1 device signed in", tr("View")]].map(([h, b, action]) => (
                <div key={h} className="flex items-center justify-between gap-4 py-3" style={{ borderBottom: `1px solid ${C.line2}` }}>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: C.ink }}>{h}</div>
                    <div className="t11 mt-0.5" style={{ color: C.mute }}>{b}</div>
                  </div>
                  <Btn size="sm" variant="ghost" onClick={() => toast(tr("Security settings are not wired up in the prototype."))}>{action}</Btn>
                </div>
              ))}
            </Card>
          )}

          {sec === "activity" && (
            <Card>
              <div className="text-sm font-bold mb-3" style={{ color: C.ink }}>{tr("Activity history")}</div>
              {activity.length === 0 ? (
                <div className="text-center py-12">
                  <Activity size={28} style={{ color: C.line }} className="mx-auto" />
                  <p className="text-xs mt-2" style={{ color: C.mute }}>{tr("No activity recorded yet in this session.")}</p>
                </div>
              ) : activity.map((a, i) => (
                <div key={i} className="flex gap-3 py-3" style={{ borderBottom: `1px solid ${C.line2}` }}>
                  <CheckCircle2 size={15} style={{ color: C.green }} className="shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold" style={{ color: C.ink }}>{a.title}</div>
                    <div className="t10" style={{ color: C.mute }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </Card>
          )}

          {sec === "documents" && (
            <Card>
              <div className="text-sm font-bold mb-3" style={{ color: C.ink }}>{tr("Saved documents")}</div>
              {checked.length === 0 ? (
                <div className="text-center py-12">
                  <Folder size={28} style={{ color: C.line }} className="mx-auto" />
                  <div className="text-sm font-bold mt-3" style={{ color: C.ink }}>{tr("No documents marked yet")}</div>
                  <p className="text-xs mt-1 mb-4" style={{ color: C.mute }}>{tr("Tick documents on the Documents page as you collect them.")}</p>
                  <Btn size="sm" onClick={() => onNav("documents")}>{tr("Open documents")}</Btn>
                </div>
              ) : (
                <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                  {checked.map((id) => {
                    const d = DOCUMENTS.find((x) => x.id === id);
                    return (
                      <div key={id} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5" style={{ border: `1px solid ${C.line2}` }}>
                        <CheckCircle2 size={15} style={{ color: C.green }} />
                        <span className="text-xs font-semibold" style={{ color: C.ink }}>{tr(d.name)}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </Card>
          )}

          {sec === "delete" && (
            <Card style={{ borderColor: `${C.red}44` }}>
              <div className="text-sm font-bold mb-1" style={{ color: C.red }}>{tr("Delete your account")}</div>
              <p className="text-xs mb-4 leading-relaxed" style={{ color: C.body }}>
                {tr("This removes your profile, saved documents and verification history. It cannot be undone. In this prototype it simply signs you out and clears the session.")}

              </p>
              <Btn variant="danger" icon={Trash2} onClick={() => { onLogout(); toast(tr("Account deleted and session cleared.")); }}>{tr("Delete account")}</Btn>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

