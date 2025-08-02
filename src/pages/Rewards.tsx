import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Users, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

const Rewards = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        referralFirstName: '',
        referralLastName: '',
        referralPhone: '',
        referralEmail: '',
        relationship: '',
        serviceNeeded: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const services = [
        'Residential Design',
        'Interior Design',
        'Architectural Design',
        'Commercial Design',
        'Logo',
        'Product Design',
        'Architectural & Commercial Plan',
        '2D Plan & Layout',
        'Sanction Plan / Asmade Plan'
    ];

    return (
        <div className="min-h-screen bg-royal-gradient pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
                    <div className="text-center animate-fade-in">
                        {/* Company Logo */}
                        <div className="flex justify-center mb-8">
                            <img
                                src="/logo.png"
                                alt="F.S. Infrastructure Logo"
                                className="w-24 h-20 sm:w-32 sm:h-24 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:w-56 xl:h-40 object-contain animate-scale-in"
                            />
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-main-heading text-gradient-gold mb-6 animate-slide-up">
                            Refer Your Friends
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sub-heading text-gold-light mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            In 3 Easy Steps
                        </p>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up font-paragraph" style={{ animationDelay: '0.4s' }}>
                            Earn ₹10,000 for every successful referral when your friend reaches the 50% payment milestone
                        </p>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Step 1 */}
                        <Card className="bg-card/50 backdrop-blur-sm border-gold/20 hover-royal animate-fade-in" style={{ animationDelay: '0.6s' }}>
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-black" />
                                </div>
                                <CardTitle className="text-xl font-sub-heading text-gold">YOU REFER A FRIEND</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground">Fill out this form with your friend's details.</p>
                            </CardContent>
                        </Card>

                        {/* Step 2 */}
                        <Card className="bg-card/50 backdrop-blur-sm border-gold/20 hover-royal animate-fade-in" style={{ animationDelay: '0.8s' }}>
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-black" />
                                </div>
                                <CardTitle className="text-xl font-sub-heading text-gold">START THE DESIGN</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground">Start interior/architectural design.</p>
                            </CardContent>
                        </Card>

                        {/* Step 3 */}
                        <Card className="bg-card/50 backdrop-blur-sm border-gold/20 hover-royal animate-fade-in" style={{ animationDelay: '1s' }}>
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                                    <DollarSign className="w-8 h-8 text-black" />
                                </div>
                                <CardTitle className="text-xl font-sub-heading text-gold">YOU EARN ₹10,000!</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground">Once your friend hits the 50% payment milestone!</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Referral Form */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-md border-gold/30 animate-scale-in" style={{ animationDelay: '1.2s' }}>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-main-heading text-gradient-gold mb-2">Referral Form</CardTitle>
                            <p className="text-muted-foreground">Fill in the details below to refer your friend</p>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Your Details */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-sub-heading text-gold border-b border-gold/20 pb-2">Your Details</h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-foreground font-medium">
                                                Your Name *
                                            </Label>
                                            <div className="grid grid-cols-2 gap-3">
                                                <Input
                                                    id="firstName"
                                                    placeholder="First"
                                                    value={formData.firstName}
                                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                    className="bg-input/50 border-gold/20 focus:border-gold"
                                                    required
                                                />
                                                <Input
                                                    placeholder="Last"
                                                    value={formData.lastName}
                                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                    className="bg-input/50 border-gold/20 focus:border-gold"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-foreground font-medium">
                                                Your Numbers *
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                                className="bg-input/50 border-gold/20 focus:border-gold"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-foreground font-medium">
                                            Your Email *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="bg-input/50 border-gold/20 focus:border-gold"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Referral Details */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-sub-heading text-gold border-b border-gold/20 pb-2">Referral Details</h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="referralFirstName" className="text-foreground font-medium">
                                                Referral's Name *
                                            </Label>
                                            <div className="grid grid-cols-2 gap-3">
                                                <Input
                                                    id="referralFirstName"
                                                    placeholder="First"
                                                    value={formData.referralFirstName}
                                                    onChange={(e) => handleInputChange('referralFirstName', e.target.value)}
                                                    className="bg-input/50 border-gold/20 focus:border-gold"
                                                    required
                                                />
                                                <Input
                                                    placeholder="Last"
                                                    value={formData.referralLastName}
                                                    onChange={(e) => handleInputChange('referralLastName', e.target.value)}
                                                    className="bg-input/50 border-gold/20 focus:border-gold"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="referralPhone" className="text-foreground font-medium">
                                                Referral's Numbers *
                                            </Label>
                                            <Input
                                                id="referralPhone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={formData.referralPhone}
                                                onChange={(e) => handleInputChange('referralPhone', e.target.value)}
                                                className="bg-input/50 border-gold/20 focus:border-gold"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="referralEmail" className="text-foreground font-medium">
                                            Referral's Email *
                                        </Label>
                                        <Input
                                            id="referralEmail"
                                            type="email"
                                            placeholder="referral.email@example.com"
                                            value={formData.referralEmail}
                                            onChange={(e) => handleInputChange('referralEmail', e.target.value)}
                                            className="bg-input/50 border-gold/20 focus:border-gold"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="relationship" className="text-foreground font-medium">
                                            What's Your Relationship With This Person? *
                                        </Label>
                                        <Input
                                            id="relationship"
                                            placeholder="e.g., Friend, Colleague, Family Member"
                                            value={formData.relationship}
                                            onChange={(e) => handleInputChange('relationship', e.target.value)}
                                            className="bg-input/50 border-gold/20 focus:border-gold"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="serviceNeeded" className="text-foreground font-medium">
                                            What They Want From F.S.Infrastructure? *
                                        </Label>
                                        <Select value={formData.serviceNeeded} onValueChange={(value) => handleInputChange('serviceNeeded', value)}>
                                            <SelectTrigger className="bg-input/50 border-gold/20 focus:border-gold">
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-card border-gold/20">
                                                {services.map((service) => (
                                                    <SelectItem key={service} value={service} className="hover:bg-gold/10">
                                                        {service}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-black font-royal font-semibold py-4 text-lg transition-royal hover:shadow-gold-glow"
                                >
                                    Submit Referral
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
            {/* Terms & Conditions */}
            <section className="py-16 bg-card/20">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <Card className="max-w-4xl mx-auto bg-card/60 backdrop-blur-sm border-gold/20 animate-fade-in" style={{ animationDelay: '1.4s' }}>
                        <CardHeader>
                            <CardTitle className="text-2xl font-royal text-gradient-gold text-center">Terms & Conditions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <div className="text-center mb-6">
                                <img
                                    src="/logo.png"
                                    alt="F.S. Infrastructure Logo"
                                    className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 mx-auto mb-4 object-contain"
                                />
                                <p className="text-lg font-elegant text-gold">
                                    F.S.Infrastructure is an Interior & Architectural design company, based in Kolkata, India.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            A successful referral is a referred customer who places an order with F.S.Infrastructure and pays 100% of the total order value and gets the order delivered.
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            If you are an existing customer of F.S.Infrastructure (who has placed at least one order), you are eligible to earn extra income as referral bonus.
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            If you have not placed any order with F.S.Infrastructure yet (not an existing customer), and you share a successful referral, you will get 50% of the referral bonus.
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            You can earn up to Rs.10,000 as referral bonus per successful referral (5% of order value).
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            Your payment will be processed as soon as your referred person makes a complete order.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            Your payment will be processed directly to the account linked with your profile.
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            Minimum value of referred order should be Rs. 20,000.
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            Customers who are already existing in the F.S.Infrastructure data system will not be considered as a successful referral.
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            Referral bonus cannot be combined or adjusted against any existing payment.
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            F.S.Infrastructure, Interior & Architectural design company reserves all the rights to end any or all offers at its sole decision without any prior notice.
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">
                                            F.S.Infrastructure, Interior & Architectural design company of Kolkata reserves the right to deny any suspected illegitimate case.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <div className="animate-fade-in" style={{ animationDelay: '1.6s' }}>
                        <h2 className="text-3xl font-main-heading text-gradient-gold mb-4">
                            Ready to Start Earning?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join our referral program today and start earning rewards for every successful referral you make.
                        </p>
                        <Button
                            onClick={() => document.getElementById('referralFirstName')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-black font-royal font-semibold px-8 py-4 text-lg transition-royal hover:shadow-gold-glow"
                        >
                            <Gift className="w-5 h-5 mr-2" />
                            Start Referring Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rewards;