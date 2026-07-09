import SignIn from "@/components/SignIn";

export default function SignInPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--ea-sky-soft)",
      padding: "var(--space-5)",
    }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        {/* Logo block */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-7)" }}>
          <img src="/bball-logo.svg" alt="Elevation Athletics" style={{ height: 90, width: "auto", marginBottom: "var(--space-2)" }} />
          <p style={{ color: "var(--ea-teal-700)", marginTop: "var(--space-2)", fontSize: 15 }}>
            Coach curriculum — sign in to continue
          </p>
        </div>
        <SignIn />
      </div>
    </main>
  );
}
