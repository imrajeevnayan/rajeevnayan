import { useEffect, useRef, useState, useMemo } from 'react';

const iconNames = [
  'java', 'spring', 'hibernate', 'mysql', 'postgres', 'mongodb',
  'aws', 'docker', 'kubernetes', 'jenkins', 'postman', 'linux',
  'git', 'github', 'vscode', 'maven', 'gradle', 'kafka', 'redis'
];


export default function SkillCloud3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  
  const [radius, setRadius] = useState(150);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 130 : 200);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute spherical coordinates once
  const itemsCoordinates = useMemo(() => {
    const size = iconNames.length;
    return iconNames.map((icon, i) => {
      // Golden ratio implementation to evenly distribute points on a sphere
      const phi = Math.acos(-1 + (2 * i) / size);
      const theta = Math.sqrt(size * Math.PI) * phi;

      // Spherical to Cartesian representation [-1, 1]
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);

      return { icon, x, y, z };
    });
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;
    
    // Default rotation speed
    const velocity = { x: 0.002, y: 0.002 };
    
    const animate = () => {
      currentX += velocity.x;
      currentY += velocity.y;

      if (containerRef.current) {
        // Rotate the main container
        containerRef.current.style.transform = `rotateX(${currentY}rad) rotateY(${currentX}rad)`;
      }

      // Counter-rotate each item so it always faces the camera
      itemsRef.current.forEach((el) => {
        if (el) {
           // We extract the original XYZ coordinates from its dataset
           const tx = Number(el.dataset.x) * radius;
           const ty = Number(el.dataset.y) * radius;
           const tz = Number(el.dataset.z) * radius;
           
           // Apply original position, then counter-rotate
           el.style.transform = `translate3D(${tx}px, ${ty}px, ${tz}px) rotateY(${-currentX}rad) rotateX(${-currentY}rad)`;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
       const x = (e.clientX / window.innerWidth - 0.5) * 2;
       const y = (e.clientY / window.innerHeight - 0.5) * 2;
       velocity.x = x * 0.01;
       velocity.y = -y * 0.01;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [radius]);

  return (
    <div className="relative flex items-center justify-center w-full min-h-[400px] sm:min-h-[500px]" style={{ perspective: '1200px' }}>
      <div 
        ref={containerRef}
        className="relative flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {itemsCoordinates.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (itemsRef.current[idx] = el as HTMLDivElement)}
              data-x={item.x}
              data-y={item.y}
              data-z={item.z}
              className="absolute w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 hover:scale-125 z-10 group"
              style={{
                 // Initial transform (will be overridden aggressively by requestAnimationFrame)
                 transform: `translate3D(${item.x * radius}px, ${item.y * radius}px, ${item.z * radius}px)`,
                 transformStyle: 'preserve-3d'
              }}
            >
              <div
                 className="w-full h-full glass-panel rounded-2xl shadow-lg p-2 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer overflow-hidden backdrop-blur-sm bg-opacity-90 pointer-events-auto"
              >
                  <img src={`https://skillicons.dev/icons?i=${item.icon}`} alt={item.icon} className="w-full h-full object-contain pointer-events-none" />
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}
