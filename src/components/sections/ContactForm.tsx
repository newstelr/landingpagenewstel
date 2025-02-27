
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import emailjs from "emailjs-com";

// Initialize EmailJS
// Note: In a production environment, you would store these keys in environment variables
const EMAILJS_SERVICE_ID = "service_id"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_id"; // Replace with your EmailJS template ID  
const EMAILJS_USER_ID = "user_id"; // Replace with your EmailJS user ID

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your needs";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async () => {
    try {
      // Send email notification to admin
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        }
      );
      
      // In a real implementation, you might have a separate template for confirmation emails
      // This would send a confirmation email to the customer
      /*
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        "confirmation_template_id",
        {
          to_name: formData.name,
          to_email: formData.email,
        }
      );
      */
      
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please check your information",
        description: "There are some errors in your form submission.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // For development/demonstration purposes
      // If EmailJS keys are not configured, we'll simulate success
      if (EMAILJS_USER_ID === "user_id") {
        console.log("EmailJS not configured. Simulating successful submission.");
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        await sendEmail();
      }
      
      toast({
        title: "Form submitted successfully!",
        description: "We'll be in touch with you shortly.",
      });
      
      // Navigate to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't process your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 -mt-40 mb-24">
      <div className="rounded-xl shadow-2xl p-8 max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-50 border-2 border-coral/20">
        <h3 className="text-2xl font-bold text-navy mb-6 text-center">Get Your Free Consultation</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Your Name"
              className={`w-full p-4 rounded-lg border-2 ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-coral/50 focus:ring-coral/30 transition-colors`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Business Email"
              className={`w-full p-4 rounded-lg border-2 ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-coral/50 focus:ring-coral/30 transition-colors`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <Input
              placeholder="Phone Number"
              className={`w-full p-4 rounded-lg border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-coral/50 focus:ring-coral/30 transition-colors`}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isSubmitting}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          
          <div>
            <Textarea
              placeholder="Tell us about your customer service needs"
              className={`w-full p-4 rounded-lg border-2 ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:border-coral/50 focus:ring-coral/30 transition-colors`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={isSubmitting}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          <Button
            type="submit"
            className="w-full bg-coral hover:bg-coral-dark text-white py-6 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Get Your Free Consultation"
            )}
          </Button>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy and terms of service.
            We'll send you occasional updates about our services.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
