import { Navbar } from "@/components/ui/navbar";
import CallCenterHero from "@/components/sections/CallCenterHero";
import ContactForm from "@/components/sections/ContactForm";
import CallCenterFeatures from "@/components/sections/CallCenterFeatures";
import CallCenterServices from "@/components/sections/CallCenterServices";
import CTA from "@/components/sections/CTA";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/sections/Footer";
import GlobalTestimonial from "@/components/sections/GlobalTestimonial";
import { useState, useEffect } from "react";

const navigationLinks = [
  { text: "Contact", href: "/contact" },
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about-us" },
];

const CallCenter = () => {
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
      <CallCenterHero />
      <ContactForm />
      <BottomCTA />
      <CallCenterFeatures />
      <CTA />
      <CallCenterServices />
      <GlobalTestimonial />
      <Footer />
    </div>
  );
};

export default CallCenter;
