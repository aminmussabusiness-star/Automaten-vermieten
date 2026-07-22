import { useMemo, useState } from "react";

import { MachineCard } from "@/components/MachineCard";
import { SectionHeading } from "@/components/SectionHeading";
import { slotMachines, type MachineCategory } from "@/data/siteContent";
import { useSelectionStore } from "@/store/useSelectionStore";

const filters: Array<MachineCategory | "Alle"> = [
  "Alle",
  "Premium",
  "Kompakt",
  "Event",
  "Umsatzstark",
];

export function MachineCatalog() {
  const [activeFilter, setActiveFilter] = useState<MachineCategory | "Alle">("Alle");
  const { selectedIds, toggleMachine } = useSelectionStore();

  const filteredMachines = useMemo(() => {
    if (activeFilter === "Alle") {
      return slotMachines;
    }

    return slotMachines.filter((machine) => machine.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="automaten" className="container py-24">
      <SectionHeading
        eyebrow="Automaten Auswahl"
        title="Waehle die Modelle, die zu deinem Standort passen."
        description="Jeder Automat ist fuer einen anderen Einsatzzweck gedacht. Die Auswahl kann direkt markiert und in die Mietanfrage uebernommen werden."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full px-5 py-3 text-sm font-medium transition ${
              activeFilter === filter
                ? "bg-amber-300 text-neutral-950"
                : "border border-white/10 bg-white/5 text-stone-200 hover:bg-white/10"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 rounded-[28px] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-stone-300/78">
        <span className="font-semibold text-stone-100">
          {selectedIds.length > 0 ? `${selectedIds.length} Modell(e) vorgemerkt` : "Noch keine Auswahl"}
        </span>
        <span>Markiere mehrere Automaten und sende danach nur eine Anfrage.</span>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {filteredMachines.map((machine) => (
          <MachineCard
            key={machine.id}
            machine={machine}
            selected={selectedIds.includes(machine.id)}
            onToggle={toggleMachine}
          />
        ))}
      </div>
    </section>
  );
}
