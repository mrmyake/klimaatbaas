import type { Metadata } from "next";
import ISDESubsidiePage from "@/sites/subsidiebaas/pages/ISDESubsidiePage";

export const metadata: Metadata = {
  title: "ISDE Subsidie 2026: Bedragen, Voorwaarden & Aanvragen | Subsidiebaas",
  description:
    "Alles over de ISDE-subsidie in 2026. Bedragen per warmtepomp, voorwaarden, stappenplan aanvragen en wijzigingen t.o.v. 2025.",
  openGraph: {
    title: "ISDE Subsidie 2026: Bedragen, Voorwaarden & Aanvragen",
    description:
      "Alles over de ISDE-subsidie in 2026. Bedragen per warmtepomp, voorwaarden, stappenplan aanvragen en wijzigingen t.o.v. 2025.",
    url: "https://subsidiebaas.com/isde-subsidie-2026",
    siteName: "Subsidiebaas",
    type: "article",
  },
  alternates: { canonical: "https://subsidiebaas.com/isde-subsidie-2026" },
};

export default function Page() {
  return <ISDESubsidiePage />;
}
