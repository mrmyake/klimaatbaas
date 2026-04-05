import type { Metadata } from "next";
import VentilatiesubsidiePage from "./VentilatiesubsidiePage";

export const metadata: Metadata = {
  title: "Ventilatiesubsidie 2026: €400 ISDE-subsidie voor ventilatie | Subsidiebaas",
  description:
    "Nieuw in 2026: €400 ISDE-subsidie voor energiezuinige ventilatiesystemen. Voorwaarden, bedragen en aanvraagproces.",
  openGraph: {
    title: "Ventilatiesubsidie 2026: €400 subsidie voor energiezuinige ventilatie",
    description:
      "Nieuw in 2026: €400 ISDE-subsidie voor energiezuinige ventilatiesystemen.",
    url: "https://subsidiebaas.com/ventilatiesubsidie-2026",
    siteName: "Subsidiebaas",
    type: "article",
  },
  alternates: { canonical: "https://subsidiebaas.com/ventilatiesubsidie-2026" },
};

export default function Page() {
  return <VentilatiesubsidiePage />;
}
