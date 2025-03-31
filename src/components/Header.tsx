
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-navy/80 py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-display font-bold text-gold">
          Akshit Bakshi
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${isScrolled ? 'text-navy' : 'text-white'} hover:text-gold transition-colors font-medium`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute w-full py-4">
          <div className="flex flex-col space-y-4 px-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-navy hover:text-gold transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
