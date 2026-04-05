"use client";

import SubsidieLayout from "@/sites/subsidiebaas/components/SubsidieLayout";
import SubsidieCalculator from "@/components/SubsidieCalculator";
import SchemaMarkup from "@/sites/subsidiebaas/components/SchemaMarkup";
import { sites } from "@/lib/sites";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Subsidie warmtepomp berekenen — ISDE 2026",
  datePublished: "2026-01-15",
  dateModified: "2026-04-05",
  author: {
    "@type": "Organization",
    name: "Subsidiebaas",
  },
  publisher: {
    "@type": "Organization",
    name: "Klimaatbaas B.V.",
  },
};

export default function SubsidieBerekenenPage() {
  return (
    <SubsidieLayout breadcrumb="Subsidie Berekenen" slug="subsidie-berekenen">
      <SchemaMarkup schema={articleSchema} />

      <article className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="font-heading text-2xl font-black tracking-tight mb-6">
          Subsidie warmtepomp berekenen — ISDE 2026
        </h1>

        <p className="text-[#44474d] leading-relaxed mb-10">
          Bereken hieronder hoeveel ISDE-subsidie u in 2026 ontvangt voor uw warmtepomp.
          Selecteer uw type, vermogen en energielabel. U ziet direct het indicatieve bedrag.
        </p>

        <SubsidieCalculator
          primaryColor={sites.subsidiebaas.colors.primary}
          variant="full"
        />

        <h2 className="font-heading text-2xl font-black tracking-tight mt-16 mb-4">
          Hoe wordt de subsidie berekend?
        </h2>

        <div className="text-[#44474d] leading-relaxed space-y-4">
          <p>
            De ISDE-subsidie voor warmtepompen in 2026 is opgebouwd uit een startbedrag,
            een bedrag per kW vermogen en een mogelijke labelbonus:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Eerste lucht-water warmtepomp:</strong> €1.025 startbedrag + €225 per kW +
              €200 labelbonus (A+++)
            </li>
            <li>
              <strong>Tweede lucht-water warmtepomp:</strong> alleen €225 per kW
            </li>
            <li>
              <strong>Grond-water warmtepomp:</strong> €1.575 startbedrag + €350 per kW +
              €225 labelbonus
            </li>
            <li>
              <strong>Warmtepompboiler:</strong> vast bedrag ~€675
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-black tracking-tight mt-16 mb-4">
          Combinatie met isolatie
        </h2>

        <p className="text-[#44474d] leading-relaxed mb-6">
          Voert u naast de warmtepomp ook isolatiemaatregelen door? Dan ontvangt u een hoger
          subsidiebedrag. De overheid stimuleert combinaties van maatregelen: wie isoleert en
          tegelijk een warmtepomp plaatst, krijgt een opslag bovenop het basisbedrag. Dit maakt
          het extra aantrekkelijk om isolatie en een warmtepomp gelijktijdig te laten uitvoeren.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="/isde-subsidie-2026"
            className="text-[#27AE60] underline font-semibold"
          >
            Meer over ISDE-subsidie 2026
          </a>
          <a
            href="/veelgestelde-vragen"
            className="text-[#27AE60] underline font-semibold"
          >
            Veelgestelde vragen
          </a>
        </div>
      </article>
    </SubsidieLayout>
  );
}
