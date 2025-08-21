import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Smart QR Generation',
      description: 'Create QR codes instantly with customizable designs, colors, and logos for your brand.'
    },
    {
      icon: '📊',
      title: 'Analytics & Tracking',
      description: 'Track scans, locations, devices, and user behavior with detailed real-time analytics.'
    },
    {
      icon: '🎨',
      title: 'Custom Branding',
      description: 'Add your logo, customize colors, and create branded QR codes that match your identity.'
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Powerful Features for{' '}
            <span className="neon-purple">Modern Businesses</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to create, manage, and track QR codes at scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass glass-hover p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:-translate-y-2 group"
            >
              <motion.div 
                className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-blue transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;