import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const ApiDocs = ({ user, logout }) => {
  const endpoints = [
    { method: 'POST', endpoint: '/api/qr/generate', description: 'Generate a new QR code' },
    { method: 'GET', endpoint: '/api/qr/{id}', description: 'Retrieve QR code details' },
    { method: 'GET', endpoint: '/api/analytics/{id}', description: 'Get QR code analytics' },
    { method: 'DELETE', endpoint: '/api/qr/{id}', description: 'Delete a QR code' }
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
              API <span className="neon-blue">Reference</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Integrate Qryzo's powerful QR code generation into your applications.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-purple">
              <i className="fas fa-key mr-2"></i>Authentication
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              All API requests require authentication using your API key in the header:
            </p>
            <div className="bg-black/30 rounded-lg p-4 border border-white/10">
              <code className="text-green-400">Authorization: Bearer YOUR_API_KEY</code>
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 neon-purple">
              <i className="fas fa-code mr-2"></i>API Endpoints
            </h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  className="glass glass-hover p-6 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center mb-2 md:mb-0">
                      <span className={`px-3 py-1 rounded text-xs font-bold mr-4 ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-white font-mono">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-white/70">{endpoint.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-purple">
              <i className="fas fa-rocket mr-2"></i>Get Started
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Ready to integrate? Get your API key and start building with Qryzo today.
            </p>
            <motion.button
              className="glass glass-hover px-6 py-3 rounded-lg text-white font-medium border border-blue-400/30 hover:border-blue-400/60"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-key mr-2"></i>Get API Key
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApiDocs;