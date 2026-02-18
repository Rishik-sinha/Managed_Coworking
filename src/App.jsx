import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandLogos from './components/BrandLogos';
import Values from './components/Values';
import ExploreSpaces from './components/ExploreSpaces';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden scroll-smooth">
      <Navbar />
      <div id="hero"><Hero /></div>
      <BrandLogos />
      <div id="values"><Values /></div>
      <div id="spaces"><ExploreSpaces /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="pricing"><Pricing /></div>
      <div id="contact"><Footer /></div>
    </div>
  );
}

export default App;