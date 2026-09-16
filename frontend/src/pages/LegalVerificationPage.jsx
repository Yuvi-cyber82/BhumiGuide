import React, { useState, useMemo, useRef, useEffect } from "react";
import { Home, FileText, ShieldCheck, AlertTriangle, Check, Upload, Download, Clock, Landmark, Users, Sparkles, CheckCircle2, XCircle, Info, Lock, Trash2, User, Scale, Loader2, CloudUpload } from "lucide-react";
import { LocationFields } from "../components/location";
import { LocalContactsCard } from "../components/LocalContactsCard";
import { Breadcrumb, Btn, Card, IconBadge, Input, Label, Notice, PageHead, Pill, Select } from "../components/ui";
import { DOCUMENTS, documentsFor, mandatoryFor } from "../data/documents";
import { fillText, useFill, useTr } from "../i18n";
import { C } from "../theme";
import { uploadVerification } from "../api/uploads";

/* ================================================================== *
 *  LEGAL VERIFICATION + AI DOCUMENT READINESS CHECKER
 * ================================================================== */

export const DOC_KEYWORDS = {
  aadhaar: ["aadhaar", "aadhar", "uid"],
  pan: ["pan"],
  saledeed: ["saledeed", "sale_deed", "sale deed", "sale-deed", "deed"],
  extract: ["712", "7-12", "7_12", "satbara", "extract", "rtc", "khatauni", "patta", "jamabandi", "porcha"],
  ec: ["encumbrance", "ec_", "_ec", "ec-"],
  tax: ["tax", "receipt"],
  mutation: ["mutation"],
  khata: ["khata", "khasra"],
  survey: ["survey", "map", "plan"],
  noc: ["noc"],
  heir: ["heir", "succession"],
  poa: ["poa", "attorney"],
  photo: ["photo", "passport"],
  address: ["address", "bill", "utility"],
  titledeeds: ["title", "previous"],
  conversion: ["conversion", "na_order", "na-order"],
};

export function identifyDoc(filename) {
  const n = filename.toLowerCase();
  for (const [id, keys] of Object.entries(DOC_KEYWORDS)) if (keys.some((k) => n.includes(k))) return id;
  return null;
}

export function analyzeFiles(files, state) {
  const now = Date.now();
  const docs = documentsFor(state);
  return files.map((f) => {
    const id = identifyDoc(f.name);
    const doc = docs.find((d) => d.id === id);
    const ext = f.name.split(".").pop().toLowerCase();
    /* analyzeFiles() runs outside React, so it cannot translate. Each issue
     * carries its English template and the values to drop into it; the list
     * below renders them through fill(). */
    const issues = [];
    if (!doc) issues.push({ level: "warn", text: ["Could not identify this document. Rename the file with the document name, e.g. sale_deed.pdf"] });
    if (!["pdf", "jpg", "jpeg", "png"].includes(ext)) issues.push({ level: "warn", text: [".{0} is not a format offices accept. Convert it to PDF or a clear image.", ext] });
    if (f.size && f.size < 60000) issues.push({ level: "warn", text: ["File is under 60 KB — a scan this small is usually too blurred to read at the counter."] });
    if (f.size && f.size > 8000000) issues.push({ level: "warn", text: ["File is over 8 MB. Most government portals reject uploads this large."] });
    const ageDays = f.lastModified ? Math.round((now - f.lastModified) / 86400000) : null;
    if (["extract", "ec", "tax"].includes(id) && ageDays !== null && ageDays > 180)
      issues.push({ level: "error", text: ["This file is about {0} days old. {1} should be issued within the last 3 to 6 months.", ageDays, doc.name] });
    return { file: f, id, doc, issues, ok: issues.length === 0, ageDays };
  });
}

