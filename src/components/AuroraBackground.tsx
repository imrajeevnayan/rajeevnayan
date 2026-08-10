import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function AuroraBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [nodes, setNodes] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    // Generate fewer nodes on mobile to save performance
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 8 : 20;

    const newNodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1
    }));
    setNodes(newNodes);
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 aurora-bg animate-aurora opacity-70 will-change-transform" />
      
      {/* Network Mesh / Distributed Systems Visualization */}
      {nodes.length > 0 && (
        <div className="absolute inset-0 opacity-20">
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              className="absolute size-1 rounded-full bg-aurora-1"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
