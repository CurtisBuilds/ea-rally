import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow auth callback through
  if (pathname.startsWith("/auth")) return NextResponse.next();

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => request.cookies.get(name)?.value,
        set: (name: string, value: string, options: Record<string, unknown>) => {
          request.cookies.set({ name, value, ...options } as Parameters<typeof request.cookies.set>[0]);
          response = NextResponse.next({ request });
          response.cookies.set({ name, value, ...options } as Parameters<typeof response.cookies.set>[0]);
        },
        remove: (name: string, options: Record<string, unknown>) => {
          request.cookies.set({ name, value: "", ...options } as Parameters<typeof request.cookies.set>[0]);
          response = NextResponse.next({ request });
          response.cookies.set({ name, value: "", ...options } as Parameters<typeof response.cookies.set>[0]);
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Not signed in — redirect everything except /sign-in to sign-in
  if (!user && pathname !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Already signed in — don't let them hit /sign-in again
  if (user && pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpeg|.*\\.jpg|.*\\.svg|.*\\.ttf|.*\\.woff2).*)"],
};
