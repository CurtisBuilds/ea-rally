import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { findCoachByEmail } from "@/lib/db";
import CoachNav from "@/components/CoachNav";

export default async function CoachLayout({ children }: { children: React.ReactNode }) {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  const coach = await findCoachByEmail(user.email!);
  if (!coach || coach.status === "removed") redirect("/access-denied");

  const name = [coach.firstName, coach.lastName].filter(Boolean).join(" ") || coach.email;

  return (
    <div style={{ minHeight: "100vh", background: "var(--ea-mist)" }}>
      <CoachNav name={name} isAdmin={coach.role === "admin"} />
      {children}
    </div>
  );
}
