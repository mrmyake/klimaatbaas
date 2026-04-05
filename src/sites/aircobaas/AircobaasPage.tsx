"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import USPs from "@/components/USPs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import { sites } from "@/lib/sites";
import { utmLink } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import { Clock, Thermometer, Paintbrush, Euro } from "lucide-react";

const config = sites.aircobaas;

function UrgentieBanner() {
  return (
    <div className="bg-[#1A5276] text-white text-center py-3 px-6 text-sm font-medium">
      ☀️ Klaar voor de zomer? Plan nu uw airco-installatie — binnen 2 weken geplaatst
    </div>
  );
}

function DirectAnswer() {
  return (
    <section className="direct-answer py-16 px-6 bg-blue-50/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl font-bold mb-6">
          Airco laten plaatsen: wat u moet weten
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong>Wat kost een airco?</strong> Een single-split airco kost vanaf
            €1.800 inclusief installatie. Een multi-split systeem voor 2–3 ruimtes
            kost vanaf €3.500, en voor 4+ ruimtes vanaf €5.500. Alle prijzen zijn
            inclusief materiaal en 2 jaar garantie.
          </p>
          <p>
            <strong>Kan een airco ook verwarmen?</strong> Ja, moderne split-systemen
            zijn warmtepompen die ook verwarmen tot -15°C buitentemperatuur. Ideaal
            als bijverwarming in voor- en naseizoen.
          </p>
          <p>
            <strong>Hoe snel geplaatst?</strong> Bij Aircobaas meestal binnen
            2 weken na akkoord. De installatie zelf duurt een halve tot hele dag.
          </p>
        </div>
      </div>
    </section>
  );
}

