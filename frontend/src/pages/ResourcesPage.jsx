import React, { useState } from "react";
import { Home, MapPin, FileText, Calculator, ShieldCheck, BookOpen, Search, ChevronRight, Download, Clock, Landmark, Eye, Globe, Stamp, ArrowRight, X } from "lucide-react";
import { Breadcrumb, Card, HelpCard, IconBadge, Modal, PageHead, Pill } from "../components/ui";
import { CHARGE_RULES } from "../data/locations";
import { STATE_OFFICIAL_LINKS, NATIONAL_LINKS } from "../data/officialLinks";
import { RESOURCE_CONTENT } from "../data/resourceContent";
import { useTr } from "../i18n";
import { C, FONT } from "../theme";

/* Land buying checklist is a real, generated PDF served from /public —
 * see frontend/public/downloads/land-buying-checklist.pdf. */
const CHECKLIST_PDF_URL = "/downloads/land-buying-checklist.pdf";

/* ================================================================== *
 *  RESOURCES
 * ================================================================== */

export const RESOURCES = [
  { type: "Guide", title: "Complete guide to buying land in India", desc: "The whole process end to end, written for a first-time buyer.", meta: "12 min read", icon: BookOpen, tone: "green" },
  { type: "Article", title: "Documents required for land purchase", desc: "Every document explained, with where to get it and what it costs.", meta: "8 min read", icon: FileText, tone: "blue" },
  { type: "Guide", title: "How to verify land ownership online", desc: "Walkthrough of a state land records portal, step by step.", meta: "7 min read", icon: Eye, tone: "amber" },
  { type: "Tool", title: "Stamp duty calculator", desc: "Estimate stamp duty and registration fee for your state.", meta: "Interactive", icon: Calculator, tone: "green", page: "charges" },
  { type: "Download", title: "Land buying checklist", desc: "A printable checklist you can carry to the office.", meta: "PDF · 2 pages", icon: Download, tone: "blue" },
  { type: "State Rules", title: "State-wise stamp duty rates", desc: "Current indicative rates and rebates across Maharashtra, Karnataka and Madhya Pradesh.", meta: "Reference", icon: Landmark, tone: "amber", page: "charges" },
  { type: "Guide", title: "Understanding the encumbrance certificate", desc: "How to read an EC and what a suspicious entry looks like.", meta: "6 min read", icon: ShieldCheck, tone: "green" },
  { type: "Article", title: "Agricultural land: who can buy and where", desc: "State restrictions, tenure classes and ceiling limits.", meta: "10 min read", icon: MapPin, tone: "blue" },
];

export const RES_TABS = ["All", "Guide", "Article", "Tool", "Download", "State Rules"];

