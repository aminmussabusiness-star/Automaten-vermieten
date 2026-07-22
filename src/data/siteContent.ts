export type MachineCategory = "Kompakt" | "Premium" | "Event" | "Umsatzstark";

export interface SlotMachine {
  id: string;
  slug: string;
  name: string;
  category: MachineCategory;
  tagline: string;
  description: string;
  longDescription: string;
  idealFor: string;
  monthlyPriceFrom: string;
  baseMonthlyPrice: number;
  baseDeposit: number;
  features: string[];
  summaryPoints: string[];
  image: string;
  available: boolean;
}

export const navigationItems = [
  { label: "Start", href: "#start" },
  { label: "Automaten", href: "#automaten" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "FAQ", href: "#faq" },
  { label: "Anfrage", href: "#anfrage" },
];

export const portalNavigationItems = [
  { label: "Automaten mieten", to: "/automaten", shortLabel: "Mieten" },
  { label: "Betriebskonzepte", to: "/betriebskonzepte", shortLabel: "Konzepte" },
  { label: "Sozial konzepte", to: "/sozial-konzepte", shortLabel: "Sozial" },
  { label: "Vorratsgeselschaften", to: "/vorratsgeselschaften", shortLabel: "Vorrat" },
  { label: "Oasis", to: "/oasis", shortLabel: "Oasis" },
  { label: "Kontakt", to: "/kontakt", shortLabel: "Kontakt" },
  { label: "Impressum", to: "/impressum", shortLabel: "Impressum" },
];

export const trustItems = [
  { value: "48h", label: "schnelle Rueckmeldung auf neue Anfragen" },
  { value: "100%", label: "persoenliche Betreuung von Auswahl bis Aufstellung" },
  { value: "flexibel", label: "Mietmodelle fuer Gastro, Events und Gewerbe" },
];

export const processSteps = [
  {
    title: "Passenden Automaten waehlen",
    description:
      "Interessenten sehen direkt, welches Modell fuer Bar, Spielhalle, Eventflaeche oder Lounge am besten passt.",
  },
  {
    title: "Mietzeitraum angeben",
    description:
      "Im Formular werden Standort, Wunschzeitraum und besondere Anforderungen mitgesendet, damit das Angebot sofort passend ist.",
  },
  {
    title: "Angebot und Rueckruf erhalten",
    description:
      "Nach der Anfrage erfolgt eine schnelle Rueckmeldung mit Verfuegbarkeit, Mietkonditionen und dem naechsten Schritt.",
  },
];

export const faqItems = [
  {
    question: "Kann ich mehrere Automaten gleichzeitig anfragen?",
    answer:
      "Ja. Es koennen mehrere Modelle ausgewaehlt werden. Die Auswahl wird gesammelt in die Mietanfrage uebernommen.",
  },
  {
    question: "Fuer welche Einsatzorte ist die Vermietung geeignet?",
    answer:
      "Die Modelle eignen sich je nach Ausfuehrung fuer Gastronomie, Eventflaechen, Entertainment-Bereiche und gewerbliche Standorte.",
  },
  {
    question: "Wie schnell erfolgt die Rueckmeldung?",
    answer:
      "Die Website kommuniziert eine schnelle Kontaktaufnahme. In der Regel wird innerhalb kurzer Zeit telefonisch oder per E-Mail reagiert.",
  },
  {
    question: "Kann der Aufstellort vorab abgestimmt werden?",
    answer:
      "Ja. Im Anfrageformular koennen Ort, Rahmenbedingungen und Sonderwuensche direkt mitgeschickt werden.",
  },
];

export const contactOptions = [
  {
    title: "Telefon",
    value: "+49 170 1234567",
    href: "tel:+491701234567",
    description: "Direkter Kontakt fuer schnelle Rueckfragen.",
  },
  {
    title: "WhatsApp",
    value: "+49 170 1234567",
    href: "https://wa.me/491701234567",
    description: "Ideal fuer spontane Anfragen unterwegs.",
  },
  {
    title: "E-Mail",
    value: "anfrage@automaten-miete.de",
    href: "mailto:anfrage@automaten-miete.de",
    description: "Geeignet fuer strukturierte Mietanfragen.",
  },
];

