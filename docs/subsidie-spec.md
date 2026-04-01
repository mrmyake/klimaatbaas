# Subsidiebaas — ISDE 2026 Subsidiecalculator (echte data)

Dit document vervangt de vereenvoudigde calculator in de projectbrief. Gebruik deze exacte bedragen en logica.

## Bron: RVO.nl, Milieu Centraal, Warmteservice (jan 2026)

---

## ISDE 2026 Subsidieberekening — Regels

### Eerste lucht-waterwarmtepomp (hybride of all-electric)

```
Subsidie = Startbedrag + (Vermogen in kW × €225/kW) + Energielabelbonus
```

| Component | Bedrag |
|-----------|--------|
| Startbedrag (1e lucht-water WP) | €1.025 |
| Per kW (vanaf 1e kW, dit is nieuw t.o.v. 2025) | €225 |
| Energielabelbonus A+++ | €200 |
| Energielabelbonus A++ | €0 |
| Minimum subsidie | €500 |

**Rekenvoorbeeld RVO:** Eerste lucht-water WP, A+++, 4 kW:
€1.025 + (4 × €225) + €200 = **€2.125**

### Tweede of volgende lucht-waterwarmtepomp

```
Subsidie = Vermogen in kW × €225/kW
```

Géén startbedrag, géén energielabelbonus. Alleen €225/kW.

**Rekenvoorbeeld:** 2e lucht-water WP, 4 kW:
4 × €225 = **€900**

### Grond-waterwarmtepomp (bodemwarmtepomp)

Bedragen ongewijzigd t.o.v. 2025:

| Component | Bedrag |
|-----------|--------|
| Startbedrag | €1.825 |
| Per kW | €325 |
| Energielabelbonus A+++ | €225 |
| Energielabelbonus A++ | €0 |

**Rekenvoorbeeld:** Bodem-WP, A+++, 6 kW:
€1.825 + (6 × €325) + €225 = **€4.000**

### Water-waterwarmtepomp

Bedragen ongewijzigd t.o.v. 2025. Maximaal tot €12.975 (bijv. NIBE 67 kW).

| Component | Bedrag |
|-----------|--------|
| Startbedrag | €1.825 |
| Per kW | €150 |
| Energielabelbonus A+++ | €225 |

### Warmtepompboiler

Vast bedrag, ongewijzigd t.o.v. 2025:

| Type | Subsidie |
|------|----------|
| Warmtepompboiler (standaard) | €675 |
| Warmtepompboiler (hoog rendement / groter vermogen) | €725 |

### Ventilatielucht-waterwarmtepomp

Tot €2.600 subsidie. Exacte bedrag via meldcodelijst RVO.

---

## Nieuwe regels 2026 — Belangrijk

1. **Geen subsidie meer voor split lucht-water WP's met <3 kg koudemiddel en GWP >750** (EU F-gassenverordening). R32-splits met klein vulgewicht vallen hieronder. R290 (propaan) en monoblock systemen zijn wel subsidiabel.

2. **Subsidie kan voortaan eens per 3 jaar worden aangevraagd** (vervreemdingstermijn verlengd naar 3 jaar).

3. **Budget 2026:** €500 miljoen (€511 mln incl. windturbines). Regeling loopt door t/m 2031.

4. **Aanvraag:** Na installatie, via Mijn RVO met DigiD, binnen 24 maanden.

5. **Combinatievoordeel:** Bij gelijktijdige isolatie krijg je het hogere subsidietarief voor de isolatiemaatregel.

---

## Calculator TypeScript Implementatie

