
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Headphones, 
  Calculator, 
  Users, 
  Database, 
  ShoppingCart, 
  Code
} from "lucide-react";

const BPOServices = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Comprehensive BPO Services for Your Business
          </h2>
          <p className="text-lg text-gray-600">
            Our wide range of BPO services are designed to optimize your business operations while reducing costs and improving efficiency.
          </p>
        </div>

        {/* Core BPO Service Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Headphones,
              title: "Customer Support BPO",
              description: "24/7 multi-channel customer service including call centers, email, chat, and social media management.",
            },
            {
              icon: Calculator,
              title: "Finance & Accounting BPO",
              description: "Streamline accounting processes, payroll management, accounts payable/receivable, and financial reporting.",
            },
            {
              icon: Users,
              title: "HR & Recruitment BPO",
              description: "Optimize HR operations including talent acquisition, onboarding, benefits administration, and employee engagement.",
            },
          ].map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-coral/20 transition-all duration-300">
              <CardHeader className="space-y-1">
                <service.icon className="w-10 h-10 text-coral mb-2" />
                <CardTitle className="text-xl font-semibold text-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional BPO Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Database,
              title: "Data Processing BPO",
              description: "Efficient data entry, cleansing, mining, and analytics services to transform raw data into actionable insights.",
            },
            {
              icon: ShoppingCart,
              title: "Back Office BPO",
              description: "Order processing, inventory management, logistics coordination, and supply chain optimization.",
            },
            {
              icon: Code,
              title: "IT & Technical BPO",
              description: "Technical support, software development, IT infrastructure management, and cybersecurity services.",
            },
          ].map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-coral/20 transition-all duration-300">
              <CardHeader className="space-y-1">
                <service.icon className="w-10 h-10 text-coral mb-2" />
                <CardTitle className="text-xl font-semibold text-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button
            className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              const form = document.querySelector('form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Your Free BPO Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BPOServices;
