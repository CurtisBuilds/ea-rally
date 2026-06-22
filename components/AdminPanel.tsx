"use client";
import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type Coach = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  status: string;
  createdAt: string;
};

export default function AdminPanel({ coaches: initial, adminName }: { coaches: Coach[]; adminName: string }) {
  const supabase = createSupabaseBrowserClient();
  const [coaches, setCoaches] = useState<Coach[]>(initial);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [removing, setRemoving] = useState<string | null>(null);

  async function inviteCoach(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true); setNotice(null);
    const res = await fetch("/api/admin/coaches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setSubmitting(false);
    if (!res.ok) { setNotice({ type: "error", msg: data.error || "Something went wrong." }); return; }
    setCoaches((prev) => [data.coach, ...prev]);
    setForm({ firstName: "", lastName: "", email: "" });
    setNotice({ type: "success", msg: `Invite sent to ${form.email}.${data.warning ? " " + data.warning : ""}` });
  }

  async function removeCoach(id: string, name: string) {
    if (!confirm(`Remove ${name} from EA Rally? They will lose access immediately.`)) return;
    setRemoving(id);
    await fetch(`/api/admin/coaches/${id}`, { method: "DELETE" });
    setCoaches((prev) => prev.filter((c) => c.id !== id));
    setRemoving(null);
  }

  async function signOut() {
    await supabase.auth.signOut();
    window.location.assign("/sign-in");
  }

  const active = coaches.filter((c) => c.status === "active");
  const invited = coaches.filter((c) => c.status === "invited");

  return (
    <div style={{ minHeight: "100vh", background: "var(--ea-mist)" }}>
      {/* Nav */}
      <header style={{
        background: "var(--ea-teal-900)",
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 var(--space-6)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <img src="/pickleball.jpeg" alt="" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ea-white)", textTransform: "uppercase", letterSpacing: "var(--ls-display)" }}>
            EA Rally
          </span>
          <span style={{ background: "var(--ea-sky-soft)", color: "#1B4E67", fontSize: 12, fontWeight: "var(--fw-semibold)", padding: "3px 10px", borderRadius: "var(--radius-badge)", marginLeft: "var(--space-2)" }}>
            Admin
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <span style={{ color: "var(--ea-sky-light)", fontSize: 14 }}>{adminName}</span>
          <button
            onClick={signOut}
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "var(--ea-white)", borderRadius: "var(--radius-button)", padding: "8px 16px", fontSize: 14, cursor: "pointer", fontFamily: "var(--font-body)" }}
          >
            Sign out
          </button>
        </div>
      </header>

      <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-7) var(--space-6)" }}>

        {/* Notice */}
        {notice && (
          <div style={{
            background: notice.type === "success" ? "var(--ea-success-bg)" : "var(--ea-danger-bg)",
            color: notice.type === "success" ? "var(--ea-success)" : "var(--ea-danger)",
            border: `1px solid ${notice.type === "success" ? "var(--ea-success)" : "var(--ea-danger)"}`,
            borderRadius: "var(--radius-card)",
            padding: "var(--space-4) var(--space-5)",
            marginBottom: "var(--space-6)",
            fontSize: 15,
          }}>
            {notice.msg}
          </div>
        )}

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-4)", marginBottom: "var(--space-7)" }}>
          {[
            { label: "Total Coaches", value: coaches.length },
            { label: "Active", value: active.length },
            { label: "Pending Invite", value: invited.length },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "var(--ea-white)", borderRadius: "var(--radius-card)", padding: "var(--space-5) var(--space-6)", boxShadow: "var(--shadow-card)", border: "1px solid var(--border-card)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 36, color: "var(--ea-navy)", lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 13, color: "var(--ea-slate)", marginTop: "var(--space-2)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "var(--fw-semibold)" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Coaches table */}
        <section style={{ background: "var(--ea-white)", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", border: "1px solid var(--border-card)", marginBottom: "var(--space-7)", overflow: "hidden" }}>
          <div style={{ padding: "var(--space-5) var(--space-6)", borderBottom: "1px solid var(--border-card)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: 18, fontFamily: "var(--font-display)", color: "var(--ea-navy)" }}>Coaches</h2>
          </div>
          {coaches.length === 0 ? (
            <div style={{ padding: "var(--space-8)", textAlign: "center", color: "var(--ea-muted)" }}>
              No coaches yet. Invite your first coach below.
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--ea-mist)" }}>
                  {["Name", "Email", "Status", "Added", ""].map((h) => (
                    <th key={h} style={{ padding: "var(--space-3) var(--space-5)", textAlign: "left", fontSize: 12, fontWeight: "var(--fw-semibold)", color: "var(--ea-slate)", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid var(--border-card)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {coaches.map((c) => {
                  const name = [c.firstName, c.lastName].filter(Boolean).join(" ") || "—";
                  const isActive = c.status === "active";
                  return (
                    <tr key={c.id} style={{ borderBottom: "1px solid var(--border-card)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ea-mist)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                      <td style={{ padding: "var(--space-4) var(--space-5)", fontWeight: "var(--fw-semibold)", color: "var(--ea-navy)" }}>{name}</td>
                      <td style={{ padding: "var(--space-4) var(--space-5)", color: "var(--ea-slate)", fontSize: 15 }}>{c.email}</td>
                      <td style={{ padding: "var(--space-4) var(--space-5)" }}>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 6,
                          padding: "4px 12px", borderRadius: "var(--radius-badge)",
                          background: isActive ? "var(--ea-success-bg)" : "var(--ea-warning-bg)",
                          color: isActive ? "var(--ea-success)" : "var(--ea-warning)",
                          fontSize: 13, fontWeight: "var(--fw-semibold)",
                        }}>
                          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor" }} />
                          {isActive ? "Active" : "Invited"}
                        </span>
                      </td>
                      <td style={{ padding: "var(--space-4) var(--space-5)", color: "var(--ea-muted)", fontSize: 14 }}>
                        {new Date(c.createdAt).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                      </td>
                      <td style={{ padding: "var(--space-4) var(--space-5)", textAlign: "right" }}>
                        <button
                          onClick={() => removeCoach(c.id, name)}
                          disabled={removing === c.id}
                          style={{ background: "none", border: "1px solid var(--border-card)", borderRadius: "var(--radius-button)", padding: "6px 14px", fontSize: 13, color: "var(--ea-danger)", cursor: "pointer", fontFamily: "var(--font-body)", opacity: removing === c.id ? 0.5 : 1 }}
                        >
                          {removing === c.id ? "Removing…" : "Remove"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </section>

        {/* Invite form */}
        <section style={{ background: "var(--ea-white)", borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)", border: "1px solid var(--border-card)", overflow: "hidden" }}>
          <div style={{ padding: "var(--space-5) var(--space-6)", borderBottom: "1px solid var(--border-card)" }}>
            <h2 style={{ fontSize: 18, fontFamily: "var(--font-display)", color: "var(--ea-navy)" }}>Invite a Coach</h2>
            <p style={{ color: "var(--ea-slate)", fontSize: 14, marginTop: "var(--space-2)" }}>They&apos;ll receive an email with a sign-in link.</p>
          </div>
          <form onSubmit={inviteCoach} style={{ padding: "var(--space-6)", display: "grid", gridTemplateColumns: "1fr 1fr 2fr auto", gap: "var(--space-4)", alignItems: "end" }}>
            {[
              { label: "First Name", key: "firstName", placeholder: "Jane", type: "text", required: false },
              { label: "Last Name", key: "lastName", placeholder: "Smith", type: "text", required: false },
              { label: "Email Address", key: "email", placeholder: "jane@example.com", type: "email", required: true },
            ].map(({ label, key, placeholder, type, required }) => (
              <div key={key}>
                <label style={{ display: "block", fontSize: 12, fontWeight: "var(--fw-semibold)", color: "var(--ea-slate)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-2)" }}>{label}</label>
                <input
                  type={type}
                  required={required}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                  style={{ width: "100%", padding: "12px 14px", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-body)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-input)", outline: "none" }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--ea-blue)"; e.target.style.boxShadow = "0 0 0 3px rgba(0,146,219,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--border-card)"; e.target.style.boxShadow = "none"; }}
                />
              </div>
            ))}
            <button
              type="submit"
              disabled={submitting || !form.email}
              style={{ padding: "12px 24px", background: "var(--action-primary)", color: "var(--ea-white)", border: "none", borderRadius: "var(--radius-button)", fontSize: 15, fontWeight: "var(--fw-semibold)", cursor: submitting || !form.email ? "not-allowed" : "pointer", opacity: submitting || !form.email ? 0.6 : 1, fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}
            >
              {submitting ? "Sending…" : "Send Invite"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
