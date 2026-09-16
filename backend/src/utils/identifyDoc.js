export const DOC_KEYWORDS = {
  aadhaar: ["aadhaar", "aadhar", "uid"],
  pan: ["pan"],
  saledeed: ["saledeed", "sale_deed", "sale deed", "sale-deed", "deed"],
  extract: ["712", "7-12", "7_12", "satbara", "extract", "rtc", "khatauni", "patta", "jamabandi", "porcha"],
  ec: ["encumbrance", "ec_", "_ec", "ec-"],
  tax: ["tax", "receipt"],
  mutation: ["mutation"],
  khata: ["khata", "khasra"],
  survey: ["survey", "map", "plan"],
  noc: ["noc"],
  heir: ["heir", "succession"],
  poa: ["poa", "attorney"],
  photo: ["photo", "passport"],
  address: ["address", "bill", "utility"],
  titledeeds: ["title", "previous"],
  conversion: ["conversion", "na_order", "na-order"],
};

export function identifyDoc(filename) {
  const n = filename.toLowerCase();
  for (const [id, keys] of Object.entries(DOC_KEYWORDS)) {
    if (keys.some((k) => n.includes(k))) return id;
  }
  return null;
}

/**
 * Runs the same readiness checks the frontend prototype used to run
 * client-side, but against the real uploaded file (size on disk, upload
 * time as a proxy for "how old is this document").
 */
export function analyzeFile({ originalName, size, uploadedAt }, documentsById) {
  const id = identifyDoc(originalName);
  const doc = documentsById.get(id) || null;
  const ext = (originalName.split(".").pop() || "").toLowerCase();
  const issues = [];

  if (!doc) issues.push({ level: "warn", text: "Could not identify this document. Rename the file with the document name, e.g. sale_deed.pdf" });
  if (!["pdf", "jpg", "jpeg", "png"].includes(ext)) issues.push({ level: "warn", text: `.${ext} is not a format offices accept. Convert it to PDF or a clear image.` });
  if (size && size < 60000) issues.push({ level: "warn", text: "File is under 60 KB — a scan this small is usually too blurred to read at the counter." });
  if (size && size > 8000000) issues.push({ level: "warn", text: "File is over 8 MB. Most government portals reject uploads this large." });

  return { id, doc, issues, ok: issues.length === 0 };
}
