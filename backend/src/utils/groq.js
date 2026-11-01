const API_BASE = "https://api.groq.com/openai/v1";

/**
 * Calls the Groq API. Groq has a genuinely free tier — get a key (no credit
 * card needed) at https://console.groq.com/keys and put it in backend/.env
 * as GROQ_API_KEY.
 *
 * Groq speaks the OpenAI chat-completions format, so the system prompt is
 * just another message with role "system".
 */

// Groq retires and renames model versions over time, so instead of hardcoding
// one (which breaks with a 404 the moment it's retired), we ask the API which
// models this key can actually use and cache the answer.
let cachedModel = null;

/* In preference order, when GROQ_MODEL is not set. The first one that the key
 * actually has access to wins. The 70B model writes noticeably better Hindi,
 * Marathi and the other Indian languages the app supports, so it leads. */
const PREFERRED = [
  "llama-3.3-70b-versatile",
  "openai/gpt-oss-120b",
  "openai/gpt-oss-20b",
  "llama-3.1-8b-instant",
];

async function resolveModel(apiKey, preferred) {
  if (preferred) return preferred; // explicit GROQ_MODEL override always wins
  if (cachedModel) return cachedModel;

  const res = await fetch(`${API_BASE}/models`, {
    headers: { authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Could not list Groq models (${res.status}): ${detail.slice(0, 300)}`);
  }
  const data = await res.json();
  const available = (data.data || []).map((m) => m.id);
  if (!available.length) throw new Error("This Groq API key has no models available.");

  // Skip audio/vision/guard models — this app only sends and reads text.
  const textOnly = available.filter((id) => !/whisper|tts|guard|vision|prompt-?guard/i.test(id));

  cachedModel = PREFERRED.find((p) => textOnly.includes(p)) || textOnly[0] || available[0];
  return cachedModel;
}

export async function askGroq({ system, messages, model, maxTokens = 700 }) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("GROQ_API_KEY is not set");

  const modelName = await resolveModel(apiKey, model || process.env.GROQ_MODEL);

  const res = await fetch(`${API_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: modelName,
      messages: [
        ...(system ? [{ role: "system", content: system }] : []),
        ...messages.map((m) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: m.content,
        })),
      ],
      max_tokens: maxTokens,
      temperature: 0.4,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    // A cached model name that stops working (retired mid-session) shouldn't
    // stick around and keep failing — clear it so the next call re-resolves.
    cachedModel = null;
    throw new Error(`Groq API error ${res.status}: ${detail.slice(0, 300)}`);
  }

  const data = await res.json();
  const text = (data.choices?.[0]?.message?.content || "").trim();
  if (!text) throw new Error("Groq returned an empty response.");
  return text;
}
