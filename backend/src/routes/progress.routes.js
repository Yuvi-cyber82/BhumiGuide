import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import Progress from "../models/Progress.js";

const router = Router();

async function getOrCreate(userId) {
  let p = await Progress.findOne({ user: userId });
  if (!p) p = await Progress.create({ user: userId });
  return p;
}

router.get("/", requireAuth, async (req, res) => {
  const p = await getOrCreate(req.userId);
  res.json({ progress: p });
});

router.put("/", requireAuth, async (req, res) => {
  const { done, checked, profile, prefs } = req.body || {};
  const update = {};
  if (done !== undefined) update.done = done;
  if (checked !== undefined) update.checked = checked;
  if (profile !== undefined) update.profile = profile;
  if (prefs !== undefined) update.prefs = prefs;

  const p = await Progress.findOneAndUpdate({ user: req.userId }, update, { new: true, upsert: true });
  res.json({ progress: p });
});

router.post("/activity", requireAuth, async (req, res) => {
  const { title } = req.body || {};
  if (!title) return res.status(400).json({ error: "title is required." });
  const p = await Progress.findOneAndUpdate(
    { user: req.userId },
    { $push: { activity: { $each: [{ title }], $slice: -50 } } },
    { new: true, upsert: true }
  );
  res.json({ progress: p });
});

router.post("/notify", requireAuth, async (req, res) => {
  const { title, body } = req.body || {};
  if (!title) return res.status(400).json({ error: "title is required." });
  const p = await Progress.findOneAndUpdate(
    { user: req.userId },
    { $push: { notifications: { $each: [{ title, body }], $slice: -50 } } },
    { new: true, upsert: true }
  );
  res.json({ progress: p });
});

router.put("/notifications/read", requireAuth, async (req, res) => {
  const p = await Progress.findOneAndUpdate(
    { user: req.userId },
    { $set: { "notifications.$[].read": true } },
    { new: true, upsert: true }
  );
  res.json({ progress: p });
});

export default router;
