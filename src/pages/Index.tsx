
import { Navbar } from "@/components/ui/navbar";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/sections/ContactForm";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const navigationLinks = [
  { text: "Why Choose Us?", href: "/why-choose-us" },
  { text: "Our Services", href: "/services" },
  { text: "Technology", href: "/technology" },
  { text: "About Us", href: "/about" },
  { text: "Case Studies", href: "/case-studies" },
  { text: "Newstel Insights", href: "/insights" },
  { text: "Contact", href: "/contact" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar links={navigationLinks} />
      <Hero />
      <ContactForm />
      <Features />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
