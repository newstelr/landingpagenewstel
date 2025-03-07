
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lock, Shield, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

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
        <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-2 text-center">Get Your Free Consultation</h3>
        <p className="text-center text-gray-600 mb-6">Our experts are ready to analyze your needs and provide solutions</p>
        
        <div className="flex justify-center space-x-4 mb-6">
          <div className="flex items-center text-coral">
            <CheckCircle className="h-4 w-4 mr-1" />
            <span className="text-xs">100% Free</span>
          </div>
          <div className="flex items-center text-coral">
            <Lock className="h-4 w-4 mr-1" />
            <span className="text-xs">Secure Form</span>
          </div>
          <div className="flex items-center text-coral">
            <Shield className="h-4 w-4 mr-1" />
            <span className="text-xs">Privacy Protected</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div className="group">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Your Name</label>
            <Input
              placeholder="John Smith"
              className={`w-full p-3 sm:p-4 rounded-lg border-2 ${errors.name ? 'border-red-500' : 'border-coral/20'} focus:border-coral focus:ring-coral/30 transition-colors text-base group-hover:border-coral/40 bg-white`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div className="group">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Business Email</label>
            <Input
              type="email"
              placeholder="you@company.com"
              className={`w-full p-3 sm:p-4 rounded-lg border-2 ${errors.email ? 'border-red-500' : 'border-coral/20'} focus:border-coral focus:ring-coral/30 transition-colors text-base group-hover:border-coral/40 bg-white`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div className="group">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
            <Input
              placeholder="+1 (555) 123-4567"
              className={`w-full p-3 sm:p-4 rounded-lg border-2 ${errors.phone ? 'border-red-500' : 'border-coral/20'} focus:border-coral focus:ring-coral/30 transition-colors text-base group-hover:border-coral/40 bg-white`}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isSubmitting}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          
          <div className="group">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Tell us about your needs</label>
            <Textarea
              placeholder="Describe your customer service requirements..."
              className={`w-full p-3 sm:p-4 rounded-lg border-2 ${errors.message ? 'border-red-500' : 'border-coral/20'} focus:border-coral focus:ring-coral/30 transition-colors min-h-[100px] sm:min-h-[120px] text-base group-hover:border-coral/40 bg-white`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={isSubmitting}
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
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
          
          <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
            <Lock className="h-3 w-3 mr-1 text-coral" />
            <p>
              Your information is secure and will never be shared with third parties.
              By submitting, you agree to our <a href="/privacy-policy" className="text-coral hover:underline">privacy policy</a>.
            </p>
          </div>
          
          <div className="mt-4 bg-coral/5 p-3 rounded-lg border border-coral/10 text-xs text-gray-600">
            <p className="font-medium text-coral mb-1">What happens next?</p>
            <ol className="list-decimal list-inside space-y-1 pl-1">
              <li>Our consultant will contact you within 24 hours</li>
              <li>Brief discussion about your business needs</li>
              <li>Custom proposal with pricing and solutions</li>
            </ol>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

