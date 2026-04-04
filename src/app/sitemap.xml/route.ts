import { NextRequest, NextResponse } from "next/server";
import { getSiteByHostname, sites } from "@/lib/sites";

export function GET(request: NextRequest) {
  const hostname =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "localhost:3000";
  const site = getSiteByHostname(hostname);
  const domain = sites[site].domain;
  const today = new Date().toISOString().split("T")[0];
  const allDomains = Object.values(sites).map((s) => s.domain);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://${domain}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${allDomains.map((d) => `    <xhtml:link rel="alternate" hreflang="nl" href="https://${d}/" />`).join("\n")}
  </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
