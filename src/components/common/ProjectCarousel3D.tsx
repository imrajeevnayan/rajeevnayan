import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCarousel3DProps {
  projects: any[];
  renderCard: (project: any, index: number, isActive: boolean) => React.ReactNode;
}

const ProjectCarousel3D = ({ projects, renderCard }: ProjectCarousel3DProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center perspective-[1200px] overflow-hidden py-10">
      <div className="absolute inset-0 flex items-center justify-center transform-style-3d">
        <AnimatePresence initial={false} custom={direction}>
          {projects.map((project, index) => {
            // Calculate distance from current index
            let diff = index - currentIndex;
            
            // Adjust diff for seamless looping
            if (diff > projects.length / 2) diff -= projects.length;
            if (diff < -projects.length / 2) diff += projects.length;

            // Only render cards clearly within the visible range (-3 to 3)
            if (Math.abs(diff) > 3) return null;

            const isActive = diff === 0;
            
            // Transform logic for 3D depth and rotation
            const x = diff * (typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 200);
            const z = Math.abs(diff) * -150 - (isActive ? 0 : 100);
            const rotateY = diff * -15;
            const scale = isActive ? 1 : 1 - Math.abs(diff) * 0.05;
            const opacity = Math.abs(diff) >= 3 ? 0 : 1 - Math.abs(diff) * 0.15;
            const blur = Math.abs(diff) * 2;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x,
                  z,
                  rotateY,
                  scale,
                  opacity,
                  filter: `blur(${isActive ? 0 : blur}px)`,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8
                }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: '380px',
                  zIndex: projects.length - Math.abs(diff),
                }}
                className={`transform-style-3d ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={() => {
                  if (!isActive) setCurrentIndex(index);
                }}
              >
                {/* Pointer events only on active card to prevent background clicks triggering links */}
                <div className={`${isActive ? 'pointer-events-auto shadow-2xl shadow-blue-500/20' : 'pointer-events-none'}`}>
                   {renderCard(project, index, isActive)}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-7xl mx-auto flex justify-between px-4 z-50 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-gray-800 dark:text-white transition-all hover:scale-110"
          aria-label="Previous Project"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-gray-800 dark:text-white transition-all hover:scale-110"
          aria-label="Next Project"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {projects.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-400 dark:bg-gray-600'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel3D;
