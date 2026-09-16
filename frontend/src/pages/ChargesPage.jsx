import React, { useState } from "react";
import { Home, MapPin, FileText, Calculator, Bot, AlertTriangle, Check, IndianRupee, CheckCircle2, Stamp, ClipboardList } from "lucide-react";
import { LocationFields } from "../components/location";
import { Breadcrumb, Btn, Card, IconBadge, Input, Label, Notice, PageHead, Pill, Select } from "../components/ui";
import { rulesFor } from "../data/locations";
import { fillText, inr, useFill, useTr } from "../i18n";
import { C } from "../theme";

/* ================================================================== *
 *  CHARGES CALCULATOR
 * ================================================================== */

export function ChargesPage({ t, onNav, loc, setLoc, toast }) {
  const tr = useTr();
  const fill = useFill();
  const [value, setValue] = useState("5000000");
  const [landType, setLandType] = useState("Residential");
  const [buyer, setBuyer] = useState("Male / Joint");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const v = Number(String(value).replace(/[^0-9]/g, ""));
    if (!loc.state) return toast(tr("Choose a state — stamp duty is a state subject."), "amber");
    if (!v || v < 10000) return toast(tr("Enter the property value in rupees (at least ₹10,000)."), "amber");
    const r = rulesFor(loc.state);
    let stampRate = r.stamp;
    const adjustments = [];
    /* Stored as a template + its number, not as a finished English sentence,
     * so the notice below can be rendered in the chosen language. */
    if (landType === "Agricultural" && r.agriAdj) { stampRate += r.agriAdj; adjustments.push(["Agricultural land concession {0}%", r.agriAdj]); }
    if (buyer === "Female" && r.femaleRebate) { stampRate -= r.femaleRebate; adjustments.push(["Female buyer rebate {0}%", r.femaleRebate]); }
    stampRate = Math.max(stampRate, 0);
    const stamp = (v * stampRate) / 100;
    const localBody = (v * (r.localBody || 0)) / 100;
    let reg = (v * r.reg) / 100;
    let capped = false;
    if (r.regCap && reg > r.regCap) { reg = r.regCap; capped = true; }
    const handling = 5000, misc = 2000;
    setResult({ v, stampRate, stamp, reg, capped, localBody, localRate: r.localBody, handling, misc, adjustments, total: stamp + reg + localBody + handling + misc, baseStamp: r.stamp, regRate: r.reg, cap: r.regCap });
  };

  return (
    <div className="wrap mx-auto px-4 py-7">
      <Breadcrumb items={[{ label: tr("Home"), page: "home" }, { label: t("nav.charges") }]} onNav={onNav} />
      <PageHead title={t("page.charges")} sub={tr("An indicative estimate of stamp duty, registration fee and the smaller charges around them.")} />

      <div className="grid gap-5 l5">
        <Card className="lsp2">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={17} style={{ color: C.green }} />
            <span className="text-sm font-bold" style={{ color: C.ink }}>{tr("Property details")}</span>
          </div>
          <div className="space-y-3">
            <LocationFields loc={loc} setLoc={setLoc} t={t} />
            <div>
              <Label required>{tr("Property value (market value)")}</Label>
              <Input value={value} onChange={(v) => setValue(v.replace(/[^0-9]/g, ""))} placeholder="50,00,000" prefix="₹" />
              <div className="t11 mt-1" style={{ color: C.mute }}>
                {fill("{0} · duty applies on the higher of this and the circle rate", value ? inr(Number(value)) : tr("Enter value in INR"))}
              </div>
            </div>
            <div>
              <Label required>{tr("Land type")}</Label>
              <Select value={landType} onChange={setLandType} placeholder={tr("Select")} options={["Agricultural", "Residential", "Commercial", "Industrial"]} label={tr} />
            </div>
            <div>
              <Label>{tr("Buyer")}</Label>
              <Select value={buyer} onChange={setBuyer} placeholder={tr("Select")} options={["Male / Joint", "Female", "Company"]} label={tr} />
              <div className="t11 mt-1" style={{ color: C.mute }}>{tr("Several states charge less stamp duty when the buyer is a woman.")}</div>
            </div>
            <Btn full icon={Calculator} onClick={calculate}>{tr("Calculate charges")}</Btn>
          </div>
        </Card>

        <div className="lsp3 space-y-4">
          {!result ? (
            <Card className="h-full flex flex-col items-center justify-center text-center py-16">
              <IconBadge icon={Calculator} size={56} />
              <div className="mt-4 text-sm font-bold" style={{ color: C.ink }}>{tr("Your estimate appears here")}</div>
              <p className="text-xs mt-1.5 max-w-xs" style={{ color: C.mute }}>
                {tr("Fill in the location and property value, then calculate. Rates differ by state, so the state field matters most.")}
              </p>
            </Card>
          ) : (
            <>
              <Card pad={false}>
                <div className="px-5 py-4 flex items-center justify-between flex-wrap gap-2" style={{ borderBottom: `1px solid ${C.line2}` }}>
                  <div className="flex items-center gap-2">
                    <IconBadge icon={IndianRupee} size={34} />
                    <span className="text-sm font-bold" style={{ color: C.ink }}>{tr("Estimated charges —")} {loc.state}</span>
                  </div>
                  <Pill tone="gray">{tr("Property value")} {inr(result.v)}</Pill>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "#FAFBFA", color: C.mute }}>
                      <th className="text-left px-5 py-2.5 t11 font-bold uppercase">{tr("Charge type")}</th>
                      <th className="text-left px-3 py-2.5 t11 font-bold uppercase">{tr("Rate")}</th>
                      <th className="text-right px-5 py-2.5 t11 font-bold uppercase">{tr("Amount")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [tr("Stamp duty"), `${result.stampRate}%`, result.stamp, tr("Paid to the state government on the property value.")],
                      [tr("Registration fee"), result.capped ? fillText(tr, "{0}% (capped)", result.regRate) : `${result.regRate}%`, result.reg, result.capped ? fillText(tr, "Capped at {0} in {1}.", inr(result.cap), tr(loc.state)) : tr("Charged by the Sub-Registrar for registering the deed.")],
                      ...(result.localRate ? [[tr("Local body / cess"), `${result.localRate}%`, result.localBody, tr("Levied by the municipal body or corporation.")]] : []),
                      [tr("Document handling"), "—", result.handling, tr("Drafting, printing and processing charges.")],
                      [tr("Miscellaneous"), "—", result.misc, tr("Agent, notary and small office charges.")],
                    ].map(([label, rate, amt, note]) => (
                      <tr key={label} style={{ borderTop: `1px solid ${C.line2}` }}>
                        <td className="px-5 py-3">
                          <div className="font-semibold" style={{ color: C.ink }}>{label}</div>
                          <div className="t11 mt-0.5" style={{ color: C.mute }}>{note}</div>
                        </td>
                        <td className="px-3 py-3" style={{ color: C.body }}>{rate}</td>
                        <td className="px-5 py-3 text-right font-semibold" style={{ color: C.ink }}>{inr(amt)}</td>
                      </tr>
                    ))}
                    <tr style={{ background: C.tint }}>
                      <td className="px-5 py-4 font-extrabold" style={{ color: C.ink }} colSpan={2}>{tr("Total estimated amount")}</td>
                      <td className="px-5 py-4 text-right text-lg font-extrabold" style={{ color: C.green }}>{inr(result.total)}</td>
                    </tr>
                  </tbody>
                </table>
              </Card>

              {result.adjustments.length > 0 && (
                <Notice tone="green" icon={CheckCircle2} title={tr("Concessions applied")}>
                  {fill(
                    "{0} — base stamp duty in {1} is {2}%, you are being charged {3}%.",
                    result.adjustments.map(([text, n]) => fill(text, n)).reduce((a, b) => (a.length ? [...a, " · ", ...b] : b), []),
                    tr(loc.state),
                    result.baseStamp,
                    result.stampRate
                  )}
                </Notice>
              )}

              <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                <Card>
                  <div className="text-xs font-bold mb-2" style={{ color: C.green }}>{tr("What you should double-check")}</div>
                  <ul className="space-y-1.5">
                    {[tr("The circle / ready reckoner rate for that exact survey number"), tr("Whether your district adds a local cess"), tr("TDS at 1% if the value crosses ₹50 lakh"), tr("Any concession scheme running this financial year")].map((x) => (
                      <li key={x} className="flex gap-2 text-xs" style={{ color: C.body }}>
                        <Check size={13} style={{ color: C.green }} className="shrink-0 mt-0.5" />{tr(x)}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card>
                  <div className="text-xs font-bold mb-2" style={{ color: C.green }}>{tr("Next steps")}</div>
                  <div className="space-y-2">
                    <Btn size="sm" full variant="outline" icon={FileText} onClick={() => onNav("documents")}>{tr("See required documents")}</Btn>
                    <Btn size="sm" full variant="outline" icon={ClipboardList} onClick={() => onNav("landBuying")}>{tr("Open the procedure")}</Btn>
                    <Btn size="sm" full variant="outline" icon={Bot} onClick={() => onNav("ai")}>{tr("Ask the AI Assistant")}</Btn>
                  </div>
                </Card>
              </div>
            </>
          )}

          <Notice tone="amber" icon={AlertTriangle} title={tr("Estimate only")}>
            {tr("Rates here are indicative demo values for a college project. Confirm the exact figure with the Sub-Registrar office before paying.")}
          </Notice>
        </div>
      </div>
    </div>
  );
}

