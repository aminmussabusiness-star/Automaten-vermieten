import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { faqItems } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="container py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Hauefige Fragen bereits vor der Kontaktaufnahme beantwortet."
        description="So versteht der Interessent sofort, wie Auswahl, Einsatzorte und Mietanfrage funktionieren."
      />

      <div className="mt-10 space-y-4">
        {faqItems.map((item, index) => {
          const open = index === openIndex;

          return (
            <article
              key={item.question}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span className="font-medium text-stone-100">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-amber-200 transition-transform",
                    open && "rotate-180",
                  )}
                />
              </button>
              {open && (
                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-stone-300/78">
                  {item.answer}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
