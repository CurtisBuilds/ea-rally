import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { findCoachByEmail } from "@/lib/db";

export default async function RootPage() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/sign-in");

  const coach = await findCoachByEmail(user.email!);

  if (!coach || coach.status === "removed") redirect("/access-denied");
  if (coach.role === "admin") redirect("/admin");
  redirect("/coach");
}
