import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient, createSupabaseAdminClient } from "@/lib/supabase/server";
import { findCoachByEmail, findAllCoaches, createCoach, coachExistsByEmail } from "@/lib/db";

async function requireAdmin() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const coach = await findCoachByEmail(user.email!);
  if (!coach || coach.role !== "admin") return null;
  return coach;
}

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const coaches = await findAllCoaches();
  return NextResponse.json({ coaches });
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { email, firstName, lastName } = await req.json();
  if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

  const exists = await coachExistsByEmail(email);
  if (exists) return NextResponse.json({ error: "Coach already exists" }, { status: 409 });

  const coach = await createCoach({ email, firstName, lastName });

  const adminClient = createSupabaseAdminClient();
  const { error } = await adminClient.auth.admin.inviteUserByEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    data: { firstName, lastName },
  });

  if (error) {
    console.error("Supabase invite error:", error.message);
    return NextResponse.json({ coach, warning: "Coach added but invite email failed. They can still sign in manually." });
  }

  return NextResponse.json({ coach });
}
