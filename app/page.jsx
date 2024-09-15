import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dispatching from "./components/Dispatching";
import TruckingInfo from "./components/TruckingInfo";
import Services from "./components/Services";
import Feature from "./components/Feature";
import Testominal from "./components/Testominal";
import QuoteSection from "./components/CTA";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Dispatching />
      <TruckingInfo />
      <Services />
      <Feature />
      <Testominal />
      <QuoteSection />
      <Footer />
    </>
  );
};

export default page;
