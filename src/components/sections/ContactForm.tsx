
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import FormInput from "./form/FormInput";
import FormHeader from "./form/FormHeader";
import FormFooter from "./form/FormFooter";

// Initialize EmailJS with the provided credentials
const EMAILJS_SERVICE_ID = "service_rore4kq"; 
const EMAILJS_TEMPLATE_ID = "template_v65mr9p";  
const EMAILJS_USER_ID = "2wqmmBMETBdP48M1_"; 

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
      
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      await sendEmail();
      
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
    <div className="container mx-auto px-4 -mt-40 mb-24 relative z-10">
      <div className="rounded-xl shadow-lg p-6 sm:p-10 max-w-2xl mx-auto bg-white border border-coral/20 transition-all duration-300 hover:shadow-xl">
        <FormHeader />
        
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <FormInput
            label="Your Name"
            name="name"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            disabled={isSubmitting}
          />
          
          <FormInput
            label="Business Email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            disabled={isSubmitting}
          />
          
          <FormInput
            label="Phone Number"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            disabled={isSubmitting}
          />
          
          <FormInput
            label="Tell us about your needs"
            name="message"
            placeholder="Describe your customer service requirements..."
            value={formData.message}
            onChange={handleInputChange}
            error={errors.message}
            disabled={isSubmitting}
            isTextarea={true}
          />
          
          <Button
            type="submit"
            className="w-full bg-coral hover:bg-coral-dark text-white py-4 sm:py-6 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Get Your Free Consultation Now"
            )}
          </Button>
          
          <FormFooter />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
