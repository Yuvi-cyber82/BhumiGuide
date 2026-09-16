import React, { useState, useRef, useEffect } from "react";
import { Home, FileText, Bot, ShieldCheck, BookOpen, Landmark, Send, Sparkles, Info, User, Scale, Stamp } from "lucide-react";
import { Breadcrumb, Btn, Card, IconBadge, Notice, PageHead, Pill } from "../components/ui";
import { fillText, useTr } from "../i18n";
import { C, FONT } from "../theme";
import { ask } from "../api/ai";

/* ================================================================== *
 *  AI ASSISTANT
 * ================================================================== */

export const POPULAR = [
  "What documents are required for buying agricultural land?",
  "What is stamp duty in my state?",
  "How do I check land ownership online?",
  "What is a 7/12 extract and how do I get it?",
];

export function AIAssistantPage({ t, onNav, loc, profile, lang }) {
  const tr = useTr();
  const [msgs, setMsgs] = useState([
    { role: "ai", text: tr(
      "Hello, I am the BhumiGuide Assistant. Ask me anything about buying land — documents, procedure, charges or offices."
    ), time: tr("Now") },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, [msgs, typing]);

  /* One answer segment: an English template plus the values to drop into it.
   * A value that is itself a name (a state, a district, "7/12 Extract") is
   * translated too; a nested segment is rendered first. */
  const renderSegments = (segments) =>
    segments
      .map((s) =>
        fillText(
          tr,
          s.t,
          ...(s.v || []).map((v) =>
            v && typeof v === "object" && v.t ? fillText(tr, v.t, ...(v.v || [])) : typeof v === "string" ? tr(v) : v
          )
        )
      )
      .join("\n\n");

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q) return;
    const history = msgs.slice(-8).map((m) => ({ role: m.role, text: m.text }));
    /* The question goes to the backend in English so its keyword matching
     * keeps working; the bubble shows it in the reader's language. */
    setMsgs((m) => [...m, { role: "user", text: tr(q), time: tr("Now") }]);
    setInput("");
    setTyping(true);
    try {
      const { answer, segments } = await ask(q, loc, profile, history, lang);
      /* The rule-based fallback answers in templates so they can be shown in
       * the chosen language; the live model already answers in it. */
      const text = segments ? renderSegments(segments) : answer;
      setMsgs((m) => [...m, { role: "ai", text, time: tr("Now") }]);
    } catch (err) {
      setMsgs((m) => [...m, { role: "ai", text: fillText(tr, "Sorry, I couldn't reach the assistant right now ({0}).", err.message), time: tr("Now") }]);
    } finally {
      setTyping(false);
    }
  };

  const topics = [
    [Bot, tr("Chat assistant"), true], [BookOpen, tr("Land buying guide"), false], [FileText, tr("Document help"), false],
    [Scale, tr("Legal terms explained"), false], [Landmark, tr("State specific rules"), false], [Info, tr("FAQs"), false],
  ];

  return (
    <div className="wrap mx-auto px-4 py-7">
      <Breadcrumb items={[{ label: tr("Home"), page: "home" }, { label: t("nav.ai") }]} onNav={onNav} />
      <div className="grid gap-5 l4">
        <div className="space-y-4">
          <Card pad={false}>
            <div className="p-4 flex items-start gap-3" style={{ borderBottom: `1px solid ${C.line2}` }}>
              <IconBadge icon={Bot} size={40} />
              <div>
                <div className="text-sm font-bold" style={{ color: C.ink }}>{tr("AI Assistant")}</div>
                <div className="t11 mt-0.5" style={{ color: C.mute }}>{tr("District-aware answers, not generic ones.")}</div>
              </div>
            </div>
            <div className="p-2">
              {topics.map(([Icon, label, active]) => (
                <button key={label}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2.5"
                  style={{ background: active ? C.tint : "transparent", color: active ? C.green : C.body }}>
                  <Icon size={15} />{tr(label)}
                </button>
              ))}
            </div>
          </Card>
          <Card style={{ background: C.tint2, borderColor: `${C.green}22` }}>
            <div className="flex items-start gap-2.5">
              <ShieldCheck size={18} style={{ color: C.green }} className="mt-0.5" />
              <div>
                <div className="text-sm font-bold" style={{ color: C.ink }}>{tr("How this works")}</div>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: C.mute }}>
                  {tr("In this prototype the assistant runs on a local rule base built from verified government guidance. In production it would be an LLM with retrieval over district-wise documents.")}

                </p>
              </div>
            </div>
          </Card>
          {loc.state && (
            <Card>
              <div className="text-xs font-bold mb-2" style={{ color: C.green }}>{tr("Answering for")}</div>
              <div className="text-sm font-bold" style={{ color: C.ink }}>{[loc.taluka, loc.district, loc.state].filter(Boolean).map(tr).join(", ")}</div>
              {profile && <div className="mt-2 flex flex-wrap gap-1">{Object.values(profile).map((v) => <Pill key={v} tone="gray">{v}</Pill>)}</div>}
            </Card>
          )}
        </div>

        <div className="lsp3 space-y-4">
          <PageHead title={t("page.ai")} sub={tr("Ask in plain language. Answers use your selected district and your Smart Procedure answers.")} />

          <div>
            <div className="text-xs font-bold mb-2" style={{ color: C.body }}>{tr("Popular questions")}</div>
            <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
              {POPULAR.map((p) => (
                <button key={p} onClick={() => send(p)}
                  className="text-left px-3.5 py-3 rounded-xl text-xs font-semibold flex items-start gap-2.5 hover:shadow-sm transition-shadow"
                  style={{ border: `1px solid ${C.line}`, background: "#fff", color: C.body }}>
                  <Sparkles size={13} style={{ color: C.green }} className="shrink-0 mt-0.5" />{tr(p)}
                </button>
              ))}
            </div>
          </div>

          <Card pad={false} className="flex flex-col" style={{ height: 460 }}>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {msgs.map((m, i) => (
                <div key={i} className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: m.role === "ai" ? C.tint : "#EFF1F0" }}>
                    {m.role === "ai" ? <Bot size={16} style={{ color: C.green }} /> : <User size={15} style={{ color: C.mute }} />}
                  </div>
                  <div className="mw80">
                    {m.role === "ai" && <div className="t11 font-bold mb-1" style={{ color: C.green }}>{tr("BhumiGuide AI")}</div>}
                    <div className="rounded-xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-line"
                      style={{ background: m.role === "ai" ? "#F7F9F8" : C.tint, color: C.body, border: `1px solid ${C.line2}` }}>
                      {m.text}
                    </div>
                    <div className={`t10 mt-1 ${m.role === "user" ? "text-right" : ""}`} style={{ color: C.mute }}>{m.time}</div>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: C.tint }}>
                    <Bot size={16} style={{ color: C.green }} />
                  </div>
                  <div className="rounded-xl px-4 py-3 flex gap-1" style={{ background: "#F7F9F8", border: `1px solid ${C.line2}` }}>
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.mute, animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
            <div className="p-3 flex gap-2" style={{ borderTop: `1px solid ${C.line2}` }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={tr("Type your question here\u2026")}
                className="flex-1 rounded-lg border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: C.line, fontFamily: FONT }}
              />
              <Btn icon={Send} onClick={() => send()}>{tr("Send")}</Btn>
            </div>
          </Card>

          <Notice tone="blue" icon={Info} title={tr("Not legal advice")}>
            {tr("Answers are for general guidance in an academic prototype. Confirm anything that affects your money with a lawyer or the concerned government office.")}

          </Notice>
        </div>
      </div>
    </div>
  );
}

