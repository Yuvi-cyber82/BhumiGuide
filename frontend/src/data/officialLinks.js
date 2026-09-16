/* ------------------------- OFFICIAL GOVERNMENT LINKS -------------------------
 * Real, verified links to each state's official land records, revenue,
 * RERA and e-stamping/registration portals, plus two national portals that
 * work the same for every state. Verified against official .gov.in domains
 * (see the chat message this was delivered with for sources) — if a state
 * relaunches a portal under a new domain, update just that state's block
 * here; nothing else needs to change.
 *
 * To add a new state's links (matching a new state file in
 * ../../../backend/src/seedData/states/), add a new entry keyed by the
 * exact state name used in LOCATIONS. */
export const STATE_OFFICIAL_LINKS = {
  Maharashtra: {
    landRecords: { label: "Mahabhulekh — 7/12 & land records", url: "https://bhulekh.mahabhumi.gov.in/" },
    revenue: { label: "Revenue Department, Maharashtra", url: "https://landrecord.mahaonline.gov.in/" },
    rera: { label: "MahaRERA", url: "https://maharera.maharashtra.gov.in/" },
    eStamping: { label: "IGR Maharashtra — registration & e-stamping", url: "https://igrmaharashtra.gov.in/" },
  },
  Karnataka: {
    landRecords: { label: "Bhoomi — RTC & land records", url: "https://landrecords.karnataka.gov.in/" },
    revenue: { label: "Revenue Department (Kandaya), Karnataka", url: "https://kandaya.karnataka.gov.in/english" },
    rera: { label: "K-RERA (Karnataka RERA)", url: "https://rera.karnataka.gov.in/" },
    eStamping: { label: "IGR Karnataka — Kaveri Online Services", url: "https://igr.karnataka.gov.in/" },
  },
  "Madhya Pradesh": {
    landRecords: { label: "MP Bhulekh — Khasra/Khatauni & land records", url: "https://mpbhulekh.gov.in/" },
    revenue: { label: "Revenue Department, Madhya Pradesh", url: "https://www.revenue.mp.gov.in/" },
    rera: { label: "RERA Madhya Pradesh", url: "https://rera.mp.gov.in/" },
    eStamping: { label: "MP IGR — registration & e-stamping", url: "https://mpigr.gov.in/" },
  },
};
 
// These work the same regardless of which state is selected.
export const NATIONAL_LINKS = {
  courtStatus: { label: "eCourts — case status (all India)", url: "https://services.ecourts.gov.in/" },
  legalAid: { label: "NALSA — free legal aid (all India)", url: "https://nalsa.gov.in/" },
};
