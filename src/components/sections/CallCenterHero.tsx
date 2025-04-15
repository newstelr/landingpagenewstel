
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

const CallCenterHero = () => {
  return (
    <div className="bg-navy">
      <div className="container mx-auto px-4 pt-24 pb-64">
        <div className="flex items-center justify-center mb-6">
          <Headphones className="w-16 h-16 text-coral" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-fade-up opacity-0 [--delay:200ms]">
          Transform Your Customer Support with Our Outsourced Call Center Solutions
        </h1>
        <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl mx-auto animate-fade-up opacity-0 [--delay:400ms]">
          Enhance your customer experience while reducing costs by up to 60%. Our dedicated call center teams provide 24/7 multilingual support across all channels.
        </p>
        <div className="mt-8 flex justify-center animate-fade-up opacity-0 [--delay:600ms]">
          <Button
            className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300"
            onClick={() => {
              const form = document.querySelector('form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Your Free Call Center Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallCenterHero;
