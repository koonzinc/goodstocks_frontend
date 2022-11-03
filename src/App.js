import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section1_CTA from "./components/Section1_CTA";
import Section2_Features from "./components/Section2_Features";
import SocialProof from "./components/SocialProof";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SocialProof />
      <Section1_CTA />
      <Section2_Features />
    </div>
  );
}

export default App;
