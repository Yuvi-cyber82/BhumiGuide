/* One file = one state. To add a new state later, copy this file, rename
 * it, fill in the fields below, then register it in `./index.js` (import it
 * and add it to the STATES array). Nothing else in the app needs to change —
 * the API, the seeder, and the frontend's state/district dropdowns all pick
 * it up automatically.
 *
 * All 36 districts, with their real talukas (verified against current
 * official sources — note the government's 2023 renamings: Aurangabad ->
 * Chhatrapati Sambhajinagar, Osmanabad -> Dharashiv, Ahmednagar ->
 * Ahilyanagar). */
export default {
  name: "Maharashtra",

  // district -> list of talukas
  districts: {
    "Mumbai City": ["Mumbai City"],
    "Mumbai Suburban": ["Kurla", "Andheri", "Borivali"],
    Thane: ["Thane", "Kalyan", "Murbad", "Bhiwandi", "Shahapur", "Ulhasnagar", "Ambarnath"],
    Palghar: ["Palghar", "Vasai", "Dahanu", "Talasari", "Jawhar", "Mokhada", "Vada", "Vikramgad"],
    Raigad: ["Pen", "Alibag", "Murud", "Panvel", "Uran", "Karjat", "Khalapur", "Mangaon", "Tala", "Roha", "Sudhagad-Pali", "Mahad", "Poladpur", "Shrivardhan", "Mhasala"],
    Ratnagiri: ["Ratnagiri", "Sangameshwar", "Lanja", "Rajapur", "Chiplun", "Guhagar", "Dapoli", "Mandangad", "Khed"],
    Sindhudurg: ["Kankavli", "Vaibhavwadi", "Devgad", "Malwan", "Sawantwadi", "Kudal", "Vengurla", "Dodamarg"],
    Pune: ["Pune City", "Haveli", "Khed", "Junnar", "Ambegaon", "Maval", "Mulshi", "Shirur", "Purandhar", "Velhe", "Bhor", "Baramati", "Indapur", "Daund"],
    Satara: ["Satara", "Jaoli", "Koregaon", "Wai", "Mahabaleshwar", "Khandala", "Phaltan", "Maan", "Khatav", "Patan", "Karad"],
    Sangli: ["Miraj", "Kavathemahankal", "Tasgaon", "Jat", "Walwa", "Shirala", "Khanapur", "Atpadi", "Palus", "Kadegaon"],
    Kolhapur: ["Karvir", "Panhala", "Shahuwadi", "Kagal", "Hatkanangale", "Shirol", "Radhanagari", "Gaganbawada", "Bhudargad", "Gadhinglaj", "Chandgad", "Ajra"],
    Solapur: ["Solapur North", "Barshi", "Solapur South", "Akkalkot", "Madha", "Karmala", "Pandharpur", "Mohol", "Malshiras", "Sangole", "Mangalvedhe"],
    Nashik: ["Nashik", "Igatpuri", "Dindori", "Peth", "Trimbakeshwar", "Kalwan", "Deola", "Surgana", "Baglan", "Malegaon", "Nandgaon", "Chandwad", "Niphad", "Sinnar", "Yeola"],
    Dhule: ["Dhule", "Sakri", "Sindkheda", "Shirpur"],
    Nandurbar: ["Nandurbar", "Navapur", "Shahada", "Talode", "Akkalkuwa", "Dhadgaon"],
    Jalgaon: ["Jalgaon", "Jamner", "Erandol", "Dharangaon", "Bhusawal", "Raver", "Muktainagar", "Bodwad", "Yawal", "Amalner", "Parola", "Chopda", "Pachora", "Bhadgaon", "Chalisgaon"],
    Ahilyanagar: ["Nagar", "Shevgaon", "Pathardi", "Parner", "Sangamner", "Kopargaon", "Akole", "Shrirampur", "Nevasa", "Rahata", "Rahuri", "Shrigonda", "Karjat", "Jamkhed"],
    "Chhatrapati Sambhajinagar": ["Chhatrapati Sambhajinagar", "Kannad", "Soegaon", "Sillod", "Phulambri", "Khuldabad", "Vaijapur", "Gangapur", "Paithan"],
    Jalna: ["Jalna", "Bhokardan", "Jafrabad", "Badnapur", "Ambad", "Ghansawangi", "Partur", "Mantha"],
    Parbhani: ["Parbhani", "Sonpeth", "Gangakhed", "Palam", "Purna", "Sailu", "Jintur", "Manwath", "Pathri"],
    Hingoli: ["Hingoli", "Sengaon", "Kalamnuri", "Basmath", "Aundha Nagnath"],
    Beed: ["Beed", "Georai", "Patoda", "Shirur-Kasar", "Ashti", "Majalgaon", "Wadwani", "Kaij", "Dharur", "Parli", "Ambajogai"],
    Nanded: ["Nanded", "Ardhapur", "Mudkhed", "Bhokar", "Umri", "Loha", "Kandhar", "Kinwat", "Himayatnagar", "Hadgaon", "Mahur", "Deglur", "Mukhed", "Dharmabad", "Biloli", "Naigaon"],
    Latur: ["Latur", "Renapur", "Ausa", "Ahmedpur", "Jalkot", "Chakur", "Shirur Anantpal", "Nilanga", "Deoni", "Udgir"],
    Dharashiv: ["Dharashiv", "Tuljapur", "Bhum", "Paranda", "Washi", "Kalamb", "Lohara", "Umarga"],
    Amravati: ["Amravati", "Bhatkuli", "Nandgaon Khandeshwar", "Dharni", "Chikhaldara", "Achalpur", "Chandurbazar", "Morshi", "Warud", "Daryapur", "Anjangaon-Surji", "Chandur", "Dhamangaon", "Tiosa"],
    Akola: ["Akola", "Akot", "Telhara", "Balapur", "Patur", "Murtajapur", "Barshitakli"],
    Washim: ["Washim", "Malegaon", "Risod", "Mangrulpir", "Karanja", "Manora"],
    Buldhana: ["Buldhana", "Chikhli", "Deulgaon Raja", "Jalgaon Jamod", "Sangrampur", "Malkapur", "Motala", "Nandura", "Khamgaon", "Shegaon", "Mehkar", "Sindkhed Raja", "Lonar"],
    Yavatmal: ["Yavatmal", "Arni", "Babhulgaon", "Kalamb", "Darwha", "Digras", "Ner", "Pusad", "Umarkhed", "Mahagaon", "Kelapur", "Ralegaon", "Ghatanji", "Wani", "Maregaon", "Zari Jamani"],
    Wardha: ["Wardha", "Deoli", "Seloo", "Arvi", "Ashti", "Karanja", "Hinganghat", "Samudrapur"],
    Nagpur: ["Nagpur Urban", "Nagpur Rural", "Kamptee", "Hingna", "Katol", "Narkhed", "Savner", "Kalameshwar", "Ramtek", "Mouda", "Parseoni", "Umred", "Kuhi", "Bhiwapur"],
    Bhandara: ["Bhandara", "Tumsar", "Pauni", "Mohadi", "Sakoli", "Lakhani", "Lakhandur"],
    Gondia: ["Gondia", "Goregaon", "Salekasa", "Tiroda", "Amgaon", "Deori", "Arjuni-Morgaon", "Sadak-Arjuni"],
    Chandrapur: ["Chandrapur", "Saoli", "Mul", "Ballarpur", "Pombhurna", "Gondpimpri", "Warora", "Chimur", "Bhadravati", "Bramhapuri", "Nagbhid", "Sindewahi", "Rajura", "Korpana", "Jiwati"],
    Gadchiroli: ["Gadchiroli", "Dhanora", "Chamorshi", "Mulchera", "Desaiganj", "Armori", "Kurkheda", "Korchi", "Aheri", "Etapalli", "Bhamragad", "Sironcha"],
  },

  // Indicative charge rules — not legal advice. See CHARGE_RULES usage in
  // backend/src/routes/reference.routes.js and the AI Assistant's system prompt.
  /* ── Documents: what Maharashtra does differently ───────────────────────
   * Only the entries below override the shared list in seedData/documents.js;
   * every other document falls through to that list unchanged.
   *
   * Researched from official sources, with the source recorded on each entry.
   * IMPORTANT finding: Maharashtra does NOT publish an itemised checklist of
   * papers for registering a sale deed. Its Citizen's Charter lists only the
   * original document, the duty/fees, photo-identity of all parties and
   * witnesses, and "papers as prescribed under the Registration Act 1908 and
   * Maharashtra Registration Rules 1961". The Bombay High Court has further
   * held that a Sub-Registrar's scope is limited to execution, identity and
   * authority, and that circulars cannot add document conditions. So the
   * entries below rename and explain documents rather than declaring extra
   * ones mandatory.
   *
   * NOT VERIFIED for Maharashtra (left on the shared default): whether
   * previous title deeds, property tax receipts, mutation extracts or a
   * separate address proof are demanded at the counter. No official source
   * states either way. */
  documentRules: {
    extract: {
      name: "7/12 Extract (Satbara)",
      where: "Mahabhulekh / DigitalSatbara portal, or the Tehsildar Office",
      note: "Maharashtra's Record of Rights, issued digitally signed by the Settlement Commissioner. The 8A extract and the urban Property Card are the related records. Note that the Sub-Registrar does not itself demand this at registration — you need it for your own title check.",
      source: "https://digitalsatbara.mahabhumi.gov.in/DSLR",
    },
    ec: {
      name: "Index II / Certified Copy of Index",
      note: "Maharashtra does not use the term \"Encumbrance Certificate\". The equivalent search is a certified copy of Index II from the registration office, published in the IGR Citizen's Charter as \"Certified Copy of Index\".",
      source: "https://grievanceigr.maharashtra.gov.in/pdf/Citizen_Charter_English.pdf",
    },
    conversion: {
      name: "NA Permission (Sanad)",
      note: "Under the Maharashtra Land Revenue Code s.44 the Collector grants permission and issues a sanad. Later amendments (s.42B/42C/42D) created deemed non-agricultural status in several situations, so a separate order is not always needed.",
      source: "https://indiankanoon.org/doc/163768344/",
    },
    noc: {
      name: "Collector's Permission / NOC",
      note: "Maharashtra Tenancy and Agricultural Lands Act s.63: sale of agricultural land to a person who is not an agriculturist is not valid without the Collector's permission.",
      source: "https://indiankanoon.org/doc/103576036/",
    },
    poa: {
      status: "optional",
      note: "Where a power of attorney is used, the IGR Citizen's Charter requires the original POA for verification, a certified copy for the record, and a declaration in the prescribed form that the POA still subsists.",
      source: "https://grievanceigr.maharashtra.gov.in/pdf/Citizen_Charter_English.pdf",
    },
    khata: {
      status: "not-applicable",
      note: "Khata is an entry in a Karnataka municipal property tax register under the Karnataka Municipal Corporations Act 1976 s.114. Maharashtra's equivalents are the 7/12, the 8A and the urban Property Card.",
      source: "https://bhulekh.mahabhumi.gov.in/",
    },
  },

  chargeRules: {
    stamp: 6,
    reg: 1,
    regCap: 30000,
    femaleRebate: 1,
    agriAdj: -1,
    localBody: 1,
    landRecord: "7/12 Extract (Satbara)",
    office: "Tehsildar Office",
  },
};
