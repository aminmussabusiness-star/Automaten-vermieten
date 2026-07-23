import { motion } from "framer-motion";

import { MachinePreviewCard } from "@/components/MachinePreviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { slotMachines } from "@/data/siteContent";

export default function MachinesPage() {
  return (
    <div className="min-h-screen px-2 pb-20 pt-4 md:px-8 md:py-10">
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0d0d] px-3 pb-12 pt-4 md:rounded-[36px] md:px-8 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.2),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
        <div className="relative">
          <SectionHeading
            eyebrow="Automaten mieten"
            title="Alle Automaten nebeneinander, damit du direkt vergleichen kannst."
            description="Waehlst du ein Modell aus, gelangst du auf eine eigene Detailseite mit allen wichtigen Informationen und direkter Kontaktmoeglichkeit."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="mt-5 grid grid-cols-2 gap-2.5 pb-2 sm:gap-4 md:mt-10 md:grid-cols-4 md:gap-5 md:pb-0"
          >
            {slotMachines.map((machine) => (
              <MachinePreviewCard key={machine.id} machine={machine} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
