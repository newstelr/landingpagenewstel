
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-navy">
      <div className="container mx-auto px-4 pt-24 pb-64">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-fade-up opacity-0 [--delay:200ms]">
          UK's Premier Outsourced Customer Service Solutions
        </h1>
        <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl mx-auto animate-fade-up opacity-0 [--delay:400ms]">
          Transform your customer experience with our UK-based outsourced customer service team. Reduce costs by up to 40% while maintaining exceptional service quality.
        </p>
        <div className="mt-8 flex justify-center animate-fade-up opacity-0 [--delay:600ms]">
          <Button
            className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300"
          >
            Get Your Free UK Support Quote Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