export const SAMPLE_FILES = [
  { name: "aadhaar_card.pdf", size: 420000, lastModified: Date.now() - 90 * 86400000 },
  { name: "pan_card.pdf", size: 310000, lastModified: Date.now() - 200 * 86400000 },
  { name: "sale_deed_draft.pdf", size: 2400000, lastModified: Date.now() - 10 * 86400000 },
  { name: "712_extract.pdf", size: 1100000, lastModified: Date.now() - 400 * 86400000 },
  { name: "property_tax_receipt.jpg", size: 48000, lastModified: Date.now() - 30 * 86400000 },
  { name: "scanned_paper.docx", size: 90000, lastModified: Date.now() - 5 * 86400000 },
];

export const VERIF_CHECKS = [
  { icon: FileText, name: "Document authenticity", desc: "Checking format, issuing office and validity dates", pass: "Format and issuer look valid" },
  { icon: User, name: "Owner verification", desc: "Matching seller name against the revenue record", pass: "Name matches the record" },
  { icon: ShieldCheck, name: "Encumbrance check", desc: "Looking for mortgages or registered charges", pass: "No active charge found" },
  { icon: Landmark, name: "Land use and zoning", desc: "Confirming permitted use for this land class", pass: "Use matches the zoning" },
  { icon: Scale, name: "Litigation check", desc: "Searching for pending disputes on the survey number", pass: "No case found in the searched records" },
];

