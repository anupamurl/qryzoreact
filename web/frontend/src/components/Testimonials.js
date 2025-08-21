import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Owner',
      company: 'TechZone Electronics',
      content: 'Qryzo helped us create QR codes for product warranties and customer support. Our customers love the quick access to manuals.',
      avatar: 'RK'
    },
    {
      name: 'Amit Sharma',
      role: 'Manager',
      company: 'AutoCare Garage',
      content: 'Perfect for sharing service history and booking appointments. Our customers can easily access their car service records.',
      avatar: 'AS'
    },
    {
      name: 'Priya Patel',
      role: 'Owner',
      company: 'AquaPure Water Systems',
      content: 'We use QR codes for installation guides and maintenance schedules. It has streamlined our customer service process.',
      avatar: 'PP'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
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
            Trusted by <span className="neon-blue">businesses</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See what our customers have to say about their experience with Qryzo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass glass-hover p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <h4 className="font-bold text-white text-lg group-hover:neon-blue transition-all duration-300">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm font-medium">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">"{testimonial.content}"</p>
              <div className="flex items-center mt-6">
                <div className="flex text-yellow-400 mr-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-400'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2, rotate: 72 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <span className="text-white/60 text-sm">4/5</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;