/* ----------------------------- OFFICE DATA -----------------------------
 * The office TEMPLATES (types of office, what they handle, hours) come from
 * the backend once at startup. `officesFor` stays a synchronous, pure
 * function — it deterministically derives per-taluka addresses/phone/
 * distance from those templates, exactly as the original prototype did. */
import { getOffices } from "../api/reference";

export let OFFICE_TEMPLATES = [];

export async function loadOffices() {
  const { templates } = await getOffices();
  OFFICE_TEMPLATES = templates;
}

export function officesFor(state, district, taluka) {
  if (!district) return [];
  const seed = (district + (taluka || "")).length;
  return OFFICE_TEMPLATES.map((o, i) => ({
    ...o,
    name: `${o.type.split(" /")[0]}, ${taluka || district}`,
    address: `${o.type.split(" /")[0]}, ${["Station Road", "Civil Lines", "Court Road", "Main Bazar", "Gandhi Chowk"][(seed + i) % 5]}, ${taluka || district}, ${district} District, ${state}`,
    phone: `${o.phone}${(seed + i * 7) % 10}${(seed * 3 + i) % 10}`,
    distance: (((seed + i * 3) % 14) + 1.2).toFixed(1),
    open: ((seed + i) % 5) !== 0,
  }));
}
