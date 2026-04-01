# Klimaatbaas Landingspagina's — Projectbrief voor Claude Code

## Overzicht

Bouw een monorepo met 4 landingspagina's voor een HVAC-installatiebedrijf in Midden-Nederland. Het doel is leadgeneratie: bezoekers vullen een formulier in en worden een lead in Supabase. Elke site heeft een eigen domein, eigen kleurenschema en eigen tone of voice, maar deelt dezelfde codebase en backend.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Formulieren:** React Hook Form + Zod validatie
- **Backend/Database:** Supabase (leads tabel)
- **E-mail notificatie:** Resend (bij elke nieuwe lead een mail naar de eigenaar)
- **Hosting:** Vercel (multi-domain setup via `middleware.ts`)
- **Analytics:** Vercel Analytics + Google Tag Manager container (GTM-ID als env var)
- **Fonts:** Inter (body) + Plus Jakarta Sans (headings)
- **Icons:** Lucide React

## Monorepo Structuur

```
klimaatbaas/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout met GTM, fonts
│   │   ├── page.tsx            # Router: leest hostname, rendert juiste site
│   │   └── api/
│   │       └── lead/
│   │           └── route.ts    # POST endpoint: Supabase insert + Resend mail
│   ├── sites/
│   │   ├── warmtebaas/
│   │   │   └── WarmtebaasPage.tsx
│   │   ├── aircobaas/
│   │   │   └── AircobaasPage.tsx
│   │   ├── klimaatbaas/
│   │   │   └── KlimaatbaasPage.tsx
│   │   └── subsidiebaas/
│   │       └── SubsidiebaasPage.tsx
│   ├── components/
│   │   ├── LeadForm.tsx        # Herbruikbaar formulier, props bepalen velden
│   │   ├── SubsidieCalculator.tsx
│   │   ├── Hero.tsx
│   │   ├── USPs.tsx
│   │   ├── Reviews.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── CTA.tsx
│   │   └── WerkgebiedKaart.tsx
│   ├── lib/
│   │   ├── supabase.ts         # Supabase client
│   │   ├── resend.ts           # Resend client
│   │   ├── sites.ts            # Site config per domein
│   │   └── schema.ts           # Zod schemas per formulier
│   └── styles/
│       └── globals.css
├── middleware.ts                # Domein-routing
├── .env.local.example
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Domein-routing (middleware.ts)

```typescript
// Lees hostname uit request, map naar site:
// warmtebaas.com | www.warmtebaas.com → warmtebaas
// aircobaas.com  | www.aircobaas.com  → aircobaas
// klimaatbaas.com | www.klimaatbaas.com → klimaatbaas
// subsidiebaas.com | www.subsidiebaas.com → subsidiebaas
// localhost:3000 → klimaatbaas (default)
// Sla site op in request header zodat page.tsx het kan lezen
```

## Environment Variables (.env.local.example)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
NOTIFICATION_EMAIL=info@klimaatbaas.com
NEXT_PUBLIC_GTM_ID=
```

## Supabase Schema

```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  site TEXT NOT NULL,              -- 'warmtebaas' | 'aircobaas' | 'klimaatbaas' | 'subsidiebaas'
  naam TEXT NOT NULL,
  email TEXT NOT NULL,
  telefoon TEXT NOT NULL,
  postcode TEXT,
  plaats TEXT,
  -- Warmtebaas-specifiek
  type_woning TEXT,                -- 'tussenwoning' | 'hoekwoning' | 'vrijstaand' | 'appartement' | '2-onder-1-kap'
  bouwjaar TEXT,                   -- '<1975' | '1975-1990' | '1990-2005' | '2005-2020' | '>2020'
  huidig_systeem TEXT,             -- 'cv-ketel' | 'stadsverwarming' | 'warmtepomp' | 'anders'
  isolatie TEXT,                   -- 'goed' | 'redelijk' | 'matig' | 'weet-niet'
  voorkeur_wp TEXT,                -- 'hybride' | 'all-electric' | 'weet-niet'
  -- Aircobaas-specifiek
  aantal_ruimtes TEXT,             -- '1' | '2-3' | '4+' 
  type_airco TEXT,                 -- 'koelen' | 'koelen-en-verwarmen' | 'weet-niet'
  gewenste_timing TEXT,            -- 'zo-snel-mogelijk' | 'binnen-3-maanden' | 'orienterend'
  -- Subsidiebaas-specifiek
  subsidie_interesse TEXT,         -- 'warmtepomp' | 'isolatie' | 'beide' | 'weet-niet'
  -- Algemeen
  bericht TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  status TEXT DEFAULT 'nieuw'      -- 'nieuw' | 'gebeld' | 'offerte' | 'klant' | 'verloren'
);

-- Row Level Security: alleen authenticated (service role) kan inserten
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service insert" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Service select" ON leads FOR SELECT USING (true);
```

