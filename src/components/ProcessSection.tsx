import { motion } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/siteContent";

export function ProcessSection() {
  return (
    <section id="ablauf" className="container py-24">
      <SectionHeading
        eyebrow="Ablauf"
        title="Von der Auswahl bis zur Rueckmeldung klar gefuehrt."
        description="Die Seite fuehrt Interessenten ohne Umwege durch den Anfrageprozess und reduziert Rueckfragen schon vor dem ersten Kontakt."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 font-display text-xl text-amber-200">
              0{index + 1}
            </span>
            <h3 className="mt-7 font-display text-3xl text-stone-50">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-300/78">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
