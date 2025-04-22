import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import LogoGrid from "@/components/ui/LogoGrid";
import ClientTestimonial from "@/components/ui/ClientTestimonial";
import GlobalTestimonial from "@/components/sections/GlobalTestimonial";

const thankYouTestimonial = {
  quote: "Newstel have consistently exceeded our expectations in service and flexibility. We trust them as a core partner for OnBuy’s world-class customer experience.",
  author: "Mark Lister, CCO",
  company: "OnBuy.com",
  companyLogoSrc: "/lovable-uploads/7f08cf46-feea-4821-a3b7-60755226e117.png"
};

const clientLogos = [
  {
    name: "Anthropologie",
    imageSrc: "/lovable-uploads/b5b646f6-ef6f-4675-9e14-99d36e4d7b84.png",
    alt: "Anthropologie logo"
  },
  {
    name: "OnBuy",
    imageSrc: "/lovable-uploads/7f08cf46-feea-4821-a3b7-60755226e117.png",
    alt: "OnBuy logo"
  },
  {
    name: "Urban Outfitters",
    imageSrc: "/lovable-uploads/fb33121b-3ddb-4866-b0f5-5f6dbbefdcbf.png",
    alt: "Urban Outfitters logo"
  },
  {
    name: "NordicTrack",
    imageSrc: "/lovable-uploads/b6c78906-c711-4072-9d1a-d2d8d1ca250b.png",
    alt: "NordicTrack logo"
  },
  {
    name: "Wolfson Brands",
    imageSrc: "/lovable-uploads/710d0894-444f-4c58-bfb1-5727dab1b5bb.png",
    alt: "Wolfson Brands logo"
  },
  {
    name: "Learnerbly",
    imageSrc: "/lovable-uploads/b27a32cc-baf2-46b4-9e42-fc730987acd1.png",
    alt: "Learnerbly logo"
  },
  {
    name: "FanFuel",
    imageSrc: "/lovable-uploads/65d0c072-b5e5-4fb0-b73a-ce424ae9b099.png",
    alt: "FanFuel logo"
  },
  {
    name: "Bloom & Wild",
    imageSrc: "/lovable-uploads/e821845c-97a0-48f3-928b-285565b2cefe.png",
    alt: "Bloom & Wild logo"
  },
  {
    name: "Dice",
    imageSrc: "/lovable-uploads/5d049496-23f8-40a1-ad60-a3502c8625fe.png",
    alt: "Dice logo"
  },
  {
    name: "Punkt",
    imageSrc: "/lovable-uploads/ac351c4a-1998-410f-b459-7000031fc568.png",
    alt: "Punkt logo"
  }
];

const ThankYou = () => {
  useEffect(() => {
    // Google Ads conversion tracking on Thank You page
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-764344211/A9A5CPnFsPUBEJPvu-wC'});
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 px-4">
      <div className="max-w-md sm:max-w-2xl w-full bg-white rounded-xl shadow-2xl p-8 sm:p-12 text-center relative">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Thank You!</h1>

        <p className="text-gray-600 mb-6">
          We've received your request for a free consultation. One of our customer service experts will be in touch with you shortly.
          A confirmation email has been sent to your inbox.
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-navy mb-2">What happens next?</h3>
          <ul className="text-gray-600 list-disc pl-5 space-y-1">
            <li>We'll review your inquiry within 24 hours</li>
            <li>A specialist will prepare a personalized consultation</li>
            <li>We'll schedule a call at a time that suits you</li>
          </ul>
        </div>

        <section className="w-full mb-7">
          <h2 className="font-semibold text-md uppercase tracking-wider text-coral mb-3">Trusted by Global Brands</h2>
          <ClientTestimonial {...thankYouTestimonial} />
        </section>

        <section className="w-full mb-7">
          <div className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider text-center">
            Our Clients
          </div>
          <LogoGrid logos={clientLogos} columns={5} className="justify-center" />
        </section>

        <Link to="/">
          <Button className="bg-coral hover:bg-coral-dark text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-300">
            Return to Homepage
          </Button>
        </Link>

        <div className="mt-10">
          <GlobalTestimonial />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
