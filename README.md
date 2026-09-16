<div align="center">

# BhumiGuide Intelligence

**Know exactly what to do, which paper to carry, and what it costs — before you buy land in India.**

A district-aware land-purchase guidance platform for Maharashtra, Karnataka and
Madhya Pradesh, available in nine Indian languages.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.19-000000?logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%208-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Languages](https://img.shields.io/badge/languages-9-green)](#language-support)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

</div>

---

## Screenshots

> _Add three images to a `docs/` folder and they will show up here:_
> `docs/home.png`, `docs/documents.png`, `docs/assistant.png`

| Home | Documents, per state | AI Assistant |
|---|---|---|
| ![Home](docs/home.png) | ![Documents](docs/documents.png) | ![Assistant](docs/assistant.png) |

---

## The problem

Buying land in India is not like buying a flat. No bank and no builder checks
whether the seller actually owns what they are selling — that responsibility
falls entirely on the buyer.

The information needed to do it properly is public, but it is scattered across
state revenue portals, registration departments and local offices, each using
a different name for the same record. A first-time buyer usually does not know
that a **7/12 extract**, an **RTC** and a **Khasra–Khatauni** are the same kind
of document under three different state governments — or that Maharashtra does
not issue an "Encumbrance Certificate" at all.

BhumiGuide collects that into one place, for the buyer's own district, in the
buyer's own language.

---

## Features

### Personalised procedure
The seven-step buying process, plus conditional steps the **Smart Procedure
Generator** inserts after five questions about your case — inherited land adds
an heir-consent step, farmland you intend to build on adds NA conversion, a
company buyer adds a board resolution.

### Documents that differ by state
Not one generic checklist. Every state file records what that state actually
calls a document, what it demands, and what it does not use at all — each with
the government source it came from, shown in the app as *Official source*.

| | Maharashtra | Karnataka | Madhya Pradesh |
|---|---|---|---|
| Land record | 7/12 Extract (Satbara) | RTC / Pahani | Khasra / Khatauni |
| Issued by | Tehsildar Office | Nadakacheri / Taluk Office | Tehsil Office |
| Encumbrance | Index II certified copy | Form 15 EC | — |
| Municipal Khata | not used | mandatory | not used |
| Mandatory documents | 9 | 10 | 9 |

### Charges calculator
Stamp duty, registration fee, local body tax and the smaller charges, using
each state's own rates, female-buyer rebates and registration caps.

### Legal Verification
Drop in your documents and the readiness check identifies each one, flags
anything expired, too small to read, or in a format offices reject, and lists
what is still missing **for your state**. Files are analysed in the browser —
nothing is uploaded unless you choose to save them to your account.

### AI Assistant
Answers grounded in the selected district's rules. Calls a live model when an
API key is configured and falls back to its own rule engine otherwise — and
replies in the language the user has selected either way.

### Local contacts
Notaries, deed writers and typists listed near tehsil offices — 1,414 entries.
When a taluka has nobody on file it falls back to the district and says so,
rather than padding the list.

### Accounts and progress
Real signup and login (bcrypt + JWT), optional **Sign in with Google**, and
optional **email OTP** verification. Completed steps, collected documents, your
Smart Generator answers and your activity feed follow you to any device.

---

## Coverage

| | |
|---|---|
| States | 3 — Maharashtra, Karnataka, Madhya Pradesh |
| Districts | 122 |
| Talukas / tehsils | 814 |
| Documents explained | 16 |
| Procedure steps | 7 main + 6 conditional |
| Local contacts | 1,414 |
| Languages | 9 |
| Translated strings | 1,733 |

---

## Language support

English · हिन्दी · मराठी · தமிழ் · తెలుగు · ಕನ್ನಡ · ગુજરાતી · বাংলা · ਪੰਜਾਬੀ

Every visible string is translated — navigation, forms, government document
descriptions, toast messages, the in-app article reader, the assistant's
answers, and all 826 district and taluka names in each script.

Two design decisions worth noting:

**English is the lookup key.** `tr("Required Documents")` looks the phrase up
in the dictionary and returns the English itself if no translation exists. A
string added tomorrow renders in English instead of showing a blank or a raw
key.

**Sentences with values in them are one entry, not fragments.** A sentence like
*"Question 3 of 7"* is stored as `"Question {0} of {1}"`, so each language
places the numbers where its own grammar needs them — Tamil renders it
`7-இல் 3-ஆவது கேள்வி`. Splitting it into `"Question"` + `"of"` would force
every language into English word order, which reads broken in the
postpositional languages.

The coverage percentage shown in the language menu is **computed from the
source at runtime**, not hard-coded — add an English string without a
translation and the number drops by itself.

---

## Tech stack

| Layer | Stack |
|---|---|
| Frontend | React 18, Vite 5, Tailwind CSS 3, lucide-react |
| Backend | Node.js 18+, Express 4 |
| Database | MongoDB via Mongoose 8 (in-memory fallback for zero-setup runs) |
| Auth | JWT, bcryptjs, Google Identity Services |
| Email | Nodemailer (Gmail SMTP), Resend fallback |
| AI | Google Gemini or Anthropic Claude, with a deterministic rule engine as fallback |
| Uploads | Multer |

---

## Getting started

**Prerequisites:** Node.js 18 or newer. No database installation required.

### 1. Clone

```bash
git clone https://github.com/Yuvi-cyber82/BhumiGuide.git
cd BhumiGuide
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env          # Windows: copy .env.example .env
npm run dev
```

Leave `MONGO_URI` blank and the server starts a temporary in-memory MongoDB
and seeds all reference data on boot:

```
🚀 BhumiGuide Intelligence API running on http://localhost:4000
```

Data does not survive a restart in that mode. For a persistent database,
create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register),
paste the connection string into `MONGO_URI`, and restart.

