# BhumiGuide Intelligence

A guidance platform for people buying land in India — the step-by-step
procedure for their own district, what each document is and where to get it,
an estimate of stamp duty and registration charges, a document readiness
check, and an assistant that answers in plain language.

Built as a final-year B.Tech project. **Maharashtra, Karnataka and Madhya
Pradesh** are covered with real, sourced data — 122 districts, 814 talukas,
16 documents — and the whole interface works in **9 Indian languages**.

```
frontend/   React 18 + Vite 5 + Tailwind 3
backend/    Node.js + Express 4 + MongoDB (Mongoose)
```

---

## Why this exists

Buying land in India is not like buying a flat. No bank or builder verifies
that the seller actually owns what they are selling — that is on the buyer.
The information needed to do it properly is real and public, but it is spread
across state revenue portals, registration departments and local offices, each
using different names for the same record. A first-time buyer usually does not
know that a 7/12 extract, an RTC and a Khasra-Khatauni are the same kind of
document under three state governments.

This app puts that in one place, for the buyer's own district, in the
buyer's own language.

---

## What it does

**Step-by-step procedure** — the 7-step buying process, plus conditional
steps the Smart Procedure Generator adds after five questions about your
case (inherited land adds an heir-consent step, farmland you want to build
on adds NA conversion, a company buyer adds a board resolution).

**Documents, per state** — the checklist is not one generic list. Each state
file records what that state actually calls a document, what it demands, and
what it does not use at all, with the official source for every claim.
Karnataka requires 10 documents where Maharashtra and MP require 9;
Maharashtra has no "Encumbrance Certificate" (the equivalent is a certified
copy of Index II); Karnataka's municipal Khata has no MP equivalent.

**Charges calculator** — stamp duty, registration fee, local body tax and
the smaller charges, using each state's own rates, rebates and caps.

**Legal Verification** — drop in your documents and the readiness check
identifies each one, flags anything expired, too small to read or in a format
offices reject, and lists what is still missing for your state. Files are
analysed in the browser; nothing is uploaded unless you ask to save them.

**AI Assistant** — answers grounded in the selected district's rules. Uses a
live model when an API key is configured, and its own rule engine otherwise.
Either way it replies in the language the user has chosen.

**Local contacts** — notaries, deed writers and typists listed near tehsil
offices, falling back to the district when a taluka has nobody on file, and
saying so rather than padding the list.

**Nine languages** — English, हिन्दी, मराठी, தமிழ், తెలుగు, ಕನ್ನಡ, ગુજરાતી,
বাংলা, ਪੰਜਾਬੀ. 1,733 strings, including all 826 district and taluka names,
and the assistant's answers.

---

## Running it

You need Node.js 18+. No database setup required for a first run.

**Terminal 1 — backend**

```bash
cd backend
npm install
cp .env.example .env          # Windows: copy .env.example .env
npm run dev
```

Leave `MONGO_URI` blank and the server starts a temporary in-memory MongoDB
for you. You should see:

```
🚀 BhumiGuide Intelligence API running on http://localhost:4000
```

Data does not survive a restart in that mode. For a persistent database,
create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register),
copy the connection string into `MONGO_URI`, and restart — the reference data
seeds itself on boot.

**Terminal 2 — frontend**

```bash
cd frontend
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

### Optional extras

Everything below is optional — the app runs fully without any of it. See
`backend/.env.example` for the exact variable names.

| Feature | What you need |
|---|---|
| Live AI answers | A Gemini key from [Google AI Studio](https://aistudio.google.com/app/apikey) (or an Anthropic key) |
| Sign in with Google | An OAuth client ID from the Google Cloud Console, in **both** `.env` files |
| Email OTP on signup | A Gmail address plus a [Google App Password](https://myaccount.google.com/apppasswords) |

Without a mail key the OTP is printed to the backend terminal, so signup
verification is still testable.

> **Never put a real key in `.env.example`.** Only `.env` is gitignored.

---

## How the data is organised

Adding a state is one file. `backend/src/seedData/states/maharashtra.js`
holds that state's districts and talukas, its charge rules, and its document
overrides; `states/index.js` is the only place that decides which states the
app supports. Nothing else needs to change.

Document differences live in each state file as a `documentRules` block, and
every entry that differs from the shared default carries the URL it came
from, shown in the app as "Official source".

The nine languages live in `frontend/src/i18n.js` (interface) and
`frontend/src/i18n.places.js` (the 826 place names). The English text is
itself the lookup key, so a string with no translation yet renders in English
instead of breaking — and the coverage percentage in the language menu is
computed from the source, not written down, so it cannot go stale.

---

## What is deliberately not real

This is an academic prototype, and it is worth being exact about where the
line is:

- **Office addresses, phone numbers and distances are generated**, not a real
  government directory. No public API publishes this for India.
- **Stamp duty and registration percentages are indicative**, gathered from
  state portals, not legal advice. Confirm with the Sub-Registrar office.
- **The legal verification progress bar is a simulated timer.** Real title
  verification needs a lawyer and record access this app does not have. The
  document readiness check next to it is real.
- **The local contacts list was compiled by hand** for this project, not
  published by any department, and covers only the areas collected so far.
- **17 of Madhya Pradesh's 55 districts** carry only their headquarters town
  as a placeholder taluka. Sources for the full tehsil list either give a
  count with no names or contradict each other, so rather than invent the
  missing names the gap is recorded in the file header.
- **Place names in the six non-local languages are transliterations.** For a
  state's own language the spelling is the official one; elsewhere it is the
  form that language's press uses, and a few small talukas have no settled
  spelling at all.

The rule throughout the project: when a fact cannot be verified, leave an
honest gap and say so, rather than filling it with something plausible.

---

## Troubleshooting

**"Could not connect to the backend"** — the backend is not running, or is on
a different port. Start it and refresh.

**PowerShell blocks `npm install`** — run
`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, or use Command
Prompt instead.

**MongoDB download fails** — your network is blocking `fastdl.mongodb.org`.
Use the Atlas option above; it works over plain HTTPS.

**`ERR_MODULE_NOT_FOUND`** — a dependency is missing. Run `npm install` in
that folder again.

---

## Author

**Yuvraj Naktode** — B.Tech Computer Science & Engineering,
G H Raisoni University, Nagpur.
[GitHub](https://github.com/Yuvi-cyber82) ·
[LinkedIn](https://www.linkedin.com/in/yuvraj-naktode-47100b278)
