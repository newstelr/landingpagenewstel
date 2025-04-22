import { Navbar } from "@/components/ui/navbar";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/sections/ContactForm";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import ClientProof from "@/components/sections/ClientProof";
import CTA from "@/components/sections/CTA";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/sections/Footer";
import { useState, useEffect, useCallback } from "react";
import { ExitPopup } from "@/components/ui/exit-popup";
import GlobalTestimonial from "@/components/sections/GlobalTestimonial";

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
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setExitIntentShown(true);
    }
    
    const interactionTimeout = setTimeout(() => {
      setHasInteracted(true);
    }, 5000);

    return () => {
      clearTimeout(interactionTimeout);
    };
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 5 &&
        hasInteracted &&
        !exitIntentShown &&
        !showExitPopup
      ) {
        setShowExitPopup(true);
        setExitIntentShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasInteracted, exitIntentShown, showExitPopup]);

  const handleClosePopup = useCallback(() => {
    setShowExitPopup(false);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar links={navigationLinks} />
      <Hero />
      <ContactForm />
      <ClientProof />
      <Features />
      <Services />
      <CTA />
      <BottomCTA />
      <GlobalTestimonial />
      <Footer />
      
      {showExitPopup && <ExitPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Index;
