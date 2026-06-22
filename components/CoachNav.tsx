"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

function signOut() {
  // Use browser client for sign-out
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  return supabase.auth.signOut();
}

export default function CoachNav({ name, isAdmin }: { name: string; isAdmin: boolean }) {
  const router = useRouter();
  const pathname = usePathname();

  // Derive breadcrumb from path: /coach/2/5 → Level 2 › Session 5
  const parts = pathname.split("/").filter(Boolean); // ["coach", "2", "5"]
  const levelNum = parts[1] ? parseInt(parts[1]) : null;
  const sessionNum = parts[2] ? parseInt(parts[2]) : null;

  async function handleSignOut() {
    await signOut();
    router.push("/sign-in");
  }

  return (
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
      gap: "var(--space-4)",
    }}>
      {/* Left: Logo + breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", minWidth: 0 }}>
        <Link href="/coach" style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", textDecoration: "none", flexShrink: 0 }}>
          <img src="/pickleball.jpeg" alt="" style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ea-white)", textTransform: "uppercase", letterSpacing: "var(--ls-display)" }}>
            EA Rally
          </span>
        </Link>
        {levelNum && (
          <>
            <span style={{ color: "var(--ea-teal-400)", fontSize: 14 }}>›</span>
            <Link href={`/coach/${levelNum}`} style={{ color: "var(--ea-sky-light)", fontSize: 14, textDecoration: "none" }}>
              Level {levelNum}
            </Link>
          </>
        )}
        {sessionNum && (
          <>
            <span style={{ color: "var(--ea-teal-400)", fontSize: 14 }}>›</span>
            <span style={{ color: "var(--ea-white)", fontSize: 14 }}>Session {sessionNum}</span>
          </>
        )}
      </div>

      {/* Right: Admin link + name + sign out */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", flexShrink: 0 }}>
        {isAdmin && (
          <Link href="/admin" style={{
            fontSize: 12, fontFamily: "var(--font-display)", letterSpacing: "0.08em",
            color: "var(--ea-teal-900)", background: "var(--ea-sky-light)",
            padding: "3px 10px", borderRadius: 4, textDecoration: "none", textTransform: "uppercase",
          }}>
            Admin
          </Link>
        )}
        <span style={{ color: "var(--ea-sky-light)", fontSize: 14 }}>{name}</span>
        <button onClick={handleSignOut} style={{
          fontSize: 13, color: "var(--ea-white)", background: "transparent",
          border: "1px solid rgba(255,255,255,0.3)", borderRadius: 6,
          padding: "4px 12px", cursor: "pointer",
        }}>
          Sign out
        </button>
      </div>
    </header>
  );
}
