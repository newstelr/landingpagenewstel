
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface ExitPopupProps {
  onClose: () => void;
}

export const ExitPopup = ({ onClose }: ExitPopupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Here you would typically send the email to your backend or email service
    // For demo purposes, we'll just simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description: "Your exclusive discount will be sent to your email!",
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
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
            Special Offer
          </div>
          
          <h3 className="text-2xl font-bold text-navy mb-2">
            Wait! Don't Miss Out!
          </h3>
          
          <p className="text-gray-600 mb-6">
            Subscribe now and get <span className="font-bold text-coral">10% OFF</span> your first month of UK-based customer service.
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
              {isSubmitting ? "Sending..." : "Get My 10% Discount"}
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
