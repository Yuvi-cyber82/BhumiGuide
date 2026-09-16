/* ----------------------------- PROCEDURE DATA -----------------------------
 * Fetched from the backend (GET /api/reference/procedure) once at app
 * startup. Icon names coming back from the API are resolved to actual
 * lucide-react components here, so every page that reads PROCEDURE /
 * CONDITIONAL_STEPS keeps using `<step.icon />` exactly as before. */
import { getProcedure } from "../api/reference";
import { iconByName } from "../utils/icons";

export let PROCEDURE = [];
export let CONDITIONAL_STEPS = {};

export async function loadProcedure() {
  const { procedure, conditionalSteps } = await getProcedure();
  PROCEDURE = procedure.map((s) => ({ ...s, icon: iconByName(s.icon) }));
  const cs = {};
  for (const [key, s] of Object.entries(conditionalSteps)) cs[key] = { ...s, icon: iconByName(s.icon) };
  CONDITIONAL_STEPS = cs;
}
