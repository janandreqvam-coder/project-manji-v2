"use client";

import Image from "next/image";
import Link from "next/link";

import Card from "@/app/components/ui/Card";
import { useFavorites } from "@/app/hooks/useFavorites";

type Car = {
  id: number;
  slug: string;
  name: string;
  manufacturer: string;
  country: string;
  year: string;
  driver: string;
  power: string;
  class: string;
  image: string;
};

export default function CarCard({ car }: { car: Car }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(car.id);

  return (
    <Card className="rounded-lg border-white/10 bg-zinc-950/85">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <button
          onClick={() => toggleFavorite(car.id)}
          className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-lg text-white backdrop-blur transition hover:scale-110 hover:text-red-400"
          aria-label="Toggle favorite"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="p-4">
        <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-red-500">
          {car.manufacturer} / {car.year}
        </p>

        <h3 className="text-lg font-black uppercase leading-tight transition duration-300 group-hover:text-red-500">
          {car.name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {car.power} / {car.class}
        </p>

        <p className="mt-3 text-xs text-gray-500">
          Driver: {car.driver}
        </p>

        <Link
          href={`/garage/${car.slug}`}
          className="mt-4 block rounded-md border border-red-600/50 px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-red-400 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
        >
          View Build
        </Link>
      </div>
    </Card>
  );
}
