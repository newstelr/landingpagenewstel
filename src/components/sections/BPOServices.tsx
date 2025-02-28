
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Globe, Headphones, ShoppingCart, TrendingUp } from "lucide-react";

const BPOServices = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Premium BPO Services for Your Business
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive BPO services are designed to improve your customer experience while reducing operational costs.
          </p>
        </div>

        {/* Key BPO Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Clock,
              title: "24/7 Omnichannel BPO",
              description: "Our BPO services provide constant support across all channels - email, chat, phone, and social media.",
            },
            {
              icon: Users,
              title: "Scalable BPO Teams",
              description: "Our BPO model allows you to easily scale your support team based on demand fluctuations.",
            },
            {
              icon: Globe,
              title: "Multilingual BPO Support",
              description: "Our BPO services include multilingual support specialists for your global customer base.",
            },
          ].map((feature, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-coral/20 transition-all duration-300">
              <CardHeader className="space-y-1">
                <feature.icon className="w-10 h-10 text-coral mb-2" />
                <CardTitle className="text-xl font-semibold text-navy">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* BPO Service Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Headphones,
              title: "Customer Support BPO",
              description: "Our BPO professionals deliver excellent customer experiences with highly trained support specialists.",
            },
            {
              icon: ShoppingCart,
              title: "Order Management BPO",
              description: "Optimize your order process from placement to delivery with our dedicated BPO support.",
            },
            {
              icon: TrendingUp,
              title: "Revenue Growth BPO",
              description: "Our BPO services include strategic cross-selling and up-selling to drive revenue growth.",
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
            Get Your Free BPO Quote Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BPOServices;