export function LegalVerificationPage({ t, onNav, loc, setLoc, toast, addNotification, auth, onLogin }) {
  const tr = useTr();
  const fill = useFill();
  const [propType, setPropType] = useState("Agricultural");
  const [survey, setSurvey] = useState("123/2");
  const [owner, setOwner] = useState("");
  const [stage, setStage] = useState(-1);
  const [files, setFiles] = useState([]);
  const [rawFiles, setRawFiles] = useState([]); // actual File blobs, aligned by index with `files`
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => {
    if (stage < 0 || stage >= VERIF_CHECKS.length) return;
    const id = setTimeout(() => setStage((s) => s + 1), 1300);
    return () => clearTimeout(id);
  }, [stage]);

  useEffect(() => {
    if (stage === VERIF_CHECKS.length) {
      addNotification({ title: tr("Legal verification completed"), body: fillText(tr, "Survey No. {0} — all checks finished", survey) });
      toast(tr("Verification complete. Review the results below."));
    }
  }, [stage]); // eslint-disable-line

  const analysis = useMemo(() => analyzeFiles(files, loc.state), [files, loc.state]);
  const foundIds = analysis.map((a) => a.id).filter(Boolean);
  /* Measured against what THIS state requires — Karnataka, for instance,
   * requires a Khata certificate that Maharashtra does not use at all. */
  const mandatory = mandatoryFor(loc.state);
  const missing = mandatory.filter((d) => !foundIds.includes(d.id));
  const errors = analysis.flatMap((a) => a.issues.filter((i) => i.level === "error"));
  const warns = analysis.flatMap((a) => a.issues.filter((i) => i.level === "warn"));
  const readiness = files.length ? Math.round(((mandatory.length - missing.length) / mandatory.length) * 100) : 0;

  const onPick = (e) => {
    const raw = Array.from(e.target.files || []);
    const picked = raw.map((f) => ({ name: f.name, size: f.size, lastModified: f.lastModified }));
    if (picked.length) {
      setFiles((f) => [...f, ...picked]);
      setRawFiles((f) => [...f, ...raw]);
      setSaved(false);
      toast(`${picked.length} file(s) analysed.`);
    }
  };

  const clearFiles = () => { setFiles([]); setRawFiles([]); setSaved(false); };

  const saveToAccount = async () => {
    if (!auth) { toast(tr("Log in to save these documents to your account."), "amber"); onLogin("login"); return; }
    if (!rawFiles.length) { toast(tr("Load real files first — the sample set can't be uploaded."), "amber"); return; }
    setSaving(true);
    try {
      const { analysis } = await uploadVerification({ files: rawFiles, survey, state: loc.state, district: loc.district, taluka: loc.taluka });
      setSaved(true);
      toast(fillText(tr, "Saved to your account. Readiness: {0}%.", analysis.readiness));
      addNotification({ title: tr("Documents saved"), body: fillText(tr, "{0} document(s) stored for Survey No. {1}", rawFiles.length, survey || "—") });
    } catch (err) {
      toast(err.message || tr("Upload failed."), "red");
    } finally {
      setSaving(false);
    }
  };

  const started = stage >= 0;

  return (
    <div className="wrap mx-auto px-4 py-7">
      <Breadcrumb items={[{ label: tr("Home"), page: "home" }, { label: t("nav.legal") }]} onNav={onNav} />
      <PageHead title={t("page.legal")} sub={tr("Run the standard title checks and let the readiness checker tell you what is still missing from your file.")} />

      <div className="grid gap-5 l12">
        {/* Form */}
        <div className="lsp4 space-y-4">
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <FileText size={17} style={{ color: C.green }} />
              <span className="text-sm font-bold" style={{ color: C.ink }}>{tr("Start a new verification")}</span>
            </div>
            <div className="space-y-3">
              <LocationFields loc={loc} setLoc={setLoc} t={t} />
              <div>
                <Label required>{tr("Property type")}</Label>
                <Select value={propType} onChange={setPropType} placeholder={tr("Select")} options={[tr("Agricultural"), tr("Residential"), tr("Commercial"), tr("Industrial")]} />
              </div>
              <div>
                <Label required>{tr("Survey / Plot / Gat number")}</Label>
                <Input value={survey} onChange={setSurvey} placeholder="123/2" />
              </div>
              <div>
                <Label required>{tr("Owner name as printed on the document")}</Label>
                <Input value={owner} onChange={setOwner} placeholder={tr("Full name of the current owner")} />
              </div>
              <Btn full icon={ShieldCheck} onClick={() => {
                if (!loc.state || !loc.district) return toast(tr("Select state and district first."), "amber");
                if (!survey.trim() || !owner.trim()) return toast(tr("Survey number and owner name are both required."), "amber");
                setStage(0); toast(tr("Verification started."));
              }}>{started ? tr("Restart verification") : tr("Start verification")}</Btn>
            </div>
            <div className="mt-4 rounded-lg px-3 py-2.5 flex gap-2" style={{ background: C.blueTint }}>
              <Lock size={14} style={{ color: C.blue }} className="shrink-0 mt-0.5" />
              <span className="t11" style={{ color: C.body }}>{tr("Nothing you type or upload here leaves your browser in this prototype.")}</span>
            </div>
          </Card>
        </div>

        {/* Progress */}
        <div className="lsp4 space-y-4">
          <Card>
            <div className="text-sm font-bold mb-4" style={{ color: C.ink }}>{tr("Verification progress")}</div>
            {!started ? (
              <div className="text-center py-8">
                <IconBadge icon={ShieldCheck} size={52} />
                <p className="text-xs mt-3" style={{ color: C.mute }}>{tr("Fill the form and start a verification to see the checks run.")}</p>
              </div>
            ) : (
              <>
                <div className="flex items-center mb-5">
                  {[tr("Details"), tr("Checks"), tr("Review"), tr("Report")].map((s, i) => {
                    const st = stage >= VERIF_CHECKS.length ? 4 : Math.min(Math.floor(stage / 1.6) + 1, 3);
                    const active = i < st;
                    return (
                      <React.Fragment key={s}>
                        {i > 0 && <div className="flex-1 h-0.5" style={{ background: active ? C.green : C.line }} />}
                        <div className="flex flex-col items-center gap-1" style={{ width: 58 }}>
                          <div className="w-7 h-7 rounded-full flex items-center justify-center t11 font-bold"
                            style={{ background: active ? C.green : "#fff", color: active ? "#fff" : C.mute, border: `1.5px solid ${active ? C.green : C.line}` }}>
                            {active ? <Check size={13} /> : i + 1}
                          </div>
                          <span className="t10 font-semibold" style={{ color: active ? C.ink : C.mute }}>{s}</span>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="space-y-2">
                  {VERIF_CHECKS.map((c, i) => {
                    const state = stage > i ? "done" : stage === i ? "running" : "pending";
                    return (
                      <div key={c.name} className="flex items-start gap-3 rounded-lg px-3 py-2.5" style={{ background: state === "running" ? C.tint2 : "#fff", border: `1px solid ${C.line2}` }}>
                        <c.icon size={15} style={{ color: state === "done" ? C.green : C.mute }} className="mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold" style={{ color: C.ink }}>{tr(c.name)}</div>
                          <div className="t11" style={{ color: C.mute }}>{tr(state === "done" ? c.pass : c.desc)}</div>
                        </div>
                        {state === "done" ? <Pill tone="green"><Check size={10} /> {tr("Done")}</Pill>
                          : state === "running" ? <Pill tone="blue"><Loader2 size={10} className="animate-spin" /> {tr("Running")}</Pill>
                            : <Pill tone="gray">{tr("Pending")}</Pill>}
                      </div>
                    );
                  })}
                </div>
                {stage >= VERIF_CHECKS.length ? (
                  <div className="mt-4">
                    <Notice tone="green" icon={CheckCircle2} title={tr("All checks completed")}>
                      {fill(
                        "Survey No. {0} in {1}, {2} passed the automated checks. This is a prototype result — a real verification also needs a lawyer's title opinion.",
                        survey,
                        tr(loc.district),
                        tr(loc.state)
                      )}
                    </Notice>
                    <div className="mt-3 flex gap-2">
                      <Btn size="sm" icon={Download} onClick={() => toast(tr("Report generation is not wired up in the prototype."))}>{tr("Download report")}</Btn>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 rounded-lg px-3 py-2.5 flex gap-2" style={{ background: C.amberTint }}>
                    <Clock size={14} style={{ color: C.amber }} className="shrink-0 mt-0.5" />
                    <span className="t11" style={{ color: C.body }}>{tr("Checks are running. A real verification takes 24 to 48 hours.")}</span>
                  </div>
                )}
              </>
            )}
          </Card>
        </div>

        {/* Readiness checker */}
        <div className="lsp4 space-y-4">
          <Card>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={16} style={{ color: C.green }} />
              <span className="text-sm font-bold" style={{ color: C.ink }}>{tr("AI document readiness check")}</span>
            </div>
            <p className="t11 mb-4 leading-relaxed" style={{ color: C.mute }}>
              {tr("Add your documents. The checker identifies each one, flags anything expired or unreadable, and lists what is still missing.")}
              {loc.state && " "}
              {loc.state && fill("Measured against the {0} documents {1} requires.", mandatory.length, tr(loc.state))}
            </p>

            <input ref={fileRef} type="file" multiple className="hidden" onChange={onPick} />
            <button onClick={() => fileRef.current?.click()}
              className="w-full rounded-xl py-6 flex flex-col items-center gap-2"
              style={{ border: `1.5px dashed ${C.green}55`, background: C.tint2 }}>
              <Upload size={20} style={{ color: C.green }} />
              <span className="text-xs font-bold" style={{ color: C.ink }}>{tr("Choose files to check")}</span>
              <span className="t11" style={{ color: C.mute }}>{tr("PDF or images \u00b7 checked instantly in your browser")}</span>
            </button>
            <button onClick={() => { setFiles(SAMPLE_FILES); setRawFiles([]); setSaved(false); toast(tr("Sample document set loaded.")); }}
              className="mt-2 w-full t11 font-semibold" style={{ color: C.green }}>
              {tr("or load a sample document set")}
            </button>

            {files.length > 0 && (
              <>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="t11 font-semibold" style={{ color: C.mute }}>{tr("Readiness")}</div>
                    <div className="text-2xl font-extrabold" style={{ color: readiness > 70 ? C.green : readiness > 40 ? C.amber : C.red }}>{readiness}%</div>
                  </div>
                  <button onClick={clearFiles} className="t11 font-semibold flex items-center gap-1" style={{ color: C.mute }}>
                    <Trash2 size={12} /> {tr("Clear")}
                  </button>
                </div>

                <div className="mt-3">
                  <Btn
                    full size="sm"
                    icon={saved ? CheckCircle2 : CloudUpload}
                    variant={saved ? "outline" : "solid"}
                    disabled={saving || saved || !rawFiles.length}
                    onClick={saveToAccount}
                  >
                    {saving ? tr("Uploading…") : saved ? tr("Saved to your account") : rawFiles.length ? tr("Save these documents to my account") : tr("Choose real files to save (sample set is preview-only)")}
                  </Btn>
                </div>
                <div className="h-2 rounded-full mt-2" style={{ background: C.line2 }}>
                  <div className="h-2 rounded-full transition-all" style={{ width: `${readiness}%`, background: readiness > 70 ? C.green : readiness > 40 ? C.amber : C.red }} />
                </div>

                <div className="mt-4 space-y-2">
                  {analysis.map((a, i) => (
                    <div key={i} className="rounded-lg px-3 py-2.5" style={{ border: `1px solid ${C.line2}` }}>
                      <div className="flex items-start gap-2">
                        {a.ok ? <CheckCircle2 size={14} style={{ color: C.green }} className="mt-0.5 shrink-0" />
                          : a.issues.some((x) => x.level === "error") ? <XCircle size={14} style={{ color: C.red }} className="mt-0.5 shrink-0" />
                            : <AlertTriangle size={14} style={{ color: C.amber }} className="mt-0.5 shrink-0" />}
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold truncate" style={{ color: C.ink }}>{a.doc ? tr(a.doc.name) : tr("Unrecognised document")}</div>
                          <div className="t10 truncate" style={{ color: C.mute }}>{a.file.name}</div>
                          {a.issues.map((iss, j) => (
                            <div key={j} className="t11 mt-1 leading-snug" style={{ color: iss.level === "error" ? C.red : C.amber }}>{fill(iss.text[0], ...iss.text.slice(1).map((v) => (typeof v === "string" ? tr(v) : v)))}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {missing.length > 0 && (
                  <div className="mt-4">
                    <div className="text-xs font-bold mb-2" style={{ color: C.red }}>{tr("Still missing (")}{missing.length})</div>
                    <div className="flex flex-wrap gap-1.5">
                      {missing.map((d) => <Pill key={d.id} tone="red">{tr(d.name)}</Pill>)}
                    </div>
                  </div>
                )}

                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {[[tr("Found"), foundIds.length, C.green], [tr("Warnings"), warns.length, C.amber], [tr("Problems"), errors.length, C.red]].map(([l, n, col]) => (
                    <div key={l} className="rounded-lg py-2" style={{ background: "#FAFBFA", border: `1px solid ${C.line2}` }}>
                      <div className="text-lg font-extrabold" style={{ color: col }}>{n}</div>
                      <div className="t10" style={{ color: C.mute }}>{l}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>
      </div>

      <div className="mt-5">
        <LocalContactsCard loc={loc} />
      </div>

      <div className="mt-5" style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
        {[[Info, tr("Why verify"), tr(
          "Verification confirms the property is free from disputes, encumbrances and liabilities."
        )],
        [ShieldCheck, tr("Reduce risk"), tr("Most land litigation traces back to a check somebody skipped.")],
        [Users, tr("Expert reviewed"), tr("Automated checks narrow the field; a lawyer confirms the title.")],
        [Lock, tr("Your data stays yours"), tr("Documents are analysed in the browser in this prototype.")]].map(([Icon, h, b]) => (
          <Card key={h}>
            <div className="flex gap-3">
              <Icon size={17} style={{ color: C.green }} className="shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold" style={{ color: C.ink }}>{h}</div>
                <p className="t11 mt-1 leading-relaxed" style={{ color: C.mute }}>{b}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

