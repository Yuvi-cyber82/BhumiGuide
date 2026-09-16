import React, { useMemo, useState } from "react";
import { Users, Phone, Mail, Search, MapPin, Info } from "lucide-react";
import { Card, Pill } from "./ui";
import { contactsFor } from "../data/landContacts";
import { useFill, useTr } from "../i18n";
import { C, FONT } from "../theme";

/* ================================================================== *
 *  LOCAL LAND & PROPERTY CONTACTS
 *
 *  Shows the people listed for the state / district / taluka the user
 *  has selected. If their exact taluka has nobody on file, it falls back
 *  to the whole district and says so — it never pads an empty result.
 *  Data + the honesty notes live in ../data/landContacts.js.
 * ================================================================== */

const PREVIEW = 6;

export function LocalContactsCard({ loc }) {
  const tr = useTr();
  const fill = useFill();
  const [q, setQ] = useState("");
  const [showAll, setShowAll] = useState(false);

  const result = useMemo(
    () => contactsFor(loc?.state, loc?.district, loc?.taluka),
    [loc?.state, loc?.district, loc?.taluka]
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return result.contacts;
    return result.contacts.filter(
      (c) =>
        c.n.toLowerCase().includes(needle) ||
        (c.t || "").toLowerCase().includes(needle) ||
        (c.p || "").includes(needle)
    );
  }, [result, q]);

  const shown = showAll ? filtered : filtered.slice(0, PREVIEW);

  const header = (
    <div className="flex items-center gap-2 mb-1">
      <Users size={17} style={{ color: C.green }} />
      <span className="text-sm font-bold" style={{ color: C.ink }}>{tr("Local land & property contacts")}</span>
    </div>
  );

  /* Nothing selected yet */
  if (!loc?.state || !loc?.district) {
    return (
      <Card>
        {header}
        <p className="t11 mt-2" style={{ color: C.mute }}>
          {tr("Select a state and district above to see the contacts listed for that area.")}
        </p>
      </Card>
    );
  }

  /* Selected, but nobody on file there */
  if (result.scope === "none") {
    return (
      <Card>
        {header}
        <p className="t11 mt-2 leading-relaxed" style={{ color: C.mute }}>
          {fill(
            "No contacts are on file for {0}, {1} yet. This list only covers the areas the project owner has collected so far — it is not a complete directory.",
            tr(loc.district),
            tr(loc.state)
          )}
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          {header}
          <p className="t11 leading-relaxed" style={{ color: C.mute }}>
            {result.scope === "taluka" ? (
              <>
                {fill(
                  filtered.length === 1
                    ? "{0} contact listed in {1}, {2}."
                    : "{0} contacts listed in {1}, {2}.",
                  filtered.length,
                  <b style={{ color: C.body }}>{tr(result.taluka)}</b>,
                  tr(loc.district)
                )}
              </>
            ) : (
              <>
                {fill(
                  "No contact is listed for {0} — showing all {1} contacts across {2} district instead, each with its own taluka.",
                  loc.taluka ? <b style={{ color: C.body }}>{tr(loc.taluka)}</b> : tr("that taluka"),
                  filtered.length,
                  <b style={{ color: C.body }}>{tr(loc.district)}</b>
                )}
              </>
            )}
          </p>
        </div>
        <Pill tone={result.scope === "taluka" ? "green" : "amber"}>
          <MapPin size={10} /> {result.scope === "taluka" ? tr("This taluka") : tr("Whole district")}
        </Pill>
      </div>

      {result.contacts.length > PREVIEW && (
        <div className="relative mt-4">
          <Search size={14} className="absolute left-3 top-2.5" style={{ color: C.mute }} />
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setShowAll(true); }}
            placeholder={tr("Search by name, taluka or number…")}
            className="w-full rounded-lg border pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-2"
            style={{ borderColor: C.line, fontFamily: FONT }}
          />
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="t11 mt-4 text-center py-4" style={{ color: C.mute }}>{tr("Nobody matches that search.")}</p>
      ) : (
        <div className="mt-3" style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {shown.map((c, i) => (
            <div key={`${c.n}-${c.p}-${i}`} className="rounded-lg px-3 py-2.5" style={{ border: `1px solid ${C.line2}` }}>
              <div className="text-xs font-bold leading-snug" style={{ color: C.ink }}>{c.n}</div>
              {result.scope === "district" && c.t && (
                <div className="t10 mt-0.5" style={{ color: C.mute }}>{tr(c.t)}</div>
              )}
              <div className="mt-1.5 flex flex-col gap-1">
                {c.p ? (
                  <a href={`tel:${c.p}`} className="t11 font-semibold inline-flex items-center gap-1.5" style={{ color: C.green }}>
                    <Phone size={11} /> {c.p}
                  </a>
                ) : (
                  <span className="t11 inline-flex items-center gap-1.5" style={{ color: C.mute }}>
                    <Phone size={11} /> {tr("No number on file")}
                  </span>
                )}
                {c.e ? (
                  <a href={`mailto:${c.e}`} className="t11 inline-flex items-center gap-1.5 break-all" style={{ color: C.body }}>
                    <Mail size={11} className="shrink-0" /> {c.e}
                  </a>
                ) : (
                  <span className="t11 inline-flex items-center gap-1.5" style={{ color: C.mute }}>
                    <Mail size={11} /> {tr("No email on file")}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {!showAll && filtered.length > PREVIEW && (
        <button onClick={() => setShowAll(true)} className="mt-3 t11 font-bold" style={{ color: C.green }}>
          {tr("Show all")} {filtered.length}
        </button>
      )}

      <div className="mt-4 rounded-lg px-3 py-2.5 flex gap-2" style={{ background: C.blueTint }}>
        <Info size={13} style={{ color: C.blue }} className="shrink-0 mt-0.5" />
        <span className="t11 leading-relaxed" style={{ color: C.body }}>
          {tr("These contacts were compiled by the project owner for this academic project, not published by any government department. Details can go out of date — please confirm before relying on them.")}
        </span>
      </div>
    </Card>
  );
}
