import mongoose from "mongoose";

/* One document per uploaded file in the Legal Verification flow. */
const verificationFileSchema = new mongoose.Schema({
  originalName: String,
  storedName: String, // filename on disk under backend/uploads
  mimeType: String,
  size: Number,
  identifiedDocId: String, // matched against DocumentInfo.docId, or null if unrecognised
  identifiedDocName: String,
  uploadedAt: { type: Date, default: Date.now },
});

const verificationRecordSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    survey: { type: String },
    state: String,
    district: String,
    taluka: String,
    files: { type: [verificationFileSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("VerificationRecord", verificationRecordSchema);
