"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";
interface Props { children: ReactNode; direction?: Direction; delay?: number; duration?: number; distance?: string; className?: string; once?: boolean; threshold?: number; }

function initialTransform(direction: Direction, distance: string) {
  if (direction === "up") return `translate3d(0, ${distance}, 0)`;
  if (direction === "down") return `translate3d(0, -${distance}, 0)`;
  if (direction === "left") return `translate3d(${distance}, 0, 0)`;
  if (direction === "right") return `translate3d(-${distance}, 0, 0)`;
  return "none";
}

export function ScrollReveal({ children, direction = "up", delay = 0, duration = 700, distance = "40px", className, once = true, threshold = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update(); query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); if (once) observer.unobserve(entry.target); }
      else if (!once) setVisible(false);
    }, { root: null, rootMargin: "0px 0px -50px 0px", threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [once, reducedMotion, threshold]);

  const shown = visible || reducedMotion;
  const style: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "translate3d(0, 0, 0)" : initialTransform(direction, distance),
    transition: reducedMotion ? "none" : `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    willChange: reducedMotion ? "auto" : "opacity, transform",
  };
  return <div ref={ref} className={className} style={style}>{children}</div>;
}
