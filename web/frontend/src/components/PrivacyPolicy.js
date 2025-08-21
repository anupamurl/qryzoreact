import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = ({ user, logout }) => {
  return (
    <div className="min-h-screen animated-gradient">
      <Header user={user} logout={logout} />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="./cryzo.png" alt="Qryzo" className="h-16 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy <span className="neon-blue">Policy</span>
            </h1>
            <p className="text-xl text-white/80">
              Last updated: December 2024
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-info-circle mr-2"></i>Information We Collect</h2>
              <p className="text-white/80 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-cogs mr-2"></i>How We Use Your Information</h2>
              <p className="text-white/80 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-share-alt mr-2"></i>Information Sharing</h2>
              <p className="text-white/80 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-shield-alt mr-2"></i>Data Security</h2>
              <p className="text-white/80 leading-relaxed">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-envelope mr-2"></i>Contact Us</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@qryzo.com
              </p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;