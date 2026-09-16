import React, { useState } from "react";
import { Home, MapPin, Bot, Mail, Phone, Send, CheckCircle2, Info, RefreshCw } from "lucide-react";
import { Breadcrumb, Btn, Card, Input, Label, PageHead, Select } from "../components/ui";
import { useFill, useTr } from "../i18n";
import { C, FONT } from "../theme";

/* ================================================================== *
 *  CONTACT
 * ================================================================== */

export function ContactPage({ t, onNav, toast }) {
  const tr = useTr();
  const fill = useFill();
  const [f, setF] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (v) => setF({ ...f, [k]: v });

  const submit = () => {
    if (!f.name.trim()) return toast(tr("Add your name so we know who is writing."), "amber");
    if (!f.email.includes("@")) return toast(tr("That email address does not look right."), "amber");
    if (!f.subject) return toast(tr("Pick a subject so the message reaches the right person."), "amber");
    if (f.message.trim().length < 10) return toast(tr("Add a bit more detail — at least a sentence."), "amber");
    setSent(true);
  };

  return (
    <div className="wrap mx-auto px-4 py-7">
      <Breadcrumb items={[{ label: tr("Home"), page: "home" }, { label: t("nav.contact") }]} onNav={onNav} />
      <PageHead title={t("page.contact")} sub={tr("Questions, feedback or a problem with the site \u2014 send it here.")} />

      <div className="grid gap-5 l3">
        <Card className="lsp2">
          {sent ? (
            <div className="text-center py-14">
              <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center" style={{ background: C.tint }}>
                <CheckCircle2 size={28} style={{ color: C.green }} />
              </div>
              <div className="mt-4 text-lg font-extrabold" style={{ color: C.ink }}>{tr("Message sent")}</div>
              <p className="text-sm mt-2 max-w-sm mx-auto" style={{ color: C.mute }}>
                {fill("Thanks {0} — we will reply to {1} within two working days.", f.name.split(" ")[0], f.email)}
              </p>
              <div className="mt-5"><Btn variant="outline" onClick={() => { setSent(false); setF({ name: "", email: "", phone: "", subject: "", message: "" }); }}>{tr("Send another message")}</Btn></div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-5">
                <Mail size={17} style={{ color: C.green }} />
                <span className="text-sm font-bold" style={{ color: C.ink }}>{tr("Send us a message")}</span>
              </div>
              <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                <div><Label required>{tr("Full name")}</Label><Input value={f.name} onChange={set("name")} placeholder={tr("Your full name")} /></div>
                <div><Label required>{tr("Email address")}</Label><Input value={f.email} onChange={set("email")} placeholder="you@example.com" /></div>
                <div><Label>{tr("Phone number")}</Label><Input value={f.phone} onChange={set("phone")} placeholder="+91" /></div>
                <div><Label required>{tr("Subject")}</Label>
                  <Select value={f.subject} onChange={set("subject")} placeholder={tr("Select a subject")}
                    options={[tr("General question"), tr("Land buying procedure"), tr("Document help"), tr("Legal verification"), tr("Report a problem"), tr("Feedback")]} />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <Label required>{tr("Message")}</Label>
                  <textarea value={f.message} onChange={(e) => set("message")(e.target.value)} rows={5} placeholder={tr("Tell us what you need help with\u2026")}
                    className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: C.line, fontFamily: FONT }} />
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <Btn icon={Send} onClick={submit}>{tr("Send message")}</Btn>
                <Btn variant="ghost" icon={RefreshCw} onClick={() => setF({ name: "", email: "", phone: "", subject: "", message: "" })}>{tr("Reset")}</Btn>
              </div>
            </>
          )}
        </Card>

        <div className="space-y-4">
          <Card>
            <div className="text-sm font-bold mb-4" style={{ color: C.ink }}>{tr("Other ways to reach us")}</div>
            {[[Mail, tr("Email"), "support@bhumiguide.example"], [Phone, tr("Phone"), "+91 98765 43210 · Mon–Sat, 10:00–18:00"],
            [Bot, tr("AI Assistant"), tr("Instant answers, any time")], [MapPin, tr("Office"), tr("Department of Computer Engineering, Nashik, Maharashtra")]].map(([Icon, h, b]) => (
              <div key={h} className="flex gap-3 py-2.5" style={{ borderBottom: `1px solid ${C.line2}` }}>
                <Icon size={16} style={{ color: C.green }} className="shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold" style={{ color: C.ink }}>{h}</div>
                  <div className="t11 mt-0.5" style={{ color: C.mute }}>{b}</div>
                </div>
              </div>
            ))}
            <div className="mt-4"><Btn size="sm" full icon={Bot} onClick={() => onNav("ai")}>{tr("Talk to the AI Assistant")}</Btn></div>
          </Card>
          <Card style={{ background: C.tint2, borderColor: `${C.green}22` }}>
            <div className="flex gap-3">
              <Info size={17} style={{ color: C.green }} className="shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed" style={{ color: C.body }}>
                {tr("This is an academic prototype built as a final-year project. Contact details are placeholders and messages are not actually delivered anywhere.")}

              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

