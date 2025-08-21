import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const TermsOfService = ({ user, logout }) => {
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
            <img src="./logo.png" alt="Qryzo" className="h-16 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of <span className="neon-blue">Service</span>
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
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-handshake mr-2"></i>Acceptance of Terms</h2>
              <p className="text-white/80 leading-relaxed">
                By accessing and using Qryzo services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-user-check mr-2"></i>Use License</h2>
              <p className="text-white/80 leading-relaxed">
                Permission is granted to temporarily use Qryzo services for personal and commercial use. 
                This license shall automatically terminate if you violate any of these restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-exclamation-triangle mr-2"></i>Disclaimer</h2>
              <p className="text-white/80 leading-relaxed">
                The materials on Qryzo are provided on an 'as is' basis. Qryzo makes no warranties, 
                expressed or implied, and hereby disclaims all other warranties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-ban mr-2"></i>Limitations</h2>
              <p className="text-white/80 leading-relaxed">
                In no event shall Qryzo or its suppliers be liable for any damages arising out of 
                the use or inability to use the materials on Qryzo's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-edit mr-2"></i>Revisions</h2>
              <p className="text-white/80 leading-relaxed">
                Qryzo may revise these terms of service at any time without notice. By using this service, 
                you are agreeing to be bound by the current version of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 neon-purple"><i className="fas fa-envelope mr-2"></i>Contact Information</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@qryzo.com
              </p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;