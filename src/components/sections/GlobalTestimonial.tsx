
import React from "react";
import ClientTestimonial from "@/components/ui/ClientTestimonial";

const testimonial = {
  quote:
    "The flexibility and quality of service we've received has been exceptional. Our customers can't tell the difference between our in-house and outsourced support.",
  author: "Emma Williams, Customer Experience Director",
  company: "Bloom & Wild",
  // Use the most color-contrasted logo (white variant if available in uploads):
  companyLogoSrc: "/lovable-uploads/5d049496-23f8-40a1-ad60-a3502c8625fe.png"
};

const GlobalTestimonial = () => (
  <div className="flex justify-center items-center bg-navy py-16">
    <div className="max-w-2xl w-full px-4">
      <ClientTestimonial
        quote={testimonial.quote}
        author={testimonial.author}
        company={testimonial.company}
        companyLogoSrc={testimonial.companyLogoSrc}
      />
    </div>
  </div>
);

export default GlobalTestimonial;
