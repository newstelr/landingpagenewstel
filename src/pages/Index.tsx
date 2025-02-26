
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
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar links={navigationLinks} />
      
      {/* Hero Section */}
      <div className="relative bg-navy pb-32">
        <div className="container mx-auto px-4 pt-24 pb-48">
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
        <div className="wave-shape bottom-0 left-0">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="fill-white"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 -mt-40 mb-24">
        <div className="glass-card rounded-xl shadow-2xl p-8 max-w-2xl mx-auto bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-gray-200"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Business Email"
              className="w-full p-4 rounded-lg border border-gray-200"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg border border-gray-200"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Textarea
              placeholder="Tell us about your customer service needs"
              className="w-full p-4 rounded-lg border border-gray-200"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <Button
              type="submit"
              className="w-full bg-coral hover:bg-coral-dark text-white py-4 rounded-lg transition-all duration-300"
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

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Common Questions About UK Outsourced Support</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {[
              "How does UK-based outsourced customer service work?",
              "What are the cost benefits of outsourcing customer service?",
              "Can you handle multiple communication channels?",
              "How do you maintain service quality?",
              "What industries do you support in the UK?",
              "How quickly can you implement the service?",
              "What technology and systems do you use?",
              "How do you handle data protection and GDPR?",
              "What are your service level agreements (SLAs)?",
            ].map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{question}</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
