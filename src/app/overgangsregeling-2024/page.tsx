import type { Metadata } from "next";
import OvergangsregelingPage from "./OvergangsregelingPage";

export const metadata: Metadata = {
  title: "ISDE Overgangsregeling 2024-2026: hoger subsidiebedrag | Subsidiebaas",
  description:
    "Warmtepomp gekocht in 2024, geïnstalleerd in 2025 of 2026? U kunt het hogere subsidiebedrag van 2024 claimen.",
  openGraph: {
    title: "ISDE Overgangsregeling 2024-2026: hoger subsidiebedrag",
    description:
      "Warmtepomp gekocht in 2024? Claim het hogere subsidiebedrag van 2024.",
    url: "https://subsidiebaas.com/overgangsregeling-2024",
    siteName: "Subsidiebaas",
    type: "article",
  },
  alternates: { canonical: "https://subsidiebaas.com/overgangsregeling-2024" },
};

export default function Page() {
  return <OvergangsregelingPage />;
}
