
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

interface ExitPopupProps {
  onClose: () => void;
}

export const ExitPopup = ({ onClose }: ExitPopupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        email: email,
        message: "Customer requested the call center selection guide via exit popup",
        source: "Exit Popup Form",
      };

      // Send email using EmailJS
      await emailjs.send(
        "service_6z4q337", // Replace with your EmailJS service ID
        "template_hc5ierc", // Replace with your EmailJS template ID
        templateParams,
        "NbJTBJpbXZRiSPBw-" // Replace with your EmailJS public key
      );
      
      // Google Ads conversion tracking: subscription confirmation
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag('event', 'conversion', {'send_to': 'AW-764344211/A9A5CPnFsPUBEJPvu-wC'});
      }

      toast({
        title: "Thank you!",
        description: "Your guide on choosing the right call center service will be sent to your email!",
      });
      setIsSubmitting(false);
      onClose();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden">
        <div className="absolute top-3 right-3">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="mb-4 bg-coral/10 text-coral font-semibold px-3 py-1 rounded-full text-sm inline-block">
            Free Resource
          </div>
          
          <h3 className="text-2xl font-bold text-navy mb-2">
            Wait! Don't Miss Out!
          </h3>
          
          <p className="text-gray-600 mb-6">
            Leave your email and we'll send you our <span className="font-bold text-coral">comprehensive guide</span> on how to choose the right call center service for your business.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-coral/50 focus:ring-coral/30"
              required
            />
            
            <Button
              type="submit"
              className="w-full bg-coral hover:bg-coral-dark text-white py-3 rounded-lg font-semibold transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Get My Free Guide"}
            </Button>
          </form>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            By subscribing, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </div>
  );
};

