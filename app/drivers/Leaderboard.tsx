import { drivers } from "@/app/data/drivers";

export default function Leaderboard() {
  const sorted = [...drivers].sort((a, b) => b.achievements.length - a.achievements.length);

  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm font-bold uppercase tracking-[0.45em] text-red-500">
          TOP DRIVERS
        </p>

        <h2 className="mt-4 text-center text-5xl font-black uppercase">
          Leaderboard
        </h2>

        <div className="mt-16 space-y-6">

          {sorted.map((driver, index) => (

            <div
              key={driver.id}
              className="flex items-center justify-between rounded-3xl border border-red-600/20 bg-zinc-900 p-8"
            >

              <div>

                <p className="text-4xl">

                  {index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : index === 2
                    ? "🥉"
                    : "🏁"}

                </p>

              </div>

              <div className="flex-1 px-8">

                <h3 className="text-3xl font-black">
                  {driver.name}
                </h3>

                <p className="text-gray-400">
                  {driver.role}
                </p>

              </div>

              <div className="text-right">

                <p className="text-5xl font-black text-red-500">
                  {driver.achievements.length}
                </p>

                <p className="uppercase text-gray-400">
                  Achievements
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}