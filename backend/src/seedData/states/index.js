import maharashtra from "./maharashtra.js";
import karnataka from "./karnataka.js";
import madhyaPradesh from "./madhyaPradesh.js";

/**
 * PHASE 1 — active states.
 *
 * This array is the only thing that decides which states the whole app
 * supports (state dropdown, charges, AI Assistant context, everything reads
 * from LOCATIONS/CHARGE_RULES below, which are built from this list).
 *
 * ── To add a state for a future phase ──────────────────────────────────
 * 1. Copy an existing file in this folder (e.g. maharashtra.js), rename it
 *    to the new state (e.g. gujarat.js), and fill in its districts/talukas
 *    and chargeRules.
 *    → Ready-made data for 7 more states (Tamil Nadu, Uttar Pradesh,
 *      Gujarat, Rajasthan, Telangana, West Bengal, Punjab) is already sitting
 *      in `_phase2-reference.js` in this folder — copy a block from there
 *      instead of starting from scratch.
 * 2. Import it below and add it to the STATES array.
 * 3. Restart the server (`npm run dev`) — it re-seeds automatically on boot.
 * That's it. No other file in the project needs to change.
 */
const STATES = [maharashtra, karnataka, madhyaPradesh];

export const LOCATIONS = Object.fromEntries(STATES.map((s) => [s.name, s.districts]));
export const CHARGE_RULES = Object.fromEntries(STATES.map((s) => [s.name, s.chargeRules]));

/* Per-state document overrides. A state file may leave `documentRules` out
 * entirely — then every document simply uses the shared definition in
 * seedData/documents.js. */
export const DOCUMENT_RULES = Object.fromEntries(STATES.map((s) => [s.name, s.documentRules || {}]));
