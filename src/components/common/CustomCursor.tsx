import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const xSetCursor = gsap.quickSetter(cursor, "x", "px");
        const ySetCursor = gsap.quickSetter(cursor, "y", "px");

        const moveCursor = (e: MouseEvent) => {
            xSetCursor(e.clientX);
            ySetCursor(e.clientY);
            
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power3.out',
                overwrite: 'auto'
            });
        };

        const handleMouseDown = () => {
            gsap.to([cursor, follower], { scale: 0.7, duration: 0.2 });
        };

        const handleMouseUp = () => {
            gsap.to([cursor, follower], { scale: 1, duration: 0.2 });
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('button, a, .magnetic, .interactive');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                gsap.to(follower, {
                    scale: 2.5,
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    duration: 0.3
                });
                gsap.to(cursor, { opacity: 0, duration: 0.2 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(follower, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    duration: 0.3
                });
                gsap.to(cursor, { opacity: 1, duration: 0.2 });
            });
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            <div 
                ref={cursorRef} 
                className="fixed top-0 left-0 w-3 h-3 bg-[var(--accent-color)] rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
            <div 
                ref={followerRef} 
                className="fixed top-0 left-0 w-8 h-8 border border-[var(--accent-color)]/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-colors duration-300"
            />
        </>
    );
};


export default CustomCursor;
