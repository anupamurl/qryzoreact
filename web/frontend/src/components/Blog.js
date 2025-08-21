import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Blog = ({ user, logout }) => {
  const posts = [
    {
      title: 'The Future of Data Analytics',
      excerpt: 'Exploring how AI and machine learning are transforming data analysis...',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      title: 'Building Scalable Dashboards',
      excerpt: 'Best practices for creating dashboards that grow with your business...',
      date: 'Dec 10, 2024',
      readTime: '8 min read',
      category: 'Tutorial'
    },
    {
      title: 'Data Security in 2024',
      excerpt: 'Essential security measures every data-driven company should implement...',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      category: 'Security'
    },
    {
      title: 'Real-time Analytics Guide',
      excerpt: 'How to implement real-time data processing for instant insights...',
      date: 'Nov 28, 2024',
      readTime: '10 min read',
      category: 'Guide'
    }
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
            <img src="./cryzo.png" alt="Qryzo" className="h-16 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-blue">Qryzo</span> Blog
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Insights, tutorials, and industry trends in data analytics.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                className="glass glass-hover rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-400/20 text-blue-400 rounded-full border border-blue-400/30">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-white hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <motion.div
                  className="mt-6 flex items-center text-blue-400 font-medium"
                  whileHover={{ x: 5 }}
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </motion.div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="glass glass-hover px-8 py-3 rounded-lg text-white font-medium border border-blue-400/30 hover:border-blue-400/60"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Posts
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;