import React from 'react';
import Hero from '@/components/sections/Hero';
import ServiceHighlights from '@/components/sections/ServiceHighlights';
import AboutFounder from '@/components/sections/AboutFounder';
import ProjectCategories from '@/components/sections/ProjectCategories';
import Testimonials from '@/components/sections/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceHighlights />
      <AboutFounder />
      <ProjectCategories />
      <Testimonials />
    </div>
  );
};

export default Home;