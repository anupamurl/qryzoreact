import React from 'react';
import { motion } from 'framer-motion';

const Analytics = () => {
  const stats = [
    { label: 'Scans Today', value: '2,847', change: '+12%' },
    { label: 'Total Codes', value: '156', change: '+8%' },
    { label: 'Locations', value: '23', change: '+15%' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real-time Analytics Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded">
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
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Scan Activity</h3>
          <div className="h-64 bg-gray-50 rounded-xl flex items-end justify-center space-x-2 p-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-primary-500 rounded-t"
                style={{
                  height: `${Math.random() * 80 + 20}%`,
                  width: '20px'
                }}
              />
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-4">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;