import SiteContainer from "../ui/SiteContainer";

const modes = [
  {
    icon: "🏁",
    title: "Drifting",
    description:
      "Master the art of sideways driving with tandem sessions, competitions and precision driving.",
  },
  {
    icon: "⛰️",
    title: "Touge",
    description:
      "Attack mountain roads where skill, courage and precision matter more than horsepower.",
  },
  {
    icon: "🌃",
    title: "Shutoko",
    description:
      "Race through Tokyo's legendary expressways at incredible speeds under the city lights.",
  },
  {
    icon: "🏎️",
    title: "Racing",
    description:
      "Compete in clean circuit racing with close battles, strategy and consistent lap times.",
  },
  {
    icon: "🚗",
    title: "Cruises",
    description:
      "Relax with the community during scenic drives across beautiful maps and highways.",
  },
  {
    icon: "🎌",
    title: "Community Events",
    description:
      "Weekly championships, drift nights, photo sessions and unforgettable community gatherings.",
  },
];

export default function Modes() {
  return (
    <section
      id="modes"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-32 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.08),transparent_60%)]" />

      <SiteContainer className="relative">

        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.5em] text-red-500">
          PROJECT MANJI
        </p>

        <h2 className="text-center text-5xl font-black uppercase md:text-7xl">
          Game Modes
        </h2>

        <p className="mx-auto mt-8 mb-20 max-w-3xl text-center text-lg leading-8 text-gray-400">
          Experience everything Project Manji has to offer, from technical
          drifting and mountain passes to high-speed Shutoko runs,
          competitive racing and unforgettable community events.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {modes.map((mode) => (
            <div
              key={mode.title}
              className="group relative overflow-hidden rounded-3xl border border-red-600/20 bg-zinc-900/80 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-3 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.35)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.12),transparent_70%)]" />

              <div className="relative">

                <div className="mb-6 text-6xl transition duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {mode.icon}
                </div>

                <h3 className="mb-4 text-3xl font-bold transition group-hover:text-red-500">
                  {mode.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {mode.description}
                </p>

                <div className="mt-8 inline-flex items-center text-sm font-bold uppercase tracking-widest text-red-500 opacity-0 transition duration-500 group-hover:opacity-100">
                  Explore →
                </div>

              </div>

            </div>
          ))}

        </div>

      </SiteContainer>
    </section>
  );
}
