
import { Button } from "@/components/ui/button";

const SecondCTA = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-navy mb-2 text-center">
            Ready to streamline your support operations?
          </h3>
          <Button
            className="bg-coral hover:bg-coral-dark text-white px-6 py-5 rounded-full text-lg transition-all duration-300"
            onClick={() => {
              const form = document.querySelector('form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondCTA;
