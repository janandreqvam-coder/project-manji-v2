"use client";

import Card from "@/app/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
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
    <Card> 
      {/* Image */}
      <div className="relative h-64 overflow-hidden">

        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(car.id)}
          className="absolute right-4 top-4 rounded-full bg-black/60 p-3 backdrop-blur transition hover:scale-110"
        >
          <span className="text-2xl">
            {isFavorite ? "❤️" : "🤍"}
          </span>
        </button>

      </div>

      {/* Content */}
      <div className="p-6">

        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-red-500">
          {car.manufacturer} • {car.year}
        </p>

        <h3 className="text-3xl font-black transition duration-300 group-hover:text-red-500">
          {car.name}
        </h3>

        <div className="mt-6 space-y-3 text-gray-400">

          <p>
            👤 <strong className="text-white">Driver:</strong> {car.driver}
          </p>

          <p>
            ⚡ <strong className="text-white">Power:</strong> {car.power}
          </p>

          <p>
            🏁 <strong className="text-white">Class:</strong> {car.class}
          </p>

          <p>
            🌍 <strong className="text-white">Country:</strong> {car.country}
          </p>

        </div>

        <Link
          href={`/garage/${car.slug}`}
          className="mt-8 block rounded-xl bg-red-600 py-3 text-center font-bold shadow-[0_0_20px_rgba(220,38,38,0.25)] transition duration-300 hover:bg-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.45)]"
        >
          View Build →
        </Link>

      </div>

    </Card>
  );
}