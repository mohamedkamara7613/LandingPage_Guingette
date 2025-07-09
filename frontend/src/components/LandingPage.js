import React, { useState } from 'react';
import Hero from './Hero';
import About from './About';
import Gallery from './Gallery';
import VideoSection from './VideoSection';
import Reservation from './Reservation';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      <Hero />
      <About />
      <Gallery />
      <VideoSection />
      <Reservation />
      <Footer />
    </div>
  );
};

export default LandingPage;