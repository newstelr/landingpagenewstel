
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/sections/Footer";

const TermsOfService = () => {
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms of Service", href: "/terms-of-service" },
    { text: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={navLinks} />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-navy">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Newstel GmbH. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>
            <p>
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website 
              if you do not accept all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. License to Use</h2>
            <p>
              Unless otherwise stated, Newstel GmbH and/or its licensors own the intellectual property rights for all material on this website. 
              All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject 
              to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Republish material from this website</li>
              <li>Sell, rent or sub-license material from this website</li>
              <li>Reproduce, duplicate or copy material from this website</li>
              <li>Redistribute content from this website</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Limit or exclude our or your liability for death or personal injury</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitations and Exclusions</h2>
            <p>
              The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.
            </p>
            <p>
              To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Changes to These Terms</h2>
            <p>
              We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms and conditions.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Germany and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mb-6">
              Newstel GmbH<br />
              Hauptstrasse 25-28<br />
              22529 Hamburg<br />
              Germany<br />
              <br />
              Email: legal@newstel.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
