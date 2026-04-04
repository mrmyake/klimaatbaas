import { NextRequest, NextResponse } from "next/server";
import { getSiteByHostname, sites } from "@/lib/sites";

export function GET(request: NextRequest) {
  const hostname =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "localhost:3000";
  const site = getSiteByHostname(hostname);
  const domain = sites[site].domain;

  const body = `User-agent: *
Allow: /

Sitemap: https://${domain}/sitemap.xml
`;

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
