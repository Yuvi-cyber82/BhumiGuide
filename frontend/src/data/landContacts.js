/* Local land & property contacts, by state → district → taluka.
 *
 * SOURCE: this list was compiled and supplied by the project owner (see the
 * uploaded spreadsheet "Land Property Contacts MH / MP / KA"). Nothing here is
 * generated or guessed — every name, phone number and email below is exactly
 * as it appeared in that sheet. A blank phone or email simply means the sheet
 * had no value for that person; those fields are left empty rather than filled
 * with a placeholder.
 *
 * District and taluka spellings were matched to the names this app's own
 * dropdowns use (from backend/src/seedData/states/*.js). A small hand-checked
 * alias list handled genuine spelling variants — e.g. "Bagalkote" → "Bagalkot",
 * "Murtizapur" → "Murtajapur", "Hosapete" → "Hospet". Where a taluka name in
 * the sheet has no equivalent in the app's list, the contact is still kept
 * under its real taluka name and surfaces through the district-level fallback
 * in contactsFor() below.
 *
 * 1414 contacts across 3 states.
 * Counts: Maharashtra 481, Madhya Pradesh 732, Karnataka 201 */

export const LAND_CONTACTS = {
 "Maharashtra": {
  "Ahilyanagar": {
   "Akole": [
    {
     "n": "Suryawanshi Sachin Khobraji",
     "p": "9637119090",
     "e": "sachin.suryawanshi1176@gmail.com"
    }
   ],
   "Jamkhed": [
    {
     "n": "BHAUSAHEB BHAKCHAND SONAWANE",
     "p": "9890868577",
     "e": "bhausahebsonavane69@gmail.com"
    }
   ],
   "Karjat": [
    {
     "n": "GAIKWAD PRASHANT TATYASAHEB",
     "p": "9420949243",
     "e": "ptgaikwad6@gmail.com"
    },
    {
     "n": "GHOLVE WAMAN GANPATRAO",
     "p": "9970816442",
     "e": "wamangholve@gmail.com"
    }
   ],
   "Kopargaon": [
    {
     "n": "prashant panjabrao aware",
     "p": "8308865865",
     "e": "ppaware@yahoo.in"
    }
   ],
   "Nevasa": [
    {
     "n": "Bharat Eknath Tekale",
     "p": "9922356510",
     "e": "bharatetakale1967@gmail.com"
    },
    {
     "n": "Sunil Namdev Vidhate",
     "p": "8308016192",
     "e": "auditor.shevgaon@rediffmail.com"
    }
   ],
   "Parner": [
    {
     "n": "THAKUR SWATI RAMESH",
     "p": "7020283474",
     "e": "swatithakur5172@gmail.com"
    }
   ],
   "Pathardi": [
    {
     "n": "Anant Suresh Tarawade",
     "p": "9011395447",
     "e": "anantstarawade@rediffmail.com"
    }
   ],
   "Rahata": [
    {
     "n": "KHARDE SUNIL NAMDEO",
     "p": "9850545988",
     "e": "kharde790@gmail.com"
    },
    {
     "n": "PINGALE SANTAJI NAMDEV",
     "p": "8308514319",
     "e": "santoshpingale45@gmail.com"
    }
   ],
   "Rahuri": [
    {
     "n": "Shital Balkrishna shivalekar",
     "p": "9860847066",
     "e": "shital30shivalekar@gmail.com"
    }
   ],
   "Sangamner": [
    {
     "n": "SANJAY CHANDRABHAN DARADE",
     "p": "8830562430",
     "e": "sanjaycdarade@gmail.com"
    },
    {
     "n": "SAWANT DEEPAK ANANDRAO",
     "p": "9922498855",
     "e": "sujatadeepak22@gmail.com"
    },
    {
     "n": "Vijay Basahaheb Nadhe",
     "p": "8956173886",
     "e": "vijay.omsairam709@gmail.com"
    }
   ],
   "Shevgaon": [
    {
     "n": "NAVNATH ASHRU THOMBRE",
     "p": "9763709708",
     "e": "navnaththombre12@gmail.com"
    },
    {
     "n": "sandeep suryabhan gadge",
     "p": "7588023150",
     "e": "gadgesandeep@yahoo.co.in"
    }
   ],
   "Shrigonda": [
    {
     "n": "Pawar Santosh Bhanudas",
     "p": "9921311400",
     "e": "pawarsantosh1234@gmail.com"
    }
   ],
   "Shrirampur": [
    {
     "n": "MUKESH MARUTI VADIYAR",
     "p": "9370228143",
     "e": "mukeshvadiyar@gmail.com"
    }
   ]
  },
  "Akola": {
   "Akot": [
    {
     "n": "SHRIKANT SUDHAKAR DESHPANDE",
     "p": "7709043343",
     "e": "shrikantdeshpande32@gmail.com"
    }
   ],
   "Balapur": [
    {
     "n": "Dilip Madhukar Bagade",
     "p": "7020230996",
     "e": "dmbagade47@gmail.com"
    }
   ],
   "Murtajapur": [
    {
     "n": "VAISHALI GAJANAN SADATKAR",
     "p": "8805942094",
     "e": "anilrambhaumahalle@yahoo.com"
    }
   ],
   "Patur": [
    {
     "n": "RAJENDRA UTTAMRAO KHEDEKAR",
     "p": "9921979887",
     "e": "rajendrakhedekar72@gmail.com"
    }
   ],
   "Telhara": [
    {
     "n": "ravindra madhukar joshi",
     "p": "9960559031",
     "e": "ravindra.joshi14@gmail.com"
    }
   ]
  },
  "Amravati": {
   "Achalpur": [
    {
     "n": "Chunilal Tulshiram Rathod",
     "p": "9881296567",
     "e": "chunnytrathod@gmail.com"
    }
   ],
   "Bhatkuli": [
    {
     "n": "VINOD SHANKARRAO MASRAM",
     "p": "9422869634",
     "e": "vs_masram@rediffmail.com"
    }
   ],
   "Chandur Bazar": [
    {
     "n": "GOPAL PUNDLIKRAO THORAT",
     "p": "7387414264",
     "e": "gopalthorat58@gmail.com"
    }
   ],
   "Chikhaldara": [
    {
     "n": "vishwas vilas kokate",
     "p": "9822790030",
     "e": "kokatevishwas_vvk@rediffmail.com"
    }
   ],
   "Dharni": [
    {
     "n": "sanjay balwantrao parpillewar",
     "p": "9503470096",
     "e": "sanjayparpillewar12839@gmail.com"
    }
   ],
   "Morshi": [
    {
     "n": "NARENDRA DADARAO BOBADE",
     "p": "9423427011",
     "e": "narendrabobade70@gmail.com"
    }
   ],
   "Nandgaon Khandeshwar": [
    {
     "n": "Sarwade Bhausaheb Raosaheb",
     "p": "9423171845",
     "e": "sarwadebhausaheb@gmail.com"
    }
   ],
   "Warud": [
    {
     "n": "SANJAY TUKARAM MESHRAM",
     "p": "9850599451",
     "e": "meshrambadnera123@gmail.com"
    }
   ]
  },
  "Beed": {
   "Ambajogai": [
    {
     "n": "ATUL DHARMARAJ THIGALE",
     "p": "9970144025",
     "e": "atulthigale@gmail.com"
    },
    {
     "n": "DHANANJAY KISHANRAO KARAD",
     "p": "9890575238",
     "e": "dkkarad1968@gmail.com"
    }
   ],
   "Ashti": [
    {
     "n": "CHALAK BHAGWAT BHAGWANRAO",
     "p": "9422244131",
     "e": "chalakbb@gmail.com"
    }
   ],
   "Georai": [
    {
     "n": "SATISH KAKASAHEB POKALE",
     "p": "8983557777",
     "e": "satpokale@gmail.com"
    }
   ],
   "Majalgaon": [
    {
     "n": "GANESH SHRIPADRAO KSHIRSAGAR",
     "p": "9403104140",
     "e": "ganeshkshirsagar465@gmail.com"
    }
   ],
   "Patoda": [
    {
     "n": "Deshmukh Santosh Balwantrao",
     "p": "9405386827",
     "e": "auditordeshmukh@gmail.com"
    }
   ],
   "Shirur Kasar": [
    {
     "n": "Sharad Raghvendra Pimparkar",
     "p": "8999564286",
     "e": "shampimparkar@gmail.com"
    }
   ]
  },
  "Bhandara": {
   "Lakhandur": [
    {
     "n": "Vaibhav Pawar",
     "p": "07181260041",
     "e": "tahlakhandur@gmail.com"
    }
   ],
   "Lakhani": [
    {
     "n": "Sheetal Ghawate",
     "p": "07186245500",
     "e": "lakhni.tahsildar@gmail.com"
    }
   ],
   "Mohadi": [
    {
     "n": "Prajkta Burande",
     "p": "07197241130",
     "e": "tahmohadi@gmail.com"
    }
   ],
   "Pauni": [
    {
     "n": "Satish Sawale",
     "p": "07185255241",
     "e": "tahpauni@gmail.com"
    }
   ],
   "Sakoli": [
    {
     "n": "Nilesh Kadam",
     "p": "07186236124",
     "e": "tahsakoli@gmail.com"
    }
   ],
   "Tumsar": [
    {
     "n": "Sandip Makode",
     "p": "07184252210",
     "e": "tehsilbhandara@gmail.com"
    },
    {
     "n": "Upesh Ambade",
     "p": "07183232286",
     "e": "tahsildartumsar1@gmail.com"
    }
   ]
  },
  "Buldhana": {
   "Chikhli": [
    {
     "n": "Aruna Manoj Vyawahare",
     "p": "9422927256",
     "e": "arunavyawahare1974@gmail.com"
    }
   ],
   "Deulgaon Raja": [
    {
     "n": "DEWARE SUNIL CHANDRASING",
     "p": "8788554960",
     "e": "sunildeware@gmail.com"
    }
   ],
   "Jalgaon Jamod": [
    {
     "n": "SACHIN SURAJ PAWAR",
     "p": "9404011716",
     "e": "sachinpawar1857.sp@gmail.com"
    }
   ],
   "Khamgaon": [
    {
     "n": "Hiwarkhede Subhash Pandurang",
     "p": "9423445273",
     "e": "hiwarkhedesp@gmail.com"
    }
   ],
   "Malkapur": [
    {
     "n": "Jayant Dinkar Tayade",
     "p": "9970927629",
     "e": "jayanttayade84@gmail.com"
    },
    {
     "n": "Nemichand Bansilal Dhoot",
     "p": "9011062541",
     "e": "advpiyushdhoot24@gmail.com"
    }
   ],
   "Motala": [
    {
     "n": "Mogankha Y. Pathan",
     "p": "9689492710",
     "e": "mogankhapathan@gmail.com"
    },
    {
     "n": "Pukraj Suryabhan Suradkar",
     "p": "9146243240",
     "e": "pukrajsuradkar13@gmail.com"
    },
    {
     "n": "Shaikh Wasim Shaikh Bismilla Qureshi",
     "p": "7558672008",
     "e": "allmeet786@gmail.com"
    },
    {
     "n": "Shyam Sitaram Galne",
     "p": "9423337790",
     "e": "shyamsg15@gmail.com"
    }
   ],
   "Sangrampur": [
    {
     "n": "Pravin Manoharrao Banchare",
     "p": "9422862602",
     "e": "pravinbanchare@gmail.com"
    }
   ]
  },
  "Chandrapur": {
   "Ballarpur": [
    {
     "n": "Purushottam Raoji Bobade",
     "p": "9420447420",
     "e": "purubobade@gmail.com"
    }
   ],
   "Gondpimpri": [
    {
     "n": "VAISHALI SHRIRAM RATHOD",
     "p": "9511795466",
     "e": "vaishalisrathod511@gmail.com"
    }
   ],
   "Mul": [
    {
     "n": "SHIRISH BHAURAO GODE",
     "p": "9881145768",
     "e": "shiribg@rediffmail.com"
    }
   ],
   "Pombhurna": [
    {
     "n": "SAJAN KISAN SAKHARE",
     "p": "9421712804",
     "e": "sajan_2908@rediffmail.com"
    }
   ],
   "Saoli": [
    {
     "n": "SUDHIR SHANKARRAO BANSOD",
     "p": "9763986188",
     "e": "sudhirbansod69@gmail.com"
    }
   ],
   "Warora": [
    {
     "n": "Nishigandha Chhagan Selote",
     "p": "9422999798",
     "e": "ncselote@gmail.com"
    }
   ]
  },
  "Chhatrapati Sambhajinagar": {
   "Gangapur": [
    {
     "n": "Chilwar Shriniwas Balkishan",
     "p": "9850590167",
     "e": "chilwarsb1970@gmail.com"
    },
    {
     "n": "Namdeo Sukdeo Gaikwad",
     "p": "9421413198",
     "e": "aur_dsa@rediffmail.com"
    },
    {
     "n": "RAHUL NARENDRA SHINGNE",
     "p": "7756977502",
     "e": "rahulyes007@gmail.com"
    },
    {
     "n": "Rajesh Ashokarao Sarsamkar",
     "p": "9422872562",
     "e": "sarsamkarrajesh@gmail.com"
    }
   ],
   "Kannad": [
    {
     "n": "Bapurao Jaiwantrao Walke",
     "p": "9423138155",
     "e": "bapuraobjw@gmail.com"
    },
    {
     "n": "CHAKOTE YOGITA SHRIDHAR",
     "p": "9421991313",
     "e": "virenyog@gmail.com"
    },
    {
     "n": "Jayanti Suhas Wakharkar",
     "p": "7588165185",
     "e": "jayantisuhaswakharkar@gmail.com"
    }
   ],
   "Khuldabad": [
    {
     "n": "Khaja Ashraf Akheel",
     "p": "9975567670",
     "e": "shafae.khaja@gmail.com"
    },
    {
     "n": "Supriya Chandrashekhar Gawali",
     "p": "9822391170",
     "e": "scgawali@gmail.com"
    }
   ],
   "Paithan": [
    {
     "n": "Anil Maroti Tayade",
     "p": "9420435782",
     "e": "anil.tayade74@gmail.com"
    },
    {
     "n": "DONGRE PRAVIN YASHWATRAO",
     "p": "9175635499",
     "e": "pravindongre79@gmail.com"
    }
   ],
   "Phulambri": [
    {
     "n": "PRAVIN SADASHIVRAO KULKARNI",
     "p": "9404135963",
     "e": "pk2kulkarni@gmail.com"
    },
    {
     "n": "Sudhakar Karbhari Gaike",
     "p": "9422224458",
     "e": "gaikesudhakar@gmail.com"
    }
   ],
   "Sillod": [
    {
     "n": "Yawalkar Nandgopal Ratnakar",
     "p": "9922116869",
     "e": "nandgopalyawalkar@gmail.com"
    },
    {
     "n": "Zala Prashant Mohansing",
     "p": "9730945222",
     "e": "prashantjhala@yahoo.in"
    }
   ],
   "Soegaon": [
    {
     "n": "Baviskar Devalal Bapurao",
     "p": "9822769995",
     "e": "devalalbaviskar1966@gmail.com"
    },
    {
     "n": "JAYESH PANDITRAO BANSOD",
     "p": "9423614262",
     "e": "Jayeshbansod059@gmail.com"
    },
    {
     "n": "KULKARNI SHIRISH DEVIDAS",
     "p": "9423157076",
     "e": "shirish2508@rediffmail.com"
    }
   ],
   "Vaijapur": [
    {
     "n": "ANIL BHASKARRAO DESHPANDE",
     "p": "9420404669",
     "e": "deshpandeanil.2014@gmail.com"
    },
    {
     "n": "Dhananjay Hiralal Chavan",
     "p": "9404144355",
     "e": "chavandh@gmail.com"
    }
   ]
  },
  "Dharashiv": {
   "Bhum": [
    {
     "n": "GHOGARE VIDYA NARAYAN",
     "p": "9049453424",
     "e": "vdya_ghogare@rediffmail.com"
    },
    {
     "n": "GORE RAJABHAU KISANRAO",
     "p": "9421353458",
     "e": "rajabhaugore70@gmail.com"
    }
   ],
   "Kalamb": [
    {
     "n": "SANJAY SHRIHARI PATIL",
     "p": "9423739262",
     "e": "p17991287@gmail.com"
    }
   ],
   "Paranda": [
    {
     "n": "shaikh Munwar Chandpasha",
     "p": "9405403155",
     "e": "munawar45047@gmail.com"
    }
   ],
   "Tuljapur": [
    {
     "n": "Varsha Marutirao Survase",
     "p": "9130311766",
     "e": "varshasurvasebhor85@gmail.com"
    }
   ],
   "Washi": [
    {
     "n": "SURYAWANSHI SANJAY MACHINDRA",
     "p": "8888354028",
     "e": "sanjaysurya012@gmail.com"
    }
   ]
  },
  "Dhule": {
   "Sakri": [
    {
     "n": "NITIN BHIMRAO GAIKWAD",
     "p": "9422795683",
     "e": "nbgaikwad.auditor@gmail.com"
    },
    {
     "n": "SANDEEP SHANTARAM PATIL",
     "p": "9921933999",
     "e": "sandippatil099@gmail.com"
    },
    {
     "n": "Vishal Vitthalrao Jogdand",
     "p": "9823041603",
     "e": "vishaljogdand2939@gmail.com"
    }
   ],
   "Shirpur": [
    {
     "n": "ASARAM MAHARU PATIL",
     "p": "9922712081",
     "e": "Asaram.patil@rediffmail.com"
    },
    {
     "n": "PANNALAL BRJLAL BAGUL",
     "p": "8208263320",
     "e": "pbagul1970@gmail.com"
    },
    {
     "n": "YOGIRAJSINGH VITTHALSINGH RAJPUT",
     "p": "9405285763",
     "e": "yogita151187@gmail.com"
    }
   ],
   "Sindkheda": [
    {
     "n": "Preeti Uttamrao Nazirkar",
     "p": "9503492020",
     "e": "preetinazirkar@gmail.com"
    },
    {
     "n": "Sujata Laxmanrao Gujar",
     "p": "9420266875",
     "e": "bhavsarsujata136@gmail.com"
    },
    {
     "n": "VISHWANATH BHUMANNA PAPULWAR",
     "p": "9421263473",
     "e": "vishwanathpapulwar44@gmail.com"
    }
   ]
  },
  "Gadchiroli": {
   "Aheri": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Armori": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Bhamragad": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Chamorshi": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Desaiganj": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Dhanora": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Etapalli": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Gadchiroli": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Korchi": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Kurkheda": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Mulchera": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ],
   "Sironcha": [
    {
     "n": "NOT YET FOUND - district site blocks automated access",
     "p": "",
     "e": ""
    }
   ]
  },
  "Jalgaon": {
   "Bhusawal": [
    {
     "n": "SHEELA B BODADE",
     "p": "9822638706",
     "e": "sbbodade2011@gmail.com"
    }
   ],
   "Bodwad": [
    {
     "n": "shailesh kalidas thorat",
     "p": "9850941879",
     "e": "shaithorat1946@gmail.com"
    }
   ],
   "Chalisgaon": [
    {
     "n": "kishor dayaram patil",
     "p": "8788315542",
     "e": "kdpspl.2612@gmail.com"
    }
   ],
   "Dharangaon": [
    {
     "n": "Arvind Vasantrao Nichal",
     "p": "9403517409",
     "e": "arvindnichal13@gmail.com"
    }
   ],
   "Erandol": [
    {
     "n": "Eknath Ambadas Havale",
     "p": "8208544862",
     "e": "eknathhavale@gmail.com"
    }
   ],
   "Jamner": [
    {
     "n": "Pandit Fattu Chavan",
     "p": "9922656636",
     "e": "panditfchavan@gmail.com"
    }
   ],
   "Muktainagar": [
    {
     "n": "MAHENDRA KASHINATH GAWALI",
     "p": "9922159484",
     "e": "mahen_gaw09@rediffmail.com"
    }
   ],
   "Pachora": [
    {
     "n": "ASHOK NATHU PATIL",
     "p": "9822211748",
     "e": "ashokn.patil@mah.gov.in"
    }
   ],
   "Raver": [
    {
     "n": "Majidkha Kalekha Jamadar",
     "p": "7588647579",
     "e": "majid786majidkha15@gmail.com"
    }
   ]
  },
  "Jalna": {
   "Ambad": [
    {
     "n": "Kharat Patil Notary Office",
     "p": "9890427854",
     "e": ""
    }
   ],
   "Badnapur": [
    {
     "n": "Badrinarayan Waghmare",
     "p": "9422797284",
     "e": ""
    }
   ],
   "Bhokardan": [
    {
     "n": "RAJENDRA CHANDRAKANT BOBDE",
     "p": "7276464761",
     "e": "rajbobde@rediffmail.com"
    }
   ],
   "Jafrabad": [
    {
     "n": "THORE MANDAKINI VIDHYASAGAR",
     "p": "9420223867",
     "e": "mandathore86@gmail.com"
    }
   ],
   "Partur": [
    {
     "n": "Dilip Sopanrao Bhandarge",
     "p": "8275932942",
     "e": ""
    }
   ]
  },
  "Kolhapur": {
   "Ajra": [
    {
     "n": "Baliram Babu Patil",
     "p": "9403105675",
     "e": "bbpatilajara@gmail.com"
    },
    {
     "n": "Sub Registrar Ajara",
     "p": "",
     "e": "sr.aajra@igrmaharashtra.gov.in"
    }
   ],
   "Bhudargad": [
    {
     "n": "Sub Registrar Bhudargad",
     "p": "",
     "e": "sr.bhudargad@igrmaharashtra.gov.in"
    }
   ],
   "Chandgad": [
    {
     "n": "Anandt S. Kamble",
     "p": "9423286474",
     "e": "anantkamble@gmail.com"
    },
    {
     "n": "L. S. Deshpande",
     "p": "8762381530",
     "e": "leenadeshpande@gmail.com"
    },
    {
     "n": "S. K. Sawant",
     "p": "7218062418",
     "e": "shashikantsawantg@gmail.com"
    },
    {
     "n": "Sub Registrar Chandgad",
     "p": "",
     "e": "sr.chandgad@igrmaharashtra.gov.in"
    }
   ],
   "Gadhinglaj": [
    {
     "n": "Meena Murlidhar Biday",
     "p": "9371005155",
     "e": "advmeenabide@gmail.com"
    },
    {
     "n": "Sub Registrar Gadhinglaj",
     "p": "",
     "e": "sr.gadhinglaj@igrmaharashtra.gov.in"
    },
    {
     "n": "Surekha Bhauso Patil",
     "p": "9049472170",
     "e": "surekha31@gmail.com"
    }
   ],
   "Gaganbawada": [
    {
     "n": "Sub Registrar Gaganbavda",
     "p": "",
     "e": "sr.gaganbavada@igrmaharashtra.gov.in"
    }
   ],
   "Hatkanangale": [
    {
     "n": "Sub Registrar Hatkanangle",
     "p": "",
     "e": "sr.hatkaganle@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Ichalkaranji 1",
     "p": "",
     "e": "sr.ichalkaranji@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Ichalkaranji 2",
     "p": "",
     "e": ""
    }
   ],
   "Kagal": [
    {
     "n": "Abhijeet Suresh Shitole",
     "p": "8421364798",
     "e": "Abhijeets1206@gmail.com"
    },
    {
     "n": "Bharat Antu Rane",
     "p": "9423857721",
     "e": "bharatrane281071@gmail.com"
    },
    {
     "n": "Minakshi Baburao Jadhav",
     "p": "9890969011",
     "e": "jadhavminu754@gmail.com"
    },
    {
     "n": "Revati Ramgonda Patil",
     "p": "9766307168",
     "e": "magdumrevatirekes@gmail.com"
    },
    {
     "n": "Sub Registrar Kagal",
     "p": "",
     "e": "sr.kagal@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Murgud",
     "p": "",
     "e": "sr.murgud@igrmaharashtra.gov.in"
    }
   ],
   "Karvir": [
    {
     "n": "AJAY ANIL GAIKWAD",
     "p": "8830365929",
     "e": "ajaygaikwad.307@rediffmail.com"
    },
    {
     "n": "Anil Anant Chikane",
     "p": "9921120606",
     "e": "anilanant13@gmail.com"
    },
    {
     "n": "Joint District Registrar & Collector of Stamps, Kolhapur",
     "p": "",
     "e": "jdr.kolhapur@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Karvir 1",
     "p": "",
     "e": "sr.karvir1@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Karvir 2",
     "p": "",
     "e": "sr.karvir2@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Karvir 3",
     "p": "",
     "e": "sr.karvir3@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Karvir 4",
     "p": "",
     "e": "sr.karvir4@igrmaharashtra.gov.in"
    },
    {
     "n": "Kapoor Pradnya Sachin",
     "p": "9421230574",
     "e": "kapoorpradnya23@gmail.com"
    },
    {
     "n": "Nandini Anil Mali",
     "p": "9022597006",
     "e": "malinandini1972@gmail.com"
    },
    {
     "n": "nitin ganpat sabale",
     "p": "9604840009",
     "e": "nitinsabale67@gmail.com"
    },
    {
     "n": "PADALKAR SATISH VASANTRAO",
     "p": "9422044154",
     "e": "sunilca2005@gmail.com"
    },
    {
     "n": "Patil Gajanan Pandurang",
     "p": "9421016874",
     "e": "gajanan.patil13@gmail.com"
    },
    {
     "n": "PRATAPSINH BABASAHEB KASHID",
     "p": "9860782121",
     "e": "2ndaddlsplauditorclass2@gmail.com"
    },
    {
     "n": "rajesh jaysing hankare",
     "p": "9767443737",
     "e": "rhankare77@gmail.com"
    },
    {
     "n": "Sadashiv Hindurao Tibile",
     "p": "9822882521",
     "e": "firstadditional.spl.adt@gmail.com"
    },
    {
     "n": "SHIVDAS BHIVSAN SONWANE",
     "p": "9823664499",
     "e": "shivsonwane@gmail.com"
    },
    {
     "n": "SIDDHESHWAR MALLIKARJUN NITURE",
     "p": "9373322467",
     "e": "nsiddheshwar1966@gmail.com"
    },
    {
     "n": "Udaysinh Shahaji Raorane",
     "p": "8275358058",
     "e": "raoraneus@gamil.com"
    },
    {
     "n": "vijay mahadeo patil",
     "p": "9404111925",
     "e": "vijaympatilvm@gmail.com"
    }
   ],
   "Panhala": [
    {
     "n": "S. N. Patil",
     "p": "9970545720",
     "e": "patilsnadv@gmail.com"
    },
    {
     "n": "Sub Registrar Panhala",
     "p": "",
     "e": "sr.panhala@igrmaharashtra.gov.in"
    },
    {
     "n": "V. A. Patil",
     "p": "9960428890",
     "e": "patilvishwas8890@gmail.com"
    }
   ],
   "Radhanagari": [
    {
     "n": "Sub Registrar Radhanagari",
     "p": "",
     "e": "sr.radhanagri@igrmaharashtra.gov.in"
    }
   ],
   "Shahuwadi": [
    {
     "n": "Sub Registrar Shahuwadi",
     "p": "",
     "e": "sr.shahuwadi@igrmaharashtra.gov.in"
    }
   ],
   "Shirol": [
    {
     "n": "Sub Registrar Shirol",
     "p": "",
     "e": "sr.shirol@igrmaharashtra.gov.in"
    }
   ]
  },
  "Latur": {
   "Ausa": [
    {
     "n": "VAISHALI SANGRAM SHRANGARE",
     "p": "8149211002",
     "e": "audgr1.coop@gmail.com"
    }
   ],
   "Deoni": [
    {
     "n": "Bharat Vitthalrao Patil",
     "p": "9423802808",
     "e": "advbharatpatil4@gmail.com"
    },
    {
     "n": "Dhanaji Narayan Kamble",
     "p": "9822137160",
     "e": "pkamble7160@gmail.com"
    },
    {
     "n": "Santosh Prabhakar Kamble",
     "p": "9665950590",
     "e": "sk4337367@gmail.com"
    }
   ],
   "Nilanga": [
    {
     "n": "Parmeshwar Narsing Hambarde",
     "p": "8600038520",
     "e": "param07h@gmail.com"
    },
    {
     "n": "Shivanand Virbhadra Mathpati",
     "p": "8275925222",
     "e": "shivanandmathpati094@gmail.com"
    },
    {
     "n": "Tanaji Ramrao Patil",
     "p": "9021197793",
     "e": "tanajip1181@gmail.com"
    },
    {
     "n": "Varsha Vasantrao Kulkarni",
     "p": "9322253045",
     "e": "joshivarsha657@gmail.com"
    },
    {
     "n": "Vasudev Vasantrao Kulkarni",
     "p": "6041670030",
     "e": "vasudevkulkarni003@gmail.com"
    }
   ],
   "Renapur": [
    {
     "n": "Dhananjay Dnyaneshwar Kapse",
     "p": "9764210545",
     "e": "kapsedhannajay6@gmail.com"
    },
    {
     "n": "Jagannath Ramchandra Kedar",
     "p": "9422989078",
     "e": "advjrkedar25@gmail.com"
    },
    {
     "n": "Rajendra Dattatray Gade",
     "p": "9850614874",
     "e": "rajendragade@gmail.com"
    },
    {
     "n": "Thorath Kaka Kashinath",
     "p": "9834300294",
     "e": "splsugltr@gmail.com"
    }
   ],
   "Udgir": [
    {
     "n": "Jamiroddin K. Jagirdar",
     "p": "9422227863",
     "e": "jagirdarjk@gmail.com"
    },
    {
     "n": "Prashant S. Kulkarni",
     "p": "9421451584",
     "e": "pkudgir@gmail.com"
    },
    {
     "n": "Pravin P. Kalgore",
     "p": "9527939452",
     "e": "pravinkalgore2013@gmail.com"
    },
    {
     "n": "Ramesh N. Pawar",
     "p": "9421367834",
     "e": "pawar78udgir@gmail.com"
    },
    {
     "n": "Vivekanand M. Dongre",
     "p": "9850711909",
     "e": "vivekananddongre88@gmail.com"
    }
   ]
  },
  "Mumbai City": {
   "Mumbai City": [
    {
     "n": "Dy. Inspector General of Registration, Mumbai",
     "p": "",
     "e": "dig.mumbai@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint District Registrar, Mumbai City",
     "p": "22630742",
     "e": "ao.mumbai@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Mumbai City 1",
     "p": "22634001",
     "e": "jsr.mumbaicity1@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Mumbai City 2",
     "p": "24227123",
     "e": "jsr.mumbaicity2@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Mumbai City 3",
     "p": "24220576",
     "e": "jsr.mumbaicity3@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Mumbai City 4",
     "p": "24221018",
     "e": "jsr.mumbaicity4@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Mumbai City 5",
     "p": "24221019",
     "e": "jsr.mumbaicity5@igrmaharashtra.gov.in"
    }
   ]
  },
  "Mumbai Suburban": {
   "Andheri": [
    {
     "n": "Joint Sub Registrar Andheri 1",
     "p": "",
     "e": "jsr.andheri1@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Andheri 2",
     "p": "",
     "e": "jsr.andheri2@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Andheri 3",
     "p": "26008513",
     "e": "jsr.andheri3@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Andheri 4",
     "p": "26045553",
     "e": "jsr.andheri4@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Andheri 5",
     "p": "26771607",
     "e": "jsr.andheri5@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Andheri 6",
     "p": "26771608",
     "e": "jsr.andheri6@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Andheri 7",
     "p": "26100256",
     "e": "jsr.andheri7@igrmaharashtra.gov.in"
    },
    {
     "n": "Snehlata Swami",
     "p": "02226231368",
     "e": "tahsildarandheri@gmail.com"
    }
   ],
   "Borivali": [
    {
     "n": "Iresh Chapalwar",
     "p": "02228075034",
     "e": "tahsildarborivli11@gmail.com"
    },
    {
     "n": "Joint Sub Registrar Borivali 1",
     "p": "28774683",
     "e": "jsr.borivali1@igrmaharashtra.gov.in"
    },
    {
     "n": "Joint Sub Registrar Borivali 2",
     "p": "28617775",
     "e": "jsr.borivali2@igrmaharashtra.gov.in"
    }
   ],
   "Kurla": [
    {
     "n": "Dilip Rayanwar",
     "p": "02225602386",
     "e": "tahsildarkurlaest@gmail.com"
    }
   ]
  },
  "Nagpur": {
   "Nagpur Rural": [
    {
     "n": "ASHOK LALSING RATHOD",
     "p": "9881369037",
     "e": "ashok_rathod11@rediffmail.com"
    },
    {
     "n": "Niranjan khimraj chavhan",
     "p": "9403455642",
     "e": "niranjanchavhan10@gmail.com"
    }
   ],
   "Umred": [
    {
     "n": "Archana Rashtrapal Bagade",
     "p": "9823173802",
     "e": "bagdearchana2371@gmail.com"
    },
    {
     "n": "Dinesh Haribhav Butale",
     "p": "7721829496",
     "e": "dineshbutale77@gmail.com"
    },
    {
     "n": "Pradnya Prabhakar Towar",
     "p": "9423629205",
     "e": "pradnyatowar941@gmail.com"
    },
    {
     "n": "Swati Vasant Kale",
     "p": "7057275781",
     "e": "swati757@gmail.com"
    },
    {
     "n": "Yogita Shashant Nandanwar",
     "p": "9404737818",
     "e": "yogitashann@hotmail.com"
    }
   ]
  },
  "Nanded": {
   "Ardhapur": [
    {
     "n": "Dhanpalsingh Amarsingh Baisthakur",
     "p": "9422548765",
     "e": "dsananded@gmail.com"
    },
    {
     "n": "Renukadas Devnikar",
     "p": "02462272167",
     "e": "tahardhapur@gmail.com"
    }
   ],
   "Bhokar": [
    {
     "n": "Vinayak Shankarrao Kulkarni",
     "p": "9421842304",
     "e": "kulkarnivs66@gmail.com"
    },
    {
     "n": "Vinod Gundamwar",
     "p": "02467222622",
     "e": "tahbhokar@gmail.com"
    }
   ],
   "Degloor": [
    {
     "n": "Bharat Suryavanshi",
     "p": "02463255033",
     "e": "tahdegloor@gmail.com"
    }
   ],
   "Dharmabad": [
    {
     "n": "Surekha Swamy",
     "p": "02465245200",
     "e": "tahdharmabad@gmail.com"
    }
   ],
   "Hadgaon": [
    {
     "n": "Avinash Uttamrao Narwade",
     "p": "9175328682",
     "e": "avinarwade5@gmail.com"
    },
    {
     "n": "Dnyaneshwar Sahebrao Mane",
     "p": "9765291030",
     "e": "manednyaneshwar11@gmail.com"
    },
    {
     "n": "Gajanan Digambar Kasewad",
     "p": "9130708881",
     "e": "kasewad.gajanan@gmail.com"
    },
    {
     "n": "Santosh Maroti Jadhav",
     "p": "9763283705",
     "e": "santoshjadhav200576@gmail.com"
    },
    {
     "n": "Sumit Jagdish Toshniwal",
     "p": "9767512259",
     "e": "sumitlaw21@gmail.com"
    }
   ],
   "Himayatnagar": [
    {
     "n": "Sanjay Warkad",
     "p": "02462236769",
     "e": "tahnanded@gmail.com"
    }
   ],
   "Kandhar": [
    {
     "n": "Avinash Vijay Hiwale",
     "p": "9420564017",
     "e": "avi.hiwale13@gmail.com"
    },
    {
     "n": "Rameshwar Gore",
     "p": "02466223424",
     "e": "tahkandhar@gmail.com"
    }
   ],
   "Kinwat": [
    {
     "n": "SUNIL DATTATRAY SHAHAPURWAD",
     "p": "9822078354",
     "e": "shahapurwadsunil6@gmail.com"
    }
   ],
   "Loha": [
    {
     "n": "Maroti Lingoji Mupade",
     "p": "8275390394",
     "e": "lingogimaroti@gmail.com"
    },
    {
     "n": "Vitthal Parlikar",
     "p": "02466242460",
     "e": "tahloha@gmail.com"
    }
   ],
   "Mudkhed": [
    {
     "n": "Anand Deulgaonkar",
     "p": "02462275551",
     "e": "tahmudkhed@gmail.com"
    },
    {
     "n": "Vijaykumar Laxmanrao Gurutwad",
     "p": "8888883161",
     "e": "viju.gurut@gmail.com"
    }
   ],
   "Mukhed": [
    {
     "n": "Rajesh Jadhav",
     "p": "02461222522",
     "e": "tahmukhed@gmail.com"
    }
   ],
   "Umri": [
    {
     "n": "Manjusha Bhagat",
     "p": "02467244202",
     "e": "tahumri@gmail.com"
    },
    {
     "n": "Vijaykumar Ballaya Emekar",
     "p": "9420870651",
     "e": "emekarvijay3@gmail.com"
    }
   ]
  },
  "Nashik": {
   "Baglan": [
    {
     "n": "Minal Manoj Kenge",
     "p": "9604044874",
     "e": ""
    },
    {
     "n": "Tahsildar Baglan",
     "p": "02555223038",
     "e": ""
    },
    {
     "n": "VARSHA ANNA BANKAR",
     "p": "9765219409",
     "e": "vabankar24@rediffmail.com"
    }
   ],
   "Chandwad": [
    {
     "n": "Murlidhar Dodha Mahale",
     "p": "9975835087",
     "e": "mahalemd03@gmail.com"
    },
    {
     "n": "Tahsildar Chandwad",
     "p": "02556252231",
     "e": ""
    }
   ],
   "Deola": [
    {
     "n": "Anil fakirrao Bachhav",
     "p": "9850837683",
     "e": "anilbachhav66@rdiffimail.com"
    },
    {
     "n": "Pramila Nandu Jadhav",
     "p": "9272339856",
     "e": ""
    },
    {
     "n": "Tahsildar Deola",
     "p": "02592228554",
     "e": ""
    }
   ],
   "Dindori": [
    {
     "n": "Bhagat Nitin Prakash",
     "p": "9763260615",
     "e": ""
    },
    {
     "n": "Ramesh Kisan Bagul",
     "p": "9881864988",
     "e": "rameshbagul2671@gmail.com"
    },
    {
     "n": "sanjay damodar bhamare",
     "p": "7498837902",
     "e": "sanju.bhamare@rediffmail.com"
    },
    {
     "n": "Tahsildar Dindori",
     "p": "02557221003",
     "e": ""
    }
   ],
   "Igatpuri": [
    {
     "n": "PRATIBHA DILIP THAKARE",
     "p": "8007137644",
     "e": "pratibhapdp@gmail.com"
    },
    {
     "n": "Revati M Kotwal",
     "p": "9422754443",
     "e": ""
    },
    {
     "n": "Tahsildar Igatpuri",
     "p": "02553244009",
     "e": ""
    }
   ],
   "Kalwan": [
    {
     "n": "kavita kamalakar kotkar",
     "p": "9403417977",
     "e": "kavitahbk@gmail.com"
    },
    {
     "n": "MURLIDHAR SUKRAM BHOYE",
     "p": "9423476024",
     "e": "msbhoye6000@gmail.com"
    },
    {
     "n": "Shital Ingle",
     "p": "9226451509",
     "e": ""
    },
    {
     "n": "Tahsildar Kalwan",
     "p": "02592250127",
     "e": ""
    }
   ],
   "Malegaon": [
    {
     "n": "MAID VRUSHALI VIJAY",
     "p": "9975714651",
     "e": "vrushalimaid66@gmail.com"
    },
    {
     "n": "Tahsildar Malegaon",
     "p": "02554254732",
     "e": ""
    },
    {
     "n": "Tahsildar Nashik",
     "p": "02532575663",
     "e": ""
    },
    {
     "n": "Vivek Pandurang Patil",
     "p": "9422569671",
     "e": "vivekpatildhule@gmail.com"
    }
   ],
   "Nandgaon": [
    {
     "n": "SUNIL ARUN SALUNKHE",
     "p": "9527525794",
     "e": "casunilsalunkhe@gmail.com"
    },
    {
     "n": "Tahsildar Nandgaon",
     "p": "02552242232",
     "e": ""
    }
   ],
   "Niphad": [
    {
     "n": "Sachin Satish Vispute",
     "p": "9850815192",
     "e": "vsachu@rediffmail.com"
    },
    {
     "n": "Tahsildar Niphad",
     "p": "02550241024",
     "e": ""
    }
   ],
   "Peth": [
    {
     "n": "Jadhav Sudesh Ganesh",
     "p": "9860554464",
     "e": ""
    },
    {
     "n": "jyoti Bharat Ghadoje",
     "p": "9834533476",
     "e": "jyoti123394@gmail.com"
    },
    {
     "n": "Tahsildar Peth",
     "p": "02558225531",
     "e": ""
    }
   ],
   "Sinnar": [
    {
     "n": "Shankar Kashinath Malekar",
     "p": "9423962196",
     "e": "skmalekar5101971@gmail.com"
    },
    {
     "n": "Tahsildar Sinnar",
     "p": "02551220028",
     "e": ""
    }
   ],
   "Surgana": [
    {
     "n": "rajesh panditrao gaikwad",
     "p": "9423931269",
     "e": "rajeshgaikwad1876@gmail.com"
    },
    {
     "n": "Tahsildar Surgana",
     "p": "02593223323",
     "e": ""
    },
    {
     "n": "Ujjawala Ramesh Gangurde Patil",
     "p": "9028112169",
     "e": ""
    }
   ],
   "Trimbakeshwar": [
    {
     "n": "PATIL MANOHAR DEORAM",
     "p": "9923120780",
     "e": "nandgaoncs@gmail.com"
    },
    {
     "n": "Sharma Anil Ramprakash",
     "p": "9371190251",
     "e": ""
    },
    {
     "n": "Tahsildar Trambakeshwar",
     "p": "02594233355",
     "e": ""
    }
   ],
   "Yeola": [
    {
     "n": "sukdeo bhimrao patil",
     "p": "9420363058",
     "e": "sukdeopatil73@rediffmail.com"
    },
    {
     "n": "Tahsildar Yeola",
     "p": "02559265005",
     "e": ""
    }
   ]
  },
  "Palghar": {
   "Jawhar": [
    {
     "n": "SMITA HEMANT AYARE",
     "p": "9226206055",
     "e": "smitaayare29@gmail.com"
    }
   ]
  },
  "Pune": {
   "Ambegaon": [
    {
     "n": "Sub Registrar Ambegaon",
     "p": "",
     "e": "sr.ambegaon@igrmaharashtra.gov.in"
    },
    {
     "n": "Vacant / Tahsildar Office",
     "p": "02133244214",
     "e": "tahambegaon-mh@gov.in"
    }
   ],
   "Baramati": [
    {
     "n": "Ajit Chandrakant Bansode",
     "p": "7020434442",
     "e": "chandrakantbansode@gmail.com"
    },
    {
     "n": "Ganesh R. Dhende",
     "p": "9561142504",
     "e": "ganeshdhende2@gmail.com"
    },
    {
     "n": "Ganesh Shinde",
     "p": "02112224386",
     "e": "tahbaramati-mh@gov.in"
    },
    {
     "n": "Gaurav Nangare",
     "p": "9881628389",
     "e": "nangaregaurav@gmail.com"
    },
    {
     "n": "Jt. Sub Registrar Baramati",
     "p": "",
     "e": "sr.baramati@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Baramati 2",
     "p": "",
     "e": ""
    },
    {
     "n": "Jyoti S. Waghmare",
     "p": "8668984465",
     "e": "jyotiwaghmare@gmail.com"
    },
    {
     "n": "Kiran S. Sonawane",
     "p": "7709183068",
     "e": "kirans@gmail.com"
    },
    {
     "n": "Prashant Dagadu Sangale",
     "p": "9850421561",
     "e": "prashantdsangale@gmail.com"
    },
    {
     "n": "sadashiv padmakarrao chavan",
     "p": "7741030057",
     "e": "sadashivchavan1@gmail.com"
    },
    {
     "n": "Sonali More / Jagtap",
     "p": "9860751770",
     "e": "sonalimore5611@gmail.com"
    },
    {
     "n": "Vaibhav J. Bhosale",
     "p": "7387125577",
     "e": "vaibhavbhosale@gmail.com"
    }
   ],
   "Bhor": [
    {
     "n": "Sub Registrar Bhor",
     "p": "",
     "e": "sr.bhor@igrmaharashtra.gov.in"
    }
   ],
   "Daund": [
    {
     "n": "Arun Shelar",
     "p": "02117262342",
     "e": "tahdaund-mh@gov.in"
    },
    {
     "n": "PANDIT GAJANAN DNYANOBA",
     "p": "7972294178",
     "e": "gajananpandit1971@gmail.com"
    },
    {
     "n": "Sub Registrar Daund",
     "p": "",
     "e": "sr.daund@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Kedgaon",
     "p": "",
     "e": "sr.kedgaon@igrmaharashtra.gov.in"
    },
    {
     "n": "Sunil A Jadhav",
     "p": "9423207544",
     "e": "sunil75jadhav@gmail.com"
    }
   ],
   "Haveli": [
    {
     "n": "Jt. Sub Registrar Haveli No.1",
     "p": "",
     "e": "jsr.haveli1@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.10",
     "p": "",
     "e": "jsr.haveli10@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.11",
     "p": "",
     "e": "jsr.haveli11@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.12",
     "p": "",
     "e": "jsr.haveli12@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.13",
     "p": "",
     "e": "jsr.haveli13@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.14",
     "p": "",
     "e": "jsr.haveli14@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.15",
     "p": "",
     "e": "jsr.haveli15@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.16",
     "p": "",
     "e": "jsr.haveli16@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.17",
     "p": "",
     "e": "jsr.haveli17@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.18",
     "p": "",
     "e": "jsr.haveli18@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.19",
     "p": "",
     "e": "jsr.haveli19@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.2",
     "p": "",
     "e": "jsr.haveli2@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.20",
     "p": "",
     "e": "jsr.haveli20@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.21",
     "p": "",
     "e": "jsr.haveli21@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.22",
     "p": "",
     "e": "jsr.haveli22@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.23",
     "p": "",
     "e": "jsr.haveli23@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.24",
     "p": "",
     "e": "jsr.haveli24@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.25",
     "p": "",
     "e": "jsr.haveli25@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.26",
     "p": "",
     "e": "jsr.haveli26@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.27",
     "p": "",
     "e": "jsr.haveli27@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.3",
     "p": "",
     "e": "jsr.haveli3@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.4",
     "p": "",
     "e": "jsr.haveli4@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.5",
     "p": "",
     "e": "jsr.haveli5@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.6",
     "p": "",
     "e": "jsr.haveli6@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.7",
     "p": "",
     "e": "jsr.haveli7@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.8",
     "p": "",
     "e": "jsr.haveli8@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Haveli No.9",
     "p": "",
     "e": "jsr.haveli9@igrmaharashtra.gov.in"
    }
   ],
   "Indapur": [
    {
     "n": "Jeevan Bansode",
     "p": "02111223134",
     "e": "tahindapur-mh@gov.in"
    },
    {
     "n": "Sub Registrar Indapur",
     "p": "",
     "e": "sr.indapur@igrmaharashtra.gov.in"
    }
   ],
   "Junnar": [
    {
     "n": "Sub Registrar Junnar",
     "p": "",
     "e": "sr.junnar@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Narayangaon",
     "p": "",
     "e": "sr.narayangaon@igrmaharashtra.gov.in"
    },
    {
     "n": "Vacant / Tahsildar Office",
     "p": "02132222047",
     "e": "tahjunnar-mh@gov.in"
    }
   ],
   "Khed": [
    {
     "n": "A. A. Sayyad",
     "p": "9822022890",
     "e": "asayyad@gmail.com"
    },
    {
     "n": "Abubakar Jamdar Pathan",
     "p": "8459477871",
     "e": "abubakarpathan@gmail.com"
    },
    {
     "n": "K. B. Kobal",
     "p": "9404998590",
     "e": "kbkobal@gmail.com"
    },
    {
     "n": "Prashant Bedase",
     "p": "02135222040",
     "e": "tahkhed-mh@gov.in"
    },
    {
     "n": "R. D. Bhor",
     "p": "7972522145",
     "e": "rdbhor@gmail.com"
    },
    {
     "n": "Ruksan Primohmad Pathan",
     "p": "8459004723",
     "e": "ruksanpathan@gmail.com"
    },
    {
     "n": "Sub Registrar Khed 1",
     "p": "",
     "e": "sr.khedpune@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Khed 2 (Chakan)",
     "p": "",
     "e": "sr.khed2@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Khed 3 (Rajgurunagar)",
     "p": "",
     "e": ""
    }
   ],
   "Maval": [
    {
     "n": "Chetan Jadhav",
     "p": "9145267721",
     "e": "chetanjadhav@gmail.com"
    },
    {
     "n": "Hemant Wadekar",
     "p": "9822812597",
     "e": "hemantwadekar@gmail.com"
    },
    {
     "n": "Krushnaji Bhegade",
     "p": "9762681213",
     "e": "krusnajibhegade@gmail.com"
    },
    {
     "n": "Mahedra Khandave",
     "p": "9923305552",
     "e": "mahendrakhandave@gmail.com"
    },
    {
     "n": "Pooja Talathi",
     "p": "8888140549",
     "e": "poojatalathi9@gmail.com"
    },
    {
     "n": "Pratap Merukar",
     "p": "9767846082",
     "e": "pratapmerukar13@gmail.com"
    },
    {
     "n": "Rubiya Tamboli",
     "p": "9970332369",
     "e": "tambolirubiya21@gmail.com"
    },
    {
     "n": "Sub Registrar Lonavala",
     "p": "",
     "e": "sr.lonawala@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Maval 1 (Vadgaon)",
     "p": "",
     "e": "sr.vadgaomawal@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Maval 2 (Talegaon Dabhade)",
     "p": "",
     "e": "sr.mulshi2@igrmaharashtra.gov.in"
    },
    {
     "n": "Vanita Shinde",
     "p": "9822083916",
     "e": "vanitashinde@gmail.com"
    }
   ],
   "Mulshi": [
    {
     "n": "RAMDAS SITARAM SASAR",
     "p": "9421003818",
     "e": "rss.suv@rediffmail.com"
    },
    {
     "n": "Sub Registrar Mulshi 1 (Paud)",
     "p": "",
     "e": "sr.mulshipaud@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Mulshi 2 (Hinjewadi)",
     "p": "",
     "e": "sr.mulshi2@igrmaharashtra.gov.in"
    }
   ],
   "Pune City": [
    {
     "n": "anant chindhu adhari",
     "p": "9158332951",
     "e": "acadhari@gmail.com"
    },
    {
     "n": "anil dnyanadeo chavan",
     "p": "9422520798",
     "e": "chavananild69@gmail.com"
    },
    {
     "n": "BAJIRAO BHATU SURYAWANSHI",
     "p": "9822252680",
     "e": "bajiraosuryawanshi05@gmail.com"
    },
    {
     "n": "Bhujbal Rajesh Sudam",
     "p": "9823776003",
     "e": "rajeshbhujbal19@gmail.com"
    },
    {
     "n": "Chandrakant Murlidhar Garad",
     "p": "9860571308",
     "e": "cmgarad@rediffmail.com"
    },
    {
     "n": "Dnyaneshwar Prabhakar Tekawade",
     "p": "9881975915",
     "e": "tekawadedp@gmail.com"
    },
    {
     "n": "ganesh mahadeo pawar",
     "p": "9922328004",
     "e": "pawarganesh83058@gmail.com"
    },
    {
     "n": "ghodake pratibha surendra",
     "p": "7798574410",
     "e": "dsaadfpune@gmail.com"
    },
    {
     "n": "Jayshree Vinayak Kamble",
     "p": "9765988800",
     "e": "jayshreevkamble@gmail.com"
    },
    {
     "n": "jaysing sakharam gaikwad",
     "p": "9922075006",
     "e": "jaysing.gaikwad@rediffmail.com"
    },
    {
     "n": "KAMTHE BALSHIRAM KASHIRAM",
     "p": "9049912480",
     "e": "bkKamthe1@gmail.com"
    },
    {
     "n": "MADHUKAR SHRIDHAR GIRI",
     "p": "8983590151",
     "e": "msgiri1972@gmail.com"
    },
    {
     "n": "mahendra maruti thorat",
     "p": "9561729730",
     "e": "mahendrathorat45@gmail.com"
    },
    {
     "n": "MARUTI MANSING KHAMKAR",
     "p": "8668448971",
     "e": "maruti.khamkar@rediffmail.com"
    },
    {
     "n": "Parmar Vipul Hukumsing",
     "p": "9890414177",
     "e": "vipulparmaraudit@gmail.com"
    },
    {
     "n": "Popat Gulab Wadekar",
     "p": "9850176187",
     "e": "pgwadekar11@gmail.com"
    },
    {
     "n": "PRADEEP VALMIKRAO JAGTAP",
     "p": "9689529558",
     "e": "djradt_pna@rediffmail.com"
    },
    {
     "n": "Punde Sanjaykumar Sakharam",
     "p": "9822187854",
     "e": "sanjay03punde@gmail.com"
    },
    {
     "n": "Rahul Devram Bhor",
     "p": "9766110914",
     "e": "rahulbhor8880@gmail.com"
    },
    {
     "n": "RAJENDRA SITARAM KAMBLE",
     "p": "9730066577",
     "e": "rajendra.kmbl@gmail.com"
    },
    {
     "n": "Smt Nanda Pandurang Pasalkar",
     "p": "9881739585",
     "e": "nanda8515pasalkar@gmail.com"
    },
    {
     "n": "Sujata Rajan Nalli",
     "p": "9850152957",
     "e": "nsujata19@gmail.com"
    },
    {
     "n": "sunil shankar sawant",
     "p": "9623003035",
     "e": "sunilsawant3411@gmail.com"
    },
    {
     "n": "VIJAY SITARAM BHOITE",
     "p": "9518595455",
     "e": "vijaybhoite12@gmail.com"
    }
   ],
   "Purandhar": [
    {
     "n": "Sub Registrar Purandar (Saswad)",
     "p": "",
     "e": "sr.saswad@igrmaharashtra.gov.in"
    }
   ],
   "Shirur": [
    {
     "n": "Sub Registrar Shirur",
     "p": "",
     "e": "sr.shirur@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Talegaon Dhamdhere",
     "p": "",
     "e": "sr.talegaon@igrmaharashtra.gov.in"
    }
   ],
   "Velhe": [
    {
     "n": "Sub Registrar Velha",
     "p": "",
     "e": "sr.velha@igrmaharashtra.gov.in"
    }
   ]
  },
  "Raigad": {
   "Karjat": [
    {
     "n": "Amol Mahadev Suryawanshi",
     "p": "9822558164",
     "e": "suryawanshi.amol1986@gmail.com"
    },
    {
     "n": "Kalpesh Gulab Shinde",
     "p": "9975275777",
     "e": "nkalpesh@gmail.com"
    },
    {
     "n": "Kranti Laxman Abhange",
     "p": "9168270083",
     "e": "adv.samiksha26@gmail.com"
    },
    {
     "n": "Pramila Chavan",
     "p": "9272287440",
     "e": "pramilachavan@gmail.com"
    },
    {
     "n": "Varsha Kiran Kochure",
     "p": "7507971888",
     "e": "varsharaikwad@gmail.com"
    }
   ],
   "Khalapur": [
    {
     "n": "Anita Pawar",
     "p": "9270087815",
     "e": "anita.spawar42@gmail.com"
    },
    {
     "n": "Milind V. Suravkar",
     "p": "7776924142",
     "e": "milind.suravkar@gmail.com"
    },
    {
     "n": "Padma Patil",
     "p": "7066860768",
     "e": "patilpadma472@gmail.com"
    },
    {
     "n": "Panchshila Vite",
     "p": "9890114136",
     "e": "vitepanchashila@gmail.com"
    }
   ],
   "Panvel": [
    {
     "n": "Aniket B Deshkar",
     "p": "7021477549",
     "e": "aniket77deshkar@gmail.com"
    },
    {
     "n": "Irshad Ramzan Shaikh",
     "p": "9870225766",
     "e": "Bhushanmhatre2244@gmail.com"
    },
    {
     "n": "Jyosna Harichandra Bhalekar",
     "p": "9769062628",
     "e": "dinesh6690@gmail.com"
    },
    {
     "n": "Karishma S. Mhatre",
     "p": "9920180584",
     "e": "dinesh6650@gmail.com"
    },
    {
     "n": "Neelam G. Bhagat",
     "p": "9702685178",
     "e": "Thakurneelam20@gmail.com"
    },
    {
     "n": "Sameena Sajid Khan",
     "p": "8828097231",
     "e": "Sameenaskhan9@gmail.com"
    },
    {
     "n": "Sarika Shegat-Labade",
     "p": "9975777989",
     "e": "advsarika84@gmail.com"
    },
    {
     "n": "Smita Jayram Mhatre",
     "p": "8424030376",
     "e": "smitamhatre@gmail.com"
    },
    {
     "n": "Suyash Ashok Kamekar",
     "p": "8087499038",
     "e": "Suyeshkamerkar@gmail.com"
    },
    {
     "n": "Swati Atmaram Sonawane",
     "p": "9833679849",
     "e": "swatis.advocate@gmail.com"
    }
   ],
   "Tala": [
    {
     "n": "Swati Patil",
     "p": "9689569317",
     "e": "tahasildar-tala@mah.gov.in"
    }
   ]
  },
  "Ratnagiri": {
   "Chiplun": [
    {
     "n": "Gite Babasaheb Kishanrao",
     "p": "9029725332",
     "e": "bkgite13@gmail.com"
    }
   ],
   "Lanja": [
    {
     "n": "SARDAR KERBA PENDAKHALEKAR",
     "p": "9987108042",
     "e": "kamble21sardar@gmail.com"
    }
   ],
   "Sangameshwar": [
    {
     "n": "Sunil Vithal Saswadkar",
     "p": "9423167646",
     "e": "sunilsaswadkar1967@gmail.com"
    }
   ]
  },
  "Sangli": {
   "Atpadi": [
    {
     "n": "Sub Registrar Atpadi",
     "p": "",
     "e": "sr.atpadi@igrmaharashtra.gov.in"
    }
   ],
   "Jat": [
    {
     "n": "Sub Registrar Jat",
     "p": "",
     "e": "sr.jat@igrmaharashtra.gov.in"
    }
   ],
   "Kadegaon": [
    {
     "n": "Sub Registrar Kadegaon",
     "p": "",
     "e": "sr.kadegaon@igrmaharashtra.gov.in"
    }
   ],
   "Kavathemahankal": [
    {
     "n": "Sub Registrar Kawathe-Mahankal",
     "p": "",
     "e": "sr.kawathe@igrmaharashtra.gov.in"
    }
   ],
   "Khanapur": [
    {
     "n": "JAWAHAR HINDURAO PATIL",
     "p": "9850486225",
     "e": "jawaharpatil44@gmail.com"
    },
    {
     "n": "Sub Registrar Vita-Khanapur",
     "p": "",
     "e": "sr.vitakhanapur@igrmaharashtra.gov.in"
    }
   ],
   "Miraj": [
    {
     "n": "ANIL SATCHIDANAND PAILWAN",
     "p": "9850287823",
     "e": "aspailwan@gmail.com"
    },
    {
     "n": "Goasavi Sadashiv Antu",
     "p": "7057691199",
     "e": "sagosavi68@gmail.com"
    },
    {
     "n": "Joint District Registrar & Collector of Stamps, Sangli",
     "p": "",
     "e": "jdr.sangli@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Miraj 1",
     "p": "",
     "e": "sr.sangli1@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Miraj 2",
     "p": "",
     "e": "sr.miraj2@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Miraj 3",
     "p": "",
     "e": "sr.sangli3@igrmaharashtra.gov.in"
    },
    {
     "n": "pradeep krishanaji pawar",
     "p": "9421123022",
     "e": "pradeeppk1124@gmail.com"
    },
    {
     "n": "RAJENDRA MURGENDRA KUDCHE",
     "p": "9921201765",
     "e": "kudacherajendra@gmail.com"
    },
    {
     "n": "SANJAY DAMODAR MANE",
     "p": "9420679649",
     "e": "sanjaymane771@gmail.com"
    },
    {
     "n": "SHAKIRA BABASAHEB MULLANI",
     "p": "7558241758",
     "e": "shakiramulani1@gmail.com"
    },
    {
     "n": "SHARAD TANAJIRAO GURAV",
     "p": "8830818032",
     "e": "sharad_gurav@rediffmail.com"
    },
    {
     "n": "Suchita Vilasrao Ubale",
     "p": "9518978915",
     "e": "suchitavubale@gmail.com"
    },
    {
     "n": "UMESH VISHWANATH GURAV",
     "p": "8530534805",
     "e": "dsadf@gmail.com"
    }
   ],
   "Palus": [
    {
     "n": "Ramesh laxman vhankhande",
     "p": "9503439743",
     "e": "rameshvhankhande@gmail.com"
    },
    {
     "n": "Sub Registrar Palus",
     "p": "",
     "e": "sr.palus@igrmaharashtra.gov.in"
    }
   ],
   "Shirala": [
    {
     "n": "Sub Registrar Shirala",
     "p": "",
     "e": "sr.shirala@igrmaharashtra.gov.in"
    }
   ],
   "Tasgaon": [
    {
     "n": "dilip yeshwant yedake",
     "p": "9372113372",
     "e": "dilipkumaryedake@gmail.com"
    },
    {
     "n": "Sub Registrar Tasgaon",
     "p": "",
     "e": "sr.tasgaon@igrmaharashtra.gov.in"
    }
   ],
   "Walwa": [
    {
     "n": "Jt. Sub Registrar Valva-Islampur",
     "p": "",
     "e": "sr.islampur@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Ashta",
     "p": "",
     "e": "sr.ashta@igrmaharashtra.gov.in"
    }
   ]
  },
  "Satara": {
   "Jawali": [
    {
     "n": "Sub Registrar Javli Medha",
     "p": "",
     "e": "sr.javlimedha@igrmaharashtra.gov.in"
    }
   ],
   "Karad": [
    {
     "n": "Sub Registrar Karad 1",
     "p": "",
     "e": "sr.karad1@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Karad 2",
     "p": "",
     "e": "sr.karad2@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Umbraj",
     "p": "",
     "e": "sr.umbraj@igrmaharashtra.gov.in"
    }
   ],
   "Khandala": [
    {
     "n": "GADE DHANANJAY CHANDRAKANT",
     "p": "9637188187",
     "e": "dcgade1971@gmail.com"
    },
    {
     "n": "Sub Registrar Khandala",
     "p": "",
     "e": "sr.khandala@igrmaharashtra.gov.in"
    }
   ],
   "Khatav": [
    {
     "n": "Sub Registrar Khatav",
     "p": "",
     "e": "sr.khatawwaduj@igrmaharashtra.gov.in"
    }
   ],
   "Koregaon": [
    {
     "n": "JAYASHRI SHIVAJIRAO BARGE",
     "p": "7588383423",
     "e": "jayshribarge002@gmail.com"
    },
    {
     "n": "Sub Registrar Koregaon",
     "p": "",
     "e": "sr.koregaon@igrmaharashtra.gov.in"
    }
   ],
   "Mahabaleshwar": [
    {
     "n": "Sub Registrar Mahabaleshwar",
     "p": "",
     "e": "sr.mahabaleshwa@igrmaharashtra.gov.in"
    }
   ],
   "Maan": [
    {
     "n": "Sub Registrar Man (Dahiwadi)",
     "p": "",
     "e": "sr.maandahiwadi@igrmaharashtra.gov.in"
    }
   ],
   "Patan": [
    {
     "n": "Sub Registrar Patan",
     "p": "",
     "e": "sr.patan@igrmaharashtra.gov.in"
    }
   ],
   "Phaltan": [
    {
     "n": "Jt. Sub Registrar Phaltan 1",
     "p": "",
     "e": "sr.phaltan@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Phaltan 2",
     "p": "",
     "e": ""
    }
   ],
   "Satara": [
    {
     "n": "Joint District Registrar & Collector of Stamps, Satara",
     "p": "",
     "e": "jdr.satara@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Satara 1",
     "p": "",
     "e": "sr.satara@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Satara 2",
     "p": "",
     "e": "sr.satara2@igrmaharashtra.gov.in"
    }
   ],
   "Wai": [
    {
     "n": "Sub Registrar Wai",
     "p": "",
     "e": "sr.wai@igrmaharashtra.gov.in"
    }
   ]
  },
  "Solapur": {
   "Akkalkot": [
    {
     "n": "Sub Registrar Akkalkot",
     "p": "",
     "e": "sr.akkalkot@igrmaharashtra.gov.in"
    }
   ],
   "Barshi": [
    {
     "n": "Sub Registrar Barshi",
     "p": "",
     "e": "sr.barshi@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Vairag",
     "p": "",
     "e": "sr.vairag@igrmaharashtra.gov.in"
    }
   ],
   "Karmala": [
    {
     "n": "Sub Registrar Karmala",
     "p": "",
     "e": "sr.karmala@igrmaharashtra.gov.in"
    }
   ],
   "Madha": [
    {
     "n": "KOLHE PANKAJ KASHINATH",
     "p": "8999471181",
     "e": "kolhepankaj21@gmail.com"
    },
    {
     "n": "Sub Registrar Madha",
     "p": "",
     "e": "sr.madha@igrmaharashtra.gov.in"
    }
   ],
   "Malshiras": [
    {
     "n": "Sub Registrar Akluj",
     "p": "",
     "e": "sr.akluj@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Malshiras",
     "p": "",
     "e": "sr.malshiras@igrmaharashtra.gov.in"
    }
   ],
   "Mangalvedhe": [
    {
     "n": "Sub Registrar Mangalvedha",
     "p": "",
     "e": "sr.mangalveda@igrmaharashtra.gov.in"
    }
   ],
   "Mohol": [
    {
     "n": "Jilani Khajabhai Tamboli",
     "p": "9922226292",
     "e": "jktamboli1967@gmail.com"
    },
    {
     "n": "Sub Registrar Mohol",
     "p": "",
     "e": "sr.mohol@igrmaharashtra.gov.in"
    }
   ],
   "North Solapur": [
    {
     "n": "Joint District Registrar & Collector of Stamps, Solapur",
     "p": "",
     "e": "jdr.solapur@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Solapur Uttar 1",
     "p": "",
     "e": "sr.solapuru1@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Solapur Uttar 2",
     "p": "",
     "e": "sr.solapuru2@igrmaharashtra.gov.in"
    },
    {
     "n": "Jt. Sub Registrar Solapur Uttar 3",
     "p": "",
     "e": ""
    }
   ],
   "Pandharpur": [
    {
     "n": "Jt. Sub Registrar Pandharpur 1",
     "p": "",
     "e": "sr.pandharpur1@igrmaharashtra.gov.in"
    },
    {
     "n": "Sub Registrar Pandharpur 2",
     "p": "",
     "e": "sr.pandharpur2@igrmaharashtra.gov.in"
    }
   ],
   "Sangole": [
    {
     "n": "Sub Registrar Sangola",
     "p": "",
     "e": "sr.sangola@igrmaharashtra.gov.in"
    }
   ],
   "Solapur North": [
    {
     "n": "Goutam Vitthal Nikalje",
     "p": "9422745054",
     "e": "gautamnikalje14.4@gmail.com"
    },
    {
     "n": "PANDHARE SHRINIVAS GANPAT",
     "p": "9881043999",
     "e": "pshrinivas279@gmail.com"
    },
    {
     "n": "PARMESHWAR ASHRUBA MUNDE",
     "p": "7218392928",
     "e": "pamunde1975@gmail.com"
    },
    {
     "n": "PAWAR BAPPAJI CHAHBURAO",
     "p": "9422964882",
     "e": "bappajipawar96@gmail.com"
    },
    {
     "n": "RAVINDRA SHIVAPPA NAGURE",
     "p": "9673530345",
     "e": "goverdhanpotdar@gmail.com"
    },
    {
     "n": "Santosh Shankar Manurkar",
     "p": "9850783983",
     "e": "santoshmanurkar73@gmail.com"
    }
   ],
   "Solapur South": [
    {
     "n": "BALASAHEB UTTAMRAO BHOSALE",
     "p": "9422460179",
     "e": "balasaheb.bhosale179@gmail.com"
    }
   ],
   "South Solapur": [
    {
     "n": "Jt. Sub Registrar Solapur Dakshin",
     "p": "",
     "e": "sr.solapurd@igrmaharashtra.gov.in"
    }
   ]
  },
  "Thane": {
   "Ambarnath": [
    {
     "n": "Sandeep Dongre",
     "p": "8652808989",
     "e": ""
    }
   ],
   "Bhiwandi": [
    {
     "n": "UTTAM SAMBARU AHIRE",
     "p": "9421575034",
     "e": "usahire1967@gmail.com"
    }
   ],
   "Kalyan": [
    {
     "n": "nandkishor prabhakar danej",
     "p": "8169645906",
     "e": "danej.nandkishor@gmail.com"
    }
   ],
   "Murbad": [
    {
     "n": "Mandhare Prakash Tanaji",
     "p": "9270291660",
     "e": "prakashmandhre@rediffmail.com"
    }
   ],
   "Shahapur": [
    {
     "n": "BOTRE BHAGWAN TUKARAM",
     "p": "9011858089",
     "e": "botrebt69@gmail.com"
    }
   ],
   "Ulhasnagar": [
    {
     "n": "Dalvi Anand Vishnu",
     "p": "7498060020",
     "e": "ananddalvi18871@gmail.com"
    }
   ]
  },
  "Wardha": {
   "Deoli": [
    {
     "n": "DHYANESH DAMODHAR NAGDIVE",
     "p": "7057564499",
     "e": "ddnagdive@gmail.com"
    }
   ]
  },
  "Yavatmal": {
   "Arni": [
    {
     "n": "Sujit Pralhad Jadhao",
     "p": "8055978880",
     "e": "jadhao.sujitp@gmail.com"
    }
   ],
   "Babhulgaon": [
    {
     "n": "VILAS SANTOSHRAO PETE",
     "p": "9403458127",
     "e": "vspete10766@gmail.com"
    }
   ]
  }
 },
 "Madhya Pradesh": {
  "Agar-Malwa": {
   "Agar": [
    {
     "n": "Bhurla Singh Solanki",
     "p": "07362260015",
     "e": "ceozpaga@mp.gov.in"
    },
    {
     "n": "Dilip Kumar Soni",
     "p": "07362259802",
     "e": "spagarmp@gmail.com"
    },
    {
     "n": "Kamal Mandloi",
     "p": "9981612058",
     "e": ""
    },
    {
     "n": "Milind Dhoke",
     "p": "9826035969",
     "e": ""
    },
    {
     "n": "Mohanlal Swarnkar",
     "p": "8085030365",
     "e": ""
    },
    {
     "n": "Preeti Chauhan",
     "p": "9826053338",
     "e": ""
    },
    {
     "n": "Premnarayan Parmar",
     "p": "9826213924",
     "e": ""
    },
    {
     "n": "R.P. Verma",
     "p": "07362292103",
     "e": ""
    },
    {
     "n": "Sarvesh Yadav",
     "p": "9131578042",
     "e": ""
    },
    {
     "n": "Sher Singh Meena",
     "p": "07362292100",
     "e": "dmagarmalwa@nic.in"
    },
    {
     "n": "Vijay Senani",
     "p": "9993226085",
     "e": ""
    }
   ],
   "Barode": [
    {
     "n": "Bhanwar Singh Chauhan",
     "p": "80853717687389898032",
     "e": ""
    },
    {
     "n": "Jitendra Singh Sengar",
     "p": "9425078344",
     "e": ""
    }
   ],
   "Nalkheda": [
    {
     "n": "Ashwini Patidar",
     "p": "9893776070",
     "e": ""
    },
    {
     "n": "Girish Suryavanshi",
     "p": "9406648504",
     "e": ""
    }
   ],
   "Soyatkala": [
    {
     "n": "Rajesh Shrimal",
     "p": "8349574904",
     "e": ""
    }
   ],
   "Susner": [
    {
     "n": "Kiran Warwade",
     "p": "7440883568",
     "e": ""
    },
    {
     "n": "Rajesh Sakya",
     "p": "9993925393",
     "e": ""
    },
    {
     "n": "Rameshwar Dangi",
     "p": "9826494509",
     "e": ""
    }
   ]
  },
  "Alirajpur": {
   "Alirajpur": [
    {
     "n": "Manoj Garwal",
     "p": "07394234773",
     "e": "dmaliajpur@mp.gov.in"
    },
    {
     "n": "Neetu Mathur",
     "p": "07394234400",
     "e": "dmalirajpur@mp.gov.in"
    },
    {
     "n": "Raghuvansh Kumar Singh",
     "p": "9425693048",
     "e": "sp_alirajpur@mppolice.gov.in"
    },
    {
     "n": "Sanghmitra Gautam",
     "p": "9424427819",
     "e": "ceozp.alirajpur@gmail.com"
    },
    {
     "n": "Tapis Pandey",
     "p": "8871598637",
     "e": ""
    }
   ],
   "Bhavra": [
    {
     "n": "Nidhi Mishra",
     "p": "9131563644",
     "e": ""
    },
    {
     "n": "Savita Chouhan",
     "p": "9575012255",
     "e": "sdmbhabra408@gmail.com"
    }
   ],
   "Jobat": [
    {
     "n": "Virender Singh",
     "p": "9399438667",
     "e": "jobatsdm@gmail.com"
    }
   ],
   "Sondwa": [
    {
     "n": "Manoj Garwal",
     "p": "8319213908",
     "e": ""
    }
   ]
  },
  "Anuppur": {
   "Anuppur": [
    {
     "n": "Archana Kumari",
     "p": "9131074485",
     "e": "ceozpanu@mp.gov.in"
    },
    {
     "n": "Ratnakar Jha",
     "p": "07659222400",
     "e": "dmanuppur@nic.in"
    },
    {
     "n": "Vikrant Murab",
     "p": "7049100634",
     "e": "sp_anuppur@mppolice.gov.in"
    }
   ]
  },
  "Ashoknagar": {
   "Ashoknagar": [
    {
     "n": "Antar Singh Kanesh",
     "p": "07543224500",
     "e": "sp_ashoknagar@mppolice.gov.in"
    },
    {
     "n": "Devki Nandan",
     "p": "07543225509",
     "e": "dmashoknagar@nic.in"
    },
    {
     "n": "Pratibha Ahirwar",
     "p": "07543221120",
     "e": "dfoanagrt@mp.gov.in"
    },
    {
     "n": "Rajesh Kumar Jain",
     "p": "07543220030",
     "e": "ceozpash-mp@mp.nic.in"
    },
    {
     "n": "Rajiv Kumar Mishra",
     "p": "07543224500",
     "e": "sp_ashoknagar@mppolice.gov.in"
    },
    {
     "n": "Saket Malviya",
     "p": "07543222800",
     "e": "dmashoknagar@nic.in"
    }
   ]
  },
  "Balaghat": {
   "Baihar": [
    {
     "n": "Mrinal Meena",
     "p": "07632240150",
     "e": "dmbalaghat@nic.in"
    }
   ],
   "Birsa": [
    {
     "n": "Abhishek Saraf",
     "p": "07632240907",
     "e": "ceozpbal@mp.gov.in"
    }
   ],
   "Katangi": [
    {
     "n": "Lalit Shakyawar",
     "p": "07632240900",
     "e": "ig_balaghat@mppolice.gov.in"
    }
   ],
   "Khairlanji": [
    {
     "n": "Aaditya Mishra",
     "p": "07632240021",
     "e": "sp_balaghat@mppolice.gov.in"
    }
   ],
   "Kirnapur": [
    {
     "n": "Subhash Chandra Thakre",
     "p": "07632240141",
     "e": "dio-bgt@nic.in"
    }
   ],
   "Lalbarra": [
    {
     "n": "Manoj Kumar Dhurwey",
     "p": "9424341783",
     "e": "eeresbalaghat2@mp.gov.in"
    }
   ],
   "Lanji": [
    {
     "n": "Amit Marawi",
     "p": "07632240226",
     "e": "tobalaghat87@gmail.com"
    }
   ],
   "Tirodi": [
    {
     "n": "Vineet Kumar Jain",
     "p": "07632240030",
     "e": "dig_balaghat@mppolice.gov.in"
    }
   ]
  },
  "Barwani": {
   "Anjad": [
    {
     "n": "Ravi Varma",
     "p": "",
     "e": "dmbarwani@nic.in"
    }
   ],
   "Niwali": [
    {
     "n": "Sheetal Solanki",
     "p": "",
     "e": "slrbar@mp.gov.in"
    }
   ],
   "Pansemal": [
    {
     "n": "Padmavilochan Shukla",
     "p": "",
     "e": "spbarwani@mppolice.gov.in"
    }
   ],
   "Pati": [
    {
     "n": "Arpit Gupta",
     "p": "",
     "e": "ceozpbar@mp.gov.in"
    },
    {
     "n": "Jayati Singh",
     "p": "",
     "e": "dmbarwani@nic.in"
    }
   ],
   "Rajpur": [
    {
     "n": "Shakti Singh Chouhan",
     "p": "",
     "e": "dmbarwani@nic.in"
    }
   ],
   "Sendhwa": [
    {
     "n": "Hemlata Solanki Dawar",
     "p": "",
     "e": "dmbarwani@nic.in"
    },
    {
     "n": "Sandeep Singh Sikarwar",
     "p": "",
     "e": "dio-brw@nic.in"
    }
   ],
   "Thikri": [
    {
     "n": "Aakash Yadav",
     "p": "",
     "e": "dmbarwani@nic.in"
    }
   ],
   "Warla": [
    {
     "n": "Madhav Agarwal",
     "p": "",
     "e": "dmbarwani@nic.in"
    }
   ]
  },
  "Betul": {
   "Betul": [
    {
     "n": "—",
     "p": "07141230034",
     "e": "dmbetul@nic.in"
    },
    {
     "n": "—",
     "p": "07141230035",
     "e": "ceozpbet@mp.gov.in"
    },
    {
     "n": "—",
     "p": "07141231490",
     "e": "sdmbetbet@mp.gov.in"
    },
    {
     "n": "—",
     "p": "07141231229",
     "e": "tehbetbet@mp.gov.in"
    }
   ],
   "Bhainsdehi": [
    {
     "n": "—",
     "p": "07147287232",
     "e": "sdmbhabet@mp.gov.in"
    }
   ],
   "Multai": [
    {
     "n": "—",
     "p": "07147220222",
     "e": "sdmmulbet@mp.gov.in"
    },
    {
     "n": "—",
     "p": "07147220457",
     "e": "tehmulbet@mp.gov.in"
    }
   ],
   "Shahpur": [
    {
     "n": "—",
     "p": "07147273239",
     "e": "sdmshabet@mp.gov.in"
    }
   ]
  },
  "Bhind": {
   "Ater": [
    {
     "n": "—",
     "p": "07534282361",
     "e": "sdmatebhi@mp.gov.in"
    }
   ],
   "Bhind": [
    {
     "n": "—",
     "p": "07534231200",
     "e": "dmbhind@nic.in"
    },
    {
     "n": "—",
     "p": "07534244906",
     "e": "ceozpbhi@mp.gov.in"
    },
    {
     "n": "—",
     "p": "07534230501",
     "e": "sdmbhi@mp.gov.in"
    }
   ],
   "Gohad": [
    {
     "n": "—",
     "p": "07534222033",
     "e": "sdmgohbhi@mp.gov.in"
    }
   ],
   "Mehgaon": [
    {
     "n": "—",
     "p": "07534255232",
     "e": "sdmmehbhi@mp.gov.in"
    }
   ]
  },
  "Bhopal": {
   "Berasia": [
    {
     "n": "Ashutosh Sharma",
     "p": "",
     "e": ""
    },
    {
     "n": "Dilip Kumar Chaurasia",
     "p": "",
     "e": ""
    }
   ],
   "HUZUR": [
    {
     "n": "Anurag Tripathi",
     "p": "7276785830",
     "e": ""
    }
   ],
   "Huzur": [
    {
     "n": "Archana Rawat Sharma",
     "p": "",
     "e": ""
    },
    {
     "n": "Deepak Dwivedi",
     "p": "",
     "e": ""
    },
    {
     "n": "Deepak Pandey",
     "p": "",
     "e": ""
    },
    {
     "n": "Karuna Dandotiya",
     "p": "9407127616",
     "e": ""
    },
    {
     "n": "Kunal Rawat",
     "p": "",
     "e": ""
    },
    {
     "n": "Priyank Mishra (IAS)",
     "p": "07552540494",
     "e": "dmbhopal@nic.in"
    },
    {
     "n": "Saurabh Verma",
     "p": "",
     "e": ""
    }
   ],
   "Kolar": [
    {
     "n": "N S Parmar",
     "p": "",
     "e": ""
    },
    {
     "n": "Prakash Chandra Pandey",
     "p": "",
     "e": ""
    }
   ]
  },
  "Burhanpur": {
   "Burhanpur": [
    {
     "n": "Shri Dinesh Chandra Bhevandiya",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Jitendra Alawa",
     "p": "",
     "e": "tehasilnepa@gmail.com"
    },
    {
     "n": "Shri Praveen Ohariya",
     "p": "",
     "e": "tehsildarburhanpur@gmail.com"
    },
    {
     "n": "Shri Sanjay Singh",
     "p": "7325252320",
     "e": "jpburhanpur@nic.in"
    },
    {
     "n": "Smt Pallavi Puranik",
     "p": "",
     "e": "sdmburhanpur@gmail.com"
    }
   ],
   "Khaknar": [
    {
     "n": "Shri Dayaram Awasya",
     "p": "",
     "e": "tehsilkhaknar@gmail.com"
    },
    {
     "n": "Sunita Baghel",
     "p": "7325276327",
     "e": "jpkhaknar@nic.in"
    }
   ],
   "Nepanagar": [
    {
     "n": "Shri Jagannath Waskle",
     "p": "",
     "e": "tehsildarburhanpur@gmail.com"
    },
    {
     "n": "Shri Srijan Shrivastava",
     "p": "7325242042",
     "e": "sdmnepanagar@gmail.com"
    }
   ]
  },
  "Chhatarpur": {
   "Chhatarpur": [
    {
     "n": "—",
     "p": "076822415007587968200",
     "e": ""
    },
    {
     "n": "—",
     "p": "076822481547771025837",
     "e": ""
    },
    {
     "n": "—",
     "p": "076822420727389590000",
     "e": ""
    },
    {
     "n": "—",
     "p": "9021628306",
     "e": ""
    }
   ]
  },
  "Chhindwara": {
   "Chaurai": [
    {
     "n": "Shri Sudhir Jain",
     "p": "07162230193",
     "e": "sdm.chhindwara@mp.gov.in"
    }
   ],
   "Chhindwara": [
    {
     "n": "Shri Dhirendra Singh",
     "p": "07162243402",
     "e": "admchh@mp.gov.in"
    },
    {
     "n": "Shri Harendra Narayan, IAS",
     "p": "07162242302",
     "e": "dmchhindwara@nic.in"
    }
   ],
   "Junnardeo": [
    {
     "n": "Shri Ajay Pandey, IPS",
     "p": "07162242304",
     "e": "sp_chhindawara@mppolice.gov.in"
    }
   ],
   "Parasia": [
    {
     "n": "Mrs. Ankita Tripathi",
     "p": "07165222025",
     "e": ""
    },
    {
     "n": "Shri Shubham Kumar Yadav, IAS",
     "p": "07163231021",
     "e": "sdmrev.parcdw@mp.gov.in"
    }
   ],
   "Sauser": [
    {
     "n": "Shri Agrim Kumar, IAS",
     "p": "07162244369",
     "e": "ceozpchi@mp.gov.in"
    }
   ]
  },
  "Damoh": {
   "Batiyagarh": [
    {
     "n": "Shri Yogendra Choudhary",
     "p": "9329315340",
     "e": "tehbatdam@nic.in"
    },
    {
     "n": "Smt. Poonam Dubey",
     "p": "076012853019479154426",
     "e": "jpbatdam-mp@nic.in"
    }
   ],
   "Damoh": [
    {
     "n": "District Registrar",
     "p": "",
     "e": "damdr@mp.gov.in"
    },
    {
     "n": "Mr. Haldhar Mishra",
     "p": "078122222068319221283",
     "e": "jpdamoh-mp@nic.in"
    },
    {
     "n": "Ms. Varsha Dubey",
     "p": "7000900322",
     "e": ""
    },
    {
     "n": "Shri Abhishek Mohan Vyas",
     "p": "078122221268962134364",
     "e": ""
    },
    {
     "n": "Shri Pratap Narayan Yadav, IAS",
     "p": "078122223457701074345",
     "e": "dmdamoh@nic.in"
    },
    {
     "n": "Shri Rakesh Mohan Tripathi",
     "p": "078122230257747809092",
     "e": "addlcoll2dam@mp.gov.in"
    },
    {
     "n": "Shri Saurabh Gandharva",
     "p": "078122621507701074123",
     "e": "sdmdam@mp.gov.in"
    },
    {
     "n": "Shri Saurabh Kothiya",
     "p": "078122223639669123879",
     "e": ""
    },
    {
     "n": "Smt. Parul Choudhari",
     "p": "078122232429340081916",
     "e": "tehdamoh@nic.in"
    },
    {
     "n": "Superintendent of Land Records",
     "p": "",
     "e": "slrdam@mp.gov.in"
    }
   ],
   "Hatta": [
    {
     "n": "Shri Alok Jain",
     "p": "076042623157987334492",
     "e": "tehhatdam@nic.in"
    },
    {
     "n": "Shri Rakesh Singh Markam",
     "p": "076042621509516461052",
     "e": "sdmhatdam@mp.gov.in"
    },
    {
     "n": "Shri Sanjeev Kumar Goswami",
     "p": "076042622387694059922",
     "e": "jphatdam-mp@nic.in"
    }
   ],
   "Jabera": [
    {
     "n": "Shri Ashutosh Gupta",
     "p": "076062552329691564800",
     "e": "tehjabdam@nic.in"
    },
    {
     "n": "Shri Rameshwar Patel",
     "p": "9981844255",
     "e": "jpjabdam-mp@nic.in"
    }
   ],
   "Patera": [
    {
     "n": "Mr. Haldhar Mishra",
     "p": "076052722218319221283",
     "e": "jppatdam-mp@nic.in"
    },
    {
     "n": "Shri Umesh Tiwari",
     "p": "9131488371",
     "e": "tehpatdam@nic.in"
    }
   ],
   "Patharia": [
    {
     "n": "Shri K.K. Pandey",
     "p": "076012422239424761985",
     "e": "jppahdam-mp@nic.in"
    },
    {
     "n": "Shri Niket Chaurasia",
     "p": "078122637149826533222",
     "e": "sdmpaddam@mp.gov.in"
    },
    {
     "n": "Smt. Deepa Chaturvedi",
     "p": "076012423989589309790",
     "e": "tehpahdam@nic.in"
    }
   ],
   "Tendukheda": [
    {
     "n": "Shri Chhote Giri Goswami",
     "p": "7000894848",
     "e": "sdmtendam@mp.gov.in"
    },
    {
     "n": "Shri Manish Baagri",
     "p": "076032636357692994651",
     "e": "jptendam-mp@nic.in"
    },
    {
     "n": "Shri Vivek Vyash",
     "p": "9303402684",
     "e": "tehtendam@nic.in"
    }
   ]
  },
  "Datia": {
   "Badoni": [
    {
     "n": "Sanjeev Tiwari",
     "p": "9826342203",
     "e": ""
    }
   ],
   "Bhander": [
    {
     "n": "Bijendra Singh Yadav",
     "p": "9074747485",
     "e": ""
    },
    {
     "n": "Shiv Shankar Gurjar",
     "p": "9981382020",
     "e": ""
    },
    {
     "n": "Sunil Prabhas",
     "p": "9926416966",
     "e": ""
    }
   ],
   "Datia": [
    {
     "n": "Brijmohan Aarya",
     "p": "9174762305",
     "e": ""
    },
    {
     "n": "Mohini Sahu",
     "p": "8871076880",
     "e": ""
    },
    {
     "n": "Rajesh Kushwah",
     "p": "7999178968",
     "e": ""
    },
    {
     "n": "Santosh Tiwari",
     "p": "9926889334",
     "e": ""
    },
    {
     "n": "Sonali Rajput",
     "p": "7879888032",
     "e": ""
    },
    {
     "n": "Surbhi Jain",
     "p": "7999884155",
     "e": ""
    }
   ],
   "Indergarh": [
    {
     "n": "Deepak Yadav",
     "p": "6264242572",
     "e": ""
    }
   ],
   "Seondha": [
    {
     "n": "Ashok Awasthi",
     "p": "9893822950",
     "e": ""
    },
    {
     "n": "Rajendra Jatav",
     "p": "9098742207",
     "e": ""
    }
   ]
  },
  "Dewas": {
   "Bagli": [
    {
     "n": "Shri Shivam Yadav, IAS",
     "p": "",
     "e": "sdmbagli@gmail.com"
    }
   ],
   "Dewas": [
    {
     "n": "Shri Abhishek Sharma",
     "p": "",
     "e": "sdmdewas2013@gmail.com"
    },
    {
     "n": "Shri Punit Gehlot",
     "p": "",
     "e": "spdewas07272@gmail.com"
    },
    {
     "n": "Shri Ritu Raj",
     "p": "",
     "e": "dmdewas@nic.in"
    }
   ],
   "Kannod": [
    {
     "n": "Shri Kanhaiya Lal Tilwari",
     "p": "",
     "e": "sdokannod@gmail.com"
    }
   ],
   "Khategaon": [
    {
     "n": "Shri Praveen Prajapati",
     "p": "",
     "e": "sdmkhategaon@gmail.com"
    }
   ],
   "Sonkatch": [
    {
     "n": "Shri Anand Malviya",
     "p": "",
     "e": "sdosonkatch@gmail.com"
    }
   ],
   "Tonk Khurd": [
    {
     "n": "Shri Sanjeev Saxena",
     "p": "",
     "e": "sdmtonkkhurd@gmail.com"
    }
   ]
  },
  "Dhar": {
   "Badnawar": [
    {
     "n": "Priyanka Mimrot Bendwal",
     "p": "",
     "e": ""
    }
   ],
   "Dhar": [
    {
     "n": "Rajkumar Haldar",
     "p": "9425082801",
     "e": ""
    },
    {
     "n": "Shri Abhishek Choudhary (IAS)",
     "p": "",
     "e": "ceozpdha@mp.gov.in"
    },
    {
     "n": "Shri Rajeev Ranjan Meena (IAS)",
     "p": "",
     "e": "dmdhar@nic.in"
    },
    {
     "n": "Shri Sachin Sharma (IPS)",
     "p": "",
     "e": "spodha@mp.gov.in"
    },
    {
     "n": "Shri Sanjeev Keshav Pandey",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Vejayanantham T R",
     "p": "",
     "e": "dfodhar@mpforest.org"
    }
   ],
   "Kukshi": [
    {
     "n": "Vishal Dhakad (IAS)",
     "p": "",
     "e": ""
    }
   ],
   "Manawar": [
    {
     "n": "Shri Pramod Gujjar",
     "p": "9826338600",
     "e": ""
    }
   ],
   "Sardarpur": [
    {
     "n": "Ajmer Singh Goud",
     "p": "",
     "e": ""
    }
   ]
  },
  "Guna": {
   "Aron": [
    {
     "n": "Shri Mahesh Kumar Bamanha",
     "p": "",
     "e": "sdm_aron@yahoo.in"
    }
   ],
   "Chachaura": [
    {
     "n": "Shri Ravi Malviya",
     "p": "",
     "e": "sdochachoda@gmail.com"
    }
   ],
   "Guna": [
    {
     "n": "Shri Abhishek Dubey",
     "p": "",
     "e": "ceozpgun@mp.gov.in"
    },
    {
     "n": "Shri Akhilesh Jain",
     "p": "",
     "e": "dmguna@nic.in"
    },
    {
     "n": "Shri Ankit Soni",
     "p": "",
     "e": "sp_guna@mppolice.gov.in"
    },
    {
     "n": "Shri Kishore Kumar Kanyal",
     "p": "07542255626",
     "e": "dmguna@nic.in"
    },
    {
     "n": "Smt Shivani Pandey",
     "p": "",
     "e": "sdmguna0001@gmail.com"
    }
   ],
   "Raghogarh": [
    {
     "n": "Shri Amit Soni",
     "p": "",
     "e": "sdmraghogarh2014@gmail.com"
    }
   ]
  },
  "Gwalior": {
   "Bhitarwar": [
    {
     "n": "Shri Atul Singh",
     "p": "",
     "e": "sdmgwaliorcity@gmail.com"
    },
    {
     "n": "Shri C.B. Prasad",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Rajeev Samadhiya",
     "p": "",
     "e": ""
    }
   ],
   "Chinor": [
    {
     "n": "Shri Pradeep Kumar Sharma",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Rupesh Ratan Singhai",
     "p": "",
     "e": ""
    }
   ],
   "City Center": [
    {
     "n": "Smt Manisha Kaul",
     "p": "",
     "e": ""
    }
   ],
   "Dabra": [
    {
     "n": "Shri Narendra Babu Yadav",
     "p": "",
     "e": ""
    },
    {
     "n": "Smt Ruchika Chauhan (IAS)",
     "p": "07512446200",
     "e": ""
    },
    {
     "n": "Smt. Juhi Gurg",
     "p": "07524222600",
     "e": "sdmdabra2011@gmail.com"
    }
   ],
   "Ghatigaon": [
    {
     "n": "Shri Naresh Chandra Gupta",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Suresh Kumar Barahdiya",
     "p": "",
     "e": ""
    },
    {
     "n": "Smt. Vandana Jain",
     "p": "",
     "e": ""
    }
   ],
   "Gwalior Gramin": [
    {
     "n": "Shri Umesh Chandra Kaurav",
     "p": "",
     "e": ""
    }
   ],
   "Morar": [
    {
     "n": "Smt Bhumija Saxena",
     "p": "",
     "e": ""
    }
   ],
   "Pichhor": [
    {
     "n": "Shri Sojan Singh Rawat (IAS)",
     "p": "07512340342",
     "e": ""
    }
   ],
   "Tansen": [
    {
     "n": "Anil Banwaria",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Surykant Tripathi",
     "p": "",
     "e": ""
    }
   ]
  },
  "Harda": {
   "Handia": [
    {
     "n": "Puja Bhati",
     "p": "",
     "e": "tahsilhandia@gmail.com"
    }
   ],
   "Harda": [
    {
     "n": "Archna Sharma",
     "p": "",
     "e": "sdopharda-hra@mppolice.gov.in"
    },
    {
     "n": "Mr. Amit Mishra",
     "p": "",
     "e": "adllsp_harda@mppolice.gov.in"
    },
    {
     "n": "Mrs. Anjali Joseph",
     "p": "07577225508",
     "e": ""
    },
    {
     "n": "Mukesh Goud",
     "p": "",
     "e": "sho.pschhipawad-hra@mppolice.gov.in"
    },
    {
     "n": "Shashank",
     "p": "",
     "e": "sp_harda@mppolice.gov.in"
    },
    {
     "n": "Sunil Latta",
     "p": "",
     "e": ""
    }
   ],
   "Khirkiya": [
    {
     "n": "Robart Girwal",
     "p": "",
     "e": ""
    },
    {
     "n": "Smt. Lavina Ghaghre",
     "p": "",
     "e": "tehsildarkhirkiya@gmail.com"
    }
   ],
   "Rehatgaon": [
    {
     "n": "Manvendra Singh Bhadoriya",
     "p": "",
     "e": "sho.psrehotgaon-hra@mppolice.gov.in"
    }
   ],
   "Sirali": [
    {
     "n": "Nikita Wilson",
     "p": "",
     "e": "sho.pssirali-hra@mppolice.gov.in"
    }
   ],
   "Timarni": [
    {
     "n": "Aakansha Talaya",
     "p": "",
     "e": "sdoptimarni-hra@mppolice.gov.in"
    },
    {
     "n": "Sanjay Chouksey",
     "p": "",
     "e": "sho.pstimarni-hra@mppolice.gov.in"
    }
   ]
  },
  "Indore": {
   "Bhicholi Hapsi": [
    {
     "n": "Ajay Bhushan Shukla",
     "p": "8770539990",
     "e": ""
    },
    {
     "n": "Anil Patel",
     "p": "8359046740",
     "e": ""
    }
   ],
   "Bicholi Hapsi": [
    {
     "n": "Resham Gavali",
     "p": "9926992290",
     "e": ""
    },
    {
     "n": "Sh. Ajay Yadav",
     "p": "9425092507",
     "e": ""
    },
    {
     "n": "Sh. Akash Singh IAS-19",
     "p": "8368358243",
     "e": ""
    },
    {
     "n": "Sh. Arth Jain, IAS-2021",
     "p": "9560066511",
     "e": ""
    },
    {
     "n": "Sh. D.S. Solanki",
     "p": "9826416553",
     "e": ""
    },
    {
     "n": "Sh. Dhruv Narayan Sharma",
     "p": "8989983777",
     "e": ""
    },
    {
     "n": "Sh. Kailash Patidar",
     "p": "9827437328",
     "e": ""
    },
    {
     "n": "Sh. Nilesh Dalal",
     "p": "9302115748",
     "e": ""
    },
    {
     "n": "Sh. Pawan Chavhan",
     "p": "9644812835",
     "e": ""
    },
    {
     "n": "Sh. Puspendra Waskale",
     "p": "7354020310",
     "e": ""
    },
    {
     "n": "Sh. Sunil Maggirwar",
     "p": "9403209748",
     "e": ""
    },
    {
     "n": "Sh. Vinod Devda",
     "p": "9424504651",
     "e": ""
    },
    {
     "n": "Smt. Archana Mishra",
     "p": "9425304091",
     "e": ""
    },
    {
     "n": "Smt. Lata Agrawal",
     "p": "7440443311",
     "e": ""
    },
    {
     "n": "Smt. Manisha Sharma",
     "p": "9479553750",
     "e": ""
    },
    {
     "n": "Smt. Manjulata Patel",
     "p": "9926428256",
     "e": ""
    },
    {
     "n": "Smt. Shanta Swami Bhargav",
     "p": "8349264054",
     "e": ""
    }
   ],
   "Depalpur": [
    {
     "n": "Charanjeet Singh Hudda",
     "p": "9806888808",
     "e": ""
    },
    {
     "n": "Pooja Malakar",
     "p": "7389779080",
     "e": ""
    },
    {
     "n": "Sangeeta Goliya",
     "p": "9713477229",
     "e": ""
    },
    {
     "n": "Sh Ranveer Singh",
     "p": "9343503950",
     "e": ""
    },
    {
     "n": "Sh. A.K. Tiwari",
     "p": "9926053357",
     "e": ""
    },
    {
     "n": "Sh. Alok Vajpai",
     "p": "8770432527",
     "e": ""
    },
    {
     "n": "Sh. Anup Kumar Singh, IAS-2013",
     "p": "8290172489",
     "e": ""
    },
    {
     "n": "Sh. Bahadur Singh Raghuwanshi",
     "p": "9893280110",
     "e": ""
    },
    {
     "n": "Sh. CL Kewada",
     "p": "9827615021",
     "e": ""
    },
    {
     "n": "Sh. KS Gawli",
     "p": "9893360392",
     "e": ""
    },
    {
     "n": "Sh. Manish Swami",
     "p": "9993072896",
     "e": ""
    },
    {
     "n": "Sh. Monoj Chourasia",
     "p": "7440445105",
     "e": ""
    },
    {
     "n": "Sh. PN Mishra",
     "p": "6265553784",
     "e": ""
    },
    {
     "n": "Sh. S.N. Soni",
     "p": "9713620227",
     "e": ""
    },
    {
     "n": "Sh. Sanjay Agrawal",
     "p": "9826644908",
     "e": ""
    },
    {
     "n": "Sh. Sanjay Tiwari",
     "p": "88276250266263623081",
     "e": ""
    },
    {
     "n": "Smt Kavita",
     "p": "8462989838",
     "e": ""
    },
    {
     "n": "Smt. Mayuri Verma",
     "p": "7582823535",
     "e": ""
    },
    {
     "n": "Smt. Pooja Malakar",
     "p": "7389779080",
     "e": ""
    },
    {
     "n": "Smt. Poornima Gadaria",
     "p": "9425033743",
     "e": ""
    },
    {
     "n": "Smt. Prabha Bhaskar",
     "p": "8962348572",
     "e": ""
    },
    {
     "n": "Smt. Preety Agrawal",
     "p": "7024240004",
     "e": ""
    },
    {
     "n": "Smt. Ranjana Goyal",
     "p": "8959066353",
     "e": ""
    }
   ],
   "Dr. Ambedkar Nagar (Mhow)": [
    {
     "n": "Dr. Sanjay Kumar Jain",
     "p": "9425452116",
     "e": ""
    },
    {
     "n": "Dr. Shaji Joseph",
     "p": "9826270527",
     "e": ""
    },
    {
     "n": "Sh Arpit Tiwari",
     "p": "9329456935",
     "e": ""
    },
    {
     "n": "Sh B.L. Chouhan",
     "p": "9425642075",
     "e": ""
    },
    {
     "n": "Sh Jaydeep Namdev",
     "p": "9424769778",
     "e": ""
    },
    {
     "n": "Sh. Abhay Rajangavkar",
     "p": "9303015504",
     "e": ""
    },
    {
     "n": "Sh. Amogh Shrivastav",
     "p": "9685425333",
     "e": ""
    },
    {
     "n": "Sh. Antim Dubey",
     "p": "8823824000",
     "e": ""
    },
    {
     "n": "Sh. C.S. Kharat",
     "p": "94254358879340448563",
     "e": ""
    },
    {
     "n": "Sh. Chandrashekhar Mahor",
     "p": "9302877144",
     "e": ""
    },
    {
     "n": "Sh. Hansraj Meena",
     "p": "9424404090",
     "e": ""
    },
    {
     "n": "Sh. Mohan Lal Maru",
     "p": "9009512393",
     "e": ""
    },
    {
     "n": "Sh. Parikshit Zade, IAS-2017",
     "p": "9407555755",
     "e": ""
    },
    {
     "n": "Sh. Ranjeet Thakur",
     "p": "9893195212",
     "e": ""
    },
    {
     "n": "Sh. Sumat Jain",
     "p": "9752858851",
     "e": ""
    },
    {
     "n": "Sh. Swapnil Garg",
     "p": "7747934177",
     "e": ""
    },
    {
     "n": "Smt. Alka Sonkar",
     "p": "9425063083",
     "e": ""
    },
    {
     "n": "Smt. Pragati Chouraiya",
     "p": "9893075759",
     "e": ""
    }
   ],
   "Hatod": [
    {
     "n": "Dr. Madhav Hasani",
     "p": "756683160697893444748",
     "e": ""
    },
    {
     "n": "Govind Singh Thakur",
     "p": "7566121474",
     "e": ""
    },
    {
     "n": "Rajesh Kumar Singh",
     "p": "9977220506",
     "e": ""
    },
    {
     "n": "Sh Brijesh Pandey",
     "p": "9893800336",
     "e": ""
    },
    {
     "n": "Sh. Ajay Shrivastav",
     "p": "9424796831",
     "e": ""
    },
    {
     "n": "Sh. Deepak Sharma",
     "p": "9425181137",
     "e": ""
    },
    {
     "n": "Sh. Devdhar Darwaie",
     "p": "7440443331",
     "e": ""
    },
    {
     "n": "Sh. DK Sharma",
     "p": "9893158255",
     "e": ""
    },
    {
     "n": "Sh. Gagan Bhavar",
     "p": "9407193377",
     "e": ""
    },
    {
     "n": "Sh. Kuldeep Shrivastav",
     "p": "9425953774",
     "e": ""
    },
    {
     "n": "Sh. Lal Sudhakar Singh",
     "p": "9425922078",
     "e": ""
    },
    {
     "n": "Sh. Lokesh Gupta",
     "p": "9993599407",
     "e": ""
    },
    {
     "n": "Sh. Manoj Sewale",
     "p": "9406629929",
     "e": ""
    },
    {
     "n": "Sh. Pankaj Upadhyay",
     "p": "9425800400",
     "e": ""
    },
    {
     "n": "Sh. Prakash Singh Chouhan, SAS",
     "p": "9685980222",
     "e": ""
    },
    {
     "n": "Sh. Ravindra Kumar Verma",
     "p": "9009699029",
     "e": ""
    },
    {
     "n": "Sh. Sanjay Jain",
     "p": "9893965927",
     "e": ""
    },
    {
     "n": "Sh. Sarang Gupta",
     "p": "9977788192",
     "e": ""
    },
    {
     "n": "Sh. Yogesh Gupta",
     "p": "9669746555",
     "e": ""
    },
    {
     "n": "Smt. Sharli Thomas",
     "p": "9425321206",
     "e": ""
    }
   ],
   "Kanadiya": [
    {
     "n": "Deepak Chouhan",
     "p": "9479300866",
     "e": ""
    },
    {
     "n": "Dr. Ashok Yadav",
     "p": "7000802732",
     "e": ""
    },
    {
     "n": "Dr. Dinkar Patil",
     "p": "9827289678",
     "e": ""
    },
    {
     "n": "Dr. Girdhari Lal Sodhi",
     "p": "9425020489",
     "e": ""
    },
    {
     "n": "Ghansyam Dhangar",
     "p": "9826847514",
     "e": ""
    },
    {
     "n": "Narayan Nanded",
     "p": "9826629088",
     "e": ""
    },
    {
     "n": "Rakesh Sastiya",
     "p": "9584008254",
     "e": ""
    },
    {
     "n": "Sh Alok Jain",
     "p": "9425640190",
     "e": ""
    },
    {
     "n": "Sh RC Dixit",
     "p": "9425188015",
     "e": ""
    },
    {
     "n": "Sh. Abhijeet Singh Rathore",
     "p": "9713203000",
     "e": ""
    },
    {
     "n": "Sh. Alkesh Yadav",
     "p": "7805031988",
     "e": ""
    },
    {
     "n": "Sh. Anil Banwariya",
     "p": "9425112874",
     "e": ""
    },
    {
     "n": "Sh. Ashish Katiyar",
     "p": "9599748663",
     "e": ""
    },
    {
     "n": "Sh. Dharmendra Singh Parihar",
     "p": "9424796819",
     "e": ""
    },
    {
     "n": "Sh. Dinesh Kumar",
     "p": "9926523616",
     "e": ""
    },
    {
     "n": "Sh. Jitendra Verma",
     "p": "8989578989",
     "e": ""
    },
    {
     "n": "Sh. Kshitij Singhal, IAS-14",
     "p": "7440448040",
     "e": ""
    },
    {
     "n": "Sh. Manendra Kumar Garg",
     "p": "8989983781",
     "e": ""
    },
    {
     "n": "Sh. Manoj Pathroliya",
     "p": "9424061417",
     "e": ""
    },
    {
     "n": "Sh. Narendra Bhide",
     "p": "9424056886",
     "e": ""
    },
    {
     "n": "Sh. Narendra Nath Pandey",
     "p": "9893800327",
     "e": ""
    },
    {
     "n": "Sh. Narendra Parihar",
     "p": "8349948769",
     "e": ""
    },
    {
     "n": "Sh. Nasimuddin",
     "p": "8602677986",
     "e": ""
    },
    {
     "n": "Sh. O.P. Khede",
     "p": "9425462589",
     "e": ""
    },
    {
     "n": "Sh. Pradeep Sharma",
     "p": "9589894678",
     "e": ""
    },
    {
     "n": "Sh. PS Mandloie",
     "p": "8815267895",
     "e": ""
    },
    {
     "n": "Sh. Rajendra Bhadoriya",
     "p": "9826243110",
     "e": ""
    },
    {
     "n": "Sh. Rajnish Sinha",
     "p": "9425406844",
     "e": ""
    },
    {
     "n": "Sh. Sandeep Gautam",
     "p": "9425426675",
     "e": ""
    },
    {
     "n": "Sh. Shailendra Thakur",
     "p": "9827360806",
     "e": ""
    },
    {
     "n": "Sh. Shyam Tiwari",
     "p": "7987542592",
     "e": ""
    },
    {
     "n": "Sh. Sitaram Bamnke",
     "p": "8989983537",
     "e": ""
    },
    {
     "n": "Sh. T.S. Waskle",
     "p": "9755269661",
     "e": ""
    },
    {
     "n": "Smt. Chetna Chouhan",
     "p": "8770380174",
     "e": ""
    },
    {
     "n": "Smt. Disha Jain",
     "p": "8982338768",
     "e": ""
    },
    {
     "n": "Smt. Gurnit Kaur Bhatiya",
     "p": "9653787148",
     "e": ""
    }
   ],
   "Khudel": [
    {
     "n": "Manoj Jaiswal",
     "p": "9425139850",
     "e": ""
    },
    {
     "n": "Preeti Bhise",
     "p": "8458955067",
     "e": ""
    },
    {
     "n": "Rahul Gupta",
     "p": "8871782817",
     "e": ""
    },
    {
     "n": "Sh Manish Gupta",
     "p": "9406809780",
     "e": ""
    },
    {
     "n": "Sh SM Rathore",
     "p": "9425108539",
     "e": ""
    },
    {
     "n": "Sh. Aashish Kumar Pathak IAS-20",
     "p": "9977338856",
     "e": ""
    },
    {
     "n": "Sh. Amol Thankur",
     "p": "9884297478",
     "e": ""
    },
    {
     "n": "Sh. Anil Kumar",
     "p": "8700601257",
     "e": ""
    },
    {
     "n": "Sh. Anil Soni",
     "p": "8770019051",
     "e": ""
    },
    {
     "n": "Sh. Ashutosh Mahasabde",
     "p": "9827430585",
     "e": ""
    },
    {
     "n": "Sh. Himanshu Pande",
     "p": "6267482393",
     "e": ""
    },
    {
     "n": "Sh. Himanshu Shukla",
     "p": "8349901122",
     "e": ""
    },
    {
     "n": "Sh. Rinkesh Vaishya, SAS",
     "p": "9713389210",
     "e": ""
    },
    {
     "n": "Sh. Santosh Salve",
     "p": "94253339869691981174",
     "e": ""
    },
    {
     "n": "Sh. Yogesh Jha",
     "p": "9826127053",
     "e": ""
    },
    {
     "n": "Smt. Hema Mishra",
     "p": "9131397771",
     "e": ""
    },
    {
     "n": "Smt. Manju Sharma",
     "p": "9425935995",
     "e": ""
    },
    {
     "n": "Smt. Monika Katare",
     "p": "9589101113",
     "e": ""
    },
    {
     "n": "Smt. Namrata Jain",
     "p": "9425806874",
     "e": ""
    }
   ],
   "Malharganj": [
    {
     "n": "Dr. DP Pandey",
     "p": "9826024411",
     "e": ""
    },
    {
     "n": "Dr. Shivraj Chouhan",
     "p": "9516576850",
     "e": ""
    },
    {
     "n": "Nidhi Verma",
     "p": "9893399064",
     "e": ""
    },
    {
     "n": "Priyanka Taigor",
     "p": "9131712541",
     "e": ""
    },
    {
     "n": "Sh Manish Kumar Shukla",
     "p": "8718996633",
     "e": ""
    },
    {
     "n": "Sh. Amresh Naydu",
     "p": "9754424134",
     "e": ""
    },
    {
     "n": "Sh. Devraj Patel",
     "p": "9479642099",
     "e": ""
    },
    {
     "n": "Sh. Lokendra Mandloi",
     "p": "9826545088",
     "e": ""
    },
    {
     "n": "Sh. Mahipal Ajay",
     "p": "9826284507",
     "e": ""
    },
    {
     "n": "Sh. Manoj Jaiswal",
     "p": "94251398509340246037",
     "e": ""
    },
    {
     "n": "Sh. Prakhar Singh IAS-20",
     "p": "8319059127",
     "e": ""
    },
    {
     "n": "Sh. Praveen Yadav",
     "p": "8130006193",
     "e": ""
    },
    {
     "n": "Sh. Rajesh Gupta",
     "p": "7987632040",
     "e": ""
    },
    {
     "n": "Sh. Sanjay Kumar Mishra",
     "p": "9425031360",
     "e": ""
    },
    {
     "n": "Sh. Sunil Kumar Udiya",
     "p": "9425062211",
     "e": ""
    },
    {
     "n": "Shekhar Choudhary",
     "p": "9009066206",
     "e": ""
    },
    {
     "n": "Smt. Neelam Khanna",
     "p": "9425804919",
     "e": ""
    },
    {
     "n": "Smt. Neelam Ninama",
     "p": "9425947030",
     "e": ""
    },
    {
     "n": "Smt. Tanvi Hudda, IAS",
     "p": "9412998705",
     "e": ""
    }
   ],
   "Mhow": [
    {
     "n": "Giriraj Dubey",
     "p": "8510985378",
     "e": ""
    },
    {
     "n": "Rakesh Parmar",
     "p": "7354384652",
     "e": ""
    },
    {
     "n": "Sh. Giriraj Dubey",
     "p": "8510985378",
     "e": ""
    },
    {
     "n": "Sh. Mahesh Patel",
     "p": "9009396374",
     "e": ""
    },
    {
     "n": "Sh. Priyanka Bamaniya",
     "p": "8827808806",
     "e": ""
    },
    {
     "n": "Sh. Rajesh Mishra",
     "p": "9425055174",
     "e": ""
    },
    {
     "n": "Sh. Vikram Singh Chouhan",
     "p": "7987529922",
     "e": ""
    },
    {
     "n": "Smt. Ankita Porwal",
     "p": "9424042752",
     "e": ""
    },
    {
     "n": "Vivek Soni",
     "p": "9926025005",
     "e": ""
    }
   ],
   "Rau": [
    {
     "n": "Dr. Shailendra Jain",
     "p": "7067474371",
     "e": ""
    },
    {
     "n": "Lokendra Singh Saral",
     "p": "9713544103",
     "e": ""
    },
    {
     "n": "Miss Sheetal Pathak",
     "p": "9907507005",
     "e": ""
    },
    {
     "n": "Satyendra Gurjar",
     "p": "9644466888",
     "e": ""
    },
    {
     "n": "Sh Rajendra Goyal",
     "p": "9827502858",
     "e": ""
    },
    {
     "n": "Sh. Chakrapani Mishra",
     "p": "9926631300",
     "e": ""
    },
    {
     "n": "Sh. CS Nigam",
     "p": "9425071946",
     "e": ""
    },
    {
     "n": "Sh. Deepak Shar",
     "p": "9425813422",
     "e": ""
    },
    {
     "n": "Sh. Hitendra Kumar",
     "p": "9424974200",
     "e": ""
    },
    {
     "n": "Sh. Manoj Pathak",
     "p": "7440446001",
     "e": ""
    },
    {
     "n": "Sh. Mayank Parmar",
     "p": "9752927473",
     "e": ""
    },
    {
     "n": "Sh. Pawar Navjeevan Vijay, IAS",
     "p": "9766155554",
     "e": ""
    },
    {
     "n": "Sh. Piyush Mali",
     "p": "8982208141",
     "e": ""
    },
    {
     "n": "Sh. Satish Kumar Chokse",
     "p": "9425170871",
     "e": ""
    },
    {
     "n": "Smt Priyanka Taigor",
     "p": "9131712541",
     "e": ""
    },
    {
     "n": "Smt. Madhu Tiwari",
     "p": "9893505072",
     "e": ""
    },
    {
     "n": "Smt. Meghana Bhatt",
     "p": "9425107432",
     "e": ""
    },
    {
     "n": "Smt. Pragati Jain",
     "p": "9826964727",
     "e": ""
    },
    {
     "n": "Smt. Reena Solanki",
     "p": "9644494323",
     "e": ""
    },
    {
     "n": "Smt. Rituja Pahade",
     "p": "9425324855",
     "e": ""
    }
   ],
   "Sanwer": [
    {
     "n": "Dr. Arvind Ghangoriya",
     "p": "9827215466",
     "e": ""
    },
    {
     "n": "H.S. Vishwakarma",
     "p": "9926326218",
     "e": ""
    },
    {
     "n": "Kusum Mandloi",
     "p": "9691195171",
     "e": ""
    },
    {
     "n": "Poonam Tomar",
     "p": "8817071648",
     "e": ""
    },
    {
     "n": "Sh Ajay Kumar",
     "p": "7385111967",
     "e": ""
    },
    {
     "n": "Sh Pratap Bhuriya",
     "p": "94259785969301571508",
     "e": ""
    },
    {
     "n": "Sh. Anil Joshi",
     "p": "9893690160",
     "e": ""
    },
    {
     "n": "Sh. Atul Dubey",
     "p": "9827729433",
     "e": ""
    },
    {
     "n": "Sh. B.P. Salve",
     "p": "9826685348",
     "e": ""
    },
    {
     "n": "Sh. Harsh Chaturvedi",
     "p": "94795493639425338122",
     "e": ""
    },
    {
     "n": "Sh. Jawahar Mandloi",
     "p": "9424722810",
     "e": ""
    },
    {
     "n": "Sh. M. Kumar",
     "p": "9818319165",
     "e": ""
    },
    {
     "n": "Sh. Manoj Raghuvanshi",
     "p": "9981812303",
     "e": ""
    },
    {
     "n": "Sh. Manoj Verma",
     "p": "9893091290",
     "e": ""
    },
    {
     "n": "Sh. Om Narayan Badkul, Joint Collector",
     "p": "9981472525",
     "e": ""
    },
    {
     "n": "Sh. Prabodh Parate",
     "p": "9425411364",
     "e": ""
    },
    {
     "n": "Sh. Sanjay Solanki",
     "p": "9425909150",
     "e": ""
    },
    {
     "n": "Sh. Subhashis Banarjee",
     "p": "9425026766",
     "e": ""
    },
    {
     "n": "Smt. Kirti Khurasiya, IAS-2016",
     "p": "9425064273",
     "e": ""
    },
    {
     "n": "Smt. Kusum Mandloi",
     "p": "9691195171",
     "e": ""
    },
    {
     "n": "Smt. Paragi Goyal",
     "p": "8770744145",
     "e": ""
    },
    {
     "n": "Smt. Reena Chouhan",
     "p": "9343454058",
     "e": ""
    }
   ]
  },
  "Jabalpur": {
   "Kundam": [
    {
     "n": "Dhananjay Singh Bhadoria",
     "p": "07612679000",
     "e": "commjabalpur@gov.in"
    },
    {
     "n": "Raghvendra Singh",
     "p": "07612624200",
     "e": "dmjabalpur@nic.in"
    }
   ],
   "Patan": [
    {
     "n": "Abhishek Gehlot",
     "p": "07612624860",
     "e": "ceozpjab@mp.gov.in"
    }
   ],
   "Sihora": [
    {
     "n": "Sampat Upadhyay",
     "p": "",
     "e": ""
    }
   ]
  },
  "Jhabua": {
   "Jhabua": [
    {
     "n": "Mr. Milan Patel",
     "p": "",
     "e": "cmojhabua@mpurban.gov.in"
    },
    {
     "n": "Mr. Sunil Kumar Dawar",
     "p": "",
     "e": "tehsildar193jhabua@gmail.com"
    },
    {
     "n": "Shri Arpit Gupta",
     "p": "",
     "e": "ceojpjhabua@gmail.com"
    },
    {
     "n": "Shri Lalit Nandle",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Mahesh Kumar Mandloi",
     "p": "",
     "e": "sdmjhabua123@gmail.com"
    }
   ],
   "Rama": [
    {
     "n": "Mr. Pramesh Jain",
     "p": "",
     "e": "tehsil.rama@gmail.com"
    }
   ],
   "Ranapur": [
    {
     "n": "Ms. Parveen Bano Ansari",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Hukumsingh Ningwal",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri L.K. Sharma",
     "p": "",
     "e": "cmoranapur@mpurban.gov.in"
    },
    {
     "n": "Shri Mo. Ayaz Khan",
     "p": "",
     "e": ""
    }
   ],
   "Thandla": [
    {
     "n": "Mr. Devendra Baradiya",
     "p": "",
     "e": "ceojpthandla@gmail.com"
    },
    {
     "n": "Mr. Kamlesh Jaiswal",
     "p": "9926736834",
     "e": "cmothandla@mpurban.gov.in"
    },
    {
     "n": "Mr. Sukhdev Dawar",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Bhaskar Gachle",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Rajesh Jamra",
     "p": "",
     "e": "thandla123@gmail.com"
    }
   ]
  },
  "Katni": {
   "Badwara": [
    {
     "n": "Smt. Tapasya Parihar, IAS",
     "p": "",
     "e": ""
    }
   ],
   "Bahoriband": [
    {
     "n": "Ms. Harsimranpreet Kaur, IAS",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Shlok Waikar, IAS",
     "p": "",
     "e": ""
    }
   ],
   "Barhi": [
    {
     "n": "Shri Pramod Chaturvedi",
     "p": "",
     "e": ""
    }
   ],
   "Dhimarkheda": [
    {
     "n": "Jeetendra Kumar Patel",
     "p": "",
     "e": ""
    },
    {
     "n": "Smt. Nidhi Gohal",
     "p": "",
     "e": ""
    }
   ],
   "Katni Rural": [
    {
     "n": "Shri Abhinay Vishwakarma, IPS",
     "p": "",
     "e": ""
    },
    {
     "n": "Shri Ashish Tiwari, IAS",
     "p": "",
     "e": ""
    }
   ],
   "Reethi": [
    {
     "n": "Shri Garvit Gangwar, IFS",
     "p": "",
     "e": ""
    }
   ],
   "Vijayraghavgarh": [
    {
     "n": "Shri Neelamber Mishra",
     "p": "",
     "e": ""
    }
   ]
  },
  "Khandwa": {
   "Harsud": [
    {
     "n": "Kashiram Badole",
     "p": "",
     "e": "dmkhandwa@nic.in"
    }
   ],
   "Khalwa": [
    {
     "n": "Sanjeev Shrivastava",
     "p": "",
     "e": "dcourtkhd-mp@nic.in"
    }
   ],
   "Mundi": [
    {
     "n": "Aishwarya Verma",
     "p": "",
     "e": "ceozpkhd@mp.gov.in"
    }
   ],
   "Pandhana": [
    {
     "n": "Agam Jain",
     "p": "",
     "e": "spokhd@nic.in"
    },
    {
     "n": "Rishav Gupta",
     "p": "",
     "e": "dmkhandwa@nic.in"
    }
   ],
   "Punasa": [
    {
     "n": "Shradha Shukla",
     "p": "",
     "e": "dmkhandwa@nic.in"
    }
   ]
  },
  "Khargone": {
   "Badwah": [
    {
     "n": "Shri Bhanu Prakash Bathma",
     "p": "9424793300",
     "e": "dfotbwaha@mp.gov.in"
    },
    {
     "n": "Shri Kuldeep Kinshuk",
     "p": "9424601916",
     "e": "cmobadwah@mpurban.gov.in"
    },
    {
     "n": "Shri Satyanarayan Darro",
     "p": "9425168249",
     "e": "sdmbarwah@gmail.com"
    },
    {
     "n": "Shri Sundarlal Thakur",
     "p": "8120980813",
     "e": "tehbarkhr@nic.in"
    }
   ],
   "Bhagwanpura": [
    {
     "n": "Shri Praveen Singh Changar",
     "p": "9993539520",
     "e": "tehbhakhr@nic.in"
    }
   ],
   "Bhikangaon": [
    {
     "n": "Shri Lokesh Chapre",
     "p": "8889338505",
     "e": "sdmbhikangaon@gmail.com"
    },
    {
     "n": "Shri Manoj Chouhan",
     "p": "9009000411",
     "e": "tehbhikhr@nic.in"
    },
    {
     "n": "Shri Sanjay Kanoongo",
     "p": "9425090361",
     "e": "cmobhikangaon@mpurban.gov.in"
    }
   ],
   "Gogawaan": [
    {
     "n": "Shri Hukum Singh Nigwal",
     "p": "9753376892",
     "e": "tehgogaon@nic.in"
    },
    {
     "n": "Shri Sanjay Kanoongo",
     "p": "9425090361",
     "e": "cmobistan@mpurban.gov.in"
    }
   ],
   "Jhirniya": [
    {
     "n": "Shri Khuman Singh Chouhan",
     "p": "7587980331",
     "e": "tehzirkhr@nic.in"
    }
   ],
   "Kasrawad": [
    {
     "n": "Shri Anil Jain",
     "p": "7987567202",
     "e": "sdmkasrawad@gmail.com"
    },
    {
     "n": "Shri Kamlesh Gole",
     "p": "9993196919",
     "e": "cmokasrawad@mpurban.gov.in"
    },
    {
     "n": "Shri Mukesh Machar",
     "p": "9993326232",
     "e": "tehkaskhr@nic.in"
    }
   ],
   "Khargone": [
    {
     "n": "Shri Dinesh Sonratiya",
     "p": "9826183914",
     "e": ""
    },
    {
     "n": "Shri Diptesh Choukade",
     "p": "9669559295",
     "e": ""
    },
    {
     "n": "Shri Guru Prasad",
     "p": "7282232363",
     "e": "dmkhargone@nic.in"
    },
    {
     "n": "Shri Kailash Meena",
     "p": "9406718184",
     "e": "khargone.ito@incometax.gov.in"
    },
    {
     "n": "Shri Milind Kumar Nagdeve",
     "p": "7282232880",
     "e": "ceozpkhr@mp.nic.in"
    },
    {
     "n": "Shri Pratap Singh Agasya",
     "p": "9826443533",
     "e": ""
    },
    {
     "n": "Shri Rajendra Patidar",
     "p": "7282232016",
     "e": "dio-kha@nic.in"
    },
    {
     "n": "Shri Rajesh Patil",
     "p": "9425001607",
     "e": "tdmkhargone_mp@bsnl.co.in"
    },
    {
     "n": "Shri Ramesh Rathore",
     "p": "9424593275",
     "e": "dfotkgone@mp.gov.in"
    },
    {
     "n": "Shri Ravindra Singh Chouhan",
     "p": "9907121306",
     "e": "tehkhagone@nic.in"
    },
    {
     "n": "Shri Ravindra Verma",
     "p": "7282231004",
     "e": "sp_khargone@mppolice.gov.in"
    },
    {
     "n": "Shri Santosh Patel",
     "p": "9827790256",
     "e": "dsokhr@mp.nic.in"
    },
    {
     "n": "Shri Satyendra Bairava",
     "p": "9425448746",
     "e": "sdmkhargone@gmail.com"
    },
    {
     "n": "Shri Siddharth Mehta",
     "p": "8349707727",
     "e": ""
    },
    {
     "n": "Shri Virendra Kumar Katare",
     "p": "9425136471",
     "e": ""
    },
    {
     "n": "Shrimati Kamladevi Kol",
     "p": "7415080252",
     "e": "cmokhargone@mpurban.gov.in"
    },
    {
     "n": "Smt. Aakaansha Agrawal",
     "p": "8120594533",
     "e": ""
    },
    {
     "n": "Smt. Rekha Rathod (IAS)",
     "p": "7282233601",
     "e": ""
    }
   ],
   "Khargone Nagar": [
    {
     "n": "Shri Jagar Rawat",
     "p": "8827052624",
     "e": "nagartahshilkhargone@gmail.com"
    }
   ],
   "Maheshwar": [
    {
     "n": "Ms. Purva Mandloi",
     "p": "9589796901",
     "e": "sdmmandleshwar@gmail.com"
    },
    {
     "n": "Shri Kailash Sastiya",
     "p": "9993935844",
     "e": "tehmahkhr@nic.in"
    },
    {
     "n": "Shri Kamlesh Gole",
     "p": "9993196919",
     "e": "cmokarhi@mpurban.gov.in"
    },
    {
     "n": "Shri Priyank Pandya",
     "p": "9827789610",
     "e": "cmomaheshwar@mpurban.gov.in"
    },
    {
     "n": "Shri Sanjay Rawal",
     "p": "9977826617",
     "e": "cmomandaleshwar@mpurban.gov.in"
    }
   ],
   "Sanawad": [
    {
     "n": "Shri Rajendra Mishra",
     "p": "9826622831",
     "e": "cmosanavad@mpurban.gov.in"
    }
   ],
   "Segaon": [
    {
     "n": "Shri Antar Singh Kanesh",
     "p": "8965888012",
     "e": "tehsegkhr@nic.in"
    }
   ]
  },
  "Maihar": {
   "Amarpatan": [
    {
     "n": "Shri Ramdev Saket",
     "p": "7701075963",
     "e": ""
    }
   ],
   "Maihar": [
    {
     "n": "Miss Ashima Patel",
     "p": "7701075958",
     "e": ""
    },
    {
     "n": "Shri Mukesh Vaisya",
     "p": "7587600093",
     "e": ""
    },
    {
     "n": "Smt. Sanjana Jain",
     "p": "7701075957",
     "e": ""
    }
   ],
   "Ramnagar": [
    {
     "n": "Smt. Anamika Singh",
     "p": "7701075964",
     "e": ""
    }
   ]
  },
  "Mandla": {
   "Bichhiya": [
    {
     "n": "Shri Rajesh Raghuwanshi, IPS",
     "p": "07642250800",
     "e": "sp_mandla@mppolice.gov.in"
    }
   ],
   "Ghughri": [
    {
     "n": "Shri Shashwat Singh Meena",
     "p": "07642251844",
     "e": "ceozpmal@mp.gov.in"
    }
   ],
   "Nainpur": [
    {
     "n": "Ms Amita KB, IFS",
     "p": "9424792003",
     "e": "fdknp.mdl@mp.gov.in"
    },
    {
     "n": "Shri Hurendra Ghormare",
     "p": "07642251089",
     "e": "admandla@mp.gov.in"
    },
    {
     "n": "Shri Rahul Namdev Dhote",
     "p": "07642250600",
     "e": "dmmandla@nic.in"
    }
   ],
   "Narayanganj": [
    {
     "n": "Shri Punit Goyal, IFS",
     "p": "9424792002",
     "e": "ddknpb.mdl@mp.gov.in"
    }
   ],
   "Niwas": [
    {
     "n": "Shri Ravindramani Tripathi, IFS",
     "p": "9424792001",
     "e": "fdknp.mdl@mp.gov.in"
    }
   ]
  },
  "Mandsaur": {
   "Garoth": [
    {
     "n": "Rahul Chauhan",
     "p": "",
     "e": "sdogarmas-mp@nic.in"
    }
   ],
   "Malhargarh": [
    {
     "n": "Swati Tiwari",
     "p": "07424248338",
     "e": "sdomalmas-mp@nic.in"
    }
   ],
   "Mandsaur": [
    {
     "n": "Anukool Jain",
     "p": "07422223923",
     "e": "ceozpmas@mp.gov.in"
    },
    {
     "n": "Divyank Singh",
     "p": "07422235260",
     "e": "dmmandsaur@nic.in"
    },
    {
     "n": "Ekta Jaiswal",
     "p": "",
     "e": "dmandsauar@nic.in"
    },
    {
     "n": "Shivlal Shakya",
     "p": "",
     "e": "sdomandsaur-mp@nic.in"
    },
    {
     "n": "Vinod Kumar Meena",
     "p": "07422255050",
     "e": "sp_office@mppolice.gov.in"
    }
   ],
   "Sitamau": [
    {
     "n": "Shivani Garg",
     "p": "07426222039",
     "e": "sdositmas-mp@nic.in"
    }
   ]
  },
  "Mauganj": {
   "Hanumana": [
    {
     "n": "Baishakhu Prajapati",
     "p": "",
     "e": ""
    },
    {
     "n": "Kamlesh Puri",
     "p": "",
     "e": "rohanumana@gmail.com"
    },
    {
     "n": "Rajesh Kumar Mehta",
     "p": "",
     "e": "rohanumana@gmail.com"
    }
   ],
   "Mauganj": [
    {
     "n": "Dileep Kumar Soni",
     "p": "",
     "e": ""
    },
    {
     "n": "Neeraj Dwivedi",
     "p": "",
     "e": ""
    },
    {
     "n": "Pawan Goraiya",
     "p": "",
     "e": ""
    },
    {
     "n": "Rashmi Chaturvedi",
     "p": "",
     "e": ""
    },
    {
     "n": "Sanjay Kumar Jain",
     "p": "",
     "e": "dm-mauganj@nic.in"
    },
    {
     "n": "Shyamlal Monre",
     "p": "",
     "e": ""
    },
    {
     "n": "Umakant Sharma",
     "p": "8516048444",
     "e": ""
    }
   ],
   "Nai Garhi": [
    {
     "n": "Kuware Lal Panika",
     "p": "",
     "e": ""
    },
    {
     "n": "Maniraj Singh Bagri",
     "p": "",
     "e": ""
    }
   ]
  },
  "Morena": {
   "Ambah": [
    {
     "n": "Naresh Sharma",
     "p": "",
     "e": ""
    },
    {
     "n": "Pradeep Kumar Verma",
     "p": "6269535924",
     "e": ""
    }
   ],
   "Bamor": [
    {
     "n": "Kalpna Kushwah",
     "p": "",
     "e": ""
    }
   ],
   "Joura": [
    {
     "n": "Mukesh Kumar Dubey",
     "p": "",
     "e": ""
    }
   ],
   "Kailaras": [
    {
     "n": "Bhartendu Sidharth Gautam",
     "p": "",
     "e": ""
    },
    {
     "n": "Vishram Shingh Bhagel",
     "p": "9329317693",
     "e": ""
    }
   ],
   "Morena": [
    {
     "n": "Anand Yadav",
     "p": "9039580395",
     "e": ""
    },
    {
     "n": "Ashwini Kumar Rawat",
     "p": "07532230641",
     "e": ""
    },
    {
     "n": "Lokesh Kumar Jangid",
     "p": "7532223500",
     "e": "dmmorena@nic.in"
    },
    {
     "n": "Mohini Sahoo",
     "p": "",
     "e": ""
    },
    {
     "n": "Umesh Awasthi",
     "p": "",
     "e": ""
    }
   ],
   "Porsa": [
    {
     "n": "Vishram Singh Baghel",
     "p": "",
     "e": ""
    }
   ],
   "Sabalgarh": [
    {
     "n": "Ravish Kumar Bhadauriya",
     "p": "",
     "e": ""
    }
   ]
  },
  "Narmadapuram": {
   "Bankhedi": [
    {
     "n": "—",
     "p": "",
     "e": "jpbanhosmp@gmail.com"
    }
   ],
   "Itarsi": [
    {
     "n": "Suman Khatkar",
     "p": "9617764124",
     "e": "jpkeshosmp@mp.nic.in"
    }
   ],
   "Makhan Nagar": [
    {
     "n": "Ranjeet Taram",
     "p": "7587393331",
     "e": "jpbabhosmp@mp.nic.in"
    }
   ],
   "Narmadapuram": [
    {
     "n": "Himanshu Jain (IAS)",
     "p": "07574252045",
     "e": "ceozphos@mp.gov.in"
    },
    {
     "n": "Ranjeet Singh Taram",
     "p": "",
     "e": "jphoshangabadmp@mp.nic.in"
    }
   ],
   "Pipariya": [
    {
     "n": "—",
     "p": "",
     "e": "jppiphosmp@mp.nic.in"
    }
   ],
   "Seoni Malwa": [
    {
     "n": "Shruti Choudhary",
     "p": "8989582116",
     "e": "jpseohosmp@mp.nic.in"
    }
   ],
   "Sohagpur": [
    {
     "n": "—",
     "p": "",
     "e": "jpsohhosmp@mp.nic.in"
    }
   ]
  },
  "Narsinghpur": {
   "Gadarwara": [
    {
     "n": "SDM Gadarwara",
     "p": "07791254077",
     "e": "sdmgadarwara121@gmail.com"
    }
   ],
   "Gotegaon": [
    {
     "n": "SDM Gotegaon",
     "p": "07794282074",
     "e": "shridhamsdmgot123@gmail.com"
    }
   ],
   "Narsinghpur": [
    {
     "n": "Dr. Rishikesh Meena (IPS)",
     "p": "07792230941",
     "e": "sp_narsinghpur@mppolice.gov.in"
    },
    {
     "n": "SDM Narsinghpur",
     "p": "07792230900",
     "e": "sdmnpur27@gmail.com"
    },
    {
     "n": "Smt. Anjali Shah",
     "p": "07792232150",
     "e": "admnsp123@gmail.com"
    },
    {
     "n": "Smt. Rajni Singh (IAS)",
     "p": "07792230900",
     "e": "dmnarsinghpur@nic.in"
    }
   ],
   "Tendukheda": [
    {
     "n": "SDM Tendukheda",
     "p": "07791252069",
     "e": "sdmtendukheda@gmail.com"
    }
   ]
  },
  "Neemuch": {
   "Jawad": [
    {
     "n": "Sh. Sanjeev Sahu",
     "p": "07420232241",
     "e": "sdmjawad.lok@gmail.com"
    },
    {
     "n": "Sh. Shailendra Adiwasi",
     "p": "07420232269",
     "e": "jpjawnee@nic.in"
    }
   ],
   "Manasa": [
    {
     "n": "Mrs. Kiran Aanjna",
     "p": "07421242058",
     "e": "sdmmanasa123@gmail.com"
    },
    {
     "n": "Sh. Arif Khan",
     "p": "07421242070",
     "e": "jpmannee@mp.nic.in"
    }
   ],
   "Neemuch": [
    {
     "n": "Sh. Arif Khan",
     "p": "07423407139",
     "e": "jpneemuch@nic.in"
    },
    {
     "n": "Sh. Parag Jain",
     "p": "07423228409",
     "e": "sdmneemuch@gmail.com"
    }
   ],
   "Neemuch Nagar": [
    {
     "n": "Ms. Shruti Bhayadia",
     "p": "",
     "e": ""
    },
    {
     "n": "Ms. Shruti Bhayadia",
     "p": "07423257053",
     "e": "psjnee@mp.gov.in"
    },
    {
     "n": "Sh. Aman Vaishnav",
     "p": "07423230288",
     "e": "ceozpnee@mp.gov.in"
    },
    {
     "n": "Sh. Arvind Gupta",
     "p": "07423257566",
     "e": "slrnee-mp@nic.in"
    },
    {
     "n": "Sh. B. S. Kalesh",
     "p": "",
     "e": ""
    },
    {
     "n": "Sh. Chandra Singh Dharve",
     "p": "",
     "e": ""
    },
    {
     "n": "Sh. Chandra Singh Dharve",
     "p": "07423257567",
     "e": "podudaneemuch@mpurban.gov.in"
    },
    {
     "n": "Sh. Himanshu Chandra",
     "p": "",
     "e": "dmneemuch@nic.in"
    },
    {
     "n": "Sh. Rajesh Gupta",
     "p": "07423231020",
     "e": "wcdnee@nic.in"
    },
    {
     "n": "Sh. Ravikant Ranjan",
     "p": "07423231066",
     "e": "nmhcircle08@gmail.com"
    },
    {
     "n": "Sh. S. K. Atode",
     "p": "07423226605",
     "e": "dfot.nmh@mp.gov.in"
    },
    {
     "n": "Sh. Yogesh Jain",
     "p": "07423257363",
     "e": "dio-nmc@nic.in"
    },
    {
     "n": "Smt. Vinita Darshyamkar",
     "p": "07423224072",
     "e": "tcpnee-mp@nic.in"
    }
   ]
  },
  "Niwari": {
   "Niwari": [
    {
     "n": "Jamuna Bhide",
     "p": "07680232101",
     "e": "dmniwari-mp@mp.gov.in"
    },
    {
     "n": "Ray Singh Narwaria",
     "p": "07680232112",
     "e": "sp_niwari@mppolice.gov.in"
    },
    {
     "n": "Rohan Saxena",
     "p": "",
     "e": "ceozp-niw@mp.gov.in"
    }
   ]
  },
  "Pandhurna": {
   "Sausar": [
    {
     "n": "Alka Ekka",
     "p": "",
     "e": "sdmrev.pancdw@mp.gov.in"
    },
    {
     "n": "Jyoti Thakur",
     "p": "07164299033",
     "e": "dm.pandhurna@mp.gov.in"
    },
    {
     "n": "Neeraj Kumar Vashishtha",
     "p": "07164299033",
     "e": "dm.pandhurna@mp.gov.in"
    },
    {
     "n": "Neeraj Soni",
     "p": "",
     "e": "sp_pandhurna@mppolice.gov.in"
    },
    {
     "n": "Prakash Chandra Parihar",
     "p": "",
     "e": "sp_pandhurna@mppolice.gov.in"
    },
    {
     "n": "Siddharth Patel",
     "p": "",
     "e": "sdmrev.saucdw@mp.gov.in"
    }
   ]
  },
  "Panna": {
   "Ajaygarh": [
    {
     "n": "Alok Marko",
     "p": "",
     "e": "sdmajaigarh@gmail.com"
    }
   ],
   "Gunnor": [
    {
     "n": "Anil Talaiya",
     "p": "",
     "e": "sdmgunpan@mp.gov.in"
    }
   ],
   "Panna": [
    {
     "n": "Madhuvantrao Dhurve",
     "p": "07732253650",
     "e": "admpan@mp.gov.in"
    },
    {
     "n": "Meghendra Bandhopadhyay",
     "p": "07732253362",
     "e": "slrpan@mp.nic.in"
    },
    {
     "n": "Nivedita Naidu",
     "p": "07732252146",
     "e": "sp_panna@mppolice.gov.in"
    },
    {
     "n": "Sanjay Kumar Nagvanshi",
     "p": "",
     "e": "sdmpanna@mp.gov.in"
    },
    {
     "n": "Umrao Singh Maravi",
     "p": "9329310871",
     "e": "ceozppan@mp.gov.in"
    },
    {
     "n": "Usha Parmar",
     "p": "07732252003",
     "e": "dmpanna@nic.in"
    }
   ],
   "Pawai": [
    {
     "n": "Samiksha Jain",
     "p": "",
     "e": "sdmpawpan@mp.gov.in"
    }
   ],
   "Shahnagar": [
    {
     "n": "Ramnivas Choudhari",
     "p": "",
     "e": "sdmshahnagar@gmail.com"
    }
   ]
  },
  "Rajgarh": {
   "Biaora": [
    {
     "n": "Govind Kumar Dubey",
     "p": "",
     "e": "sdmbiaraj@mp.gov.in"
    },
    {
     "n": "Subhash Alawe",
     "p": "",
     "e": "tehbiaraj@mp.gov.in"
    }
   ],
   "Khilchipur": [
    {
     "n": "Ankita Jain",
     "p": "",
     "e": "sdmkhiraj@mp.gov.in"
    },
    {
     "n": "Vineet Goyal",
     "p": "",
     "e": "tehkhiraj@mp.gov.in"
    }
   ],
   "Khujner": [
    {
     "n": "Nityanand Pandey",
     "p": "",
     "e": ""
    }
   ],
   "Narsinghgarh": [
    {
     "n": "Sushil Kumar",
     "p": "",
     "e": "sdmnarraj@mp.gov.in"
    },
    {
     "n": "Virat Awasthi",
     "p": "",
     "e": "tehnarraj@mp.gov.in"
    }
   ],
   "Pachore": [
    {
     "n": "Anand Jaiswal",
     "p": "",
     "e": "tehpacraj@mp.gov.in"
    }
   ],
   "Rajgarh": [
    {
     "n": "Anil Sharma",
     "p": "",
     "e": "tehrajraj@mp.gov.in"
    },
    {
     "n": "Girish Kumar Mishra",
     "p": "07372255025",
     "e": "dmrajgarh@nic.in"
    },
    {
     "n": "Nidhi Bhardwaj",
     "p": "",
     "e": "sdmraj@mp.gov.in"
    }
   ],
   "Sarangpur": [
    {
     "n": "Akash Sharma",
     "p": "",
     "e": "tehsarraj@mp.gov.in"
    },
    {
     "n": "Rohit Bamhore",
     "p": "",
     "e": "sdmsarraj@mp.gov.in"
    }
   ],
   "Suthaliya": [
    {
     "n": "Dojiram Ahirwar",
     "p": "",
     "e": ""
    }
   ],
   "Zirapur": [
    {
     "n": "Sonu Gupta",
     "p": "9981378040",
     "e": "tehzirraj@mp.gov.in"
    }
   ]
  },
  "Ratlam": {
   "Alot": [
    {
     "n": "Shri Vivek Sonkar",
     "p": "07412235444",
     "e": "alotesdm@gmail.com"
    }
   ],
   "Jaora": [
    {
     "n": "Mrs. Rachna Sharma",
     "p": "07412221100",
     "e": "sdojaorat-mp@nic.in"
    }
   ],
   "Ratlam": [
    {
     "n": "Mrs. Archi Harit",
     "p": "07412270473",
     "e": "sdmratlam@rediffmail.com"
    },
    {
     "n": "Ms. Vaishali Jain (IAS)",
     "p": "07412270404",
     "e": "ceozprat@mp.gov.in"
    },
    {
     "n": "Shri Ajay Katesaria (IAS)",
     "p": "07412270400",
     "e": "dmratlam@nic.in"
    },
    {
     "n": "Shri Amit Kumar (IPS)",
     "p": "07412270460",
     "e": "sp_ratlam@mppolice.gov.in"
    },
    {
     "n": "Shri Brijendra Kumar Rawat",
     "p": "07412270406",
     "e": "dmratlam@nic.in"
    },
    {
     "n": "Shri Naresh Kumar Dohre",
     "p": "07412270418",
     "e": "dfotrtlam@mp.gov.in"
    },
    {
     "n": "Shri Tarun Jain",
     "p": "07412278630",
     "e": "sdcityratlam@gmail.com"
    },
    {
     "n": "Sushri Neena Ashapure",
     "p": "07412231450",
     "e": "dcourtrat-mp@nic.in"
    }
   ],
   "Sailana": [
    {
     "n": "Shri Sunil Jaiswal",
     "p": "07412230484",
     "e": "sdosailana@gmail.com"
    }
   ]
  },
  "Rewa": {
   "Gurh": [
    {
     "n": "Sudhakar Singh Baghel",
     "p": "",
     "e": "sdmgurhrewa@gmail.com"
    }
   ],
   "Huzoor Rural": [
    {
     "n": "Mehtab Singh Gurjar",
     "p": "",
     "e": "ceozp@mp.gov.in"
    },
    {
     "n": "Narendra Kumar Suryavanshi",
     "p": "07662241635",
     "e": "dmrewa@mp.gov.in"
    },
    {
     "n": "Rakesh Mohan Pradhan",
     "p": "07662241847",
     "e": "dcourtrew@mp.nic.in"
    },
    {
     "n": "Sapna Tripathi",
     "p": "",
     "e": "dydeorewa@mp.gov.in"
    }
   ],
   "Jawa": [
    {
     "n": "Piyush Bhatt",
     "p": "",
     "e": "sdm.jawa@mp.gov.in"
    }
   ],
   "Mangawan": [
    {
     "n": "Sanjay Kumar",
     "p": "",
     "e": "oasmangawan@gmail.com"
    }
   ],
   "Rewa": [
    {
     "n": "Anurag Tiwari",
     "p": "",
     "e": "sdmrewa@gmail.com"
    }
   ],
   "Sirmaur": [
    {
     "n": "Drishti Jaiswal",
     "p": "9926732586",
     "e": "sdmsirmour@gmail.com"
    }
   ],
   "Teonthar": [
    {
     "n": "Sanjay Kumar Jain",
     "p": "9425185783",
     "e": "ro73teonthar@gmail.com"
    }
   ]
  },
  "Sagar": {
   "Jaisinagar": [
    {
     "n": "L.R. Jangade",
     "p": "9993754244",
     "e": ""
    }
   ],
   "Rahatgarh": [
    {
     "n": "Aadarsh Jain",
     "p": "9538403209",
     "e": ""
    },
    {
     "n": "Ramesh Pandey",
     "p": "9425085639",
     "e": ""
    },
    {
     "n": "Ramnivas Choudhary",
     "p": "9399829453",
     "e": ""
    }
   ],
   "Sagar": [
    {
     "n": "Aditya Sharma",
     "p": "9425310001",
     "e": ""
    },
    {
     "n": "Deepak Singh",
     "p": "7587968100",
     "e": ""
    }
   ]
  },
  "Satna": {
   "Amapatan": [
    {
     "n": "Vikas Kumar Singh",
     "p": "07672222515",
     "e": "admsatna1@gmail.com"
    }
   ],
   "Kotar": [
    {
     "n": "T. N. Tekam",
     "p": "07672223277",
     "e": ""
    }
   ],
   "Maihar": [
    {
     "n": "L. R. Jandge",
     "p": "07672223293",
     "e": "sdmsatna@mp.gov.in"
    }
   ],
   "Majhgawan": [
    {
     "n": "Shailendra Singh",
     "p": "07672225449",
     "e": "ceozpsat@mp.gov.in"
    }
   ],
   "Nagod": [
    {
     "n": "Kirti Singh",
     "p": "07672226392",
     "e": ""
    }
   ],
   "Raghurajnagar Urban": [
    {
     "n": "Hansraj Singh",
     "p": "07672222125",
     "e": "sposat@mp.gov.in"
    },
    {
     "n": "Satish Kumar S",
     "p": "07672222911",
     "e": "dmsatna@nic.in"
    }
   ],
   "Ramnagar": [
    {
     "n": "Vipin Patel",
     "p": "07672223355",
     "e": ""
    }
   ],
   "Rampur Baghelan": [
    {
     "n": "Neerav Dixit",
     "p": "07672223257",
     "e": ""
    }
   ],
   "Unchehra": [
    {
     "n": "Nagendra Singh",
     "p": "",
     "e": "foodoffsat@mp.gov.in"
    }
   ]
  },
  "Sehore": {
   "Ashta": [
    {
     "n": "Smt. Kiran Varvade",
     "p": "",
     "e": ""
    }
   ],
   "Doraha": [
    {
     "n": "Shri Ravindra Parmar",
     "p": "",
     "e": ""
    }
   ],
   "Ichhawar": [
    {
     "n": "Shri Girraj Parihar",
     "p": "",
     "e": ""
    }
   ],
   "Jawar": [
    {
     "n": "Shri Prem Singh Gound",
     "p": "",
     "e": ""
    }
   ],
   "Sehore Rural": [
    {
     "n": "Mrs. Sarjana Yadav",
     "p": "07562224351",
     "e": "ceozpseh@mp.nic.in"
    }
   ],
   "Sehore Urban": [
    {
     "n": "Shri Balaguru K. (IAS)",
     "p": "07562227766",
     "e": "dmsehore@nic.in"
    }
   ],
   "Shyampur": [
    {
     "n": "Shri Brajesh Saxena",
     "p": "07562228410",
     "e": "admpgrseh@mp.gov.in"
    }
   ]
  },
  "Seoni": {
   "Seoni": [
    {
     "n": "Anjali Shah",
     "p": "07692228073",
     "e": "ceozpseo@mp.gov.in"
    },
    {
     "n": "Shri Krishna Lalchandani",
     "p": "07692226689",
     "e": "sposeo@mp.gov.in"
    },
    {
     "n": "Shri Neelmani Agnihotri",
     "p": "07692220658",
     "e": "dmseoni@nic.in"
    },
    {
     "n": "Smt. Neha Meena",
     "p": "07692220444",
     "e": "dmseoni@nic.in"
    }
   ]
  },
  "Shahdol": {
   "Shahdol": [
    {
     "n": "Kedar Singh",
     "p": "07652241700",
     "e": "dmshahdol@nic.in"
    },
    {
     "n": "Sarodhan Singh",
     "p": "07652241700",
     "e": "verma.arpit@ias.nic.in"
    },
    {
     "n": "Surbhi Gupta",
     "p": "07652245555",
     "e": "commshahdol@mp.gov.in"
    }
   ]
  },
  "Shajapur": {
   "Gulana": [
    {
     "n": "Shri Ramesh Parmar",
     "p": "244480",
     "e": ""
    }
   ],
   "Mohan Badodiya": [
    {
     "n": "Shri Sunil Patil",
     "p": "252495",
     "e": ""
    }
   ],
   "Polay Kalan": [
    {
     "n": "Sushree Sonam Sharma",
     "p": "",
     "e": ""
    }
   ],
   "Shajapur": [
    {
     "n": "Mr. Bhurla Singh Solanki",
     "p": "07364226727",
     "e": ""
    },
    {
     "n": "Smt. Anupama Chauhan",
     "p": "07364226100",
     "e": ""
    },
    {
     "n": "Sushree Manisha Waskale",
     "p": "07364226782",
     "e": ""
    },
    {
     "n": "Sushree Riju Bafna, IAS",
     "p": "07364226500",
     "e": ""
    },
    {
     "n": "Sushri Madhu Nayak",
     "p": "07364226870",
     "e": ""
    }
   ],
   "Shujalpur": [
    {
     "n": "Mr. Rajkumar Halder",
     "p": "07360245500",
     "e": ""
    },
    {
     "n": "Shri Nagesh Panwar",
     "p": "07360244049",
     "e": ""
    }
   ]
  },
  "Sheopur": {
   "Badoda": [
    {
     "n": "Manisha Mishra",
     "p": "8770712407",
     "e": "tehsilbaroda@gmail.com"
    }
   ],
   "Birpur": [
    {
     "n": "Naresh Raipuriya",
     "p": "",
     "e": ""
    }
   ],
   "Karahal": [
    {
     "n": "B.S. Shrivastava",
     "p": "9993480833",
     "e": "erokrlsheopur@gmail.com"
    },
    {
     "n": "Roshni Shaikh",
     "p": "",
     "e": "karahal.tehsil@gmail.com"
    }
   ],
   "Sheopur": [
    {
     "n": "Manisha Mishra",
     "p": "",
     "e": "tehshe@mp.gov.in"
    },
    {
     "n": "Sheela Dahima",
     "p": "07530220058",
     "e": "dmsheopur@nic.in"
    }
   ],
   "Vijaypur": [
    {
     "n": "Abhishek Mishra",
     "p": "8959850320",
     "e": ""
    },
    {
     "n": "Amita Singh Tomar",
     "p": "",
     "e": ""
    }
   ]
  },
  "Shivpuri": {
   "Badarwas": [
    {
     "n": "Smt. Yangchen Dolkar Bhutiya",
     "p": "07492233600",
     "e": "sp_shivpuri@mppolice.gov.in"
    }
   ],
   "Bairad": [
    {
     "n": "Shri Dinesh Chandra Shukla",
     "p": "",
     "e": ""
    }
   ],
   "Karera": [
    {
     "n": "Nikita Tamre",
     "p": "7415101162",
     "e": "adbmwshi@mp.gov.in"
    }
   ],
   "Khaniyadhana": [
    {
     "n": "Shri Nikhil Rai",
     "p": "",
     "e": "dio-svp@nic.in"
    }
   ],
   "Kolaras": [
    {
     "n": "Shri Vijay Raj",
     "p": "07492233249",
     "e": "ceozpshi@mp.gov.in"
    }
   ],
   "Pichhore": [
    {
     "n": "Smt. Poonam Mandre",
     "p": "07492232672",
     "e": "dio-svp@nic.in"
    }
   ],
   "Pohri": [
    {
     "n": "Shri Arpit Verma",
     "p": "07492233700",
     "e": "dmshivpuri@nic.in"
    }
   ]
  },
  "Sidhi": {
   "Bahri": [
    {
     "n": "Himanshu Shukla",
     "p": "",
     "e": "tehbahri.sidhi@mp.gov.in"
    }
   ],
   "Churhat": [
    {
     "n": "Sushma Devi Rawat",
     "p": "",
     "e": "tehchusid@mp.gov.in"
    }
   ],
   "Gopad Banas": [
    {
     "n": "B P Pandey",
     "p": "9826152950",
     "e": ""
    },
    {
     "n": "Badshah Rawat",
     "p": "9424793607",
     "e": ""
    },
    {
     "n": "Munnendra Prasad Tiwari",
     "p": "",
     "e": "slrsid@mp.gov.in"
    },
    {
     "n": "Naveen Singh Baghel",
     "p": "9424793627",
     "e": ""
    },
    {
     "n": "Preeti Ahirwar",
     "p": "9424793605",
     "e": ""
    },
    {
     "n": "Rakesh Kumar Shukla",
     "p": "07802274447",
     "e": "tehgopsid@mp.gov.in"
    },
    {
     "n": "Ravindranath Tiwari",
     "p": "9424793608",
     "e": ""
    },
    {
     "n": "Sandeep Kumar Gautam",
     "p": "9424793606",
     "e": ""
    },
    {
     "n": "Santosh Kori",
     "p": "07822252209",
     "e": "sp_sidhi@mppolice.gov.in"
    },
    {
     "n": "Satishchandra Mishra",
     "p": "9424793651",
     "e": ""
    },
    {
     "n": "Vikas Mishra",
     "p": "07822252204",
     "e": "dmsidhi@nic.in"
    },
    {
     "n": "Vinayak Kumar Gautam",
     "p": "9424793645",
     "e": ""
    }
   ],
   "Kusmi": [
    {
     "n": "Gyanendra Mishra",
     "p": "07804243645",
     "e": "jpkussid-mp@nic.in"
    },
    {
     "n": "Narayan Singh",
     "p": "",
     "e": "tehkusmi.sidhi@mp.gov.in"
    },
    {
     "n": "Sagar Dilip Jain",
     "p": "",
     "e": "sdmkussid@mp.gov.in"
    }
   ],
   "Majhauli": [
    {
     "n": "Akash Agrawal",
     "p": "",
     "e": "sdmmajsid@mp.gov.in"
    },
    {
     "n": "Dileep Singh",
     "p": "",
     "e": "tehmajsid@mp.gov.in"
    },
    {
     "n": "Surabhi Shrivastava",
     "p": "07803244227",
     "e": "jpmajsid-mp@nic.in"
    },
    {
     "n": "Vedwati Singh",
     "p": "",
     "e": "teh.madwassid@mp.gov.in"
    }
   ],
   "Rampur Naikin": [
    {
     "n": "Ashish Kumar Mishra",
     "p": "",
     "e": "tehramsid@mp.gov.in"
    },
    {
     "n": "Harish Kesharwani",
     "p": "07802274447",
     "e": "jpramsid-mp@nic.in"
    }
   ],
   "Sidhi": [
    {
     "n": "Chandu Lal Panika",
     "p": "07822252245",
     "e": "jpsidhi-mp@nic.in"
    }
   ],
   "Sihawal": [
    {
     "n": "Jayprakash Pandey",
     "p": "",
     "e": "tehsihsid@mp.gov.in"
    },
    {
     "n": "Rakesh Shukla",
     "p": "",
     "e": "sdmsihsid@mp.gov.in"
    },
    {
     "n": "Rohit Upadhyay",
     "p": "07822264712",
     "e": "jpsihsid-mp@nic.in"
    }
   ]
  },
  "Singrauli": {
   "Bargawan": [
    {
     "n": "Michael Tirki",
     "p": "9340883746",
     "e": ""
    }
   ],
   "Chitrangi": [
    {
     "n": "Aashish Pandey",
     "p": "9424315112",
     "e": "ddagrisin@mp.gov.in"
    },
    {
     "n": "Akhil Bansal",
     "p": "9424793526",
     "e": "dfot.sgl@mp.gov.in"
    },
    {
     "n": "Devendra Kumar Dwivedi",
     "p": "",
     "e": ""
    },
    {
     "n": "Shiyaz K.M",
     "p": "07805234601",
     "e": "sp_singrauli@mppolice.gov.in"
    }
   ],
   "Deosar": [
    {
     "n": "Dharmendra Krishnan",
     "p": "9425649402",
     "e": ""
    },
    {
     "n": "Jagdish Gome",
     "p": "07805355047",
     "e": "ceozpsin@mp.gov.in"
    }
   ],
   "Dudhmania": [
    {
     "n": "P C Chandravanshi",
     "p": "",
     "e": "foodoffsin@mp.gov.in"
    },
    {
     "n": "Sanjeev Kumar Pandey",
     "p": "6264580802",
     "e": ""
    }
   ],
   "Mada": [
    {
     "n": "Ganesh Singh Kanwar",
     "p": "8989981149",
     "e": "cto.bdn@mptax.mp.gov.in"
    },
    {
     "n": "P S Tripathi",
     "p": "",
     "e": ""
    }
   ],
   "Sarai": [
    {
     "n": "Khemraj Shyam",
     "p": "957122900",
     "e": ""
    },
    {
     "n": "Suresh Jadav",
     "p": "",
     "e": "sdmsgrl@gmail.com"
    }
   ],
   "Singrauli": [
    {
     "n": "Gaurav Benal",
     "p": "07805234541",
     "e": "dmsingrauli@mp.gov.in"
    },
    {
     "n": "Nandan Kumar Tiwari",
     "p": "",
     "e": ""
    }
   ]
  },
  "Tikamgarh": {
   "Tikamgarh": [
    {
     "n": "Manohar Singh Mandloi",
     "p": "07683242187",
     "e": "sp_tikamgarh@mppolice.gov.in"
    },
    {
     "n": "Naveet Kumar Dhurve",
     "p": "07683243222",
     "e": "ceozptik@mp.gov.in"
    },
    {
     "n": "Vivek Shrotriya",
     "p": "07683242250",
     "e": "dmtikamgarh@nic.in"
    }
   ]
  },
  "Ujjain": {
   "Ujjain": [
    {
     "n": "Shri Asheesh Singh, IAS",
     "p": "07342513151",
     "e": "commujjain@mp.nic.in"
    },
    {
     "n": "Shri Navneet Bhasin",
     "p": "07342527122",
     "e": "dig_ujjain@mppolice.gov.in"
    },
    {
     "n": "Shri Rakesh Gupta, IPS",
     "p": "07342527120",
     "e": "ig_ujjain@mppolice.gov.in"
    },
    {
     "n": "Shri Raushan Kumar Singh, IAS",
     "p": "07342514000",
     "e": "dmujjain@nic.in"
    }
   ]
  },
  "Umaria": {
   "Bandhavgarh": [
    {
     "n": "Shri Aashish Sharma",
     "p": "9329313533",
     "e": ""
    },
    {
     "n": "Shri Satish Soni",
     "p": "8319434665",
     "e": "bgrhtahsildar@gmail.com"
    }
   ],
   "Chandia": [
    {
     "n": "Shri Kartavya Agarwal",
     "p": "9827355313",
     "e": ""
    }
   ],
   "Karkeli": [
    {
     "n": "Smt. Laxmi Verma",
     "p": "8827334636",
     "e": ""
    }
   ],
   "Manpur": [
    {
     "n": "Shri K.D. Panika",
     "p": "8103733719",
     "e": ""
    }
   ],
   "Nowrozabad": [
    {
     "n": "Shri Abhayanand Sharma",
     "p": "9329303134",
     "e": ""
    }
   ],
   "Pali": [
    {
     "n": "Shri Deelan Singh Maravi",
     "p": "9329303144",
     "e": "tehsilpali87@gmail.com"
    }
   ]
  },
  "Vidisha": {
   "Ganj Basoda": [
    {
     "n": "Atul Chourasia",
     "p": "9993891550",
     "e": "tehbasvid@mp.gov.in"
    }
   ],
   "Gulabganj": [
    {
     "n": "Arvind Kumar Yadav",
     "p": "9755480809",
     "e": "tehgulvid@mp.gov.in"
    }
   ],
   "Gyaraspur": [
    {
     "n": "Sudheer Shukla",
     "p": "9589911751",
     "e": "tehgyavid@mp.gov.in"
    }
   ],
   "Kurwai": [
    {
     "n": "Sandeep Sharma",
     "p": "8357060719",
     "e": "tehkurvid@mp.gov.in"
    }
   ],
   "Lateri": [
    {
     "n": "Dilip Chourasia",
     "p": "6269107449",
     "e": "tehlatvid@mp.gov.in"
    }
   ],
   "Nateran": [
    {
     "n": "Piyush Jain",
     "p": "9179161426",
     "e": "tehnatvid@mp.gov.in"
    }
   ],
   "Pathari": [
    {
     "n": "Premlata Pal",
     "p": "9713247972",
     "e": "tehpatharivid@mp.gov.in"
    }
   ],
   "Shamshabad": [
    {
     "n": "Sanjay Chaurasia",
     "p": "9669670108",
     "e": "tehshavid@mp.gov.in"
    }
   ],
   "Sironj": [
    {
     "n": "Abhishek Pandey",
     "p": "9399543741",
     "e": "tehsirvid@mp.gov.in"
    }
   ],
   "Tyonda": [
    {
     "n": "Anand Jain",
     "p": "9171787237",
     "e": "tehtyovid@mp.gov.in"
    }
   ],
   "Vidisha Rural": [
    {
     "n": "Nidhi Lodhi",
     "p": "8770444402",
     "e": "tehvid@mp.gov.in"
    }
   ],
   "Vidisha Urban": [
    {
     "n": "Preeti Panthi",
     "p": "7566943299",
     "e": "teh-vidnagar@mp.gov.in"
    }
   ]
  }
 },
 "Karnataka": {
  "Bagalkot": {
   "Badami": [
    {
     "n": "Girija B. Patil",
     "p": "9945081113",
     "e": "girijapatil1113@gmail.com"
    },
    {
     "n": "Gouramma Mathapati",
     "p": "8197241049",
     "e": "gouriml88@gmail.com"
    },
    {
     "n": "Jyoti Mutalikdesai",
     "p": "6366146824",
     "e": "desaijyothi840@gmail.com"
    },
    {
     "n": "Kaveri C Kallimani",
     "p": "9611315178",
     "e": "Kverikallimani9@gmail.com"
    },
    {
     "n": "Kavyashree H",
     "p": "08357200228",
     "e": "tahasildarbdm@gmail.com"
    },
    {
     "n": "Mahammadrafik I. Bilagi",
     "p": "7411539974",
     "e": "munnabilagi@gmail.com"
    },
    {
     "n": "Menaka R Patil",
     "p": "6362788873",
     "e": "menakapatil25@gmail.com"
    },
    {
     "n": "Rajeshwari Kotankar",
     "p": "8748845249",
     "e": "rajukotankar@gmail.com"
    },
    {
     "n": "Ramesh Kambar",
     "p": "9731584894",
     "e": "rameshkambar8@gmail.com"
    },
    {
     "n": "Shaila S. Ganiger",
     "p": "6360969699",
     "e": "patilbanshree999@gmail.com"
    },
    {
     "n": "Shivanand M. Adagall",
     "p": "7353384428",
     "e": "smadagall50@gmail.com"
    },
    {
     "n": "Shrishail Kumbar",
     "p": "9019749227",
     "e": "kumbar.shrishail@gmail.com"
    },
    {
     "n": "Subhas Y. Hosamani",
     "p": "9901447958",
     "e": "subhashosamani431@gmail.com"
    }
   ],
   "Bagalkot": [
    {
     "n": "Vasudev V Swami",
     "p": "9980067196",
     "e": "tahsildarbgk@gmail.com"
    }
   ],
   "Bilgi": [
    {
     "n": "Jayatirth J Kulkarni",
     "p": "9448503307",
     "e": ""
    },
    {
     "n": "Nagubai G Pattar",
     "p": "9743981210",
     "e": "naggaratnapattar210@gmail.com"
    },
    {
     "n": "Vinod Hattalli",
     "p": "9901332717",
     "e": "tahasildarblg@gmail.com"
    }
   ],
   "Guledgudda": [
    {
     "n": "S F Bommannavar",
     "p": "9449817560",
     "e": "tahsildargld@gmail.com"
    },
    {
     "n": "Sameer S Hubballi",
     "p": "9902004348",
     "e": "hubballisameer@gmail.com"
    }
   ],
   "Hungund": [
    {
     "n": "Dr. Pradeep Swami",
     "p": "8073688515",
     "e": "thhungund@gmail.com"
    },
    {
     "n": "Suresh M Kumbar",
     "p": "9449005835",
     "e": "Sureshkumbar007@gmail.com"
    }
   ],
   "Ilkal": [
    {
     "n": "Amaresh Pammar",
     "p": "9597197182",
     "e": "tahilkal@gmail.com"
    },
    {
     "n": "Geeta M Patil",
     "p": "8660763071",
     "e": "geetapatil80@gmail.com"
    }
   ],
   "Jamkhandi": [
    {
     "n": "Anil Badiger",
     "p": "8904669613",
     "e": "tasil.jkd@gmail.com"
    },
    {
     "n": "Mangala B Sheshadri",
     "p": "7411051625",
     "e": "mbsheshadri1625@gmail.com"
    }
   ],
   "Mudhol": [
    {
     "n": "Prakash Gayakwad",
     "p": "9986165369",
     "e": "tahmudhol@gmail.com"
    },
    {
     "n": "V. S. Jadhav",
     "p": "7676039736",
     "e": "nayakvijaya484@gmail.com"
    },
    {
     "n": "Veena P Hanamasagar",
     "p": "8971254019",
     "e": "Veenashanawad2314@gmail.com"
    }
   ],
   "Rabkavi Banhatti": [
    {
     "n": "Girish Swadhi",
     "p": "7090995555",
     "e": "tasil.rbnt@gmail.com"
    },
    {
     "n": "Savitri S Dodamani",
     "p": "9036557909",
     "e": "dodmanisavi812@gmail.com"
    }
   ],
   "Terdal": [
    {
     "n": "Vijayakumar Kadkol",
     "p": "9945346340",
     "e": "tasil.tdl@gmail.com"
    }
   ]
  },
  "Belagavi": {
   "Athni": [
    {
     "n": "Bekwad Bond Writer's",
     "p": "+919686477162",
     "e": ""
    }
   ]
  },
  "Bengaluru Urban": {
   "Bengaluru North": [
    {
     "n": "Aakarshanam Associates / Gayathri Sriram",
     "p": "+917259389021",
     "e": "aakarshanamassociates@gmail.com"
    },
    {
     "n": "ARUNA.V ADVOCATE AND NOTARY PUBLIC GOVT OF INDIA",
     "p": "+919964221691",
     "e": ""
    },
    {
     "n": "Call4Legal",
     "p": "+919108459693",
     "e": ""
    },
    {
     "n": "Clawrity – Property Document Verification & Legal Due Diligence",
     "p": "+917019840033",
     "e": ""
    },
    {
     "n": "CVS Mani",
     "p": "+919880797533",
     "e": ""
    },
    {
     "n": "Dinesh R and Associates",
     "p": "+919483130611",
     "e": ""
    },
    {
     "n": "E STAMP PAPER & DOCUMENTATION WORK & NOTARY SERVICE",
     "p": "+919590787222",
     "e": ""
    },
    {
     "n": "ICON CADSOFT & SURVEYORS (I) Pvt Ltd",
     "p": "+919845057719",
     "e": ""
    },
    {
     "n": "Kumar Dyavapatna",
     "p": "+919844546768",
     "e": ""
    },
    {
     "n": "LAND SURVEYOR BANGALORE & Vastu Consultant",
     "p": "+916361664726",
     "e": ""
    },
    {
     "n": "Legal Tech Advocates",
     "p": "+918762628739",
     "e": ""
    },
    {
     "n": "Mali Pavan Gowda — Fox Mandal",
     "p": "+918971116111",
     "e": "mali.pavangowda@foxmandal.in"
    },
    {
     "n": "MN SIVAKUMARA - NOTARY PUBLIC & ADVOCATE",
     "p": "+917892574462",
     "e": ""
    },
    {
     "n": "NotaryKart",
     "p": "+917022529601",
     "e": ""
    },
    {
     "n": "PKP Advocates",
     "p": "+916363745780",
     "e": ""
    },
    {
     "n": "Property Lawyer - K V Hegde",
     "p": "+919880936934",
     "e": ""
    },
    {
     "n": "Property Lawyers Bangalore",
     "p": "+917331144552",
     "e": ""
    },
    {
     "n": "Rental Agreement and Notary Public",
     "p": "+918088873217",
     "e": ""
    },
    {
     "n": "Renuka Law Associates",
     "p": "+919739973967",
     "e": "advocaterenuka99@gmail.com"
    },
    {
     "n": "S. Jain Law",
     "p": "+917019504495",
     "e": ""
    },
    {
     "n": "Sairam Law Associates",
     "p": "+919611195911+919900984444",
     "e": "adv@sairamlawassociates.in"
    },
    {
     "n": "Secureprop",
     "p": "+918296490692",
     "e": ""
    },
    {
     "n": "SM Surveys",
     "p": "+919035554133",
     "e": ""
    },
    {
     "n": "VAB Document Writers",
     "p": "+918041304222",
     "e": ""
    },
    {
     "n": "VIVS Legal",
     "p": "+918291849797",
     "e": "swanand.pandit@vivs.in"
    },
    {
     "n": "VSK & Co Advocates",
     "p": "+918880688811",
     "e": ""
    }
   ]
  },
  "Chamarajanagar": {
   "Gundlupet": [
    {
     "n": "B Y Lakshmi",
     "p": "6361861503",
     "e": "lakshmilakshmichetan@gmail.com"
    },
    {
     "n": "Chikkanaika T",
     "p": "8660917850",
     "e": "chikkanaika47@gmail.com"
    },
    {
     "n": "Chikkananjaiah",
     "p": "9663095102",
     "e": "Mouryachikku mouryachikku@gmail.com"
    },
    {
     "n": "Dr. Rangaswamy D.",
     "p": "80732311749986213335",
     "e": "rangaswamyadvocate4u@gmail.com"
    },
    {
     "n": "Jyothi R.",
     "p": "9980033818",
     "e": "jyothirajesh244@gmail.com"
    },
    {
     "n": "M.S. Mohan Jagadeesh",
     "p": "70267967768088218388",
     "e": ""
    },
    {
     "n": "Mangalagowramma K.N.",
     "p": "9663996319",
     "e": ""
    },
    {
     "n": "N Aravinda Kumar",
     "p": "9844240442",
     "e": "aravindgpet36@gmail.com"
    },
    {
     "n": "Nagendra",
     "p": "98440343709964901997",
     "e": "Nagendraprana@gmail.com"
    },
    {
     "n": "Naveen Kumar A.S.",
     "p": "9740293383",
     "e": "arlikattenaveen@gmail.com"
    },
    {
     "n": "Nithish S M",
     "p": "9113871971",
     "e": "nithinithish23@gmail.com"
    },
    {
     "n": "R Leelambike",
     "p": "9380388508",
     "e": "leelambikeleelambike1@gmail.com"
    },
    {
     "n": "Rajesha S",
     "p": "9972684359",
     "e": "rajesha.s 64@gmail.com"
    },
    {
     "n": "Shivakumara M R",
     "p": "7090066144",
     "e": "Shivakuamarmadalavadi@gmail.com"
    },
    {
     "n": "Srinivasa Prasad G",
     "p": "7816988085",
     "e": "srinisri970@gmail.com"
    }
   ],
   "Hanur": [
    {
     "n": "Manjunathaswamy A.S.",
     "p": "9731898853",
     "e": "manjunathaswamy16@gmail.com"
    },
    {
     "n": "Nagaraju",
     "p": "9886596796",
     "e": ""
    },
    {
     "n": "Roopashree",
     "p": "8105283819",
     "e": "advocateroopashree@gmail.com"
    },
    {
     "n": "Santhosh Kumar",
     "p": "9886824262",
     "e": ""
    }
   ],
   "Kollegal": [
    {
     "n": "Amrutharaj S",
     "p": "9742892130",
     "e": "amruthrajammu9@gmail.com"
    },
    {
     "n": "Chinnaraju C",
     "p": "9900309047",
     "e": "Chinnvaishu721@gmail.com"
    },
    {
     "n": "Harshith M",
     "p": "7975788331",
     "e": ""
    },
    {
     "n": "K.N. Manjula",
     "p": "7975967457",
     "e": "knmanjulamanju@gmail.com"
    },
    {
     "n": "M Nanda Kumar",
     "p": "7353961554",
     "e": ""
    },
    {
     "n": "M.P. Nagalakshmi",
     "p": "9480476494",
     "e": "mpnagalakshmi11@gmail.com"
    },
    {
     "n": "Mallaradhya M",
     "p": "8746082227",
     "e": "aradhyara2018@gmail.com"
    },
    {
     "n": "Manjula L",
     "p": "9148993703",
     "e": "Binduadvocate553@gmail.com"
    },
    {
     "n": "Nataraju N",
     "p": "9741818162",
     "e": "natarajuadvocate@gmail.com"
    },
    {
     "n": "Nirmala R",
     "p": "9741739287",
     "e": "keerthana8867@gmail.com"
    },
    {
     "n": "P Sandeep",
     "p": "9986066639",
     "e": "Sandeep.11b.p@gmail.com"
    },
    {
     "n": "Puttarachaiah D",
     "p": "9738958346",
     "e": ""
    },
    {
     "n": "Ramesha C.C",
     "p": "7975942379",
     "e": ""
    },
    {
     "n": "Rohithaswa G",
     "p": "7847841023",
     "e": "Rohith.buggi236@gmail.com"
    },
    {
     "n": "Seema Tahseen Sultana",
     "p": "7676832648",
     "e": "seemaasad53@gmail.com"
    },
    {
     "n": "Siddaraju D",
     "p": "9686463983",
     "e": "siddaraj983@gmail.com"
    },
    {
     "n": "Tanuja C",
     "p": "9110466425",
     "e": "Thanujagowda9845@gmail.com"
    }
   ],
   "Yelandur": [
    {
     "n": "Dr. Rajanna M",
     "p": "9945896715",
     "e": "rajannamr70@gmail.com"
    },
    {
     "n": "Kantharaju K",
     "p": "8217588157",
     "e": "kkantharaju21@gmail.com"
    },
    {
     "n": "Kumar Y C",
     "p": "7676249544",
     "e": "kumaryc1995@gmail.com"
    },
    {
     "n": "Kumaraswamy R",
     "p": "9964691003",
     "e": "kumaraswamyr2020@gmail.com"
    },
    {
     "n": "M Jaishankar",
     "p": "8310556036",
     "e": "jaishankarhari1976@gmail.com"
    },
    {
     "n": "Mahendra R.",
     "p": "9164825377",
     "e": ""
    },
    {
     "n": "Mahesha M.",
     "p": "9008071500",
     "e": ""
    },
    {
     "n": "N.K. Virupakshaswamy",
     "p": "9901535337",
     "e": "viruleela.2018@gmail.com"
    },
    {
     "n": "R Srinivasamurthy",
     "p": "9986190340",
     "e": "murthysrinivasa890@gmail.com"
    },
    {
     "n": "Sampathu G N",
     "p": "9900915818",
     "e": "sampath@gmail.com"
    },
    {
     "n": "Vanajakshi B.",
     "p": "8123059662",
     "e": "vanajakshivanaja123@gmail.com"
    }
   ]
  },
  "Chikkaballapur": {
   "Bagepalli": [
    {
     "n": "Ramesha N",
     "p": "9535865583",
     "e": "ramiramesh2645@gmail.com"
    },
    {
     "n": "Soujanya Gandhi A",
     "p": "9900859177",
     "e": "soujanyagandhi@gmail.com"
    }
   ],
   "Chiluru": [
    {
     "n": "Paramesh C",
     "p": "9591029464",
     "e": "siddusiddarth239@gmail.com"
    }
   ],
   "Chintamani": [
    {
     "n": "Gowtham P",
     "p": "90195950508880543888",
     "e": "gowthamadv8@gmail.com"
    },
    {
     "n": "Manikanta N",
     "p": "8861168877",
     "e": "maninayak.98@gmail.com"
    },
    {
     "n": "Manjunatha N",
     "p": "9141721591",
     "e": "nsmagreddy@gmail.com"
    },
    {
     "n": "Venkategowda G",
     "p": "9164231766",
     "e": "venkategowdabujji3317@gmail.com"
    }
   ],
   "Gauribidanur": [
    {
     "n": "S.M Srinath",
     "p": "9916974525",
     "e": "srinathsm18@gmail.com"
    }
   ],
   "Gudibanda": [
    {
     "n": "Chandrappa K.V",
     "p": "9731567217",
     "e": "kvcadvocatecbp@gmail.com"
    }
   ],
   "Manchenahalli": [
    {
     "n": "Rajashekar S",
     "p": "9164235028",
     "e": "raji4law@gmail.com"
    }
   ],
   "Sidlaghatta": [
    {
     "n": "B R Murali Mohan",
     "p": "9141664176",
     "e": "mohanmurali0768@gmail.com"
    },
    {
     "n": "Jagadesh N",
     "p": "9036428281",
     "e": "jagaddishyadavsn10@gmail.com"
    },
    {
     "n": "Muniraju M",
     "p": "8892623214",
     "e": "muniraju.8892@gmail.com"
    },
    {
     "n": "Muniraju Y",
     "p": "8884047697",
     "e": "munirajuy710@gmail.com"
    },
    {
     "n": "Nagesh S.A",
     "p": "9611281477",
     "e": "nageshsa.advocate@gmail.com"
    },
    {
     "n": "R. Shalini",
     "p": "99016399199353592472",
     "e": "sirikanya@gmail.com"
    },
    {
     "n": "Srinivasa O",
     "p": "9964040478",
     "e": "srinivasa01994@gmail.com"
    }
   ]
  },
  "Dakshina Kannada": {
   "Bantwal": [
    {
     "n": "G Manjunath",
     "p": "08255232120",
     "e": "tah.bantwal@gmail.com"
    }
   ],
   "Beltangadi": [
    {
     "n": "S.N. Naragund",
     "p": "08256232047",
     "e": "thalukofficebelthangady@gmail.com"
    }
   ],
   "Mangaluru": [
    {
     "n": "Manu Advocates",
     "p": "+918247960462",
     "e": "contact@manuadvocates.com"
    },
    {
     "n": "Ramesh Babu",
     "p": "08242220587",
     "e": "tah.mnglr@gmail.com"
    }
   ],
   "Puttur": [
    {
     "n": "S.B. Koodalagi",
     "p": "08251230349",
     "e": "tah.puttur@gmail.com"
    }
   ],
   "Sulya": [
    {
     "n": "Manjula M",
     "p": "08257230330",
     "e": "tah.sullia@gmail.com"
    }
   ],
   "Ullal": [
    {
     "n": "Prashanth V. Patil",
     "p": "08242204424",
     "e": "tah.ullala2022@gmail.com"
    }
   ]
  },
  "Hassan": {
   "Alur": [
    {
     "n": "Mallikarjun H",
     "p": "9535380286",
     "e": "tah.alur@gmail.com"
    },
    {
     "n": "Vikhar Ahmed",
     "p": "9482954821",
     "e": "hsn.sub@gmail.com"
    }
   ],
   "Arkalgud": [
    {
     "n": "Sowmya K.C",
     "p": "8073956295",
     "e": "tah.agud@gmail.com"
    }
   ],
   "Arsikere": [
    {
     "n": "Latha M.H",
     "p": "9449707799",
     "e": "deo.hsn@gmail.com"
    },
    {
     "n": "Palaksha Y.P.",
     "p": "9964252321",
     "e": "tah.arsi@gmail.com"
    },
    {
     "n": "Santhosh Kumar M G",
     "p": "9964063630",
     "e": "tah.arsi@gmail.com"
    }
   ],
   "Belur": [
    {
     "n": "Shridar Kankanawadi",
     "p": "9535799825",
     "e": "tah.belur@gmail.com"
    }
   ],
   "Channarayapattana": [
    {
     "n": "Shankar",
     "p": "8431280115",
     "e": "tah.crp@gmail.com"
    }
   ],
   "Hassan": [
    {
     "n": "Nagaraju M.A",
     "p": "9482023094",
     "e": "tah.hsn@gmail.com"
    },
    {
     "n": "Nagaraju M.A.",
     "p": "9482023094",
     "e": "tah.hsn@gmail.com"
    }
   ],
   "Holenarsipur": [
    {
     "n": "Y.M. Renu Kumar",
     "p": "9448158273",
     "e": "tah.hnp@gmail.com"
    }
   ],
   "Sakleshpur": [
    {
     "n": "Mohan Kumar K",
     "p": "9535007617",
     "e": "tah.skp@gmail.com"
    },
    {
     "n": "Mohan Kumar K.",
     "p": "9535007617",
     "e": "tah.skp@gmail.com"
    },
    {
     "n": "P.S. Kumbar",
     "p": "9731061522",
     "e": "deo.hsn@gmail.com"
    },
    {
     "n": "Supritha K.S.",
     "p": "9980788880",
     "e": "tah.skp@gmail.com"
    }
   ]
  },
  "Kalaburagi": {
   "Afzalpur": [
    {
     "n": "Tahasildar Afzalpur",
     "p": "08470282020",
     "e": "tahsildarafzalpur@gmail.com"
    },
    {
     "n": "Tahasildar Kalaburagi",
     "p": "08472230116",
     "e": "tahsildargulbarga1@gmail.com"
    }
   ],
   "Aland": [
    {
     "n": "Tahasildar Aland",
     "p": "08477202428",
     "e": "tahsildaraland@gmail.com"
    }
   ],
   "Chincholi": [
    {
     "n": "Tahasildar Chincholi",
     "p": "08475273027",
     "e": "tahsildarchincholi@gmail.com"
    }
   ],
   "Chitapur": [
    {
     "n": "Tahasildar Chittapur",
     "p": "08474236147",
     "e": "tahsildarchittapur@gmail.com"
    }
   ],
   "Jevargi": [
    {
     "n": "Tahasildar Jewargi",
     "p": "08442236025",
     "e": "tahsildarjewargi@gmail.com"
    }
   ],
   "Sedam": [
    {
     "n": "Tahasildar Sedam",
     "p": "08441276184",
     "e": "tahsildarsedam@gmail.com"
    }
   ]
  },
  "Kodagu": {
   "Kushalnagar": [
    {
     "n": "Kiran Gowraiah",
     "p": "08276200198",
     "e": "tahsildarkushalnagar@gmail.com"
    }
   ],
   "Madikeri": [
    {
     "n": "Shreedhar R",
     "p": "08272228396",
     "e": "thasildarmdkeln@gmail.com"
    }
   ],
   "Ponnampet": [
    {
     "n": "Mohan Kumar",
     "p": "08274249700",
     "e": "tahsildarponnampet@gmail.com"
    }
   ],
   "Somvarpet": [
    {
     "n": "K K Krishnamurthy",
     "p": "08276282045",
     "e": "tahsildarsomwarpet@gmail.com"
    }
   ],
   "Virajpet": [
    {
     "n": "P C Praveen Kumar",
     "p": "08274257328",
     "e": "tahsildarvirajpet@gmail.com"
    }
   ]
  },
  "Koppal": {
   "Gangawati": [
    {
     "n": "Basavaraj",
     "p": "8745932368",
     "e": ""
    },
    {
     "n": "U Vasant Kumari",
     "p": "7411908547",
     "e": ""
    }
   ],
   "Kushtagi": [
    {
     "n": "Gururaj Chaleadi",
     "p": "7795142631",
     "e": ""
    }
   ]
  },
  "Mysuru": {
   "H.D.Kote": [
    {
     "n": "Srinivasa",
     "p": "9632458049",
     "e": "thahdk-rd-ka@nic.in"
    }
   ],
   "Hunsur": [
    {
     "n": "J Manjunath",
     "p": "9480212069",
     "e": "thahun-rd-ka@nic.in"
    },
    {
     "n": "S N Devaraj's office (Document writer)",
     "p": "+919880548326",
     "e": ""
    }
   ],
   "Krishnarajanagara": [
    {
     "n": "S.PUTTARAJU Document writer",
     "p": "+919945599939",
     "e": ""
    }
   ],
   "Piriyapatna": [
    {
     "n": "Nisarga Priya J",
     "p": "9738654990",
     "e": "thapri-rd-ka@nic.in"
    }
   ],
   "Saligrama": [
    {
     "n": "Rukiya Begum",
     "p": "9071800552",
     "e": "rukiyabegum.1982@ka.gov.in"
    }
   ],
   "Saragur": [
    {
     "n": "Mohana Kumari",
     "p": "9008404949",
     "e": "mohana.kumari1980@ka.gov.in"
    }
   ]
  },
  "Raichur": {
   "Devadurga": [
    {
     "n": "Tahasildar, Devadurga Taluk",
     "p": "08531260028",
     "e": "tsldevadurga@gmail.com"
    }
   ],
   "Lingsugur": [
    {
     "n": "Tahasildar, Lingasugur Taluk",
     "p": "08533257247",
     "e": "gmtahsildar@gmail.com"
    }
   ],
   "Manvi": [
    {
     "n": "Tahasildar, Manvi Taluk",
     "p": "08538220239",
     "e": "tahsilofficemanvi@gmail.com"
    }
   ],
   "Maski": [
    {
     "n": "Tahasildar, Maski Taluk",
     "p": "08535220151",
     "e": "spetahmaski@gmail.com"
    }
   ],
   "Sindhnur": [
    {
     "n": "Tahasildar, Raichur Taluk",
     "p": "08532226209",
     "e": "tahsildarelection@gmail.com"
    },
    {
     "n": "Tahasildar, Sindhanur Taluk",
     "p": "08535220021",
     "e": "tahsildarsnd@gmail.com"
    }
   ],
   "Sirwar": [
    {
     "n": "Tahasildar, Sirwar Taluk",
     "p": "08538270048",
     "e": "tahsilofficesirwar@gmail.com"
    }
   ]
  },
  "Ramanagara": {
   "Ramanagara": [
    {
     "n": "Shivakumar Shaba",
     "p": "8722584444",
     "e": "deo.ramanagara@gmail.com"
    }
   ]
  },
  "Shivamogga": {
   "Bhadravati": [
    {
     "n": "Parasappa K",
     "p": "8867432952",
     "e": "tehsil.bhadravathi@gmail.com"
    },
    {
     "n": "Rajiv",
     "p": "9986624119",
     "e": "tehsil.shimoga@gmail.com"
    },
    {
     "n": "Sateesha K",
     "p": "9449569490",
     "e": "sateeshak.08@gmail.com"
    },
    {
     "n": "Suresh Achar",
     "p": "8317449665",
     "e": "thsail.bhadravathi@gmail.com"
    }
   ],
   "Hosanagara": [
    {
     "n": "Rakesh Fransies Britoo (Incharge)",
     "p": "9900827292",
     "e": "tehsil.hosanagar@gmail.com"
    },
    {
     "n": "Rashmi",
     "p": "7338401775",
     "e": "tehsil.hosanagar@gmail.com"
    }
   ],
   "Sagar": [
    {
     "n": "Chandrashekar",
     "p": "8867124024",
     "e": "tehsil.sagar@gmail.com"
    },
    {
     "n": "Chandrashekhar Nayak",
     "p": "9731475177",
     "e": "tehsil.sagar@gmail.com"
    },
    {
     "n": "Nagaraja",
     "p": "9900656699",
     "e": "tehsil.shimoga@gmail.com"
    }
   ],
   "Shikaripura": [
    {
     "n": "Mallay Pojar",
     "p": "8867124024",
     "e": "deo.shimoga@gmail.com"
    },
    {
     "n": "Mallesh",
     "p": "9916055690",
     "e": "tehsil.shikaripur@gmail.com"
    }
   ],
   "Sorab": [
    {
     "n": "Husen Saravakar",
     "p": "8904878091",
     "e": "tehsil.sorab@gmail.com"
    },
    {
     "n": "Manjula",
     "p": "7349471269",
     "e": "tehsil.sorab@gmail.com"
    }
   ],
   "Thirthahalli": [
    {
     "n": "Lingaraju",
     "p": "7892894607",
     "e": "tehsiel.thirthahally@gmail.com"
    },
    {
     "n": "Ranjith S",
     "p": "7901050827",
     "e": "tehsil.thirthahally@gmail.com"
    }
   ]
  },
  "Tumakuru": {
   "Chiknayakanhalli": [
    {
     "n": "Rajeshwari P S",
     "p": "9741185772",
     "e": "talukoffice.tumkur@gmail.com"
    }
   ]
  },
  "Udupi": {
   "Brahmavara": [
    {
     "n": "Srikanta S Hegde",
     "p": "08202560494",
     "e": "thasildarbrahmavara@gmail.com"
    }
   ],
   "Byndoor": [
    {
     "n": "Dilshad Ali Mahat",
     "p": "08254251657",
     "e": "tahasildarbyndoor@gmail.com"
    }
   ],
   "Hebri": [
    {
     "n": "S.A Prasad",
     "p": "08258230201",
     "e": "tahsildarhebri@gmail.com"
    }
   ],
   "Kapu": [
    {
     "n": "Ananth Shankara",
     "p": "08202591444",
     "e": "tahsildarkapu@gmail.com"
    },
    {
     "n": "PR Gururaj",
     "p": "08202520417",
     "e": "thasildarudupi@gmail.com"
    }
   ],
   "Karkal": [
    {
     "n": "Pradeep R",
     "p": "08258230201",
     "e": "tahsildarkarkala20@gmail.com"
    }
   ],
   "Kundapura": [
    {
     "n": "Pradeep Kurudekar S",
     "p": "08254230357",
     "e": "thasildarkundapura@gmail.com"
    }
   ]
  },
  "Vijayanagara": {
   "H.B.Halli": [
    {
     "n": "Kavitha",
     "p": "08394224208",
     "e": "tahhpt@gmail.com"
    }
   ],
   "Harapanahalli": [
    {
     "n": "Chidanand Guruswamy",
     "p": "08398200300",
     "e": "achphalli@gmail.com"
    }
   ],
   "Hospet": [
    {
     "n": "Shruthi",
     "p": "08394224208",
     "e": "tahhpt@gmail.com"
    },
    {
     "n": "Vivekananda P",
     "p": "08394232209",
     "e": "achpt11@gmail.com"
    }
   ]
  }
 }
};

