import { headers } from "next/headers";
import type { Metadata } from "next";
import { sites, type SiteKey } from "@/lib/sites";

export const dynamic = "force-dynamic";
import WarmtebaasPage from "@/sites/warmtebaas/WarmtebaasPage";
import AircobaasPage from "@/sites/aircobaas/AircobaasPage";
import KlimaatbaasPage from "@/sites/klimaatbaas/KlimaatbaasPage";
import SubsidiebaasPage from "@/sites/subsidiebaas/SubsidiebaasPage";

function getSiteFromHeaders(): SiteKey {
  const headersList = headers();
  const site = headersList.get("x-site") as SiteKey | null;
  return site && site in sites ? site : "klimaatbaas";
}

export async function generateMetadata(): Promise<Metadata> {
  const site = getSiteFromHeaders();
  const config = sites[site];

  return {
    title: config.og.title,
    description: config.og.description,
    openGraph: {
      title: config.og.title,
      description: config.og.description,
      url: `https://${config.domain}`,
      siteName: config.name,
      type: "website",
    },
    alternates: {
      canonical: `https://${config.domain}`,
    },
  };
}

export default function Page() {
  const site = getSiteFromHeaders();

  const structuredData =
    site === "klimaatbaas"
      ? {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Klimaatbaas B.V.",
          description: "Installatie van warmtepompen en airconditioning",
          areaServed: "Midden-Nederland",
          url: "https://klimaatbaas.com",
        }
      : null;

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      {site === "warmtebaas" && <WarmtebaasPage />}
      {site === "aircobaas" && <AircobaasPage />}
      {site === "klimaatbaas" && <KlimaatbaasPage />}
      {site === "subsidiebaas" && <SubsidiebaasPage />}
    </>
  );
}
