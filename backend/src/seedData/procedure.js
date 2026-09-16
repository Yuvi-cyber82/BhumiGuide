/* ----------------------------- PROCEDURE DATA -----------------------------
 * Icons are stored as lucide-react icon NAMES (strings) since the backend
 * cannot store React components. The frontend maps the name back to the
 * actual icon component. */

export const PROCEDURE = [
  {
    id: "s1", icon: "Search", title: "Check Land Ownership",
    short: "Verify who legally owns the land before anything else.",
    office: "Tehsildar / Taluk Office", time: "1 – 2 days", fee: "₹100 – ₹200",
    why: "If the seller is not the recorded owner, every later step collapses. This is the cheapest step and the one that prevents the biggest losses.",
    doThis: [
      "Collect the record of rights for the survey / gat number",
      "Match the owner name on the record with the seller's photo ID",
      "Ask for the chain of previous title deeds (last 30 years is standard)",
      "If the seller is an agent, ask for a registered Power of Attorney",
    ],
    landTypes: ["Agricultural", "Residential", "Commercial", "Industrial"],
  },
  {
    id: "s2", icon: "FileText", title: "Verify Land Record Extract",
    short: "Read the state land record for ownership, area and crop entries.",
    office: "Tehsildar Office / Online land records portal", time: "1 – 3 days", fee: "₹100 – ₹200",
    why: "The extract shows the current holder, the land area, tenure type and any loan or court entry noted in the 'other rights' column.",
    doThis: [
      "Download the latest extract — not one older than 3 months",
      "Check the 'other rights' column for bank loans or disputes",
      "Confirm the area matches the sale agreement",
      "For agricultural land, check the tenure class (restricted or unrestricted)",
    ],
    landTypes: ["Agricultural", "Residential", "Commercial", "Industrial"],
  },
  {
    id: "s3", icon: "ShieldCheck", title: "Get Encumbrance Certificate",
    short: "Confirm the land carries no mortgage, lien or pending dues.",
    office: "Sub-Registrar Office", time: "1 – 3 days", fee: "₹200 – ₹500",
    why: "An encumbrance certificate lists every registered transaction on the property. A blank certificate for the search period is what you want to see.",
    doThis: [
      "Apply for a 13-year search period at minimum (30 years is safer)",
      "Read every entry — a mortgage entry must have a matching release entry",
      "Cross-check the property description against the sale deed",
    ],
    landTypes: ["Agricultural", "Residential", "Commercial", "Industrial"],
  },
  {
    id: "s4", icon: "Handshake", title: "Agreement to Sale",
    short: "Put price, timeline and conditions in writing before paying.",
    office: "Drafted privately, notarised or registered", time: "1 day", fee: "As per agreement value",
    why: "The agreement fixes the price and the deadline, and records the advance you paid. Without it, an advance is very hard to recover.",
    doThis: [
      "State the advance amount and the mode of payment in the document",
      "Set a clear deadline for completing registration",
      "Add a clause on who bears stamp duty and registration cost",
      "Keep all payments through bank transfer, never cash",
    ],
    landTypes: ["Agricultural", "Residential", "Commercial", "Industrial"],
  },
  {
    id: "s5", icon: "Stamp", title: "Pay Stamp Duty",
    short: "Pay state stamp duty on the higher of market value or ready reckoner value.",
    office: "Authorised bank / e-stamping counter", time: "1 day", fee: "Percentage of property value",
    why: "Stamp duty is a state tax. Under-paying it makes the deed inadmissible as evidence and attracts a penalty later.",
    doThis: [
      "Check the government ready reckoner / circle rate for the area",
      "Duty is charged on the higher of agreement value and circle rate",
      "Ask whether a rebate applies for a female buyer in your state",
      "Keep the e-stamp certificate — it is needed at registration",
    ],
    landTypes: ["Agricultural", "Residential", "Commercial", "Industrial"],
  },
  {
    id: "s6", icon: "FileSignature", title: "Register the Sale Deed",
    short: "Execute and register the deed in front of the Sub-Registrar.",
    office: "Sub-Registrar Office", time: "1 – 2 days", fee: "Registration fee as per state",
    why: "Registration is what transfers legal title. An unregistered sale deed does not give you ownership, whatever the seller says.",
    doThis: [
      "Both parties plus two witnesses must attend with original ID",
      "Carry the e-stamp certificate, PAN and passport photos",
      "Biometrics and photographs are captured at the office",
      "Collect the registered deed and the receipt with the document number",
    ],
    landTypes: ["Agricultural", "Residential", "Commercial", "Industrial"],
  },
  {
    id: "s7", icon: "RefreshCw", title: "Apply for Mutation",
    short: "Get your name entered into the revenue records.",
    office: "Tehsildar / Taluk Office", time: "15 – 30 days", fee: "₹100 – ₹300",
    why: "Registration transfers title; mutation updates the government's revenue record. Until mutation is done, tax bills and future sales stay in the seller's name.",
    doThis: [
      "Apply within 90 days of registration where the state requires it",
      "Submit the registered deed copy and the old extract",
      "Track the objection period — usually 15 to 30 days",
      "Download the updated extract and check your name on it",
    ],
    landTypes: ["Agricultural", "Residential", "Commercial", "Industrial"],
  },
];

