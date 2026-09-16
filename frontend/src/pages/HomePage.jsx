import React from "react";
import { MapPin, FileText, Bot, ShieldCheck, BookOpen, Search, IndianRupee, Landmark, Sparkles, Stamp, ArrowRight } from "lucide-react";
import { HeroArt, LocationFields, TopoPattern } from "../components/location";
import { Btn, Card, IconBadge, Pill } from "../components/ui";
import { DOCUMENTS } from "../data/documents";
import { LOCATIONS } from "../data/locations";
import { useTr } from "../i18n";
import { C } from "../theme";

export function HomePage({ t, onNav, loc, setLoc, toast, docsChecked }) {
  const tr = useTr();
  const features = [
    [BookOpen, tr("Step-by-step guidance"), tr("The full land buying procedure for your district, in order.")],
    [FileText, tr("Required documents"), tr("What each document is, why it is needed and where to get it.")],
    [IndianRupee, tr("Registration charges"), tr("Stamp duty and registration fee estimated for your state.")],
    [Bot, tr("AI legal assistant"), tr("Ask a question in plain language and get a district-aware answer.")],
  ];
  const stats = [
    [Landmark, String(Object.keys(LOCATIONS).length), tr("States covered")],
    [MapPin, String(Object.values(LOCATIONS).reduce((n, s) => n + Object.keys(s).length, 0)), tr("Districts")],
    [BookOpen, String(Object.values(LOCATIONS).reduce((n, s) => n + Object.values(s).reduce((m, t) => m + t.length, 0), 0)), tr("Talukas")],
    [FileText, String(DOCUMENTS.length), tr("Documents explained")],
    [Sparkles, "AI", tr("Powered guidance")],
  ];
  const steps = [
    [Search, tr("Search your location"), tr("Choose state, district and taluka to load local information.")],
    [FileText, tr("Get your procedure"), tr("See the steps, documents, offices and charges that apply to you.")],
    [Bot, tr("Ask the AI Assistant"), tr("Clear up anything you did not understand, in your own language.")],
    [ShieldCheck, tr("Buy with confidence"), tr("Run the legal checks before you release payment.")],
  ];

  return (
    <div>
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(165deg, #FFFFFF 0%, ${C.tint2} 55%, ${C.tint} 100%)`, borderBottom: `1px solid ${C.line}`, minHeight: 520 }}
      >
        {/* Layer 1 — contour texture from the logo emblem */}
        <TopoPattern id="heroTopo" />
        {/* Layer 2 — the landscape, full width so no side is ever empty */}
        <HeroArt />
        {/* Layer 3 — scrim keeps the copy readable wherever the art lands */}
        <div
          style={{
            position: "absolute", inset: 0,
            background:
              "linear-gradient(100deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.95) 34%, rgba(255,255,255,0.72) 56%, rgba(255,255,255,0.18) 78%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div className="wrap mx-auto px-4 pt-14 pb-10 relative" style={{ maxWidth: 1180 }}>
          <div style={{ maxWidth: 620 }}>
            <Pill size="md"><Sparkles size={12} /> {tr("AI-assisted decision support")}</Pill>
            <h1 className="mt-4 heroH1 font-extrabold lh106 tracking-tight" style={{ color: C.ink }}>
              {t("hero.t1")}<br />{t("hero.t2")}<br /><span style={{ color: C.green }}>{t("hero.t3")}</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: C.body }}>{t("hero.sub")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn size="lg" icon={ArrowRight} onClick={() => onNav("landBuying")}>{t("btn.getStarted")}</Btn>
              <Btn size="lg" variant="outline" icon={Bot} onClick={() => onNav("ai")}>{t("btn.askAI")}</Btn>
            </div>
          </div>

          <Card className="mt-9" style={{ maxWidth: 820, boxShadow: "0 10px 30px rgba(16,58,32,.10)" }}>
            <div className="text-sm font-bold mb-3" style={{ color: C.ink }}>{t("hero.find")}</div>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", alignItems: "end" }}>
              <LocationFields loc={loc} setLoc={setLoc} t={t} layout="flat" />
              <Btn full icon={Search} onClick={() => {
                if (!loc.state || !loc.district) return toast(t("toast.pickStateDistrict"), "amber");
                onNav("landBuying");
              }}>{t("btn.search")}</Btn>
            </div>
          </Card>
        </div>
      </div>

      <div className="wrap mx-auto px-4">
        {/* Features */}
        <div className="-mt-6 relative" style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}>
          {features.map(([Icon, title, body]) => (
            <Card key={title} className="hover:shadow-md transition-shadow" style={{ boxShadow: "0 4px 14px rgba(16,58,32,.05)" }}>
              <IconBadge icon={Icon} />
              <div className="mt-3 text-sm font-bold" style={{ color: C.ink }}>{title}</div>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: C.mute }}>{body}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <Card className="mt-4 py-6" style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
          {stats.map(([Icon, num, label]) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={26} style={{ color: C.green }} strokeWidth={1.7} />
              <div>
                <div className="text-xl font-extrabold" style={{ color: C.ink }}>{num}</div>
                <div className="t11" style={{ color: C.mute }}>{label}</div>
              </div>
            </div>
          ))}
        </Card>

        {/* How it works */}
        <div className="mt-14 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: C.ink }}>{tr("How BhumiGuide Intelligence works")}</h2>
          <p className="mt-2 text-sm" style={{ color: C.mute }}>{tr(
            "Four steps from \"I have no idea where to start\" to a checked, documented purchase."
          )}</p>
        </div>
        <div className="mt-8" style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {steps.map(([Icon, title, body], i) => (
            <Card key={title} className="relative">
              <div className="flex items-center gap-3">
                <IconBadge icon={Icon} size={44} />
                <span className="text-3xl font-extrabold" style={{ color: C.line }}>{i + 1}</span>
              </div>
              <div className="mt-3 text-sm font-bold" style={{ color: C.ink }}>{title}</div>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: C.mute }}>{body}</p>
            </Card>
          ))}
        </div>

        {/* Differentiators */}
        <div className="mt-14 grid gap-4 l3">
          <Card className="lsp2" style={{ background: C.tint2, borderColor: `${C.green}22` }}>
            <Pill><Sparkles size={11} /> {tr("What makes this different")}</Pill>
            <h3 className="mt-3 text-xl font-extrabold" style={{ color: C.ink }}>{tr("Not a list of documents. A procedure built for your case.")}</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: C.body }}>
              {tr("Two buyers in the same district can need different steps. Inherited land needs heir consent. A shop on farmland needs conversion. A company buyer needs a board resolution. The Smart Procedure Generator asks five questions and rewrites the checklist around your answers.")}

            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Btn size="sm" icon={Sparkles} onClick={() => onNav("landBuying")}>{tr("Open Smart Procedure Generator")}</Btn>
              <Btn size="sm" variant="outline" icon={ShieldCheck} onClick={() => onNav("legal")}>{tr("Try document readiness check")}</Btn>
            </div>
          </Card>
          <Card>
            <div className="text-sm font-bold mb-3" style={{ color: C.ink }}>{tr("Your document checklist")}</div>
            <div className="text-3xl font-extrabold" style={{ color: C.green }}>{docsChecked}/{DOCUMENTS.length}</div>
            <div className="text-xs mt-1" style={{ color: C.mute }}>{tr("documents marked as collected")}</div>
            <div className="h-2 rounded-full mt-4" style={{ background: C.line2 }}>
              <div className="h-2 rounded-full transition-all" style={{ width: `${(docsChecked / DOCUMENTS.length) * 100}%`, background: C.green }} />
            </div>
            <div className="mt-4"><Btn size="sm" variant="outline" full icon={FileText} onClick={() => onNav("documents")}>{tr("Open checklist")}</Btn></div>
          </Card>
        </div>

      </div>
    </div>
  );
}

