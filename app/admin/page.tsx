import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { findCoachByEmail, findAllCoaches } from "@/lib/db";
import AdminPanel from "@/components/AdminPanel";

export default async function AdminPage() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  const me = await findCoachByEmail(user.email!);
  if (!me || me.role !== "admin") redirect("/coach");

  const coaches = await findAllCoaches();

  return <AdminPanel coaches={coaches} adminName={me.firstName || me.email} />;
}