```typescript
// types.ts
export type WarmtepompType = 
  | 'lucht-water-hybride'
  | 'lucht-water-all-electric'
  | 'grond-water'
  | 'water-water'
  | 'warmtepompboiler';

export type EnergieLabel = 'A+++' | 'A++' | 'onbekend';

export interface SubsidieInput {
  type: WarmtepompType;
  vermogenKw: number;
  energieLabel: EnergieLabel;
  isEersteWP: boolean;          // true = eerste WP, false = 2e of volgende
  combineertMetIsolatie: boolean;
}

export interface SubsidieResultaat {
  startbedrag: number;
  kwToeslag: number;
  labelBonus: number;
  totaal: number;
  toelichting: string[];
  waarschuwingen: string[];
}

// subsidie-calculator.ts
export function berekenISDE2026(input: SubsidieInput): SubsidieResultaat {
  const { type, vermogenKw, energieLabel, isEersteWP } = input;
  
  let startbedrag = 0;
  let perKw = 0;
  let labelBonus = 0;
  const toelichting: string[] = [];
  const waarschuwingen: string[] = [];

  switch (type) {
    case 'lucht-water-hybride':
    case 'lucht-water-all-electric':
      if (isEersteWP) {
        startbedrag = 1025;
        perKw = 225;
        toelichting.push(`Startbedrag eerste lucht-water WP: €${startbedrag}`);
        toelichting.push(`${vermogenKw} kW × €${perKw}/kW = €${vermogenKw * perKw}`);
        
        if (energieLabel === 'A+++') {
          labelBonus = 200;
          toelichting.push(`Energielabelbonus A+++: €${labelBonus}`);
        } else if (energieLabel === 'A++') {
          labelBonus = 0;
          toelichting.push('Energielabel A++: geen bonus (alleen bij A+++)');
        } else {
          labelBonus = 0;
          toelichting.push('Energielabel onbekend: geen bonus meegerekend');
          waarschuwingen.push('Controleer het energielabel. Bij A+++ ontvangt u €200 extra.');
        }
      } else {
        // 2e of volgende lucht-water WP
        startbedrag = 0;
        perKw = 225;
        labelBonus = 0;
        toelichting.push('2e of volgende lucht-water WP: geen startbedrag, geen labelbonus');
        toelichting.push(`${vermogenKw} kW × €${perKw}/kW = €${vermogenKw * perKw}`);
      }
      
      waarschuwingen.push(
        'Let op: vanaf 2026 geen subsidie meer voor split WP\'s met <3 kg koudemiddel en GWP >750. ' +
        'R290 (propaan) en monoblock systemen zijn wel subsidiabel.'
      );
      break;

    case 'grond-water':
      startbedrag = 1825;
      perKw = 325;
      toelichting.push(`Startbedrag grond-water WP: €${startbedrag}`);
      toelichting.push(`${vermogenKw} kW × €${perKw}/kW = €${vermogenKw * perKw}`);
      
      if (energieLabel === 'A+++') {
        labelBonus = 225;
        toelichting.push(`Energielabelbonus A+++: €${labelBonus}`);
      } else if (energieLabel === 'A++') {
        labelBonus = 0;
        toelichting.push('Energielabel A++: geen bonus');
      }
      break;

    case 'water-water':
      startbedrag = 1825;
      perKw = 150;
      toelichting.push(`Startbedrag water-water WP: €${startbedrag}`);
      toelichting.push(`${vermogenKw} kW × €${perKw}/kW = €${vermogenKw * perKw}`);
      
      if (energieLabel === 'A+++') {
        labelBonus = 225;
        toelichting.push(`Energielabelbonus A+++: €${labelBonus}`);
      }
      
      const maxWaterWater = 12975;
      const berekend = startbedrag + (vermogenKw * perKw) + labelBonus;
      if (berekend > maxWaterWater) {
        waarschuwingen.push(`Maximum subsidie water-water WP: €${maxWaterWater.toLocaleString('nl-NL')}`);
      }
      break;

    case 'warmtepompboiler':
      startbedrag = 675;
      perKw = 0;
      labelBonus = 0;
      toelichting.push(`Vast subsidiebedrag warmtepompboiler: €${startbedrag}`);
      toelichting.push('Geen kW-toeslag voor warmtepompboilers');
      break;
  }

  let totaal = startbedrag + (vermogenKw * perKw) + labelBonus;
  
  // Minimum subsidie regel
  if (totaal > 0 && totaal < 500 && type !== 'warmtepompboiler') {
    totaal = 500;
    toelichting.push('Minimumsubsidie toegepast: €500');
  }
  
  // Maximum water-water
  if (type === 'water-water' && totaal > 12975) {
    totaal = 12975;
  }

  // Combinatie met isolatie
  if (input.combineertMetIsolatie) {
    toelichting.push('U combineert met isolatie: u komt mogelijk in aanmerking voor het hogere isolatiesubsidietarief.');
  }

  // Algemene toelichting
  toelichting.push('');
  toelichting.push('Dit is een indicatie. Het exacte bedrag hangt af van de meldcode van uw warmtepomp op de RVO meldcodelijst.');

  return {
    startbedrag,
    kwToeslag: vermogenKw * perKw,
    labelBonus,
    totaal,
    toelichting,
    waarschuwingen,
  };
}
```

