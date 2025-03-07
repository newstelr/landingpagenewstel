
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Globe, Headphones, ShoppingCart, TrendingUp } from "lucide-react";

const Services = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Improve Your Customer Experience
          </h2>
          <p className="text-lg text-gray-600">
            Ready to boost your customer service? Our multilingual team provides excellent support that grows with your business.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Clock,
              title: "24/7 Omnichannel Support",
              description: "Always respond to customer questions with constant support across all channels - email, chat, phone, and social media.",
            },
            {
              icon: Users,
              title: "Adjustable Team Size",
              description: "Adjust your support team as needed. Perfect for busy periods and quick growth phases.",
            },
            {
              icon: Globe,
              title: "Multilingual Support",
              description: "Help global customers in their preferred language with our multilingual support specialists.",
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

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Headphones,
              title: "Customer Support Excellence",
              description: "Give excellent customer experiences with our highly trained support specialists.",
            },
            {
              icon: ShoppingCart,
              title: "Order Management",
              description: "Make your order process better from placement to delivery with dedicated support.",
            },
            {
              icon: TrendingUp,
              title: "Revenue Growth",
              description: "Turn support interactions into sales with strategic cross-selling and up-selling.",
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
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
