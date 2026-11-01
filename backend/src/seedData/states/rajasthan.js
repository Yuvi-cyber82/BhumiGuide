/* See maharashtra.js in this folder for the full explanation of this file's
 * shape and how to add another state.
 *
 * All 41 districts and their 425 tehsils are listed, taken from the Rajasthan
 * Board of Revenue's own district-wise tehsil list headed "as on 22-01-2026".
 * Every district was cross-checked against the Land Revenue Department's
 * published tehsil list; the two agree name-for-name on 39 of the 41.
 *
 * ── Why 41 and not 50 ──────────────────────────────────────────────────
 * Rajasthan reorganised twice in two years, and most sources online are stuck
 * on one side or the other of it:
 *   - 7 August 2023: 19 new districts and 3 new divisions created, taking the
 *     state from 33 to 50 districts and 7 to 10 divisions.
 *   - 1 January 2025: the succeeding government abolished 9 of the new
 *     districts (Anupgarh, Dudu, Gangapur City, Jaipur Rural, Jodhpur Rural,
 *     Kekri, Neem Ka Thana, Sanchore, Shahpura) and all 3 new divisions.
 *     8 were retained: Balotra, Beawar, Deeg, Didwana-Kuchaman,
 *     Khairthal-Tijara, Kotputli-Behror, Phalodi, Salumbar.
 * 50 - 9 = 41 districts, 10 - 3 = 7 divisions. Several abolished district
 * names survive below as tehsil names, which is correct.
 *
 * Two things recorded rather than smoothed over:
 *   1. Bikaner: 10 of its 11 tehsil names were read from the official list;
 *      one row came through the source PDF's legacy-font encoding unreadable,
 *      so Jasrasar in that slot comes from the secondary list, which agrees
 *      Bikaner has exactly 11.
 *   2. Where the official list and the secondary list disagreed, the official
 *      one was followed: Baytu is placed in Barmer (not Balotra), and
 *      Bhilwara has 17 tehsils, not 18 \u2014 the extra secondary name "Sawaipur"
 *      appears in no official source.
 *
 * Tehsil names are not unique across districts \u2014 Raipur occurs three times,
 * and Laxmangarh, Rajgarh, Ramgarh, Pratapgarh, Shahpura and Bassi twice each
 * \u2014 so a tehsil must be keyed by its district. */
