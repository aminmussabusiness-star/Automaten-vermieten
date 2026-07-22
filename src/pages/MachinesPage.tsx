import { motion } from "framer-motion";

import { MachinePreviewCard } from "@/components/MachinePreviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { slotMachines } from "@/data/siteContent";

export default function MachinesPage() {
  return (
    <div className="min-h-screen px-5 py-8 md:px-8 md:py-10">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0d0d0d] px-6 py-8 md:px-8 md:py-10">
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
            className="mt-10 grid grid-cols-4 gap-5"
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
