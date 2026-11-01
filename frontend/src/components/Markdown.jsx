import React from "react";
import { C, FONT } from "../theme";

/* ================================================================== *
 *  MARKDOWN
 *
 *  The live model answers in Markdown — headings, ** bold **, bullet
 *  lists and pipe tables. Printed straight into a <div> those arrive as
 *  a wall of asterisks and pipes, which is what the chat bubble used to
 *  show. This turns the common subset into real elements.
 *
 *  Deliberately hand-written rather than pulling in a Markdown library:
 *  the app only needs the handful of constructs a chat answer uses, and
 *  a parser that builds React nodes cannot inject HTML. Nothing here
 *  goes near dangerouslySetInnerHTML, so a model (or anything that gets
 *  into a model's output) cannot put script into the page. Raw HTML in
 *  the source is shown as the text it is, with one exception: <br>,
 *  which models emit inside table cells often enough to be worth
 *  honouring as a line break.
 *
 *  What is supported: headings (#..####), pipe tables, bullet lists
 *  (-, *, •), numbered lists, blockquotes, fenced and indented code,
 *  horizontal rules, and inline **bold**, *italic*, `code` and
 *  [links](url). Anything else falls through as plain text, which is
 *  the right failure: the reader still sees the words.
 *
 *  The text is already in the reader's language before it gets here —
 *  the model is told which language to answer in, and the rule-based
 *  fallback is translated by the page — so nothing in this file calls
 *  tr(). It formats; it does not translate.
 * ================================================================== */

/* <br> is the only tag honoured. Using U+2028 rather than \n keeps a
 * break that appears inside a table cell from splitting the row. */
const BR = " ";

const normalise = (src) =>
  String(src ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/<br\s*\/?>/gi, BR);

/* ------------------------------ inline ------------------------------ */

/* Ordered by precedence: code first, so ** inside a code span stays
 * literal, then links, then bold, then italic. */
