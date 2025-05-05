
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname.includes('/blog');

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
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full px-4 md:px-20 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-navy/90 py-6'}`}>
      <div className="container mx-auto px-0 md:px-6 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-display font-bold text-gold">
          Akshit Bakshi
        </Link>

        {/* Desktop Navigation - Hide on blog pages */}
        {!isBlogPage && (
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
        )}

        {/* Mobile Menu Button - Hide on blog pages */}
        {!isBlogPage && (
          <button
            className={`md:hidden ${isScrolled ? 'text-navy' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Navigation - Hide on blog pages */}
      {!isBlogPage && mobileMenuOpen && (
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
