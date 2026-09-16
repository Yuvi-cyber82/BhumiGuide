import { apiPost } from "./client";

/* `lang` goes with the question so the assistant answers in the language the
 * user has chosen — the live model is told which one, and the rule-based
 * fallback returns templates the frontend translates. */
export const ask = (question, loc, profile, history, lang) =>
  apiPost("/ai/ask", { question, loc, profile, history, lang });
