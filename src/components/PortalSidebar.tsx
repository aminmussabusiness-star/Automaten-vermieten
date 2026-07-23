import { NavLink } from "react-router-dom";

import { portalNavigationItems } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export function PortalSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-[112px] flex-col border-r border-white/10 bg-[#0b0b0b] px-2.5 py-4 md:w-[184px] md:px-5 md:py-6">
      <div className="flex flex-col items-start gap-2 md:gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-[9px] font-semibold tracking-[0.18em] text-amber-200 md:h-9 md:w-9 md:text-[10px]">
          AV
        </span>
        <p className="font-display text-sm leading-[0.95] text-stone-50 md:text-lg">
          Automaten
          <br />
          Vermietung
        </p>
      </div>

      <nav className="mt-5 w-full space-y-2 md:mt-7 md:space-y-2.5">
        {portalNavigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex w-full items-center rounded-[16px] border px-2.5 py-2.5 text-left text-[11px] leading-[1.15] transition md:rounded-[18px] md:px-3.5 md:py-3 md:text-sm md:leading-[1.2]",
                isActive
                  ? "border-amber-300/30 bg-amber-300/12 text-amber-100"
                  : "border-transparent bg-white/[0.03] text-stone-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-stone-50",
              )
            }
          >
            <span className="block w-full md:hidden">{item.shortLabel}</span>
            <span className="hidden w-full md:block">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
