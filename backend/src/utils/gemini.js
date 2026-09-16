const API_BASE = "https://generativelanguage.googleapis.com/v1beta";
 
/**
 * Calls the Google Gemini API. Gemini has a genuinely free tier — get a key
 * (no credit card needed) at https://aistudio.google.com/apikey and put it
 * in backend/.env as GEMINI_API_KEY.
 */
 
// Google renames/retires model versions over time, so instead of hardcoding
// one (which breaks with a 404 the moment it's retired), we ask the API
// which models this key can actually use and cache the answer.
let cachedModel = null;
 
async function resolveModel(apiKey, preferred) {
  if (preferred) return preferred; // explicit GEMINI_MODEL override always wins
  if (cachedModel) return cachedModel;
 
  const res = await fetch(`${API_BASE}/models?key=${apiKey}`);
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Could not list Gemini models (${res.status}): ${detail.slice(0, 300)}`);
  }
  const data = await res.json();
  const candidates = (data.models || []).filter((m) =>
    (m.supportedGenerationMethods || []).includes("generateContent")
  );
  if (!candidates.length) throw new Error("This Gemini API key has no models available for generateContent.");
 
  // Prefer a fast "flash" model (cheapest/most generous free-tier quota),
  // and prefer the "latest" alias where one exists.
  const byPreference =
    candidates.find((m) => /flash/i.test(m.name) && /latest/i.test(m.name)) ||
    candidates.find((m) => /flash/i.test(m.name)) ||
    candidates[0];
 
  cachedModel = byPreference.name.replace(/^models\//, "");
  return cachedModel;
}
 
export async function askGemini({ system, messages, model, maxTokens = 700 }) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not set");
 
  const modelName = await resolveModel(apiKey, model || process.env.GEMINI_MODEL);
  const url = `${API_BASE}/models/${modelName}:generateContent?key=${apiKey}`;
 
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      systemInstruction: system ? { parts: [{ text: system }] } : undefined,
      contents: messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      generationConfig: { maxOutputTokens: maxTokens },
    }),
  });
 
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    // A cached model name that stops working (retired mid-session) shouldn't
    // stick around and keep failing — clear it so the next call re-resolves.
    cachedModel = null;
    throw new Error(`Gemini API error ${res.status}: ${detail.slice(0, 300)}`);
  }
 
  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts || [];
  const text = parts.map((p) => p.text || "").join("\n").trim();
  if (!text) throw new Error("Gemini returned an empty response (it may have blocked the reply).");
  return text;
}