## Site Configuratie (lib/sites.ts)

```typescript
export const sites = {
  warmtebaas: {
    name: 'Warmtebaas',
    domain: 'warmtebaas.com',
    tagline: 'Uw specialist in warmtepompen',
    description: 'Advies, installatie en subsidie-ontzorging voor warmtepompen in Midden-Nederland',
    colors: {
      primary: '#C0392B',      // Warm rood
      primaryDark: '#96281B',
      accent: '#E74C3C',
      bg: '#FFF5F5',           // Heel licht warm
      text: '#1A1A1A',
    },
    og: {
      title: 'Warmtebaas | Warmtepomp specialist Midden-Nederland',
      description: 'Bespaar tot €4.400 subsidie op uw warmtepomp. Gratis adviesgesprek en offerte binnen 48 uur.',
    },
  },
  aircobaas: {
    name: 'Aircobaas',
    domain: 'aircobaas.com',
    tagline: 'Airco geplaatst binnen 2 weken',
    description: 'Split en multi-split airconditioning met verwarmingsfunctie. Snel, netjes, vakkundig.',
    colors: {
      primary: '#2980B9',      // Koel blauw
      primaryDark: '#1A5276',
      accent: '#3498DB',
      bg: '#F0F8FF',           // Heel licht blauw
      text: '#1A1A1A',
    },
    og: {
      title: 'Aircobaas | Airco laten plaatsen in Midden-Nederland',
      description: 'Airco geplaatst binnen 2 weken. Koelen én verwarmen. Gratis offerte, vakkundige installatie.',
    },
  },
  klimaatbaas: {
    name: 'Klimaatbaas',
    domain: 'klimaatbaas.com',
    tagline: 'Verwarmt. Koelt. Ontzorgd.',
    description: 'Uw totaalpartner voor warmtepompen, airconditioning en klimaatcomfort in Midden-Nederland.',
    colors: {
      primary: '#1B4F72',      // Donkerblauw
      primaryDark: '#0E2F44',
      accent: '#2E86C1',
      bg: '#F8FBFE',
      text: '#1A1A1A',
    },
    og: {
      title: 'Klimaatbaas | Warmtepompen & Airconditioning Midden-Nederland',
      description: 'Klimaatbaas: specialist in warmtepompen en airconditioning. Verwarmt. Koelt. Ontzorgd.',
    },
  },
  subsidiebaas: {
    name: 'Subsidiebaas',
    domain: 'subsidiebaas.com',
    tagline: 'Weet wat u kunt besparen',
    description: 'Gratis subsidiecheck voor warmtepompen en isolatie. ISDE, meldcodes en aanvraagbegeleiding.',
    colors: {
      primary: '#27AE60',      // Groen (geld/besparing)
      primaryDark: '#1E8449',
      accent: '#2ECC71',
      bg: '#F0FFF4',
      text: '#1A1A1A',
    },
    og: {
      title: 'Subsidiebaas | Gratis subsidiecheck warmtepomp & isolatie',
      description: 'Check direct hoeveel ISDE-subsidie u kunt krijgen. Gratis, vrijblijvend, binnen 2 minuten.',
    },
  },
};
```

