export type SiteKey = "warmtebaas" | "aircobaas" | "klimaatbaas" | "subsidiebaas";

export interface SiteConfig {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    primaryDark: string;
    accent: string;
    bg: string;
    text: string;
  };
  og: {
    title: string;
    description: string;
  };
}

export const sites: Record<SiteKey, SiteConfig> = {
  warmtebaas: {
    name: "Warmtebaas",
    domain: "warmtebaas.com",
    tagline: "Uw specialist in warmtepompen",
    description:
      "Advies, installatie en subsidie-ontzorging voor warmtepompen in Midden-Nederland",
    colors: {
      primary: "#C0392B",
      primaryDark: "#96281B",
      accent: "#E74C3C",
      bg: "#FFF5F5",
      text: "#1A1A1A",
    },
    og: {
      title: "Warmtebaas | Warmtepomp specialist Midden-Nederland",
      description:
        "Bespaar tot €4.400 subsidie op uw warmtepomp. Gratis adviesgesprek en offerte binnen 48 uur.",
    },
  },
  aircobaas: {
    name: "Aircobaas",
    domain: "aircobaas.com",
    tagline: "Airco geplaatst binnen 2 weken",
    description:
      "Split en multi-split airconditioning met verwarmingsfunctie. Snel, netjes, vakkundig.",
    colors: {
      primary: "#2980B9",
      primaryDark: "#1A5276",
      accent: "#3498DB",
      bg: "#F0F8FF",
      text: "#1A1A1A",
    },
    og: {
      title: "Aircobaas | Airco laten plaatsen in Midden-Nederland",
      description:
        "Airco geplaatst binnen 2 weken. Koelen én verwarmen. Gratis offerte, vakkundige installatie.",
    },
  },
  klimaatbaas: {
    name: "Klimaatbaas",
    domain: "klimaatbaas.com",
    tagline: "Verwarmt. Koelt. Ontzorgd.",
    description:
      "Uw totaalpartner voor warmtepompen, airconditioning en klimaatcomfort in Midden-Nederland.",
    colors: {
      primary: "#1B4F72",
      primaryDark: "#0E2F44",
      accent: "#2E86C1",
      bg: "#F8FBFE",
      text: "#1A1A1A",
    },
    og: {
      title: "Klimaatbaas | Warmtepompen & Airconditioning Midden-Nederland",
      description:
        "Klimaatbaas: specialist in warmtepompen en airconditioning. Verwarmt. Koelt. Ontzorgd.",
    },
  },
  subsidiebaas: {
    name: "Subsidiebaas",
    domain: "subsidiebaas.com",
    tagline: "Weet wat u kunt besparen",
    description:
      "Gratis subsidiecheck voor warmtepompen en isolatie. ISDE, meldcodes en aanvraagbegeleiding.",
    colors: {
      primary: "#27AE60",
      primaryDark: "#1E8449",
      accent: "#2ECC71",
      bg: "#F0FFF4",
      text: "#1A1A1A",
    },
    og: {
      title: "Subsidiebaas | Gratis subsidiecheck warmtepomp & isolatie",
      description:
        "Check direct hoeveel ISDE-subsidie u kunt krijgen. Gratis, vrijblijvend, binnen 2 minuten.",
    },
  },
};

export function getSiteByHostname(hostname: string): SiteKey {
  const clean = hostname.replace("www.", "").split(":")[0];
  for (const [key, config] of Object.entries(sites)) {
    if (clean === config.domain || clean === key) {
      return key as SiteKey;
    }
  }
  return "klimaatbaas";
}
