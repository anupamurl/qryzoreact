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
import MyBoard from './components/MyBoard';
import Error404 from './components/Error404';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Blog from './components/Blog';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Documentation from './components/Documentation';
import ApiDocs from './components/ApiDocs';

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
    return (
      <div className="min-h-screen animated-gradient flex items-center justify-center">
        <div className="glass rounded-2xl p-8 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-white/80">Loading...</p>
        </div>
      </div>
    );
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

  // Handle my-board route
  if (window.location.pathname === '/my-board') {
    if (!user) {
      window.location.href = '/';
      return null;
    }
    return <MyBoard user={user} logout={logout} />;
  }

  // Handle about route
  if (window.location.pathname === '/about') {
    return <AboutUs user={user} logout={logout} />;
  }

  // Handle contact route
  if (window.location.pathname === '/contact') {
    return <Contact user={user} logout={logout} />;
  }

  // Handle careers route
  if (window.location.pathname === '/careers') {
    return <Careers user={user} logout={logout} />;
  }

  // Handle blog route
  if (window.location.pathname === '/blog') {
    return <Blog user={user} logout={logout} />;
  }

  // Handle privacy route
  if (window.location.pathname === '/privacy') {
    return <PrivacyPolicy user={user} logout={logout} />;
  }

  // Handle terms route
  if (window.location.pathname === '/terms') {
    return <TermsOfService user={user} logout={logout} />;
  }

  // Handle docs route
  if (window.location.pathname === '/docs') {
    return <Documentation user={user} logout={logout} />;
  }

  // Handle api route
  if (window.location.pathname === '/api') {
    return <ApiDocs user={user} logout={logout} />;
  }

  // Handle 404 for unknown routes
  if (window.location.pathname !== '/') {
    return <Error404 />;
  }

  return (
    <div className="min-h-screen animated-gradient">
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