---

## Per Site: Structuur, Content & Formulier

---

### WARMTEBAAS.COM

**Doel:** Woningeigenaren die overwegen van het gas af te gaan of een hybride warmtepomp willen. Lange overwegingsperiode, veel vragen over subsidie en geschiktheid.

**Secties (scroll-volgorde):**

1. **Hero**
   - Kop: "Bespaar tot €4.400 subsidie op uw warmtepomp"
   - Subkop: "Gratis adviesgesprek en offerte binnen 48 uur. Wij regelen ook uw ISDE-subsidieaanvraag."
   - CTA-button: "Gratis woningcheck aanvragen" (scrollt naar formulier)
   - Achtergrond: subtiel warm gradient

2. **USPs (3 kolommen)**
   - "Subsidie geregeld" — Wij verzorgen uw volledige ISDE-aanvraag. Gemiddeld €2.500–€4.400 terug.
   - "Vakkundig geïnstalleerd" — Gecertificeerde monteurs met F-gassen A1/A2. Oplevering inclusief inregeling.
   - "Eén aanspreekpunt" — Van adviesgesprek tot nazorg. Geen doorverwijzingen, geen wachttijden.

3. **Hoe werkt het? (4 stappen)**
   - Stap 1: Gratis woningcheck — Wij beoordelen of uw woning geschikt is
   - Stap 2: Advies op maat — Huisbezoek met warmtescan en subsidie-indicatie
   - Stap 3: Installatie — Door ons eigen team, meestal binnen 4 weken
   - Stap 4: Subsidie ingediend — Wij regelen de volledige ISDE-aanvraag bij RVO

4. **Subsidie-indicatie (SubsidieCalculator component)**
   - Interactief: kies type warmtepomp → toon indicatie ISDE-subsidie
   - Hybride WP: "Indicatie: €2.125"
   - All-electric lucht-water: "Indicatie: €3.025"
   - Bodemwarmtepomp: "Indicatie: €4.425"
   - Disclaimer: "Exacte bedrag afhankelijk van vermogen, type en energielabel. Wij berekenen het precieze bedrag bij het adviesgesprek."

5. **Reviews (hardcoded voor MVP)**
   - 3 reviews met naam, plaats, sterren (5/5) en korte tekst
   - "Jan & Marieke, Amersfoort" — "Warmtebaas heeft alles geregeld, van advies tot subsidie. Binnen 3 weken een werkende warmtepomp."
   - "Familie De Vries, Utrecht" — "Eerlijk advies, nette installatie, en de subsidie stond binnen 6 weken op onze rekening."
   - "Peter, Hilversum" — "Eerst twijfelde ik, maar na het adviesgesprek was ik overtuigd. Top service."

6. **FAQ (accordion)**
   - "Hoeveel subsidie krijg ik?" → Afhankelijk van type en vermogen. Hybride: ca. €2.125. All-electric: ca. €3.025. Wij berekenen het exacte bedrag.
   - "Is mijn woning geschikt?" → De meeste woningen zijn geschikt, mits redelijk geïsoleerd. Wij beoordelen dit gratis bij de woningcheck.
   - "Hoe lang duurt de installatie?" → Gemiddeld 1–2 dagen voor een hybride WP, 2–3 dagen voor all-electric.
   - "Moet ik zelf de subsidie aanvragen?" → Nee, wij doen dat volledig voor u bij RVO.
   - "Wat kost een warmtepomp?" → Een hybride warmtepomp kost €4.500–€7.500. All-electric: €8.000–€15.000. Na subsidie betaalt u €2.000–€4.000 minder.

7. **Werkgebied**
   - Tekst: "Wij werken in heel Midden-Nederland: Utrecht, Amersfoort, Hilversum, Nieuwegein, Zeist, Woerden, Soest, Baarn, Bunschoten en omgeving."
   - Lijst van 15-20 plaatsnamen (goed voor SEO)

