import type { Metadata } from "next";
import SubsidieAanvraagFoutenPage from "./SubsidieAanvraagFoutenPage";

export const metadata: Metadata = {
  title: "7 fouten waardoor uw ISDE-subsidieaanvraag wordt afgewezen | Subsidiebaas",
  description:
    "Voorkom afwijzing van uw ISDE-subsidie. Deze 7 veelgemaakte fouten kosten u duizenden euro's.",
  openGraph: {
    title: "7 fouten waardoor uw ISDE-subsidieaanvraag wordt afgewezen",
    description:
      "Voorkom afwijzing van uw ISDE-subsidie. Deze 7 veelgemaakte fouten kosten u duizenden euro's.",
    url: "https://subsidiebaas.com/subsidie-aanvraag-fouten",
    siteName: "Subsidiebaas",
    type: "article",
  },
  alternates: { canonical: "https://subsidiebaas.com/subsidie-aanvraag-fouten" },
};

export default function Page() {
  return <SubsidieAanvraagFoutenPage />;
}
