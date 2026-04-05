"use client";

import Navbar from "@/components/Navbar";
import USPs from "@/components/USPs";
import Reviews from "@/components/Reviews";
import WerkgebiedKaart from "@/components/WerkgebiedKaart";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { sites } from "@/lib/sites";
import { utmLink } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import {
  ShieldCheck,
  MapPin,
  FileCheck,
  Settings,
  Flame,
  Snowflake,
  ArrowRight,
  Award,
  Star,
  Globe,
  BadgeCheck,
  FileSpreadsheet,
} from "lucide-react";

const config = sites.klimaatbaas;

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="min-h-[700px] px-6 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <span className="inline-block px-3 py-1 bg-[#e1e3e4] rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
            Klimaatbaas B.V.
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
            Warmtepompen &amp; Airconditioning in Midden-Nederland
          </h1>
          <p className="text-lg text-[#44474d] leading-relaxed mb-8 max-w-xl">
            Klimaatbaas is uw totaalpartner voor warmtepompen en airconditioning.
            Verwarmt. Koelt. Ontzorgd.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={utmLink("https://warmtebaas.com", "klimaatbaas", "hero-warmtepomp")}
              onClick={() => trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "content" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C0392B" }}
            >
              <Flame className="w-4 h-4" aria-hidden="true" />
              Warmtepomp
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={utmLink("https://aircobaas.com", "klimaatbaas", "hero-airco")}
              onClick={() => trackEvent("cta_click", { destination: "aircobaas", source_page: window.location.pathname, cta_location: "content" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2980B9" }}
            >
              <Snowflake className="w-4 h-4" aria-hidden="true" />
              Airconditioning
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-400 rounded-lg">
            {/* TODO: foto */}
          </div>
          {/* Decorative borders */}
          <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-slate-200 rounded-tr-lg pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-slate-200 rounded-bl-lg pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ─── Direct Answer ─── */
function DirectAnswer() {
  return (
    <section className="direct-answer py-16 px-6 bg-slate-50/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Warmtepomp of airco laten plaatsen in Midden-Nederland
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong>Wie is Klimaatbaas?</strong> Klimaatbaas B.V. is een
            installatiebedrijf in Midden-Nederland, gespecialiseerd in warmtepompen
            en airconditioning. Wij werken met twee specialistenteams: Warmtebaas
            voor warmtepompen en Aircobaas voor airconditioning.
          </p>
          <p>
            <strong>Warmtepomp nodig?</strong> Hybride warmtepompen vanaf €4.500, met
            tot €4.400 ISDE-subsidie.{" "}
            <a
              href={utmLink("https://warmtebaas.com", "klimaatbaas", "direct-answer")}
              onClick={() => trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "content" })}
              className="underline font-semibold"
              style={{ color: "#C0392B" }}
            >
              Bekijk warmtebaas.com →
            </a>
          </p>
          <p>
            <strong>Airco nodig?</strong> Single split vanaf €1.800, geplaatst
            binnen 2 weken.{" "}
            <a
              href={utmLink("https://aircobaas.com", "klimaatbaas", "direct-answer")}
              onClick={() => trackEvent("cta_click", { destination: "aircobaas", source_page: window.location.pathname, cta_location: "content" })}
              className="underline font-semibold"
              style={{ color: "#2980B9" }}
            >
              Bekijk aircobaas.com →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Wie Zijn Wij (integrated) ─── */
function WieZijnWij() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">
          Over ons
        </span>
        <h2 className="text-4xl font-black tracking-tight mb-6">Wie zijn wij</h2>
        <p className="text-lg text-[#44474d] leading-relaxed">
          Klimaatbaas B.V. is een installatiebedrijf in Midden-Nederland,
          gespecialiseerd in warmtepompen en airconditioning. Wij werken met twee
          specialistenteams:{" "}
          <a
            href={utmLink("https://warmtebaas.com", "klimaatbaas", "wie-zijn-wij")}
            onClick={() => trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "content" })}
            className="underline font-semibold"
            style={{ color: "#C0392B" }}
          >
            Warmtebaas
          </a>{" "}
          voor warmtepompen en{" "}
          <a
            href={utmLink("https://aircobaas.com", "klimaatbaas", "wie-zijn-wij")}
            onClick={() => trackEvent("cta_click", { destination: "aircobaas", source_page: window.location.pathname, cta_location: "content" })}
            className="underline font-semibold"
            style={{ color: "#2980B9" }}
          >
            Aircobaas
          </a>{" "}
          voor airconditioning. Eén bedrijf, twee specialismen, volledige ontzorging.
        </p>
      </div>
    </section>
  );
}

/* ─── Persoonlijke Aanpak (OverOns) ─── */
function OverOns() {
  const certificeringen = [
    { label: "F-gassen gecertificeerd", icon: ShieldCheck },
    { label: "BRL100 erkend", icon: Award },
    { label: "Vakmanschap Warmtepompen", icon: FileCheck },
  ];

  return (
    <section className="py-20 px-6 bg-[#f3f4f5]">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block text-center">
          Kwaliteit
        </span>
        <h2 className="text-4xl font-black tracking-tight text-center mb-6">
          Persoonlijke aanpak
        </h2>
        <p className="text-lg text-[#44474d] leading-relaxed text-center mb-10">
          Klimaatbaas is opgericht vanuit de overtuiging dat de overstap naar
          duurzaam verwarmen en koelen eenvoudiger en persoonlijker kan. Wij zijn
          geen callcenter of landelijke keten. U spreekt direct met de eigenaar,
          krijgt eerlijk advies en wij blijven uw aanspreekpunt van offerte tot
          nazorg. Elke installatie voeren wij uit met ons eigen team van
          gecertificeerde monteurs.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {certificeringen.map((c) => (
            <div
              key={c.label}
              className="bg-white rounded-lg p-5 text-center shadow-[0_8px_24px_rgba(0,3,10,0.06)]"
            >
              <c.icon
                className="w-8 h-8 mx-auto mb-3"
                style={{ color: config.colors.primary }}
                aria-hidden="true"
              />
              <p className="font-semibold text-sm">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bento Grid: Onze Specialismen ─── */
function Specialismen() {
  return (
    <section className="py-32 px-6 bg-[#f3f4f5]">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">
          Wat wij doen
        </span>
        <h2 className="text-4xl font-black tracking-tight mb-12">
          Onze Specialismen
        </h2>

        <div className="grid md:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-6">
          {/* Card 1 — Aircobaas (large) */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-lg p-10 shadow-[0_8px_24px_rgba(0,3,10,0.06)]">
            <div className="h-48 rounded-lg mb-6 bg-gradient-to-br from-blue-200 to-blue-400">
              {/* TODO: foto */}
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Snowflake className="w-6 h-6 text-blue-600" aria-hidden="true" />
              <h3 className="text-xl font-bold">Aircobaas — Airconditioning</h3>
            </div>
            <p className="text-[#44474d] leading-relaxed mb-6">
              Split en multi-split airconditioning. Koelen én verwarmen. Geplaatst
              binnen 2 weken, vanaf €1.800.
            </p>
            <a
              href={utmLink("https://aircobaas.com", "klimaatbaas", "specialismen-aircobaas")}
              onClick={() => trackEvent("cta_click", { destination: "aircobaas", source_page: window.location.pathname, cta_location: "content" })}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              Naar aircobaas.com <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Card 2 — Warmtebaas (dark) */}
          <div className="md:col-span-2 md:row-span-1 bg-[#00030a] text-white rounded-lg p-8 shadow-[0_8px_24px_rgba(0,3,10,0.06)]">
            <div className="flex items-center gap-3 mb-3">
              <Flame className="w-6 h-6 text-red-400" aria-hidden="true" />
              <h3 className="text-xl font-bold">Warmtebaas — Warmtepompen</h3>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Hybride en all-electric warmtepompen. Inclusief subsidie-ontzorging.
              Prijzen vanaf €4.500, met tot €4.400 ISDE-subsidie.
            </p>
            <a
              href={utmLink("https://warmtebaas.com", "klimaatbaas", "specialismen-warmtebaas")}
              onClick={() => trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "content" })}
              className="inline-flex items-center gap-2 text-red-400 font-semibold hover:gap-3 transition-all"
            >
              Naar warmtebaas.com <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Card 3 — Subsidiebaas */}
          <div className="md:col-span-1 md:row-span-1 bg-[#e1e3e4] rounded-lg p-6 shadow-[0_8px_24px_rgba(0,3,10,0.06)]">
            <div className="flex items-center gap-2 mb-3">
              <FileSpreadsheet className="w-5 h-5 text-green-700" aria-hidden="true" />
              <h3 className="text-lg font-bold">Subsidiebaas</h3>
            </div>
            <p className="text-[#44474d] text-sm leading-relaxed mb-4">
              Gratis subsidiecheck. Volledige ISDE-aanvraag, u hoeft niets te doen.
            </p>
            <a
              href={utmLink("https://subsidiebaas.com", "klimaatbaas", "specialismen-subsidiebaas")}
              onClick={() => trackEvent("cta_click", { destination: "subsidiebaas", source_page: window.location.pathname, cta_location: "content" })}
              className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:gap-3 transition-all"
            >
              subsidiebaas.com <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Card 4 — Werkgebied */}
          <div className="md:col-span-1 md:row-span-1 bg-white border border-slate-200 rounded-lg p-6 shadow-[0_8px_24px_rgba(0,3,10,0.06)]">
            <MapPin className="w-5 h-5 mb-3" style={{ color: config.colors.primary }} aria-hidden="true" />
            <p className="text-3xl font-black mb-1">30+</p>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              plaatsen
            </p>
            <p className="text-[#44474d] text-sm leading-relaxed">
              Regio Utrecht
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ─── */
function StatsSection() {
  const stats = [
    { symbol: <BadgeCheck className="w-10 h-10 mx-auto" />, label: "F-gassen Gecertificeerd" },
    { symbol: <Globe className="w-10 h-10 mx-auto" />, label: "Regio Midden-Nederland" },
    { symbol: <Star className="w-10 h-10 mx-auto" />, label: "5.0 \u2605 Google Reviews" },
    { symbol: <FileCheck className="w-10 h-10 mx-auto" />, label: "Subsidie Geregeld" },
  ];

  return (
    <section className="py-24 px-6 border-y border-slate-100">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-black mb-2" style={{ color: config.colors.primary }}>
              {s.symbol}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Dark CTA ─── */
function DarkCTA() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-6xl mx-auto bg-[#00030a] rounded-lg p-12 md:p-24 relative overflow-hidden">
        {/* SVG grid pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Klaar om te besparen op energie?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Vraag een vrijblijvend adviesgesprek aan. Wij vertellen u eerlijk wat de
            beste oplossing is voor uw situatie, inclusief subsidie.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#formulier"
              onClick={() => trackEvent("cta_click", { destination: "self", source_page: window.location.pathname, cta_location: "dark-cta" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00030a] rounded-lg font-semibold transition-opacity hover:opacity-90"
            >
              Neem contact op
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={utmLink("https://warmtebaas.com", "klimaatbaas", "dark-cta-warmtebaas")}
              onClick={() => trackEvent("cta_click", { destination: "warmtebaas", source_page: window.location.pathname, cta_location: "content" })}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg font-semibold transition-opacity hover:opacity-80"
            >
              Bekijk warmtepompen
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function KlimaatbaasPage() {
  return (
    <>
      <Navbar siteName="Klimaatbaas" primaryColor={config.colors.primary} />
      <HeroSection />
      <DirectAnswer />
      <WieZijnWij />
      <Specialismen />
      <StatsSection />
      <OverOns />
      <DarkCTA />
      <USPs
        primaryColor={config.colors.primary}
        bgIconColor="#EBF5FB"
        items={[
          { icon: ShieldCheck, title: "Gecertificeerd", description: "F-gassen A1/A2, BRL100, Vakmanschap Warmtepompen" },
          { icon: MapPin, title: "Regionaal", description: "Korte lijnen, snel ter plaatse, we kennen de buurt" },
          { icon: FileCheck, title: "Subsidie geregeld", description: "Volledige ISDE-aanvraag, u hoeft niets te doen" },
          { icon: Settings, title: "Onderhoud & service", description: "Servicecontracten, storingsdienst, jaarlijkse check" },
        ]}
      />
      <WerkgebiedKaart primaryColor={config.colors.primary} siteSlug="klimaatbaas" />
      <Reviews
        primaryColor={config.colors.primary}
        reviews={[
          { naam: "Jan & Marieke", plaats: "Amersfoort", sterren: 5, tekst: "Warmtebaas heeft alles geregeld, van advies tot subsidie. Binnen 3 weken een werkende warmtepomp." },
          { naam: "Sophie", plaats: "Bunnik", sterren: 5, tekst: "Binnen een week geplaatst. Heerlijk koel huis, ook fijn als verwarming in het najaar." },
          { naam: "Familie De Vries", plaats: "Utrecht", sterren: 5, tekst: "Eerlijk advies, nette installatie, en de subsidie stond binnen 6 weken op onze rekening." },
        ]}
      />
      <LeadForm
        site="klimaatbaas"
        title="Neem contact op"
        primaryColor={config.colors.primary}
        submitLabel="Verstuur bericht"
        subtext="Of bel ons direct."
        fields={[
          { name: "naam", label: "Naam", type: "text", required: true },
          { name: "email", label: "E-mail", type: "email", required: true },
          { name: "telefoon", label: "Telefoon", type: "tel", required: true },
          { name: "bericht", label: "Bericht", type: "textarea", placeholder: "Waar kunnen wij u mee helpen?" },
        ]}
      />
      <Footer
        primaryColor={config.colors.primary}
        links={[
          { label: "warmtebaas.com", href: utmLink("https://warmtebaas.com", "klimaatbaas", "footer-link") },
          { label: "aircobaas.com", href: utmLink("https://aircobaas.com", "klimaatbaas", "footer-link") },
          { label: "subsidiebaas.com", href: utmLink("https://subsidiebaas.com", "klimaatbaas", "footer-link") },
        ]}
      />
      <WhatsAppButton message="Hallo, ik heb een vraag" />
    </>
  );
}
