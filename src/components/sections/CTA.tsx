
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-navy rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            See Our Impact in Action
          </h3>
          <p className="text-gray-300 mb-6">
            Discover how we helped a leading e-commerce brand reduce response times by 60% while increasing customer satisfaction scores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300"
              onClick={() => window.location.href = '/case-studies'}
            >
              Read Case Study
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-6 rounded-full text-lg transition-all duration-300"
              onClick={() => {
                const form = document.querySelector('form');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