8. **Formulier (LeadForm component)**
   - Kop boven formulier: "Gratis woningcheck aanvragen"
   - Velden:
     - Naam (verplicht)
     - E-mail (verplicht)
     - Telefoon (verplicht)
     - Postcode
     - Type woning (dropdown: tussenwoning, hoekwoning, 2-onder-1-kap, vrijstaand, appartement)
     - Bouwjaar (dropdown: <1975, 1975-1990, 1990-2005, 2005-2020, >2020)
     - Huidig verwarmingssysteem (dropdown: cv-ketel, stadsverwarming, warmtepomp, anders)
     - Isolatie (dropdown: goed, redelijk, matig, weet ik niet)
     - Voorkeur (dropdown: hybride warmtepomp, all-electric warmtepomp, weet ik nog niet)
     - Bericht (optioneel, textarea)
   - Button: "Woningcheck aanvragen" (primary rood)
   - Onder button: "Binnen 48 uur nemen wij contact met u op voor een gratis adviesgesprek."
   - Success state: "Bedankt! Wij nemen binnen 48 uur contact met u op."

9. **Footer**
   - Klimaatbaas B.V. | Midden-Nederland
   - Links naar andere sites: "Ook airconditioning nodig? → aircobaas.com" en "Subsidie checken? → subsidiebaas.com"
   - "Onderdeel van Klimaatbaas B.V."

---

### AIRCOBAAS.COM

**Doel:** Woningeigenaren die snel een airco willen, vaak getriggerd door warm weer. Korte besliscyclus, minder complexiteit dan WP.

**Secties:**

1. **Hero**
   - Kop: "Airco geplaatst binnen 2 weken"
   - Subkop: "Koelen én verwarmen. Vakkundige installatie door gecertificeerde monteurs."
   - CTA: "Gratis offerte aanvragen"

2. **USPs (3 kolommen)**
   - "Binnen 2 weken geplaatst" — Geen maandenlange wachtlijsten. Wij plannen snel.
   - "Koelen én verwarmen" — Moderne airco's verwarmen ook. Ideaal voor tussenseizoen.
   - "Nette afwerking" — Kabelgoten op kleur, buitenunit netjes weggewerkt, alles opgeruimd.

3. **Wat kost een airco? (prijsindicatie)**
   - Single split (1 ruimte): vanaf €1.800 geïnstalleerd
   - Multi-split (2-3 ruimtes): vanaf €3.500 geïnstalleerd
   - Multi-split (4+ ruimtes): op maat, vanaf €5.500
   - "Inclusief installatie, materiaal en 2 jaar garantie."

4. **Reviews (hardcoded)**
   - 3 reviews, kort en puntig
   - "Sophie, Bunnik" — "Binnen een week geplaatst. Heerlijk koel huis, ook fijn als verwarming in het najaar."
   - "Mark & Lisa, Nieuwegein" — "Nette jongens, alles keurig afgewerkt. Zelfs de buitenunit zie je bijna niet."
   - "Dennis, Utrecht" — "Snelle offerte, snelle plaatsing, prima prijs. Aanrader."

5. **FAQ (accordion)**
   - "Hoe snel kan mijn airco geplaatst worden?" → Meestal binnen 2 weken na akkoord.
   - "Kan een airco ook verwarmen?" → Ja, moderne split-systemen verwarmen tot -15°C buitentemperatuur. Ideaal voor voor- en naseizoen.
   - "Hoeveel geluid maakt een airco?" → Moderne binnenunits: 19-25 dB (stiller dan een fluistering). Buitenunits: 45-50 dB.
   - "Heb ik een vergunning nodig?" → Meestal niet. Alleen bij monumenten of VvE's kan toestemming nodig zijn.

