import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section1_CTA from "./components/Section1_CTA";
import Section2_Features from "./components/Section2_Features";
import Section3_Testimonial from "./components/Section3_Testimonial";
import Section4_Pricing from "./components/Section4_Pricing";
import Section5_Team from "./components/Section5_Team";
import Section6_CTA from "./components/Section6_CTA";
import SocialProof from "./components/SocialProof";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import AppHome from './pages/AppHome';
import AppLogin from "./pages/AppLogin";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/app-home" element={<AppHome />} />
          <Route path="/app-login" element={<AppLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
