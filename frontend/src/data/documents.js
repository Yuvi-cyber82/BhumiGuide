/* ----------------------------- DOCUMENT DATA -----------------------------
 * Fetched from the backend (GET /api/reference/documents) once at app
 * startup. See procedure.js for why this "fetch into a live-binding export"
 * pattern lets every existing page keep working unchanged.
 *
 * DOCUMENTS is the shared list that applies everywhere. DOCUMENT_RULES holds
 * the per-state differences that the state files in
 * backend/src/seedData/states/ record — a different name for the same record
 * (7/12 vs RTC vs Khasra), a document one state requires and another does not,
 * or one that simply does not exist in that state. documentsFor(state) merges
 * the two; call it wherever a state is known, and fall back to DOCUMENTS when
 * it isn't. */
import { getDocuments } from "../api/reference";
import { iconByName } from "../utils/icons";

export let DOCUMENTS = [];
export let DOC_CATS = ["All Documents", "Personal", "Property", "Legal"];
export let DOCUMENT_RULES = {};

export async function loadDocuments() {
  const { documents, categories, documentRules } = await getDocuments();
  DOCUMENTS = documents.map((d) => ({ ...d, icon: iconByName(d.icon) }));
  DOC_CATS = categories;
  DOCUMENT_RULES = documentRules || {};
}

/** The document list as it applies in one state.
 *
 * Each returned document keeps every field of the shared definition, plus:
 *   status      "mandatory" | "optional" | "not-applicable"
 *   stateNote   what this state does differently, when there is something
 *   source      URL backing that note
 *   baseName    the shared name, when this state renames the document
 *
 * A state only overrides what its own file documents with a source; anything
 * else is returned exactly as the shared list has it. Passing no state (or an
 * unknown one) returns the shared list untouched. */
export function documentsFor(state) {
  const rules = (state && DOCUMENT_RULES[state]) || {};
  return DOCUMENTS.map((d) => {
    const r = rules[d.id];
    const base = { ...d, status: d.mandatory ? "mandatory" : "optional" };
    if (!r) return base;
    return {
      ...base,
      ...(r.name ? { name: r.name, baseName: d.name } : {}),
      ...(r.where ? { where: r.where } : {}),
      ...(r.status ? { status: r.status } : {}),
      ...(r.note ? { stateNote: r.note } : {}),
      ...(r.source ? { source: r.source } : {}),
      mandatory: (r.status || base.status) === "mandatory",
    };
  });
}

/** The documents a state actually requires — what the readiness score on the
 * Legal Verification page is measured against. */
export function mandatoryFor(state) {
  return documentsFor(state).filter((d) => d.status === "mandatory");
}
