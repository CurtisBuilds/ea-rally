import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow auth callback and access-denied through
  if (pathname.startsWith("/auth") || pathname.startsWith("/access-denied")) return NextResponse.next();

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => request.cookies.get(name)?.value,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        set: (name: string, value: string, _options: Record<string, unknown>) => {
          // @ts-ignore
          request.cookies.set(name, value);
          response = NextResponse.next({ request });
          // @ts-ignore
          response.cookies.set(name, value);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        remove: (name: string, _options: Record<string, unknown>) => {
          // @ts-ignore
          request.cookies.delete(name);
          response = NextResponse.next({ request });
          // @ts-ignore
          response.cookies.delete(name);
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
