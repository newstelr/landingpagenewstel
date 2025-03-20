
import { Navbar } from "@/components/ui/navbar";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/sections/ContactForm";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/sections/Footer";
import { useState, useEffect } from "react";
import { ExitPopup } from "@/components/ui/exit-popup";

const navigationLinks = [
  { text: "Contact", href: "/contact" },
  { text: "BPO Services", href: "/bpo-service" },
  { text: "About Us", href: "/about-us" },
];

const Index = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  
  const [hasInteracted, setHasInteracted] = useState(false);
  const [exitIntentShown, setExitIntentShown] = useState(false);

  useEffect(() => {
    const interactionTimeout = setTimeout(() => {
      setHasInteracted(true);
    }, 5000);

    return () => {
      clearTimeout(interactionTimeout);
    };
  }, [hasInteracted, exitIntentShown]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar links={navigationLinks} />
      <Hero />
      <ContactForm />
      <BottomCTA />
      <Features />
      <CTA />
      <Services />
      <Footer />
      
      {/* Exit popup is disabled by never showing it */}
      {/* {showExitPopup && <ExitPopup onClose={() => setShowExitPopup(false)} />} */}
    </div>
  );
};

export default Index;
