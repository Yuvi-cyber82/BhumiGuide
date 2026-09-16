import mongoose from "mongoose";

/* A small generic key/value store for reference (mock) data that is shaped
 * as an irregular tree rather than a flat list — LOCATIONS (state -> district
 * -> talukas) and CHARGE_RULES (state -> stamp duty rules). Seeded once by
 * `npm run seed`. */
const referenceDataSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
});

export default mongoose.model("ReferenceData", referenceDataSchema);
