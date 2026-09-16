import { CHARGE_RULES } from "../seedData/locations.js";

const rulesFor = (state) => CHARGE_RULES[state] || CHARGE_RULES.Maharashtra;

/**
 * Deterministic, zero-cost fallback answer engine. Used automatically when
 * no GEMINI_API_KEY is configured, and as a safety net if the live LLM
 * call fails for any reason (e.g. rate limit, no network).
 *
 * ── Why this returns segments instead of a finished sentence ───────────
 * The answer has to appear in whichever of the nine languages the user has
 * chosen. Translating here would mean shipping a second copy of the whole
 * dictionary to the backend — including the 826 district and taluka names,
 * which only the frontend has.
 *
 * So each answer is returned as a list of segments: an English template with
 * {0}, {1} … placeholders, plus the values to drop into them. The frontend
 * runs each template through the same tr()/fill() machinery as the rest of
 * the interface, and translates any value that is itself a name (a state, a
 * district, "7/12 Extract", "Tehsildar Office"). A template with no
 * translation falls back to English on its own, exactly like every other
 * string in the app.
 *
 * buildAnswerText() below renders the same segments in English, which is what
 * the activity log stores and what an older frontend would display.
 */
export function aiAnswerRuleBased(qRaw, loc = {}, profile) {
  const q = qRaw.toLowerCase();
  const r = rulesFor(loc.state);
  const has = (...w) => w.some((x) => q.includes(x));

  /* The opening line that says which district the answer is for. */
  const ctx = loc.state
    ? loc.district
      ? { t: "Answering for {0}, {1}.", v: [loc.district, loc.state] }
      : { t: "Answering for {0}.", v: [loc.state] }
    : {
        t: "Tip: select your state and district at the top so I can answer for your district instead of generally.",
        v: [],
      };

  const state = loc.state || "";
  const seg = (t, ...v) => ({ segments: [ctx, { t, v }] });

  if (has("stamp duty", "stamp", "duty rate", "मुद्रांक"))
    return seg(
      state
        ? "Stamp duty in {0} is around {1}% of the property value, and the registration fee is {2}%{3}.\n\nThree things people get wrong:\n1. Duty is charged on the higher of your agreement value and the government circle rate — not on what you actually paid.\n2. {4}\n3. Pay it before registration and carry the e-stamp certificate to the office.\n\nUse the Charges page to get a number for your property value."
        : "Stamp duty in most states is around {1}% of the property value, and the registration fee is {2}%{3}.\n\nThree things people get wrong:\n1. Duty is charged on the higher of your agreement value and the government circle rate — not on what you actually paid.\n2. {4}\n3. Pay it before registration and carry the e-stamp certificate to the office.\n\nUse the Charges page to get a number for your property value.",
      state,
      r.stamp,
      r.reg,
      r.regCap ? ` (capped at ₹${r.regCap.toLocaleString("en-IN")})` : "",
      r.femaleRebate
        ? { t: "A female buyer gets roughly {0}% less duty here.", v: [r.femaleRebate] }
        : { t: "There is no female-buyer rebate in this state.", v: [] }
    );

  if (has("7/12", "712", "satbara", "extract", "rtc", "khatauni", "patta", "record of right"))
    return seg(
      "In {0} the land record is called the {1}, issued by the {2}.\n\nIt tells you four things: who currently holds the land, the area, the tenure type, and — in the \"other rights\" column — any bank loan or dispute noted against it.\n\nHow to get it: download it from your state's land records portal, or apply at the {2}. It costs roughly ₹15 to ₹100.\n\nOne rule worth following: never accept an extract older than three months. Entries change.",
      state || "your state",
      r.landRecord,
      r.office
    );

  if (has("document", "papers", "kagaz", "कागज", "दस्तावेज"))
    return seg(
      "For a straightforward purchase you need:\n1. Registered sale deed\n2. {0} — the land record extract\n3. Encumbrance certificate for 13 to 30 years\n4. Previous title deeds (chain of ownership)\n5. Property tax receipt, up to date\n6. Aadhaar and PAN of both buyer and seller\n7. Passport photos and address proof\n\nExtra documents depend on the case: inherited land needs a legal heir certificate, farmland used for construction needs an NA order, and a company buyer needs a board resolution.\n\nOpen the Documents page to tick these off as you collect them.",
      r.landRecord
    );

  if (has("ownership", "owner", "who owns", "verify land", "check land"))
    return seg(
      "Start with the {0} from the {1} — the name on that record is the legal holder. Then:\n\n• Match that name against the seller's Aadhaar or PAN, letter for letter.\n• Ask for the previous title deeds and read the chain backwards for at least 30 years.\n• Pull the encumbrance certificate from the Sub-Registrar office to see every registered transaction.\n• If someone is selling on the owner's behalf, ask for a registered power of attorney and check it is still valid.\n\nIf the seller resists any of this, treat it as a warning sign, not an inconvenience.",
      r.landRecord,
      r.office
    );

  if (has("office", "where to go", "kaha jana", "sub registrar", "tehsil", "visit"))
    return seg(
      "You will deal with these offices:\n\n• {0} — land record extract, mutation, heir certificates\n• Sub-Registrar Office — sale deed registration, encumbrance certificate\n• Collector Office — NA conversion and appeals\n• Municipal body or Gram Panchayat — property tax and layout approval\n\nThe Land Buying page shows the actual addresses, working hours and distance for {1}, so you do not travel to the wrong counter.",
      r.office,
      loc.taluka || loc.district || "your taluka"
    );

  if (has("how many days", "how long", "time", "duration", "kitne din"))
    return seg(
      "A clean purchase usually runs 30 to 45 days end to end:\n\n• Ownership and record checks — 2 to 5 days\n• Encumbrance certificate — 1 to 3 days\n• Agreement to sale — 1 day\n• Stamp duty payment — 1 day\n• Registration — 1 to 2 days\n• Mutation — 15 to 30 days\n\nMutation is the long tail. Registration makes you the owner; mutation just updates the revenue record afterwards."
    );

  if (has("online", "portal", "website", "internet"))
    return seg(
      "Partly. Most states let you download the land record extract and pay stamp duty online, and many publish encumbrance details on the registration portal.\n\nWhat still needs you in person: the registration appointment itself. Both parties and two witnesses have to appear at the Sub-Registrar office for biometrics and photographs.\n\nSo: do the research online, then book one office visit for registration."
    );

  if (has("missing", "not have", "without", "lost"))
    return seg(
      "It depends which one is missing.\n\n• A missing encumbrance certificate — stop. Do not pay anything until you have it.\n• A missing old title deed — apply for a certified copy at the Sub-Registrar office where it was registered.\n• A missing mutation entry for the seller — the seller must complete their own mutation first.\n• A missing NOC — find out which authority issues it before you sign the agreement.\n\nUpload what you have on the Legal Verification page and the readiness check will tell you exactly what is still open."
    );

  if (has("aadhaar", "aadhar", "pan", "mandatory", "compulsory"))
    return seg(
      "PAN is mandatory for property transactions above ₹5 lakh, for both parties.\n\nAadhaar is used for identity verification and biometrics at the Sub-Registrar office. In practice you will not get through registration without it, though the strict legal position varies by state.\n\nCarry originals plus two photocopies of each, for both buyer and seller."
    );

  if (has("fraud", "scam", "cheat", "fake", "dhokha"))
    return seg(
      "The patterns that catch most buyers:\n\n• The seller is not the recorded owner, or sells through an unregistered power of attorney.\n• The same land is sold to two buyers — visible in the encumbrance certificate.\n• A pending court case that never appears in the documents shown to you.\n• Farmland sold as plots without an NA conversion order.\n• Heavy pressure to pay in cash, quickly, \"before someone else takes it\".\n\nVerify the survey number through the official land records portal, and never pay in cash."
    );

  if (has("agricultural", "farm", "kheti", "na conversion", "convert"))
    return seg(
      "Agricultural land has extra rules:\n\n• Several states allow only an existing farmer to buy farmland — check whether {0} restricts this.\n• The tenure class on the {1} matters. Restricted tenure needs Collector permission to sell.\n• To build a house or shop you need an NA (non-agricultural) conversion order from the Collector — 30 to 90 days.\n• Ceiling limits cap how much agricultural land one family can hold.\n\nRun the Smart Procedure Generator on the Land Buying page — it adds the conversion step automatically when you say you plan to build.",
      state || "your state",
      r.landRecord
    );

  if (has("hello", "hi ", "namaste", "hey"))
    return {
      segments: [
        { t: "Hello. I can help with land buying procedure, required documents, stamp duty, government offices, and fraud checks.", v: [] },
        ctx,
        { t: "Ask me something specific, like \"what documents do I need for agricultural land\" or \"how much is stamp duty here\".", v: [] },
      ],
    };

  const fallback = {
    segments: [
      ctx,
      {
        t: "I can answer questions about:\n• The step-by-step buying procedure\n• Required documents and what each one means\n• Stamp duty and registration charges\n• Which government office handles what\n• Fraud warning signs and how to check them\n\nTry asking it in plain words — for example, \"who do I meet first\" or \"is my land record too old\".",
        v: [],
      },
    ],
  };
  if (profile) fallback.segments.push({ t: "I also know your case: {0}.", v: [Object.values(profile).join(", ")] });
  return fallback;
}

/** The same answer rendered in English — for the activity log, and for any
 *  client that does not understand segments. */
export function buildAnswerText({ segments }) {
  const fill = (t, v) =>
    String(t).replace(/\{(\d)\}/g, (_, i) => {
      const val = v[Number(i)];
      return val && typeof val === "object" && val.t ? fill(val.t, val.v || []) : String(val ?? "");
    });
  return segments.map((s) => fill(s.t, s.v || [])).join("\n\n");
}
