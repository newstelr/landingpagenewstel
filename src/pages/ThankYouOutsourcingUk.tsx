
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-navy mb-4">Thank You!</h1>
        
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
        
        <Link to="/">
          <Button className="bg-coral hover:bg-coral-dark text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-300">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
