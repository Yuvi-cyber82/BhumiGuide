import React from "react";
import { Bot, ChevronRight, ChevronDown, Info, Headphones } from "lucide-react";
import { BRAND_TAGLINE, C, FONT, LOGO_MARK } from "../theme";
import { useTr } from "../i18n";

/* ================================================================== *
 *  SHARED UI
 * ================================================================== */

export function Btn({ children, onClick, variant = "solid", size = "md", icon: Icon, full, type = "button", disabled }) {
  const sizes = { sm: "px-3 py-2 text-xs", md: "px-4 py-2.5 text-sm", lg: "px-6 py-3 text-sm" };
  const base = {
    solid: { background: disabled ? "#9CB3A4" : C.green, color: "#fff", border: "1px solid transparent" },
    outline: { background: "#fff", color: C.green, border: `1px solid ${C.green}` },
    ghost: { background: "#fff", color: C.body, border: `1px solid ${C.line}` },
    danger: { background: "#fff", color: C.red, border: `1px solid ${C.red}` },
    dark: { background: C.greenDark, color: "#fff", border: "1px solid transparent" },
  }[variant];
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, fontFamily: FONT }}
      className={`${sizes[size]} ${full ? "w-full" : ""} rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed`}
    >
      {Icon && <Icon size={15} strokeWidth={2.2} />}
      {children}
    </button>
  );
}

