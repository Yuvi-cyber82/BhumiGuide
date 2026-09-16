/* See maharashtra.js in this folder for the full explanation of this file's
 * shape and how to add another state.
 *
 * All 55 districts are listed (verified current as of 2026, including the
 * three newest districts — Mauganj, Pandhurna, Maihar — carved out in 2023,
 * and Narmadapuram, the renamed Hoshangabad).
 *
 * NOTE on talukas: 38 of the 55 districts below now carry their real,
 * verified list of tehsils, each sourced from that district's Wikipedia
 * page, its official government district site (*.nic.in), or (only when
 * both agreed independently) a cross-checked government directory /
 * census-derived listing. The remaining 17 districts — Rajgarh, Vidisha,
 * Guna, Shivpuri, Khandwa, Balaghat, Jabalpur, Katni, Narsinghpur,
 * Narmadapuram, Rewa, Chhatarpur, Damoh, Sagar, Tikamgarh, Shahdol, Umaria —
 * genuinely have no single reliable source: the available sources either
 * only give a tehsil *count* with no names, or give conflicting counts and
 * membership lists with no way to tell which is current. Per this project's
 * rule of never fabricating data, those 17 are seeded with just their own
 * headquarters town as a placeholder taluka (always a real, correct name —
 * never invented — just not the full list of tehsils under it). Replace a
 * district's array below with its real tehsil list whenever you find a
 * reliable source for it; nothing else needs to change. */
