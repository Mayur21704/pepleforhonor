import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Employment Support", href: "#services" },
        { name: "Mentorship Program", href: "#services" },
        { name: "Personal Coaching", href: "#services" },
        { name: "Culture & Community", href: "#services" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Values", href: "#about" },
        { name: "Success Stories", href: "#about" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Newsletter", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <div className="font-playfair">
                <h3 className="text-xl font-bold text-background">People for Honor</h3>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering newcomers to Canada with comprehensive support, mentorship, 
              and community connections to help them thrive in their new home.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">647 459 5384</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@peopleforhonor.com</span>
              </div>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm">1505 Laperriere Ave Suite 506<br />Ottawa, ON, K1Z7T1</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-background mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-background/5 rounded-xl p-8 mb-12">
          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold text-background mb-2">
              Stay Connected With Our Community
            </h4>
            <p className="text-background/80">
              Get updates on new programs, success stories, and valuable resources for newcomers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:border-primary focus:outline-none"
            />
            <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} People for Honor. All rights reserved. Built with{" "}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              for newcomers to Canada.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/80 hover:text-primary hover:bg-primary/20 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;