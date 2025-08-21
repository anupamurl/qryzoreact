import React from 'react';
import { motion } from 'framer-motion';

const Error404 = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center px-4">
      <motion.div 
        className="glass rounded-2xl p-8 md:p-12 text-center max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src="./cryzo.png" alt="Qryzo" className="h-12 w-auto mx-auto mb-6" />
        <motion.div
          className="text-8xl md:text-9xl font-bold neon-blue mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          404
        </motion.div>
        
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Page Not Found
        </motion.h1>
        
        <motion.p 
          className="text-white/70 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.button
          onClick={handleGoHome}
          className="glass glass-hover px-6 py-3 rounded-lg text-white font-medium border border-blue-400/30 hover:border-blue-400/60"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Go Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Error404;