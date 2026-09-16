/* ----------------------------- OFFICE DATA ----------------------------- */

export const OFFICE_TEMPLATES = [
  { type: "Tehsildar / Taluk Office", handles: "Land record extracts, mutation, heir certificates", hours: "10:00 AM – 5:45 PM", closed: "Sun & 2nd / 4th Sat", phone: "+91 712 255 0" },
  { type: "Sub-Registrar Office", handles: "Sale deed registration, encumbrance certificate", hours: "10:00 AM – 6:00 PM", closed: "Sun & public holidays", phone: "+91 712 255 1" },
  { type: "Revenue Department", handles: "Land revenue, tenure queries, record correction", hours: "10:00 AM – 5:30 PM", closed: "Sun & 2nd / 4th Sat", phone: "+91 712 255 2" },
  { type: "Collector Office", handles: "NA conversion, appeals, land acquisition matters", hours: "10:00 AM – 6:00 PM", closed: "Sun & public holidays", phone: "+91 712 255 3" },
  { type: "Municipal / Gram Panchayat", handles: "Property tax, khata, layout approval", hours: "9:30 AM – 5:00 PM", closed: "Sun", phone: "+91 712 255 4" },
];

export function officesFor(state, district, taluka) {
  if (!district) return [];
  const seed = (district + (taluka || "")).length;
  return OFFICE_TEMPLATES.map((o, i) => ({
    ...o,
    name: `${o.type.split(" /")[0]}, ${taluka || district}`,
    address: `${o.type.split(" /")[0]}, ${["Station Road", "Civil Lines", "Court Road", "Main Bazar", "Gandhi Chowk"][(seed + i) % 5]}, ${taluka || district}, ${district} District, ${state}`,
    phone: `${o.phone}${(seed + i * 7) % 10}${(seed * 3 + i) % 10}`,
    distance: (((seed + i * 3) % 14) + 1.2).toFixed(1),
    open: ((seed + i) % 5) !== 0,
  }));
}
