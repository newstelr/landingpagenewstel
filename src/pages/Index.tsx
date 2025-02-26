
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      {/* Hero Section */}
      <div className="relative bg-navy pb-32">
        <div className="container mx-auto px-4 pt-24 pb-48">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-fade-up opacity-0 [--delay:200ms]">
            Empower Your Business with Expert Support Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl mx-auto animate-fade-up opacity-0 [--delay:400ms]">
            Streamline your operations and enhance customer satisfaction with our tailored services.
          </p>
          <div className="mt-8 flex justify-center animate-fade-up opacity-0 [--delay:600ms]">
            <Button
              className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300"
            >
              Get Your Free Consultation Now
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
              placeholder="Name"
              className="w-full p-4 rounded-lg border border-gray-200"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-lg border border-gray-200"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              placeholder="Phone"
              className="w-full p-4 rounded-lg border border-gray-200"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Textarea
              placeholder="How Can We Help?"
              className="w-full p-4 rounded-lg border border-gray-200"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <Button
              type="submit"
              className="w-full bg-coral hover:bg-coral-dark text-white py-4 rounded-lg transition-all duration-300"
            >
              Request Free Consultation
            </Button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">The Newstel Edge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Expert Support",
                subtitle: "Tailored to Your Needs",
              },
              {
                title: "Scalable Solutions",
                subtitle: "for Businesses of All Sizes",
              },
              {
                title: "Proven Results",
                subtitle: "98% Customer Satisfaction",
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
        <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {[
              "What services does Newstel offer?",
              "Why choose Newstel for customer service?",
              "Which industries or companies does Newstel support?",
              "What are the benefits of outsourcing?",
              "How does Newstel assist with new technologies?",
              "How is quality assurance handled?",
              "What is Newstel's pricing structure?",
              "What is the contract commitment?",
              "What does communication with Newstel look like?",
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
