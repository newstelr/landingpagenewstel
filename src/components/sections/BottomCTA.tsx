
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const BottomCTA = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-pink-50 py-20 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto text-center">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="fill-yellow-500" size={20} />
            <Star className="fill-yellow-500" size={20} />
            <Star className="fill-yellow-500" size={20} />
            <Star className="fill-yellow-500" size={20} />
            <Star className="fill-yellow-500" size={20} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-navy animate-fade-up">Ready to Elevate Your Customer Service?</h2>
          
          <p className="text-gray-600 text-lg md:text-xl">
            Join hundreds of businesses that have transformed their customer support with our UK-based solutions.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-left text-gray-700 my-2">
            <div className="flex items-start gap-2">
              <div className="text-coral mt-1">✓</div>
              <div>96% customer satisfaction</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-coral mt-1">✓</div>
              <div>UK-based support team</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-coral mt-1">✓</div>
              <div>24/7 availability</div>
            </div>
          </div>
          
          <div className="mt-4">
            <Button
              className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              onClick={() => {
                const form = document.querySelector('form');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Transform Your Support Today <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          
          <div className="text-sm text-gray-500 italic mt-2">
            "Our customer response times improved by 45% within the first month." — Sarah J., Operations Director
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCTA;
