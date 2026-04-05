"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VerifiedBy from "@/components/VerifiedBy";
import { sites } from "@/lib/sites";
import { utmLink } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import { AlertTriangle } from "lucide-react";

const config = sites.subsidiebaas;

const fouten = [
  {
    titel: "1. Meldcode ontbreekt op de factuur",
    uitleg:
      "De meldcode is een unieke registratiecode die uw installateur bij RVO registreert. Zonder deze code op de factuur wordt uw aanvraag direct afgewezen.",
    tip: "Controleer vóór betaling of de meldcode op de factuur staat. Vraag uw installateur dit toe te voegen als het ontbreekt.",
  },
  {
    titel: "2. Warmtepomp staat niet op de meldcodelijst",
    uitleg:
      "Niet elke warmtepomp komt in aanmerking. Het specifieke merk en type moet voorkomen op de officiële meldcodelijst van RVO.",
    tip: "Check vóór aankoop op mijn.rvo.nl of het model op de lijst staat. Uw installateur hoort dit te weten.",
  },
  {
    titel: "3. Zelf geïnstalleerd in plaats van door een bedrijf",
    uitleg:
      "ISDE-subsidie is alleen beschikbaar wanneer de installatie is uitgevoerd door een professioneel bedrijf. Zelfinstallatie komt niet in aanmerking.",
    tip: "Laat de installatie altijd uitvoeren door een gecertificeerd installatiebedrijf met F-gassen certificering.",
  },
  {
    titel: "4. Te laat aangevraagd — deadline: 24 maanden",
    uitleg:
      "U moet de subsidie aanvragen binnen 24 maanden na de installatiedatum. Daarna vervalt uw recht op subsidie.",
    tip: "Vraag de subsidie direct na installatie aan, of laat uw installateur dit regelen.",
  },
  {
    titel: "5. Nieuwbouwwoning — vergunning moet vóór 1 juli 2018 zijn",
    uitleg:
      "ISDE is bedoeld voor bestaande woningen. De bouwvergunning moet zijn verleend vóór 1 juli 2018. Nieuwere woningen komen niet in aanmerking.",
    tip: "Check de bouwvergunningsdatum van uw woning bij uw gemeente.",
  },
  {
    titel: "6. Betaalbewijs ontbreekt",
    uitleg:
      "Bij uw aanvraag moet u een betaalbewijs meesturen: een bankafschrift of iDEAL-bevestiging waaruit de betaling aan de installateur blijkt.",
    tip: "Bewaar altijd uw bankafschrift of iDEAL-bevestiging. Contante betaling is lastig te bewijzen.",
  },
  {
    titel: "7. GWP-eis niet conform — nieuw in 2026",
    uitleg:
      "Vanaf 2026 geldt een nieuwe eis: split-warmtepompen met minder dan 3 kg koudemiddel en een GWP (Global Warming Potential) hoger dan 750 komen niet meer in aanmerking voor subsidie.",
    tip: "Vraag uw installateur naar het koudemiddel en de GWP-waarde. Kies voor R32 of R290 koudemiddel.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: fouten.map((f) => ({
    "@type": "Question",
    name: f.titel.replace(/^\d+\.\s*/, ""),
    acceptedAnswer: {
      "@type": "Answer",
      text: `${f.uitleg} Tip: ${f.tip}`,
    },
  })),
};

export default function SubsidieAanvraagFoutenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar siteName="Subsidiebaas" primaryColor={config.colors.primary} />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-green-600 mb-3">ISDE-subsidie 2026</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            7 fouten waardoor uw ISDE-subsidieaanvraag wordt afgewezen
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Elk jaar worden honderden subsidieaanvragen afgewezen door vermijdbare fouten.
            Hieronder de 7 meest voorkomende — en hoe u ze voorkomt.
          </p>

          <div className="space-y-10">
            {fouten.map((fout) => (
              <section key={fout.titel}>
                <h2 className="font-heading text-xl font-bold mb-3 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" aria-hidden="true" />
                  {fout.titel}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">{fout.uitleg}</p>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm text-green-800">
                    <strong>Zo voorkomt u dit:</strong> {fout.tip}
                  </p>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-2xl p-10 text-center text-white" style={{ backgroundColor: config.colors.primary }}>
            <h2 className="font-heading text-2xl font-bold mb-4">
              Wij regelen uw subsidieaanvraag foutloos
            </h2>
            <p className="mb-6 opacity-90">
              Warmtebaas verzorgt de volledige ISDE-aanvraag. Van meldcode tot uitbetaling.
            </p>
            <a
              href={utmLink("https://warmtebaas.com", "subsidiebaas", "fouten-cta")}
              onClick={() => trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "content" })}
              className="inline-flex items-center gap-2 bg-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ color: config.colors.primary }}
            >
              Gratis woningcheck aanvragen →
            </a>
          </div>
        </div>
      </article>

      <VerifiedBy />
      <Footer
        primaryColor={config.colors.primary}
        links={[
          { label: "Subsidie berekenen → subsidiebaas.com", href: "https://subsidiebaas.com" },
          { label: "Warmtepomp installatie → warmtebaas.com", href: utmLink("https://warmtebaas.com", "subsidiebaas", "footer-link") },
        ]}
      />
      <WhatsAppButton message="Hallo, ik heb een vraag over subsidie" />
    </>
  );
}
