
import React from "react";
import { Lock } from "lucide-react";

const FormFooter: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
        <Lock className="h-3 w-3 mr-1 text-coral" />
        <p>
          Your information is secure and will never be shared with third parties.
          By submitting, you agree to our{" "}
          <a href="/privacy-policy" className="text-coral hover:underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      <div className="mt-4 bg-coral/5 p-3 rounded-lg border border-coral/10 text-xs text-gray-600">
        <p className="font-medium text-coral mb-1">What happens next?</p>
        <ol className="list-decimal list-inside space-y-1 pl-1">
          <li>Our consultant will contact you within 24 hours</li>
          <li>Brief discussion about your business needs</li>
          <li>Custom proposal with pricing and solutions</li>
        </ol>
      </div>
    </>
  );
};

export default FormFooter;
