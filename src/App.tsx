import { lazy, Suspense } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ScrollToTop from './components/common/ScrollToTop';
import ErrorBoundary from './components/common/ErrorBoundary';
import CommandPalette from './components/common/CommandPalette';

import Preloader from './components/preloader';
import SmoothScroll from './components/common/SmoothScroll';
import SpaceBackground from './components/SpaceBackground';

import { motion, useScroll, useSpring } from 'framer-motion';

// Lazy load elements for fast loading and split chunks
const Experience = lazy(() => import('./components/Experience'));
const GithubStats = lazy(() => import('./components/GithubStats'));
const CodingProfiles = lazy(() => import('./components/CodingProfiles'));
const Architecture = lazy(() => import('./components/Architecture'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[150px] font-mono text-xs text-[#10b981]">
    <div className="w-6 h-6 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin mr-2"></div>
    Loading pipeline components...
  </div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Preloader>
      <SmoothScroll>
        <div className="min-h-screen bg-[#08080a] text-white selection:bg-[#10b981]/20 transition-colors duration-500 relative">
          
          {/* Constellation line canvas */}
          <SpaceBackground />
          
          {/* Scroll indicators */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-[#10b981] origin-left z-[9999]"
            style={{ scaleX }}
          />

          <ScrollToTop />
          
          <Header />
          
          <main className="relative overflow-hidden z-10">
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                
                {/* Hero */}
                <Hero />

                {/* Case Studies */}
                <Projects />

                {/* Skills */}
                <Skills />

                {/* Experience */}
                <Experience />

                {/* Architecture Visualizer */}
                <section id="architecture">
                  <Architecture />
                </section>

                {/* Git Stats */}
                <section id="github">
                  <GithubStats />
                </section>

                {/* Supporting Credentials / Biography */}
                <section id="about">
                  <About />
                </section>

                {/* Coding challenge statistics */}
                <section id="coding-profiles">
                  <CodingProfiles />
                </section>

                {/* Certifications and achievements */}
                <Certifications />

                {/* Technical Blog */}
                <Blog />

                {/* Direct contact info */}
                <section id="contact">
                  <Contact />
                </section>

                {/* Footer */}
                <Footer />

              </Suspense>
            </ErrorBoundary>
          </main>

          <CommandPalette />
        </div>
      </SmoothScroll>
    </Preloader>
  );
}

export default App;