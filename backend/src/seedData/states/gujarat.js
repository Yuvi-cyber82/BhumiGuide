/* See maharashtra.js in this folder for the full explanation of this file's
 * shape and how to add another state.
 *
 * All 34 districts are listed. Note two recent changes that older sources
 * still miss: Vav-Tharad was carved out of Banaskantha by a notification of
 * 25 September 2025 (effective 2 October 2025), making it the 34th district,
 * and 17 new talukas were notified on the same date — the largest batch since
 * 2013. Any taluka list taken from a pre-September-2025 source is out of date.
 *
 * NOTE on talukas: 33 of the 34 districts carry their real, verified taluka
 * list, each corroborated by that district's official *.nic.in site, its
 * Wikipedia page where that cites an official source, or the September 2025
 * notification reports. Two things are recorded here rather than smoothed
 * over:
 *
 *   1. Panchmahal could not be verified. A plausible seven-taluka list exists
 *      in a statewide listing, but no second source could be reached —
 *      panchmahals.nic.in/tehsil/ refused every fetch — so per this project's
 *      rule Panchmahal is seeded with only its headquarters town, Godhra. That
 *      is a real, correct name; it is simply not the full list. Replace the
 *      array below whenever a reliable source becomes available.
 *
 *   2. Press reports of the September 2025 notification say Gujarat now has
 *      269 talukas; the district-by-district sum here is 261 across the 33
 *      verified districts. One taluka is unaccounted for and no district could
 *      be found for it, so no 269th name was invented to close the gap.
 *
 * Also worth knowing for anyone extending this: city mamlatdar offices are not
 * talukas. surat.nic.in lists 14 rows, five of which (Majura, Udhna, Katargam,
 * Puna, Adajan) are zones inside Surat City taluka; Vadodara, Rajkot and Anand
 * follow the same pattern. They are collapsed correctly below. Taluka names are
 * also not unique across districts — Kalol, Mahuva, Mandvi, Mangrol and
 * Malia/Maliya each occur twice — so a taluka must be keyed by its district. */