6. **Formulier (LeadForm component)**
   - Kop: "Gratis offerte aanvragen"
   - Velden:
     - Naam (verplicht)
     - E-mail (verplicht)
     - Telefoon (verplicht)
     - Postcode
     - Aantal ruimtes (dropdown: 1 ruimte, 2-3 ruimtes, 4+ ruimtes)
     - Gewenst (dropdown: alleen koelen, koelen én verwarmen, weet ik nog niet)
     - Wanneer (dropdown: zo snel mogelijk, binnen 3 maanden, ik oriënteer me)
     - Bericht (optioneel)
   - Button: "Offerte aanvragen" (primary blauw)
   - Onder button: "Binnen 24 uur reactie. Vrijblijvend."

7. **Footer**
   - Zelfde structuur als Warmtebaas maar met cross-link naar warmtebaas.com
   - "Ook van het gas af? → warmtebaas.com"

---

### KLIMAATBAAS.COM

**Doel:** Hoofdmerk. Autoriteit, vertrouwen, werkgebied. Verwijst door naar de submerken voor specifieke producten.

**Secties:**

1. **Hero**
   - Kop: "Verwarmt. Koelt. Ontzorgd."
   - Subkop: "Klimaatbaas is uw totaalpartner voor warmtepompen en airconditioning in Midden-Nederland."
   - Twee CTA-buttons naast elkaar:
     - "Warmtepomp →" (linkt naar warmtebaas.com, rood)
     - "Airconditioning →" (linkt naar aircobaas.com, blauw)

2. **Wie zijn wij (kort)**
   - "Klimaatbaas B.V. is een installatiebedrijf in Midden-Nederland, gespecialiseerd in warmtepompen en airconditioning. Wij werken met twee specialistenteams: Warmtebaas voor warmtepompen en Aircobaas voor airconditioning. Eén bedrijf, twee specialismen, volledige ontzorging."

3. **Onze specialismen (2 kaarten)**
   - Kaart 1: Warmtebaas logo/kleur → "Hybride en all-electric warmtepompen. Inclusief subsidie-ontzorging." → Button naar warmtebaas.com
   - Kaart 2: Aircobaas logo/kleur → "Split en multi-split airconditioning. Koelen én verwarmen." → Button naar aircobaas.com

4. **Waarom Klimaatbaas (4 USPs)**
   - "Gecertificeerd" — F-gassen A1/A2, BRL100, Vakmanschap Warmtepompen
   - "Regionaal" — Korte lijnen, snel ter plaatse, we kennen de buurt
   - "Subsidie geregeld" — Volledige ISDE-aanvraag, u hoeft niets te doen
   - "Onderhoud & service" — Servicecontracten, storingsdienst, jaarlijkse check

5. **Werkgebied (uitgebreid, SEO-pagina)**
   - Kaart-achtige weergave (of lijst) met alle plaatsen
   - Utrecht, Amersfoort, Hilversum, Nieuwegein, Zeist, Woerden, Soest, Baarn, Bunschoten, De Bilt, Bilthoven, Driebergen, Doorn, Wijk bij Duurstede, IJsselstein, Vianen, Leidsche Rijn, Vleuten, Houten, Bunnik, Breukelen, Maarssen, Loenen, Loosdrecht, Naarden, Bussum, Huizen, Laren, Blaricum, Eemnes

6. **Reviews (zelfde als submerken, gecombineerd)**

7. **Contact / Formulier**
   - Eenvoudig: Naam, Email, Telefoon, Bericht
   - "Neem contact op of bel direct: [telefoonnummer]"

8. **Footer**
   - Klimaatbaas B.V. | warmtebaas.com | aircobaas.com | subsidiebaas.com
   - KvK: [na oprichting]

---

### SUBSIDIEBAAS.COM

**Doel:** Informatieve site. Vangt traffic op van mensen die zoeken op "ISDE subsidie", "subsidie warmtepomp", "meldcode warmtepomp". Converteert naar installatie-lead.

**Secties:**

1. **Hero**
   - Kop: "Hoeveel subsidie krijgt u voor een warmtepomp?"
   - Subkop: "Check het direct. Gratis, vrijblijvend, in 2 minuten."
   - CTA: "Start subsidiecheck" (scrollt naar calculator)

