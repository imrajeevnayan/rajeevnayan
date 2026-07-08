import { lazy, Suspense } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ScrollToTop from './components/common/ScrollToTop';
import ErrorBoundary from './components/common/ErrorBoundary';
import CommandPalette from './components/common/CommandPalette';

import Preloader from './components/preloader';
import SmoothScroll from './components/common/SmoothScroll';
import AnimatedBackground from './components/animated-background';
import EasterEggs from './components/easter-eggs';
import MotionNudge from './components/motion-nudge';
import { usePerfProfile } from './hooks/use-perf-profile';

// Lazy load components for performance
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
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-10 h-10 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const { disable3D, ready } = usePerfProfile();
  const show3D = ready && !disable3D;

  return (
    <Preloader>
      <SmoothScroll>
        <div className={`min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] selection:bg-[var(--brand-accent)]/20 transition-colors duration-500 relative ${show3D ? "has-3d-bg" : ""}`}>
          <AnimatedBackground />
          <EasterEggs />
          <MotionNudge />
          <CommandPalette />
          <ScrollToTop />
          
          <Header />
          
          <main className="relative overflow-hidden z-10 pointer-events-none">
            <div className="pointer-events-auto">
              <Hero />
            </div>
            
            <div className="space-y-0 pointer-events-auto">
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <section id="about">
                    <About />
                  </section>
                  <section id="experience">
                    <Experience />
                  </section>
                  <section id="github">
                    <GithubStats />
                  </section>
                  <section id="coding-profiles">
                    <CodingProfiles />
                  </section>
                  <section id="architecture">
                    <Architecture />
                  </section>

                  <section id="skills">
                    <Skills />
                  </section>

                  <section id="projects">
                    <Projects />
                  </section>

                  <Suspense fallback={null}>
                    <Certifications />
                  </Suspense>
                  <Suspense fallback={null}>
                    <Blog />
                  </Suspense>

                  <section id="contact">
                    <Contact />
                  </section>
                </Suspense>
              </ErrorBoundary>
            </div>

            <div className="pointer-events-auto">
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
            </div>
          </main>
        </div>
      </SmoothScroll>
    </Preloader>
  );
}

export default App;