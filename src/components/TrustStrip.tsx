import { motion } from "framer-motion";

import { trustItems } from "@/data/siteContent";

export function TrustStrip() {
  return (
    <section className="container py-6 md:py-10">
      <div className="grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-3 md:p-8">
        {trustItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-[24px] border border-white/6 bg-black/20 px-5 py-6"
          >
            <p className="font-display text-4xl text-amber-200">{item.value}</p>
            <p className="mt-3 text-sm leading-7 text-stone-300/78">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
