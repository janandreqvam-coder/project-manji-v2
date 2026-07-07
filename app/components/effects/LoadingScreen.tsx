"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">

      {/* Red Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(220,38,38,0.12),transparent_70%)]" />

      <div className="relative text-center">

        <Image
          src="/logos/logo.png"
          alt="Project Manji"
          width={180}
          height={180}
          className="mx-auto animate-pulse"
          priority
        />

        <h1 className="mt-8 text-5xl font-black uppercase">
          Project Manji
        </h1>

        <p className="mt-4 text-gray-400 italic">
          Built on Passion.
          <br />
          Driven by Purpose.
        </p>

        {/* Loading Bar */}
        <div className="mx-auto mt-10 h-2 w-72 overflow-hidden rounded-full bg-zinc-800">

          <div className="h-full w-full animate-[loading_1.8s_linear_forwards] bg-red-600" />

        </div>

        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-gray-500">
          Loading...
        </p>

      </div>

    </div>
  );
}