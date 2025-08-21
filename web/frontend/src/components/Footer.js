import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/90"></div>
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle at 70% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 70%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <motion.h3 
              className="text-3xl font-black mb-6 neon-blue"
              whileHover={{ scale: 1.05 }}
            >
              Qryzo
            </motion.h3>
            <p className="text-white/70 leading-relaxed text-lg">
              The modern solution for QR code generation, tracking, and analytics.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Product</h4>
            <ul className="space-y-3 text-white/60">
              <li><motion.a href="#features" className="hover:text-white hover:neon-blue transition-all duration-300" whileHover={{ x: 5 }}>Features</motion.a></li>
              <li><motion.a href="#pricing" className="hover:text-white hover:neon-blue transition-all duration-300" whileHover={{ x: 5 }}>Pricing</motion.a></li>
              <li><motion.a href="#docs" className="hover:text-white hover:neon-blue transition-all duration-300" whileHover={{ x: 5 }}>Documentation</motion.a></li>
              <li><motion.a href="#api" className="hover:text-white hover:neon-blue transition-all duration-300" whileHover={{ x: 5 }}>API</motion.a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Company</h4>
            <ul className="space-y-3 text-white/60">
              <li><motion.a href="#about" className="hover:text-white hover:neon-purple transition-all duration-300" whileHover={{ x: 5 }}>About</motion.a></li>
              <li><motion.a href="#contact" className="hover:text-white hover:neon-purple transition-all duration-300" whileHover={{ x: 5 }}>Contact</motion.a></li>
              <li><motion.a href="#careers" className="hover:text-white hover:neon-purple transition-all duration-300" whileHover={{ x: 5 }}>Careers</motion.a></li>
              <li><motion.a href="#blog" className="hover:text-white hover:neon-purple transition-all duration-300" whileHover={{ x: 5 }}>Blog</motion.a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Connect</h4>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-12 h-12 glass glass-hover rounded-xl flex items-center justify-center border border-white/10"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              >
                <span className="text-white font-bold">𝕏</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 glass glass-hover rounded-xl flex items-center justify-center border border-white/10"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }}
              >
                <span className="text-white font-bold">in</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 glass glass-hover rounded-xl flex items-center justify-center border border-white/10"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              >
                <span className="text-white font-bold">gh</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 font-medium">
            © 2025 Qryzo. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <motion.a 
              href="#privacy" 
              className="text-white/60 hover:text-white hover:neon-blue transition-all duration-300 font-medium"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#terms" 
              className="text-white/60 hover:text-white hover:neon-purple transition-all duration-300 font-medium"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;