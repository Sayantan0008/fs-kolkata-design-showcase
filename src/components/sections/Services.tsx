import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, Layout, Store, TreePine, Palette, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Interior Design',
      description: 'Transform your spaces with sophisticated interior solutions that blend functionality with aesthetic appeal.',
      features: ['Residential Interiors', 'Space Planning', 'Furniture Selection', 'Color Consultation'],
      price: 'Starting from ₹50,000'
    },
    {
      icon: Building,
      title: 'Architectural Design',
      description: 'Comprehensive architectural services from concept to completion for residential and commercial projects.',
      features: ['Building Design', 'Structural Planning', 'Code Compliance', 'Construction Drawings'],
      price: 'Starting from ₹2,00,000'
    },
    {
      icon: Layout,
      title: '2D/3D Layouts',
      description: 'Detailed visual representations and realistic renderings to help you visualize your project.',
      features: ['Floor Plans', '3D Visualization', 'Virtual Tours', 'Elevation Drawings'],
      price: 'Starting from ₹15,000'
    },
    {
      icon: Store,
      title: 'Commercial Design',
      description: 'Professional commercial spaces that enhance brand identity and optimize business functionality.',
      features: ['Office Design', 'Retail Spaces', 'Restaurant Design', 'Healthcare Facilities'],
      price: 'Starting from ₹1,50,000'
    },
    {
      icon: TreePine,
      title: 'Landscape Design',
      description: 'Beautiful outdoor spaces that complement your architecture and create serene environments.',
      features: ['Garden Design', 'Outdoor Lighting', 'Hardscape Planning', 'Plant Selection'],
      price: 'Starting from ₹75,000'
    },
    {
      icon: Palette,
      title: 'Product/Logo Design',
      description: 'Creative branding solutions and product design services to establish your unique identity.',
      features: ['Logo Design', 'Brand Identity', 'Product Design', 'Marketing Materials'],
      price: 'Starting from ₹25,000'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive design solutions tailored to transform your vision into extraordinary spaces. 
            From concept to completion, we deliver excellence in every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`hover-lift transition-premium shadow-premium animate-slide-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-premium">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t">
                  <div className="text-lg font-semibold text-gold mb-4">
                    {service.price}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-premium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold to-gold-light p-8 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Dream Project?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get a free consultation and personalized quote for your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-gold hover:bg-gray-100"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;