import ReferenceData from "../models/ReferenceData.js";
import ProcedureStep from "../models/ProcedureStep.js";
import DocumentInfo from "../models/DocumentInfo.js";

import { LOCATIONS, CHARGE_RULES, DOCUMENT_RULES } from "../seedData/locations.js";
import { PROCEDURE, CONDITIONAL_STEPS } from "../seedData/procedure.js";
import { DOCUMENTS } from "../seedData/documents.js";

/**
 * Upserts all reference (mock) data into MongoDB. Idempotent — safe to call
 * every time the server boots, and also exposed as a standalone `npm run
 * seed` script for re-seeding a persistent database on demand.
 */
export async function seedReferenceData({ quiet = false } = {}) {
  const log = quiet ? () => {} : console.log;

  await ReferenceData.findOneAndUpdate({ key: "locations" }, { value: LOCATIONS }, { upsert: true });
  await ReferenceData.findOneAndUpdate({ key: "chargeRules" }, { value: CHARGE_RULES }, { upsert: true });
  await ReferenceData.findOneAndUpdate({ key: "documentRules" }, { value: DOCUMENT_RULES }, { upsert: true });

  for (let i = 0; i < PROCEDURE.length; i++) {
    const s = PROCEDURE[i];
    await ProcedureStep.findOneAndUpdate({ stepId: s.id }, { ...s, stepId: s.id, kind: "main", order: i }, { upsert: true });
  }
  for (const [conditionKey, s] of Object.entries(CONDITIONAL_STEPS)) {
    await ProcedureStep.findOneAndUpdate({ stepId: s.id }, { ...s, stepId: s.id, kind: "conditional", conditionKey }, { upsert: true });
  }

  for (const d of DOCUMENTS) {
    await DocumentInfo.findOneAndUpdate({ docId: d.id }, { ...d, docId: d.id }, { upsert: true });
  }

  log(
    `🌱 Reference data ready: ${Object.keys(LOCATIONS).length} states, ${PROCEDURE.length} procedure steps, ${Object.keys(CONDITIONAL_STEPS).length} conditional steps, ${DOCUMENTS.length} documents.`
  );
}