export default {
  name: "Rajasthan",

  // district -> list of talukas
  districts: {
    Ajmer: ["Ajmer", "Pushkar", "Peesangan", "Nasirabad", "Kishangarh", "Roopangarh", "Arain", "Kekri", "Sawar", "Sarwar", "Bhinay", "Tantoti"],
    Alwar: ["Alwar", "Govindgarh", "Reni", "Laxmangarh", "Malakhera", "Rajgarh", "Tehla", "Ramgarh", "Naugawan", "Thanagazi", "Pratapgarh", "Kathumar"],
    Balotra: ["Dhorimana", "Gudamalani", "Gida", "Siwana", "Samdari", "Pachpadra", "Sindhari", "Kalyanpur", "Patodi"],
    Banswara: ["Banswara", "Abapura", "Garhi", "Kushalgarh", "Bagidora", "Gangadtalai", "Ghatol", "Ganoda", "Sajjangarh", "Anandpuri", "Chhoti Sarwan", "Arthuna"],
    Baran: ["Baran", "Mangrol", "Anta", "Shahabad", "Kishanganj", "Chhabra", "Chhipabarod", "Atru"],
    Barmer: ["Barmer", "Barmer Gramin", "Batadoo", "Gadra Road", "Ramsar", "Chohtan", "Nokhra", "Sedwa", "Sheo", "Dhanau", "Baytu"],
    Beawar: ["Beawar", "Todgarh", "Masuda", "Bijainagar", "Jaitaran", "Raipur", "Badnor"],
    Bharatpur: ["Bharatpur", "Bayana", "Weir", "Rupbas", "Bhusawar", "Rudawal", "Nadbai", "Uchchain"],
    Bhilwara: ["Bhilwara", "Mandalgarh", "Bijoliya", "Kotri", "Raipur", "Asind", "Mandal", "Sahara", "Kareda", "Hurda", "Hamirgarh", "Antali", "Shahpura", "Jahazpur", "Baneda", "Phooliya Kalan", "Kachhola"],
    Bikaner: ["Bikaner", "Nokha", "Jasrasar", "Kolayat", "Sridungargarh", "Lunkaransar", "Chhatargarh", "Bajju", "Khajuwala", "Hadan", "Poogal"],
    Bundi: ["Bundi", "Keshoraipatan", "Indragarh", "Nainwa", "Hindoli", "Talera", "Raithal"],
    Chittorgarh: ["Chittorgarh", "Gangrar", "Begun", "Rawatbhata", "Kapasan", "Rashmi", "Nimbahera", "Bhadesar", "Bari Sadri", "Dungla", "Bhupalsagar", "Bassi"],
    Churu: ["Churu", "Taranagar", "Sardarshahar", "Rajgarh", "Ratangarh", "Sujangarh", "Bidasar", "Sidhmukh", "Bhanipura", "Rajaldesar"],
    Dausa: ["Dausa", "Lawan", "Lalsot", "Baswa", "Mahwa", "Sikrai", "Nangal Rajawatan", "Ramgarh Pachwara", "Mandawar", "Rahuwas", "Bahrawanda", "Baijupara", "Sainthal", "Bandikui", "Nirjharna", "Kundal", "Bhandarej", "Paparda"],
    Deeg: ["Deeg", "Kumher", "Nagar", "Kaman", "Pahari", "Sikri", "Jurhara", "Janoothar", "Rarah"],
    Dholpur: ["Dholpur", "Sepau", "Rajakhera", "Bari", "Baseri", "Sarmathura", "Maniya", "Basai Nawab"],
    "Didwana-Kuchaman": ["Parbatsar", "Makrana", "Nawa", "Didwana", "Ladnu", "Kuchaman City", "Maulasar", "Chhoti Khatu"],
    Dungarpur: ["Dungarpur", "Jhothri Pal", "Sagwara", "Aspur", "Chikhali", "Galiyakot", "Simalwara", "Bichhiwara", "Sabla", "Dovda", "Gamri-Ahara", "Paldewal", "Obri"],
    Hanumangarh: ["Hanumangarh", "Pilibanga", "Sangaria", "Tibbi", "Bhadra", "Nohar", "Rawatsar", "Pallu"],
    Jaipur: ["Jaipur", "Kalwar", "Amber", "Sanganer", "Bassi", "Toonga", "Chaksu", "Kotkhawda", "Jamwaramgarh", "Andhi", "Chomu", "Phulera", "Madhorajpura", "Rampura Dabri", "Jalsu", "Kishangarh Renwal", "Jobner", "Shahpura", "Dudu", "Phagi", "Mauzamabad"],
    Jaisalmer: ["Jaisalmer", "Fatehgarh", "Bhaniyana", "Pokaran", "Sam", "Phalsoond", "Ramgarh"],
    Jalore: ["Jalore", "Ahore", "Bhadrajun", "Sayala", "Bhinmal", "Jaswantpura", "Sanchore", "Raniwara", "Chitalwana", "Bagora"],
    Jhalawar: ["Jhalrapatan", "Pirawa", "Aklera", "Khanpur", "Manohar Thana", "Gangdhar", "Pachpahar", "Asnawar", "Sunel", "Bakani", "Raipur", "Dag"],
    Jhunjhunu: ["Jhunjhunu", "Gudhagorji", "Nawalgarh", "Buhana", "Chirawa", "Pilani", "Mandawa", "Bissau", "Malsisar", "Surajgarh", "Khetri", "Udaipurwati"],
    Jodhpur: ["Jodhpur", "Kudi Bhagtasni", "Luni", "Shergarh", "Bilara", "Bhopalgarh", "Jhanwar", "Pipar City", "Osian", "Tinwari", "Balesar", "Baori", "Sekhala", "Chamu"],
    Karauli: ["Karauli", "Masalpur", "Sapotra", "Mandrayal", "Hindaun", "Suroth", "Shri Mahaveerji", "Todabhim", "Balghat", "Nadoti"],
    "Khairthal-Tijara": ["Tijara", "Kishangarhbas", "Khairthal", "Kotkasim", "Harsoli", "Tapukara", "Mundawar"],
    Kota: ["Ladpura", "Digod", "Pipalda", "Ramganj Mandi", "Sangod", "Kanwas", "Chechat"],
    "Kotputli-Behror": ["Behror", "Bansur", "Neemrana", "Mandhan", "Narayanpur", "Kotputli", "Viratnagar", "Paota"],
    Nagaur: ["Nagaur", "Mundwa", "Khinvsar", "Jayal", "Deh", "Merta", "Riyan Bari", "Degana", "Sanjoo"],
    Pali: ["Pali", "Rohat", "Bali", "Sumerpur", "Desuri", "Sojat", "Rani", "Marwar Junction"],
    Phalodi: ["Phalodi", "Lohawat", "Aau", "Dechu", "Setrawa", "Bap", "Ghantiyali", "Bapini"],
    Pratapgarh: ["Pratapgarh", "Arnod", "Peepalkhoont", "Chhoti Sadri", "Dhariawad", "Suhagpura", "Dalot"],
    Rajsamand: ["Rajsamand", "Kumbhalgarh", "Garhbor", "Nathdwara", "Khamnor", "Railmagra", "Bhim", "Deogarh", "Amet", "Kunwariya", "Delwara", "Sardargarh"],
    Salumbar: ["Sarada", "Semari", "Salumbar", "Lasadiya", "Jhallara"],
    "Sawai Madhopur": ["Sawai Madhopur", "Khandar", "Chauth Ka Barwara", "Bonli", "Malarna Doongar", "Mitrapura", "Gangapur City", "Bamanwas", "Wazeerpur", "Barnala", "Talawara"],
    Sikar: ["Sikar", "Sikar Gramin", "Danta Ramgarh", "Khandela", "Fatehpur", "Laxmangarh", "Dhod", "Nechhwa", "Reengus", "Ramgarh Shekhawati", "Neem Ka Thana", "Shrimadhopur", "Patan"],
    Sirohi: ["Sirohi", "Sheoganj", "Reodar", "Abu Road", "Pindwara", "Deldar"],
    "Sri Ganganagar": ["Sri Ganganagar", "Sadulshahar", "Srikaranpur", "Suratgarh", "Gajsinghpur", "Padampur", "Anupgarh", "Raisinghnagar", "Srivijaynagar", "Gharsana", "Rawla"],
    Tonk: ["Tonk", "Newai", "Peeplu", "Uniara", "Deoli", "Dooni", "Malpura", "Nagarfort", "Aligarh", "Todaraisingh"],
    Udaipur: ["Girwa", "Kurabar", "Badgaon", "Kotra", "Jhadol", "Gogunda", "Sayra", "Barapal", "Phalasiyan", "Mavli", "Ghasa", "Rishabhdeo", "Vallabhnagar", "Bhinder", "Kanod", "Kherwara", "Nayagaon"],
  },

  /* ── Documents: what Rajasthan does differently ─────────────────────────
   * Researched from official sources, with the source recorded on each entry.
   * Like Maharashtra, Rajasthan publishes no itemised counter checklist for
   * registering a sale deed: the Registration Rules 1955 (rule 91) list only
   * conditions of admissibility, and the new e-Registration Rules 2025 speak
   * of "mandatory fields on the e-Panjiyan Portal" without enumerating
   * documents. So the entries below rename and explain documents rather than
   * declaring extra ones mandatory.
   *
   * NOT VERIFIED for Rajasthan (left on the shared default): PAN, address
   * proof, property tax receipts, power of attorney and legal heir
   * certificate. igrs.rajasthan.gov.in and reams.rajasthan.gov.in could not
   * be reached while this was researched; if they become reachable, check
   * them and update this block. */
  documentRules: {
    extract: {
      name: "Jamabandi (Nakal)",
      where: "Apna Khata / e-Dharti portal, or the Tehsil Office and e-Mitra kiosks",
      note: "Rajasthan's Record of Rights, called the Jamabandi in rule 48 of the Land Records Rules 1957, prepared by the Patwari and re-made every four years. The copy you download free from Apna Khata is expressly informational \u2014 the portal states it is not certified and cannot be used in courts or offices, for which you must apply for an authenticated nakal at a kiosk.",
      source: "https://apnakhata.rajasthan.gov.in/",
    },
    ec: {
      name: "e-Search of registered documents",
      where: "e-Panjiyan portal or the Sub-Registrar office",
      note: "Rajasthan does not issue a document called an \"Encumbrance Certificate\". The department's equivalent is e-Search \u2014 search of registered documents by name and by property details, with legacy data searchable from 2017. A certified copy of the register entry under s.57 of the Registration Act 1908 is the formal artefact.",
      source: "https://epanjiyan.rajasthan.gov.in/",
    },
    conversion: {
      name: "Conversion Order under Section 90-A",
      where: "Rural: Tehsildar, SDO or Collector by area. Urban: the Authorised Officer of the JDA, UIT or Municipality.",
      note: "Both rural and urban conversion run off s.90-A of the Rajasthan Land Revenue Act 1956, not \u2014 as is often said \u2014 off the Tenancy Act. The 2007 Rules set the rural authority by purpose and area: Tehsildar for a residential unit up to 2,500 sq m, SDO up to 10,000 sq m for a colony, Collector above that; the order is due within 90 days of a complete application.",
      source: "https://indiankanoon.org/doc/22739522/",
    },
    mutation: {
      name: "Namantaran (Intkal)",
      where: "Patwari, sanctioned by the revenue officer; applied for online through Apna Khata",
      note: "The Patwari maintains the Register Intqal in form P-22, the register of every acquisition of a right or interest in land, and the sanctioned mutation is what carries your name into the next Jamabandi. No statutory time limit for deciding a mutation was found in the Land Records Rules 1957.",
      source: "https://apnakhata.rajasthan.gov.in/",
    },
    survey: {
      name: "Khasra (Field Book) and village Naksha",
      where: "Patwari / Tehsil Office; the map is published on BhuNaksha Rajasthan",
      note: "Rajasthan's field measurement record is the Khasra, the field book in Form No. 3 under rule 19 of the Survey, Record and Settlement Rules 1957; the cadastral map is the Naksha, viewable on BhuNaksha. Rajasthan does not use the term \"Tippan\" \u2014 that is a Maharashtra and Madhya Pradesh word. For a boundary dispute the citizen service is Seema Gyan, applied for through Apna Khata.",
      source: "https://indiankanoon.org/doc/20699230/",
    },
    khata: {
      status: "not-applicable",
      note: "Khata is an entry in a Karnataka municipal property tax register under the Karnataka Municipal Corporations Act 1976 s.114. Rajasthan has no equivalent municipal khata certificate. The word khata here means the holding account in the Jamabandi \u2014 hence the land records portal being named Apna Khata \u2014 and urban title is normally evidenced instead by a Patta or lease deed from the UIT, Development Authority or Municipality.",
      source: "https://apnakhata.rajasthan.gov.in/",
    },
    noc: {
      name: "Collector's validation under s.42B (SC/ST land only)",
      status: "optional",
      note: "Rajasthan, unlike Maharashtra or Karnataka, does not bar a non-agriculturist from buying agricultural land. The restriction that does bite is s.42 of the Tenancy Act: a sale by a Scheduled Caste khatedar to a non-SC buyer, or by a Scheduled Tribe khatedar to a non-ST buyer, is void, with a further restriction for the Saharia tribe. Section 42B lets the Collector declare such a transfer valid on application.",
      source: "https://landrevenue.rajasthan.gov.in/",
    },
    saleDeed: {
      name: "Sale Deed (Bikrinama) registered on e-Panjiyan",
      where: "Sub-Registrar office, or fully online under the Rajasthan e-Registration Rules 2025",
      note: "The department offers auto-deed templates, e-stamping through SHCIL-authorised centres, and anywhere-registration at 219 Sub-Registrar offices. Two witnesses remain mandatory. The e-Registration Rules 2025, notified on 2 December 2025, now allow the whole registration online through an SSO ID or mobile OTP.",
      source: "https://epanjiyan.rajasthan.gov.in/",
    },
    titleDeeds: {
      name: "Patta / Lease Deed (urban) or prior registered deeds (rural)",
      where: "UIT, Development Authority or Municipality for a Patta; Sub-Registrar for prior deeds",
      note: "For a plot inside a development authority or municipal area, the chain of title in Rajasthan usually starts from a Patta or lease deed issued by that body rather than from a freehold conveyance. Check which scheme your seller's Patta came from, and whether ground rent or lease dues are outstanding.",
      source: "https://jda.rajasthan.gov.in/",
    },
    aadhaar: {
      status: "optional",
      note: "Under rule 5(1) of the Rajasthan e-Registration Rules 2025 a party chooses between in-person verification at the Sub-Registrar office and e-verification by Aadhaar-based e-KYC or video KYC. Aadhaar is therefore a route, not a universal requirement \u2014 but on the e-verification route rule 5(2) dispenses with the physical appearance of parties and witnesses altogether.",
      source: "https://epanjiyan.rajasthan.gov.in/",
    },
    photo: {
      note: "For in-person registration, rule 5(1)(i) of the e-Registration Rules 2025 has the photograph captured in the e-Panjiyan portal at the Sub-Registrar office along with the thumb impression, rather than the parties bringing printed passport photographs.",
      source: "https://epanjiyan.rajasthan.gov.in/",
    },
  },

  chargeRules: {
    /* Rajasthan charges 6% basic stamp duty plus a surcharge equal to 30% OF
     * THE DUTY (not of the property value) \u2014 made up of a 10% infrastructure
     * surcharge, a 10% cow-protection surcharge and a 10% natural-calamity
     * surcharge. 6 x 1.30 = 7.8% of value, which is what a buyer actually
     * pays. It is a surcharge, not a labour cess.
     *
     * The surcharge is folded into stamp (and into femaleRebate below) rather
     * than put in localBody because it multiplies the duty: a female buyer
     * pays 5 x 1.30 = 6.5%, so a flat localBody would overcharge her. */
    stamp: 7.8,
    reg: 1,
    /* The only rupee cap in the official rate sheet is on loan documents. */
    regCap: null,
    /* Statutory rebate is 1 percentage point (6% -> 5%); grossed up by the
     * 30% surcharge that is 1.3 points of value, giving a female buyer 6.5%. */
    femaleRebate: 1.3,
    /* No separate agricultural-land row in the official rate sheet. */
    agriAdj: 0,
    /* Rajasthan levies no municipal cess on registration. */
    localBody: 0,
    stampNote: "Rajasthan's 6% basic stamp duty carries a surcharge of 30% of the duty itself \u2014 infrastructure, cow protection and natural calamity, 10% each \u2014 so a buyer pays 7.8% of value, and a woman buying in her own name pays 6.5%. Two secondary reports in early 2026 claimed the surcharge rises above \u20b910 lakh of duty, but no gazette notification confirming that was found, so 30% is used here.",
    landRecord: "Jamabandi (Nakal)",
    office: "Tehsil Office",
  },
};
