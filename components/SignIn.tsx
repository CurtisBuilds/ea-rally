"use client";
import { useState, FormEvent } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function SignIn() {
  const supabase = createSupabaseBrowserClient();
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(false);

  async function sendCode(e?: FormEvent) {
    e?.preventDefault();
    if (cooldown) return;
    setPending(true); setError(null);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        shouldCreateUser: true, // Auth account created on first OTP — Coach table controls actual access
      },
    });
    setPending(false);
    if (error) { setError("No account found for this email. Contact your admin."); return; }
    setStep("code");
    // 30-second resend cooldown
    setCooldown(true);
    setTimeout(() => setCooldown(false), 30000);
  }

  async function verifyCode(e: FormEvent) {
    e.preventDefault();
    setPending(true); setError(null);
    const { error } = await supabase.auth.verifyOtp({ email, token: code, type: "email" });
    setPending(false);
    if (error) { setError("That code didn't match — try again or resend."); return; }
    window.location.assign("/");
  }

  const card: React.CSSProperties = {
    background: "var(--ea-white)",
    borderRadius: "var(--radius-card)",
    padding: "var(--space-7)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
  };
  const label: React.CSSProperties = {
    display: "block",
    fontSize: "var(--fs-label)",
    fontWeight: "var(--fw-semibold)",
    color: "var(--ea-navy)",
    marginBottom: "var(--space-2)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  };
  const input: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: 16,
    fontFamily: "var(--font-body)",
    color: "var(--text-body)",
    background: "var(--ea-white)",
    border: "1px solid var(--border-card)",
    borderRadius: "var(--radius-input)",
    outline: "none",
    marginBottom: "var(--space-5)",
    letterSpacing: "var(--ls-body)",
  };
  const btnPrimary: React.CSSProperties = {
    width: "100%",
    padding: "14px",
    background: "var(--action-primary)",
    color: "var(--action-on-primary)",
    border: "none",
    borderRadius: "var(--radius-button)",
    fontSize: 16,
    fontWeight: "var(--fw-semibold)",
    cursor: pending ? "not-allowed" : "pointer",
    opacity: pending ? 0.7 : 1,
    letterSpacing: "var(--ls-body)",
  };
  const btnGhost: React.CSSProperties = {
    background: "none",
    border: "none",
    color: "var(--ea-slate)",
    fontSize: 14,
    cursor: "pointer",
    padding: "var(--space-2) 0",
    textDecoration: "underline",
  };

  if (step === "email") {
    return (
      <div style={card}>
        <form onSubmit={sendCode}>
          <label style={label}>Email address</label>
          <input
            style={input}
            type="email"
            required
            autoFocus
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button style={btnPrimary} type="submit" disabled={pending || !email}>
            {pending ? "Sending…" : "Send sign-in code"}
          </button>
          {error && (
            <p style={{ color: "var(--ea-danger)", fontSize: 14, marginTop: "var(--space-3)", textAlign: "center" }}>
              {error}
            </p>
          )}
        </form>
      </div>
    );
  }

  return (
    <div style={card}>
      <p style={{ color: "var(--ea-slate)", marginBottom: "var(--space-5)", fontSize: 15 }}>
        We sent a 6-digit code to <strong style={{ color: "var(--ea-navy)" }}>{email}</strong>.
        Check your inbox.
      </p>
      <form onSubmit={verifyCode}>
        <label style={label}>6-digit code</label>
        <input
          style={{ ...input, fontSize: 28, letterSpacing: "0.3em", textAlign: "center", fontWeight: "var(--fw-bold)" }}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={6}
          autoFocus
          placeholder="000000"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
        />
        <button style={btnPrimary} type="submit" disabled={pending || code.length !== 6}>
          {pending ? "Verifying…" : "Verify and sign in"}
        </button>
        {error && (
          <p style={{ color: "var(--ea-danger)", fontSize: 14, marginTop: "var(--space-3)", textAlign: "center" }}>
            {error}
          </p>
        )}
      </form>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-4)" }}>
        <button style={btnGhost} onClick={() => { setStep("email"); setCode(""); setError(null); }}>
          ← Change email
        </button>
        <button style={{ ...btnGhost, opacity: cooldown ? 0.4 : 1, cursor: cooldown ? "default" : "pointer" }}
          onClick={() => sendCode()} disabled={cooldown}>
          {cooldown ? "Resend in 30s" : "Resend code"}
        </button>
      </div>
    </div>
  );
}
