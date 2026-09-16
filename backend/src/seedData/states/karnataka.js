/* See maharashtra.js in this folder for the full explanation of this file's
 * shape and how to add another state.
 *
 * All 31 districts, with their real taluks. */
export default {
  name: "Karnataka",

  districts: {
    Bagalkot: ["Badami", "Bagalkot", "Bilgi", "Hungund", "Jamkhandi", "Mudhol"],
    Ballari: ["Ballari", "Hosapete", "Kampli", "Hoovina Hadagalli", "Kudligi", "Sanduru", "Siruguppa"],
    Belagavi: ["Athni", "Bailahongal", "Belagavi", "Chikodi", "Gokak", "Hukkeri", "Khanapur", "Kittur", "Raybag", "Ramdurg", "Saundatti"],
    "Bengaluru Rural": ["Devanahalli", "Doddaballapura", "Hoskote", "Nelamangala"],
    "Bengaluru Urban": ["Anekal", "Bengaluru North", "Bengaluru East", "Bengaluru South"],
    Bidar: ["Bidar", "Basavakalyan", "Bhalki", "Homnabad", "Aurad"],
    Chamarajanagar: ["Chamrajnagar", "Gundlupet", "Kollegal", "Yelandur"],
    Chikkaballapur: ["Bagepalli", "Chikballapur", "Chintamani", "Gauribidanur", "Gudibanda", "Sidlaghatta"],
    Chikkamagaluru: ["Chikkamagaluru", "Kadur", "Koppa", "Mudigere", "Narasimharajapura", "Sringeri", "Tarikere"],
    Chitradurga: ["Challakere", "Chitradurga", "Hiriyur", "Holalkere", "Hosadurga", "Molakalmuru"],
    "Dakshina Kannada": ["Bantwal", "Beltangadi", "Mangaluru", "Puttur", "Sulya"],
    Davanagere: ["Channagiri", "Davanagere", "Harihar", "Harpanahalli", "Honnali", "Jagalur"],
    Dharwad: ["Dharwad", "Hubballi", "Kalghatgi", "Kundgol", "Navalgund"],
    Gadag: ["Gadag-Betigeri", "Mundargi", "Nargund", "Ron", "Shirhatti"],
    Haveri: ["Byadgi", "Hangal", "Haveri", "Hirekerur", "Ranibennur", "Savanur", "Shiggaon"],
    Kalaburagi: ["Afzalpur", "Aland", "Chincholi", "Chitapur", "Kalaburagi", "Jevargi", "Sedam"],
    Hassan: ["Alur", "Arkalgud", "Arsikere", "Belur", "Channarayapattana", "Hassan", "Holenarsipur", "Sakleshpur"],
    Kodagu: ["Madikeri", "Somvarpet", "Virajpet"],
    Kolar: ["Bangarapet", "Kolar", "Malur", "Mulbagal", "Srinivaspur"],
    Koppal: ["Gangawati", "Koppal", "Kushtagi", "Yelbarga"],
    Mandya: ["Krishnarajpet", "Maddur", "Malavalli", "Mandya", "Nagamangala", "Pandavapura", "Shrirangapattana"],
    Mysuru: ["Heggadadevana Kote", "Hunsur", "Krishnarajanagara", "Mysuru", "Nanjangud", "Piriyapatna", "T. Narsipur"],
    Raichur: ["Devadurga", "Lingsugur", "Manvi", "Raichur", "Sindhnur"],
    Ramanagara: ["Channapatna", "Kanakapura", "Ramanagara", "Magadi"],
    Shivamogga: ["Bhadravati", "Hosanagara", "Sagar", "Shikaripura", "Shivamogga", "Sorab", "Thirthahalli"],
    Tumakuru: ["Chiknayakanhalli", "Gubbi", "Koratagere", "Kunigal", "Madhugiri", "Pavagada", "Sira", "Tiptur", "Tumakuru", "Turuvekere"],
    Udupi: ["Udupi", "Brahmavara", "Karkal", "Kundapura", "Byndoor"],
    "Uttara Kannada": ["Ankola", "Bhatkal", "Haliyal", "Honnavar", "Joida", "Karwar", "Kumta", "Mundgod", "Siddapur", "Sirsi", "Yellapur"],
    Vijayapura: ["Vijayapura", "Indi", "Sindgi", "Basavana Bagevadi"],
    Vijayanagara: ["Hospet", "Kampli", "Hagaribommanahalli", "Kottur", "Hadagali", "Harapanahalli"],
    Yadgir: ["Shahpur", "Shorapur", "Yadgir"],
  },

  /* ── Documents: what Karnataka does differently ─────────────────────────
   * Karnataka is the one state of the three that publishes a real, official
   * checklist of documents to enclose for property registration — issued
   * under Government circular No. RD.344 MUNOMU2008 dated 6.4.2009 by the
   * Department of Stamps and Registration, and still maintained (the page was
   * last updated 22 February 2024).
   *
   * That checklist is split by jurisdiction — gram panchayat, town panchayat /
   * municipality, BBMP / corporation, and agricultural land — so a few entries
   * below are marked mandatory with a note naming the case they apply to.
   *
   * NOT VERIFIED for Karnataka (left on the shared default): Aadhaar (the
   * official list asks only for generic "photo ID proof"), address proof, and
   * legal heir / succession certificates. No official source names them. */
  documentRules: {
    extract: {
      name: "RTC (Record of Rights)",
      where: "Bhoomi portal or the Nadakacheri / Taluk office",
      note: "The official checklist requires a copy of the RTC issued within the last 15 days, for transfers of agricultural land.",
      source: "https://igr.karnataka.gov.in/info-2/Document+to+be+produced/Documents/en",
    },
    khata: {
      name: "Khata Certificate & Assessment Extract",
      status: "mandatory",
      where: "Gram Panchayat, Municipality / City Municipal Council, or BBMP",
      note: "Required for every non-agricultural property. Gram panchayat property needs the khata plus Form 9 and 11A (or computerised 11B); municipal property needs the khata and assessment register extract; BBMP property needs A-Khata and the assessment extract.",
      source: "https://igr.karnataka.gov.in/info-2/Document+to+be+produced/Documents/en",
    },
    pan: {
      note: "The official checklist requires PAN, or a declaration in Form 60 or 61, for sale transactions of Rs. 5 lakh and above.",
      source: "https://igr.karnataka.gov.in/info-2/Document+to+be+produced/Documents/en",
    },
    conversion: {
      name: "Conversion Order / Sanctioned Plan",
      status: "mandatory",
      note: "Required for converted land in all three non-agricultural categories, alongside the khata and assessment extract.",
      source: "https://igr.karnataka.gov.in/info-2/Document+to+be+produced/Documents/en",
    },
    survey: {
      name: "Survey Sketch (Form 11E)",
      status: "mandatory",
      note: "Required for transfers of agricultural land, under s.131(c) of the Karnataka Land Revenue Act and Rule 46H of the Karnataka Land Revenue Rules.",
      source: "https://igr.karnataka.gov.in/info-2/Document+to+be+produced/Documents/en",
    },
    noc: {
      name: "PTCL NOC / Permission Order",
      status: "mandatory",
      note: "For agricultural transfers: an NOC or permission order under s.6 of the Karnataka Scheduled Castes and Scheduled Tribes (Prohibition of Transfer of Certain Lands) Act 1978. A declaration under s.81A of the Karnataka Land Reforms Act 1961 is required alongside it.",
      source: "https://igr.karnataka.gov.in/info-2/Document+to+be+produced/Documents/en",
    },
    titledeeds: {
      status: "optional",
      note: "The official checklist requires title deeds, the allotment letter or a possession certificate where the property was granted by the Government or one of its departments.",
      source: "https://igr.karnataka.gov.in/info-2/Document+to+be+produced/Documents/en",
    },
    ec: {
      name: "Encumbrance Certificate (Form 15)",
      status: "optional",
      note: "Not on the registration checklist, but BBMP requires a Form 15 encumbrance certificate for khata transfer after the sale — so you will need one anyway.",
      source: "https://site.bbmp.gov.in/departmentwebsites/revenue/kathaservice.html",
    },
    tax: {
      status: "optional",
      note: "Not on the registration checklist, which asks instead for the assessment register extract. BBMP does require the current year's tax paid receipt for khata transfer.",
      source: "https://site.bbmp.gov.in/departmentwebsites/revenue/kathaservice.html",
    },
  },

  chargeRules: {
    stamp: 5,
    reg: 1,
    regCap: null,
    femaleRebate: 0,
    agriAdj: -0.5,
    localBody: 0.5,
    landRecord: "RTC / Pahani",
    office: "Taluk Office",
  },
};
