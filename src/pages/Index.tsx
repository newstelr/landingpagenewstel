
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
];

const Index = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [exitIntentShown, setExitIntentShown] = useState(false);

  // Function to check if the user is on a mobile device
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if the mouse is leaving through the top of the page
      // and we haven't shown the exit intent popup yet
      if (e.clientY <= 0 && !exitIntentShown && hasInteracted && !isMobileDevice()) {
        setShowExitPopup(true);
        setExitIntentShown(true);
      }
    };

    // For mobile, we'll show the popup after a certain time
    let timeout: NodeJS.Timeout;
    if (isMobileDevice() && hasInteracted && !exitIntentShown) {
      timeout = setTimeout(() => {
        setShowExitPopup(true);
        setExitIntentShown(true);
      }, 30000); // 30 seconds
    }

    // Mark that the user has interacted after 5 seconds on the page
    const interactionTimeout = setTimeout(() => {
      setHasInteracted(true);
    }, 5000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeout);
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
      
      {showExitPopup && <ExitPopup onClose={() => setShowExitPopup(false)} />}
    </div>
  );
};

export default Index;
