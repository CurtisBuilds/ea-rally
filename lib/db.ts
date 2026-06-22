/**
 * DB helpers — uses Supabase JS (HTTPS/443) instead of direct Prisma connection.
 * This avoids port 5432/6543 firewall issues in local dev and on serverless.
 * Prisma is kept only for schema + migrations via `npx prisma migrate`.
 */
import { createClient } from "@supabase/supabase-js";

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export type Coach = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export async function findCoachByEmail(email: string): Promise<Coach | null> {
  const { data } = await adminClient()
    .from("Coach")
    .select("*")
    .eq("email", email)
    .single();
  return data ?? null;
}

export async function findAllCoaches(): Promise<Coach[]> {
  const { data } = await adminClient()
    .from("Coach")
    .select("*")
    .order("createdAt", { ascending: false });
  return data ?? [];
}

export async function updateCoachRole(id: string, role: string): Promise<void> {
  await adminClient().from("Coach").update({ role }).eq("id", id);
}

export async function createCoach(params: {
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}): Promise<Coach | null> {
  const { data } = await adminClient()
    .from("Coach")
    .insert({ email: params.email, firstName: params.firstName ?? null, lastName: params.lastName ?? null, role: params.role ?? "coach", status: "invited" })
    .select()
    .single();
  return data ?? null;
}

export async function updateCoachStatus(id: string, status: string): Promise<void> {
  await adminClient().from("Coach").update({ status }).eq("id", id);
}

export async function coachExistsByEmail(email: string): Promise<boolean> {
  const { data } = await adminClient()
    .from("Coach")
    .select("id")
    .eq("email", email)
    .single();
  return !!data;
}
