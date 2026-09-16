import React, { useState, useMemo, useRef, useEffect } from "react";
import { AuthModal } from "./components/AuthModal";
import { VerifyEmailModal } from "./components/VerifyEmailModal";
import { Toasts } from "./components/Toasts";
import { Footer, Header } from "./components/layout";
import { DOCUMENTS, loadDocuments } from "./data/documents";
import { CONDITIONAL_STEPS, PROCEDURE, loadProcedure } from "./data/procedure";
import { loadLocations } from "./data/locations";
import { loadOffices } from "./data/offices";
import { fillText, LangCtx, makeT, makeTr } from "./i18n";
import { AIAssistantPage } from "./pages/AIAssistantPage";
import { AccountPage } from "./pages/AccountPage";
import { ChargesPage } from "./pages/ChargesPage";
import { ContactPage } from "./pages/ContactPage";
import { DashboardPage } from "./pages/DashboardPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { HomePage } from "./pages/HomePage";
import { LandBuyingPage } from "./pages/LandBuyingPage";
import { LegalVerificationPage } from "./pages/LegalVerificationPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { C, FONT } from "./theme";
import * as authApi from "./api/auth";
import * as progressApi from "./api/progress";
import { getToken, setToken } from "./api/client";

const fmtTime = (d) => new Date(d).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

/* ================================================================== *
 *  APP
 * ================================================================== */

