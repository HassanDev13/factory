import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { pathnames, locales, localePrefix } from "./config/config";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const language = pathname.split("/")[1];
  const body = request.url;
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );
  const shouldHandle =
    pathname === "/" ||
    new RegExp(`^/(${locales.join("|")})(/.*)?$`).test(
      request.nextUrl.pathname
    );
  console.log("pathname", request.nextUrl.pathname);
  if (!shouldHandle) return;
  const user = await supabase.auth.getSession();
  const redirectUrl = request.nextUrl.clone();
  // If the user is authenticated and the pathname is /login or /register, redirect to home
  if (user.data.session  && (pathname.endsWith('/login') || pathname.endsWith('/register'))) {
    redirectUrl.pathname =`${language}/dashboard`;
    return NextResponse.redirect(redirectUrl);
  }
  // If the user is not authenticated and the pathname is not /login or /register, redirect to /login

  if (
    !user.data.session &&
    !pathname.endsWith("/login") &&
    !pathname.endsWith("/register")
  ) {
    //return NextResponse.redirect('/login')
  
    redirectUrl.pathname =`${language}/login`;
    return NextResponse.redirect(redirectUrl);
   
  }

  return intlMiddleware(request);
}

const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
