import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Contact = ({ user, logout }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

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
              Contact <span className="neon-blue">Us</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get in touch with our team. We're here to help you succeed.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 neon-purple">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 glass rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/60 focus:border-blue-400/60 focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 glass rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/60 focus:border-blue-400/60 focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-4 glass rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/60 focus:border-blue-400/60 focus:outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full glass glass-hover px-6 py-4 rounded-lg text-white font-medium border border-blue-400/30 hover:border-blue-400/60"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-400"><i className="fas fa-envelope mr-2"></i>Email</h3>
                <p className="text-white/80">hello@qryzo.com</p>
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-400"><i className="fas fa-phone mr-2"></i>Phone</h3>
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-400"><i className="fas fa-building mr-2"></i>Office</h3>
                <p className="text-white/80">123 Tech Street<br />San Francisco, CA 94105</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;