import { Router } from "express";
import { optionalAuth } from "../middleware/auth.js";
import { aiAnswerRuleBased, buildAnswerText } from "../utils/aiRuleBased.js";
import { askGroq } from "../utils/groq.js";
import { CHARGE_RULES } from "../seedData/locations.js";
import Progress from "../models/Progress.js";

const router = Router();

const rulesFor = (state) => CHARGE_RULES[state] || CHARGE_RULES.Maharashtra;

/* The language the user has selected in the app, named so the model can be
 * told which one to answer in. Codes match LANGS in frontend/src/i18n.js. */
const LANG_NAMES = {
  en: "English", hi: "Hindi", mr: "Marathi", ta: "Tamil", te: "Telugu",
  kn: "Kannada", gu: "Gujarati", bn: "Bengali", pa: "Punjabi",
};

function buildSystemPrompt(loc = {}, profile, langName) {
  const r = rulesFor(loc.state);
  const where = loc.district ? `${loc.district}, ${loc.state}` : loc.state || "not selected";

  return `You are the BhumiGuide Intelligence Assistant, embedded in an Indian land-buying guidance web app.
Answer questions about buying land/property in India: ownership verification, required documents,
stamp duty & registration charges, government offices involved, procedure/timelines, and common fraud patterns.

Current user context:
- Location: ${where}
- Applicable (indicative, non-legal) stamp duty: ${r.stamp}%, registration fee: ${r.reg}%${r.regCap ? ` (capped at ₹${r.regCap})` : ""}
- Local land record is called: ${r.landRecord}, issued by the ${r.office}
- Female buyer stamp duty rebate: ${r.femaleRebate ? `${r.femaleRebate}%` : "none in this state"}
${profile ? `- User's stated case details: ${JSON.stringify(profile)}` : ""}

Style rules:
- Be concise and practical — short paragraphs or bullet points, no long preambles.
- Ground numeric/procedural claims in the context above when it's relevant to the question.
- Always clarify this is general guidance, not legal advice, when the question is about a specific dispute or transaction risk.
- If the user hasn't set a location and the question needs one, ask them to select state & district in the app first.
- Never invent a specific law section or court case; speak in general terms instead.

Format rules (the app renders your reply, so these matter):
- Reply in plain Markdown only. Never write HTML tags — no <br>, no <div>, no <table>.
- Start with the answer itself. Do not open with a bold restatement of the question.
- Prefer a short paragraph plus a bullet list. Use "- " for bullets and "1. " for ordered steps.
- Use a table only for a genuine side-by-side comparison, at most 3 columns, one short line per cell.
  If a cell would need a line break or a nested list, use a bullet list instead of a table.
- Bold at most a few key terms. Do not bold whole sentences or every cell of a table.
- Headings are optional; if used, "### " and no deeper.
- No emoji.
${langName && langName !== "English" ? `\nLanguage:
- Write the entire answer in ${langName}, in that language's own script. The user has chosen ${langName} in the app.
- Keep document names, portal names and acronyms (7/12, RTC, Khasra, Khatauni, PAN, Aadhaar, NOC, NA, EC) in the form a reader of ${langName} would see on the actual document.
- Keep digits, percentages and \u20b9 amounts as digits.` : ""}`;
}

router.post("/ask", optionalAuth, async (req, res) => {
  const { question, loc = {}, profile, history = [], lang = "en" } = req.body || {};
  if (!question || !question.trim()) {
    return res.status(400).json({ error: "A question is required." });
  }

  const useLive = !!process.env.GROQ_API_KEY;
  let answer;
  /* Set only on the rule-based path: the English templates plus their values,
   * for the frontend to translate. See utils/aiRuleBased.js. */
  let segments = null;
  let source = "rule-based";

  if (useLive) {
    try {
      let priorTurns = history
        .filter((m) => m && m.text)
        .slice(-8)
        .map((m) => ({ role: m.role === "ai" ? "assistant" : "user", content: m.text }));
      // Keep the same "starts with a user turn" hygiene as before — a fresh
      // conversation's opening greeting is an assistant turn and should not
      // lead the list sent to the model.
      const firstUserIdx = priorTurns.findIndex((m) => m.role === "user");
      priorTurns = firstUserIdx === -1 ? [] : priorTurns.slice(firstUserIdx);

      const messages = [...priorTurns, { role: "user", content: question }];
      answer = await askGroq({ system: buildSystemPrompt(loc, profile, LANG_NAMES[lang]), messages });
      source = "groq";
    } catch (err) {
      console.error("Groq call failed, falling back to rule-based answer:", err.message);
      ({ segments } = aiAnswerRuleBased(question, loc, profile));
      answer = buildAnswerText({ segments });
    }
  } else {
    ({ segments } = aiAnswerRuleBased(question, loc, profile));
    answer = buildAnswerText({ segments });
  }

  // Best-effort activity log for logged-in users.
  if (req.userId) {
    Progress.findOneAndUpdate(
      { user: req.userId },
      { $push: { activity: { $each: [{ title: `Asked the AI Assistant: "${question.slice(0, 80)}"` }], $slice: -50 } } },
      { upsert: true }
    ).catch(() => {});
  }

  res.json({ answer, segments, source });
});

export default router;
