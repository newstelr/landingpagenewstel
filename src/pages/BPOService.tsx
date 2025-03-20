
import { Navbar } from "@/components/ui/navbar";
import BPOHero from "@/components/sections/BPOHero";
import ContactForm from "@/components/sections/ContactForm";
import BPOFeatures from "@/components/sections/BPOFeatures";
import BPOServices from "@/components/sections/BPOServices";
import CTA from "@/components/sections/CTA";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/sections/Footer";
import { useState, useEffect } from "react";

const navigationLinks = [
  { text: "Contact", href: "/contact" },
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about-us" },
];

const BPOService = () => {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const interactionTimeout = setTimeout(() => {
      setHasInteracted(true);
    }, 5000);

    return () => {
      clearTimeout(interactionTimeout);
    };
  }, [hasInteracted]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar links={navigationLinks} />
      <BPOHero />
      <ContactForm />
      <BottomCTA />
      <BPOFeatures />
      <CTA />
      <BPOServices />
      <Footer />
    </div>
  );
};

export default BPOService;
