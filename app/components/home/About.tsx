export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black to-zinc-950 py-32 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
          Project Manji
        </p>

        <h2 className="text-5xl font-black uppercase md:text-6xl">
          Built by Racers.
          <br />
          For Racers.
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-300">
          Project Manji is more than an Assetto Corsa server.
          It's a community built around drifting, touge, shutoko,
          racing, cruising, and helping each other become better drivers.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-8">
            <h3 className="mb-3 text-2xl font-bold text-red-500">
              🏁 Passion
            </h3>

            <p className="text-gray-400">
              Every member shares a love for Japanese car culture and motorsports.
            </p>
          </div>

          <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-8">
            <h3 className="mb-3 text-2xl font-bold text-red-500">
              🤝 Community
            </h3>

            <p className="text-gray-400">
              Learn, race, drift, tune, and improve together with other drivers.
            </p>
          </div>

          <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-8">
            <h3 className="mb-3 text-2xl font-bold text-red-500">
              🚗 Respect
            </h3>

            <p className="text-gray-400">
              One Crew. One Passion. All Gas. No Egos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}