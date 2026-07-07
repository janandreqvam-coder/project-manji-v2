"use client";

import { useState } from "react";

type Drop = {
  left: number;
  top: number;
  height: number;
  duration: number;
  delay: number;
};

export default function Rain() {
  const [drops] = useState<Drop[]>(() =>
    Array.from({ length: 120 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * -100,
      height: 12 + Math.random() * 18,
      duration: 0.6 + Math.random() * 0.6,
      delay: Math.random() * 2,
    }))
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {drops.map((drop, i) => (
        <span
          key={i}
          className="absolute w-px bg-white/25"
          style={{
            left: `${drop.left}%`,
            top: `${drop.top}%`,
            height: `${drop.height}px`,
            animation: `rain ${drop.duration}s linear infinite`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
