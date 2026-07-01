const modes = [
  {
    icon: "🏁",
    title: "Drifting",
    description:
      "Master the art of sideways driving with tandem sessions and competitions.",
  },
  {
    icon: "⛰️",
    title: "Touge",
    description:
      "Battle winding mountain roads where precision matters more than power.",
  },
  {
    icon: "🌃",
    title: "Shutoko",
    description:
      "Experience high-speed highway cruising inspired by Tokyo's expressways.",
  },
  {
    icon: "🏎️",
    title: "Racing",
    description:
      "Competitive grip racing with clean battles and improving lap times.",
  },
  {
    icon: "🚗",
    title: "Cruises",
    description:
      "Relaxed community drives where everyone is welcome regardless of skill.",
  },
  {
    icon: "🎉",
    title: "Events",
    description:
      "Weekly drift nights, championships, cruises and special community events.",
  },
];

export default function Modes() {
  return (
    <section
      id="modes"
      className="bg-black py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.4em] text-red-500">
          Community
        </p>

        <h2 className="mb-16 text-center text-5xl font-black uppercase md:text-6xl">
          Game Modes
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {modes.map((mode) => (
            <div
              key={mode.title}
              className="rounded-2xl border border-red-600/20 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]"
            >
              <div className="mb-6 text-5xl">
                {mode.icon}
              </div>

              <h3 className="mb-4 text-3xl font-bold">
                {mode.title}
              </h3>

              <p className="leading-8 text-gray-400">
                {mode.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}