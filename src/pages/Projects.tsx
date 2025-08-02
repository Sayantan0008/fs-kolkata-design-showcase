import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Square, ArrowRight, Filter } from 'lucide-react';
import villaImage from '@/assets/villa-project.jpg';
import interiorImage from '@/assets/interior-design.jpg';
import salonImage from '@/assets/salon-project.jpg';
import commercialImage from '@/assets/commercial-project.jpg';
import landscapeImage from '@/assets/landscape-project.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Explore our collection of exceptional architectural and interior design projects 
              that showcase our commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={activeFilter === category 
                    ? "bg-gold hover:bg-gold-light text-white" 
                    : "hover:bg-gold hover:text-white transition-premium"
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover-lift transition-premium shadow-premium animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-gold transition-premium">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground">{project.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="text-sm text-muted-foreground">{project.clients}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-premium"
                  >
                    View Project Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gold to-gold-light p-12 rounded-2xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Dream Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise 
              in architecture and interior design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-gold hover:bg-gray-100"
              >
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;