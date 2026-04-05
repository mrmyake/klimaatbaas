"use client";

import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import { utmLink } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import {
  Thermometer,
  Volume2,
  Zap,
  Smartphone,
  Snowflake,
  ArrowRight,
  ChevronRight,
} from "lucide-react";


/* ─── Hero ─── */
function HeroDark() {
  return (
    <section className="relative min-h-[700px] bg-[#00030a] overflow-hidden flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00030a] via-[#00030a]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 lg:mx-0 lg:ml-[max(2rem,calc((100%-80rem)/2+2rem))]">
        <span className="text-[#00daf3] font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
          Airconditioning specialist
        </span>
        <h1 className="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter mb-8">
          Klaar voor de zomer? Airco geplaatst v&oacute;&oacute;r het warm wordt
        </h1>
        <p className="text-xl text-white/60 mb-10 max-w-2xl">
          Koelen &eacute;n verwarmen. Vakkundige installatie binnen 2 weken. Regio Utrecht &amp; Het Gooi.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => {
              trackEvent("cta_click", { destination: "self", source_page: window.location.pathname, cta_location: "hero" });
              document.getElementById("formulier")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-[#00daf3] text-[#00030a] font-semibold px-8 py-4 rounded-lg text-lg shadow-lg shadow-[#00daf3]/20 hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Gratis offerte aanvragen
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "hero" });
              document.getElementById("formulier")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-all"
          >
            Bel ons direct
          </button>
        </div>
      </div>

      {/* Decorative circles — right side */}
      <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2">
        <div className="relative w-80 h-80">
          <div className="absolute inset-0 rounded-full border-2 border-[#00daf3]/10 animate-pulse" />
          <div className="absolute inset-8 rounded-full border-2 border-[#00daf3]/30" />
          <div className="absolute inset-16 rounded-full bg-white/70 backdrop-blur-xl flex items-center justify-center">
            <Snowflake className="text-[#00daf3] w-12 h-12" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Urgency Banner ─── */
function UrgentieBanner() {
  return (
    <div className="bg-[#1A5276] text-white text-center py-3 px-6 text-sm font-medium">
      &#9728;&#65039; Klaar voor de zomer? Plan nu uw airco-installatie — binnen 2 weken geplaatst
    </div>
  );
}

/* ─── Direct Answer (SEO) ─── */
function DirectAnswer() {
  return (
    <section className="direct-answer py-16 px-6 bg-[#00030a]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-black tracking-tight mb-6 text-white">
          Airco laten plaatsen: wat u moet weten
        </h2>
        <div className="space-y-4 text-white/60 leading-relaxed">
          <p>
            <strong className="text-white">Wat kost een airco?</strong> Een single-split airco kost vanaf
            &euro;1.800 inclusief installatie. Een multi-split systeem voor 2–3 ruimtes
            kost vanaf &euro;3.500, en voor 4+ ruimtes vanaf &euro;5.500. Alle prijzen zijn
            inclusief materiaal en 2 jaar garantie.
          </p>
          <p>
            <strong className="text-white">Kan een airco ook verwarmen?</strong> Ja, moderne split-systemen
            zijn warmtepompen die ook verwarmen tot -15&deg;C buitentemperatuur. Ideaal
            als bijverwarming in voor- en naseizoen.
          </p>
          <p>
            <strong className="text-white">Hoe snel geplaatst?</strong> Bij Aircobaas meestal binnen
            2 weken na akkoord. De installatie zelf duurt een halve tot hele dag.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Expertise Bento Grid ─── */
function ExpertiseBento() {
  return (
    <section className="py-32 px-6 bg-[#00030a]">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#00daf3] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
          Waarom Aircobaas
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12 text-white">
          Expertise op elk vlak
        </h2>
        <div className="grid md:grid-cols-12 gap-8">
          {/* Card 1: Fluisterstille Werking — 8 cols */}
          <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-lg p-12">
            <Volume2 className="w-10 h-10 text-[#00daf3] mb-6" />
            <h3 className="text-2xl font-black tracking-tight mb-3 text-white">Fluisterstille Werking</h3>
            <p className="text-white/60 leading-relaxed max-w-lg">
              Moderne binnenunits produceren slechts 19–25 dB — stiller dan een fluistering.
              Ongestoord slapen, werken en ontspannen met maximaal comfort.
            </p>
          </div>

          {/* Card 2: Energielabel A+++ — 4 cols, accent */}
          <div className="md:col-span-4 bg-[#00daf3] text-[#00030a] rounded-lg p-12">
            <Zap className="w-10 h-10 text-[#00030a] mb-6" />
            <h3 className="text-2xl font-black tracking-tight mb-3">Energielabel A+++</h3>
            <p className="text-[#00030a]/70 leading-relaxed">
              Onze systemen behalen de hoogste energielabels. Lager verbruik, lagere
              energierekening.
            </p>
          </div>

          {/* Card 3: Smart Control — 4 cols, frosted glass */}
          <div className="md:col-span-4 bg-white/70 backdrop-blur-xl border border-white/10 rounded-lg p-12">
            <Smartphone className="w-10 h-10 text-[#00030a] mb-6" />
            <h3 className="text-2xl font-black tracking-tight mb-3 text-[#00030a]">Smart Control</h3>
            <p className="text-[#00030a]/70 leading-relaxed">
              Bedien uw airco via de app. Plan schema&apos;s, monitor verbruik en stel de
              perfecte temperatuur in — waar u ook bent.
            </p>
          </div>

          {/* Card 4: Koelen en Verwarmen — 8 cols */}
          <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-lg p-12">
            <Thermometer className="w-10 h-10 text-[#00daf3] mb-6" />
            <h3 className="text-2xl font-black tracking-tight mb-3 text-white">Koelen &eacute;n Verwarmen</h3>
            <p className="text-white/60 leading-relaxed max-w-lg">
              Moderne split-systemen zijn volwaardige warmtepompen. Verwarmen tot -15&deg;C
              buitentemperatuur. Ideaal als bijverwarming in voor- en naseizoen — het hele
              jaar door comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Product Cards (replaces PrijsIndicatie) ─── */
function ProductCards() {
  const prijzen = [
    {
      type: "Single split",
      ruimtes: "1 ruimte",
      prijs: "vanaf €1.800",
      description: "Single split airconditioning voor 1 ruimte inclusief installatie",
      specs: ["1 binnenunit + 1 buitenunit", "Koelvermogen 2,5 – 3,5 kW", "Incl. installatie & materiaal"],
      energy: "A+++",
      badge: "Bestseller",
      gradient: "from-[#00daf3]/20 to-slate-800",
    },
    {
      type: "Multi-split",
      ruimtes: "2-3 ruimtes",
      prijs: "vanaf €3.500",
      description: "Multi-split airconditioning voor 2-3 ruimtes inclusief installatie",
      specs: ["2–3 binnenunits + 1 buitenunit", "Koelvermogen 5,0 – 8,0 kW", "Incl. installatie & materiaal"],
      energy: "A++",
      badge: null,
      gradient: "from-[#00daf3]/20 to-slate-800",
    },
    {
      type: "Multi-split",
      ruimtes: "4+ ruimtes",
      prijs: "vanaf €5.500",
      description: "Multi-split airconditioning voor 4+ ruimtes inclusief installatie",
      specs: ["4+ binnenunits + 1 buitenunit", "Koelvermogen 10,0+ kW", "Incl. installatie & materiaal"],
      energy: "A++",
      badge: "Premium",
      gradient: "from-[#00daf3]/20 to-slate-800",
    },
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
    <section className="py-32 px-6 bg-[#00030a]">
      <div className="max-w-6xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <span className="text-[#00daf3] font-bold uppercase tracking-[0.2em] text-sm mb-4 block text-center">
          Prijsindicatie
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-center mb-4 text-white">
          Wat kost een airco?
        </h2>
        <p className="text-white/60 text-center mb-12 text-lg">
          Inclusief installatie, materiaal en 2 jaar garantie.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {prijzen.map((p) => (
            <div
              key={p.ruimtes}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#00daf3]/30 transition-all duration-300"
            >
              {/* Card header — gradient placeholder */}
              <div className={`relative aspect-video bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Snowflake className="w-16 h-16 text-[#00daf3]/30" />
                </div>
                {p.badge === "Bestseller" && (
                  <span className="absolute top-4 right-4 bg-[#00030a]/90 text-white rounded-full px-4 py-1 text-xs font-bold uppercase">
                    {p.badge}
                  </span>
                )}
                {p.badge === "Premium" && (
                  <span className="absolute top-4 right-4 bg-[#00daf3] text-[#00030a] rounded-full px-4 py-1 text-xs font-bold uppercase">
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-8">
                <h3 className="text-xl font-black tracking-tight mb-1 text-white">{p.type}</h3>
                <p className="text-white/40 text-sm mb-4">{p.ruimtes}</p>

                <ul className="space-y-2 mb-6">
                  {p.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-sm text-white/60">
                      <ChevronRight className="w-4 h-4 text-[#00daf3] mt-0.5 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <p className="text-[#00daf3]/80 text-sm font-semibold mb-4">
                  Energielabel {p.energy}
                </p>

                <p className="text-2xl font-black text-[#00daf3]">{p.prijs}</p>
                <p className="text-xs text-white/40 mt-1">ge&iuml;nstalleerd</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-white/40 text-center mt-8">
          Ook interesse in een{" "}
          <a
            href={utmLink("https://warmtebaas.com", "aircobaas", "prijstabel-link")}
            onClick={() => trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "content" })}
            className="underline font-semibold"
            style={{ color: "#C0392B" }}
          >
            warmtepomp voor verwarming
          </a>
          ? Bekijk warmtebaas.com.
        </p>
      </div>
    </section>
  );
}

/* ─── Prijs CTA ─── */
function PrijsCTA() {
  return (
    <section className="py-16 px-6 bg-[#00030a]">
      <div className="max-w-3xl mx-auto bg-[#001a20] border border-white/10 rounded-lg p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-white">
          Wilt u weten wat een airco voor uw woning kost?
        </h2>
        <p className="text-white/60 mb-8">
          Offerte op maat, rekening houdend met het aantal ruimtes en uw wensen.
        </p>
        <button
          onClick={() => {
            trackEvent("cta_click", { destination: "self", source_page: window.location.pathname, cta_location: "pricing" });
            document.getElementById("formulier")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 bg-[#00daf3] text-[#00030a] font-semibold px-8 py-4 rounded-lg text-lg shadow-lg shadow-[#00daf3]/20 hover:shadow-xl transition-all hover:-translate-y-0.5"
        >
          Gratis offerte aanvragen
        </button>
      </div>
    </section>
  );
}

/* ─── Why Aircobaas ─── */
function WhyAircobaas() {
  const features = [
    {
      num: "01",
      title: "Vakkundige Installatie",
      description:
        "Gecertificeerde monteurs met F-gassen bevoegdheid. Uw airco wordt professioneel ge\u00EFnstalleerd volgens alle normen en voorschriften.",
    },
    {
      num: "02",
      title: "Nette Afwerking",
      description:
        "Kabelgoten op kleur, buitenunit netjes weggewerkt, alles opgeruimd. Wij leveren pas op als het er perfect uitziet.",
    },
    {
      num: "03",
      title: "Koelen \u00E9n Verwarmen",
      description:
        "Moderne split-systemen zijn volwaardige warmtepompen. Het hele jaar door comfort, met \u00E9\u00E9n systeem.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#00030a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-[#00daf3]/20 to-[#00030a] overflow-hidden">
              {/* TODO: foto */}
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#00daf3] p-10 rounded-lg text-[#00030a]">
              <span className="text-5xl font-black leading-none block">2 wk</span>
              <span className="text-[#00030a]/70 text-sm font-medium mt-1 block">Levertijd</span>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <span className="text-[#00daf3] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Onze aanpak
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10 text-white">
              Waarom klanten kiezen voor Aircobaas
            </h2>
            <div className="space-y-10">
              {features.map((f) => (
                <div key={f.num} className="flex gap-6">
                  <span className="text-[#00daf3] text-4xl font-black leading-none shrink-0">
                    {f.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-black tracking-tight mb-2 text-white">{f.title}</h3>
                    <p className="text-white/60 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Frost CTA ─── */
function FrostCTA() {
  return (
    <section className="py-32 px-6 bg-[#00030a]">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#00030a] to-[#001a20] rounded-lg p-16 text-center border border-white/10">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
          Klaar voor een koeler huis?
        </h2>
        <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
          Vraag vandaag nog een gratis offerte aan en geniet deze zomer van
          een perfect klimaat in huis.
        </p>
        <button
          onClick={() => {
            trackEvent("cta_click", { destination: "self", source_page: window.location.pathname, cta_location: "frost-cta" });
            document.getElementById("formulier")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-[#00daf3] text-[#00030a] px-12 py-5 rounded-lg font-black uppercase tracking-widest hover:bg-[#00daf3]/90 transition-colors"
        >
          Offerte aanvragen
        </button>
      </div>
    </section>
  );
}

/* ─── Internal Links ─── */
function InternalLinks() {
  return (
    <section className="py-12 px-6 bg-[#00030a] border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-black tracking-tight mb-4 text-white">Meer van Klimaatbaas</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={utmLink("https://warmtebaas.com", "aircobaas", "meer-van-klimaatbaas")}
            onClick={() => trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "content" })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-red-500/30 text-red-400 font-semibold hover:bg-red-500/10 transition-colors"
          >
            Warmtepomp nodig? &rarr; Warmtebaas
          </a>
          <a
            href={utmLink("https://subsidiebaas.com", "aircobaas", "meer-van-klimaatbaas")}
            onClick={() => trackEvent("cta_click", { destination: "subsidiebaas", source_page: window.location.pathname, cta_location: "content" })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-green-500/30 text-green-400 font-semibold hover:bg-green-500/10 transition-colors"
          >
            Subsidie berekenen &rarr; Subsidiebaas
          </a>
          <a
            href={utmLink("https://klimaatbaas.com", "aircobaas", "meer-van-klimaatbaas")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white/70 font-semibold hover:bg-white/5 transition-colors"
          >
            Over ons &rarr; Klimaatbaas
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function AircobaasPage() {
  return (
    <div className="bg-[#00030a]">
      <Navbar siteName="Aircobaas" primaryColor="#00030a" accentColor="#00daf3" isDark />
      <HeroDark />
      <UrgentieBanner />
      <DirectAnswer />
      <ExpertiseBento />
      <ProductCards />
      <PrijsCTA />
      <WhyAircobaas />
      <FrostCTA />
      <Reviews
        primaryColor="#00daf3"
        isDark={true}
        reviews={[
          { naam: "Sophie", plaats: "Bunnik", sterren: 5, tekst: "Binnen een week geplaatst. Heerlijk koel huis, ook fijn als verwarming in het najaar." },
          { naam: "Mark & Lisa", plaats: "Nieuwegein", sterren: 5, tekst: "Nette jongens, alles keurig afgewerkt. Zelfs de buitenunit zie je bijna niet." },
          { naam: "Dennis", plaats: "Utrecht", sterren: 5, tekst: "Snelle offerte, snelle plaatsing, prima prijs. Aanrader." },
        ]}
      />
      <FAQ
        primaryColor="#00daf3"
        isDark={true}
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
        primaryColor="#00daf3"
        isDark={true}
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
      <Footer
        primaryColor="#00030a"
        accentColor="#00daf3"
        isDark
        links={[
          { label: "Ook van het gas af? → warmtebaas.com", href: utmLink("https://warmtebaas.com", "aircobaas", "footer-link") },
          { label: "Subsidie checken? → subsidiebaas.com", href: utmLink("https://subsidiebaas.com", "aircobaas", "footer-link") },
        ]}
      />
      <StickyCTA label="Gratis offerte aanvragen" primaryColor="#00daf3" />
      <WhatsAppButton message="Hallo, ik heb een vraag over airconditioning" />
    </div>
  );
}
