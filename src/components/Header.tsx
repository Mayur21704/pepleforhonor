import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Programs", href: "/programs" },
    { name: "Join Us", href: "/join" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                647 459 5384
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                info@peopleforhonor.com
              </span>
            </div>
            <div className="flex items-center gap-1 mt-1 sm:mt-0">
              <MapPin className="h-3 w-3" />
              1505 Laperriere Ave Suite 506 Ottawa, ON, K1Z7T1
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <div className="font-playfair">
              <h1 className="text-xl font-bold text-foreground">People for Honor</h1>
              <p className="text-xs text-muted-foreground">Empowering Lives, Building Futures</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => 
                  `text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                    isActive ? 'text-primary border-b-2 border-primary' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button className="bg-gradient-primary hover:bg-primary-hover">
              Get Support
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => 
                    `text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 block ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button className="bg-gradient-primary hover:bg-primary-hover mt-4">
                Get Support
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;