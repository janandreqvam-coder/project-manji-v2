import CarCard from "./CarCard";
import { cars } from "../../data/cars";

export default function FeaturedGarage() {
  return (
    <section className="bg-zinc-950 py-32 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.4em] text-red-500">
          Community
        </p>

        <h2 className="mb-16 text-center text-5xl font-black uppercase md:text-6xl">
          Featured Garage
        </h2>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}

        </div>

      </div>

    </section>
  );
}