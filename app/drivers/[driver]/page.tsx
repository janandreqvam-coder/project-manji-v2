import Image from "next/image";
import Link from "next/link";
import { drivers } from "../../data/drivers";
import AppLayout from "@/app/components/ui/AppLayout";

export default async function DriverPage({
  params,
}: {
  params: Promise<{ driver: string }>;
}) {
  const { driver } = await params;

  const currentDriver = drivers.find((d) => d.slug === driver);

  if (!currentDriver) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-5xl font-black">Driver not found</h1>
      </main>
    );
  }

  return (
    <AppLayout>

          <Link
            href="/drivers"
            className="mb-12 inline-flex items-center text-red-500 transition hover:text-red-400"
          >
            ← Back to Drivers
          </Link>

          <div className="grid gap-14 lg:grid-cols-2">

            {/* Driver Image */}
            <div className="group">

              <div className="overflow-hidden rounded-3xl border border-red-600/20 bg-zinc-900 shadow-[0_0_40px_rgba(220,38,38,0.2)]">

                <Image
                  src={currentDriver.image}
                  alt={currentDriver.name}
                  width={700}
                  height={700}
                  className="h-auto w-full transition duration-700 group-hover:scale-105"
                  priority
                />

              </div>

            </div>

            {/* Driver Info */}
            <div className="flex flex-col justify-center">

              <p className="text-sm font-bold uppercase tracking-[0.45em] text-red-500">
                Driver Profile
              </p>

              <h1 className="mt-3 text-6xl font-black uppercase">
                {currentDriver.name}
              </h1>

              <p className="mt-8 text-lg leading-9 text-gray-400">
                {currentDriver.bio}
              </p>

              {/* Stat Cards */}
              <div className="mt-12 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Role
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    🏆 {currentDriver.role}
                  </p>
                </div>

                <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Joined
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    📅 {currentDriver.joined}
                  </p>
                </div>

                <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Country
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    🌍 {currentDriver.country}
                  </p>
                </div>

                <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Experience
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    ⏱️ {currentDriver.experience}
                  </p>
                </div>

              </div>

              {/* Favorite Car */}
              <div className="mt-8 rounded-2xl border border-red-600/20 bg-zinc-900 p-5">

                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Favorite Car
                </p>

                <Link
                  href={`/garage/${currentDriver.favoriteCarSlug}`}
                  className="mt-2 inline-block text-2xl font-bold text-red-500 transition hover:text-red-400"
                >
                  🚗 {currentDriver.favoriteCar} →
                </Link>

              </div>

            </div>

          </div>

          {/* Achievements */}
          <section className="mt-24">

            <p className="text-center text-sm font-bold uppercase tracking-[0.45em] text-red-500">
              Driver Stats
            </p>

            <h2 className="mt-3 text-center text-5xl font-black uppercase">
              Achievements
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {currentDriver.achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="rounded-2xl border border-red-600/20 bg-zinc-900 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                >
                  <p className="text-lg font-semibold">
                    {achievement}
                  </p>
                </div>
              ))}

            </div>

          </section>

    </AppLayout>
  );
}
