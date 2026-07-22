import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { PortalLayout } from "@/components/PortalLayout";
import BetriebskonzeptePage from "@/pages/BetriebskonzeptePage";
import ContactPage from "@/pages/ContactPage";
import ImpressumPage from "@/pages/ImpressumPage";
import MachineDetailPage from "@/pages/MachineDetailPage";
import MachinesPage from "@/pages/MachinesPage";
import SozialKonzeptePage from "@/pages/SozialKonzeptePage";
import VorratsgesellschaftenPage from "@/pages/VorratsgesellschaftenPage";
import OasisPage from "./pages/OasisPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortalLayout />}>
          <Route index element={<Navigate to="/automaten" replace />} />
          <Route path="automaten" element={<MachinesPage />} />
          <Route path="automaten/:machineId" element={<MachineDetailPage />} />
          <Route path="oasis" element={<OasisPage />} />
          <Route path="betriebskonzepte" element={<BetriebskonzeptePage />} />
          <Route path="sozial-konzepte" element={<SozialKonzeptePage />} />
          <Route path="vorratsgeselschaften" element={<VorratsgesellschaftenPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="impressum" element={<ImpressumPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/automaten" replace />} />
      </Routes>
    </Router>
  );
}
