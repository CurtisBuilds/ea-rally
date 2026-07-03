export default function AccessDeniedPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--ea-teal-900)",
      padding: "var(--space-5)",
    }}>
      <div style={{ width: "100%", maxWidth: 420, textAlign: "center" }}>
        <img
          src="/pickleball.jpeg"
          alt="EA Rally"
          style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", margin: "0 auto var(--space-4)" }}
        />
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: 36,
          color: "var(--ea-white)",
          textTransform: "uppercase",
          letterSpacing: "var(--ls-display)",
          lineHeight: 1,
          marginBottom: "var(--space-4)",
        }}>
          EA Rally
        </h1>
        <div style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "var(--radius-card)",
          padding: "var(--space-6)",
        }}>
          <p style={{ color: "var(--ea-white)", fontSize: 17, marginBottom: "var(--space-3)" }}>
            Your account isn&apos;t set up yet.
          </p>
          <p style={{ color: "var(--ea-sky-light)", fontSize: 14, lineHeight: 1.6 }}>
            Ask your administrator to invite you to EA Rally. Once they add you, sign in with the same email address.
          </p>
        </div>
        <a
          href="/sign-in"
          style={{
            display: "inline-block",
            marginTop: "var(--space-5)",
            color: "var(--ea-sky-light)",
            fontSize: 14,
            textDecoration: "underline",
          }}
        >
          ← Back to sign in
        </a>
      </div>
    </main>
  );
}
