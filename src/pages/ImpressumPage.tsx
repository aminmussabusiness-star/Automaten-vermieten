import { SectionHeading } from "@/components/SectionHeading";
import { legalContent } from "@/data/siteContent";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen px-5 py-8 md:px-8 md:py-10">
      <div className="rounded-[36px] border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
        <SectionHeading
          eyebrow="Impressum"
          title="Rechtliche Angaben in klarer, ruhiger Darstellung."
          description="Die Inhalte unten sind aktuell als Platzhalter angelegt und muessen vor dem Livegang mit deinen echten Unternehmensdaten ersetzt werden."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {legalContent.map((section) => (
            <section
              key={section.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="font-display text-3xl text-stone-50">{section.title}</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-stone-300/78">
                {section.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
