import React from 'react';
import { motion } from 'framer-motion';

const Analytics = () => {
  const stats = [
    { label: 'Scans Today', value: '2,847', change: '+12%' },
    { label: 'Total Codes', value: '156', change: '+8%' },
    { label: 'Locations', value: '23', change: '+15%' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 60% 40%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
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
            Real-time <span className="neon-blue">Analytics</span> Dashboard
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get insights into your QR code performance with detailed analytics
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass glass-hover p-6 rounded-2xl border border-white/10 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-wide">{stat.label}</p>
                  <motion.p 
                    className="text-3xl font-black text-white mt-2 group-hover:neon-blue transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.p>
                </div>
                <span className="text-green-400 text-sm font-bold bg-green-400/20 px-3 py-1 rounded-full border border-green-400/30">
                  {stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border border-white/10 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 neon-purple">Scan Activity</h3>
          <div className="h-64 glass rounded-2xl flex items-end justify-center space-x-2 p-6 border border-white/10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-blue-500 to-purple-600 rounded-t shadow-lg"
                style={{
                  height: `${Math.random() * 80 + 20}%`,
                  width: '20px'
                }}
              />
            ))}
          </div>
          <div className="flex justify-between text-sm text-white/60 mt-6 font-semibold">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;