/* Conditional steps injected by the Smart Procedure Generator */
export const CONDITIONAL_STEPS = {
  agriToNonAgri: {
    id: "c1", icon: "Landmark", title: "Non-Agricultural (NA) Conversion",
    short: "Convert agricultural land before using it for a house or shop.",
    office: "Collector Office", time: "30 – 90 days", fee: "As per conversion rules",
    why: "Building on agricultural land without conversion is unauthorised construction, and banks will refuse a loan on it.",
    doThis: ["Apply to the Collector with the layout plan", "Attach the land record extract and title chain", "Pay the conversion premium once sanctioned"],
  },
  inherited: {
    id: "c2", icon: "Users", title: "Verify Succession & Heir Consent",
    short: "Inherited land needs every legal heir on record.",
    office: "Tehsildar Office / Civil Court", time: "10 – 45 days", fee: "₹500 – ₹5,000",
    why: "A sale signed by one heir alone can be challenged by the others years later. This is the single most common source of land litigation.",
    doThis: ["Get the legal heir or succession certificate", "List every heir and take written consent from each", "Check whether a partition deed already exists"],
  },
  joint: {
    id: "c3", icon: "Scale", title: "Collect All Co-Owner Signatures",
    short: "Every co-owner must sign the deed or give a registered POA.",
    office: "Sub-Registrar Office", time: "Adds 2 – 7 days", fee: "POA registration charges",
    why: "A deed missing one co-owner's signature transfers only that seller's share, not the whole property.",
    doThis: ["Get the ownership share of each co-owner in writing", "Arrange a registered POA for anyone who cannot attend", "Confirm no minor holds a share — that needs court permission"],
  },
  urban: {
    id: "c4", icon: "Landmark", title: "Check Layout & Planning Approval",
    short: "Confirm the plot sits in an approved layout.",
    office: "Municipal Corporation / Development Authority", time: "3 – 10 days", fee: "₹500 – ₹2,000",
    why: "Unapproved layouts cannot get building permission or a water and power connection, and resale value stays low.",
    doThis: ["Ask for the sanctioned layout plan number", "Verify the plot number appears in the approved layout", "Check the zoning and the road setback rules"],
  },
  company: {
    id: "c5", icon: "FileText", title: "Company Board Resolution & Authorisation",
    short: "A company buyer needs documented internal approval.",
    office: "Company records / Sub-Registrar Office", time: "2 – 5 days", fee: "Nil",
    why: "The Sub-Registrar will ask who is authorised to sign for the company. Without a board resolution, registration stops at the counter.",
    doThis: ["Pass a board resolution approving the purchase", "Authorise one director or officer to sign", "Carry the company PAN, incorporation certificate and resolution copy"],
  },
  loan: {
    id: "c6", icon: "Landmark", title: "Bank Legal & Technical Valuation",
    short: "Your lender runs its own title check before disbursing.",
    office: "Lending bank / empanelled advocate", time: "7 – 21 days", fee: "₹3,000 – ₹15,000",
    why: "The bank's legal opinion is a free second review of your title. If the bank refuses the property, treat that as a serious warning.",
    doThis: ["Submit the title chain to the bank's advocate", "Arrange the technical valuation site visit", "Get the sanction letter before fixing the registration date"],
  },
};
