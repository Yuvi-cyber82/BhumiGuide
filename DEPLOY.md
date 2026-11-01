# Deploying BhumiGuide Intelligence

Three free services, in this order. Total time: about 30 minutes.

| Part | Service | Free tier |
|---|---|---|
| Database | MongoDB Atlas | M0 cluster, 512 MB, no card |
| Backend API | Render | Web service, sleeps after 15 min idle |
| Frontend | Vercel | Static site, no sleep |

---

## 0. Push the latest code to GitHub

Deployment happens from the repository, not from this laptop, so the repo
must hold the current code.

```bash
cd "C:\Users\YUVRAJ\Downloads\bhumiguide-fullstack"
git add -A
git commit -m "Prepare for deployment: Render blueprint, Vercel config, Node engine"
git push origin main
```

`backend/.env` and `frontend/.env` are in `.gitignore`, so no key is pushed.
Verify that at https://github.com/Yuvi-cyber82/BhumiGuide after the push.

---

## 1. Database — MongoDB Atlas

1. Sign up at <https://www.mongodb.com/cloud/atlas/register>.
2. **Create a cluster** → **M0 Free** → region **Mumbai (ap-south-1)**.
3. **Database Access** → **Add New Database User**
   - Username `bhumiguide`
   - **Autogenerate Secure Password** → *copy it now*, it is shown once
   - Role: **Read and write to any database**
4. **Network Access** → **Add IP Address** → **Allow access from anywhere**
   (`0.0.0.0/0`). Render's outgoing IP is not fixed on the free plan, so this
   is required.
5. **Database** → **Connect** → **Drivers** → copy the connection string:

   ```
   mongodb+srv://bhumiguide:<db_password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

   Replace `<db_password>` with the password from step 3 and insert the
   database name `bhumiguide` before the `?`:

   ```
   mongodb+srv://bhumiguide:YOURPASSWORD@cluster0.xxxxx.mongodb.net/bhumiguide?retryWrites=true&w=majority
   ```

   Keep this string — it is `MONGO_URI` in the next step.

---

## 2. Backend — Render

1. Sign up at <https://render.com> with **GitHub** and allow access to the
   `BhumiGuide` repository.
2. **New** → **Blueprint** → select `Yuvi-cyber82/BhumiGuide`.
   Render reads `render.yaml` and proposes the service **bhumiguide-api**.
3. It asks for the three values marked `sync: false`:

   | Key | Value |
   |---|---|
   | `MONGO_URI` | the Atlas string from step 1 |
   | `JWT_SECRET` | any long random string, e.g. run `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"` |
   | `GROQ_API_KEY` | from <https://console.groq.com/keys> (free, no card) |

4. **Apply**. The first build takes 3–5 minutes.
5. When it is live, open `https://<your-service>.onrender.com/api/health`.
   It must answer `{"ok":true}`.

If you would rather not use the blueprint: **New → Web Service**, root
directory `backend`, build `npm install`, start `npm start`, and add the same
environment variables plus `MONGOMS_DISABLE_POSTINSTALL=1`.

---

## 3. Frontend — Vercel

1. Sign up at <https://vercel.com> with **GitHub**.
2. **Add New** → **Project** → import `BhumiGuide`.
3. **Root Directory** → **Edit** → choose `frontend`.
   Framework preset should auto-detect as **Vite**.
4. **Environment Variables**:

   | Key | Value |
   |---|---|
   | `VITE_API_URL` | `https://<your-service>.onrender.com/api` — note the `/api` |
   | `VITE_GOOGLE_CLIENT_ID` | only if Google sign-in is wanted (step 4) |

5. **Deploy**. About two minutes. The site is then live at
   `https://<project>.vercel.app`.

---

## 4. Optional — Sign in with Google

1. Google Cloud Console → **APIs & Services** → **Credentials** →
   **Create credentials** → **OAuth client ID** → **Web application**.
2. **Authorised JavaScript origins**: add the Vercel URL
   (`https://<project>.vercel.app`) and `http://localhost:5173`.
3. Copy the client ID into **both**:
   - Vercel → `VITE_GOOGLE_CLIENT_ID`
   - Render → `GOOGLE_CLIENT_ID`
4. Redeploy both services so the new variable is picked up.

Without this, email + password sign-up still works. If `GMAIL_USER` and
`GMAIL_APP_PASSWORD` are not set on Render, the signup OTP is written to the
Render logs instead of being emailed — fine for a demo, and the log is under
**Logs** in the Render dashboard.

---

## 5. Check the live site

- Home page loads and the language switcher shows all nine languages.
- **Land Buying** → pick a state, district and taluka → the procedure appears.
- **Documents** → the checklist uses that state's own document names.
- **Charges** → the calculator returns a break-up, not just a total.
- **AI Assistant** → ask "What is a 7/12 Extract?" — an answer should come
  back within a few seconds.
- Sign up with an email, then sign in again.

---

## Known limits of the free tier

- **First request is slow.** A Render free service sleeps after 15 minutes of
  no traffic and takes roughly 50 seconds to wake. Open the site a minute
  before a demo, or keep the tab open.
- **Uploaded documents do not survive a restart.** Render's free disk is
  ephemeral, so files uploaded to the readiness check are lost when the
  service sleeps or redeploys. Everything in MongoDB (accounts, saved
  progress) does persist — that lives in Atlas.
- **Atlas M0 pauses after 60 days of no connections.** One click in the
  dashboard resumes it.

---

## Changing the code later

Both services redeploy automatically on `git push origin main` — Render
rebuilds the API, Vercel rebuilds the site. No further setup is needed.
