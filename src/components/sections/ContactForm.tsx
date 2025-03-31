
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import FormInput from "./form/FormInput";
import FormHeader from "./form/FormHeader";
import FormFooter from "./form/FormFooter";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { saveFormSubmission } from "@/services/formService";

const EMAILJS_SERVICE_ID = "service_rore4kq"; 
const EMAILJS_TEMPLATE_ID = "template_v65mr9p";  
const EMAILJS_USER_ID = "2wqmmBMETBdP48M1_"; 

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Please tell us about your needs"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const getSavedFormData = (): Partial<FormValues> => {
    try {
      const savedData = localStorage.getItem('contactFormData');
      return savedData ? JSON.parse(savedData) : {};
    } catch (error) {
      console.error("Error loading saved form data:", error);
      return {};
    }
  };
  
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      ...getSavedFormData(),
    },
    mode: "onBlur",
  });
  
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, []);

  const sendEmail = async (data: FormValues) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          from_phone: data.phone,
          message: data.message,
        }
      );
      
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      await sendEmail(data);
      
      await saveFormSubmission({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      
      localStorage.removeItem('contactFormData');
      
      toast({
        title: "Form submitted successfully!",
        description: "We'll be in touch with you shortly.",
      });
      
      navigate('/thank_you_outsourcing_uk');
    } catch (error) {
      console.error("Error processing form:", error);
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
        
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
            <FormInput
              label="Your Name"
              name="name"
              placeholder="John Smith"
              disabled={isSubmitting}
            />
            
            <FormInput
              label="Business Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              disabled={isSubmitting}
            />
            
            <FormInput
              label="Phone Number"
              name="phone"
              placeholder="+1 (555) 123-4567"
              disabled={isSubmitting}
            />
            
            <FormInput
              label="Tell us about your needs"
              name="message"
              placeholder="Describe your customer service requirements..."
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
        </FormProvider>
      </div>
    </div>
  );
};

export default ContactForm;
