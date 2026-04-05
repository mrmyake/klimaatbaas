import type { Metadata } from "next";
import SubsidieBerekenenPage from "@/sites/subsidiebaas/pages/SubsidieBerekenenPage";

export const metadata: Metadata = {
  title: "Subsidie warmtepomp berekenen 2026 — gratis ISDE calculator | Subsidiebaas",
  description:
    "Bereken direct hoeveel ISDE-subsidie u krijgt voor uw warmtepomp in 2026. Gratis calculator met actuele bedragen.",
  openGraph: {
    title: "Subsidie warmtepomp berekenen 2026 — gratis ISDE calculator | Subsidiebaas",
    description:
      "Bereken direct hoeveel ISDE-subsidie u krijgt voor uw warmtepomp in 2026. Gratis calculator met actuele bedragen.",
    url: "https://subsidiebaas.com/subsidie-berekenen",
    siteName: "Subsidiebaas",
    type: "website",
  },
  alternates: { canonical: "https://subsidiebaas.com/subsidie-berekenen" },
};

export default function Page() {
  return <SubsidieBerekenenPage />;
}