2. **SubsidieCalculator (hoofdelement)**
   - Stap 1: Kies type → Hybride WP | All-electric lucht-water | Bodemwarmtepomp | Warmtepompboiler
   - Stap 2: Kies vermogen (slider of dropdown) → 4 kW | 6 kW | 8 kW | 10 kW | 12 kW+
   - Stap 3: Energielabel (optioneel) → A | B | C | D | E of lager | Weet ik niet
   - Resultaat: "Uw indicatie ISDE-subsidie: €X.XXX"
   - Breakdown tonen: basisbedrag + kW-toeslag + labelbonus
   - CTA onder resultaat: "Wilt u weten wat een warmtepomp u netto kost? Vraag een gratis adviesgesprek aan."
   - Button linkt naar formulier onderaan (of naar warmtebaas.com)

3. **ISDE Uitleg (kort)**
   - Wat is ISDE? De Investeringssubsidie Duurzame Energie en Energiebesparing vergoedt een deel van uw investering in een warmtepomp.
   - Budget 2026: €500 miljoen beschikbaar. De regeling loopt door tot en met 2031.
   - Wie komt in aanmerking? Woningeigenaren die een warmtepomp laten installeren door een gecertificeerd bedrijf.
   - Hoe werkt het? Na installatie dient u (of uw installateur) een aanvraag in bij RVO. Uitbetaling binnen 8–13 weken.

4. **Veelgestelde subsidievragen (FAQ)**
   - "Moet ik de subsidie zelf aanvragen?" → Dat kan, maar wij doen het ook voor u. Wij zijn bekend met de procedure en voorkomen fouten.
   - "Kan ik subsidie combineren met een lening?" → Ja, u kunt ISDE combineren met het Nationaal Warmtefonds (lage rente) of een hypotheekverhoging.
   - "Wat is een meldcode?" → Een unieke code die uw installateur na de installatie registreert bij RVO. Zonder meldcode geen subsidie.
   - "Hoe lang duurt de uitbetaling?" → Gemiddeld 8–13 weken na complete aanvraag.
   - "Is er subsidie voor airconditioning?" → Niet via ISDE. Airco's met verwarmingsfunctie kunnen soms via andere gemeentelijke regelingen in aanmerking komen.

5. **Formulier (kort)**
   - Kop: "Vrijblijvend adviesgesprek aanvragen"
   - Velden: Naam, Email, Telefoon, Interesse (dropdown: warmtepomp, isolatie, beide, weet niet), Bericht
   - Button: "Gratis advies aanvragen"
   - Onder button: "Subsidiebaas is een initiatief van Klimaatbaas B.V. — uw installatiepartner in Midden-Nederland."

6. **Footer**
   - "Klaar voor installatie? → warmtebaas.com | aircobaas.com"
   - "Onderdeel van Klimaatbaas B.V."

---

## Subsidie Calculator Logica

```typescript
// Vereenvoudigde ISDE 2026 berekening
const isdeBerekening = (type: string, kw: number, label: string) => {
  let basis = 0;
  let perKw = 0;
  let labelBonus = 0;

  switch (type) {
    case 'hybride':
      basis = 1025;
      perKw = 225;
      break;
    case 'all-electric-lucht':
      basis = 1025;
      perKw = 225;
      break;
    case 'bodem':
      basis = 1825;
      perKw = 325;
      break;
    case 'boiler':
      basis = 675;
      perKw = 0;
      break;
  }

  // Labelbonus: €200 bij label A+++ of hoger (vereenvoudigd)
  if (['A', 'B'].includes(label)) {
    labelBonus = 200;
  }

  const totaal = basis + (kw * perKw) + labelBonus;
  return { basis, perKw: kw * perKw, labelBonus, totaal };
};
```

## Shared Components Specificaties

