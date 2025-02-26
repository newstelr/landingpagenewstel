
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
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
  );
};

export default ContactForm;
