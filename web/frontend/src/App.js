import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Analytics from './components/Analytics';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoginCallback from './components/LoginCallback';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleProfileUpdate = (updatedUser) => {
    setUser(updatedUser);
    window.location.href = '/';
  };

  if (loading) {
    return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;
  }

  // Handle login callback route
  if (window.location.pathname === '/login/callback') {
    return <LoginCallback />;
  }

  // Handle profile route
  if (window.location.pathname === '/profile') {
    if (!user) {
      window.location.href = '/';
      return null;
    }
    return <Profile user={user} onProfileUpdate={handleProfileUpdate} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header user={user} logout={logout} />
      <div id="home"><Hero /></div>
      <div id="features"><Features /></div>
      <div id="analytics"><Analytics /></div>
      <div id="pricing"><Pricing /></div>
      <div id="testimonials"><Testimonials /></div>
      <Footer />
    </div>
  );
}

export default App;