
import { Button } from "@/components/ui/button";

const BPOHero = () => {
  return (
    <div className="bg-navy">
      <div className="container mx-auto px-4 pt-24 pb-64">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-fade-up opacity-0 [--delay:200ms]">
          UK's Leading BPO Service Provider for Customer Support
        </h1>
        <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl mx-auto animate-fade-up opacity-0 [--delay:400ms]">
          Transform your business with our premium BPO services. Reduce operational costs by up to 40% while maintaining exceptional customer service quality.
        </p>
        <div className="mt-8 flex justify-center animate-fade-up opacity-0 [--delay:600ms]">
          <Button
            className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300"
            onClick={() => {
              const form = document.querySelector('form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Your Free BPO Service Quote Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BPOHero;
