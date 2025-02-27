
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/sections/Footer";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold mb-8 text-navy">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Newstel GmbH ("Company", "we", "us", or "our"). We respect your privacy and are committed 
              to protecting your personal data. This privacy policy will inform you about how we look after your 
              personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li>Usage Data includes information about how you use our website, products and services.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal 
              data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected 
              it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-6">
              Newstel GmbH<br />
              Hauptstrasse 25-28<br />
              22529 Hamburg<br />
              Germany<br />
              <br />
              Email: privacy@newstel.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
