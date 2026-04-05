"use client";

import Navbar from "@/components/Navbar";
import SubsidieCalculator from "@/components/SubsidieCalculator";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import VerifiedBy from "@/components/VerifiedBy";
import { sites } from "@/lib/sites";
import { utmLink } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import {
  FileText,
  Building2,
  UserCheck,
  Clock,
  CheckSquare,
  ArrowRight,
} from "lucide-react";

const config = sites.subsidiebaas;

const stappenItems = [
  "Check de meldcodelijst op RVO.nl — alleen warmtepompen met een geldige meldcode komen in aanmerking.",
  "Laat installeren door een erkend bedrijf — de meldcode moet op de offerte én factuur staan.",
  "Bewaar uw documenten: factuur, betaalbewijs, installatiedatum en foto van de installatie.",
  "Vraag subsidie aan via Mijn RVO — log in met DigiD en upload uw documenten.",
  "Wacht op beoordeling — gemiddelde doorlooptijd: 8–13 weken.",
  "Ontvang uw subsidie — het bedrag wordt op uw rekening gestort.",
];

/* ─── Hero ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden px-6 py-32">
      {/* decorative background */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#27AE60]/5 to-transparent" />
        <svg
          className="absolute bottom-0 right-0 opacity-20"
          width="480"
          height="320"
          viewBox="0 0 480 320"
          fill="none"
        >
          <path
            d="M0 280 Q120 200 240 180 T480 60"
            stroke="#27AE60"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0 300 Q140 240 280 200 T480 100"
            stroke="#d4af37"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-[#27AE60] font-bold uppercase tracking-widest text-sm mb-6 block">
          ISDE Subsidie 2026
        </span>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
          Hoeveel ISDE-subsidie krijgt u voor een warmtepomp?
        </h1>
        <p className="text-lg md:text-xl text-[#44474d] max-w-xl mb-10">
          Check het direct. Gratis, vrijblijvend, in 2 minuten.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() =>
              document
                .getElementById("calculator")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#00030a] text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Start subsidiecheck <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href={utmLink("https://warmtebaas.com", "subsidiebaas", "hero")}
            onClick={() => trackEvent("cta_click_warmtebaas")}
            className="border border-slate-200 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 hover:bg-slate-50 transition-colors"
          >
            Direct installatie aanvragen
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bento ──────────────────────────────────────────────────── */
function StatsBento() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {/* big card */}
        <div className="col-span-2 bg-[#f3f4f5] p-10 rounded-lg h-[280px] flex flex-col justify-between">
          <span className="text-5xl">📈</span>
          <div>
            <h3 className="text-3xl font-black tracking-tighter mb-2">
              Gemiddeld €2.500 terug
            </h3>
            <p className="text-[#44474d]">
              Bij een hybride of all-electric warmtepomp in bestaande bouw.
            </p>
          </div>
        </div>

        {/* dark card */}
        <div className="col-span-1 bg-[#00030a] text-white p-10 rounded-lg h-[280px] flex flex-col justify-between">
          <span className="text-4xl">✓</span>
          <div>
            <h3 className="text-xl font-black tracking-tighter mb-2">
              RVO Gecertificeerd
            </h3>
            <p className="text-slate-400">
              Erkende installateurs en meldcodes voor een vlotte aanvraag.
            </p>
          </div>
        </div>

        {/* light card */}
        <div className="col-span-1 bg-[#e1e3e4] p-10 rounded-lg h-[280px] flex flex-col justify-between">
          <span className="text-4xl text-[#d4af37]">€</span>
          <div>
            <h3 className="text-xl font-black tracking-tighter mb-2">
              ISDE 2026
            </h3>
            <p className="text-[#44474d]">
              €500 miljoen budget beschikbaar t/m 2031.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─────────────────────────────────────────────────────── */
function FeaturesSection() {
  const features = [
    { emoji: "📊", title: "Exacte Berekening", text: "Wij berekenen uw subsidie op basis van het type warmtepomp, vermogen en woonsituatie." },
    { emoji: "📋", title: "Foutloze Aanvraag", text: "Geen afwijzing door onvolledige of foutieve documenten." },
    { emoji: "💰", title: "Maximaal Resultaat", text: "Wij zorgen dat u het maximale subsidiebedrag ontvangt." },
  ];

  return (
    <section className="bg-[#f3f4f5] py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* left: image placeholder */}
        <div className="relative aspect-square rounded-lg overflow-hidden">
          {/* TODO: foto */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#27AE60]/40 to-[#1E8449]/60 rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E8449]/80 to-transparent" />
          {/* floating glass card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-xl rounded-lg p-6">
            <p className="font-black text-lg">Tot €5.000+ subsidie</p>
            <p className="text-sm text-[#44474d]">
              Afhankelijk van uw type warmtepomp en woonsituatie
            </p>
          </div>
        </div>

        {/* right: text + features */}
        <div>
          <span className="text-[#27AE60] font-bold uppercase tracking-widest text-sm mb-4 block">
            Waarom Subsidiebaas
          </span>
          <h2 className="text-5xl font-black tracking-tighter leading-[0.95] mb-10">
            Wij halen het maximale uit uw aanvraag
          </h2>
          <div className="space-y-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-5">
                <span className="text-3xl shrink-0">{f.emoji}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                  <p className="text-[#44474d] leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Direct Answer ────────────────────────────────────────────────── */
function DirectAnswer() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-[#27AE60] font-bold uppercase tracking-widest text-sm mb-4 block">
          Snel antwoord
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8">
          ISDE-subsidie warmtepomp 2026: de belangrijkste feiten
        </h2>
        <div className="space-y-4 text-[#44474d] leading-relaxed text-lg">
          <p>
            <strong className="text-[#00030a]">Hoeveel subsidie krijg ik?</strong>{" "}
            De ISDE-subsidie voor warmtepompen in 2026 varieert van €675
            (warmtepompboiler) tot meer dan €5.000 (grond-water warmtepomp). Een
            hybride warmtepomp levert gemiddeld €2.125 subsidie op, een
            all-electric model ca. €3.025.
          </p>
          <p>
            <strong className="text-[#00030a]">Wie komt in aanmerking?</strong>{" "}
            Woningeigenaren met een bestaande woning (bouwvergunning vóór 1 juli
            2018) die een warmtepomp laten installeren door een gecertificeerd
            bedrijf.
          </p>
          <p>
            <strong className="text-[#00030a]">Hoe vraag ik aan?</strong> Na
            installatie via Mijn RVO met DigiD. Uitbetaling binnen 8–13 weken.{" "}
            <a
              href={utmLink(
                "https://warmtebaas.com",
                "subsidiebaas",
                "direct-answer"
              )}
              onClick={() => trackEvent("cta_click_warmtebaas")}
              className="underline font-semibold text-[#27AE60] hover:text-[#1E8449] transition-colors"
            >
              Warmtebaas regelt de volledige aanvraag voor u →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── ISDE Uitleg ──────────────────────────────────────────────────── */
function ISDeUitleg() {
  const items = [
    {
      icon: FileText,
      title: "Wat is ISDE?",
      text: "De Investeringssubsidie Duurzame Energie en Energiebesparing vergoedt een deel van uw investering in een warmtepomp.",
    },
    {
      icon: Building2,
      title: "Budget 2026",
      text: "€500 miljoen beschikbaar. De regeling loopt door tot en met 2031.",
    },
    {
      icon: UserCheck,
      title: "Wie komt in aanmerking?",
      text: "Woningeigenaren die een warmtepomp laten installeren door een gecertificeerd bedrijf.",
    },
    {
      icon: Clock,
      title: "Hoe werkt het?",
      text: "Na installatie dient u (of uw installateur) een aanvraag in bij RVO. Uitbetaling binnen 8–13 weken.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="text-[#27AE60] font-bold uppercase tracking-widest text-sm mb-4 block text-center">
          Achtergrond
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-center mb-14">
          Wat is ISDE-subsidie?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#f3f4f5] rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <item.icon
                className="w-8 h-8 text-[#27AE60] mb-4"
                aria-hidden="true"
              />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-[#44474d] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HowTo Schema ─────────────────────────────────────────────────── */
function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "ISDE-subsidie aanvragen voor een warmtepomp",
    description:
      "Stappenplan om ISDE-subsidie aan te vragen na installatie van een warmtepomp.",
    step: stappenItems.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Stap ${i + 1}`,
      text,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Stappenplan ──────────────────────────────────────────────────── */
function Stappenplan() {
  return (
    <section className="py-24 px-6 bg-[#f3f4f5]">
      <div className="max-w-3xl mx-auto">
        <span className="text-[#27AE60] font-bold uppercase tracking-widest text-sm mb-4 block text-center">
          Stappenplan
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-center mb-14">
          Stappenplan ISDE-aanvraag
        </h2>
        <div className="space-y-5">
          {stappenItems.map((stap, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-[#27AE60] text-white flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>
              <p className="text-[#44474d] leading-relaxed pt-2 text-lg">
                {stap}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Checklist ────────────────────────────────────────────────────── */
function Checklist() {
  const items = [
    "Warmtepomp staat op de RVO meldcodelijst",
    "Meldcode staat op de offerte",
    "Meldcode staat op de factuur",
    "Factuur bevat: merk, type, vermogen, meldcode",
    "Factuur staat op naam van de woningeigenaar",
    "Betaalbewijs bewaard (bankafschrift of iDEAL-bevestiging)",
    "Installatiedatum genoteerd",
    "Foto van de geplaatste warmtepomp gemaakt",
    "Woning is bestaande bouw (vergunning vóór 1 juli 2018)",
    "Installatie uitgevoerd door een bedrijf (niet zelf)",
    "Aanvraag ingediend binnen 24 maanden na installatie",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <span className="text-[#27AE60] font-bold uppercase tracking-widest text-sm mb-4 block text-center">
          Voorbereiding
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-center mb-4">
          ISDE Subsidie Checklist 2026
        </h2>
        <p className="text-[#44474d] text-center mb-10 text-lg">
          Zorg dat u alles op orde heeft voor uw aanvraag.
        </p>
        <div className="bg-[#f3f4f5] rounded-lg p-8 space-y-3">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckSquare
                className="w-5 h-5 text-[#27AE60] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-[#44474d]">{item}</span>
            </div>
          ))}
          <div className="border-t border-slate-200 pt-4 mt-4 text-sm text-slate-500">
            <p>Aanvragen via: mijn.rvo.nl (DigiD vereist)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Dark CTA ─────────────────────────────────────────────────────── */
function DarkCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto bg-[#00030a] p-12 md:p-20 rounded-lg relative overflow-hidden">
        {/* decorative euro sign */}
        <span
          className="absolute top-0 right-0 opacity-10 text-[200px] text-white leading-none font-black select-none pointer-events-none"
          aria-hidden="true"
        >
          €
        </span>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.95] mb-6">
            Laat geen subsidie liggen
          </h2>
          <p className="text-slate-400 text-xl mb-10 leading-relaxed">
            Onze specialisten berekenen uw exacte subsidiebedrag en begeleiden u
            door het hele aanvraagproces. Gratis en vrijblijvend.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("calculator")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-[#00030a] px-12 py-5 rounded-lg font-bold text-xl hover:bg-slate-100 transition-colors"
          >
            Start subsidiecheck
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Internal Links ───────────────────────────────────────────────── */
function InternalLinks() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">
          Klaar om te installeren?
        </h2>
        <p className="text-[#44474d] mb-8">
          Subsidiebaas is een initiatief van Klimaatbaas B.V. Wij installeren
          ook.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={utmLink(
              "https://warmtebaas.com",
              "subsidiebaas",
              "meer-van-klimaatbaas"
            )}
            onClick={() => trackEvent("cta_click_warmtebaas")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 font-semibold hover:bg-slate-50 transition-colors"
          >
            Warmtepomp installatie → Warmtebaas
          </a>
          <a
            href={utmLink(
              "https://aircobaas.com",
              "subsidiebaas",
              "meer-van-klimaatbaas"
            )}
            onClick={() => trackEvent("cta_click_aircobaas")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 font-semibold hover:bg-slate-50 transition-colors"
          >
            Airco installatie → Aircobaas
          </a>
          <a
            href={utmLink(
              "https://klimaatbaas.com",
              "subsidiebaas",
              "meer-van-klimaatbaas"
            )}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 font-semibold hover:bg-slate-50 transition-colors"
          >
            Over ons → Klimaatbaas
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ────────────────────────────────────────────────────── */
export default function SubsidiebaasPage() {
  return (
    <>
      <HowToSchema />
      <Navbar
        siteName="Subsidiebaas"
        primaryColor={config.colors.primary}
        links={[
          { label: "Subsidie Berekenen", href: "#calculator" },
          { label: "Veelgemaakte Fouten", href: "/subsidie-aanvraag-fouten" },
          { label: "Ventilatie", href: "/ventilatiesubsidie-2026" },
          { label: "Overgangsregeling", href: "/overgangsregeling-2024" },
        ]}
      />
      <HeroSection />
      <StatsBento />
      <FeaturesSection />
      <DirectAnswer />
      <SubsidieCalculator
        primaryColor={config.colors.primary}
        variant="full"
      />
      <ISDeUitleg />
      <Stappenplan />
      <Checklist />
      <DarkCTA />
      <FAQ
        primaryColor={config.colors.primary}
        items={[
          {
            vraag: "Moet ik de ISDE-subsidie zelf aanvragen?",
            antwoord:
              "Dat kan, maar wij doen het ook voor u. Wij zijn bekend met de procedure en voorkomen fouten.",
          },
          {
            vraag: "Kan ik ISDE-subsidie combineren met een lening?",
            antwoord:
              "Ja, u kunt ISDE combineren met het Nationaal Warmtefonds (lage rente) of een hypotheekverhoging.",
          },
          {
            vraag: "Wat is een meldcode?",
            antwoord:
              "Een unieke code die uw installateur na de installatie registreert bij RVO. Zonder meldcode geen subsidie.",
          },
          {
            vraag: "Hoe lang duurt de uitbetaling van ISDE-subsidie?",
            antwoord:
              "Gemiddeld 8–13 weken na complete aanvraag.",
          },
          {
            vraag: "Is er subsidie voor airconditioning?",
            antwoord:
              "Niet via ISDE. Airco's met verwarmingsfunctie kunnen soms via andere gemeentelijke regelingen in aanmerking komen.",
          },
        ]}
      />
      <InternalLinks />
      <LeadForm
        site="subsidiebaas"
        title="Vrijblijvend adviesgesprek aanvragen"
        primaryColor={config.colors.primary}
        submitLabel="Gratis advies aanvragen"
        subtext="Subsidiebaas is een initiatief van Klimaatbaas B.V. — uw installatiepartner in Midden-Nederland."
        fields={[
          { name: "naam", label: "Naam", type: "text", required: true },
          { name: "email", label: "E-mail", type: "email", required: true },
          {
            name: "telefoon",
            label: "Telefoon",
            type: "tel",
            required: true,
          },
          {
            name: "subsidie_interesse",
            label: "Interesse",
            type: "select",
            options: [
              { value: "warmtepomp", label: "Warmtepomp" },
              { value: "isolatie", label: "Isolatie" },
              { value: "beide", label: "Beide" },
              { value: "weet-niet", label: "Weet ik niet" },
            ],
          },
          {
            name: "bericht",
            label: "Bericht (optioneel)",
            type: "textarea",
            placeholder: "Heeft u nog vragen?",
          },
        ]}
      />
      <VerifiedBy />
      <Footer
        primaryColor={config.colors.primary}
        links={[
          {
            label: "Klaar voor installatie? → warmtebaas.com",
            href: utmLink(
              "https://warmtebaas.com",
              "subsidiebaas",
              "footer-link"
            ),
          },
          {
            label: "Airco nodig? → aircobaas.com",
            href: utmLink(
              "https://aircobaas.com",
              "subsidiebaas",
              "footer-link"
            ),
          },
        ]}
      />
      <StickyCTA
        label="Start subsidiecheck"
        primaryColor={config.colors.primary}
      />
      <WhatsAppButton message="Hallo, ik heb een vraag over subsidie" />
    </>
  );
}
