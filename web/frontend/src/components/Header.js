import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfileDropdown from './ProfileDropdown';

const Header = ({ user, logout }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
      return;
    }
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
    let scrollTimeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
      
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 glass border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        x: isScrolling ? [0, -1, 1, -1, 1, 0] : 0
      }}
      transition={{ 
        y: { duration: 0.6 },
        x: { duration: 0.3, ease: "easeInOut" }
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
            <img src="./cryzo.png" alt="Qryzo" className="h-8 w-auto mr-2" onError={(e) => e.target.style.display = 'none'} />
           
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.button 
              onClick={() => window.location.href = '/'} 
              className={`transition-all duration-300 font-medium ${activeSection === 'home' ? 'neon-blue' : 'text-white/80 hover:text-white hover:scale-105'}`}
              whileHover={{ y: -2 }}
            >
              Home
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('features')} 
              className={`transition-all duration-300 font-medium ${activeSection === 'features' ? 'neon-blue' : 'text-white/80 hover:text-white hover:scale-105'}`}
              whileHover={{ y: -2 }}
            >
              Features
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('pricing')} 
              className={`transition-all duration-300 font-medium ${activeSection === 'pricing' ? 'neon-blue' : 'text-white/80 hover:text-white hover:scale-105'}`}
              whileHover={{ y: -2 }}
            >
              Pricing
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('analytics')} 
              className={`transition-all duration-300 font-medium ${activeSection === 'analytics' ? 'neon-blue' : 'text-white/80 hover:text-white hover:scale-105'}`}
              whileHover={{ y: -2 }}
            >
              Dashboard
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('testimonials')} 
              className={`transition-all duration-300 font-medium ${activeSection === 'testimonials' ? 'neon-blue' : 'text-white/80 hover:text-white hover:scale-105'}`}
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <ProfileDropdown user={user} logout={logout} />
            ) : (
              <motion.button 
                onClick={() => window.location.href = 'http://localhost:3000/auth/google'}
                className="glass glass-hover px-6 py-2 rounded-lg text-white font-medium border border-blue-400/30 hover:border-blue-400/60"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;