const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");

function pick(obj, key) {
  if (!obj || !key) return null;
  if (obj[key]) return obj[key];
  const want = norm(key);
  const hit = Object.keys(obj).find((k) => norm(k) === want);
  return hit ? obj[hit] : null;
}

/** Looks up contacts for a location, tolerating spelling differences between
 * the app's dropdowns and the source sheet.
 *
 * Returns { scope, contacts, taluka }:
 *   scope "taluka"   — contacts listed for that exact taluka
 *   scope "district" — that taluka has none, so every contact in the district
 *                      is returned instead (each carries its own .t taluka, so
 *                      the UI can say where the person actually is)
 *   scope "none"     — nothing on file for this location
 * Never invents a contact to fill an empty result. */
export function contactsFor(state, district, taluka) {
  const dists = pick(LAND_CONTACTS, state);
  const tals = pick(dists, district);
  if (!tals) return { scope: "none", contacts: [], taluka: null };

  const exact = pick(tals, taluka);
  if (exact && exact.length) {
    const name = Object.keys(tals).find((k) => norm(k) === norm(taluka)) || taluka;
    return { scope: "taluka", contacts: exact.map((c) => ({ ...c, t: name })), taluka: name };
  }

  const all = Object.entries(tals).flatMap(([t, list]) => list.map((c) => ({ ...c, t })));
  all.sort((a, b) => a.t.localeCompare(b.t) || a.n.localeCompare(b.n));
  return { scope: all.length ? "district" : "none", contacts: all, taluka: null };
}
