import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
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

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Massive Ambient Spotlight that tracks mouse */}
            <motion.div
                className="fixed top-0 left-0 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 dark:bg-purple-600/10 pointer-events-none z-[-1] hidden md:block blur-[120px] mix-blend-screen"
                animate={{
                    x: mousePosition.x - 320,
                    y: mousePosition.y - 320,
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.5
                }}
            />

            {/* Existing Interactive Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400/80 pointer-events-none z-[100] hidden md:block mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(59,130,246,0.2)" : "rgba(59,130,246,0)"
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[100] hidden md:block shadow-[0_0_10px_rgba(59,130,246,1)]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    opacity: isHovering ? 0 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.01
                }}
            />
        </>
    );
};

export default CustomCursor;