export const legalContent = [
  {
    title: "Angaben gemaess Paragraph 5 TMG",
    body: [
      "Automaten Vermietung Musterbetrieb",
      "Musterstrasse 12",
      "12345 Musterstadt",
    ],
  },
  {
    title: "Kontakt",
    body: [
      "Telefon: +49 170 1234567",
      "E-Mail: anfrage@automaten-miete.de",
    ],
  },
  {
    title: "Hinweis",
    body: [
      "Diese Angaben sind Platzhalter und muessen vor dem Livegang mit den echten Unternehmensdaten ersetzt werden.",
    ],
  },
];

export const slotMachines: SlotMachine[] = [
  {
    id: "royal-lounge",
    slug: "royal-lounge-8",
    name: "Royal Lounge 8",
    category: "Premium",
    tagline: "Fuer hochwertige Bars, Lounges und stilvolle Aufstellflaechen",
    description:
      "Ein edles Premium-Modell mit praesentem Auftritt, komfortabler Bedienung und einer starken optischen Wirkung im Raum.",
    longDescription:
      "Royal Lounge 8 richtet sich an Betreiber, die einen Automaten mit hochwertiger Erscheinung und ruhiger, luxurioeser Wirkung praesentieren wollen. Das Modell fuegt sich besonders gut in stilvolle Innenraeume ein und eignet sich fuer Standorte, an denen Optik und Qualitaetseindruck mitentscheiden.",
    idealFor: "Hotelbar, Lounge, gehobene Gastronomie",
    monthlyPriceFrom: "ab 349 EUR / Monat",
    baseMonthlyPrice: 349,
    baseDeposit: 950,
    features: ["Premium-Gehause", "LED-Akzente", "kompakte Stellflaeche"],
    summaryPoints: ["edle Gesamtwirkung", "hochwertiger Look", "fuer stilvolle Standorte"],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20slot%20machine%20for%20rental%2C%20golden%20accent%20lighting%2C%20high-end%20casino%20cabinet%2C%20dark%20studio%20background%2C%20photorealistic%2C%20premium%20product%20photography&image_size=portrait_4_3",
    available: true,
  },
  {
    id: "city-play",
    slug: "city-play-compact",
    name: "City Play Compact",
    category: "Kompakt",
    tagline: "Die platzsparende Loesung fuer kleinere Standorte",
    description:
      "Ein kompaktes Modell fuer Betreiber, die wenig Stellflaeche haben und dennoch eine professionelle Geraeteloesung wuenschen.",
    longDescription:
      "City Play Compact ist fuer Orte gedacht, an denen jeder Quadratmeter zaehlt. Trotz der kleineren Bauform bleibt die Praesentation professionell und sauber, wodurch das Modell besonders fuer kleinere Betriebe oder schmalere Aufstellflaechen interessant ist.",
    idealFor: "Bistro, Kiosk, kleine Gastroflaechen",
    monthlyPriceFrom: "ab 229 EUR / Monat",
    baseMonthlyPrice: 229,
    baseDeposit: 650,
    features: ["platzsparend", "robuste Bauweise", "schnell integrierbar"],
    summaryPoints: ["kleine Stellflaeche", "einfache Integration", "solider B2B-Einstieg"],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=compact%20slot%20machine%20rental%20unit%2C%20modern%20black%20cabinet%2C%20subtle%20amber%20lighting%2C%20studio%20product%20photo%2C%20realistic%2C%20clean%20background&image_size=portrait_4_3",
    available: true,
  },
  {
    id: "event-star",
    slug: "event-star-deluxe",
    name: "Merkur M-Box",
    category: "Event",
    tagline: "Inszenierter Blickfang fuer Promotion und Eventeinsatz",
    description:
      "Dieses Modell setzt auf starke Sichtbarkeit und eignet sich fuer temporaere Aufbauten mit hohem Show-Faktor.",
    longDescription:
      "Event Star Deluxe wurde fuer Situationen konzipiert, in denen Aufmerksamkeit entscheidend ist. Das Modell funktioniert besonders gut in temporaeren Aufbauten, Promotionflaechen oder Event-Szenarien, bei denen ein starker erster Eindruck gewuenscht ist.",
    idealFor: "Events, Messen, Promotion-Flaechen",
    monthlyPriceFrom: "ab 299 EUR / Monat",
    baseMonthlyPrice: 299,
    baseDeposit: 780,
    features: ["auffaellige Front", "starke Lichtwirkung", "ideal fuer Events"],
    summaryPoints: ["starker Show-Faktor", "ideal fuer temporaere Einsaetze", "praesent im Raum"],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=showpiece%20slot%20machine%20for%20events%2C%20dramatic%20lighting%2C%20neon%20gold%20highlights%2C%20premium%20arcade-casino%20cabinet%2C%20photorealistic%20marketing%20image&image_size=portrait_4_3",
    available: true,
  },
  {
    id: "max-profit",
    slug: "max-profit-pro",
    name: "Max Profit Pro",
    category: "Umsatzstark",
    tagline: "Fuer stark frequentierte Standorte mit hoher Praesenz",
    description:
      "Ein leistungsstarkes Modell fuer Umgebungen mit hohem Durchlauf und einer klaren, aufmerksamkeitsstarken Platzierung.",
    longDescription:
      "Max Profit Pro ist auf stark besuchte Standorte ausgerichtet, an denen Praesenz, Sichtbarkeit und ein selbstbewusster Auftritt wichtig sind. Das Modell wirkt groesser, markanter und eignet sich fuer Betreiber, die ein auffaelliges Geraet suchen.",
    idealFor: "Entertainment-Bereiche, grosse Gastro, stark besuchte Standorte",
    monthlyPriceFrom: "ab 389 EUR / Monat",
    baseMonthlyPrice: 389,
    baseDeposit: 1100,
    features: ["markante Optik", "grosses Display", "fuer hohe Sichtbarkeit"],
    summaryPoints: ["markante Front", "fuer frequenzstarke Flaechen", "selbstbewusster Auftritt"],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=high-revenue%20slot%20machine%20cabinet%2C%20bold%20casino%20product%20shot%2C%20matte%20black%20and%20gold%20finish%2C%20dramatic%20studio%20lighting%2C%20photorealistic&image_size=portrait_4_3",
    available: false,
  },
  {
    id: "golden-vegas",
    slug: "golden-vegas-x",
    name: "Golden Vegas X",
    category: "Premium",
    tagline: "Eleganter Automat fuer stilvolle Standorte mit hoher Sichtbarkeit",
    description:
      "Ein hochwertiges Modell mit edler Front und praesenter Wirkung fuer anspruchsvolle Umgebungen.",
    longDescription:
      "Golden Vegas X ist fuer Standorte gedacht, an denen ein hochwertiger erster Eindruck wichtig ist. Das Modell verbindet eine elegante Optik mit einer klaren, selbstbewussten Praesenz und eignet sich gut fuer stilvolle Umgebungen mit gehobenem Anspruch.",
    idealFor: "Lounge, Hotel, gehobene Gastro",
    monthlyPriceFrom: "ab 359 EUR / Monat",
    baseMonthlyPrice: 359,
    baseDeposit: 980,
    features: ["edle Front", "luxurioese Lichtwirkung", "starke Praesenz"],
    summaryPoints: ["Premium-Auftritt", "hochwertiges Design", "elegante Wirkung"],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=elegant%20premium%20slot%20machine%20cabinet%2C%20gold%20and%20black%20finish%2C%20luxury%20studio%20lighting%2C%20photorealistic%20commercial%20product%20photo&image_size=portrait_4_3",
    available: true,
  },
  {
    id: "smart-line",
    slug: "smart-line-mini",
    name: "Smart Line Mini",
    category: "Kompakt",
    tagline: "Schlanke Bauform fuer kleine Flaechen und schnelle Integration",
    description:
      "Ein kompaktes Modell fuer kleinere Betriebe, die auf wenig Raum professionell auftreten wollen.",
    longDescription:
      "Smart Line Mini richtet sich an Betreiber mit begrenzter Stellflaeche. Das Modell ist kompakt, sauber gestaltet und schnell integrierbar, ohne in der Wahrnehmung billig oder provisorisch zu wirken.",
    idealFor: "Kleine Gastro, Bistro, Nebenflaechen",
    monthlyPriceFrom: "ab 219 EUR / Monat",
    baseMonthlyPrice: 219,
    baseDeposit: 590,
    features: ["sehr kompakt", "saubere Integration", "ideal fuer kleine Flaechen"],
    summaryPoints: ["wenig Platzbedarf", "ruhige Optik", "schnell aufgestellt"],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=compact%20modern%20slot%20machine%20cabinet%2C%20minimal%20black%20design%2C%20soft%20amber%20accents%2C%20realistic%20studio%20product%20shot&image_size=portrait_4_3",
    available: true,
  },
  {
    id: "night-flash",
    slug: "night-flash-event",
    name: "Night Flash Event",
    category: "Event",
    tagline: "Auffaelliger Event-Automat mit starker Lichtwirkung",
    description:
      "Ein showstarkes Modell fuer Promotions, Events und temporaere Aufbauten mit hoher Aufmerksamkeit.",
    longDescription:
      "Night Flash Event ist fuer Einsaetze entwickelt, bei denen Wirkung und Aufmerksamkeit im Vordergrund stehen. Das Modell eignet sich besonders fuer Promotionflaechen, Events und zeitlich begrenzte Installationen mit Show-Charakter.",
    idealFor: "Events, Promotion, Messe",
    monthlyPriceFrom: "ab 289 EUR / Monat",
    baseMonthlyPrice: 289,
    baseDeposit: 760,
    features: ["starke Lichtakzente", "showorientierte Front", "fuer temporaere Einsaetze"],
    summaryPoints: ["hohe Sichtbarkeit", "ideal fuer Aktionen", "starker Blickfang"],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=event%20slot%20machine%20with%20bright%20neon%20lighting%2C%20dramatic%20casino-style%20cabinet%2C%20photorealistic%20studio%20image&image_size=portrait_4_3",
    available: true,
  },
  {
    id: "power-tower",
    slug: "power-tower-max",
    name: "Power Tower Max",
    category: "Umsatzstark",
    tagline: "Markantes Modell fuer stark frequentierte Flaechen",
    description:
      "Ein praesenter Automat fuer Standorte mit viel Laufkundschaft und hoher Sichtbarkeit.",
    longDescription:
      "Power Tower Max ist fuer Orte mit viel Bewegung und hoher Aufmerksamkeit gedacht. Die groessere, markante Erscheinung sorgt fuer eine starke Raumwirkung und eignet sich fuer Betreiber, die ein auffaelliges Modell suchen.",
    idealFor: "Grosse Gastro, Entertainment, stark frequentierte Standorte",
    monthlyPriceFrom: "ab 399 EUR / Monat",
    baseMonthlyPrice: 399,
    baseDeposit: 1150,
    features: ["praesente Bauform", "hohe Sichtbarkeit", "markante Front"],
    summaryPoints: ["groesseres Format", "starker Auftritt", "fuer viel Publikum"],
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=powerful%20high-visibility%20slot%20machine%20cabinet%2C%20bold%20black%20and%20gold%20design%2C%20dramatic%20lighting%2C%20photorealistic%20product%20photo&image_size=portrait_4_3",
    available: true,
  },
];

export function findMachineBySlug(slug?: string) {
  return slotMachines.find((machine) => machine.slug === slug);
}
