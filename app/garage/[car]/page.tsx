import Image from "next/image";
import { cars } from "../../data/cars";

export default async function CarPage({
  params,
}: {
  params: Promise<{ car: string }>;
}) {
  const { car } = await params;

  const currentCar = cars.find((c) => c.slug === car);

  if (!currentCar) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-5xl font-bold">Car not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-28 pb-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Car Image */}
          <div>
            <Image
              src={currentCar.image}
              alt={currentCar.name}
              width={800}
              height={800}
              className="w-full rounded-3xl border border-red-600/20"
            />
          </div>

          {/* Car Info */}
          <div className="flex flex-col justify-center">

            <p className="mb-2 uppercase tracking-[0.4em] text-red-500">
              Featured Build
            </p>

            <h1 className="text-5xl font-black">
              {currentCar.name}
            </h1>

            <div className="mt-10 space-y-5 text-xl">

              <div className="rounded-xl bg-zinc-900 p-5">
                👤 <strong>Driver:</strong> {currentCar.driver}
              </div>

              <div className="rounded-xl bg-zinc-900 p-5">
                ⚡ <strong>Power:</strong> {currentCar.power}
              </div>

              <div className="rounded-xl bg-zinc-900 p-5">
                🏁 <strong>Class:</strong> {currentCar.class}
              </div>

            </div>

            <button className="mt-10 rounded-xl bg-red-600 px-8 py-4 text-xl font-bold transition hover:bg-red-500">
              Follow Build
            </button>

            {/* Description */}
            <div className="mt-10">
              <h2 className="mb-3 text-2xl font-bold">
                About this Build
              </h2>

              <p className="leading-8 text-gray-400">
                {currentCar.description}
              </p>
            </div>

            {/* Build Specs */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">

              {/* Engine */}
              <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-6">
                <h3 className="mb-4 text-2xl font-bold text-red-500">
                  🔥 Engine
                </h3>

                <ul className="space-y-2 text-gray-300">
                  {currentCar.engine.map((part) => (
                    <li key={part}>• {part}</li>
                  ))}
                </ul>
              </div>

              {/* Drivetrain */}
              <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-6">
                <h3 className="mb-4 text-2xl font-bold text-red-500">
                  ⚙️ Drivetrain
                </h3>

                <ul className="space-y-2 text-gray-300">
                  {currentCar.drivetrain.map((part) => (
                    <li key={part}>• {part}</li>
                  ))}
                </ul>
              </div>

              {/* Suspension */}
              <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-6">
                <h3 className="mb-4 text-2xl font-bold text-red-500">
                  🛞 Suspension
                </h3>

                <ul className="space-y-2 text-gray-300">
                  {currentCar.suspension.map((part) => (
                    <li key={part}>• {part}</li>
                  ))}
                </ul>
              </div>

              {/* Wheels */}
              <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-6">
                <h3 className="mb-4 text-2xl font-bold text-red-500">
                  🏎️ Wheels & Tires
                </h3>

                <ul className="space-y-2 text-gray-300">
                  {currentCar.wheels.map((part) => (
                    <li key={part}>• {part}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* ================= Build Gallery ================= */}
        <div id="gallery" className="mt-24">

          <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.4em] text-red-500">
            Gallery
          </p>

          <h2 className="mb-10 text-center text-5xl font-black uppercase">
            Build Gallery
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {currentCar.gallery.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${currentCar.name} ${index + 1}`}
                width={700}
                height={500}
                className="rounded-2xl border border-red-600/20 transition duration-300 hover:scale-105 hover:border-red-500"
              />
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}