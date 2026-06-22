import SignIn from "@/components/SignIn";

export default function SignInPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--ea-teal-900)",
      padding: "var(--space-5)",
    }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        {/* Logo block */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-7)" }}>
          <img
            src="/pickleball.jpeg"
            alt="Pickleball"
            style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", margin: "0 auto var(--space-4)" }}
          />
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: 36,
            color: "var(--ea-white)",
            textTransform: "uppercase",
            letterSpacing: "var(--ls-display)",
            lineHeight: 1,
          }}>
            EA Rally
          </h1>
          <p style={{ color: "var(--ea-sky-light)", marginTop: "var(--space-2)", fontSize: 15 }}>
            Coach curriculum — sign in to continue
          </p>
        </div>
        <SignIn />
      </div>
    </main>
  );
}
