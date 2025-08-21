import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Careers = ({ user, logout }) => {
  const jobs = [
    { title: 'Senior Frontend Developer', location: 'Remote', type: 'Full-time' },
    { title: 'Data Scientist', location: 'San Francisco', type: 'Full-time' },
    { title: 'Product Manager', location: 'New York', type: 'Full-time' },
    { title: 'DevOps Engineer', location: 'Remote', type: 'Contract' }
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
            <img src="./logo.png" alt="Qryzo" className="h-16 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join <span className="neon-blue">Qryzo</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Build the future of data analytics with a team of passionate innovators.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-purple">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4 text-blue-400"><i className="fas fa-rocket"></i></div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Innovation</h3>
                <p className="text-white/70">Work on cutting-edge technology</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4 text-blue-400"><i className="fas fa-globe"></i></div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Remote First</h3>
                <p className="text-white/70">Flexible work from anywhere</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4 text-blue-400"><i className="fas fa-dollar-sign"></i></div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Competitive</h3>
                <p className="text-white/70">Great salary and benefits</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 neon-purple">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  className="glass glass-hover p-6 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <div className="flex gap-4 text-white/70">
                        <span><i className="fas fa-map-marker-alt mr-2"></i>{job.location}</span>
                        <span><i className="fas fa-clock mr-2"></i>{job.type}</span>
                      </div>
                    </div>
                    <motion.button
                      className="mt-4 md:mt-0 glass glass-hover px-6 py-2 rounded-lg text-white font-medium border border-blue-400/30 hover:border-blue-400/60"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;