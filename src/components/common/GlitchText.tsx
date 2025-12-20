import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
    text: string;
    className?: string;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isHovering) {
            let iteration = 0;
            interval = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        } else {
            setDisplayText(text);
        }

        return () => clearInterval(interval);
    }, [isHovering, text]);

    return (
        <motion.span
            className={`inline-block ${className}`}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
        >
            {displayText}
        </motion.span>
    );
};

export default GlitchText;