function PrijsIndicatie() {
  const prijzen = [
    { type: "Single split", ruimtes: "1 ruimte", prijs: "vanaf €1.800", description: "Single split airconditioning voor 1 ruimte inclusief installatie" },
    { type: "Multi-split", ruimtes: "2-3 ruimtes", prijs: "vanaf €3.500", description: "Multi-split airconditioning voor 2-3 ruimtes inclusief installatie" },
    { type: "Multi-split", ruimtes: "4+ ruimtes", prijs: "vanaf €5.500", description: "Multi-split airconditioning voor 4+ ruimtes inclusief installatie" },
  ];

  const productSchema = prijzen.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${p.type} airconditioning (${p.ruimtes})`,
    description: p.description,
    brand: { "@type": "Organization", name: "Aircobaas (Klimaatbaas B.V.)" },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: p.prijs.match(/[\d.]+/)?.[0]?.replace(".", "") || "0",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  }));

  return (
    <section className="py-20 px-6 bg-blue-50/50">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <h2 className="font-heading text-3xl font-bold text-center mb-4">Wat kost een airco?</h2>
        <p className="text-gray-600 text-center mb-10">Inclusief installatie, materiaal en 2 jaar garantie.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {prijzen.map((p) => (
            <div key={p.ruimtes} className="glass rounded-2xl p-8 text-center">
              <Euro className="w-8 h-8 mx-auto mb-4 text-blue-500" aria-hidden="true" />
              <h3 className="font-heading font-bold text-lg mb-1">{p.type}</h3>
              <p className="text-gray-500 text-sm mb-4">{p.ruimtes}</p>
              <p className="text-2xl font-bold text-blue-600">{p.prijs}</p>
              <p className="text-xs text-gray-500 mt-1">geïnstalleerd</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 text-center mt-6">
          Ook interesse in een{" "}
          <a href={utmLink("https://warmtebaas.com", "aircobaas", "prijstabel-link")} onClick={() => trackEvent("cta_click_warmtebaas")} className="underline font-semibold" style={{ color: "#C0392B" }}>warmtepomp voor verwarming</a>? Bekijk warmtebaas.com.
        </p>
      </div>
    </section>
  );
}

function PrijsCTA() {
  return (
    <section className="py-16 px-6 bg-blue-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
          Wilt u weten wat een airco voor uw woning kost?
        </h2>
        <p className="text-gray-600 mb-8">
          Offerte op maat, rekening houdend met het aantal ruimtes en uw wensen.
        </p>
        <button
          onClick={() =>
            document.getElementById("formulier")?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: config.colors.primary }}
        >
          Gratis offerte aanvragen
        </button>
      </div>
    </section>
  );
}

function InternalLinks() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl font-bold mb-4">Meer van Klimaatbaas</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={utmLink("https://warmtebaas.com", "aircobaas", "meer-van-klimaatbaas")} onClick={() => trackEvent("cta_click_warmtebaas")} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-red-200 text-red-700 font-semibold hover:bg-red-50 transition-colors">Warmtepomp nodig? → Warmtebaas</a>
          <a href={utmLink("https://subsidiebaas.com", "aircobaas", "meer-van-klimaatbaas")} onClick={() => trackEvent("cta_click_subsidiebaas")} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-green-200 text-green-700 font-semibold hover:bg-green-50 transition-colors">Subsidie berekenen → Subsidiebaas</a>
          <a href={utmLink("https://klimaatbaas.com", "aircobaas", "meer-van-klimaatbaas")} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">Over ons → Klimaatbaas</a>
        </div>
      </div>
    </section>
  );
}

export default function AircobaasPage() {
  return (
    <>
      <Navbar siteName="Aircobaas" primaryColor={config.colors.primary} />
      <Hero
        kop="Klaar voor de zomer? Airco geplaatst vóór het warm wordt"
        subkop="Koelen én verwarmen. Vakkundige installatie binnen 2 weken. Regio Utrecht & Het Gooi."
        cta="Gratis offerte aanvragen"
        bgClass="bg-gradient-to-b from-blue-50 to-blue-100/50"
        primaryColor={config.colors.primary}
      />
      <UrgentieBanner />
      <DirectAnswer />
      <USPs
        primaryColor={config.colors.primary}
        bgIconColor="#DBEAFE"
        items={[
          { icon: Clock, title: "Binnen 2 weken geplaatst", description: "Geen maandenlange wachtlijsten. Wij plannen snel." },
          { icon: Thermometer, title: "Koelen én verwarmen", description: "Moderne airco's verwarmen ook. Ideaal voor tussenseizoen." },
          { icon: Paintbrush, title: "Nette afwerking", description: "Kabelgoten op kleur, buitenunit netjes weggewerkt, alles opgeruimd." },
        ]}
      />
      <PrijsIndicatie />
      <PrijsCTA />
      <Reviews
        primaryColor={config.colors.primary}
        reviews={[
          { naam: "Sophie", plaats: "Bunnik", sterren: 5, tekst: "Binnen een week geplaatst. Heerlijk koel huis, ook fijn als verwarming in het najaar." },
          { naam: "Mark & Lisa", plaats: "Nieuwegein", sterren: 5, tekst: "Nette jongens, alles keurig afgewerkt. Zelfs de buitenunit zie je bijna niet." },
          { naam: "Dennis", plaats: "Utrecht", sterren: 5, tekst: "Snelle offerte, snelle plaatsing, prima prijs. Aanrader." },
        ]}
      />
      <FAQ
        primaryColor={config.colors.primary}
        items={[
          { vraag: "Hoe snel kan mijn airco geplaatst worden?", antwoord: "Meestal binnen 2 weken na akkoord op de offerte." },
          { vraag: "Kan een airco ook verwarmen?", antwoord: "Ja, moderne split-systemen verwarmen tot -15°C buitentemperatuur. Ideaal voor voor- en naseizoen." },
          { vraag: "Hoeveel geluid maakt een airco?", antwoord: "Moderne binnenunits: 19-25 dB (stiller dan een fluistering). Buitenunits: 45-50 dB." },
          { vraag: "Heb ik een vergunning nodig voor een airco?", antwoord: "Meestal niet. Alleen bij monumenten of VvE's kan toestemming nodig zijn." },
        ]}
      />
      <InternalLinks />
      <LeadForm
        site="aircobaas"
        title="Gratis offerte aanvragen"
        primaryColor={config.colors.primary}
        submitLabel="Offerte aanvragen"
        subtext="Binnen 24 uur reactie. Vrijblijvend."
        fields={[
          { name: "naam", label: "Naam", type: "text", required: true },
          { name: "email", label: "E-mail", type: "email", required: true },
          { name: "telefoon", label: "Telefoon", type: "tel", required: true },
          { name: "postcode", label: "Postcode", type: "text" },
          { name: "aantal_ruimtes", label: "Aantal ruimtes", type: "select", options: [{ value: "1", label: "1 ruimte" }, { value: "2-3", label: "2-3 ruimtes" }, { value: "4+", label: "4+ ruimtes" }] },
          { name: "type_airco", label: "Gewenst", type: "select", options: [{ value: "koelen", label: "Alleen koelen" }, { value: "koelen-en-verwarmen", label: "Koelen én verwarmen" }, { value: "weet-niet", label: "Weet ik nog niet" }] },
          { name: "gewenste_timing", label: "Wanneer", type: "select", options: [{ value: "zo-snel-mogelijk", label: "Zo snel mogelijk" }, { value: "binnen-3-maanden", label: "Binnen 3 maanden" }, { value: "orienterend", label: "Ik oriënteer me" }] },
          { name: "bericht", label: "Bericht (optioneel)", type: "textarea", placeholder: "Heeft u nog vragen of opmerkingen?" },
        ]}
      />
      <Footer primaryColor={config.colors.primary} links={[{ label: "Ook van het gas af? → warmtebaas.com", href: utmLink("https://warmtebaas.com", "aircobaas", "footer-link") }, { label: "Subsidie checken? → subsidiebaas.com", href: utmLink("https://subsidiebaas.com", "aircobaas", "footer-link") }]} />
      <StickyCTA label="Gratis offerte aanvragen" primaryColor={config.colors.primary} />
      <WhatsAppButton message="Hallo, ik heb een vraag over airconditioning" />
    </>
  );
}