### 3. Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the printed URL — usually `http://localhost:5173`.

---

## Configuration

Every variable is optional except `JWT_SECRET`. The app runs fully without any
of them. Full documentation is in [`backend/.env.example`](backend/.env.example).

| Variable | Purpose | If left blank |
|---|---|---|
| `MONGO_URI` | MongoDB connection string | Temporary in-memory database |
| `JWT_SECRET` | Signs login tokens | **Set this one** |
| `GEMINI_API_KEY` | Live AI answers | Built-in rule engine answers instead |
| `ANTHROPIC_API_KEY` | Alternative AI provider | Used only if Gemini key is empty |
| `GOOGLE_CLIENT_ID` | Sign in with Google | Button is hidden |
| `GMAIL_USER` / `GMAIL_APP_PASSWORD` | Sends signup OTP emails | OTP is printed to the server terminal |
| `RESEND_API_KEY` | Alternative mail provider | Used only if Gmail is not set |

`VITE_GOOGLE_CLIENT_ID` in `frontend/.env` must match `GOOGLE_CLIENT_ID`.

> **Security:** `.env` is gitignored; `.env.example` is not. Never put a real
> key in `.env.example`.

---

## API reference

Base URL `http://localhost:4000/api`. Routes marked 🔒 require a
`Authorization: Bearer <token>` header.

### Reference data

| Method | Endpoint | Returns |
|---|---|---|
| `GET` | `/reference/locations` | States → districts → talukas |
| `GET` | `/reference/charges` | Per-state stamp duty and registration rules |
| `GET` | `/reference/procedure` | The 7 main steps and 6 conditional steps |
| `GET` | `/reference/documents` | The 16 documents plus per-state overrides |
| `GET` | `/reference/offices?state=&district=&taluka=` | Office templates and local offices |

### Authentication

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/auth/register` | Create an account, issue a token, send an OTP |
| `POST` | `/auth/login` | Email + password login |
| `POST` | `/auth/google` | Exchange a Google ID token for a session |
| `GET` 🔒 | `/auth/me` | Current user |
| `POST` 🔒 | `/auth/verify-otp` | Verify the emailed 6-digit code |
| `POST` 🔒 | `/auth/resend-otp` | Send a fresh code |

### Progress

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` 🔒 | `/progress` | Steps done, documents collected, profile, activity |
| `PUT` 🔒 | `/progress` | Save progress |
| `POST` 🔒 | `/progress/activity` | Append an activity entry |
| `POST` 🔒 | `/progress/notify` | Add a notification |
| `PUT` 🔒 | `/progress/notifications/read` | Mark all read |

