
import React from 'react';
import { ChevronDown, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative px-0 md:px-20 lg:px-40 h-screen flex items-center bg-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-6 z-10 animate-fade-in">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-center gap-8">
          <div className="md:order-2 md:mb-0">
            <div className="rounded-[20px] border-4 border-gold overflow-hidden w-48 h-64 md:w-72 md:h-96 shadow-xl ">
              <img 
                // src="/lovable-uploads/a1c96d3b-f339-46a8-a6a0-5d4ec17513e0.png" 
                alt="Akshit Bakshi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="max-w-2xl md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 md:mb-4">
              Akshit Bakshi
            </h1>
            <h2 className="text-2xl md:text-4xl font-display mb-4 md:mb-4 text-gold">
              Investment Banking & Valuation Enthusiast
            </h2>
            <p className="text-lg md:text-xl mb-4 max-w-2xl leading-relaxed">
              Corporate Finance | Index Valuation | Financial Modeling | MBA Finance '25
              Seeking to leverage analytical skills and financial knowledge in Investment Banking, Valuation, and M&A.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start space-x-6 mb-8">
              <a href="https://www.linkedin.com/in/akshit-bakshi-linkdin/" className="text-white hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:akshitbakshi67@gmail.com" className="text-white hover:text-gold transition-colors">
                <Mail size={24} />
              </a>
            </div>
            
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
