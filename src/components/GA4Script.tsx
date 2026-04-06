"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_IDS: Record<string, string> = {
  warmtebaas: "G-CBQK82C2SV",
  aircobaas: "G-D2RME4N10X",
  klimaatbaas: "G-RSF4K3JMJ5",
  subsidiebaas: "G-J4TP53K0CS",
};

const ALL_DOMAINS = ["subsidiebaas.com", "warmtebaas.com", "aircobaas.com", "klimaatbaas.com"];

function getSiteFromHostname(hostname: string): string {
  const clean = hostname.replace("www.", "").split(":")[0];
  for (const key of Object.keys(GA_IDS)) {
    if (clean === `${key}.com` || clean === key) return key;
  }
  return "klimaatbaas";
}

export default function GA4Script() {
  const [gaId, setGaId] = useState<string | null>(null);

  useEffect(() => {
    const site = getSiteFromHostname(window.location.hostname);
    setGaId(GA_IDS[site] || GA_IDS.klimaatbaas);
  }, []);

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            linker: { domains: ${JSON.stringify(ALL_DOMAINS)} }
          });
        `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11009845057"
        strategy="lazyOnload"
      />
      <Script id="gads-init" strategy="lazyOnload">
        {`gtag('config', 'AW-11009845057');`}
      </Script>
    </>
  );
}
