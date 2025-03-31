
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center bg-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-6 z-10 animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            John Smith
          </h1>
          <h2 className="text-2xl md:text-4xl font-display mb-8 text-gold">
            MBA Finance & Investment Banking
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            Analytical and detail-oriented finance professional with strong valuation, modeling, and market analysis skills. 
            Seeking to leverage my academic excellence and practical experience in a challenging Investment Banking role.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-3 bg-gold text-navy font-semibold rounded hover:bg-opacity-90 transition-all text-center"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-navy transition-all text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
