import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users } from "lucide-react";

const BPOFeatures = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our UK BPO Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: TrendingUp,
              title: "Strategic Focus",
              description: "Focus on core business while we handle the rest",
            },
            {
              icon: CheckCircle,
              title: "Cost Efficiency",
              description: "Reduce operational costs by up to 40%",
            },
            {
              icon: Users,
              title: "Specialized Expertise",
              description: "Access to industry professionals and advanced technologies",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                <feature.icon className="w-12 h-12 text-coral mb-4" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button
            className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              const form = document.querySelector('form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Free BPO Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BPOFeatures;
