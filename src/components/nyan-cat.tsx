"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const getRandomHeight = () => {
  return `${Math.random() * 100}vh`;
};

const NyanCat = () => {
  const [divs, setDivs] = useState<{ id: string }[]>([]);

  const spawnDiv = () => {
    const newDiv = {
      id: (Math.random() * 100000).toFixed(),
    };
    setDivs((prevDivs) => [...prevDivs, newDiv]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "n") spawnDiv();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="fixed left-0 top-0 w-screen h-screen overflow-hidden z-[-1] pointer-events-none">
      <AnimatePresence>
        {divs.length > 0 && (
          <div className="fixed w-screen flex left-0 top-16 justify-center text-sm font-semibold opacity-30 select-none text-[var(--text-secondary)]">
            Active Nyan Cats: {divs.length}
          </div>
        )}
      </AnimatePresence>
      {divs.map((div) => (
        <AnimatedDiv
          key={div.id}
          id={div.id}
          onClick={() => {}}
          onCompleted={() => {
            setDivs((prev) => prev.filter((d) => d.id !== div.id));
          }}
        />
      ))}
    </div>
  );
};

const AnimatedDiv = ({
  id,
  onClick,
  onCompleted,
}: {
  id: string;
  onClick: () => void;
  onCompleted: () => void;
}) => {
  const randY = getRandomHeight();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: "100vw",
      y: randY,
      transition: { duration: 5, ease: "linear" },
    });
  }, [controls, randY]);

  return (
    <motion.div
      key={id}
      initial={{ x: "-20vw", y: randY }}
      animate={controls}
      onAnimationComplete={onCompleted}
      onClick={onClick}
    >
      <img
        src="/assets/nyan-cat.gif"
        className="fixed z-10 h-40 w-auto select-none pointer-events-none"
        alt="Nyan Cat"
      />
    </motion.div>
  );
};

export default NyanCat;
