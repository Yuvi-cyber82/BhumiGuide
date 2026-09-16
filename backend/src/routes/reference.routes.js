import { Router } from "express";
import ReferenceData from "../models/ReferenceData.js";
import ProcedureStep from "../models/ProcedureStep.js";
import DocumentInfo from "../models/DocumentInfo.js";
import { OFFICE_TEMPLATES, officesFor } from "../seedData/offices.js";

const router = Router();

router.get("/locations", async (_req, res) => {
  const doc = await ReferenceData.findOne({ key: "locations" });
  res.json(doc?.value || {});
});

router.get("/charges", async (_req, res) => {
  const doc = await ReferenceData.findOne({ key: "chargeRules" });
  res.json(doc?.value || {});
});

router.get("/procedure", async (_req, res) => {
  const steps = await ProcedureStep.find({ kind: "main" }).sort({ order: 1 }).lean();
  const conditionalDocs = await ProcedureStep.find({ kind: "conditional" }).lean();
  const conditionalSteps = {};
  for (const c of conditionalDocs) {
    conditionalSteps[c.conditionKey] = {
      id: c.stepId, icon: c.icon, title: c.title, short: c.short, office: c.office,
      time: c.time, fee: c.fee, why: c.why, doThis: c.doThis,
    };
  }
  res.json({
    procedure: steps.map((s) => ({
      id: s.stepId, icon: s.icon, title: s.title, short: s.short, office: s.office,
      time: s.time, fee: s.fee, why: s.why, doThis: s.doThis, landTypes: s.landTypes,
    })),
    conditionalSteps,
  });
});

router.get("/documents", async (_req, res) => {
  const docs = await DocumentInfo.find({}).lean();
  const rules = await ReferenceData.findOne({ key: "documentRules" });
  res.json({
    documents: docs.map((d) => ({
      id: d.docId, name: d.name, cat: d.cat, icon: d.icon, desc: d.desc,
      what: d.what, why: d.why, where: d.where, fee: d.fee, mandatory: d.mandatory,
    })),
    categories: ["All Documents", "Personal", "Property", "Legal"],
    /* State-specific overrides — see seedData/states/*.js. The frontend
     * merges these onto the shared list in data/documents.js. */
    documentRules: rules?.value || {},
  });
});

router.get("/offices", (req, res) => {
  const { state, district, taluka } = req.query;
  if (!district) return res.json({ templates: OFFICE_TEMPLATES, offices: [] });
  res.json({ templates: OFFICE_TEMPLATES, offices: officesFor(state, district, taluka) });
});

export default router;
