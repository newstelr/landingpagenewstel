
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/sections/Footer";

const CookiePolicy = () => {
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
          <h1 className="text-3xl font-bold mb-8 text-navy">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how Newstel GmbH ("we", "us", or "our") uses cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies are and why we use them, 
              as well as your rights to control our use of them.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
              as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Newstel GmbH) are called "first-party cookies". 
              Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies 
              enable third-party features or functionality to be provided on or through the website (e.g., advertising, 
              interactive content and analytics). The parties that set these third-party cookies can recognize your 
              computer both when it visits the website in question and also when it visits certain other websites.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Why Do We Use Cookies?</h2>
            <p>
              We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons 
              in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. 
              Other cookies also enable us to track and target the interests of our users to enhance the experience on our 
              website. Third parties serve cookies through our website for advertising, analytics and other purposes.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Types of Cookies We Use</h2>
            <p>The specific types of first- and third-party cookies served through our website include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Essential cookies:</strong> These cookies are strictly necessary to provide you with services 
                available through our website and to use some of its features, such as access to secure areas.
              </li>
              <li>
                <strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance 
                and functionality of our website but are non-essential to their use. However, without these cookies, 
                certain functionality may become unavailable.
              </li>
              <li>
                <strong>Analytics and customization cookies:</strong> These cookies collect information that is used either 
                in aggregate form to help us understand how our website is being used or how effective our marketing 
                campaigns are, or to help us customize our website for you.
              </li>
              <li>
                <strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you. 
                They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are 
                properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by 
              setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which 
              categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary 
              to provide you with services.
            </p>
            <p>
              If you choose to reject cookies, you may still use our website though your access to some functionality and 
              areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we 
              use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly 
              to stay informed about our use of cookies and related technologies.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            <p className="mb-6">
              Newstel GmbH<br />
              Hauptstrasse 25-28<br />
              22529 Hamburg<br />
              Germany<br />
              <br />
              Email: cookies@newstel.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
