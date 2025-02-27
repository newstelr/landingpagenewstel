
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="bg-navy py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Button
            className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300"
            onClick={() => {
              const form = document.querySelector('form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Your Free UK Support Quote Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
