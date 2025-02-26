import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Globe, Headphones, ShoppingCart, TrendingUp } from "lucide-react";

const navigationLinks = [
  { text: "Why Choose Us?", href: "/why-choose-us" },
  { text: "Our Services", href: "/services" },
  { text: "Technology", href: "/technology" },
  { text: "About Us", href: "/about" },
  { text: "Case Studies", href: "/case-studies" },
  { text: "Newstel Insights", href: "/insights" },
  { text: "Contact", href: "/contact" },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar links={navigationLinks} />
      
      {/* Hero Section */}
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

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 -mt-40 mb-24">
        <div className="rounded-xl shadow-2xl p-8 max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-50 border-2 border-coral/20">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Get Your Free Consultation</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-coral/50 focus:ring-coral/30 transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Business Email"
              className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-coral/50 focus:ring-coral/30 transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-coral/50 focus:ring-coral/30 transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Textarea
              placeholder="Tell us about your customer service needs"
              className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-coral/50 focus:ring-coral/30 transition-colors"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <Button
              type="submit"
              className="w-full bg-coral hover:bg-coral-dark text-white py-6 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Your Free Consultation
            </Button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our UK Customer Service Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "UK-Based Support Team",
                subtitle: "Native English-Speaking Professionals",
              },
              {
                title: "24/7 Customer Care",
                subtitle: "Round-the-Clock UK Coverage",
              },
              {
                title: "40% Cost Reduction",
                subtitle: "Without Compromising Quality",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Content Block: Services & Benefits */}
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-navy text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-coral transition-colors">Company</a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral transition-colors">Team</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-coral transition-colors">Support</a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral transition-colors">Consulting</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Phone: +44 (0)20 1234 5678</li>
                <li>Email: info@newstel.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Location</h3>
              <p>
                Newstel GmbH<br />
                Hauptstrasse 25-28<br />
                22529 Hamburg<br />
                Germany
              </p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} Newstel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
