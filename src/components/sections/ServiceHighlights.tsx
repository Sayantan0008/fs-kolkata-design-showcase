import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const designPhilosophies = [
    {
      title: "A Modern Approach to Interior Designing",
      description: "We are committed to incorporating sustainable design strategies into all of our projects. It is woven into our design practices.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1456&auto=format&fit=crop",
      ctaText: "Projects",
      link: "/projects"
    },
    {
      title: "Designing Experiences, Not Just Spaces",
      description: "We have a multi-disciplined approach. Our clients enjoy an added value through the planning, architecture, landscape architecture, and interior design.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1456&auto=format&fit=crop",
      ctaText: "Services",
      link: "/services"
    },
    {
      title: "We're All Set to Design Your Dream Projects",
      description: "Get in touch with us to upgrade your dream project to whole new design.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1456&auto=format&fit=crop",
      ctaText: "Contact",
      link: "/contact"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % designPhilosophies.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [designPhilosophies.length, isAutoPlaying]);

  const currentPhilosophy = designPhilosophies[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % designPhilosophies.length);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + designPhilosophies.length) % designPhilosophies.length);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-main-heading text-gold mb-3 sm:mb-4 md:mb-6">
            Our Design Philosophy
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-paragraph text-white max-w-3xl mx-auto px-2">
            Explore our modern approach to creating sustainable, experiential spaces that bring your dream projects to life.
          </p>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0">
          {/* Left Section - Text Content */}
          <div className="lg:col-span-1 bg-black text-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Title */}
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sub-heading text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {currentPhilosophy.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-paragraph text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {currentPhilosophy.description}
                </motion.p>

                {/* CTA Link */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Link
                    to={currentPhilosophy.link}
                    className="inline-flex items-center text-sm sm:text-base md:text-lg lg:text-xl font-clean-medium text-white hover:text-gold transition-colors duration-300 group"
                  >
                    {currentPhilosophy.ctaText}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 pt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 sm:w-14 sm:h-14 border border-gold/30 rounded-full flex items-center justify-center text-white hover:bg-gold/10 transition-colors duration-300"
                aria-label="Previous design philosophy"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Progress Indicator */}
              <div className="flex gap-2">
                {designPhilosophies.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-1 w-8 sm:w-12 rounded-full ${index === currentIndex ? 'bg-gold' : 'bg-white/30'
                      }`}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: index === currentIndex ? 1 : 0.3,
                      backgroundColor: index === currentIndex ? '#D4AF37' : 'rgba(255, 255, 255, 0.3)'
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 sm:w-14 sm:h-14 border border-gold/30 rounded-full flex items-center justify-center text-white hover:bg-gold/10 transition-colors duration-300"
                aria-label="Next design philosophy"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Right Section - Large Image */}
          <div className="lg:col-span-2 relative h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-[700px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentPhilosophy.image}
                alt={currentPhilosophy.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </AnimatePresence>
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12 lg:mt-16">
          <Link to="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-gold/30 text-gold hover:bg-gold/10 backdrop-blur-md px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-clean-medium rounded-full w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;