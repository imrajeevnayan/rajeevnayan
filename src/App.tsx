import { useState, useEffect, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import CustomCursor from './components/common/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollProgress from './components/common/ScrollProgress';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load components for performance
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Blog = lazy(() => import('./components/Blog'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

gsap.registerPlugin(ScrollTrigger);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global reveal for headings
      const headings = document.querySelectorAll('h2');
      headings.forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="app-wrapper text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      <div className="noise-bg fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-repeat"></div>
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      <div className="card-container relative z-10">
        
        <Hero />
        <About />

        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Testimonials />
            <Blog />
            <Contact />
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;