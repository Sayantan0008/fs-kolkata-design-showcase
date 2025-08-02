import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { MapPin, Phone, Mail, Clock, MessageCircle, CalendarIcon, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, appointmentDate: date });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        '123 Architecture Street',
        'Salt Lake, Kolkata - 700091',
        'West Bengal, India'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 98765 43210',
        '+91 87654 32109',
        'Toll Free: 1800-123-4567'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@fsinfrastructure.com',
        'projects@fsinfrastructure.com',
        'careers@fsinfrastructure.com'
      ]
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 7:00 PM',
        'Sunday: By Appointment',
        'Emergency: 24/7 Support'
      ]
    }
  ];

  const services = [
    'Interior Design',
    'Architectural Design',
    '2D/3D Layouts',
    'Commercial Design',
    'Landscape Design',
    'Product/Logo Design',
    'Consultation Only'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    'Above ₹10,00,000',
    'To be discussed'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Ready to transform your space? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-premium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Start Your Project
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Required *</Label>
                        <Select onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Project Budget</Label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Appointment Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements, timeline, and any specific preferences..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-gold to-gold-light hover:shadow-premium-gold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className="hover-lift transition-premium shadow-premium animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* WhatsApp Card */}
              <Card className="bg-green-50 border-green-200 hover-lift transition-premium">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">Quick Chat</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Get instant responses to your queries
                      </p>
                      <Button 
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Visit Our Studio
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Kolkata, our studio is designed to inspire creativity and collaboration.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-premium overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                <p className="text-xl font-semibold text-foreground mb-2">Interactive Map</p>
                <p className="text-muted-foreground">123 Architecture Street, Salt Lake, Kolkata</p>
                <Button 
                  className="mt-4 bg-gold hover:bg-gold-light"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;