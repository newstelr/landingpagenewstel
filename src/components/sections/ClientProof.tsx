
import React from "react";
import ClientTestimonial from "@/components/ui/ClientTestimonial";
import LogoGrid from "@/components/ui/LogoGrid";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Newstel's customer service team has been a game-changer for our business. They've helped us scale our support operations while keeping costs manageable.",
    author: "David Chen, Operations Manager",
    company: "Bloom & Wild",
    companyLogoSrc: "/lovable-uploads/e821845c-97a0-48f3-928b-285565b2cefe.png"
  },
  {
    quote: "The flexibility and quality of service we've received has been exceptional. Our customers can't tell the difference between our in-house and outsourced support.",
    author: "Emma Williams, Customer Experience Director",
    company: "Dice",
    companyLogoSrc: "/lovable-uploads/5d049496-23f8-40a1-ad60-a3502c8625fe.png"
  }
];

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
  }
];

interface ClientProofProps {
  className?: string;
}

const ClientProof: React.FC<ClientProofProps> = ({ className }) => {
  return (
    <div className={cn("py-16 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            See why hundreds of businesses rely on our customer service solutions.
          </p>
        </div>
        
        {/* Client Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <ClientTestimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              companyLogoSrc={testimonial.companyLogoSrc}
            />
          ))}
        </div>
        
        {/* Logo Grid */}
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-6 font-semibold uppercase tracking-wider">
            Our Clients
          </div>
          <LogoGrid logos={clientLogos} columns={6} />
        </div>
      </div>
    </div>
  );
};

export default ClientProof;
