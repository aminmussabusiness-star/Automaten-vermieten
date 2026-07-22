import { NavLink } from "react-router-dom";

import { portalNavigationItems } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export function PortalSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-[168px] flex-col border-r border-white/10 bg-[#0b0b0b] px-4 py-5 md:w-[184px] md:px-5 md:py-6">
      <div className="flex flex-col items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-[10px] font-semibold tracking-[0.18em] text-amber-200 md:h-9 md:w-9">
          AV
        </span>
        <p className="font-display text-base leading-[0.95] text-stone-50 md:text-lg">
          Automaten
          <br />
          Vermietung
        </p>
      </div>

      <nav className="mt-7 w-full space-y-2.5">
        {portalNavigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex w-full items-center rounded-[18px] border px-3.5 py-3 text-left text-sm leading-[1.2] transition",
                isActive
                  ? "border-amber-300/30 bg-amber-300/12 text-amber-100"
                  : "border-transparent bg-white/[0.03] text-stone-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-stone-50",
              )
            }
          >
            <span className="block w-full">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
