import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars as DreiStars } from '@react-three/drei';
import * as THREE from 'three';

const StarParticles = () => {
  const ref = useRef<THREE.Points>(null);

  // Custom Twinkle Animation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x -= 0.0001;
      ref.current.rotation.y -= 0.0001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <DreiStars 
        radius={100} 
        depth={50} 
        count={7000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
    </group>
  );
};

const StarsBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarParticles />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsBackground;
