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
// import Articles from "./pages/Articles.tsx";
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="petroleum-delivery" element={<PetroleumPage />} />
            <Route path="community" element={<Community />} />
            <Route path="waste-disposal" element={<WastePage />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="bill-payments" element={<BillPayment />} />
            <Route path="careers" element={<Careers />} />
            <Route path="fleet-delivery" element={<FleetPage />} />
            <Route path="partnership" element={<PartnerShipPage />} />
            <Route path="emergency-services" element={<RescuePage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            {/* <Route path="blog:id" element={<Articles />} /> */}
           </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
