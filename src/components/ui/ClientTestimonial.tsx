
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
    <div className="rounded-lg bg-navy/95 text-white px-6 py-7 sm:py-8 sm:px-10 shadow-xl mb-8 text-center flex flex-col items-center justify-center animate-fade-in">
      <img
        src={companyLogoSrc}
        alt={company + " logo"}
        className="h-12 w-auto mb-4 object-contain filter brightness-150 contrast-125"
      />
      <blockquote className="italic text-base sm:text-lg leading-relaxed mb-4 max-w-prose">&ldquo;{quote}&rdquo;</blockquote>
      <div className="font-semibold">
        {author}, <span className="opacity-80">{company}</span>
      </div>
    </div>
  );
};

export default ClientTestimonial;
