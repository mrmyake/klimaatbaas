import { NextRequest, NextResponse } from "next/server";
import { getSiteByHostname } from "@/lib/sites";

export function middleware(request: NextRequest) {
  const hostname =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "localhost:3000";

  const site = getSiteByHostname(hostname);

  // Set x-site header for edge caching + rewrite with query param for page routing
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site", site);

  const url = request.nextUrl.clone();
  url.searchParams.set("__site", site);

  return NextResponse.rewrite(url, {
    request: { headers: requestHeaders },
  });
}

// Run on all routes except static files
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
