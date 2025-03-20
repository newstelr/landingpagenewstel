
import React from "react";
import { CheckCircle, Lock, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const FormHeader: React.FC = () => {
  return (
    <>
      <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-2 text-center animate-fade-up">
        Book Your Free BPO Consultation
      </h3>
      <p className="text-center text-gray-600 mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
        Our experts are ready to analyze your needs and provide solutions
      </p>

      <div className="flex justify-center space-x-4 mb-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
        <TrustIndicator icon={<CheckCircle className="h-4 w-4 mr-1" />} text="100% Free" />
        <TrustIndicator icon={<Lock className="h-4 w-4 mr-1" />} text="Secure Form" />
        <TrustIndicator icon={<Shield className="h-4 w-4 mr-1" />} text="Privacy Protected" />
      </div>
      
      <div className="flex justify-center items-center mb-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-600 font-medium mb-1">Member Of</p>
          <img 
            src="/lovable-uploads/e821845c-97a0-48f3-928b-285565b2cefe.png" 
            alt="UKCCF - UK Contact Centre Forum" 
            className="h-12 object-contain" 
          />
        </div>
      </div>
    </>
  );
};

interface TrustIndicatorProps {
  icon: React.ReactNode;
  text: string;
}

const TrustIndicator: React.FC<TrustIndicatorProps> = ({ icon, text }) => {
  return (
    <div className={cn(
      "flex items-center text-coral transition-transform duration-300 hover:scale-110"
    )}>
      {icon}
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default FormHeader;
