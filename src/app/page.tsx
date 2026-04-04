import type { Metadata } from "next";
import { sites, type SiteKey } from "@/lib/sites";

import WarmtebaasPage from "@/sites/warmtebaas/WarmtebaasPage";
import AircobaasPage from "@/sites/aircobaas/AircobaasPage";
import KlimaatbaasPage from "@/sites/klimaatbaas/KlimaatbaasPage";
import SubsidiebaasPage from "@/sites/subsidiebaas/SubsidiebaasPage";

const siteComponents: Record<SiteKey, React.ComponentType> = {
  warmtebaas: WarmtebaasPage,
  aircobaas: AircobaasPage,
  klimaatbaas: KlimaatbaasPage,
  subsidiebaas: SubsidiebaasPage,
};

const allDomains = Object.values(sites).map((s) => s.domain);

function getSite(searchParams: { __site?: string }): SiteKey {
  const site = searchParams.__site;
  return site && site in sites ? (site as SiteKey) : "klimaatbaas";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { __site?: string };
}): Promise<Metadata> {
  const site = getSite(searchParams);
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
      locale: "nl_NL",
    },
    alternates: {
      canonical: `https://${config.domain}`,
      languages: Object.fromEntries(
        allDomains.map((d) => ["nl", `https://${d}`])
      ),
    },
    other: {
      // hreflang tags voor alle zuster-sites
      ...Object.fromEntries(
        allDomains.map((d) => [`alternate-${d}`, `https://${d}`])
      ),
    },
  };
}

function getLocalBusinessSchema(site: SiteKey) {
  const config = sites[site];
  const descriptions: Record<SiteKey, string> = {
    warmtebaas:
      "Specialist in warmtepompen in Midden-Nederland. Advies, installatie en ISDE-subsidieaanvraag.",
    aircobaas:
      "Airconditioning specialist in Midden-Nederland. Split en multi-split airco, koelen én verwarmen.",
    klimaatbaas:
      "Installatiebedrijf voor warmtepompen en airconditioning in Midden-Nederland.",
    subsidiebaas:
      "Gratis ISDE-subsidiecheck en aanvraagbegeleiding voor warmtepompen in Midden-Nederland.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://${config.domain}/#organization`,
    name: `${config.name} (Klimaatbaas B.V.)`,
    description: descriptions[site],
    url: `https://${config.domain}`,
    areaServed: {
      "@type": "State",
      name: "Utrecht",
      containedIn: { "@type": "Country", name: "NL" },
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Utrecht",
      addressCountry: "NL",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Klimaatbaas B.V.",
      url: "https://klimaatbaas.com",
    },
    sameAs: allDomains
      .filter((d) => d !== config.domain)
      .map((d) => `https://${d}`),
  };
}

function getBreadcrumbSchema(site: SiteKey) {
  const config = sites[site];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://${config.domain}/`,
      },
    ],
  };
}

function getSpeakableSchema(site: SiteKey) {
  const config = sites[site];
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.og.title,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".direct-answer", "h1", ".hero-subkop"],
    },
    url: `https://${config.domain}/`,
  };
}

export default function Page({
  searchParams,
}: {
  searchParams: { __site?: string };
}) {
  const site = getSite(searchParams);
  const SiteComponent = siteComponents[site];

  const schemas = [
    getLocalBusinessSchema(site),
    getBreadcrumbSchema(site),
    getSpeakableSchema(site),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SiteComponent />
    </>
  );
}
