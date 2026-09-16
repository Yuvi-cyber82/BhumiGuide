/* ----------------------------- LOCATION DATA -----------------------------
 * Fetched from the backend (GET /api/reference/locations, /charges) once at
 * app startup and cached here. Every other file in the app imports LOCATIONS
 * / CHARGE_RULES / rulesFor exactly as before — ES module named exports are
 * *live bindings*, so once loadLocations() below re-assigns them, every
 * importer sees the fresh values on its very next render. */
import { getLocations, getCharges } from "../api/reference";

export let LOCATIONS = {};
export let CHARGE_RULES = {};

export async function loadLocations() {
  const [locations, chargeRules] = await Promise.all([getLocations(), getCharges()]);
  LOCATIONS = locations;
  CHARGE_RULES = chargeRules;
}

export const rulesFor = (state) => CHARGE_RULES[state] || CHARGE_RULES.Maharashtra;
