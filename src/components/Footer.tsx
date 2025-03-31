import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-display font-bold">John Smith</h2>
            <p className="text-gold">MBA Finance & Investment Banking</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} John Smith. All rights reserved.
            </p>
          </div>
          
          <div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <a href="#about" className="text-sm text-white/70 hover:text-gold transition-colors">
                About
              </a>
              <a href="#experience" className="text-sm text-white/70 hover:text-gold transition-colors">
                Experience
              </a>
              <a href="#portfolio" className="text-sm text-white/70 hover:text-gold transition-colors">
                Portfolio
              </a>
              <a href="#skills" className="text-sm text-white/70 hover:text-gold transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-sm text-white/70 hover:text-gold transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
