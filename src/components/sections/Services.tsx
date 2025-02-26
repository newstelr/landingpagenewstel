
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Globe, Headphones, ShoppingCart, TrendingUp } from "lucide-react";

const Services = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Transform Your Customer Experience
          </h2>
          <p className="text-lg text-gray-600">
            Ready to elevate your customer service? Our UK-based team delivers exceptional support that grows with your business.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Clock,
              title: "24/7 Omnichannel Support",
              description: "Never miss a customer inquiry with round-the-clock support across all channels - email, chat, phone, and social media.",
            },
            {
              icon: Users,
              title: "Scalable Team",
              description: "Flex your support team up or down as needed. Perfect for seasonal peaks and rapid growth phases.",
            },
            {
              icon: Globe,
              title: "Multilingual Support",
              description: "Reach global customers in their preferred language with our multilingual support specialists.",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Headphones,
              title: "Customer Support Excellence",
              description: "Deliver exceptional customer experiences with our highly trained support specialists.",
            },
            {
              icon: ShoppingCart,
              title: "Order Management",
              description: "Streamline your order process from placement to delivery with dedicated support.",
            },
            {
              icon: TrendingUp,
              title: "Revenue Growth",
              description: "Turn support interactions into opportunities with strategic cross-selling and up-selling.",
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
      </div>
    </div>
  );
};

export default Services;