const INLINE = [
  { re: /`([^`\n]+)`/, tag: "code" },
  { re: /\[([^\]\n]+)\]\(\s*([^)\s]+)\s*\)/, tag: "link" },
  { re: /\*\*([^\n]+?)\*\*|__([^\n]+?)__/, tag: "bold" },
  { re: /(?<![A-Za-z0-9])\*([^*\n]+?)\*(?![A-Za-z0-9])|(?<![A-Za-z0-9])_([^_\n]+?)_(?![A-Za-z0-9])/, tag: "italic" },
];

const CODE_STYLE = {
  background: C.line2,
  borderRadius: 4,
  padding: "1px 4px",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  fontSize: "0.94em",
};

/** Markdown inline spans → React nodes. Recurses so **bold `code`** works. */
function inline(text, key = "i") {
  if (!text) return null;

  /* A <br> that survived to this point becomes a real line break. */
  if (text.includes(BR)) {
    return text.split(BR).map((part, i, all) => (
      <React.Fragment key={`${key}-br${i}`}>
        {inline(part, `${key}-br${i}`)}
        {i < all.length - 1 && <br />}
      </React.Fragment>
    ));
  }

  let best = null;
  for (const rule of INLINE) {
    const m = rule.re.exec(text);
    if (m && (best === null || m.index < best.m.index)) best = { m, rule };
  }
  if (!best) return text;

  const { m, rule } = best;
  const before = text.slice(0, m.index);
  const after = text.slice(m.index + m[0].length);
  const body = m[1] ?? m[2] ?? "";
  let node;

  if (rule.tag === "code") {
    node = <code key={`${key}c`} style={CODE_STYLE}>{body}</code>;
  } else if (rule.tag === "link") {
    const href = m[2] || "";
    const safe = /^(https?:|mailto:)/i.test(href);
    node = safe ? (
      <a key={`${key}a`} href={href} target="_blank" rel="noopener noreferrer"
         style={{ color: C.green, textDecoration: "underline" }}>
        {inline(m[1], `${key}a`)}
      </a>
    ) : (
      /* Anything that is not plainly a web or mail address is shown as
       * text. A javascript: or data: URL is not something a land-records
       * answer ever needs, and this is the cheapest way to be sure. */
      <React.Fragment key={`${key}a`}>{inline(m[1], `${key}a`)}</React.Fragment>
    );
  } else if (rule.tag === "bold") {
    node = <strong key={`${key}b`} style={{ color: C.ink, fontWeight: 700 }}>{inline(body, `${key}b`)}</strong>;
  } else {
    node = <em key={`${key}e`}>{inline(body, `${key}e`)}</em>;
  }

  return [before ? inline(before, `${key}p`) : null, node, after ? inline(after, `${key}s`) : null];
}

/* ------------------------------ blocks ------------------------------ */

const isRule = (l) => /^\s*([-*_])(\s*\1){2,}\s*$/.test(l);
const isTableSep = (l) => /^\s*\|?[\s:]*-{2,}[\s:|-]*\|?\s*$/.test(l) && l.includes("-");
const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
const bullet = (l) => /^\s*[-*•]\s+(.*)$/.exec(l);
const numbered = (l) => /^\s*(\d+)[.)]\s+(.*)$/.exec(l);

const TD = { padding: "5px 9px", borderBottom: `1px solid ${C.line2}`, verticalAlign: "top", textAlign: "left" };

function blocks(src) {
  const lines = normalise(src).split("\n");
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    /* fenced code */
    if (/^\s*```/.test(line)) {
      const body = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) body.push(lines[i++]);
      i++;
      out.push(
        <pre key={out.length} style={{ ...CODE_STYLE, padding: "8px 10px", overflowX: "auto", margin: "6px 0", whiteSpace: "pre" }}>
          {body.join("\n").replace(new RegExp(BR, "g"), "\n")}
        </pre>
      );
      continue;
    }

    if (isRule(line)) {
      out.push(<hr key={out.length} style={{ border: 0, borderTop: `1px solid ${C.line}`, margin: "10px 0" }} />);
      i++;
      continue;
    }

    /* heading */
    const h = /^\s*(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      const level = h[1].length;
      out.push(
        <div key={out.length}
          style={{ color: C.ink, fontWeight: 700, fontSize: level <= 2 ? "1.12em" : "1.04em", margin: out.length ? "10px 0 4px" : "0 0 4px" }}>
          {inline(h[2], `h${out.length}`)}
        </div>
      );
      i++;
      continue;
    }

    /* table — a row of pipes followed by a |---|---| separator */
    if (line.includes("|") && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const head = cells(line);
      const rows = [];
      i += 2;
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        rows.push(cells(lines[i]));
        i++;
      }
      out.push(
        <div key={out.length} style={{ overflowX: "auto", margin: "6px 0", border: `1px solid ${C.line}`, borderRadius: 8 }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: FONT }}>
            <thead>
              <tr style={{ background: C.tint2 }}>
                {head.map((c, k) => (
                  <th key={k} style={{ ...TD, color: C.ink, fontWeight: 700, whiteSpace: "nowrap" }}>{inline(c, `th${k}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri}>
                  {/* A short row is padded rather than dropped — a model that
                    * forgets a trailing pipe should still render. */}
                  {head.map((_, ci) => <td key={ci} style={TD}>{inline(r[ci] ?? "", `td${ri}-${ci}`)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    /* bullet list */
    if (bullet(line)) {
      const items = [];
      while (i < lines.length && bullet(lines[i])) items.push(bullet(lines[i++])[1]);
      out.push(
        <ul key={out.length} style={{ margin: "4px 0", paddingLeft: 18, listStyle: "disc" }}>
          {items.map((it, k) => <li key={k} style={{ margin: "2px 0" }}>{inline(it, `ul${out.length}-${k}`)}</li>)}
        </ul>
      );
      continue;
    }

    /* numbered list — kept at the number the answer actually used, so a
     * list that starts at 3 is not silently renumbered to 1 */
    if (numbered(line)) {
      const first = Number(numbered(line)[1]);
      const items = [];
      while (i < lines.length && numbered(lines[i])) items.push(numbered(lines[i++])[2]);
      out.push(
        <ol key={out.length} start={first} style={{ margin: "4px 0", paddingLeft: 20, listStyle: "decimal" }}>
          {items.map((it, k) => <li key={k} style={{ margin: "2px 0" }}>{inline(it, `ol${out.length}-${k}`)}</li>)}
        </ol>
      );
      continue;
    }

    /* blockquote */
    if (/^\s*>\s?/.test(line)) {
      const body = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) body.push(lines[i++].replace(/^\s*>\s?/, ""));
      out.push(
        <div key={out.length} style={{ borderLeft: `3px solid ${C.line}`, paddingLeft: 10, margin: "6px 0", color: C.mute }}>
          {blocks(body.join("\n"))}
        </div>
      );
      continue;
    }

    /* paragraph — consecutive plain lines, joined with soft breaks */
    const para = [];
    while (
      i < lines.length && lines[i].trim() && !isRule(lines[i]) &&
      !/^\s*(#{1,4}\s|>|```)/.test(lines[i]) && !bullet(lines[i]) && !numbered(lines[i]) &&
      !(lines[i].includes("|") && i + 1 < lines.length && isTableSep(lines[i + 1]))
    ) para.push(lines[i++]);
    out.push(
      <p key={out.length} style={{ margin: out.length ? "6px 0 0" : 0 }}>
        {para.map((l, k) => (
          <React.Fragment key={k}>
            {k > 0 && <br />}
            {inline(l, `p${out.length}-${k}`)}
          </React.Fragment>
        ))}
      </p>
    );
  }

  return out;
}

/** Render a Markdown string as React elements. */
export function Markdown({ text, className, style }) {
  return <div className={className} style={style}>{blocks(text)}</div>;
}

export default Markdown;
