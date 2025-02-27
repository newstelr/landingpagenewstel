
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start justify-center">
          <div className="flex flex-col items-start">
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-coral transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-coral transition-colors" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-coral transition-colors" target="_blank" rel="noopener noreferrer">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-bold mb-4">Company</h3>
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
  );
};

export default Footer;
