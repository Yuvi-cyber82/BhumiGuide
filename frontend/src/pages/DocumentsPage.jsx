import React, { useState } from "react";
import { Home, FileText, Bot, Search, Check, X, Eye, Info, RefreshCw, MapPin, ExternalLink } from "lucide-react";
import { Breadcrumb, Btn, Card, HelpCard, IconBadge, Modal, Notice, PageHead, Pill, Select } from "../components/ui";
import { DOCUMENTS, DOC_CATS, documentsFor } from "../data/documents";
import { LOCATIONS } from "../data/locations";
import { fillText, useFill, useTr } from "../i18n";
import { C, FONT } from "../theme";

/* ================================================================== *
 *  DOCUMENTS
 * ================================================================== */

export function DocumentsPage({ t, onNav, checked, toggleCheck, toast, loc, setLoc }) {
  const tr = useTr();
  const fill = useFill();
  const [cat, setCat] = useState("All Documents");
  const [q, setQ] = useState("");
  const [onlyMandatory, setOnlyMandatory] = useState(false);
  const [open, setOpen] = useState(null);

  /* The list as it applies in the selected state — renamed documents, state
   * notes, and anything that state does not use. Falls back to the shared
   * list when no state is chosen. */
  const stateDocs = documentsFor(loc?.state);

  const list = stateDocs.filter((d) =>
    (cat === "All Documents" || d.cat === cat) &&
    (!onlyMandatory || d.mandatory) &&
    (d.name.toLowerCase().includes(q.toLowerCase()) || d.desc.toLowerCase().includes(q.toLowerCase()))
  );
  const doc = stateDocs.find((d) => d.id === open);

  return (
    <div className="wrap mx-auto px-4 py-7">
      <Breadcrumb items={[{ label: tr("Home"), page: "home" }, { label: t("nav.documents") }]} onNav={onNav} />
      <div className="grid gap-5 l4">
        <div className="space-y-4">
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={15} style={{ color: C.green }} />
              <span className="text-sm font-bold" style={{ color: C.ink }}>{tr("Show rules for")}</span>
            </div>
            <Select
              value={loc?.state || ""}
              onChange={(v) => setLoc && setLoc({ state: v, district: "", taluka: "" })}
              placeholder={tr("All states (general list)")}
              options={Object.keys(LOCATIONS)}
              label={tr}
            />
            <p className="t11 mt-2 leading-relaxed" style={{ color: C.mute }}>
              {loc?.state
                ? tr("Names, notes and what counts as required below follow this state's own rules.")
                : tr("Pick a state to see its own document names and requirements.")}
            </p>
          </Card>

          <Card pad={false}>
            <div className="px-4 py-3 text-sm font-bold" style={{ borderBottom: `1px solid ${C.line2}`, color: C.ink }}>{tr("Categories")}</div>
            <div className="p-2">
              {DOC_CATS.map((c) => {
                const n = c === "All Documents" ? stateDocs.length : stateDocs.filter((d) => d.cat === c).length;
                return (
                  <button key={c} onClick={() => setCat(c)}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between"
                    style={{ background: cat === c ? C.tint : "transparent", color: cat === c ? C.green : C.body }}>
                    {c === "All Documents" ? tr(c) : tr(c) + tr(" Documents")}
                    <span className="t11" style={{ color: C.mute }}>{n}</span>
                  </button>
                );
              })}
            </div>
          </Card>

          <Card>
            <div className="text-sm font-bold mb-2" style={{ color: C.ink }}>{tr("Collected so far")}</div>
            <div className="flex items-end gap-1.5">
              <span className="text-2xl font-extrabold" style={{ color: C.green }}>{checked.length}</span>
              <span className="text-sm mb-0.5" style={{ color: C.mute }}>of {stateDocs.length}</span>
            </div>
            <div className="h-2 rounded-full mt-3" style={{ background: C.line2 }}>
              <div className="h-2 rounded-full transition-all" style={{ width: `${(checked.length / Math.max(stateDocs.length, 1)) * 100}%`, background: C.green }} />
            </div>
            <p className="t11 mt-3 leading-relaxed" style={{ color: C.mute }}>
              {tr("Tick a document once you physically have it. The count follows you across the site.")}
            </p>
          </Card>

          <HelpCard t={t} onNav={onNav} />
        </div>

        <div className="lsp3 space-y-5">
          <PageHead title={t("page.documents")} sub={tr("What each document is, why it is needed, where to get it and roughly what it costs.")} />

          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative flex-1 mw200">
              <Search size={15} className="absolute left-3 top-3" style={{ color: C.mute }} />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={tr("Search documents\u2026")}
                className="w-full rounded-lg border pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: C.line, fontFamily: FONT }} />
            </div>
            <button onClick={() => setOnlyMandatory(!onlyMandatory)}
              className="px-3 py-2.5 rounded-lg text-xs font-semibold"
              style={{ border: `1px solid ${onlyMandatory ? C.green : C.line}`, background: onlyMandatory ? C.tint : "#fff", color: onlyMandatory ? C.green : C.body }}>
              {tr("Mandatory only")}
            </button>
          </div>

          {list.length === 0 ? (
            <Card className="text-center py-12">
              <FileText size={30} style={{ color: C.line }} className="mx-auto" />
              <div className="mt-3 text-sm font-bold" style={{ color: C.ink }}>{tr("No document matches that search")}</div>
              <p className="text-xs mt-1" style={{ color: C.mute }}>{tr("Try a shorter word, or clear the mandatory filter.")}</p>
            </Card>
          ) : (
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
              {list.map((d) => {
                const has = checked.includes(d.id);
                return (
                  <Card key={d.id} className="flex flex-col" style={d.status === "not-applicable" ? { opacity: 0.62 } : undefined}>
                    <div className="flex items-start justify-between gap-2">
                      <IconBadge icon={d.icon} size={38} />
                      <button onClick={() => toggleCheck(d.id)}
                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                        style={{ border: `1.5px solid ${has ? C.green : C.line}`, background: has ? C.green : "#fff" }}
                        title={has ? tr("Marked as collected") : tr("Mark as collected")}>
                        {has && <Check size={14} className="text-white" />}
                      </button>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                      <span className="text-sm font-bold" style={{ color: C.ink }}>{tr(d.name)}</span>
                      {d.status === "not-applicable"
                        ? <Pill tone="gray">{tr("Not used in this state")}</Pill>
                        : d.status === "mandatory"
                          ? <Pill tone="red">{tr("Required")}</Pill>
                          : <Pill tone="gray">{tr("If applicable")}</Pill>}
                    </div>
                    {d.baseName && (
                      <div className="t10 mt-0.5" style={{ color: C.mute }}>{fill("{0}'s name for the {1}", tr(loc.state), tr(d.baseName))}</div>
                    )}
                    <p className="text-xs mt-1 leading-relaxed flex-1" style={{ color: C.mute }}>{tr(d.desc)}</p>
                    {d.stateNote && (
                      <div className="t11 mt-2 rounded-lg px-2.5 py-2 leading-relaxed" style={{ background: C.tint2, color: C.body }}>
                        {tr(d.stateNote)}
                      </div>
                    )}
                    <div className="mt-3 pt-3 flex items-center justify-between" style={{ borderTop: `1px solid ${C.line2}` }}>
                      <button onClick={() => setOpen(d.id)} className="text-xs font-bold flex items-center gap-1" style={{ color: C.green }}>
                        <Eye size={13} /> {tr("Explain this")}
                      </button>
                      <span className="t11" style={{ color: C.mute }}>{tr(d.fee)}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          <Notice tone="blue" icon={Info}>
            {loc?.state
              ? fillText(
                  tr,
                  'Names and notes above are {0}\'s own, taken from that state\'s official portals — open "Explain this" to see the source. Where a state publishes nothing on a document, the general entry is shown unchanged. Requirements also vary with property type, so confirm the final list with your Sub-Registrar office.',
                  tr(loc.state)
                )
              : tr("Document requirements change with state and property type. Pick a state on the left to see its own rules, and confirm the final list with your Sub-Registrar office.")}
          </Notice>
        </div>
      </div>

      <Modal open={!!doc} onClose={() => setOpen(null)} width={520}>
        {doc && (
          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <IconBadge icon={doc.icon} size={44} />
                <div>
                  <h3 className="text-lg font-extrabold" style={{ color: C.ink }}>{tr(doc.name)}</h3>
                  <div className="mt-1 flex gap-1.5">
                    <Pill tone="gray">{tr(doc.cat)}</Pill>
                    {doc.status === "not-applicable"
                      ? <Pill tone="gray">{tr("Not used in this state")}</Pill>
                      : doc.status === "mandatory"
                        ? <Pill tone="red">{tr("Required")}</Pill>
                        : <Pill tone="gray">{tr("If applicable")}</Pill>}
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(null)}><X size={18} style={{ color: C.mute }} /></button>
            </div>
            {doc.stateNote && (
              <div className="mt-5 rounded-lg px-3 py-3" style={{ background: C.tint2 }}>
                <div className="text-xs font-bold mb-1" style={{ color: C.green }}>{fill("In {0}", tr(loc.state))}</div>
                <p className="text-sm leading-relaxed" style={{ color: C.body }}>{tr(doc.stateNote)}</p>
                {doc.source && (
                  <a href={doc.source} target="_blank" rel="noreferrer"
                    className="t11 font-semibold inline-flex items-center gap-1 mt-2" style={{ color: C.green }}>
                    <ExternalLink size={11} /> {tr("Official source")}
                  </a>
                )}
              </div>
            )}
            <div className="mt-5 space-y-4">
              {[[tr("What is it?"), doc.what], [tr("Why is it needed?"), doc.why], [tr("Where do you get it?"), doc.where], [tr("Approximate cost"), doc.fee]].map(([h, b]) => (
                <div key={h}>
                  <div className="text-xs font-bold mb-1" style={{ color: C.green }}>{tr(h)}</div>
                  <p className="text-sm leading-relaxed" style={{ color: C.body }}>{tr(b)}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-2">
              <Btn full icon={checked.includes(doc.id) ? RefreshCw : Check} onClick={() => { toggleCheck(doc.id); }}>
                {checked.includes(doc.id) ? tr("Unmark") : tr("I have this document")}
              </Btn>
              <Btn variant="outline" icon={Bot} onClick={() => { setOpen(null); onNav("ai"); }}>{tr("Ask AI")}</Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

