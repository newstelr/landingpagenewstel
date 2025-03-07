
import React from "react";
import { CheckCircle, Lock, Shield } from "lucide-react";

const FormHeader: React.FC = () => {
  return (
    <>
      <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-2 text-center">
        Get Your Free Consultation
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Our experts are ready to analyze your needs and provide solutions
      </p>

      <div className="flex justify-center space-x-4 mb-6">
        <div className="flex items-center text-coral">
          <CheckCircle className="h-4 w-4 mr-1" />
          <span className="text-xs">100% Free</span>
        </div>
        <div className="flex items-center text-coral">
          <Lock className="h-4 w-4 mr-1" />
          <span className="text-xs">Secure Form</span>
        </div>
        <div className="flex items-center text-coral">
          <Shield className="h-4 w-4 mr-1" />
          <span className="text-xs">Privacy Protected</span>
        </div>
      </div>
    </>
  );
};

export default FormHeader;
