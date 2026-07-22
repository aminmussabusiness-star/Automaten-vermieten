import { Award, Gauge, Headset, MapPinned } from "lucide-react";

import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InquirySection } from "@/components/InquirySection";
import { MachineCatalog } from "@/components/MachineCatalog";
import { ProcessSection } from "@/components/ProcessSection";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustStrip } from "@/components/TrustStrip";

const serviceHighlights = [
  {
    title: "Persoenliche Beratung",
    description:
      "Nicht irgendein Automat, sondern das Modell, das zu Platz, Publikum und Anspruch passt.",
    icon: Headset,
  },
  {
    title: "Starke Praesentation",
    description:
      "Die Seite verkauft nicht ueber Textwuesten, sondern ueber klare Auswahl und hochwertige Wirkung.",
    icon: Award,
  },
  {
    title: "Fuer unterschiedliche Standorte",
    description:
      "Von kompakter Gastroflaeche bis Eventeinsatz laesst sich das Angebot passend aufbauen.",
    icon: MapPinned,
  },
  {
    title: "Schnelle Entscheidungswege",
    description:
      "Interessenten markieren Favoriten und senden ohne Umwege eine strukturierte Mietanfrage.",
    icon: Gauge,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />

        <section className="container py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Warum diese Seite"
              title="Gebaut fuer Vertrauen, Auswahl und klare Anfragen."
              description="Die Gestaltung kombiniert eine ruhige Premium-Anmutung mit direkter Conversion-Fuehrung. So wirkt das Angebot hochwertig und bleibt gleichzeitig leicht benutzbar."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {serviceHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-200">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl text-stone-50">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300/78">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <MachineCatalog />
        <ProcessSection />
        <FaqSection />
        <InquirySection />
      </main>
      <Footer />
    </div>
  );
}
