
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-ngo-blue transition-all hover:opacity-80"
        >
          ConnectNGO
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-ngo-blue transition-all">
            Home
          </Link>
          <Link to="/categories" className="text-gray-800 hover:text-ngo-blue transition-all">
            Find Help
          </Link>
          <Link to="/post-issue" className="text-gray-800 hover:text-ngo-blue transition-all">
            Post an Issue
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-ngo-blue transition-all">
            Contact
          </Link>
          <Button variant="primary">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="py-2 text-gray-800 hover:text-ngo-blue transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/categories" 
              className="py-2 text-gray-800 hover:text-ngo-blue transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Help
            </Link>
            <Link 
              to="/post-issue" 
              className="py-2 text-gray-800 hover:text-ngo-blue transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Post an Issue
            </Link>
            <Link 
              to="/contact" 
              className="py-2 text-gray-800 hover:text-ngo-blue transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              variant="primary" 
              className="w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