export function Card({ children, className = "", pad = true, style }) {
  return (
    <div
      style={{ background: "#fff", border: `1px solid ${C.line}`, ...style }}
      className={`rounded-xl ${pad ? "p-5" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Label({ children, required }) {
  return (
    <label className="block text-xs font-semibold mb-1.5" style={{ color: C.body }}>
      {children} {required && <span style={{ color: C.red }}>*</span>}
    </label>
  );
}

/* `label` translates what the user reads while `value` stays the untranslated
 * English string — so `landType === "Agricultural"` keeps working in every
 * language. Selects that list real place names simply leave `label` out. */
export function Select({ value, onChange, options, placeholder, disabled, label = (x) => x }) {
  return (
    <div className="relative">
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        style={{ borderColor: C.line, color: value ? C.ink : C.mute, background: disabled ? "#F7F8F7" : "#fff", fontFamily: FONT }}
        className="w-full appearance-none rounded-lg border px-3 py-2.5 pr-9 text-sm focus:outline-none focus:ring-2 disabled:cursor-not-allowed"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>{label(o)}</option>
        ))}
      </select>
      <ChevronDown size={15} className="absolute right-3 top-3 pointer-events-none" style={{ color: C.mute }} />
    </div>
  );
}

export function Input({ value, onChange, placeholder, type = "text", prefix }) {
  return (
    <div className="relative">
      {prefix && (
        <span className="absolute left-3 top-2.5 text-sm" style={{ color: C.mute }}>{prefix}</span>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ borderColor: C.line, fontFamily: FONT, paddingLeft: prefix ? 26 : 12 }}
        className="w-full rounded-lg border py-2.5 pr-3 text-sm focus:outline-none focus:ring-2"
      />
    </div>
  );
}

export function Pill({ children, tone = "green", size = "sm" }) {
  const tones = {
    green: { bg: C.tint, fg: C.green },
    red: { bg: C.redTint, fg: C.red },
    amber: { bg: C.amberTint, fg: C.amber },
    blue: { bg: C.blueTint, fg: C.blue },
    gray: { bg: "#F1F3F2", fg: C.mute },
  }[tone];
  return (
    <span
      style={{ background: tones.bg, color: tones.fg }}
      className={`inline-flex items-center gap-1 rounded-full font-semibold ${size === "sm" ? "px-2 py-0.5 t11" : "px-3 py-1 text-xs"}`}
    >
      {children}
    </span>
  );
}

export function IconBadge({ icon: Icon, tone = "green", size = 40 }) {
  const tones = { green: [C.tint, C.green], amber: [C.amberTint, C.amber], red: [C.redTint, C.red], blue: [C.blueTint, C.blue] }[tone];
  return (
    <div className="rounded-lg flex items-center justify-center shrink-0" style={{ background: tones[0], width: size, height: size }}>
      <Icon size={size * 0.45} style={{ color: tones[1] }} strokeWidth={2} />
    </div>
  );
}

export function Breadcrumb({ items, onNav }) {
  return (
    <div className="flex items-center flex-wrap gap-1.5 text-xs mb-4" style={{ color: C.mute }}>
      {items.map((it, i) => (
        <React.Fragment key={it.label}>
          {i > 0 && <ChevronRight size={12} />}
          {it.page ? (
            <button onClick={() => onNav(it.page)} className="hover:underline">{it.label}</button>
          ) : (
            <span style={{ color: C.ink }} className="font-medium">{it.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export function PageHead({ title, sub, right }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
      <div>
        <h1 className="pageH1 font-extrabold tracking-tight" style={{ color: C.ink }}>{title}</h1>
        {sub && <p className="mt-1.5 text-sm max-w-2xl" style={{ color: C.mute }}>{sub}</p>}
      </div>
      {right}
    </div>
  );
}

export function Notice({ tone = "green", icon: Icon = Info, title, children }) {
  const map = { green: [C.tint2, C.green], amber: [C.amberTint, C.amber], blue: [C.blueTint, C.blue], red: [C.redTint, C.red] }[tone];
  return (
    <div className="rounded-xl p-4 flex gap-3" style={{ background: map[0], border: `1px solid ${map[1]}22` }}>
      <Icon size={17} style={{ color: map[1] }} className="shrink-0 mt-0.5" />
      <div className="text-xs leading-relaxed" style={{ color: C.body }}>
        {title && <div className="font-bold mb-0.5" style={{ color: map[1] }}>{title}</div>}
        {children}
      </div>
    </div>
  );
}

export function HelpCard({ t, onNav }) {
  return (
    <Card style={{ background: C.tint2, borderColor: `${C.green}25` }}>
      <div className="flex items-start gap-3">
        <Headphones size={20} style={{ color: C.green }} className="mt-0.5" />
        <div>
          <div className="text-sm font-bold" style={{ color: C.ink }}>{t("help.title")}</div>
          <p className="text-xs mt-1 mb-3 leading-relaxed" style={{ color: C.mute }}>{t("help.body")}</p>
          <Btn size="sm" variant="outline" icon={Bot} onClick={() => onNav("ai")}>{t("btn.askAI")}</Btn>
        </div>
      </div>
    </Card>
  );
}

export function Donut({ segments, center, label, size = 150 }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = size / 2 - 14;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#EEF1EF" strokeWidth="16" />
        {segments.map((s, i) => {
          const len = (s.value / total) * circ;
          const el = (
            <circle
              key={i} cx={size / 2} cy={size / 2} r={r} fill="none"
              stroke={s.color} strokeWidth="16"
              strokeDasharray={`${len} ${circ - len}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-xl font-extrabold" style={{ color: C.ink }}>{center}</div>
        <div className="t10 text-center leading-tight px-4" style={{ color: C.mute }}>{label}</div>
      </div>
    </div>
  );
}

export function Toggle({ on, onChange }) {
  return (
    <button
      onClick={() => onChange(!on)}
      className="w-11 h-6 rounded-full relative transition-colors shrink-0"
      style={{ background: on ? C.green : "#D5DAD7" }}
      aria-pressed={on}
    >
      <span className="absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all shadow" style={{ left: on ? 22 : 2 }} />
    </button>
  );
}

export function Modal({ open, onClose, children, width = 420 }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(10,25,16,0.45)" }} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full mh88 overflow-y-auto"
        style={{ maxWidth: width, fontFamily: FONT }}
      >
        {children}
      </div>
    </div>
  );
}

export function Logo({ light, size = 36, showTagline = false, stacked = false }) {
  const tr = useTr();
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <img
        src={LOGO_MARK}
        alt="BhumiGuide Intelligence"
        width={size}
        height={size}
        style={{
          width: size, height: size, objectFit: "contain", display: "block",
          borderRadius: 8,
          background: light ? "#FFFFFF" : "transparent",
          padding: light ? 2 : 0,
        }}
      />
      <div className="leading-none">
        <div
          className="font-extrabold tracking-tight"
          style={{ fontSize: size * 0.42, color: light ? "#FFFFFF" : "#16243B", letterSpacing: "-0.02em" }}
        >
          BhumiGuide
        </div>
        <div
          className="font-extrabold tracking-tight"
          style={{ fontSize: size * 0.42, marginTop: 1, color: light ? "#9FD8B0" : C.green, letterSpacing: "-0.02em" }}
        >
          Intelligence
        </div>
        {showTagline && (
          <div
            className="font-semibold uppercase"
            style={{ fontSize: size * 0.2, marginTop: 4, letterSpacing: "0.14em", color: light ? "#A9C6B4" : C.mute }}
          >
            {tr(BRAND_TAGLINE)}
          </div>
        )}
      </div>
    </div>
  );
}

