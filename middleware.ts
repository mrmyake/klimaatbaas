import { NextRequest, NextResponse } from "next/server";
import { getSiteByHostname } from "@/lib/sites";

export function middleware(request: NextRequest) {
  // Vercel sets x-forwarded-host; fall back to host header for local dev
  const hostname =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "localhost:3000";

  const site = getSiteByHostname(hostname);

  console.log(`[middleware] hostname="${hostname}" → site="${site}"`);

  // Set x-site on the REQUEST headers so server components can read it via headers()
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site", site);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
