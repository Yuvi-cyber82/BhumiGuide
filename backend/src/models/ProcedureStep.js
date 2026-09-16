import mongoose from "mongoose";

const procedureStepSchema = new mongoose.Schema({
  stepId: { type: String, required: true, unique: true }, // e.g. "s1", "c1"
  kind: { type: String, enum: ["main", "conditional"], default: "main" },
  conditionKey: { type: String }, // e.g. "agriToNonAgri" — only set for kind: "conditional"
  icon: { type: String, required: true }, // lucide-react icon name
  title: { type: String, required: true },
  short: { type: String },
  office: { type: String },
  time: { type: String },
  fee: { type: String },
  why: { type: String },
  doThis: { type: [String], default: [] },
  landTypes: { type: [String], default: [] },
  order: { type: Number, default: 0 },
});

export default mongoose.model("ProcedureStep", procedureStepSchema);
