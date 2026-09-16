/* Real, written content for the Resources page's guides/articles — shown in
 * an in-app reader instead of the old "not written yet in the prototype"
 * placeholder. Keyed by the resource's title in ResourcesPage.jsx.
 *
 * Each entry is a list of sections: { heading?, body } — body is plain text
 * (rendered as a paragraph) or an array of strings (rendered as a bullet
 * list). Keep numbers/rates out of this content where possible — point to
 * the Charges page instead, so this never goes stale when charge data
 * changes. */
export const RESOURCE_CONTENT = {
  "Complete guide to buying land in India": [
    {
      body: "Buying land in India is a longer process than buying a flat, mainly because you are responsible for confirming the seller actually owns what they're selling — no bank or builder does that verification for you. This guide walks through the process end to end, in the order most buyers actually go through it.",
    },
    {
      heading: "1. Shortlist and do a first check",
      body: "Once you've found a property, get its survey/plot number and the seller's name before anything else. Cross-check that name against the state's land record portal (Land Buying page's Official Portals panel has the direct link for your state) — the name on the record is the only name that legally matters, not who's showing you the property.",
    },
    {
      heading: "2. Verify ownership properly",
      body: "Pull the land record extract (7/12, RTC, Khasra/Khatauni, or your state's equivalent — the app shows the right name for your state) and an Encumbrance Certificate covering at least the last 13–30 years. The EC is what reveals loans, disputes, or a second sale you wouldn't otherwise know about. Read the chain of previous title deeds back as far as you can — don't stop at just the seller's own purchase deed.",
    },
    {
      heading: "3. Collect documents",
      body: "See the \"Documents required for land purchase\" article for the full list. Agricultural land and inherited land both add extra documents — the Land Buying page's Smart Procedure Generator adds the right conditional steps automatically once you answer a few questions about your case.",
    },
    {
      heading: "4. Agree, pay stamp duty, register",
      body: "Once verification is clean, both parties sign a sale agreement, stamp duty and the registration fee are paid (use the Charges page to estimate this for your state and property value), and both parties plus two witnesses appear in person at the Sub-Registrar office for registration. Carry originals and photocopies of everything.",
    },
    {
      heading: "5. Mutation — the step people forget",
      body: "Registration makes you the legal owner. It does not, by itself, update the revenue department's land record — that's a separate step called mutation, and it can take 15–30 days. Skipping it is the single most common reason a buyer's name never shows up when they check the land record a year later.",
    },
    {
      heading: "A caution on timelines",
      body: "A clean purchase typically takes 30–45 days once verification starts, but a disputed title, a missing heir signature, or a pending NA conversion can add months. Budget time as generously as you budget money.",
    },
  ],
 
  "Documents required for land purchase": [
    {
      body: "Exactly which documents you need depends on the type of land and how the seller acquired it, but almost every purchase needs the following core set.",
    },
    {
      heading: "Always required",
      body: [
        "Registered sale deed — proof of the seller's own purchase.",
        "Land record extract (7/12 / RTC / Khasra-Khatauni, depending on your state) — shows the current recorded owner, area and tenure.",
        "Encumbrance Certificate (EC) — usually for 13 to 30 years, showing every registered transaction or claim.",
        "Previous title deeds — read this chain back as far as you can.",
        "Latest property tax receipt.",
        "Aadhaar and PAN of both buyer and seller (PAN is mandatory above ₹5 lakh).",
        "Passport-size photos and address proof of both parties.",
      ],
    },
    {
      heading: "Needed only in specific cases",
      body: [
        "Legal heir / succession certificate — if the seller inherited the land rather than buying it.",
        "NA (non-agricultural) conversion order — if the land is currently agricultural and you plan to build on it.",
        "Registered Power of Attorney — if someone other than the owner is signing on the owner's behalf. Confirm it hasn't been revoked.",
        "Board resolution and company documents — if the buyer or seller is a company rather than an individual.",
        "NOC from the relevant authority — for land near forests, coasts, defence areas, or under certain housing society rules; which authority applies depends on the specific restriction.",
      ],
    },
    {
      heading: "Where to check what you actually need",
      body: "Use the Documents page in this app — it lists what each document means, why it matters, and roughly where to get it, and the Legal Verification page will tell you exactly what's missing once you upload what you already have.",
    },
  ],
 
  "How to verify land ownership online": [
    {
      body: "Most states now let you look up basic land record details online, though the exact steps differ. Here's the general walkthrough — the Resources page's Official Portals panel gives you the exact link for your selected state so you don't have to search for it.",
    },
    {
      heading: "Step 1 — Open your state's land records portal",
      body: "Select your state on the Land Buying or Charges page, then open the \"State land records portal\" link on this Resources page — it takes you straight to the correct official site (Mahabhulekh for Maharashtra, Bhoomi for Karnataka, MP Bhulekh for Madhya Pradesh).",
    },
    {
      heading: "Step 2 — Search by survey/plot number, not by name",
      body: "Searching by owner name is unreliable — names are recorded inconsistently and common names collide. The survey or plot number (get this from the seller, or from local revenue officials) is the reliable search key almost every portal uses.",
    },
    {
      heading: "Step 3 — Read the extract carefully",
      body: [
        "Owner name — must match the seller exactly, including spelling.",
        "Area — should match what you're being told you're buying.",
        "Tenure/rights column — flags loans, disputes, or restricted tenure classes that need government permission to sell.",
        "Date of last update — an extract older than 3 months should be treated with caution; ask for a fresh one.",
      ],
    },
    {
      heading: "Step 4 — Cross-check with the Encumbrance Certificate",
      body: "The land record extract alone won't show every loan or legal claim — the EC (from the Sub-Registrar office, sometimes also available online) is what catches those. Treat online lookup as your first check, not your only one.",
    },
  ],
 
  "Understanding the encumbrance certificate": [
    {
      body: "An Encumbrance Certificate (EC) is a record of every registered transaction against a property over a chosen period — sales, mortgages, gifts, leases, and legal claims. It's the single most important document for catching a hidden loan or a property sold twice.",
    },
    {
      heading: "How to get one",
      body: "Apply at the Sub-Registrar office where the property is registered, or through your state's online registration portal if it offers this service. Ask for at least 13 years of coverage as a minimum; 30 years is safer for older properties.",
    },
    {
      heading: "How to read it",
      body: [
        "\"Nil encumbrance\" for the period requested means no registered transaction was found — this is what you want to see.",
        "Any entry showing a mortgage or loan that hasn't been marked as released is a red flag — it means a bank or lender may have a claim on the property.",
        "An entry showing the same survey number sold to a different buyer, with no matching sale-to-you in between, means someone may be trying to sell it twice.",
        "A pending court case or attachment order listed against the property should stop the purchase until resolved.",
      ],
    },
    {
      heading: "What a suspicious EC looks like",
      body: "Watch for a certificate that's been issued for a suspiciously short period (hiding an older loan), one where entries stop abruptly a few years before the sale, or one the seller is reluctant to let you verify independently at the Sub-Registrar office yourself.",
    },
  ],
 
  "Agricultural land: who can buy and where": [
    {
      body: "Agricultural land is regulated more strictly than residential or commercial property in most Indian states, and the rules vary significantly by state.",
    },
    {
      heading: "Who can buy",
      body: "Several states restrict agricultural land purchases to people who are already classified as farmers, or place a ceiling on how much a single family can hold. Whether this applies to you depends on your state — check the tenure class shown on the land record extract, and confirm with the local revenue office before committing to a purchase.",
    },
    {
      heading: "Tenure class matters",
      body: "The land record extract shows a tenure classification. Some classes (like certain tribal or restricted tenures) require Collector-level permission before the land can be sold at all, regardless of who the buyer is.",
    },
    {
      heading: "Building on agricultural land",
      body: "If you intend to construct a house, shop, or any non-agricultural structure, the land first needs an NA (non-agricultural) conversion order from the Collector's office. This is a separate process from the purchase itself and can take 30–90 days.",
    },
    {
      heading: "Ceiling limits",
      body: "Land ceiling laws cap how much agricultural land one family can hold in aggregate across a state. Buying land that pushes a family over this limit can be legally contested later, so this is worth confirming for larger purchases.",
    },
    {
      heading: "Use the Smart Procedure Generator",
      body: "On the Land Buying page, answering a few questions (agricultural land, planning to build, inherited land, etc.) automatically adds the right conditional steps — including NA conversion — to your personalised procedure.",
    },
  ],
};