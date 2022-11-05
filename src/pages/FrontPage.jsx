import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section1_CTA from "../components/Section1_CTA";
import Section2_Features from '../components/Section2_Features';
import Section3_Testimonial from "../components/Section3_Testimonial";
import Section4_Pricing from "../components/Section4_Pricing";
import Section5_Team from "../components/Section5_Team";
import Section6_CTA from "../components/Section6_CTA";
import SocialProof from "../components/SocialProof";

const FrontPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
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
