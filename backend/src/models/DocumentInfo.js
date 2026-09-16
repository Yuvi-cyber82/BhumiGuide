import mongoose from "mongoose";

const documentInfoSchema = new mongoose.Schema({
  docId: { type: String, required: true, unique: true }, // e.g. "aadhaar"
  name: { type: String, required: true },
  cat: { type: String, required: true },
  icon: { type: String, required: true },
  desc: { type: String },
  what: { type: String },
  why: { type: String },
  where: { type: String },
  fee: { type: String },
  mandatory: { type: Boolean, default: false },
});

export default mongoose.model("DocumentInfo", documentInfoSchema);
