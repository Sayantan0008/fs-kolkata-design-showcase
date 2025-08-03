import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedButton } from '@/components/ui/animated-button';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-architecture.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 mb-4 sm:mb-6 md:mb-8">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span className="text-white text-xs sm:text-sm font-clean-medium">Think Different, The Design Forever</span>
          </div>

          {/* Main Headline */}
          <div className="relative mb-4 sm:mb-6 md:mb-8">
            {/* Main Heading - On Top */}
            <h1
              className="font-main-heading text-gold relative z-20"
              style={{
                fontSize: 'clamp(4rem, 8vw, 10rem)',
                lineHeight: '0.8'
              }}
            >
              Luxury & Comfort
            </h1>

            {/* Sub Heading - Below */}
            <div
              className="text-white font-bold font-sans relative z-10"
              style={{
                fontSize: 'clamp(2rem, 4vw, 6rem)',
                marginTop: '-0.5em' // Slight overlap
              }}
            >
              Passionate Living Spaces
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 sm:mb-8 md:mb-10 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 font-paragraph">
            We are committed to incorporating sustainable design strategies into all of our projects.
            It is woven into our design practices.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-12 max-w-lg sm:max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-clean-bold text-gold mb-1 sm:mb-2">28</div>
              <div className="text-xs sm:text-sm text-gray-300 font-clean">Residential Projects</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-clean-bold text-gold mb-1 sm:mb-2">20</div>
              <div className="text-xs sm:text-sm text-gray-300 font-clean">Commercial Projects</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-clean-bold text-gold mb-1 sm:mb-2">8+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-clean">Years Experience</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-6">
            <Link to="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-gold/30 text-gold hover:bg-gold/10 backdrop-blur-md px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-clean-medium rounded-full w-full sm:w-auto"
              >
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
                View Projects
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-auto font-clean-medium"
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gold/20 rounded-lg rotate-45 animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;