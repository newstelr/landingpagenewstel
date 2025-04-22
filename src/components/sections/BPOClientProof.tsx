
import React from "react";
import ClientTestimonial from "@/components/ui/ClientTestimonial";
import LogoGrid from "@/components/ui/LogoGrid";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Newstel have consistently exceeded our expectations in service and flexibility. We trust them as a core partner for OnBuy's world-class customer experience.",
    author: "Mark Lister, CCO",
    company: "OnBuy.com",
    companyLogoSrc: "/lovable-uploads/7f08cf46-feea-4821-a3b7-60755226e117.png"
  },
  {
    quote: "Working with their BPO team has transformed our customer support operations. We've seen a 35% reduction in costs while improving our customer satisfaction scores.",
    author: "Sarah Johnson, CTO",
    company: "Urban Outfitters",
    companyLogoSrc: "/lovable-uploads/fb33121b-3ddb-4866-b0f5-5f6dbbefdcbf.png"
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

interface BPOClientProofProps {
  className?: string;
}

const BPOClientProof: React.FC<BPOClientProofProps> = ({ className }) => {
  return (
    <div className={cn("py-16 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Trusted by Leading Global Brands
          </h2>
          <p className="text-lg text-gray-600">
            Join hundreds of businesses that trust our BPO services to deliver exceptional results.
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

export default BPOClientProof;
