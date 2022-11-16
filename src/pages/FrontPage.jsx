import React from "react";
import Footer from "../components/FrontPage/Footer";
import Hero from "../components/FrontPage/Hero";
import Navbar from "../components/FrontPage/Navbar";
import Section1_CTA from "../components/FrontPage/Section1_CTA";
import Section2_Features from "../components/FrontPage/Section2_Features";
import Section3_Testimonial from "../components/FrontPage/Section3_Testimonial";
import Section4_Pricing from "../components/FrontPage/Section4_Pricing";
import Section5_Team from "../components/FrontPage/Section5_Team";
import Section6_CTA from "../components/FrontPage/Section6_CTA";
import SocialProof from "../components/FrontPage/SocialProof";


const FrontPage = () => {
  return (
    <div>
      <Navbar />
      <Hero  />
      <SocialProof />
      <Section1_CTA />
      <Section2_Features />
      <Section3_Testimonial />
      <Section4_Pricing />
      <Section5_Team />
      <Section6_CTA />
      <Footer />
    </div>
  );
};

export default FrontPage;
