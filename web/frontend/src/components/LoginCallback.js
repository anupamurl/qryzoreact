import React, { useEffect } from 'react';

const LoginCallback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userData = urlParams.get('user');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(decodeURIComponent(userData));
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(parsedUser));
        
        // Redirect to profile if first-time user
        if (!parsedUser.profileCompleted) {
          window.location.href = '/profile';
        } else {
          window.location.href = '/';
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        window.location.href = '/';
      }
    } else {
      window.location.href = '/';
    }
  }, []);

  return <div className="min-h-screen flex items-center justify-center">Processing login...</div>;
};

export default LoginCallback;