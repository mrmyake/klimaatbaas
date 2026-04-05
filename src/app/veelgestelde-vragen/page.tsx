import type { Metadata } from "next";
import VeelgesteldeVragenPage from "@/sites/subsidiebaas/pages/VeelgesteldeVragenPage";

export const metadata: Metadata = {
  title: "Veelgestelde vragen ISDE subsidie 2026 | Subsidiebaas",
  description:
    "Antwoorden op de meest gestelde vragen over ISDE-subsidie voor warmtepompen, isolatie en ventilatie in 2026.",
  openGraph: {
    title: "Veelgestelde vragen ISDE subsidie 2026 | Subsidiebaas",
    description:
      "Antwoorden op de meest gestelde vragen over ISDE-subsidie voor warmtepompen, isolatie en ventilatie in 2026.",
    url: "https://subsidiebaas.com/veelgestelde-vragen",
    siteName: "Subsidiebaas",
    type: "website",
  },
  alternates: { canonical: "https://subsidiebaas.com/veelgestelde-vragen" },
};

export default function Page() {
  return <VeelgesteldeVragenPage />;
}
