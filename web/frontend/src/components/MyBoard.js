import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MyBoard = ({ user, logout }) => {
  const [stats] = useState({
    totalScans: 2847,
    totalCodes: 156,
    activeLocations: 23,
    todayScans: 342
  });

  const quickActions = [
    { title: 'Generate QR Code', icon: 'fas fa-qrcode' },
    { title: 'View Analytics', icon: 'fas fa-chart-bar' },
    { title: 'Manage Locations', icon: 'fas fa-map-marker-alt' },
    { title: 'Export Data', icon: 'fas fa-download' }
  ];

  return (
    <div className="min-h-screen animated-gradient">
      {/* Header */}
      <div className="glass border-b border-white/10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black text-white">My Board</h1>
            <p className="text-white/60 mt-1">Welcome back, {user?.name || 'User'}</p>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="glass glass-hover px-4 py-2 rounded-lg text-white/80 hover:text-white border border-white/10"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Scans', value: stats.totalScans, icon: 'fas fa-eye' },
            { label: 'QR Codes', value: stats.totalCodes, icon: 'fas fa-qrcode' },
            { label: 'Locations', value: stats.activeLocations, icon: 'fas fa-map-marker-alt' },
            { label: 'Today', value: stats.todayScans, icon: 'fas fa-chart-line' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover p-6 rounded-2xl border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value.toLocaleString()}</p>
                </div>
                <i className={`${stat.icon} text-2xl text-blue-400`}></i>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-6 rounded-2xl border border-white/10"
          >
            <h2 className="text-xl font-bold text-white mb-4 neon-blue">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="glass glass-hover p-4 rounded-xl border border-white/10 text-center group"
                >
                  <i className={`${action.icon} text-2xl mb-2 text-purple-400 group-hover:text-purple-300`}></i>
                  <p className="text-white/80 text-sm font-medium group-hover:text-white">{action.title}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-6 rounded-2xl border border-white/10"
          >
            <h2 className="text-xl font-bold text-white mb-4 neon-purple">Recent Activity</h2>
            <div className="space-y-3">
              {[
                { action: 'QR Code scanned', location: 'Store #1', time: '2 min ago' },
                { action: 'New QR generated', location: 'Store #2', time: '15 min ago' },
                { action: 'Analytics viewed', location: 'Dashboard', time: '1 hour ago' }
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center p-3 glass rounded-lg border border-white/5">
                  <div>
                    <p className="text-white text-sm font-medium">{activity.action}</p>
                    <p className="text-white/60 text-xs">{activity.location}</p>
                  </div>
                  <span className="text-white/40 text-xs">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyBoard;