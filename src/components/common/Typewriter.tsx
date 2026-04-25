import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const Typewriter = ({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000, 
  className = "" 
}: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setPause(true);
      setTimeout(() => {
        setReverse(true);
        setPause(false);
      }, pauseTime);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, pause, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`${className} inline-flex items-center`}>
      {words[index].substring(0, subIndex)}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="w-[2px] h-[1em] bg-[var(--brand-accent)] ml-1" 
      />
    </span>
  );
};

export default Typewriter;
