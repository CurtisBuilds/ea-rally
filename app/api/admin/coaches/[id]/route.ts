import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { findCoachByEmail, updateCoachStatus } from "@/lib/db";

async function requireAdmin() {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const coach = await findCoachByEmail(user.email!);
  if (!coach || coach.role !== "admin") return null;
  return coach;
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await updateCoachStatus(params.id, "removed");
  return NextResponse.json({ ok: true });
}
