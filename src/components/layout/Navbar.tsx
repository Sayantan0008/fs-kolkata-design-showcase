import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Gift } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-royal overflow-hidden ${isScrolled
        ? 'bg-background/95 backdrop-blur-md shadow-royal'
        : 'bg-transparent'
        }`}
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-4 sm:mr-6 md:mr-8 lg:mr-12 flex-shrink-0 h-full">
            <img
              src="/logo.png"
              alt="F.S. Infrastructure Logo"
              className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300 max-w-none block"
            />
          </Link>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Desktop Navigation and Actions */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link text-sm font-clean-medium transition-all duration-300 hover:text-gold ${location.pathname === item.path
                    ? 'text-gold active'
                    : 'text-muted-foreground'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 text-muted-foreground hover:bg-white/5 hover:text-foreground hover:border-white/30 font-clean-medium px-3 py-2 text-sm"
                onClick={() => navigate('/rewards')}
              >
                Rewards
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-black font-clean-medium px-4 py-2 text-sm"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Mobile Contact Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:hidden ml-auto">
            <Button
              size="sm"
              variant="outline"
              className="border-white/20 text-muted-foreground hover:bg-white/5 hover:text-foreground font-clean-medium p-2 sm:p-2.5 rounded-full"
              onClick={() => navigate('/rewards')}
            >
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce text-gold" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-white/5 transition-colors text-foreground"
          >
            {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/10 max-h-[80vh] overflow-y-auto">
            <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 space-y-2 sm:space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm sm:text-base font-clean-medium transition-colors py-2.5 sm:py-3 px-2 sm:px-3 rounded-lg ${location.pathname === item.path
                    ? 'text-foreground font-semibold bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 sm:pt-3 border-t border-white/10 space-y-2 sm:space-y-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-white/20 text-muted-foreground hover:bg-white/5 hover:text-foreground font-clean-medium py-2.5 sm:py-3"
                  onClick={() => {
                    navigate('/rewards');
                    setIsOpen(false);
                  }}
                >
                  <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                  Rewards
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-black font-clean-medium py-2.5 sm:py-3"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;