import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import LogoGrid from "./LogoGrid";

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
      const templateParams = {
        email: email,
        message: "Customer requested the call center selection guide via exit popup",
        source: "Exit Popup Form",
      };

      await emailjs.send(
        "service_6z4q337",
        "template_hc5ierc",
        templateParams,
        "NbJTBJpbXZRiSPBw-"
      );

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

  const logos = [
    {
      name: "OnBuy",
      imageSrc: "/lovable-uploads/7f08cf46-feea-4821-a3b7-60755226e117.png",
      alt: "OnBuy logo"
    },
    {
      name: "Anthropologie",
      imageSrc: "/lovable-uploads/b5b646f6-ef6f-4675-9e14-99d36e4d7b84.png",
      alt: "Anthropologie logo"
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
    }
  ];

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
          
          <p className="text-gray-600 mb-2">
            Leave your email and we'll send you our <span className="font-bold text-coral">comprehensive guide</span> on how to choose the right call center service for your business.
          </p>
          <p className="text-xs text-navy/80 font-semibold mb-4">
            Join industry leaders like OnBuy and Urban Outfitters.
          </p>
          
          <div className="mb-5">
            <div className="mb-2 text-xs font-medium tracking-wide text-center text-gray-500 uppercase">
              Trusted by Leading Brands
            </div>
            <LogoGrid logos={logos} columns={4} className="mb-0" />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
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
