import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient"></div>
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-black text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Generate, Track &{' '}
              <motion.span 
                className="neon-blue"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.5)',
                    '0 0 20px rgba(59, 130, 246, 0.8)',
                    '0 0 10px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Manage
              </motion.span>{' '}
              <br />QR Codes Effortlessly
            </motion.h1>
            <motion.p 
              className="mt-8 text-xl text-white/80 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Create professional QR codes with advanced analytics and tracking. 
              Perfect for businesses, marketing campaigns, and personal use.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Create My QR Code
              </motion.button>
              <motion.button 
                className="glass glass-hover px-10 py-4 rounded-2xl font-bold text-lg text-white border border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(255, 255, 255, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - QR Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass p-8 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Background Pattern */}
              <motion.div
                initial={{ opacity: 0.2 }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity
                }}
                className="absolute inset-0 z-0"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))',
                  filter: 'blur(30px)'
                }}
              />

              {/* QR Code Container */}
              <motion.div 
                className="w-64 h-64 glass rounded-2xl flex items-center justify-center relative z-10 border border-white/30"
              >
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        backgroundColor: Math.random() > 0.5 ? '#3b82f6' : 'rgba(255, 255, 255, 0.9)'
                      }}
                      transition={{ 
                        duration: 0.2,
                        delay: i * 0.01,
                        type: "spring"
                      }}
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: '#60a5fa',
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
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
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent z-20"
                style={{ 
                  filter: 'blur(1px)',
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
                }}
              />

              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-6 text-white/80 font-semibold relative z-10 tracking-wide"
              >
                Live QR Preview
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;