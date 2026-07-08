"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LenisProps {
  children: React.ReactNode;
}

function SmoothScroll({ children }: LenisProps) {
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!lenis) return;
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(raf);
  }, [lenis]);

  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