export default {
  name: "Madhya Pradesh",

  districts: {
    // Bhopal division
    Bhopal: ["Berasia", "Huzur", "Kolar"],
    Raisen: ["Raisen", "Goharganj", "Begamganj", "Gairatganj", "Silwani", "Baraily", "Udaipura", "Deori", "Sultanpur", "Badi"],
    Rajgarh: ["Rajgarh"],
    Sehore: ["Sehore Urban", "Sehore Rural", "Shyampur", "Ashta", "Jawar", "Ichhawar", "Bhairunda", "Budni", "Rehti"],
    Vidisha: ["Vidisha"],

    // Chambal division
    Bhind: ["Bhind Nagar", "Bhind Rural", "Ater", "Lahar", "Mehgoan", "Mau", "Roun", "Mihona", "Gohad", "Gormi"],
    Morena: ["Morena", "Ambah", "Porsa", "Joura", "Sabalgarh", "Kailaras"],
    Sheopur: ["Sheopur", "Baroda", "Vijaypur", "Veerpur", "Karahal"],

    // Gwalior division
    Ashoknagar: ["Ashoknagar", "Chanderi", "Isagarh", "Mungaoli", "Shadora", "Naisarai", "Piprai", "Bahadurpur"],
    Datia: ["Datia", "Seondha", "Bhander", "Indergarh", "Badoni"],
    Guna: ["Guna"],
    Gwalior: ["Gwalior", "Bhitarwar", "Dabra", "Chinour"],
    Shivpuri: ["Shivpuri"],

    // Indore division
    Alirajpur: ["Alirajpur", "Jobat", "Sondwa", "Udaigarh", "Chandra Sekhra Ajad Nagar", "Kathiwada"],
    Barwani: ["Barwani", "Sendhwa", "Pansemal", "Warla", "Niwali", "Thikri", "Pati", "Anjad", "Rajpur"],
    Burhanpur: ["Nepanagar", "Burhanpur", "Khaknar"],
    Dhar: ["Dhar", "Badnawar", "Dharampuri", "Sardarpur", "Manawar", "Kukshi", "Dahi", "Gandhwani"],
    Indore: ["Depalpur", "Sanwer", "Mhow", "Hatod"],
    Jhabua: ["Jhabua", "Meghnagar", "Ranapur", "Rama", "Thandla", "Petlawad"],
    Khandwa: ["Khandwa"],
    Khargone: ["Barwaha", "Maheshwar", "Kasrawad", "Sanawad", "Gogawan", "Segaon", "Bhagwanpura", "Bhikangaon", "Jhirnya"],

    // Jabalpur division
    Balaghat: ["Balaghat"],
    Chhindwara: ["Chhindwara", "Chhindwara Nagar", "Tamia", "Parasia", "Junnardeo", "Amarwara", "Chourai", "Bichhua", "Umreth", "Mohkhed", "Chand", "Harrai"],
    Dindori: ["Dindori", "Shahpura", "Bajag"],
    Jabalpur: ["Jabalpur"],
    Katni: ["Katni"],
    Mandla: ["Bichhiya", "Ghughari", "Mandla", "Nainpur", "Narayanganj", "Niwas"],
    Narsinghpur: ["Narsinghpur"],
    Pandhurna: ["Pandhurna", "Sausar"],
    Seoni: ["Barghat", "Chhapara", "Dhanora", "Ghansaur", "Keolari", "Kurai", "Lakhnadon", "Seoni Rural", "Seoni Nagar"],

    // Narmadapuram division
    Betul: ["Amla", "Athner", "Betul", "Bhainsdehi", "Chicholi", "Ghoda Dongri", "Multai", "Shahpur"],
    Harda: ["Handiya", "Harda", "Khirkiya", "Rehatgaon", "Sirali", "Timarni"],
    Narmadapuram: ["Narmadapuram"],

    // Rewa division
    Maihar: ["Maihar", "Amarpatan", "Ramnagar"],
    Mauganj: ["Mauganj", "Hanumana", "Naigarhi"],
    Rewa: ["Rewa"],
    Satna: ["Nagod", "Unchehara", "Raghuraj Nagar", "Majhgawan", "Kotar", "Birsinghpur", "Rampur Baghelan", "Kothi"],
    Sidhi: ["Bahari", "Churhat", "Gopad Banas", "Rampur Naikin", "Majhauli", "Kusmi", "Sihawal", "Madwas"],
    Singrauli: ["Singrauli", "Deosar", "Chitrangi", "Mada", "Sarai", "Bargawan"],

    // Sagar division
    Chhatarpur: ["Chhatarpur"],
    Damoh: ["Damoh"],
    Niwari: ["Prithvipur", "Niwari", "Orchha"],
    Panna: ["Ajaygarh", "Amanganj", "Devendranagar", "Gunnor", "Panna", "Pawai", "Raipura", "Shahnagar", "Simaria"],
    Sagar: ["Sagar"],
    Tikamgarh: ["Tikamgarh"],

    // Shahdol division
    Anuppur: ["Anuppur", "Jaithari", "Kotma", "Pushparajgarh"],
    Shahdol: ["Shahdol"],
    Umaria: ["Umaria"],

    // Ujjain division
    "Agar Malwa": ["Agar", "Badod", "Nalkheda", "Soyatkala", "Susner"],
    Dewas: ["Bagli", "Dewas", "Dewas Nagar", "Hatpiplya", "Kannod", "Khategaon", "Satwas", "Sonkatch", "Tonk Khurd", "Udaynagar"],
    Mandsaur: ["Bhanpura", "Daloda", "Garoth", "Malhargarh", "Mandsaur", "Mandsaur Nagar", "Shamgarh", "Sitamau", "Suwasara"],
    Neemuch: ["Jawad", "Jiran", "Manasa", "Neemuch", "Neemuch Nagar", "Rampura", "Singoli"],
    Ratlam: ["Alot", "Bajna", "Jaora", "Piploda", "Raoti", "Ratlam", "Ratlam Nagar", "Sailana", "Tal"],
    Shajapur: ["Avantipur Barodia", "Gulana", "Kalapipal", "Moman Badodiya", "Polaykala", "Shajapur", "Shujalpur"],
    Ujjain: ["Badnagar", "Ghatiya", "Jharda", "Khacharod", "Kothi Mahal", "Mahidpur", "Makdon", "Nagda", "Tarana", "Ujjain", "Ujjain Nagar", "Unhel"],
  },

  /* ── Documents: what Madhya Pradesh does differently ────────────────────
   * MP's registration department portal (mpigr.gov.in) could not be reached
   * while researching this, so no official MP checklist of documents for
   * registering a sale deed was found. The entries below therefore come from
   * MP Bhulekh, the MP Land Revenue Code 1959, a CAG audit report and the
   * National e-Governance Division's SAMPADA entry — each recorded per entry.
   *
   * NOT VERIFIED for Madhya Pradesh (left on the shared default): PAN,
   * address proof, previous title deeds, encumbrance certificate, property tax
   * receipt, mutation extract, NOC and legal heir certificate. No reachable MP
   * source states whether these are demanded at registration. If mpigr.gov.in
   * becomes reachable, check it and update this block. */
  documentRules: {
    extract: {
      name: "Khasra / Khatauni",
      where: "MP Bhulekh portal (digitally signed certified copy)",
      note: "MP keeps these as separate records: the Khasra is plot-wise and maintained by agricultural year, while the Khatauni is a holding account maintained by financial year and records the land revenue payable. The survey-based record of rights is called the Adhikar Abhilekh.",
      source: "https://mpbhulekh.gov.in/",
    },
    conversion: {
      name: "Diversion Order (Bhu-Vyapvartan)",
      note: "Madhya Pradesh calls this diversion, not NA conversion — s.172 of the MP Land Revenue Code 1959. Intimation of a change of land use is filed to the SDM Court through the MP Bhulekh portal, and the diversion premium and rent are assessed by the Sub Divisional Officer and the Tehsildar.",
      source: "https://mpbhulekh.gov.in/mpbhulekh.do",
    },
    aadhaar: {
      note: "MP registers documents through SAMPADA 2.0, which uses Aadhaar e-KYC and video KYC for identity, and e-Sign for signatures — so the Aadhaar number matters more than a printed card.",
      source: "https://negd.gov.in/isl/Directory/statedata/43",
    },
    survey: {
      name: "Naksha (Village Map)",
      note: "Issued from MP Bhulekh as part of \"Certified Copy of Land Records (Khasra, Khatauni, Map)\", and through the Lok Seva service \"Service to supply the copies of current maps\".",
      source: "https://mpbhulekh.gov.in/",
    },
    khata: {
      status: "not-applicable",
      note: "No Madhya Pradesh source uses a municipal khata. MP's records are the Khasra, the Khatauni and the Adhikar Abhilekh — the Khasra is a land record, not a municipal property account like Karnataka's khata.",
      source: "https://mpbhulekh.gov.in/",
    },
  },

  chargeRules: {
    stamp: 7.5,
    reg: 3,
    regCap: null,
    femaleRebate: 2,
    agriAdj: 0,
    localBody: 0,
    landRecord: "Khasra / Khatauni",
    office: "Tehsil Office",
  },
};
