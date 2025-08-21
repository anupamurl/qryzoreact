import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const AboutUs = ({ user, logout }) => {
  return (
    <div className="min-h-screen animated-gradient">
      <Header user={user} logout={logout} />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="./logo.png" alt="Qryzo" className="h-16 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="neon-blue">Qryzo</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Revolutionizing QR code generation with cutting-edge analytics and innovative solutions.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-purple">Our Mission</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              At Qryzo, we believe QR code management should be accessible, actionable, and transformative. 
              Our platform empowers businesses to generate, track, and analyze QR codes with 
              intuitive analytics tools and real-time dashboards.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-purple">Why Choose Qryzo?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400"><i className="fas fa-lightbulb mr-2"></i>Innovation</h3>
                <p className="text-white/70">Cutting-edge QR code analytics powered by modern technology.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400"><i className="fas fa-mouse-pointer mr-2"></i>Simplicity</h3>
                <p className="text-white/70">Complex QR code management made simple with intuitive interfaces.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400"><i className="fas fa-shield-alt mr-2"></i>Security</h3>
                <p className="text-white/70">Enterprise-grade security for your QR code data.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400"><i className="fas fa-headset mr-2"></i>Support</h3>
                <p className="text-white/70">24/7 dedicated support for all your needs.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;