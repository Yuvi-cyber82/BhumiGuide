/* ----------------------------- LOCATION DATA -----------------------------
 * Actual per-state data now lives in ./states/ — one file per state — so
 * that adding a new state is a self-contained change (see
 * ./states/index.js for the exact steps). Everything else in the backend
 * keeps importing LOCATIONS / CHARGE_RULES from here unchanged. */
export { LOCATIONS, CHARGE_RULES, DOCUMENT_RULES } from "./states/index.js";
