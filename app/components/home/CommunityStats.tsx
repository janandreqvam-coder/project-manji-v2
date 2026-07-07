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

        <p className="text-center text-sm font-bold uppercase tracking-[0.45em] text-red-500">
          PROJECT MANJI
        </p>

        <h2 className="mt-4 text-center text-5xl font-black uppercase md:text-6xl">
          Community Stats
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
          Live statistics from the Project Manji community.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

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
