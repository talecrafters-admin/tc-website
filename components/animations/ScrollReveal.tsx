"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animations: Record<string, any> = {
      up: { y: 60, opacity: 0 },
      down: { y: -60, opacity: 0 },
      left: { x: 60, opacity: 0 },
      right: { x: -60, opacity: 0 },
      fade: { opacity: 0 },
      scale: { scale: 0.8, opacity: 0 },
    };

    gsap.fromTo(element, animations[direction], {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
