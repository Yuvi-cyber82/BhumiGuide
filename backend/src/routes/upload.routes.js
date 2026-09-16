import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import { analyzeFile } from "../utils/identifyDoc.js";
import DocumentInfo from "../models/DocumentInfo.js";
import VerificationRecord from "../models/VerificationRecord.js";
import Progress from "../models/Progress.js";

const router = Router();

router.post("/", requireAuth, upload.array("files", 20), async (req, res) => {
  try {
    const { survey, state, district, taluka } = req.body || {};
    const docs = await DocumentInfo.find({}).lean();
    const documentsById = new Map(docs.map((d) => [d.docId, { id: d.docId, name: d.name, mandatory: d.mandatory }]));

    const files = (req.files || []).map((f) => {
      const analysis = analyzeFile({ originalName: f.originalname, size: f.size }, documentsById);
      return {
        originalName: f.originalname,
        storedName: f.filename,
        mimeType: f.mimetype,
        size: f.size,
        identifiedDocId: analysis.id,
        identifiedDocName: analysis.doc?.name || null,
        _issues: analysis.issues,
      };
    });

    const record = await VerificationRecord.create({
      user: req.userId,
      survey,
      state,
      district,
      taluka,
      files: files.map(({ _issues, ...f }) => f),
    });

    const mandatory = docs.filter((d) => d.mandatory);
    const foundIds = files.map((f) => f.identifiedDocId).filter(Boolean);
    const missing = mandatory.filter((d) => !foundIds.includes(d.docId));
    const errors = files.flatMap((f) => f._issues.filter((i) => i.level === "error"));
    const warns = files.flatMap((f) => f._issues.filter((i) => i.level === "warn"));
    const readiness = files.length ? Math.round(((mandatory.length - missing.length) / mandatory.length) * 100) : 0;

    await Progress.findOneAndUpdate(
      { user: req.userId },
      { $push: { activity: { $each: [{ title: `Uploaded ${files.length} document(s) for legal verification.` }], $slice: -50 } } },
      { upsert: true }
    );

    res.status(201).json({
      record: { id: record._id, survey, state, district, taluka, files: record.files, createdAt: record.createdAt },
      analysis: {
        files: files.map((f) => ({ ...f, issues: f._issues })),
        missing: missing.map((d) => ({ id: d.docId, name: d.name })),
        errors,
        warns,
        readiness,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Upload failed.", detail: err.message });
  }
});

router.get("/", requireAuth, async (req, res) => {
  const records = await VerificationRecord.find({ user: req.userId }).sort({ createdAt: -1 }).lean();
  res.json({ records });
});

export default router;
