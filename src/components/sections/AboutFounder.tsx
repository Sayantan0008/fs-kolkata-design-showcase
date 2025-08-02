import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Award, MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutFounder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // You can replace this with the actual image URL of the appreciation letter
  const appreciationLetterImage = "/letter.jpg";

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-main-heading text-gold mb-3 sm:mb-4 md:mb-6">
            Meet Our Founder
          </h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Founder Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl">
              <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto mb-3 sm:mb-4 md:mb-6 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-clean-bold">FA</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-clean-bold mb-1 sm:mb-2">Er. Farez Ahmed Gazi</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gold font-clean">Founder & Principal Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Details */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sub-heading text-white mb-2 sm:mb-3 md:mb-4">
                Founder & Principal Designer
              </h3>
              <h4 className="text-base sm:text-lg md:text-xl text-white font-sub-heading font-bold mb-2 sm:mb-3 md:mb-6">
                Er. Farez Ahmed Gazi
              </h4>
              <div className="text-xs sm:text-sm md:text-base text-white space-y-1 sm:space-y-2 mb-3 sm:mb-4 md:mb-6 font-paragraph">
                <p>(M.Bdes, B.Tech, Dip)</p>
                <p>[Civil Engineer, Chartered Engineer, Architect, Interior Designer]</p>
                <p className="font-clean-medium">AM3158902 - Member of IE(INDIA)</p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed font-paragraph">
                F.S.Infrastructure – India's Most Trusted & Esteemed Engineering, Interior-Architectural design firm located in Kolkata, West Bengal.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed font-paragraph">
                Founded by Farez Ahmed Gazi, with over 8 years of experience, the firm specializes in innovative Residential and Commercial Projects.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed hidden sm:block font-paragraph">
                Clients are drawn to F.S.Infrastructure for its meticulous attention to detail and personalized service that seamlessly blends aesthetics with functionality. Committed to sustainability and high-quality design & craftsmanship, F.S.Infrastructure has become a trusted name in the design industry since its establishment.
              </p>
            </div>

            {/* Appreciation */}
            <div className="relative group">
              <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-gold/10 to-gold-light/10 border-gold/20 cursor-pointer hover:from-gold/15 hover:to-gold-light/15 transition-all duration-300" onClick={() => setIsModalOpen(true)}>
                <div className="flex items-start justify-between space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 flex-1">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gold flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <button className="text-left w-full">
                        <h5 className="font-clean-bold text-foreground mb-1 sm:mb-2 hover:text-gold transition-colors text-xs sm:text-sm md:text-base">
                          Appreciation Letter From INDIAN ARMY
                        </h5>
                        <p className="text-xs sm:text-sm text-muted-foreground font-clean">
                          For Designing Army Public School, Panagarh
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Mobile Certificate Button */}
                  <div className="lg:hidden">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gold/30 text-gold hover:bg-gold/10 text-xs px-2 py-1 whitespace-nowrap"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(true);
                      }}
                    >
                      See Certificate
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Hover Preview - Hidden on mobile, shown on desktop */}
              <div className="absolute left-full ml-4 top-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none hidden lg:block">
                <div className="bg-background/95 backdrop-blur-md border border-gold/20 rounded-lg shadow-2xl p-3 w-64">
                  <div className="relative overflow-hidden rounded-md mb-2">
                    <img
                      src={appreciationLetterImage}
                      alt="Appreciation Letter Preview"
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-clean-medium text-foreground">
                      Click to view full letter
                    </p>
                    <p className="text-xs font-clean text-muted-foreground mt-1">
                      Recognition from Indian Army
                    </p>
                  </div>
                </div>


              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <span className="text-xs sm:text-sm font-clean-medium text-muted-foreground">Connect:</span>
              <a
                href="https://www.facebook.com/farezahmedgazi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 md:p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/farez_ahmed_gazi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 md:p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/farezahmedgazi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 md:p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-6">
              <Link to="/about">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gold to-gold-light hover:shadow-premium-gold text-white w-full sm:w-auto text-xs sm:text-sm md:text-base font-clean-medium"
                >
                  How it Works?
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto text-xs sm:text-sm md:text-base font-clean-medium"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in-modal" onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-4xl max-h-[90vh] mx-4 animate-scale-in-modal">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors z-10 animate-fade-in-delayed"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={appreciationLetterImage}
                alt="Appreciation Letter From Indian Army"
                className="w-full h-auto max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center animate-slide-up-modal">
              <h3 className="text-white font-clean-bold text-sm sm:text-base md:text-lg">
                Appreciation Letter From INDIAN ARMY
              </h3>
              <p className="text-white/80 font-clean text-xs sm:text-sm mt-1">
                For Designing Army Public School, Panagarh
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutFounder;