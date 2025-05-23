
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <Button
          className="bg-coral hover:bg-coral-dark text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={() => {
            // Get the form element and scroll to it with an offset to ensure we're at the top
            const form = document.querySelector('form');
            if (form) {
              const formTop = form.getBoundingClientRect().top + window.scrollY - 100; // Add offset to ensure form is visible at the top
              window.scrollTo({
                top: formTop,
                behavior: 'smooth'
              });
            }
          }}
        >
          Get My Free Consultation
        </Button>
      </div>
    </div>
  );
};

export default CTA;
