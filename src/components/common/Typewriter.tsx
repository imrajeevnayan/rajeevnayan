import { useState, useEffect } from 'react';

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
    <span className={className}>
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse border-r-2 border-indigo-600 ml-1" />
    </span>
  );
};

export default Typewriter;
