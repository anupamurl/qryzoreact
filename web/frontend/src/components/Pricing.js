import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: ['5 QR codes', 'Basic analytics', 'Standard support'],
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      features: ['Unlimited QR codes', 'Advanced analytics', 'Custom branding', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$49',
      period: '/month',
      features: ['Everything in Pro', 'API access', 'Team collaboration', 'Dedicated support'],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
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
            Simple, <span className="neon-purple">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative glass p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 group ${
                plan.popular
                  ? 'border-blue-400/50 bg-blue-500/10 scale-105 shadow-2xl shadow-blue-500/20'
                  : 'border-white/10 glass-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-blue transition-all duration-300">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-white/60 text-lg">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                      <motion.svg 
                        className="w-5 h-5 text-blue-400 mr-3" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </motion.svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/30'
                      : 'glass glass-hover text-white border border-white/20 hover:border-white/40'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;