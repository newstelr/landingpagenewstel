
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavLink {
  text: string;
  href: string;
}

interface User {
  name: string;
  avatar: string;
}

interface NavbarProps {
  links: NavLink[];
  user?: User;
}

export function Navbar({ links, user }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-navy py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          {/* Logo - Centered */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/f850fee0-2a51-4ae3-8743-c7fdd9031b3c.png"
              alt="Newstel Worldwide"
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-6 text-gray-200 hover:text-coral transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Only shown on small screens if needed */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 pb-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-200 hover:text-coral transition-colors duration-200 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
