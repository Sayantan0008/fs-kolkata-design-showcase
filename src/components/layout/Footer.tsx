import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Company Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/logo.png"
              alt="F.S. Infrastructure Logo"
              className="w-28 h-20 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-36 xl:w-60 xl:h-44 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-sm sm:text-base font-clean-bold text-gold">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-gray-300 hover:text-gold transition-premium block font-clean"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-sm sm:text-base font-clean-bold text-gold">Contact</h4>
            <div className="space-y-1 sm:space-y-1.5">
              <a href="tel:+919007776923" className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300 hover:text-gold transition-premium font-clean">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+91 90077 76923</span>
              </a>
              <a href="mailto:info@fsinfrastructure.com" className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300 hover:text-gold transition-premium font-clean">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>info@fsinfrastructure.com</span>
              </a>
            </div>
            <div className="flex space-x-2 sm:space-x-3 pt-1">
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-premium">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-premium">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-premium">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h5 className="text-sm sm:text-base font-clean-bold">Connect on WhatsApp</h5>
                <p className="text-xs sm:text-sm text-gray-400 font-clean">Quick consultations</p>
              </div>
            </div>
            <Button
              variant="default"
              className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto text-xs sm:text-sm py-2 font-clean-medium"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Chat Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 sm:pt-4 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left font-clean">
            © 2024 F.S. Infrastructure. All rights reserved.
          </p>
          <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-gold transition-premium font-clean">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-gold transition-premium font-clean">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;