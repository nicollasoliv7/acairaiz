import { CSSProperties } from "react";

const layers = [
  [0.25, "transparent 0%, black 12.5%, black 25%, transparent 37.5%"],
  [0.5, "transparent 12.5%, black 25%, black 37.5%, transparent 50%"],
  [1, "transparent 25%, black 37.5%, black 50%, transparent 62.5%"],
  [2, "transparent 37.5%, black 50%, black 62.5%, transparent 75%"],
  [4, "transparent 50%, black 62.5%, black 75%, transparent 87.5%"],
  [8, "transparent 62.5%, black 75%, black 87.5%, transparent 100%"],
  [16, "transparent 75%, black 87.5%, black 100%"],
  [32, "transparent 87.5%, black 100%"],
] as const;

export function ProgressiveBlur() {
  const container: CSSProperties = { position: "fixed", bottom: 0, left: 0, width: "100%", height: "var(--progressive-blur-height, 200px)", zIndex: 999, pointerEvents: "none" };
  return <div aria-hidden="true" style={container}>{layers.map(([blur, stops]) => {
    const mask = `linear-gradient(to bottom, ${stops})`;
    return <div key={blur} style={{ position: "absolute", inset: 0, backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)`, maskImage: mask, WebkitMaskImage: mask }} />;
  })}</div>;
}
