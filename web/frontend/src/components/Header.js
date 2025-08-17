import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = ({ user, logout }) => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'analytics', 'pricing', 'testimonials'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Qryzo</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`transition-colors ${activeSection === 'home' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className={`transition-colors ${activeSection === 'features' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className={`transition-colors ${activeSection === 'pricing' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('analytics')} 
              className={`transition-colors ${activeSection === 'analytics' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className={`transition-colors ${activeSection === 'testimonials' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  {user.picture && (
                    <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                  )}
                  <span className="text-gray-700">{user.name}</span>
                </div>
                <button 
                  onClick={logout}
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <button 
                onClick={() => window.location.href = 'http://localhost:3000/auth/google'}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Login
              </button>
            )}
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Generate QR
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;