export default function BhumiGuideIntelligence() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("en");
  const [loc, setLoc] = useState({ state: "", district: "", taluka: "" });
  const [auth, setAuth] = useState(null);
  const [authModal, setAuthModal] = useState(null);
  const [verifyEmailOpen, setVerifyEmailOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [done, setDone] = useState([]);
  const [checked, setChecked] = useState([]);
  const [profile, setProfile] = useState(null);
  const [activity, setActivity] = useState([]);
  const [prefs, setPrefs] = useState({ email: true, sms: true, push: true, docUpdates: true, news: false });
  const [dataReady, setDataReady] = useState(false);
  const [dataError, setDataError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const hydrated = useRef(false); // guards the auto-sync effect until initial state is settled

  const t = useMemo(() => makeT(lang), [lang]);
  /* App is the provider itself, so useTr() here would read the default
   * context rather than `lang` — build the translator from lang directly. */
  const tr = useMemo(() => makeTr(lang), [lang]);
  const topRef = useRef(null);

  useEffect(() => { topRef.current?.scrollIntoView({ block: "start" }); }, [page]);

  const toast = (text, tone = "green") => {
    const id = Date.now() + Math.random();
    setToasts((x) => [...x, { id, text, tone }]);
    setTimeout(() => setToasts((x) => x.filter((i) => i.id !== id)), 3600);
  };

  // Load all reference data from the backend once, before rendering the app.
  useEffect(() => {
    Promise.all([loadLocations(), loadProcedure(), loadDocuments(), loadOffices()])
      .then(() => setDataReady(true))
      .catch((err) => setDataError(err.message || "Could not load data from the backend."));
  }, []);

  // Restore a logged-in session (and its saved progress) from a stored token.
  useEffect(() => {
    const token = getToken();
    if (!token) { hydrated.current = true; setAuthChecked(true); return; }
    authApi.me()
      .then(async ({ user }) => {
        setAuth(user);
        await hydrateProgress();
      })
      .catch(() => setToken(null))
      .finally(() => { hydrated.current = true; setAuthChecked(true); });
  }, []);

  async function hydrateProgress() {
    try {
      const { progress } = await progressApi.getProgress();
      setDone(progress.done || []);
      setChecked(progress.checked || []);
      setProfile(progress.profile || null);
      setPrefs((p) => ({ ...p, ...(progress.prefs || {}) }));
      setActivity((progress.activity || []).slice().reverse().map((a) => ({ title: a.title, time: fmtTime(a.at) })));
      setNotifications((progress.notifications || []).slice().reverse().map((n) => ({ title: n.title, body: n.body })));
    } catch {
      /* best-effort — a fresh account simply starts empty */
    }
  }

  // Auto-sync saved progress to the backend whenever it changes, once logged in.
  useEffect(() => {
    if (!auth || !hydrated.current) return;
    progressApi.updateProgress({ done, checked, profile, prefs }).catch(() => {});
  }, [auth, done, checked, profile, prefs]);

  const logActivity = (title) => {
    setActivity((a) => [{ title, time: fmtTime(Date.now()) }, ...a].slice(0, 30));
    if (auth) progressApi.addActivity(title).catch(() => {});
  };

  const addNotification = (n) => {
    setNotifications((x) => [n, ...x].slice(0, 8));
    if (auth) progressApi.addNotification(n.title, n.body).catch(() => {});
  };

  const toggleDone = (id) => {
    setDone((d) => {
      const next = d.includes(id) ? d.filter((x) => x !== id) : [...d, id];
      const step = [...PROCEDURE, ...Object.values(CONDITIONAL_STEPS)].find((s) => s.id === id);
      logActivity(fillText(tr, next.includes(id) ? "Completed step: {0}" : "Reopened step: {0}", tr(step ? step.title : id)));
      return next;
    });
  };

  const toggleCheck = (id) => {
    setChecked((c) => {
      const next = c.includes(id) ? c.filter((x) => x !== id) : [...c, id];
      const d = DOCUMENTS.find((x) => x.id === id);
      logActivity(fillText(tr, next.includes(id) ? "Collected document: {0}" : "Unmarked document: {0}", tr(d ? d.name : id)));
      return next;
    });
  };

  const onNav = (p) => setPage(p);

  const logOut = () => {
    setToken(null);
    setAuth(null);
    setDone([]);
    setChecked([]);
    setProfile(null);
    setActivity([]);
    setNotifications([]);
    setPrefs({ email: true, sms: true, push: true, docUpdates: true, news: false });
  };

  const shared = { t, onNav, loc, setLoc, toast, auth };

  if (dataError) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: FONT, padding: 24, textAlign: "center" }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: 18, color: C.ink, marginBottom: 8 }}>Could not connect to the backend</div>
          <div style={{ color: C.mute, fontSize: 13, maxWidth: 420 }}>{dataError}</div>
          <div style={{ color: C.mute, fontSize: 12, marginTop: 10 }}>Make sure the backend server is running: <code>cd backend && npm run dev</code></div>
        </div>
      </div>
    );
  }

  if (!dataReady || !authChecked) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: FONT, color: C.mute }}>
        Loading BhumiGuide Intelligence…
      </div>
    );
  }

  return (
    <LangCtx.Provider value={lang}>
      <div style={{ background: C.bg, fontFamily: FONT, color: C.body, minHeight: "100vh", lineHeight: 1.5 }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          * { -webkit-font-smoothing: antialiased; box-sizing: border-box; }

          /* ---- type sizes Tailwind core has no class for ---- */
          .t9 { font-size: 9px; }  .t10 { font-size: 10px; } .t11 { font-size: 11px; }
          .t13 { font-size: 13px; } .t15 { font-size: 15px; }
          .heroH1 { font-size: 2.25rem; } .pageH1 { font-size: 1.5rem; }

          /* ---- widths ---- */
          .wrap { max-width: 1180px; } .wrap-wide { max-width: 1400px; }
          .mw200 { min-width: 200px; } .mw180 { min-width: 180px; }
          .mw80 { max-width: 80%; } .mwvw { max-width: calc(100vw - 40px); }
          .mh88 { max-height: 88vh; } .lh106 { line-height: 1.06; }
          .ph-soft::placeholder { color: #8FAF9C; }

          /* ---- own responsive grid system: the artifact stylesheet does not ship
                 lg:/xl: variants or responsive col-span, so we define them here ---- */
          .g12 { grid-template-columns: repeat(12, minmax(0,1fr)); }
          .sp1{grid-column:span 1/span 1} .sp2{grid-column:span 2/span 2}
          .sp3{grid-column:span 3/span 3} .sp4{grid-column:span 4/span 4}
          .smShow, .lgShow, .xxlShow, .xlFlex, .mdGrid { display: none; }

          @media (min-width: 640px) {
            .heroH1 { font-size: 3rem; } .pageH1 { font-size: 1.875rem; }
            .s2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
            .s3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
            .s4 { grid-template-columns: repeat(4, minmax(0,1fr)); }
            .ssp2 { grid-column: span 2/span 2; } .ssp3 { grid-column: span 3/span 3; }
            .smShow { display: block; }
          }
          @media (min-width: 768px) {
            .m2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
            .m4 { grid-template-columns: repeat(4, minmax(0,1fr)); }
            .m12 { grid-template-columns: repeat(12, minmax(0,1fr)); }
            .msp1{grid-column:span 1/span 1} .msp2{grid-column:span 2/span 2}
            .msp3{grid-column:span 3/span 3} .msp4{grid-column:span 4/span 4}
            .mdGrid { display: grid; } .mdHide { display: none; }
          }
          @media (min-width: 1024px) {
            .l2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
            .l3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
            .l4 { grid-template-columns: repeat(4, minmax(0,1fr)); }
            .l5 { grid-template-columns: repeat(5, minmax(0,1fr)); }
            .l12 { grid-template-columns: repeat(12, minmax(0,1fr)); }
            .lsp1{grid-column:span 1/span 1} .lsp2{grid-column:span 2/span 2}
            .lsp3{grid-column:span 3/span 3} .lsp4{grid-column:span 4/span 4}
            .lgShow { display: block; }
          }
          @media (min-width: 1280px) {
            .x3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
            .xlFlex { display: flex; } .xlHide { display: none; }
          }
          @media (min-width: 1536px) { .xxlShow { display: inline; } }

          button { cursor: pointer; }
          button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 2px solid ${C.green}; outline-offset: 2px; }
          input:focus, select:focus, textarea:focus { --tw-ring-color: ${C.green}33; border-color: ${C.green}; }
          @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
        `}</style>

        <div ref={topRef} />

        <Header
          page={page} onNav={onNav} t={t} lang={lang} setLang={setLang}
          auth={auth} notifications={notifications}
          onLogin={(m) => setAuthModal(m)}
          onLogout={() => { logOut(); toast(tr("Signed out.")); }}
        />

        <main>
          {page === "home" && <HomePage {...shared} docsChecked={checked.length} />}
          {page === "landBuying" && <LandBuyingPage {...shared} done={done} toggleDone={toggleDone} profile={profile} setProfile={setProfile} />}
          {page === "documents" && <DocumentsPage {...shared} checked={checked} toggleCheck={toggleCheck} />}
          {page === "charges" && <ChargesPage {...shared} />}
          {page === "ai" && <AIAssistantPage {...shared} profile={profile} lang={lang} />}
          {page === "legal" && <LegalVerificationPage {...shared} onLogin={(m) => setAuthModal(m)} addNotification={addNotification} />}
          {page === "resources" && <ResourcesPage {...shared} />}
          {page === "contact" && <ContactPage {...shared} />}
          {page === "dashboard" && <DashboardPage {...shared} onLogin={(m) => setAuthModal(m)} done={done} checked={checked} activity={activity} />}
          {page === "account" && (
            <AccountPage
              {...shared} onLogin={(m) => setAuthModal(m)} prefs={prefs} setPrefs={setPrefs}
              lang={lang} setLang={setLang} checked={checked} activity={activity}
              onVerifyEmail={() => setVerifyEmailOpen(true)}
              onLogout={() => { logOut(); onNav("home"); }}
            />
          )}
        </main>

        <Footer onNav={onNav} toast={toast} />

        <AuthModal
          mode={authModal}
          onClose={() => setAuthModal(null)}
          toast={toast}
          onDone={async (result, switchTo) => {
            if (switchTo) return setAuthModal(switchTo);
            const wasSignup = authModal === "signup";
            const { token, user } = result;
            setToken(token);
            setAuth(user);
            setAuthModal(null);
            await hydrateProgress();
            hydrated.current = true;
            logActivity(fillText(tr, "Signed in as {0}", user.email));
            addNotification({ title: tr("Welcome to BhumiGuide"), body: tr("Your progress is now saved to your account.") });
            toast(fillText(tr, "Welcome, {0}.", user.name.split(" ")[0]));
            onNav("dashboard");
            if (wasSignup && !user.emailVerified) setVerifyEmailOpen(true);
          }}
        />

        <VerifyEmailModal
          open={verifyEmailOpen}
          onClose={() => setVerifyEmailOpen(false)}
          auth={auth}
          setAuth={setAuth}
          toast={toast}
        />

        <Toasts items={toasts} />
      </div>
    </LangCtx.Provider>
  );
}
