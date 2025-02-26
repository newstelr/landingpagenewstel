
const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-coral transition-colors">Company</a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">Team</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-coral transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">Consulting</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Phone: +44 (0)20 1234 5678</li>
              <li>Email: info@newstel.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Location</h3>
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
