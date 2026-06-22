import { notFound } from "next/navigation";
import Link from "next/link";
import { curriculum } from "@/lib/curriculum-data";

const LEVEL_COLORS: Record<number, { bg: string; badge: string; border: string; dot: string }> = {
  1: { bg: "#E8F5E9", badge: "#2E7D32", border: "#A5D6A7", dot: "#4CAF50" },
  2: { bg: "#E3F2FD", badge: "#1565C0", border: "#90CAF9", dot: "#2196F3" },
  3: { bg: "#FFF3E0", badge: "#E65100", border: "#FFCC80", dot: "#FF9800" },
};

const TYPE_COLORS: Record<string, string> = {
  warmup: "#FF7043",
  skill: "#0092DB",
  drill: "#7B1FA2",
  game: "#2E7D32",
  social: "#F57C00",
  cool: "#00838F",
};

export default function LevelPage({ params }: { params: { level: string } }) {
  const levelNum = parseInt(params.level);
  const level = curriculum[levelNum];
  if (!level) notFound();

  const colors = LEVEL_COLORS[levelNum];

  return (
    <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-8) var(--space-6)" }}>
      {/* Level header */}
      <div style={{
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: "var(--radius-card)",
        padding: "var(--space-6) var(--space-7)",
        marginBottom: "var(--space-7)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)",
      }}>
        <span style={{
          width: 52, height: 52, borderRadius: "50%",
          background: colors.badge, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontSize: 18, color: "#fff",
          letterSpacing: "0.05em", flexShrink: 0,
        }}>
          L{levelNum}
        </span>
        <div>
          <h1 style={{ fontSize: 24, color: "var(--ea-navy)", marginBottom: 4 }}>{level.name}</h1>
          <p style={{ fontSize: 14, color: "var(--ea-slate)" }}>
            {level.sessions.length} sessions · {level.duration} each · Skill range: {level.skill}
          </p>
        </div>
      </div>

      {/* Session grid */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        {level.sessions.map(session => (
          <Link key={session.num} href={`/coach/${levelNum}/${session.num}`} style={{ textDecoration: "none" }}>
            <div style={{
              background: "var(--ea-white)",
              border: "1px solid var(--ea-border)",
              borderRadius: "var(--radius-card)",
              padding: "var(--space-5) var(--space-6)",
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--space-5)",
              transition: "box-shadow 0.15s",
            }}
            >
              {/* Session number */}
              <span style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--ea-mist)", border: `2px solid ${colors.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontSize: 13, color: colors.badge,
                flexShrink: 0, fontWeight: 700,
              }}>
                {session.num}
              </span>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: 4 }}>
                  <h3 style={{ fontSize: 16, color: "var(--ea-navy)", margin: 0 }}>{session.title}</h3>
                  {session.complexity && (
                    <span style={{
                      fontSize: 11, fontFamily: "var(--font-display)", letterSpacing: "0.06em",
                      color: "#E65100", background: "#FFF3E0", border: "1px solid #FFCC80",
                      padding: "1px 7px", borderRadius: 4, textTransform: "uppercase",
                    }}>Complex</span>
                  )}
                  {session.assessment && (
                    <span style={{
                      fontSize: 11, fontFamily: "var(--font-display)", letterSpacing: "0.06em",
                      color: "#1565C0", background: "#E3F2FD", border: "1px solid #90CAF9",
                      padding: "1px 7px", borderRadius: 4, textTransform: "uppercase",
                    }}>Graduation</span>
                  )}
                </div>
                <p style={{ fontSize: 13, color: "var(--ea-slate)", margin: "0 0 var(--space-3)" }}>
                  {session.subtitle}
                </p>
                {/* Timeline blocks mini-preview */}
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {session.timeline.map((block, i) => (
                    <span key={i} style={{
                      fontSize: 11, padding: "2px 8px", borderRadius: 3,
                      background: TYPE_COLORS[block.type] + "18",
                      color: TYPE_COLORS[block.type],
                      border: `1px solid ${TYPE_COLORS[block.type]}30`,
                    }}>
                      {block.time} {block.icon}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <span style={{ color: "var(--ea-slate)", fontSize: 18, flexShrink: 0, alignSelf: "center" }}>›</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
