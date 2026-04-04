import { NextRequest, NextResponse } from "next/server";
import { getSiteByHostname } from "@/lib/sites";

export function middleware(request: NextRequest) {
  const hostname =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "localhost:3000";

  const site = getSiteByHostname(hostname);

  // Rewrite to same path with site as query param (URL in browser stays clean)
  const url = request.nextUrl.clone();
  url.searchParams.set("__site", site);

  return NextResponse.rewrite(url);
}

// Run on all routes except static files
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
