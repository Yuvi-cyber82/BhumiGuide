import React, { useState, useMemo, useEffect } from "react";
import { Home, MapPin, Bot, AlertTriangle, ChevronRight, Check, X, Download, Clock, Phone, Sparkles, Navigation, RefreshCw } from "lucide-react";
import { LocationBanner, LocationFields } from "../components/location";
import { Breadcrumb, Btn, Card, HelpCard, Modal, Notice, PageHead, Pill, Select } from "../components/ui";
import { rulesFor } from "../data/locations";
import { officesFor } from "../data/offices";
import { CONDITIONAL_STEPS, PROCEDURE } from "../data/procedure";
import { fillText, useFill, useTr } from "../i18n";
import { C } from "../theme";

/* ================================================================== *
 *  LAND BUYING — procedure, smart generator, office locator
 * ================================================================== */

export const GEN_QUESTIONS = [
  { key: "landType", q: "What kind of land are you buying?", opts: ["Agricultural", "Residential", "Commercial", "Industrial"] },
  { key: "use", q: "What will you use it for?", opts: ["Farming", "Build a house or shop", "Hold as investment"] },
  { key: "area", q: "Is the land rural or urban?", opts: ["Rural", "Urban"] },
  { key: "inherited", q: "Did the seller inherit this land?", opts: ["Yes", "No", "Not sure"] },
  { key: "joint", q: "Is it jointly owned by more than one person?", opts: ["Yes", "No", "Not sure"] },
  { key: "buyer", q: "Who is buying?", opts: ["Individual", "Company", "Partnership firm"] },
  { key: "loan", q: "Are you taking a home or land loan?", opts: ["Yes", "No"] },
];

export function buildProcedure(p) {
  if (!p) return PROCEDURE.map((s) => ({ ...s, conditional: false }));
  const out = [];
  const push = (s, why) => out.push({ ...s, conditional: !!why, reason: why });
  push(PROCEDURE[0]);
  push(PROCEDURE[1]);
  if (p.inherited === "Yes" || p.inherited === "Not sure")
    push(CONDITIONAL_STEPS.inherited, p.inherited === "Yes" ? "Seller inherited the land" : "Inheritance status unconfirmed — check it");
  if (p.joint === "Yes" || p.joint === "Not sure")
    push(CONDITIONAL_STEPS.joint, p.joint === "Yes" ? "Land has more than one owner" : "Ownership count unconfirmed — check it");
  push(PROCEDURE[2]);
  if (p.area === "Urban") push(CONDITIONAL_STEPS.urban, "Urban plot — layout approval matters");
  push(PROCEDURE[3]);
  if (p.loan === "Yes") push(CONDITIONAL_STEPS.loan, "You are taking a loan");
  if (p.buyer === "Company" || p.buyer === "Partnership firm") push(CONDITIONAL_STEPS.company, ["Buyer is a {0}", p.buyer]);
  push(PROCEDURE[4]);
  push(PROCEDURE[5]);
  push(PROCEDURE[6]);
  if (p.landType === "Agricultural" && p.use === "Build a house or shop")
    push(CONDITIONAL_STEPS.agriToNonAgri, "Farmland being used for construction");
  return out;
}

