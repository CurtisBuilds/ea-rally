import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { findCoachByEmail, updateCoachStatus } from "@/lib/db";
import Link from "next/link";
import { curriculum } from "@/lib/curriculum-data";

const LEVEL_COLORS: Record<number, { bg: string; badge: string; dot: string }> = {
  1: { bg: "#E8F5E9", badge: "#2E7D32", dot: "#4CAF50" },
  2: { bg: "#E3F2FD", badge: "#1565C0", dot: "#2196F3" },
  3: { bg: "#FFF3E0", badge: "#E65100", dot: "#FF9800" },
};

export default async function CoachPage() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  const coach = await findCoachByEmail(user.email!);
  if (!coach || coach.status === "removed") redirect("/sign-in");

  if (coach.status === "invited") {
    await updateCoachStatus(coach.id, "active");
  }

  const levels = [1, 2, 3] as const;

  return (
    <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-10) var(--space-6)" }}>
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 5vw, 44px)",
          color: "var(--ea-teal-900)",
          textTransform: "uppercase",
          letterSpacing: "var(--ls-display)",
          marginBottom: "var(--space-3)",
        }}>
          Coaching Curriculum
        </h1>
        <p style={{ color: "var(--ea-slate)", fontSize: 16 }}>
          3 Levels · 24 Sessions · Coach reference guide
        </p>
      </div>

      {/* Level cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-5)" }}>
        {levels.map(num => {
          const level = curriculum[num];
          const colors = LEVEL_COLORS[num];
          return (
            <Link key={num} href={`/coach/${num}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "var(--ea-white)",
                borderRadius: "var(--radius-card)",
                border: "1px solid var(--ea-border)",
                padding: "var(--space-7)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}>
                {/* Level badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-5)" }}>
                  <span style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: colors.bg, display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-display)", fontSize: 15, color: colors.badge,
                    fontWeight: 700, letterSpacing: "0.05em", flexShrink: 0,
                  }}>
                    L{num}
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 12, color: colors.badge, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Level {num}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--ea-slate)" }}>{level.skill}</div>
                  </div>
                </div>

                <h2 style={{ fontSize: 20, color: "var(--ea-navy)", marginBottom: "var(--space-2)", lineHeight: 1.3 }}>
                  {level.name.replace(`Level ${num} — `, "")}
                </h2>
                <p style={{ fontSize: 13, color: "var(--ea-slate)", marginBottom: "var(--space-5)" }}>
                  {level.sessions.length} sessions · {level.duration} each · {level.drills} drills
                </p>

                {/* Session list preview */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                  {level.sessions.slice(0, 5).map(s => (
                    <div key={s.num} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.dot, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: "var(--ea-slate)" }}>S{s.num}: {s.title}</span>
                    </div>
                  ))}
                  {level.sessions.length > 5 && (
                    <div style={{ fontSize: 12, color: "var(--ea-teal-700)", paddingLeft: 14 }}>
                      +{level.sessions.length - 5} more sessions
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div style={{
                  marginTop: "var(--space-6)",
                  padding: "var(--space-3) var(--space-4)",
                  background: "var(--ea-teal-900)",
                  color: "var(--ea-white)",
                  borderRadius: "var(--radius-btn)",
                  textAlign: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  View Sessions →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
