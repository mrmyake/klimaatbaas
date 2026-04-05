import { NextRequest, NextResponse } from "next/server";
import { getSiteByHostname, sites } from "@/lib/sites";

const subsidiebaasPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/subsidie-berekenen", priority: "0.9", changefreq: "monthly" },
  { path: "/isde-subsidie-2026", priority: "0.9", changefreq: "monthly" },
  { path: "/ventilatiesubsidie-2026", priority: "0.7", changefreq: "monthly" },
  { path: "/veelgestelde-vragen", priority: "0.8", changefreq: "monthly" },
  { path: "/subsidie-aanvraag-fouten", priority: "0.7", changefreq: "monthly" },
  { path: "/overgangsregeling-2024", priority: "0.6", changefreq: "monthly" },
];

export function GET(request: NextRequest) {
  const hostname =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "localhost:3000";
  const site = getSiteByHostname(hostname);
  const domain = sites[site].domain;
  const today = new Date().toISOString().split("T")[0];

  const pages =
    site === "subsidiebaas"
      ? subsidiebaasPages
      : [{ path: "/", priority: "1.0", changefreq: "weekly" }];

  const urls = pages
    .map(
      (p) => `  <url>
    <loc>https://${domain}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