export function ResourcesPage({ t, onNav, toast, loc }) {
  const tr = useTr();
  const [tab, setTab] = useState("All");
  const [q, setQ] = useState("");
  const [reader, setReader] = useState(null); // resource object currently open in the in-app reader, or null
  const list = RESOURCES.filter((r) => (tab === "All" || r.type === tab) && r.title.toLowerCase().includes(q.toLowerCase()));

  // State-specific official links (land records, revenue, RERA, e-stamping)
  // only exist once a state is selected; court status & legal aid are the
  // same nationwide, so they're always live.
  const stateLinks = loc?.state ? STATE_OFFICIAL_LINKS[loc.state] : null;
  const portalItems = [
    { key: "landRecords", fallbackLabel: tr("State land records portal"), link: stateLinks?.landRecords },
    { key: "revenue", fallbackLabel: tr("Revenue department"), link: stateLinks?.revenue },
    { key: "rera", fallbackLabel: tr("RERA official website"), link: stateLinks?.rera },
    { key: "courtStatus", fallbackLabel: tr("Court case status"), link: NATIONAL_LINKS.courtStatus },
    { key: "legalAid", fallbackLabel: tr("Legal aid services"), link: NATIONAL_LINKS.legalAid },
    { key: "eStamping", fallbackLabel: tr("e-Stamping portal"), link: stateLinks?.eStamping },
  ];

  return (
    <div className="wrap mx-auto px-4 py-7">
      <Breadcrumb items={[{ label: tr("Home"), page: "home" }, { label: t("nav.resources") }]} onNav={onNav} />
      <PageHead title={t("page.resources")} sub={tr("Guides, references and tools to help you make an informed decision.")} />

      <div className="grid gap-5 l4">
        <div className="lsp3 space-y-4">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-3" style={{ color: C.mute }} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={tr("Search resources\u2026")}
              className="w-full rounded-lg border pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: C.line, fontFamily: FONT }} />
          </div>

          <div className="flex flex-wrap gap-2">
            {RES_TABS.map((x) => (
              <button key={x} onClick={() => setTab(x)}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold"
                style={{ border: `1px solid ${tab === x ? C.green : C.line}`, background: tab === x ? C.green : "#fff", color: tab === x ? "#fff" : C.body }}>
                {tr(x)}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <Card className="text-center py-12">
              <BookOpen size={30} style={{ color: C.line }} className="mx-auto" />
              <div className="mt-3 text-sm font-bold" style={{ color: C.ink }}>{tr("Nothing here yet")}</div>
              <p className="text-xs mt-1" style={{ color: C.mute }}>{tr("Try another tab or a shorter search word.")}</p>
            </Card>
          ) : (
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
              {list.map((r) => {
                const hasContent = !!RESOURCE_CONTENT[r.title];
                const isChecklist = r.title === "Land buying checklist";
                return (
                  <Card key={r.title} className="flex flex-col">
                    <div className="flex items-start justify-between">
                      <IconBadge icon={r.icon} tone={r.tone} size={40} />
                      <Pill tone={r.tone}>{tr(r.type)}</Pill>
                    </div>
                    <div className="mt-3 text-sm font-bold leading-snug" style={{ color: C.ink }}>{tr(r.title)}</div>
                    <p className="text-xs mt-1.5 leading-relaxed flex-1" style={{ color: C.mute }}>{tr(r.desc)}</p>
                    <div className="mt-3 pt-3 flex items-center justify-between" style={{ borderTop: `1px solid ${C.line2}` }}>
                      <span className="t11 flex items-center gap-1" style={{ color: C.mute }}><Clock size={11} />{tr(r.meta)}</span>
                      {r.page ? (
                        <button onClick={() => onNav(r.page)}
                          className="text-xs font-bold flex items-center gap-1" style={{ color: C.green }}>
                          {tr("Open tool")} <ArrowRight size={12} />
                        </button>
                      ) : isChecklist ? (
                        <a href={CHECKLIST_PDF_URL} download
                          className="text-xs font-bold flex items-center gap-1" style={{ color: C.green }}>
                          {tr("Download")} <ArrowRight size={12} />
                        </a>
                      ) : hasContent ? (
                        <button onClick={() => setReader(r)}
                          className="text-xs font-bold flex items-center gap-1" style={{ color: C.green }}>
                          {tr("Read")} <ArrowRight size={12} />
                        </button>
                      ) : (
                        <button onClick={() => toast(tr("This resource is not written yet in the prototype."))}
                          className="text-xs font-bold flex items-center gap-1" style={{ color: C.green }}>
                          {tr("Read")} <ArrowRight size={12} />
                        </button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Card pad={false}>
            <div className="px-4 py-3 text-sm font-bold flex items-center gap-2" style={{ borderBottom: `1px solid ${C.line2}`, color: C.ink }}>
              <Globe size={15} style={{ color: C.green }} /> {tr("Official portals")}
            </div>
            <div className="p-2">
              {portalItems.map((item) =>
                item.link ? (
                  <a key={item.key} href={item.link.url} target="_blank" rel="noopener noreferrer"
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between hover:bg-gray-50"
                    style={{ color: C.body }}>
                    {tr(item.link.label)}<ChevronRight size={13} style={{ color: C.mute }} />
                  </a>
                ) : (
                  <button key={item.key}
                    onClick={() => toast(tr(
                      "Select your state (Land Buying or Charges page) to get this state's direct official link."
                    ))}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between hover:bg-gray-50"
                    style={{ color: C.mute }}>
                    {tr(item.fallbackLabel)} <span className="t10">({tr("select state")})</span>
                    <ChevronRight size={13} style={{ color: C.mute }} />
                  </button>
                )
              )}
            </div>
          </Card>

          <Card>
            <div className="text-sm font-bold mb-3" style={{ color: C.ink }}>{tr("Stamp duty by state")}</div>
            <div className="space-y-1.5">
              {Object.entries(CHARGE_RULES).slice(0, 10).map(([s, r]) => (
                <div key={s} className="flex items-center justify-between text-xs">
                  <span style={{ color: C.body }}>{tr(s)}</span>
                  <span className="font-bold" style={{ color: C.green }}>{r.stamp}%</span>
                </div>
              ))}
            </div>
            <div className="t10 mt-3" style={{ color: C.mute }}>{tr("Indicative base rates for the prototype.")}</div>
          </Card>

          <HelpCard t={t} onNav={onNav} />
        </div>
      </div>

      <Modal open={!!reader} onClose={() => setReader(null)} width={640}>
        {reader && (
          <div className="p-6">
            <div className="flex items-start justify-between mb-4 gap-3">
              <div>
                <Pill tone={reader.tone}>{tr(reader.type)}</Pill>
                <h3 className="text-lg font-extrabold mt-2 leading-snug" style={{ color: C.ink }}>{tr(reader.title)}</h3>
                <span className="t11 flex items-center gap-1 mt-1" style={{ color: C.mute }}><Clock size={11} />{tr(reader.meta)}</span>
              </div>
              <button onClick={() => setReader(null)} className="shrink-0"><X size={18} style={{ color: C.mute }} /></button>
            </div>
            <div className="space-y-4 pr-1" style={{ maxHeight: "60vh", overflowY: "auto" }}>
              {(RESOURCE_CONTENT[reader.title] || []).map((sec, i) => (
                <div key={i}>
                  {sec.heading && <div className="text-sm font-bold mb-1.5" style={{ color: C.ink }}>{tr(sec.heading)}</div>}
                  {Array.isArray(sec.body) ? (
                    <ul className="space-y-1.5 pl-4" style={{ listStyle: "disc", color: C.body }}>
                      {sec.body.map((line, j) => (
                        <li key={j} className="text-xs leading-relaxed">{tr(line)}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs leading-relaxed" style={{ color: C.body }}>{tr(sec.body)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}