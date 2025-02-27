
import { Button } from "@/components/ui/button";

const BottomCTA = () => {
  return (
    <div className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Ready to Elevate Your Customer Service?</h2>
          <p className="text-gray-600 text-lg">
            Join hundreds of businesses that have transformed their customer support with our UK-based solutions.
          </p>
          <Button
            className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300"
            onClick={() => {
              const form = document.querySelector('form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Your Free Consultation Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomCTA;
