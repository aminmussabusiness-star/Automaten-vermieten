import { CheckCircle2, Circle, Zap } from "lucide-react";

import type { SlotMachine } from "@/data/siteContent";
import { cn } from "@/lib/utils";

interface MachineCardProps {
  machine: SlotMachine;
  selected: boolean;
  onToggle: (machineId: string) => void;
}

export function MachineCard({ machine, selected, onToggle }: MachineCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[32px] border bg-[#101010] transition duration-300",
        selected
          ? "border-amber-300/40 shadow-[0_24px_60px_rgba(245,158,11,0.14)]"
          : "border-white/10 hover:border-white/20",
      )}
    >
      <div className="relative overflow-hidden">
        <img
          src={machine.image}
          alt={machine.name}
          className="h-80 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/10 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-3">
          <span className="rounded-full border border-white/12 bg-black/45 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-stone-100">
            {machine.category}
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.28em]",
              machine.available
                ? "bg-emerald-500/15 text-emerald-200"
                : "bg-white/10 text-stone-300",
            )}
          >
            {machine.available ? "anfragbar" : "derzeit vorgemerkt"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl text-stone-50">{machine.name}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-300/78">{machine.tagline}</p>
          </div>
          <span className="rounded-full border border-amber-300/15 bg-amber-300/8 px-3 py-2 text-xs font-semibold text-amber-200">
            {machine.monthlyPriceFrom}
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-stone-300/78">{machine.description}</p>
        <p className="mt-5 text-sm text-stone-100">
          Ideal fuer: <span className="text-stone-300/84">{machine.idealFor}</span>
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {machine.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-2 text-xs text-stone-200/82"
            >
              <Zap className="h-3.5 w-3.5 text-amber-200" />
              {feature}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onToggle(machine.id)}
          className={cn(
            "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-semibold transition",
            selected
              ? "bg-amber-300 text-neutral-950 hover:bg-amber-200"
              : "border border-white/12 bg-white/6 text-stone-50 hover:bg-white/10",
          )}
        >
          {selected ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
          {selected ? "Ausgewaehlt" : "Zur Anfrage hinzufuegen"}
        </button>
      </div>
    </article>
  );
}
