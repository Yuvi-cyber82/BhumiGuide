const API_URL = "https://api.anthropic.com/v1/messages";

/**
 * Calls the Anthropic Messages API. Requires ANTHROPIC_API_KEY in
 * backend/.env — get one at https://console.anthropic.com/.
 * Docs: https://docs.claude.com/en/api/messages
 */
export async function askClaude({ system, messages, model, maxTokens = 700 }) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: model || process.env.ANTHROPIC_MODEL || "claude-3-5-haiku-20241022",
      max_tokens: maxTokens,
      system,
      messages,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Anthropic API error ${res.status}: ${detail.slice(0, 300)}`);
  }

  const data = await res.json();
  return data.content?.map((b) => b.text).join("\n").trim() || "";
}