### LeadForm.tsx
- Props: `site` (bepaalt welke velden), `colors` (theme), `submitLabel`
- Validatie via Zod: email format, telefoon minimaal 10 chars, naam minimaal 2 chars
- POST naar `/api/lead` met alle velden + site identifier + UTM params uit URL
- Loading state op button
- Success state: groen vinkje + bedanktekst
- Error state: rood met "Er ging iets mis. Probeer het opnieuw of bel ons direct."

### /api/lead/route.ts
```typescript
// 1. Valideer input met Zod
// 2. Insert in Supabase leads tabel
// 3. Stuur notificatie-email via Resend naar NOTIFICATION_EMAIL
//    Subject: "Nieuwe lead via {site}: {naam} ({postcode})"
//    Body: alle ingevulde velden in een leesbaar format
// 4. Return 200 + { success: true }
```

### SEO per pagina
- Unieke `<title>` en `<meta description>` per site (zie og config)
- Canonical URL per domein
- Open Graph tags met site-specifieke content
- Structured data (LocalBusiness) op klimaatbaas.com:
  ```json
  {
    "@type": "LocalBusiness",
    "name": "Klimaatbaas B.V.",
    "description": "Installatie van warmtepompen en airconditioning",
    "areaServed": "Midden-Nederland",
    "url": "https://klimaatbaas.com"
  }
  ```

## Design Richtlijnen

- **Geen stockfoto's.** Gebruik gekleurde vlakken, gradients en iconen. De foto's komen later van echte installaties.
- **Glassmorphism-accenten:** Subtiel, niet overdreven. Frosted-glass effect op kaarten en formulier-achtergrond.
- **Witruimte:** Ruim. Dit is geen drukke vergelijkingssite. Het moet vertrouwen uitstralen.
- **Mobiel-first:** 70%+ van het traffic komt via mobiel (Google Ads). Formulier moet zonder scrollen bereikbaar zijn op mobiel.
- **Laadsnelheid:** Geen externe fonts laden (gebruik next/font). Geen grote afbeeldingen. Lighthouse score >90.
- **Animaties:** Subtiele fade-in bij scroll (Intersection Observer of framer-motion). Geen overdreven effecten.
- **Buttons:** Afgerond (rounded-xl), groot genoeg voor mobile tap (min-height 48px), duidelijke hover/active states.
- **Formulier:** Sticky CTA-bar op mobiel (fixed bottom) met "Gratis offerte aanvragen" die naar het formulier scrollt.

## Kleurgebruik per site

| Element | Warmtebaas | Aircobaas | Klimaatbaas | Subsidiebaas |
|---------|-----------|-----------|-------------|--------------|
| Hero gradient | warm-50 → warm-100 | blue-50 → blue-100 | slate-50 → blue-50 | green-50 → emerald-50 |
| Primary button | bg-red-600 | bg-blue-600 | bg-blue-900 | bg-green-600 |
| Accenten | red-500 | blue-500 | blue-800 | green-500 |
| USP iconen | red-100 bg, red-600 icon | blue-100 bg, blue-600 icon | blue-50 bg, blue-800 icon | green-100 bg, green-600 icon |

## Claude Code Instructies

1. Maak eerst de volledige projectstructuur aan
2. Begin met `lib/sites.ts` en `middleware.ts` (routing)
3. Bouw de shared components: `Hero`, `USPs`, `LeadForm`, `SubsidieCalculator`, `FAQ`, `Reviews`, `Footer`
4. Bouw de vier site-pagina's met de juiste content en kleuren
5. Bouw de API route voor lead submission
6. Voeg SEO metadata toe per site
7. Test alle vier de sites op localhost (wissel via headers of query param)
8. Zorg dat `npm run build` slaagt zonder errors

## Na het bouwen

- Deploy op Vercel
- Koppel domeinen: warmtebaas.com, aircobaas.com, klimaatbaas.com, subsidiebaas.com
- Maak Supabase project aan en voer SQL schema uit
- Maak Resend account aan en verifieer domein
- Zet Google Ads aan met €500 testbudget: campagne "warmtepomp installateur utrecht" en "airco laten plaatsen utrecht"
