"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-96 w-96 rounded-full blur-3xl transition-transform duration-150"
      style={{
        left: position.x - 192,
        top: position.y - 192,
        background:
          "radial-gradient(circle, rgba(220,38,38,0.18), transparent 70%)",
      }}
    />
  );
}