### Uploads and AI

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` 🔒 | `/uploads` | Save verification documents (multipart) |
| `GET` 🔒 | `/uploads` | List saved verification records |
| `POST` | `/ai/ask` | Ask the assistant — takes `question`, `loc`, `profile`, `history`, `lang` |

---

## Project structure

```
BhumiGuide/
├── backend/
│   ├── server.js                  Express app, route mounting, static uploads
│   └── src/
│       ├── config/db.js           Atlas connection, in-memory fallback
│       ├── middleware/            JWT auth, Multer upload rules
│       ├── models/                User, Progress, DocumentInfo, ProcedureStep…
│       ├── routes/                auth · reference · ai · uploads · progress
│       ├── seedData/
│       │   ├── states/            One file per state — the only data to edit
│       │   ├── documents.js       The shared 16-document list
│       │   ├── procedure.js       Main and conditional steps
│       │   └── offices.js         Office templates
│       └── utils/
│           ├── aiRuleBased.js     Deterministic fallback answers
│           ├── gemini.js          Live model client
│           ├── googleAuth.js      Google ID-token verification
│           ├── mailer.js          Gmail SMTP OTP delivery
│           └── identifyDoc.js     Filename → document matching
└── frontend/
    └── src/
        ├── App.jsx                Routing, auth state, language provider
        ├── i18n.js                Interface dictionary, 9 languages
        ├── i18n.places.js         826 place names in each script
        ├── api/                   Thin fetch wrappers per resource
        ├── components/            UI kit, layout, modals, location picker
        ├── data/                  Client-side reference data and contacts
        └── pages/                 Home · LandBuying · Documents · Charges ·
                                   AIAssistant · LegalVerification · Resources ·
                                   Contact · Dashboard · Account
```

---

## Architecture notes

### Adding a state is one file

`backend/src/seedData/states/maharashtra.js` holds that state's districts and
talukas, its charge rules, and its document overrides.
`states/index.js` is the only place that decides which states the app supports:

```js
const STATES = [maharashtra, karnataka, madhyaPradesh];
```

Copy a state file, fill it in, add it to that array, restart. Nothing else in
the project needs to change — the dropdowns, the calculator, the document list
and the assistant's context all read from it.

### State document rules carry their source

```js
documentRules: {
  khata: {
    name: "Khata Certificate & Assessment Extract",
    status: "mandatory",
    note: "Required for every non-agricultural property. Gram panchayat "
        + "property needs the khata plus Form 9 and 11A…",
    source: "https://igr.karnataka.gov.in/…",
  },
}
```

Three statuses drive the UI: `mandatory`, `optional` and `not-applicable` —
the last renders as *"Not used in this state"* rather than hiding the document,
so a buyer comparing states can see the difference.

### The assistant answers in the user's language

The rule engine runs on the server, which has no dictionary. Instead of
returning a finished sentence it returns an English template plus its values:

```js
{ t: "In {0} the land record is called the {1}, issued by the {2}.",
  v: ["Maharashtra", "7/12 Extract (Satbara)", "Tehsildar Office"] }
```

The frontend renders it through the same translation machinery as the rest of
the interface, so the state name, the record name and the office name are
translated too. Shipping a second copy of the dictionary to the backend — 826
place names included — would have been the alternative.

---

## Scope and limitations

This is an academic prototype, and it is worth being precise about where the
line between real and simulated sits.

| Area | Status |
|---|---|
| Land records, charge rates, document rules | **Real**, sourced from state government portals, with the URL recorded per entry |
| District and taluka lists | **Real**, except as noted below |
| Document readiness check | **Real** — runs on the files you provide |
| Office addresses, phone numbers, distances | **Generated.** No public API publishes this for India |
| Legal verification progress bar | **Simulated timer.** Real title verification needs a lawyer and record access this app does not have |
| Local contacts list | **Compiled by hand** for this project, not published by any department; covers only the areas collected so far |
| MP tehsil lists | **17 of 55 districts** carry only their headquarters town. Available sources give a count with no names, or contradict each other |
| Place names in non-local scripts | **Transliterations.** Official spelling for each state's own language; the local press form elsewhere |
| Stamp duty figures | **Indicative, not legal advice.** Confirm with the Sub-Registrar office |

The rule followed throughout: when a fact could not be verified, the gap is
left open and documented in the file, rather than filled with something
plausible.

---

## Roadmap

- [ ] Seven more states — ready-made district data is already stubbed in `seedData/states/`
- [ ] Real office directories where a state publishes them
- [ ] OCR on uploaded documents instead of filename matching
- [ ] Export the personalised procedure as a printable PDF checklist

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| "Could not connect to the backend" | The backend is not running, or is on another port. Start it and refresh |
| PowerShell blocks `npm install` | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, or use Command Prompt |
| MongoDB download fails | Your network blocks `fastdl.mongodb.org` — use the Atlas option instead |
| `ERR_MODULE_NOT_FOUND` | Run `npm install` again in that folder |
| Google sign-in fails | `GOOGLE_CLIENT_ID` and `VITE_GOOGLE_CLIENT_ID` must be the same value, and the backend must be restarted after editing `.env` |

---

## License

Released under the [MIT License](LICENSE).

## Author

**Yuvraj Naktode**
B.Tech Computer Science & Engineering, G H Raisoni University, Nagpur

[GitHub](https://github.com/Yuvi-cyber82) ·
[LinkedIn](https://www.linkedin.com/in/yuvraj-naktode-47100b278)
