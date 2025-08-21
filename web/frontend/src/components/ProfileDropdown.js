import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfileDropdown = ({ user, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMyBoard = () => {
    window.location.href = '/my-board';
    setIsOpen(false);
  };

  const handleProfile = () => {
    window.location.href = '/profile';
    setIsOpen(false);
  };

  const handleNotifications = () => {
    // Navigate to notifications
    console.log('Navigate to Notifications');
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {user?.picture && (
          <img 
            src={user.picture} 
            alt={user.name} 
            className="w-10 h-10 rounded-full border-2 border-white/20 object-cover hover:border-blue-400/60 transition-colors" 
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50"
          >
            <div className="py-2">
              <button
                onClick={handleProfile}
                className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center space-x-2"
              >
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </button>
              
              <button
                onClick={handleMyBoard}
                className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center space-x-2"
              >
                <i className="fas fa-chart-bar"></i>
                <span>My Board</span>
              </button>
              
              <hr className="border-gray-700 my-1" />
              
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center space-x-2"
              >
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;