import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Calendar, Users, Square, Star } from 'lucide-react';
import villaImage from '@/assets/villa-project.jpg';
import interiorImage from '@/assets/interior-design.jpg';
import salonImage from '@/assets/salon-project.jpg';
import commercialImage from '@/assets/commercial-project.jpg';
import landscapeImage from '@/assets/landscape-project.jpg';
import heroImage from '@/assets/hero-architecture.jpg';

const ProjectDetails = () => {
    const { id } = useParams();
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Mock project data - in real app, this would come from API
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
            description: 'A stunning contemporary villa featuring modern architecture with traditional elements. The design seamlessly blends indoor and outdoor spaces, creating a harmonious living environment that reflects the clients\' sophisticated taste and lifestyle needs.',
            longDescription: 'This luxury villa project represents the perfect fusion of contemporary design principles with timeless architectural elements. Located in the prestigious Ballygunge area, the residence spans 4,500 square feet and showcases our commitment to creating spaces that are both functional and aesthetically remarkable. The design philosophy centered around creating seamless transitions between indoor and outdoor spaces, maximizing natural light, and incorporating sustainable design elements throughout.',
            features: ['4 Bedrooms', 'Swimming Pool', 'Home Theater', 'Landscaped Garden'],
            status: 'Completed',
            gallery: [villaImage, interiorImage, salonImage, commercialImage, landscapeImage, heroImage]
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
            longDescription: 'This executive apartment interior design project showcases our ability to transform compact urban spaces into sophisticated living environments. The design emphasizes clean lines, optimal space utilization, and a carefully curated color palette that creates a sense of calm and luxury.',
            features: ['3 Bedrooms', 'Open Kitchen', 'Study Room', 'Balcony Garden'],
            status: 'Completed',
            gallery: [interiorImage, villaImage, salonImage, commercialImage, landscapeImage, heroImage]
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
            longDescription: 'This premium salon design project demonstrates our expertise in commercial interior design. The space was carefully planned to optimize workflow while creating an luxurious atmosphere that enhances the customer experience.',
            features: ['12 Stations', 'VIP Rooms', 'Reception Area', 'Product Display'],
            status: 'Completed',
            gallery: [salonImage, villaImage, interiorImage, commercialImage, landscapeImage, heroImage]
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
            longDescription: 'This corporate office complex project showcases our ability to create productive work environments that inspire creativity and collaboration. The design incorporates sustainable materials and energy-efficient systems.',
            features: ['Open Workspaces', 'Meeting Rooms', 'Cafeteria', 'Terrace Garden'],
            status: 'Completed',
            gallery: [commercialImage, villaImage, interiorImage, salonImage, landscapeImage, heroImage]
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
            longDescription: 'This residential landscape design project demonstrates our commitment to sustainable and environmentally conscious design. The project features native plant species, water conservation systems, and spaces for community interaction.',
            features: ['Water Feature', 'Walking Path', 'Meditation Zone', 'Children\'s Play Area'],
            status: 'Ongoing',
            gallery: [landscapeImage, villaImage, interiorImage, salonImage, commercialImage, heroImage]
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
            longDescription: 'This luxury penthouse project represents the pinnacle of residential design excellence. Located in prestigious Alipore, the 6,500 square feet space features panoramic city views, premium imported materials, and custom-designed furniture pieces.',
            features: ['5 Bedrooms', 'Private Elevator', 'Terrace Pool', 'Wine Cellar'],
            status: 'Completed',
            gallery: [villaImage, interiorImage, salonImage, commercialImage, landscapeImage, heroImage]
        }
    ];

    const project = projects.find(p => p.id === parseInt(id || '1'));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-charcoal text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-main-heading text-gold mb-4">Project Not Found</h1>
                    <Link to="/projects">
                        <Button className="bg-gold hover:bg-gold-light text-white">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Projects
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-charcoal">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${project.image})`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal/90"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
                    <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        {/* Back Button */}
                        <div className="mb-8">
                            <Link to="/projects">
                                <Button
                                    variant="outline"
                                    className="border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-300"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Projects
                                </Button>
                            </Link>
                        </div>

                        {/* Tagline */}
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 mb-4 sm:mb-6 md:mb-8">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                            <span className="text-white text-xs sm:text-sm font-clean-medium">{project.category} Project</span>
                        </div>

                        {/* Project Title */}
                        <div className="relative mb-4 sm:mb-6 md:mb-8">
                            <h1
                                className="font-main-heading text-gold relative z-20"
                                style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 6rem)',
                                    lineHeight: '0.9'
                                }}
                            >
                                {project.title}
                            </h1>
                        </div>

                        {/* Project Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-3">
                                <MapPin className="w-4 h-4 text-gold" />
                                <span className="text-white text-sm font-clean">{project.location}</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-3">
                                <Calendar className="w-4 h-4 text-gold" />
                                <span className="text-white text-sm font-clean">{project.year}</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-3">
                                <Square className="w-4 h-4 text-gold" />
                                <span className="text-white text-sm font-clean">{project.size}</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-3">
                                <Users className="w-4 h-4 text-gold" />
                                <span className="text-white text-sm font-clean">{project.clients}</span>
                            </div>
                        </div>

                        {/* Status Badge */}
                        <Badge
                            className={`${project.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'} text-white px-4 py-2 text-sm`}
                        >
                            {project.status}
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Project Description */}
            <section className="py-20 bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-sub-heading text-gold mb-8 text-center">Project Overview</h2>
                        <p className="text-lg text-white/80 leading-relaxed font-paragraph text-center mb-12">
                            {project.longDescription}
                        </p>

                        {/* Features */}
                        <div className="text-center">
                            <h3 className="text-xl font-sub-heading text-gold mb-6">Key Features</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {project.features.map((feature) => (
                                    <Badge key={feature} variant="outline" className="border-gold/30 text-gold px-4 py-2">
                                        {feature}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            <section className="py-20 bg-charcoal/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-sub-heading text-gold mb-12 text-center">Project Gallery</h2>

                    {/* Main Selected Image */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="relative overflow-hidden rounded-lg shadow-2xl">
                            <img
                                src={project.gallery[selectedImage]}
                                alt={`${project.title} - Image ${selectedImage + 1}`}
                                className="w-full h-96 md:h-[500px] object-cover transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Gallery Grid - 2 images per row */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                        {project.gallery.map((image, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${selectedImage === index ? 'ring-2 ring-gold' : ''
                                    }`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} - Thumbnail ${index + 1}`}
                                    className="w-full h-24 md:h-32 object-cover transition-all duration-300 hover:brightness-110"
                                />
                                {selectedImage === index && (
                                    <div className="absolute inset-0 bg-gold/20 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-gold rounded-full"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-gold to-gold-light p-12 rounded-2xl text-white text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-sub-heading mb-6">
                            Inspired by This Project?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let's discuss how we can create something equally stunning for you.
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
                            <Link to="/projects">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10 font-clean-medium"
                                >
                                    View More Projects
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;