import Image from "next/image";

type Car = {
  id: number;
  name: string;
  driver: string;
  power: string;
  class: string;
  image: string;
};

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-red-600/20 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.3)]">

      <Image
        src={car.image}
        alt={car.name}
        width={700}
        height={500}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-3xl font-bold">
          {car.name}
        </h3>

        <div className="mt-4 space-y-2 text-gray-400">

          <p>👤 Driver: {car.driver}</p>

          <p>⚡ Power: {car.power}</p>

          <p>🏁 {car.class}</p>

        </div>

        <button className="mt-8 w-full rounded-xl bg-red-600 py-3 font-bold transition hover:bg-red-500">
          View Build
        </button>

      </div>

    </div>
  );
}