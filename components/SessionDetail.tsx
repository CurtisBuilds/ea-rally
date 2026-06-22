"use client";

import { useState } from "react";
import Link from "next/link";
import type { Session } from "@/lib/curriculum-data";

const TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  warmup:  { bg: "#FBE9E7", text: "#BF360C", border: "#FFAB91" },
  skill:   { bg: "#E3F2FD", text: "#0D47A1", border: "#90CAF9" },
  drill:   { bg: "#F3E5F5", text: "#4A148C", border: "#CE93D8" },
  game:    { bg: "#E8F5E9", text: "#1B5E20", border: "#A5D6A7" },
  social:  { bg: "#FFF8E1", text: "#E65100", border: "#FFE082" },
  cool:    { bg: "#E0F7FA", text: "#006064", border: "#80DEEA" },
};

const TYPE_LABELS: Record<string, string> = {
  warmup: "Warm-Up", skill: "Skill", drill: "Drill", game: "Game", social: "Social", cool: "Cool-Down",
};

type Tab = "timeline" | "objectives" | "equipment" | "cues" | "videos" | "assessment";

interface Props {
  session: Session;
  levelNum: number;
  levelName: string;
  levelDuration: string;
  prevNum: number | null;
  nextNum: number | null;
}

export default function SessionDetail({ session, levelNum, levelName, levelDuration, prevNum, nextNum }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("timeline");
  const [expandedBlock, setExpandedBlock] = useState<number | null>(null);

  const allTabs = [
    { id: "timeline" as Tab,    label: "Timeline",   show: true },
    { id: "objectives" as Tab,  label: "Objectives", show: true },
    { id: "equipment" as Tab,   label: "Equipment",  show: true },
    { id: "cues" as Tab,        label: "Coach Cues", show: (session.cues?.length ?? 0) > 0 },
    { id: "videos" as Tab,      label: "Videos",     show: session.youtube.length > 0 },
    { id: "assessment" as Tab,  label: "Assessment", show: !!session.assessment },
  ];
  const tabs = allTabs.filter(t => t.show);

  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "var(--space-6) var(--space-6) var(--space-12)" }}>

      {/* ── Priority banner ── */}
      <div style={{
        background: "var(--ea-teal-900)",
        color: "var(--ea-white)",
        borderRadius: "var(--radius-card)",
        padding: "var(--space-4) var(--space-6)",
        marginBottom: "var(--space-5)",
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--space-3)",
      }}>
        <span style={{ fontSize: 18, flexShrink: 0 }}>🎯</span>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.1em", color: "var(--ea-sky-light)", textTransform: "uppercase", marginBottom: 4 }}>
            Session Priority
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0 }}>{session.priority}</p>
        </div>
      </div>

      {/* ── Session header ── */}
      <div style={{
        background: "var(--ea-white)",
        border: "1px solid var(--ea-border)",
        borderRadius: "var(--radius-card)",
        padding: "var(--space-6) var(--space-7)",
        marginBottom: "var(--space-5)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-2)", flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "var(--font-display)", fontSize: 12,
            color: "var(--ea-teal-700)", textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            {levelName} · {levelDuration}
          </span>
          {session.complexity && (
            <span style={{
              fontSize: 11, fontFamily: "var(--font-display)", letterSpacing: "0.06em",
              color: "#E65100", background: "#FFF3E0", border: "1px solid #FFCC80",
              padding: "2px 8px", borderRadius: 4, textTransform: "uppercase",
            }}>⚡ Complex Session</span>
          )}
          {session.assessment && (
            <span style={{
              fontSize: 11, fontFamily: "var(--font-display)", letterSpacing: "0.06em",
              color: "#1565C0", background: "#E3F2FD", border: "1px solid #90CAF9",
              padding: "2px 8px", borderRadius: 4, textTransform: "uppercase",
            }}>🎓 Graduation Session</span>
          )}
        </div>

        <h1 style={{ fontSize: "clamp(22px, 4vw, 30px)", color: "var(--ea-navy)", marginBottom: "var(--space-2)" }}>
          Session {session.num}: {session.title}
        </h1>
        <p style={{ color: "var(--ea-slate)", fontSize: 14 }}>{session.subtitle}</p>

        {/* Coach tip */}
        {session.coachTip != null && (
          <div style={{
            marginTop: "var(--space-4)",
            padding: "var(--space-3) var(--space-4)",
            background: "#FFF8E1",
            border: "1px solid #FFE082",
            borderRadius: 6,
            fontSize: 13,
            color: "#5D4037",
          }}>
            <strong style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#E65100" }}>
              Coach Tip
            </strong>
            <p style={{ margin: "4px 0 0" }}>{session.coachTip}</p>
          </div>
        )}
      </div>

      {/* ── Tabs ── */}
      <div style={{
        display: "flex", gap: 4, flexWrap: "wrap",
        marginBottom: "var(--space-5)",
        borderBottom: "2px solid var(--ea-border)",
        paddingBottom: 0,
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "var(--space-2) var(--space-4)",
              fontSize: 13,
              fontFamily: tab.id === activeTab ? "var(--font-display)" : "var(--font-body)",
              letterSpacing: tab.id === activeTab ? "0.06em" : "normal",
              textTransform: tab.id === activeTab ? "uppercase" : "none",
              color: tab.id === activeTab ? "var(--ea-teal-900)" : "var(--ea-slate)",
              background: "none",
              border: "none",
              borderBottom: tab.id === activeTab ? "2px solid var(--ea-teal-900)" : "2px solid transparent",
              marginBottom: -2,
              cursor: "pointer",
              transition: "color 0.15s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Tab: Timeline ── */}
      {activeTab === "timeline" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {session.timeline.map((block, i) => {
            const colors = TYPE_COLORS[block.type] ?? TYPE_COLORS.drill;
            const isExpanded = expandedBlock === i;
            const hasGuide = !!block.guide;

            return (
              <div key={i} style={{
                background: "var(--ea-white)",
                border: `1px solid var(--ea-border)`,
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
              }}>
                {/* Block header */}
                <div
                  style={{
                    padding: "var(--space-4) var(--space-5)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--space-4)",
                    cursor: hasGuide ? "pointer" : "default",
                  }}
                  onClick={() => hasGuide && setExpandedBlock(isExpanded ? null : i)}
                >
                  {/* Time pill */}
                  <span style={{
                    flexShrink: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: colors.text,
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    padding: "3px 8px",
                    borderRadius: 4,
                    whiteSpace: "nowrap",
                    marginTop: 2,
                  }}>
                    {block.time} min
                  </span>

                  {/* Label + desc */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: 3 }}>
                      <span style={{ fontSize: 16 }}>{block.icon}</span>
                      <span style={{ fontWeight: 600, fontSize: 15, color: "var(--ea-navy)" }}>{block.label}</span>
                      <span style={{
                        fontSize: 10, fontFamily: "var(--font-display)", letterSpacing: "0.06em",
                        color: colors.text, background: colors.bg,
                        padding: "1px 6px", borderRadius: 3, textTransform: "uppercase",
                      }}>
                        {TYPE_LABELS[block.type]}
                      </span>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--ea-slate)", margin: 0, lineHeight: 1.5 }}>{block.desc}</p>
                  </div>

                  {/* Expand arrow */}
                  {hasGuide && (
                    <span style={{
                      fontSize: 16, color: "var(--ea-slate)", flexShrink: 0, alignSelf: "center",
                      transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}>›</span>
                  )}
                </div>

                {/* Guide accordion */}
                {hasGuide && isExpanded && block.guide && (
                  <div style={{
                    borderTop: "1px solid var(--ea-border)",
                    padding: "var(--space-5) var(--space-5) var(--space-5) var(--space-6)",
                    background: "var(--ea-mist)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-5)",
                  }}>
                    {/* Setup */}
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ea-teal-700)", marginBottom: "var(--space-2)" }}>
                        Setup
                      </div>
                      <p style={{ fontSize: 13, color: "var(--ea-slate)", margin: 0 }}>{block.guide.setup}</p>
                    </div>

                    {/* Steps */}
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ea-teal-700)", marginBottom: "var(--space-2)" }}>
                        Steps
                      </div>
                      <ol style={{ margin: 0, paddingLeft: "var(--space-5)", display: "flex", flexDirection: "column", gap: 6 }}>
                        {block.guide.steps.map((step, si) => (
                          <li key={si} style={{ fontSize: 13, color: "var(--ea-navy)", lineHeight: 1.5 }}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Progressions */}
                    {block.guide.progressions && block.guide.progressions.length > 0 && (
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ea-teal-700)", marginBottom: "var(--space-2)" }}>
                          Progressions
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                          {block.guide.progressions.map((p, pi) => (
                            <div key={pi} style={{
                              background: "var(--ea-white)", border: "1px solid var(--ea-border)",
                              borderRadius: 6, padding: "var(--space-3) var(--space-4)",
                            }}>
                              <div style={{ fontWeight: 600, fontSize: 12, color: "var(--ea-navy)", marginBottom: 3 }}>{p.label}</div>
                              <p style={{ fontSize: 13, color: "var(--ea-slate)", margin: 0 }}>{p.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Errors */}
                    {block.guide.errors && block.guide.errors.length > 0 && (
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C62828", marginBottom: "var(--space-2)" }}>
                          Common Errors
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                          {block.guide.errors.map((err, ei) => (
                            <div key={ei} style={{
                              background: "#FFF5F5", border: "1px solid #FFCDD2",
                              borderRadius: 6, padding: "var(--space-3) var(--space-4)",
                            }}>
                              <div style={{ fontSize: 12, color: "#C62828", marginBottom: 3 }}>
                                ❌ {err.mistake}
                              </div>
                              <div style={{ fontSize: 13, color: "#1B5E20" }}>
                                ✅ {err.fix}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Filler */}
                    {block.guide.filler && (
                      <div style={{
                        background: "#E8F5E9", border: "1px solid #A5D6A7",
                        borderRadius: 6, padding: "var(--space-3) var(--space-4)",
                      }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2E7D32", marginBottom: 3 }}>
                          Got time left?
                        </div>
                        <p style={{ fontSize: 13, color: "var(--ea-navy)", margin: 0 }}>{block.guide.filler}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Tab: Objectives ── */}
      {activeTab === "objectives" && (
        <div style={{ background: "var(--ea-white)", border: "1px solid var(--ea-border)", borderRadius: "var(--radius-card)", padding: "var(--space-6) var(--space-7)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ea-teal-700)", marginBottom: "var(--space-4)" }}>
            Session Objectives
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {session.objectives.map((obj, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)", fontSize: 15, color: "var(--ea-navy)", lineHeight: 1.5 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--ea-teal-900)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontFamily: "var(--font-display)", flexShrink: 0, marginTop: 2 }}>
                  {i + 1}
                </span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Tab: Equipment ── */}
      {activeTab === "equipment" && (
        <div style={{ background: "var(--ea-white)", border: "1px solid var(--ea-border)", borderRadius: "var(--radius-card)", padding: "var(--space-6) var(--space-7)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ea-teal-700)", marginBottom: "var(--space-4)" }}>
            Equipment Needed
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {session.equipment.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3) var(--space-4)", background: "var(--ea-mist)", borderRadius: 6, fontSize: 14, color: "var(--ea-navy)" }}>
                <span style={{ fontSize: 16 }}>🏓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Tab: Coach Cues ── */}
      {activeTab === "cues" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {(session.cues ?? []).map((cue, i) => (
            <div key={i} style={{ background: "var(--ea-white)", border: "1px solid var(--ea-border)", borderRadius: "var(--radius-card)", padding: "var(--space-4) var(--space-6)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ea-teal-700)", marginBottom: "var(--space-2)" }}>
                {cue.label}
              </div>
              <p style={{ fontSize: 15, color: "var(--ea-navy)", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>
                "{cue.text}"
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ── Tab: Videos ── */}
      {activeTab === "videos" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {session.youtube.map((video, i) => {
            const isChannel = video.url.includes("@");
            return (
              <a key={i} href={video.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  background: "var(--ea-white)", border: "1px solid var(--ea-border)",
                  borderRadius: "var(--radius-card)", padding: "var(--space-4) var(--space-6)",
                  display: "flex", alignItems: "center", gap: "var(--space-4)",
                  transition: "box-shadow 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = ""}
                >
                  <span style={{
                    width: 44, height: 44, borderRadius: 8,
                    background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0,
                  }}>▶</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, color: "var(--ea-navy)", fontWeight: 600, marginBottom: 2 }}>{video.title}</div>
                    <div style={{ fontSize: 12, color: "var(--ea-slate)" }}>{video.sub}</div>
                    {isChannel && (
                      <div style={{ fontSize: 11, color: "#E65100", marginTop: 3 }}>↗ YouTube channel</div>
                    )}
                  </div>
                  <span style={{ fontSize: 16, color: "var(--ea-slate)", flexShrink: 0 }}>↗</span>
                </div>
              </a>
            );
          })}
        </div>
      )}

      {/* ── Tab: Assessment ── */}
      {activeTab === "assessment" && session.assessment && (
        <div style={{ background: "var(--ea-white)", border: "1px solid var(--ea-border)", borderRadius: "var(--radius-card)", padding: "var(--space-6) var(--space-7)" }}>
          <div style={{
            background: "#E3F2FD", border: "1px solid #90CAF9",
            borderRadius: 6, padding: "var(--space-4) var(--space-5)",
            marginBottom: "var(--space-6)",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1565C0", marginBottom: 4 }}>
              🎓 Graduation Session
            </div>
            <p style={{ fontSize: 13, color: "#0D47A1", margin: 0 }}>
              Players should meet these benchmarks before advancing to the next level.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {session.assessment.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "var(--space-4)",
                padding: "var(--space-4) var(--space-5)",
                background: "var(--ea-mist)", borderRadius: 8,
                border: "1px solid var(--ea-border)",
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "#1565C0", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontFamily: "var(--font-display)", flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "var(--ea-navy)", marginBottom: 3 }}>{item.skill}</div>
                  <div style={{ fontSize: 13, color: "var(--ea-slate)" }}>{item.target}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Session navigation ── */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-8)", gap: "var(--space-3)" }}>
        {prevNum ? (
          <Link href={`/coach/${levelNum}/${prevNum}`} style={{
            textDecoration: "none", padding: "var(--space-3) var(--space-5)",
            background: "var(--ea-white)", border: "1px solid var(--ea-border)",
            borderRadius: "var(--radius-btn)", fontSize: 14, color: "var(--ea-navy)",
          }}>
            ← Session {prevNum}
          </Link>
        ) : (
          <Link href={`/coach/${levelNum}`} style={{
            textDecoration: "none", padding: "var(--space-3) var(--space-5)",
            background: "var(--ea-white)", border: "1px solid var(--ea-border)",
            borderRadius: "var(--radius-btn)", fontSize: 14, color: "var(--ea-navy)",
          }}>
            ← All Sessions
          </Link>
        )}
        {nextNum ? (
          <Link href={`/coach/${levelNum}/${nextNum}`} style={{
            textDecoration: "none", padding: "var(--space-3) var(--space-5)",
            background: "var(--ea-teal-900)", color: "var(--ea-white)",
            borderRadius: "var(--radius-btn)", fontSize: 14, fontFamily: "var(--font-display)",
            letterSpacing: "0.05em",
          }}>
            Session {nextNum} →
          </Link>
        ) : (
          <Link href={`/coach`} style={{
            textDecoration: "none", padding: "var(--space-3) var(--space-5)",
            background: "var(--ea-teal-900)", color: "var(--ea-white)",
            borderRadius: "var(--radius-btn)", fontSize: 14, fontFamily: "var(--font-display)",
            letterSpacing: "0.05em",
          }}>
            All Levels →
          </Link>
        )}
      </div>
    </main>
  );
}
