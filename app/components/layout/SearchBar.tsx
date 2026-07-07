"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { cars } from "@/app/data/cars";
import { drivers } from "@/app/data/drivers";
import { events } from "@/app/data/events";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();

    const carResults = cars
      .filter(
        (car) =>
          car.name.toLowerCase().includes(q) ||
          car.manufacturer.toLowerCase().includes(q) ||
          car.driver.toLowerCase().includes(q)
      )
      .map((car) => ({
        type: "🚗 Car",
        title: car.name,
        href: `/garage/${car.slug}`,
      }));

    const driverResults = drivers
      .filter(
        (driver) =>
          driver.name.toLowerCase().includes(q) ||
          driver.role.toLowerCase().includes(q)
      )
      .map((driver) => ({
        type: "👤 Driver",
        title: driver.name,
        href: `/drivers/${driver.slug}`,
      }));

    const eventResults = events
      .filter(
        (event) =>
          event.name.toLowerCase().includes(q) ||
          event.location.toLowerCase().includes(q)
      )
      .map((event) => ({
        type: "📅 Event",
        title: event.name,
        href: `/events/${event.slug}`,
      }));

    return [...carResults, ...driverResults, ...eventResults];
  }, [query]);

  return (
    <div className="relative w-full xl:w-72">

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full rounded-xl border border-red-600/20 bg-zinc-900 px-4 py-2 outline-none focus:border-red-500"
      />

      {query && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-red-600/20 bg-zinc-900 shadow-xl">

          {results.map((result) => (
            <Link
              key={`${result.type}-${result.href}`}
              href={result.href}
              className="block border-b border-red-600/10 px-4 py-3 transition hover:bg-red-600/10"
              onClick={() => setQuery("")}
            >
              <p className="text-sm text-red-500">
                {result.type}
              </p>

              <p className="font-semibold">
                {result.title}
              </p>
            </Link>
          ))}

        </div>
      )}

    </div>
  );
}
