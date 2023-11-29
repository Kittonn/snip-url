import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = !!req.cookies.get("next-auth.session-token");

  if (path.startsWith("/s/")) {
    const data = await fetch(`${req.nextUrl.origin}/api/url/${path.slice(3)}`);

    if (data.status === 404) {
      return NextResponse.redirect(new URL("/404", req.url));
    }

    const { url } = await data.json();

    if (!url) {
      return NextResponse.redirect(new URL("/404", req.url));
    }

    return NextResponse.redirect(new URL(url));
  }

  if (path.startsWith("/auth") && session) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!session && protectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

export const config = {
  matcher: ["/auth", "/dashboard/:path*", "/s/:slug*"],
};
