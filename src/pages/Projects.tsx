import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Square, ArrowRight, Filter, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import villaImage from '@/assets/villa-project.jpg';
import interiorImage from '@/assets/interior-design.jpg';
import salonImage from '@/assets/salon-project.jpg';
import commercialImage from '@/assets/commercial-project.jpg';
import landscapeImage from '@/assets/landscape-project.jpg';
import heroImage from '@/assets/hero-architecture.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa - Ballygunge',
      category: 'Residential',
      location: 'Ballygunge, Kolkata',
      year: '2023',
      size: '4,500 sq ft',
      clients: 'Mr. & Mrs. Sharma',
      image: villaImage,
      description: 'A stunning contemporary villa featuring modern architecture with traditional elements. The design seamlessly blends indoor and outdoor spaces.',
      features: ['4 Bedrooms', 'Swimming Pool', 'Home Theater', 'Landscaped Garden'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Executive Apartment Interior',
      category: 'Interior Design',
      location: 'Salt Lake, Kolkata',
      year: '2023',
      size: '2,200 sq ft',
      clients: 'Dr. Priya Gupta',
      image: interiorImage,
      description: 'Sophisticated interior design for a modern apartment with emphasis on functionality and aesthetic appeal.',
      features: ['3 Bedrooms', 'Open Kitchen', 'Study Room', 'Balcony Garden'],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Premium Salon Design',
      category: 'Commercial',
      location: 'Park Street, Kolkata',
      year: '2023',
      size: '1,800 sq ft',
      clients: 'Glamour Salon Chain',
      image: salonImage,
      description: 'High-end salon interior with luxury finishes, modern equipment layout, and customer comfort zones.',
      features: ['12 Stations', 'VIP Rooms', 'Reception Area', 'Product Display'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Corporate Office Complex',
      category: 'Commercial',
      location: 'Sector V, Kolkata',
      year: '2022',
      size: '8,000 sq ft',
      clients: 'TechCorp Solutions',
      image: commercialImage,
      description: 'Modern office space designed for productivity and collaboration with sustainable design elements.',
      features: ['Open Workspaces', 'Meeting Rooms', 'Cafeteria', 'Terrace Garden'],
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Residential Landscape Design',
      category: 'Landscape',
      location: 'New Town, Kolkata',
      year: '2023',
      size: '3,000 sq ft',
      clients: 'Green Villas Community',
      image: landscapeImage,
      description: 'Beautiful landscape design featuring native plants, water features, and sustainable gardening practices.',
      features: ['Water Feature', 'Walking Path', 'Meditation Zone', 'Children\'s Play Area'],
      status: 'Ongoing'
    },
    {
      id: 6,
      title: 'Luxury Penthouse',
      category: 'Residential',
      location: 'Alipore, Kolkata',
      year: '2022',
      size: '6,500 sq ft',
      clients: 'Mr. Rajesh Agarwal',
      image: villaImage,
      description: 'Opulent penthouse design with panoramic city views, premium materials, and bespoke furniture.',
      features: ['5 Bedrooms', 'Private Elevator', 'Terrace Pool', 'Wine Cellar'],
      status: 'Completed'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Interior Design', 'Landscape'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Homepage Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
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
              <span className="text-white text-xs sm:text-sm font-clean-medium">Exceptional Design Portfolio</span>
            </div>

            {/* Main Headline */}
            <div className="relative mb-4 sm:mb-6 md:mb-8">
              <h1
                className="font-main-heading text-gold relative z-20"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 8rem)',
                  lineHeight: '0.8'
                }}
              >
                Our Projects
              </h1>

              <div
                className="text-white font-bold font-sans relative z-10"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 4rem)',
                  marginTop: '-0.3em'
                }}
              >
                Crafted with Passion
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 sm:mb-8 md:mb-10 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 font-paragraph">
              Explore our collection of exceptional architectural and interior design projects
              that showcase our commitment to excellence and innovation.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-gold/30 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-gold/20 rounded-lg rotate-45 animate-pulse hidden lg:block"></div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-charcoal/90 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-gold" />
              <span className="text-white font-sub-heading text-lg">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={activeFilter === category
                    ? "bg-gold border-gold text-white hover:bg-gold-light font-clean-medium"
                    : "border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-500 font-clean-medium"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/30 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl group animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-premium"
                  />
                  <div className="absolute top-4 left-4 space-x-2">
                    <Badge className="bg-gold text-white">
                      {project.category}
                    </Badge>
                    <Badge
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed'
                        ? 'bg-green-500 text-white'
                        : 'bg-orange-500 text-white'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-sub-heading text-white mb-2 group-hover:text-gold transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed font-paragraph">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span className="text-sm text-white/60 font-clean">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-sm text-white/60 font-clean">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square className="w-4 h-4 text-gold" />
                      <span className="text-sm text-white/60 font-clean">{project.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="text-sm text-white/60 font-clean">{project.clients}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-sub-heading text-gold mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to={`/projects/${project.id}`}>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-gold/30 text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 font-clean-medium"
                    >
                      View Project Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-white"
            >
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gold to-gold-light p-12 rounded-2xl text-white text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-main-heading mb-6">
              Ready to Create Your Dream Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto font-paragraph">
              Let's discuss how we can bring your vision to life with our expertise
              in architecture and interior design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-gold hover:bg-gray-100 font-clean-medium"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-clean-medium"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;