export default {
  name: "Gujarat",

  // district -> list of talukas
  districts: {
    Ahmedabad: ["Ahmedabad City", "Bavla", "Daskroi", "Detroj-Rampura", "Dhandhuka", "Dholera", "Dholka", "Mandal", "Sanand", "Viramgam"],
    Amreli: ["Amreli", "Babra", "Bagasara", "Dhari", "Jafrabad", "Khambha", "Kunkavav Vadia", "Lathi", "Lilia", "Rajula", "Savarkundla"],
    Anand: ["Anand", "Anklav", "Borsad", "Khambhat", "Petlad", "Sojitra", "Tarapur", "Umreth"],
    Aravalli: ["Bayad", "Bhiloda", "Dhansura", "Malpur", "Meghraj", "Modasa", "Sathamba", "Shamlaji"],
    Banaskantha: ["Amirgadh", "Danta", "Dantiwada", "Deesa", "Dhanera", "Hadad", "Kankrej", "Ogad", "Palanpur", "Vadgam"],
    Bharuch: ["Amod", "Ankleshwar", "Bharuch", "Hansot", "Jambusar", "Jhagadia", "Netrang", "Vagra", "Valia"],
    Bhavnagar: ["Bhavnagar", "Gariadhar", "Ghogha", "Jesar", "Mahuva", "Palitana", "Sihor", "Talaja", "Umrala", "Vallabhipur"],
    Botad: ["Barwala", "Botad", "Gadhada", "Ranpur"],
    Chhotaudepur: ["Bodeli", "Chhotaudepur", "Kadval", "Kavant", "Naswadi", "Pavijetpur", "Sankheda"],
    Dahod: ["Dahod", "Devgadh Baria", "Dhanpur", "Fatepura", "Garbada", "Guru Govind Limbdi", "Jhalod", "Limkheda", "Sanjeli", "Singvad", "Sukhsar"],
    Dang: ["Ahwa", "Subir", "Waghai"],
    "Devbhumi Dwarka": ["Bhanvad", "Kalyanpur", "Khambhaliya", "Okhamandal"],
    Gandhinagar: ["Dehgam", "Gandhinagar", "Kalol", "Mansa"],
    "Gir Somnath": ["Gir-Gadhada", "Kodinar", "Sutrapada", "Talala", "Una", "Veraval"],
    Jamnagar: ["Dhrol", "Jamjodhpur", "Jamnagar", "Jodiya", "Kalavad", "Lalpur"],
    Junagadh: ["Bhesan", "Junagadh City", "Junagadh Rural", "Keshod", "Malia", "Manavadar", "Mangrol", "Mendarda", "Vanthali", "Visavadar"],
    Kheda: ["Fagvel", "Galteshwar", "Kapadvanj", "Kathlal", "Kheda", "Mahudha", "Matar", "Mehmedabad", "Nadiad", "Thasra", "Vaso"],
    Kutch: ["Abdasa", "Anjar", "Bhachau", "Bhuj", "Gandhidham", "Lakhpat", "Mandvi", "Mundra", "Nakhatrana", "Rapar"],
    Mahisagar: ["Balasinor", "Godhar", "Kadana", "Khanpur", "Kothamba", "Lunawada", "Santrampur", "Virpur"],
    Mehsana: ["Becharaji", "Jotana", "Kadi", "Kheralu", "Mehsana", "Satlasana", "Unjha", "Vadnagar", "Vijapur", "Visnagar"],
    Morbi: ["Halvad", "Maliya", "Morbi", "Tankara", "Wankaner"],
    Narmada: ["Chikda", "Dediapada", "Garudeshwar", "Nandod", "Sagbara", "Tilakwada"],
    Navsari: ["Chikhli", "Gandevi", "Jalalpore", "Khergam", "Navsari", "Vansda"],
    Panchmahal: ["Godhra"],
    Patan: ["Chanasma", "Harij", "Patan", "Radhanpur", "Sami", "Santalpur", "Saraswati", "Shankheshwar", "Sidhpur"],
    Porbandar: ["Kutiyana", "Porbandar", "Ranavav"],
    Rajkot: ["Dhoraji", "Gondal", "Jamkandorna", "Jasdan", "Jetpur", "Kotada Sangani", "Lodhika", "Paddhari", "Rajkot", "Upleta", "Vinchhiya"],
    Sabarkantha: ["Himatnagar", "Idar", "Khedbrahma", "Poshina", "Prantij", "Talod", "Vadali", "Vijaynagar"],
    Surat: ["Ambika", "Areth", "Bardoli", "Choryasi", "Kamrej", "Mahuva", "Mandvi", "Mangrol", "Olpad", "Palsana", "Surat City", "Umarpada"],
    Surendranagar: ["Chotila", "Chuda", "Dasada", "Dhrangadhra", "Lakhtar", "Limbdi", "Muli", "Sayla", "Thangadh", "Wadhwan"],
    Tapi: ["Dolvan", "Kukarmunda", "Nizar", "Songadh", "Uchhal", "Ukai", "Valod", "Vyara"],
    Vadodara: ["Dabhoi", "Desar", "Karjan", "Padra", "Savli", "Sinor", "Vadodara", "Waghodia"],
    Valsad: ["Dharampur", "Kaprada", "Nana Pondha", "Pardi", "Umbergaon", "Valsad", "Vapi"],
    "Vav-Tharad": ["Bhabhar", "Deodar", "Dharnidhar", "Lakhani", "Rah", "Suigam", "Tharad", "Vav"],
  },

  /* ── Documents: what Gujarat does differently ───────────────────────────
   * Researched from official sources, with the source recorded on each entry.
   * Like Maharashtra, Gujarat publishes no itemised checklist of papers for
   * registering a sale deed, and the portal that would say so — Garvi, at
   * garvi.gujarat.gov.in — could not be reached while this was researched. So
   * the entries below rename and explain documents from Act text, CAG audit
   * reports and the Government of Gujarat's own land-records evaluation,
   * rather than declaring extra ones mandatory.
   *
   * NOT VERIFIED for Gujarat (left on the shared default): Aadhaar, PAN,
   * photographs, address proof, the sale deed itself, previous title deeds,
   * property tax receipts, power of attorney and legal heir certificate. No
   * reachable Gujarat source states whether these are demanded at the
   * Sub-Registrar's counter. If Garvi becomes reachable, check it and update
   * this block. */
  documentRules: {
    extract: {
      name: "7/12 Utara (VF-7 & VF-12) and 8-A",
      where: "AnyRoR portal, or the e-Dhara Kendra at the Mamlatdar Office",
      note: "Gujarat's Record of Rights is Village Form 7 \u2014 ownership \u2014 issued with Village Form 12, the crop register, as the combined \"7/12 Utara\". VF-8A is the holder's account of all land in the village. Digitally signed copies are served from AnyRoR; e-Dhara is the back-office system that maintains them. Urban parcels are not on 7/12 at all.",
      source: "https://anyror.gujarat.gov.in/",
    },
    ec: {
      name: "Encumbrance Certificate (Boja Certificate)",
      where: "Garvi portal or the Sub-Registrar's office",
      note: "Unlike Maharashtra, Gujarat does use the term Encumbrance Certificate and publishes it as a named Garvi service; it is known locally as the Boja certificate. The Index-2 copy is a separate Garvi service giving the registration particulars of a single deed, so the two are not interchangeable.",
      source: "https://garvi.gujarat.gov.in/",
    },
    conversion: {
      name: "NA Permission under s.65, Gujarat Land Revenue Code 1879",
      where: "Collector, applied through the iORA portal",
      note: "Section 65 requires the Collector's permission before agricultural land is put to any other use, and Gujarat has two deemed-NA routes: if the Collector does not decide within three months the permission applied for is deemed to have been granted, and s.65B lets land designated for industry be used without permission once the s.67A conversion tax is paid. Resolution NAP/1006/425/K of 1-7-2008 sets disposal limits of 30 days for residential and 45 days otherwise.",
      source: "https://indiankanoon.org/doc/55556806/",
    },
    noc: {
      name: "Agriculturist (Khedut) status / Collector's permission",
      where: "Collector; khedut verification runs on the iORA portal",
      note: "Three regional laws restrict who may buy farmland in Gujarat: s.63 of the Gujarat Tenancy and Agricultural Lands Act 1948 in the Bombay area, s.54 of the Saurashtra Gharkhed Ordinance 1949 in Saurashtra, and the Gujarat Tenancy and Agricultural Lands (Vidarbha Region and Kutch Area) Act 1958 in Kutch. Section 63 makes a sale to a non-agriculturist void without permission.",
      source: "https://www.indiacode.nic.in/bitstream/123456789/3208/2/tenancyandagriculturalland.pdf",
    },
    mutation: {
      name: "Mutation Entry (Village Form 6 / Hakk Patrak)",
      where: "e-Dhara Kendra at the Mamlatdar Office; status on AnyRoR",
      note: "Gujarat records mutations in Village Form 6, and certified entries are then given effect in Forms 7 and 8A. Registration at the Sub-Registrar auto-triggers the mutation for rural agricultural land through the Garvi\u2013e-Dhara link, but not for non-agricultural or urban land, which is handled separately under the City Survey system.",
      source: "https://anyror.gujarat.gov.in/",
    },
    survey: {
      name: "Tippan (Field Measurement Book) / Kami Jasti Patrak",
      where: "District Inspector of Land Records (DILR) office, or the e-Dhara Kendra",
      note: "Gujarat's measurement record is the Tippan \u2014 the field measurement book noting each parcel's dimensions. After a sub-division the Kami Jasti Patrak describes the new spatial details of the survey number. Sub-division is requested through the e-Dhara Kendra or the DILR office.",
      source: "https://revenuedepartment.gujarat.gov.in/",
    },
    khata: {
      status: "not-applicable",
      name: "Property Card (City Survey record)",
      where: "City Survey Superintendent / City Survey Information System (CSIS)",
      note: "Khata is an entry in a Karnataka municipal property tax register under the Karnataka Municipal Corporations Act 1976 s.114. Gujarat has no equivalent municipal khata: its urban Record of Rights is the Property Card, maintained in the City Survey Information System rather than on 7/12.",
      source: "https://revenuedepartment.gujarat.gov.in/",
    },
  },

  chargeRules: {
    /* 4.9% total = a 3.5% basic rate under Schedule I Article 20(a) of the
     * Gujarat Stamp Act 1958, plus the 40%-of-duty additional stamp duty
     * levied by s.3A of the same Act (3.5 x 0.4 = 1.4). The 4.9% figure is
     * quoted directly by the CAG's Gujarat revenue-sector audits; the
     * 3.5 + 1.4 split is a derivation from it, not a quotation. */
    stamp: 4.9,
    reg: 1,
    /* NOT VERIFIED: no registration-fee cap was found, but Garvi was
     * unreachable, so null here means "not found", not "confirmed uncapped". */
    regCap: null,
    /* Gujarat does NOT discount stamp duty for women \u2014 4.9% applies to every
     * buyer. The concession is an exemption from the 1% registration fee,
     * which femaleRegExempt below models. Sites claiming a further 1%
     * stamp-duty cut for women are not supported by the Act. */
    femaleRebate: 0,
    femaleRegExempt: true,
    /* NOT VERIFIED: blog claims of a separate agricultural rate are mutually
     * inconsistent and unsupported; Article 20 is unqualified as to land type. */
    agriAdj: 0,
    /* 0 deliberately, not a gap: s.3A levies its 40% surcharge "including rate
     * of stamp duty to be increased as provided for in sections 201 and 209 of
     * the Gujarat Panchayat Act, 1993", so the local-body increment is already
     * inside the 4.9%. A separate localBody would double-count it. */
    localBody: 0,
    stampNote: "Gujarat's 4.9% is a 3.5% basic rate plus a surcharge of 40% of that duty under s.3A of the Gujarat Stamp Act 1958. The rate is the same for every buyer \u2014 a woman buying in her sole name is exempt from the 1% registration fee instead.",
    landRecord: "7/12 Utara (Village Form 7 & 12)",
    office: "e-Dhara Kendra, Mamlatdar Office",
  },
};
