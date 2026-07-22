import { Outlet } from "react-router-dom";

import { PortalSidebar } from "@/components/PortalSidebar";

export function PortalLayout() {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <PortalSidebar />
      <div className="pl-[168px] md:pl-[184px]">
        <main className="min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
