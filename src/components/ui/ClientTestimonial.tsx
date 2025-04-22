
import React from "react";

interface ClientTestimonialProps {
  quote: string;
  author: string;
  company: string;
  companyLogoSrc: string;
}

const ClientTestimonial: React.FC<ClientTestimonialProps> = ({
  quote,
  author,
  company,
  companyLogoSrc,
}) => {
  return (
    <div className="rounded-lg bg-navy/95 text-white px-6 py-7 sm:py-8 sm:px-10 shadow-xl mb-8 text-left flex flex-col items-start animate-fade-in">
      <img
        src={companyLogoSrc}
        alt={company + " logo"}
        className="h-9 w-auto mb-3"
      />
      <blockquote className="italic text-base sm:text-lg leading-relaxed mb-3">&ldquo;{quote}&rdquo;</blockquote>
      <div className="font-semibold">
        {author}, <span className="opacity-80">{company}</span>
      </div>
    </div>
  );
};

export default ClientTestimonial;
