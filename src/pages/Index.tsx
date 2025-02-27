
import { Navbar } from "@/components/ui/navbar";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/sections/ContactForm";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import SecondCTA from "@/components/sections/SecondCTA";
import Footer from "@/components/sections/Footer";

const navigationLinks = [
  { text: "Contact", href: "/contact" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar links={navigationLinks} />
      <Hero />
      <ContactForm />
      <Features />
      <SecondCTA />
      <CTA />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
