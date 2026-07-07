"use client";

import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

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