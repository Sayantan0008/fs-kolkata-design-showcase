import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Building, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import interiorImage from '@/assets/interior-design.jpg';
import commercialImage from '@/assets/commercial-project.jpg';
import landscapeImage from '@/assets/landscape-project.jpg';

const ProjectCategories = () => {
  const categories = [
    {
      title: "Interior Design",
      subtitle: "Residential & Commercial",
      icon: Home,
      image: interiorImage,
      link: "/projects"
    },
    {
      title: "Architectural Design",
      subtitle: "Residential & Commercial",
      icon: Building,
      image: commercialImage,
      link: "/projects"
    },
    {
      title: "Plan & Layout",
      subtitle: "Residential & Commercial",
      icon: PenTool,
      image: landscapeImage,
      link: "/projects"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-main-heading text-gold mb-3 sm:mb-4 md:mb-6">
            Our Project Categories
          </h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-3 sm:mb-4 md:mb-6"></div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto px-2 font-paragraph">
            Explore our diverse range of design services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-end">
                    <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-1 w-fit mb-2 sm:mb-3 md:mb-4">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gold" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-sub-heading font-bold text-white mb-1 sm:mb-2">{category.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white mb-2 sm:mb-3 md:mb-4 font-paragraph">{category.subtitle}</p>
                    <Link to={category.link}>
                      <Button
                        variant="ghost"
                        className="text-white hover:bg-white/20 p-0 h-auto font-medium group-hover:text-gold transition-colors text-xs sm:text-sm md:text-base"
                      >
                        View Projects
                        <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1 sm:ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Services We Provide Section */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sub-heading font-bold text-white mb-4 sm:mb-6 md:mb-8">
            Services We Provide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-12">
            {categories.map((service, index) => (
              <div key={index} className="text-center">
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-sub-heading font-semibold text-white mb-1 sm:mb-2">{service.title}</h4>
                <p className="text-xs sm:text-sm md:text-base text-white font-paragraph">{service.subtitle}</p>
              </div>
            ))}
          </div>

          <Link to="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-light hover:shadow-premium-gold text-white w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
            >
              View All Services
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;