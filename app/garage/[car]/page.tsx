import Image from "next/image";
import { cars } from "../../data/cars";

export default async function CarPage({
  params,
}: {
  params: Promise<{ car: string }>;
}) {
  const { car } = await params;

  const currentCar = cars.find(
    (c) =>
      c.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "") === car
  );

  if (!currentCar) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-5xl font-bold">Car not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-24 text-white">

      <div className="mx-auto max-w-6xl px-6">

        <Image
          src={currentCar.image}
          alt={currentCar.name}
          width={1200}
          height={700}
          className="rounded-3xl"
        />

        <div className="mt-10">

          <h1 className="text-5xl font-black">
            {currentCar.name}
          </h1>

          <div className="mt-6 space-y-3 text-xl text-gray-300">

            <p>👤 Driver: {currentCar.driver}</p>

            <p>⚡ Power: {currentCar.power}</p>

            <p>🏁 Class: {currentCar.class}</p>

          </div>

        </div>

      </div>

    </main>
  );
}