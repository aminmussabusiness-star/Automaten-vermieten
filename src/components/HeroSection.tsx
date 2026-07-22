import { motion } from "framer-motion";
import { ArrowDownRight, ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="start" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.25),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_22%)]" />
      <div className="container relative grid gap-12 pb-24 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-32 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/15 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.38em] text-amber-100/85">
            <Sparkles className="h-3.5 w-3.5" />
            Moderne Vermietung
          </span>

          <h1 className="mt-8 font-display text-5xl leading-[0.95] text-stone-50 md:text-7xl">
            Geldspielautomaten fuer Standorte, die professionell auftreten wollen.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300/80 md:text-lg">
            Praesentationsstarke Modelle, klare Auswahl und eine direkte Mietanfrage in wenigen
            Schritten. Ideal fuer Gastronomie, Events und gewerbliche Aufstellflaechen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#automaten"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/25 bg-amber-300 px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(245,158,11,0.34)]"
            >
              Automaten ansehen
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="#anfrage"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-4 text-sm font-semibold text-stone-50 transition hover:bg-white/10"
            >
              Direkt Mietanfrage senden
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              "Auswahl passender Modelle",
              "Persoenliche Betreuung",
              "Schnelle Kontaktaufnahme",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-stone-200/88"
              >
                <ShieldCheck className="mb-3 h-4 w-4 text-amber-200" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[40px] bg-amber-300/12 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-[#131313] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <img
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20slot%20machine%20showroom%20interior%2C%20premium%20casino%20machine%20for%20rental%2C%20dark%20elegant%20room%2C%20golden%20ambient%20lighting%2C%20photorealistic%20commercial%20photography&image_size=portrait_16_9"
              alt="Hochwertig praesentierter Geldspielautomat in stilvoller Umgebung"
              className="h-[520px] w-full rounded-[28px] object-cover"
            />
            <div className="absolute inset-x-10 bottom-10 rounded-[28px] border border-white/10 bg-black/45 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.34em] text-amber-200/80">
                Premium Praesentation
              </p>
              <p className="mt-3 font-display text-3xl text-stone-50">Bereit fuer Anfrage und Einsatz</p>
              <p className="mt-3 text-sm leading-7 text-stone-200/78">
                Vom ersten Eindruck bis zur Anfrage fuehrt die Website klar und hochwertig zum
                passenden Automaten.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
