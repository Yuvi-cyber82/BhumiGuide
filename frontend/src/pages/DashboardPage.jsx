import React from "react";
import { Home, FileText, Calculator, Bot, ShieldCheck, BookOpen, ChevronRight, Check, CheckCircle2, Lock, Activity, ClipboardList } from "lucide-react";
import { Breadcrumb, Btn, Card, Donut, IconBadge, PageHead } from "../components/ui";
import { DOCUMENTS } from "../data/documents";
import { PROCEDURE } from "../data/procedure";
import { fillText, useTr } from "../i18n";
import { C } from "../theme";

/* ================================================================== *
 *  DASHBOARD
 * ================================================================== */

export function DashboardPage({ t, onNav, auth, onLogin, done, checked, activity }) {
  const tr = useTr();
  if (!auth)
    return (
      <div className="wrap mx-auto px-4 py-20 text-center">
        <IconBadge icon={Lock} size={56} />
        <h2 className="mt-4 text-xl font-extrabold" style={{ color: C.ink }}>{tr("Sign in to see your dashboard")}</h2>
        <p className="text-sm mt-2" style={{ color: C.mute }}>{tr("Your progress, verifications and saved documents live here.")}</p>
        <div className="mt-5 flex gap-2 justify-center">
          <Btn onClick={() => onLogin("login")}>{tr("Login")}</Btn>
          <Btn variant="outline" onClick={() => onLogin("signup")}>{tr("Create an account")}</Btn>
        </div>
      </div>
    );

  const totalSteps = PROCEDURE.length;
  const pct = Math.round((done.length / totalSteps) * 100);
  return (
    <div className="wrap mx-auto px-4 py-7">
      <Breadcrumb items={[{ label: tr("Home"), page: "home" }, { label: t("nav.dashboard") }]} onNav={onNav} />
      <PageHead title={fillText(tr, "Welcome back, {0}", auth.name.split(" ")[0])} sub={tr("Where you are in the land buying process right now.")} />

      <div className="mb-5" style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {[[FileText, tr("Documents collected"), `${checked.length}/${DOCUMENTS.length}`], [ClipboardList, tr("Steps completed"), `${done.length}/${totalSteps}`],
        [ShieldCheck, tr("Verifications run"), "8"], [Bot, tr("AI questions asked"), "27"]].map(([Icon, label, val]) => (
          <Card key={label}>
            <div className="flex items-center gap-3">
              <IconBadge icon={Icon} size={40} />
              <div>
                <div className="t11" style={{ color: C.mute }}>{label}</div>
                <div className="text-xl font-extrabold" style={{ color: C.ink }}>{val}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 l3">
        <Card className="lsp1">
          <div className="text-sm font-bold mb-4" style={{ color: C.ink }}>{tr("Procedure progress")}</div>
          <div className="flex justify-center">
            <Donut
              segments={[{ value: done.length, color: C.green }, { value: Math.max(totalSteps - done.length, 0), color: "#EEF1EF" }]}
              center={`${pct}%`} label={tr("steps done")} size={160}
            />
          </div>
          <div className="mt-4 space-y-1.5">
            {[[tr("Completed"), done.length, C.green], [tr("Remaining"), totalSteps - done.length, "#D5DAD7"]].map(([l, n, col]) => (
              <div key={l} className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: col }} />
                <span style={{ color: C.body }}>{l}</span>
                <span className="ml-auto font-bold" style={{ color: C.ink }}>{n}</span>
              </div>
            ))}
          </div>
          <div className="mt-4"><Btn size="sm" full variant="outline" onClick={() => onNav("landBuying")}>{tr("Continue the procedure")}</Btn></div>
        </Card>

        <Card className="lsp1">
          <div className="text-sm font-bold mb-3" style={{ color: C.ink }}>{tr("Recent activity")}</div>
          {activity.length === 0 ? (
            <div className="text-center py-10">
              <Activity size={26} style={{ color: C.line }} className="mx-auto" />
              <p className="text-xs mt-2" style={{ color: C.mute }}>{tr("Nothing yet. Your actions on the site will show up here.")}</p>
            </div>
          ) : (
            <div className="space-y-2">
              {activity.slice(0, 6).map((a, i) => (
                <div key={i} className="flex gap-2.5 py-2" style={{ borderBottom: `1px solid ${C.line2}` }}>
                  <CheckCircle2 size={14} style={{ color: C.green }} className="shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-xs font-semibold" style={{ color: C.ink }}>{a.title}</div>
                    <div className="t10" style={{ color: C.mute }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="lsp1">
          <div className="text-sm font-bold mb-3" style={{ color: C.ink }}>{tr("Quick actions")}</div>
          <div className="space-y-2">
            {[[ShieldCheck, tr("Start legal verification"), "legal"],
            [Bot, tr("Ask the AI Assistant"), "ai"], [Calculator, tr("Calculate charges"), "charges"], [BookOpen, tr("Browse resources"), "resources"]].map(([Icon, label, page]) => (
              <button key={label} onClick={() => onNav(page)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-gray-50"
                style={{ border: `1px solid ${C.line2}` }}>
                <Icon size={16} style={{ color: C.green }} />
                <span className="text-xs font-semibold flex-1" style={{ color: C.ink }}>{label}</span>
                <ChevronRight size={14} style={{ color: C.mute }} />
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

