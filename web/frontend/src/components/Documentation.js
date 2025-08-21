import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Documentation = ({ user, logout }) => {
  const sections = [
    { title: 'Getting Started', icon: 'fas fa-play', content: 'Quick start guide to begin using Qryzo services.' },
    { title: 'QR Code Generation', icon: 'fas fa-qrcode', content: 'Learn how to create and customize QR codes.' },
    { title: 'Analytics Dashboard', icon: 'fas fa-chart-bar', content: 'Understanding your QR code performance metrics.' },
    { title: 'Integration Guide', icon: 'fas fa-plug', content: 'Integrate Qryzo with your existing systems.' }
  ];

  return (
    <div className="min-h-screen animated-gradient">
      <Header user={user} logout={logout} />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="./cryzo.png" alt="Qryzo" className="h-16 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-blue">Documentation</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to know about using Qryzo effectively.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="glass glass-hover rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <i className={`${section.icon} text-2xl text-blue-400 mr-4`}></i>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  {section.content}
                </p>
                <motion.div
                  className="flex items-center text-blue-400 font-medium"
                  whileHover={{ x: 5 }}
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-purple">
              <i className="fas fa-question-circle mr-2"></i>Need Help?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Can't find what you're looking for? Our support team is here to help you get the most out of Qryzo.
            </p>
            <motion.button
              className="glass glass-hover px-6 py-3 rounded-lg text-white font-medium border border-blue-400/30 hover:border-blue-400/60"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-headset mr-2"></i>Contact Support
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;