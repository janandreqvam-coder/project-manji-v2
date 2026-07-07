import SiteContainer from "../ui/SiteContainer";
import StatCard from "../ui/StatCard";

type Props = {
  carCount: number;
  driverCount: number;
  eventCount: number;
  galleryCount: number;
};

export default function CommunityStats({
  carCount,
  driverCount,
  eventCount,
  galleryCount,
}: Props) {
  const stats = [
    {
      icon: "🚗",
      value: carCount ?? 0,
      label: "Community Cars",
    },
    {
      icon: "👤",
      value: driverCount ?? 0,
      label: "Drivers",
    },
    {
      icon: "📅",
      value: eventCount ?? 0,
      label: "Events",
    },
    {
      icon: "📸",
      value: galleryCount ?? 0,
      label: "Photos",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_70%)]" />

      <SiteContainer>

        <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-red-500 sm:text-sm sm:tracking-[0.45em]">
          PROJECT MANJI
        </p>

        <h2 className="mt-4 text-center text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
          Community Stats
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
          Live statistics from the Project Manji community.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">

          {stats.map((stat) => (

            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />

          ))}

        </div>

      </SiteContainer>

    </section>
  );
}
