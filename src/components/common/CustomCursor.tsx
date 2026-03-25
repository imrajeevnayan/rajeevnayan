import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Optimized motion values (bypasses React state/re-render loop)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring configuration
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window);
        };
        checkMobile();

        const mouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', mouseMove, { passive: true });
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (isMobile) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
            {/* Massive Ambient Spotlight */}
            <motion.div
                className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full bg-blue-600/5 dark:bg-purple-600/5 blur-[120px] mix-blend-screen"
                style={{
                   x: springX,
                   y: springY,
                   translateX: '-50%',
                   translateY: '-50%'
                }}
            />

            {/* Main Interactive Ring */}
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 rounded-full border border-blue-400/80 mix-blend-difference"
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0)"
                }}
                style={{
                  x: springX,
                  y: springY,
                  translateX: '-50%',
                  translateY: '-50%'
                }}
            />

            {/* Inner Dot */}
            <motion.div
                className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"
                animate={{
                    opacity: isHovering ? 0 : 1
                }}
                style={{
                  x: springX,
                  y: springY,
                  translateX: '-50%',
                  translateY: '-50%'
                }}
            />
        </div>
    );
};

export default CustomCursor;
