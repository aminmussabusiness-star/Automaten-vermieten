import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-amber-200/80 md:px-4 md:py-2 md:text-xs md:tracking-[0.38em]">
        {eyebrow}
      </span>
    </motion.div>
  );
}