export function SmartGenerator({ open, onClose, profile, setProfile, toast }) {
  const tr = useTr();
  const fill = useFill();
  const [draft, setDraft] = useState(profile || {});
  const [i, setI] = useState(0);
  useEffect(() => { if (open) { setDraft(profile || {}); setI(0); } }, [open]);
  const q = GEN_QUESTIONS[i];
  const last = i === GEN_QUESTIONS.length - 1;
  return (
    <Modal open={open} onClose={onClose} width={520}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <Pill><Sparkles size={11} /> {tr("Smart Procedure Generator")}</Pill>
            <h3 className="mt-3 text-lg font-extrabold" style={{ color: C.ink }}>{fill("Question {0} of {1}", i + 1, GEN_QUESTIONS.length)}</h3>
          </div>
          <button onClick={onClose}><X size={18} style={{ color: C.mute }} /></button>
        </div>
        <div className="h-1.5 rounded-full my-4" style={{ background: C.line2 }}>
          <div className="h-1.5 rounded-full transition-all" style={{ width: `${((i + 1) / GEN_QUESTIONS.length) * 100}%`, background: C.green }} />
        </div>
        <div className="text-base font-bold mb-4" style={{ color: C.ink }}>{tr(q.q)}</div>
        <div className="space-y-2">
          {q.opts.map((o) => (
            <button
              key={o}
              onClick={() => {
                const next = { ...draft, [q.key]: o };
                setDraft(next);
                if (last) { setProfile(next); onClose(); toast(tr("Procedure rebuilt for your situation.")); }
                else setI(i + 1);
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between"
              style={{ border: `1px solid ${draft[q.key] === o ? C.green : C.line}`, background: draft[q.key] === o ? C.tint2 : "#fff", color: C.ink }}
            >
              {tr(o)}
              <ChevronRight size={15} style={{ color: C.mute }} />
            </button>
          ))}
        </div>
        {i > 0 && (
          <button onClick={() => setI(i - 1)} className="mt-4 text-xs font-semibold" style={{ color: C.mute }}>← {tr("Back")}</button>
        )}
      </div>
    </Modal>
  );
}

export function OfficeLocator({ loc, toast }) {
  const tr = useTr();
  const fill = useFill();
  const offices = officesFor(loc.state, loc.district, loc.taluka);
  const [openIdx, setOpenIdx] = useState(0);
  if (!offices.length)
    return <Notice tone="blue" icon={MapPin}>{tr("Select a district to see the government offices you will need to visit.")}</Notice>;
  return (
    <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
      <div className="lsp2 space-y-2">
        {offices.map((o, i) => (
          <button
            key={o.type}
            onClick={() => setOpenIdx(i)}
            className="w-full text-left rounded-xl px-4 py-3 flex items-start gap-3"
            style={{ border: `1px solid ${openIdx === i ? C.green : C.line}`, background: openIdx === i ? C.tint2 : "#fff" }}
          >
            <MapPin size={16} style={{ color: C.green }} className="mt-0.5 shrink-0" />
            <div className="min-w-0">
              <div className="text-sm font-bold truncate" style={{ color: C.ink }}>{o.name}</div>
              <div className="t11 mt-0.5" style={{ color: C.mute }}>{fill("{0} km away", o.distance)} · {o.open ? tr("Open now") : tr("Closed now")}</div>
            </div>
          </button>
        ))}
      </div>
      <Card className="lsp3">
        {(() => {
          const o = offices[openIdx];
          return (
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-extrabold" style={{ color: C.ink }}>{o.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: C.mute }}>{tr(o.handles)}</div>
                </div>
                <Pill tone={o.open ? "green" : "red"}>{o.open ? tr("Open now") : tr("Closed")}</Pill>
              </div>
              {/* Map placeholder */}
              <div className="mt-4 rounded-xl overflow-hidden relative" style={{ height: 150, background: "#E8F1EA", border: `1px solid ${C.line}` }}>
                <svg viewBox="0 0 400 150" className="w-full h-full">
                  <rect width="400" height="150" fill="#EDF4EF" />
                  <path d="M0 40 L400 60" stroke="#D3E2D8" strokeWidth="10" />
                  <path d="M0 110 L400 95" stroke="#D3E2D8" strokeWidth="8" />
                  <path d="M120 0 L140 150" stroke="#D3E2D8" strokeWidth="9" />
                  <path d="M280 0 L265 150" stroke="#D3E2D8" strokeWidth="7" />
                  <rect x="30" y="60" width="60" height="34" rx="3" fill="#DCE9DF" />
                  <rect x="170" y="15" width="70" height="30" rx="3" fill="#DCE9DF" />
                  <rect x="300" y="105" width="70" height="35" rx="3" fill="#DCE9DF" />
                  <g transform="translate(196,58)">
                    <path d="M0 0 C -11 0 -20 9 -20 20 C -20 35 0 52 0 52 C 0 52 20 35 20 20 C 20 9 11 0 0 0Z" fill={C.green} />
                    <circle cx="0" cy="19" r="7" fill="#fff" />
                  </g>
                </svg>
                <div className="absolute bottom-2 left-2 t10 px-2 py-1 rounded bg-white" style={{ color: C.mute }}>
                  {tr("Map preview \u00b7 connect Google Maps API for live directions")}
                </div>
              </div>
              <div className="mt-4 space-y-2.5 text-xs">
                {[[MapPin, o.address], [Clock, fill("{0} · Closed {1}", tr(o.hours), tr(o.closed))], [Phone, o.phone], [Navigation, fill("{0} km from your selected taluka", o.distance)]].map(([Icon, text], i) => (
                  <div key={i} className="flex gap-2.5">
                    <Icon size={14} style={{ color: C.green }} className="shrink-0 mt-0.5" />
                    <span style={{ color: C.body }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <a href={`https://www.google.com/maps/search/${encodeURIComponent(o.name + " " + o.address)}`} target="_blank" rel="noreferrer">
                  <Btn size="sm" icon={Navigation}>{tr("Get directions")}</Btn>
                </a>
                <Btn size="sm" variant="outline" icon={Phone} onClick={() => toast(fillText(tr, "Calling {0} — demo only.", o.phone))}>{tr("Call office")}</Btn>
              </div>
            </div>
          );
        })()}
      </Card>
    </div>
  );
}

export function LandBuyingPage({ t, onNav, loc, setLoc, toast, done, toggleDone, profile, setProfile }) {
  const tr = useTr();
  const fill = useFill();
  const [openStep, setOpenStep] = useState(null);
  const [genOpen, setGenOpen] = useState(false);
  const [editLoc, setEditLoc] = useState(!loc.district);
  const steps = useMemo(() => buildProcedure(profile), [profile]);
  const rules = rulesFor(loc.state);
  const completed = steps.filter((s) => done.includes(s.id)).length;

  const download = () => {
    const lines = [
      tr("BhumiGuide Intelligence — Land Buying Procedure"),
      `${tr("Location")}: ${[loc.state, loc.district, loc.taluka].filter(Boolean).map(tr).join(" > ") || tr("Not selected")}`,
      profile ? `Case: ${Object.values(profile).join(" · ")}` : tr("Case: general procedure"),
      "",
      ...steps.map((s, i) => `${i + 1}. ${s.title}${s.conditional ? "  [added for your case]" : ""}\n   Office: ${s.office}\n   Time: ${s.time}   Fees: ${s.fee}\n   ${s.short}`),
      "",
      tr("Charges are indicative. Confirm with the local Sub-Registrar office."),
    ].join("\n");
    try {
      const blob = new Blob([lines], { type: "text/plain" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "bhumiguide-procedure.txt";
      a.click();
      toast(tr("Procedure downloaded."));
    } catch (e) {
      toast(tr("Download blocked in preview. It works in a normal browser tab."), "amber");
    }
  };

  return (
    <div className="wrap mx-auto px-4 py-7">
      <Breadcrumb items={[{ label: tr("Home"), page: "home" }, { label: t("nav.landBuying") }]} onNav={onNav} />

      <div className="grid gap-5 l4">
        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={17} style={{ color: C.green }} />
              <span className="text-sm font-bold" style={{ color: C.ink }}>{tr("Select location")}</span>
            </div>
            {editLoc ? (
              <>
                <LocationFields loc={loc} setLoc={setLoc} t={t} />
                <div className="mt-4"><Btn full size="sm" onClick={() => {
                  if (!loc.state || !loc.district) return toast(tr("Choose a state and district first."), "amber");
                  setEditLoc(false); toast(tr("Procedure loaded for your district."));
                }}>{tr("Load procedure")}</Btn></div>
              </>
            ) : (
              <>
                <div className="space-y-2 text-sm">
                  {[[tr("State"), tr(loc.state)], [tr("District"), tr(loc.district)], [tr("Taluka"), loc.taluka ? tr(loc.taluka) : "—"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span style={{ color: C.mute }}>{k}</span>
                      <span className="font-semibold" style={{ color: C.ink }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4"><Btn full size="sm" variant="outline" onClick={() => setEditLoc(true)}>{t("btn.changeLocation")}</Btn></div>
              </>
            )}
          </Card>

          <Card style={{ background: C.tint2, borderColor: `${C.green}25` }}>
            <Pill><Sparkles size={11} /> {tr("Smart Procedure")}</Pill>
            <div className="mt-2.5 text-sm font-bold" style={{ color: C.ink }}>{tr("Personalise these steps")}</div>
            <p className="text-xs mt-1 mb-3 leading-relaxed" style={{ color: C.mute }}>
              {tr("Seven quick questions. Inherited land, joint owners, urban plots and company buyers each add their own steps.")}
            </p>
            <Btn size="sm" full icon={Sparkles} onClick={() => setGenOpen(true)}>
              {profile ? tr("Redo the questions") : tr("Start")}
            </Btn>
            {profile && (
              <button onClick={() => { setProfile(null); toast(tr("Back to the general procedure.")); }} className="mt-2 w-full t11 font-semibold" style={{ color: C.mute }}>
                {tr("Clear and show general procedure")}
              </button>
            )}
          </Card>

          <Card>
            <div className="text-sm font-bold mb-2" style={{ color: C.ink }}>{tr("Your progress")}</div>
            <div className="flex items-end gap-1.5">
              <span className="text-2xl font-extrabold" style={{ color: C.green }}>{completed}</span>
              <span className="text-sm mb-0.5" style={{ color: C.mute }}>{fill("of {0} steps done", steps.length)}</span>
            </div>
            <div className="h-2 rounded-full mt-3" style={{ background: C.line2 }}>
              <div className="h-2 rounded-full transition-all" style={{ width: `${(completed / steps.length) * 100}%`, background: C.green }} />
            </div>
          </Card>

          <HelpCard t={t} onNav={onNav} />
        </div>

        {/* Main */}
        <div className="lsp3 space-y-5">
          <PageHead
            title={t("page.landBuying")}
            sub={loc.state
              ? loc.district
                ? fillText(tr, "The legal process to buy land in {0}, {1}, in the order you should do it.", tr(loc.district), tr(loc.state))
                : fillText(tr, "The legal process to buy land in {0}, in the order you should do it.", tr(loc.state))
              : tr("Select a location on the left to load your district's procedure.")}
          />
          <LocationBanner loc={loc} onChange={() => setEditLoc(true)} t={t} />

          {profile && (
            <div className="flex flex-wrap gap-2">
              {Object.entries(profile).map(([k, v]) => <Pill key={k} tone="gray">{v}</Pill>)}
              <Pill tone="green"><Sparkles size={11} /> {steps.filter((s) => s.conditional).length} extra steps added for you</Pill>
            </div>
          )}

          <Card pad={false}>
            <div className="mdGrid g12 gap-3 px-5 py-3 t11 font-bold uppercase tracking-wide" style={{ background: "#FAFBFA", borderBottom: `1px solid ${C.line}`, color: C.mute }}>
              <div className="sp1">{tr("Step")}</div><div className="sp4">{tr("Procedure")}</div>
              <div className="sp3">{tr("Responsible office")}</div><div className="sp2">{tr("Time")}</div><div className="sp2">{tr("Fees")}</div>
            </div>
            {steps.map((s, i) => {
              const isDone = done.includes(s.id);
              const isOpen = openStep === s.id;
              return (
                <div key={s.id} style={{ borderBottom: `1px solid ${C.line2}` }}>
                  <div className="grid m12 gap-3 px-5 py-4 items-start">
                    <div className="msp1 flex items-center gap-2">
                      <button
                        onClick={() => toggleDone(s.id)}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ background: isDone ? C.green : C.tint, color: isDone ? "#fff" : C.green, border: `1px solid ${isDone ? C.green : "transparent"}` }}
                        title={isDone ? tr("Mark as not done") : tr("Mark as done")}
                      >
                        {isDone ? <Check size={14} /> : i + 1}
                      </button>
                    </div>
                    <div className="msp4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold" style={{ color: C.ink, textDecoration: isDone ? "line-through" : "none" }}>{tr(s.title)}</span>
                        {s.conditional && <Pill><Sparkles size={10} /> {tr("For your case")}</Pill>}
                      </div>
                      <p className="text-xs mt-1" style={{ color: C.mute }}>{tr(s.short)}</p>
                      {s.reason && (
                        <p className="t11 mt-1 font-semibold" style={{ color: C.green }}>
                          {tr("Added because:")}{" "}
                          {Array.isArray(s.reason) ? fill(s.reason[0], tr(String(s.reason[1]))) : tr(s.reason)}
                        </p>
                      )}
                    </div>
                    <div className="msp3 text-xs" style={{ color: C.body }}>
                      <span className="mdHide font-semibold">{tr("Office:")} </span>{tr(s.office)}
                    </div>
                    <div className="msp2 text-xs" style={{ color: C.body }}>
                      <span className="mdHide font-semibold">{tr("Time:")} </span>{tr(s.time)}
                    </div>
                    <div className="msp2 flex flex-col gap-2">
                      <span className="text-xs" style={{ color: C.body }}>{tr(s.fee)}</span>
                      <Btn size="sm" variant="outline" onClick={() => setOpenStep(isOpen ? null : s.id)}>
                        {isOpen ? tr("Hide") : t("btn.viewDetails")}
                      </Btn>
                    </div>
                  </div>
                  {isOpen && (
                    <div className="px-5 pb-5" style={{ background: "#FBFCFB" }}>
                      <div className="grid gap-4 m2 pt-4">
                        <div>
                          <div className="text-xs font-bold mb-1.5" style={{ color: C.green }}>{tr("Why this step matters")}</div>
                          <p className="text-xs leading-relaxed" style={{ color: C.body }}>{tr(s.why)}</p>
                          {loc.state && s.id === "s2" && (
                            <p className="text-xs mt-2 leading-relaxed" style={{ color: C.body }}>
                              {fill(
                                "In {0} this record is called the {1} and is issued by the {2}.",
                                tr(loc.state),
                                <b>{tr(rules.landRecord)}</b>,
                                tr(rules.office)
                              )}
                            </p>
                          )}
                        </div>
                        <div>
                          <div className="text-xs font-bold mb-1.5" style={{ color: C.green }}>{tr("Do this")}</div>
                          <ul className="space-y-1.5">
                            {s.doThis.map((d) => (
                              <li key={d} className="flex gap-2 text-xs" style={{ color: C.body }}>
                                <Check size={13} style={{ color: C.green }} className="shrink-0 mt-0.5" />{tr(d)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        <Btn size="sm" icon={isDone ? RefreshCw : Check} onClick={() => toggleDone(s.id)}>
                          {isDone ? tr("Mark as not done") : tr("Mark this step done")}
                        </Btn>
                        <Btn size="sm" variant="outline" icon={Bot} onClick={() => onNav("ai")}>{tr("Ask about this step")}</Btn>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs" style={{ color: C.mute }}>{tr("Save the full procedure for offline reference.")}</span>
              <Btn size="sm" icon={Download} onClick={download}>{tr("Download procedure")}</Btn>
            </div>
          </Card>

          <div>
            <h2 className="text-lg font-extrabold mb-1" style={{ color: C.ink }}>{tr("Government offices you will visit")}</h2>
            <p className="text-xs mb-4" style={{ color: C.mute }}>{tr("Addresses, working hours and distance for")} {loc.taluka || loc.district ? tr(loc.taluka || loc.district) : tr("your area")}.</p>
            <OfficeLocator loc={loc} toast={toast} />
          </div>

          <Notice tone="amber" icon={AlertTriangle} title={tr("Important")}>
            {tr("Laws, timelines and charges vary by state and district. Verify with the local authority before acting on anything here.")}
          </Notice>
        </div>
      </div>

      <SmartGenerator open={genOpen} onClose={() => setGenOpen(false)} profile={profile} setProfile={setProfile} toast={toast} />
    </div>
  );
}

