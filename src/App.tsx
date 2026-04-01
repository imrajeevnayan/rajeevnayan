import { lazy, Suspense } from 'react';

import Header from './components/Header';
import CustomCursor from './components/common/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import ScrollToTop from './components/common/ScrollToTop';
import VerticalNav from './components/common/VerticalNav';
import ErrorBoundary from './components/common/ErrorBoundary';
import CommandPalette from './components/common/CommandPalette';


// Lazy load components for performance
const Experience = lazy(() => import('./components/Experience'));
const GithubStats = lazy(() => import('./components/GithubStats'));
const Architecture = lazy(() => import('./components/Architecture'));
const Skills = lazy(() => import('./components/Skills'));


const SystemMonitor = lazy(() => import('./components/SystemMonitor'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));

const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));

const Footer = lazy(() => import('./components/Footer'));




const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-10 h-10 border-4 border-[var(--accent-color)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--accent-color)]/30 transition-colors duration-500 grid-background">
      <CommandPalette />
      <CustomCursor />
      <VerticalNav />
      <ScrollToTop />
      
      <Header />

      
      <main className="relative">
        <Hero />
        
        <div className="space-y-0">
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
              <section id="architecture">
                <Architecture />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="monitor">
                <SystemMonitor />
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

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;