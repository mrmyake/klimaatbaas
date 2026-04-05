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
      primary: "#E05E28",
      primaryDark: "#96281B",
      accent: "#E05E28",
      bg: "#FFF8F4",
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
      primary: "#00030a",
      primaryDark: "#001a20",
      accent: "#00daf3",
      bg: "#00030a",
      text: "#ffffff",
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
      primary: "#00030a",
      primaryDark: "#000000",
      accent: "#00daf3",
      bg: "#00030a",
      text: "#ffffff",
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
      primary: "#065f46",
      primaryDark: "#064e3b",
      accent: "#d4af37",
      bg: "#F4F9F6",
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
