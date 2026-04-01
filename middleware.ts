import { NextRequest, NextResponse } from "next/server";
import { getSiteByHostname } from "@/lib/sites";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "localhost:3000";
  const site = getSiteByHostname(hostname);

  const response = NextResponse.next();
  response.headers.set("x-site", site);

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