---

## Subsidiebaas Calculator UI Specificatie

### Stap 1: Type warmtepomp kiezen
Vier visuele kaarten (klikbaar):

| Kaart | Icoon | Label | Sublabel |
|-------|-------|-------|----------|
| Hybride warmtepomp | 🔥+❄️ | Hybride warmtepomp | Combinatie met uw cv-ketel |
| All-electric warmtepomp | ⚡ | Volledig elektrisch | Zonder cv-ketel, 100% elektrisch |
| Bodemwarmtepomp | 🌍 | Grond-water warmtepomp | Warmte uit de bodem |
| Warmtepompboiler | 🚿 | Warmtepompboiler | Alleen warm tapwater |

### Stap 2: Vermogen kiezen (niet bij warmtepompboiler)
Slider of knoppen:

| Vermogen | Typisch voor |
|----------|-------------|
| 4 kW | Appartement / kleine tussenwoning |
| 6 kW | Tussenwoning / hoekwoning |
| 8 kW | Ruime woning / 2-onder-1-kap |
| 10 kW | Grote woning / vrijstaand |
| 12 kW | Grote vrijstaande woning |
| 14+ kW | Zeer grote woning |

### Stap 3: Energielabel
Drie opties:
- A+++ (meeste warmtepompen) — "Krijgt u €200 extra"
- A++ — "Geen extra bonus"
- Weet ik niet — "Wij checken dit voor u"

### Stap 4: Eerste warmtepomp?
- Ja, dit is mijn eerste warmtepomp
- Nee, ik heb al een warmtepomp

### Stap 5: Combineert u met isolatie?
- Ja (of van plan) — "U kunt extra isolatiesubsidie ontvangen"
- Nee

### Resultaat
Toon visueel:

```
┌─────────────────────────────────────────────┐
│  Uw indicatie ISDE-subsidie 2026            │
│                                              │
│  ████████████████  €2.125                   │
│                                              │
│  Startbedrag          €1.025                │
│  4 kW × €225          €  900                │
│  Energielabelbonus    €  200                │
│  ─────────────────────────────              │
│  Totaal               €2.125                │
│                                              │
│  ⚠️  Let op: alleen voor warmtepompen met    │
│     geldige meldcode op de RVO-lijst.        │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  Wilt u weten wat een warmtepomp     │   │
│  │  u netto kost na subsidie?           │   │
│  │                                      │   │
│  │  [Gratis adviesgesprek aanvragen]    │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### Netto kosten indicatie (optioneel, onder resultaat)

```
Geschatte netto kosten na subsidie:

                          Hybride 4kW    All-elec 8kW
Gemiddelde totaalprijs    €5.500         €11.000
ISDE-subsidie             −€2.125        −€3.025
────────────────────────────────────────────────
Netto investering         €3.375         €7.975

