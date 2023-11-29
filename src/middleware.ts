import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];

export default async function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl;
  const session = !!req.cookies.get("next-auth.session-token");

  if (pathname.startsWith("/s/")) {
    const response = await fetch(`${req.nextUrl.origin}/api/url/${pathname.slice(3)}`);

    if (response.status === 404) {
      return NextResponse.redirect(new URL("/404", req.url));
    }

    const { url } = await response.json();

    return NextResponse.redirect(new URL(url));
  }

  if (pathname.startsWith("/auth") && session) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!session && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

export const config = {
  matcher: ["/auth", "/dashboard/:path*", "/s/:slug*"],
};
