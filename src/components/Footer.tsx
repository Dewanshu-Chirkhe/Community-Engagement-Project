
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-ngo-blue">
              ConnectNGO
            </Link>
            <p className="mt-4 text-gray-600">
              Connecting people in need with NGOs that can help, creating a world where help is always within reach.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-ngo-blue transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-ngo-blue transition-all">
                  Find Help
                </Link>
              </li>
              <li>
                <Link to="/post-issue" className="text-gray-600 hover:text-ngo-blue transition-all">
                  Post an Issue
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-ngo-blue transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-ngo-blue transition-all">
                  Health & Medical
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-ngo-blue transition-all">
                  Disaster Relief
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-ngo-blue transition-all">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-ngo-blue transition-all">
                  Housing & Shelter
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-ngo-blue flex-shrink-0 mt-1" />
                <span className="text-gray-600">
                  123 Main Street, San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-ngo-blue flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-ngo-blue flex-shrink-0" />
                <span className="text-gray-600">hello@connectngo.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ConnectNGO. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-600 text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-ngo-pink" /> for a better world
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
