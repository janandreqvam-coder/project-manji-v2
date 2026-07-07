"use client";

import { useState } from "react";

type Particle = {
  left: number;
  top: number;
  delay: number;
  duration: number;
};

export default function Particles() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 40 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
    }))
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-red-500/30 animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
