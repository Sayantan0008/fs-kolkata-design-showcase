import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Target, Award, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge design solutions and modern technology'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior quality in every project, exceeding client expectations'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by genuine love for creating beautiful, functional spaces'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Building trust through transparent processes and honest communication'
    }
  ];

  const teamMembers = [
    {
      name: 'Founder & Principal Architect',
      title: 'B.Arch, M.Plan',
      experience: '15+ Years Experience',
      specialization: 'Residential & Commercial Architecture'
    },
    {
      name: 'Lead Interior Designer',
      title: 'B.Des Interior Design',
      experience: '10+ Years Experience',
      specialization: 'Luxury Interiors & Space Planning'
    },
    {
      name: 'Structural Engineer',
      title: 'B.Tech Civil Engineering',
      experience: '12+ Years Experience',
      specialization: 'Structural Design & Analysis'
    }
  ];

  const achievements = [
    'Best Residential Project Award 2023',
    'Excellence in Interior Design 2022',
    'Sustainable Architecture Recognition 2021',
    'Client Choice Award 2020-2023'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About F.S. Infrastructure
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90">
              Transforming architectural dreams into reality since 2009. We are passionate designers, 
              innovative architects, and dedicated professionals committed to creating extraordinary spaces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">15+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">300+</div>
                <div className="text-gray-300">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  F.S. Infrastructure was founded in 2009 with a vision to revolutionize the architectural 
                  and interior design landscape in Kolkata. What started as a small studio has grown into 
                  one of the most trusted design firms in Eastern India.
                </p>
                <p>
                  Our founder, with over 15 years of experience in architecture and urban planning, 
                  established the company with a commitment to creating spaces that are not only 
                  aesthetically pleasing but also functionally superior and environmentally conscious.
                </p>
                <p>
                  Today, we are proud to have completed over 500 projects ranging from luxury residences 
                  to commercial complexes, each reflecting our core values of innovation, excellence, 
                  and client satisfaction.
                </p>
              </div>
              <Button size="lg" className="mt-8 bg-gradient-to-r from-gold to-gold-light">
                View Our Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="animate-slide-up">
              <Card className="shadow-premium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    To create exceptional architectural and interior design solutions that enhance 
                    the quality of life for our clients while setting new standards of excellence 
                    in the industry.
                  </p>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-foreground mb-3">Our Vision</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To be recognized as the leading architectural and interior design firm in 
                      Eastern India, known for innovative solutions, exceptional service, and 
                      sustainable design practices.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center hover-lift transition-premium shadow-premium animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the talented professionals who bring creativity, expertise, and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="text-center hover-lift transition-premium shadow-premium animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-navy to-charcoal rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {member.name}
                  </CardTitle>
                  <p className="text-gold font-medium">{member.title}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground font-medium">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-r from-gold to-gold-light p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center space-x-3 justify-center">
                  <Award className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create something extraordinary together. 
              Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-charcoal">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;