import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-royal-gradient">
      <div className="text-center animate-fade-in">
        {/* Company Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src="/logo.png"
              alt="F.S. Infrastructure Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-royal text-gradient-gold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-elegant text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-black font-clean-medium">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-gold/30 text-gold hover:bg-gold/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
