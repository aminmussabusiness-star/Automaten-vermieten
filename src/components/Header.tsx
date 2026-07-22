import { Menu, PhoneCall } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/siteContent";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/75 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <a href="#start" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/35 bg-amber-300/10 text-sm font-semibold tracking-[0.3em] text-amber-200">
            AV
          </span>
          <div>
            <p className="font-display text-lg text-stone-100">Automaten Vermietung</p>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Geldspielautomaten</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-300 transition hover:text-stone-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+491701234567"
            className="text-sm text-stone-300 transition hover:text-stone-50"
          >
            +49 170 1234567
          </a>
          <a
            href="#anfrage"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/95 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(245,158,11,0.28)]"
          >
            <PhoneCall className="h-4 w-4" />
            Mietanfrage
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Navigation umschalten"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-stone-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="container flex flex-col gap-2 py-4">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl bg-white/4 px-4 py-3 text-sm text-stone-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#anfrage"
            className="mt-2 rounded-2xl bg-amber-300 px-4 py-3 text-center text-sm font-semibold text-neutral-950"
            onClick={() => setOpen(false)}
          >
            Jetzt anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
