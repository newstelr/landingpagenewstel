
import { Navbar } from "@/components/ui/navbar";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/sections/ContactForm";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/sections/Footer";
import { useState, useEffect, useCallback } from "react";
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

  // Check if the popup has already been shown in this session
  useEffect(() => {
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setExitIntentShown(true);
    }
    
    // Mark user as having interacted after 5 seconds
    const interactionTimeout = setTimeout(() => {
      setHasInteracted(true);
    }, 5000);

    return () => {
      clearTimeout(interactionTimeout);
    };
  }, []);

  // Handle mouse movement to detect exit intent
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves to the top of the page (indicating user is leaving)
      if (
        e.clientY <= 5 && // User's mouse is near the top of the viewport
        hasInteracted && // User has been on the page for at least 5 seconds
        !exitIntentShown && // Popup hasn't been shown yet in this session
        !showExitPopup // Popup isn't currently showing
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

  // Close popup handler
  const handleClosePopup = useCallback(() => {
    setShowExitPopup(false);
  }, []);

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
      
      {showExitPopup && <ExitPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Index;
