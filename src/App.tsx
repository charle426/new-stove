import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Homepage } from './pages/homepage'
import { Layout } from './pages/layout'
import Community from './pages/communitypage'
import { ThemeProvider } from "./components/ui/theme-provider";
import "./App.css"
import PetroleumPage from './pages/petroleumPage'
import WastePage from "./pages/wastePage"
import Shipping from "./pages/shipping"
import BillPayment from "./pages/billPayment";
import Careers from "./pages/Careers.tsx"
import FleetPage from "./pages/fleet.tsx"
import PartnerShipPage from "./pages/partnershipPage.tsx"
import RescuePage from "./pages/RescuePage.tsx"
import AboutPage from "./pages/about.tsx"
import BlogPage from "./pages/blogPage.tsx";
import Articles from "./pages/Articles.tsx";
import { useState } from "react";
import Admin from "./pages/admin.tsx";
import AdminLogin from "./pages/adminLogin.tsx";
import Edit from "./pages/Edit.tsx";
function App() {
   const [adminAuth, setAdminAuth] = useState<boolean | null>(false);
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="refill" element={<PetroleumPage />} />
            <Route path="community" element={<Community />} />
            <Route path="waste-disposal" element={<WastePage />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="bill-payments" element={<BillPayment />} />
            <Route path="careers" element={<Careers />} />
            <Route path="fleet-delivery" element={<FleetPage />} />
            <Route path="business" element={<PartnerShipPage />} />
            <Route path="emergency-services" element={<RescuePage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<Articles />} />
            <Route
              path="blog/stove/admin/234813649"
              element={<Admin adminAuth={adminAuth} />}
            />
            <Route
              path="blog/admin/edit/:id"
              element={<Edit />}
            />
            <Route
              path="blog/admin/login"
              element={<AdminLogin setAdminAuth={setAdminAuth} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
