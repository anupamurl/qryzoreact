import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Generate, Track & Manage{' '}
              <span className="text-primary-600">QR Codes</span>{' '}
              Effortlessly
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Create professional QR codes with advanced analytics and tracking. 
              Perfect for businesses, marketing campaigns, and personal use.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all transform hover:scale-105">
                Create My QR Code
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                See How It Works
              </button>
            </div>
          </motion.div>

          {/* Right Content - QR Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <motion.div
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.15, 0.1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity
                }}
                className="absolute inset-0 z-0"
                style={{
                  background: 'radial-gradient(circle at center, #3b82f6 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />

              {/* QR Code Container */}
              <motion.div 
                className="w-64 h-64 bg-white rounded-xl flex items-center justify-center relative z-10"
              >
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        backgroundColor: Math.random() > 0.5 ? '#1d4ed8' : '#ffffff'
                      }}
                      transition={{ 
                        duration: 0.2,
                        delay: i * 0.01,
                        type: "spring"
                      }}
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: '#3b82f6'
                      }}
                      className="w-3 h-3 rounded-sm"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Scan Effect */}
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 100 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent z-20"
                style={{ filter: 'blur(1px)' }}
              />

              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-4 text-gray-600 font-medium relative z-10"
              >
                Live QR Preview
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;