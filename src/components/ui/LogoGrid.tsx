
import React from "react";

interface Logo {
  name: string;
  imageSrc: string;
  alt: string;
}

interface LogoGridProps {
  logos: Logo[];
  columns?: number; // Number of columns on desktop
  className?: string;
}

const LogoGrid: React.FC<LogoGridProps> = ({ logos, columns = 4, className = "" }) => {
  return (
    <div
      className={`w-full mx-auto grid gap-4 
        grid-cols-2 sm:grid-cols-3 ${columns === 4 ? "md:grid-cols-4" : "md:grid-cols-" + columns} 
        items-center justify-items-center ${className}
      `}
      style={{ maxWidth: columns > 4 ? 960 : 600 }}
    >
      {logos.map((logo) => (
        <div key={logo.name} className="flex items-center justify-center p-2">
          <img
            src={logo.imageSrc}
            alt={logo.alt}
            className="max-h-10 w-auto opacity-80 grayscale hover:grayscale-0 transition duration-200 ease-in-out"
            loading="lazy"
            style={{ maxWidth: 120 }}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
