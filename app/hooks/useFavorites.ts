"use client";

import { useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const saved = localStorage.getItem("favorites");

    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  });

  function toggleFavorite(id: number) {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      localStorage.setItem("favorites", JSON.stringify(updated));

      return updated;
    });
  }

  return {
    favorites,
    toggleFavorite,
  };
}
