import React from "react";
import { MapPin } from "lucide-react";
import { Btn, Label, Select } from "./ui";
import { LOCATIONS } from "../data/locations";
import { useTr } from "../i18n";
import { C } from "../theme";

/* ================================================================== *
 *  LOCATION PICKER
 * ================================================================== */

export function LocationFields({ loc, setLoc, t, layout = "column" }) {
  const tr = useTr();
  const districts = loc.state ? Object.keys(LOCATIONS[loc.state]) : [];
  const talukas = loc.state && loc.district ? LOCATIONS[loc.state][loc.district] : [];
  const fields = (
    <>
      <div>
        <Label required>{t("loc.state")}</Label>
        <Select value={loc.state} placeholder={t("loc.selectState")} options={Object.keys(LOCATIONS)} label={tr}
          onChange={(v) => setLoc({ state: v, district: "", taluka: "" })} />
      </div>
      <div>
        <Label required>{t("loc.district")}</Label>
        <Select value={loc.district} placeholder={t("loc.selectDistrict")} options={districts} disabled={!loc.state} label={tr}
          onChange={(v) => setLoc({ ...loc, district: v, taluka: "" })} />
      </div>
      <div>
        <Label>{t("loc.taluka")}</Label>
        <Select value={loc.taluka} placeholder={t("loc.selectTaluka")} options={talukas} disabled={!loc.district} label={tr}
          onChange={(v) => setLoc({ ...loc, taluka: v })} />
      </div>
    </>
  );

  // "flat" lets the caller drop the three fields straight into its own grid.
  if (layout === "flat") return fields;
  // Inline grid: auto-fit needs no media query, so it works even if the
  // stylesheet is stripped, and it reflows on container width, not viewport.
  if (layout === "row")
    return (
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
        {fields}
      </div>
    );
  return <div className="space-y-3">{fields}</div>;
}

export function LocationBanner({ loc, onChange, t }) {
  const tr = useTr();
  return (
    <div className="rounded-xl px-4 py-3 flex items-center justify-between gap-3 flex-wrap" style={{ background: C.tint2, border: `1px solid ${C.green}22` }}>
      <div className="flex items-center gap-3">
        <MapPin size={18} style={{ color: C.green }} />
        <div>
          <div className="t11 font-semibold" style={{ color: C.mute }}>{tr("Location selected")}</div>
          <div className="text-sm font-bold" style={{ color: C.ink }}>
            {loc.state ? [loc.state, loc.district, loc.taluka].filter(Boolean).map(tr).join("  ›  ") : tr("No location selected yet")}
          </div>
        </div>
      </div>
      <Btn size="sm" variant="outline" onClick={onChange}>{t("btn.changeLocation")}</Btn>
    </div>
  );
}

/* ================================================================== *
 *  HOME
 * ================================================================== */

export function TopoPattern({ id }) {
  // Echoes the contour lines inside the logo emblem.
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }} aria-hidden="true">
      <defs>
        <pattern id={id} width="220" height="180" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={C.green} strokeWidth="1" opacity="0.13">
            <path d="M-20 40 Q 60 10 120 45 T 260 38" />
            <path d="M-20 72 Q 60 44 120 78 T 260 70" />
            <path d="M-20 104 Q 60 78 120 110 T 260 102" />
            <path d="M-20 136 Q 60 110 120 142 T 260 134" />
            <path d="M-20 168 Q 60 142 120 174 T 260 166" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function HeroArt() {
  // Full-bleed: slices to fill whatever width the hero has, so there is never
  // an empty half. The scene weights its detail to the right.
  return (
    <svg
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMaxYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bgHillA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CFE7D7" /><stop offset="100%" stopColor="#BFDFCA" />
        </linearGradient>
        <linearGradient id="bgHillB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A9D4B9" /><stop offset="100%" stopColor="#96CAA8" />
        </linearGradient>
        <linearGradient id="bgHillC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#77BE92" /><stop offset="100%" stopColor="#5FAE7E" />
        </linearGradient>
      </defs>

      {/* distant ridges */}
      <path d="M0 232 Q 170 168 340 214 T 660 190 T 950 216 T 1200 186 L1200 420 L0 420Z" fill="url(#bgHillA)" />
      {/* mid fields */}
      <path d="M0 286 Q 220 236 430 278 T 820 262 T 1200 288 L1200 420 L0 420Z" fill="url(#bgHillB)" />
      {/* foreground */}
      <path d="M0 344 Q 260 306 520 340 T 980 332 T 1200 350 L1200 420 L0 420Z" fill="url(#bgHillC)" />

      {/* field furrow lines, like the logo's terraces */}
      <g stroke="#FFFFFF" strokeWidth="2.5" opacity=".38" fill="none">
        <path d="M540 366 Q 760 342 1010 358" />
        <path d="M560 386 Q 780 362 1030 378" />
        <path d="M600 406 Q 810 384 1060 398" />
      </g>

      {/* farmhouse */}
      <g transform="translate(872,214)">
        <rect x="0" y="46" width="104" height="74" rx="4" fill="#FFFFFF" />
        <path d="M-12 48 L52 4 L116 48 Z" fill="#2E4A3A" />
        <rect x="24" y="80" width="24" height="40" fill="#2E4A3A" />
        <rect x="64" y="72" width="26" height="22" rx="3" fill="#D7ECDF" />
      </g>

      {/* trees */}
      <g>
        <circle cx="742" cy="266" r="30" fill="#4E9B6B" />
        <rect x="737" y="288" width="9" height="36" fill="#6B5741" />
        <circle cx="796" cy="288" r="21" fill="#3F8858" />
        <rect x="792" y="304" width="7" height="26" fill="#6B5741" />
        <circle cx="1082" cy="278" r="26" fill="#489364" />
        <rect x="1077" y="298" width="8" height="32" fill="#6B5741" />
      </g>

      {/* location pin — the emblem's motif */}
      <g transform="translate(660,96)">
        <path d="M0 0 C -26 0 -46 20 -46 45 C -46 78 0 122 0 122 C 0 122 46 78 46 45 C 46 20 26 0 0 0Z" fill="#D93F3F" />
        <circle cx="0" cy="44" r="17" fill="#FFFFFF" />
      </g>

      {/* path leading to the house */}
      <path d="M600 420 Q 700 356 838 336 L900 334 Q 760 352 690 420 Z" fill="#EFF6F1" opacity=".7" />
    </svg>
  );
}

