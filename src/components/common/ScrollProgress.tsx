import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setProgress(Number((currentScroll / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
            <div 
                className="h-full bg-gradient-to-r from-blue-600 via-fuchsia-500 to-indigo-600 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
