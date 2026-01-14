import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import CustomCursor from './components/common/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';

// Lazy load components for performance
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Blog = lazy(() => import('./components/Blog'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <CustomCursor />
      <ScrollToTop />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </Suspense>

    </div>
  );
}

export default App;