"Dit is een indicatie. De werkelijke prijs hangt af van uw woning,
het gekozen merk en de complexiteit van de installatie."
```

---

## Referentietabel: Veelvoorkomende scenario's

Voor QA en content op de site:

| Scenario | Type | kW | Label | 1e WP? | Subsidie |
|----------|------|-----|-------|--------|----------|
| Hybride tussenwoning | lucht-water hybride | 4 | A+++ | Ja | €2.125 |
| Hybride hoekwoning | lucht-water hybride | 6 | A+++ | Ja | €2.575 |
| Hybride groot | lucht-water hybride | 8 | A+++ | Ja | €3.025 |
| All-electric standaard | lucht-water all-elec | 8 | A+++ | Ja | €3.025 |
| All-electric groot | lucht-water all-elec | 10 | A+++ | Ja | €3.475 |
| All-electric XL | lucht-water all-elec | 12 | A+++ | Ja | €3.925 |
| All-electric max | lucht-water all-elec | 14 | A+++ | Ja | €4.375 |
| Bodem standaard | grond-water | 6 | A+++ | Ja | €4.000 |
| Bodem groot | grond-water | 8 | A+++ | Ja | €4.650 |
| Bodem XL | grond-water | 10 | A+++ | Ja | €5.300 |
| Warmtepompboiler | boiler | n.v.t. | n.v.t. | n.v.t. | €675 |
| 2e lucht-water 4kW | lucht-water | 4 | n.v.t. | Nee | €900 |
| 2e lucht-water 6kW | lucht-water | 6 | n.v.t. | Nee | €1.350 |
| Label A++ i.p.v. A+++ | lucht-water | 8 | A++ | Ja | €2.825 |

---

## Aanvraagproces — Stappen voor de site

De Subsidiebaas-site moet ook het aanvraagproces uitleggen. Dit zijn de echte stappen:

### Stappenplan ISDE-aanvraag

1. **Check de meldcodelijst** — Zoek uw warmtepomp op in de [RVO meldcodelijst](https://www.rvo.nl/subsidies-financiering/isde/meldcodelijst). Alleen warmtepompen met een geldige meldcode komen in aanmerking.

2. **Laat installeren door een erkend bedrijf** — De installateur moet ingeschreven zijn bij de KvK. De meldcode moet op de offerte én factuur staan.

3. **Bewaar uw documenten:**
   - Factuur (met meldcode, typenummer, merk)
   - Betaalbewijs
   - Installatiedatum
   - Foto van de installatie

4. **Vraag subsidie aan via Mijn RVO** — Ga naar mijn.rvo.nl, log in met DigiD (app of sms-verificatie). Upload uw documenten.

5. **Wacht op beoordeling** — RVO beoordeelt uw aanvraag. Gemiddelde doorlooptijd: 8–13 weken.

6. **Ontvang uw subsidie** — Het bedrag wordt rechtstreeks op uw rekening gestort.

### Veelgemaakte fouten (content voor FAQ)

- **Meldcode ontbreekt op de factuur** — Vraag uw installateur altijd om de meldcode op de factuur te vermelden.
- **Verkeerd type warmtepomp opgegeven** — Controleer of het type op de factuur overeenkomt met de meldcodelijst.
- **Te laat aangevraagd** — U heeft 24 maanden na installatie. Stel niet uit.
- **Nieuwbouwwoning** — ISDE geldt alleen voor bestaande bouw (omgevingsvergunning vóór 1 juli 2018).
- **Zelf geïnstalleerd** — De warmtepomp moet door een bedrijf zijn geïnstalleerd.

---

## Documenten-checklist (downloadbaar op de site)

Maak een visuele checklist die bezoekers kunnen printen:

```
✅ ISDE Subsidie Checklist — Warmtepomp 2026

□ Warmtepomp staat op de RVO meldcodelijst
□ Meldcode staat op de offerte
□ Meldcode staat op de factuur  
□ Factuur bevat: merk, type, vermogen, meldcode
□ Factuur staat op naam van de woningeigenaar
□ Betaalbewijs bewaard (bankafschrift of iDEAL-bevestiging)
□ Installatiedatum genoteerd
□ Foto van de geplaatste warmtepomp gemaakt
□ Woning is bestaande bouw (vergunning vóór 1 juli 2018)
□ Installatie uitgevoerd door een bedrijf (niet zelf)
□ Aanvraag ingediend binnen 24 maanden na installatie

→ Aanvragen via: mijn.rvo.nl (DigiD vereist)
→ Vragen? Bel Klimaatbaas: [telefoonnummer]
```
