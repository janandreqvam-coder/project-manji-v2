import Image from "next/image";
import Link from "next/link";

import FadeIn from "../effects/FadeIn";
import Particles from "../effects/Particles";
import SiteContainer from "../ui/SiteContainer";

type Props = {
  carCount: number;
  driverCount: number;
  eventCount: number;
  galleryCount: number;
};

export default function Hero({
  carCount,
  driverCount,
  eventCount,
  galleryCount,
}: Props) {
  const stats = [
    { label: "Drivers", value: driverCount, icon: "driver" },
    { label: "Community Cars", value: carCount, icon: "car" },
    { label: "Events", value: eventCount, icon: "flag" },
    { label: "Photos", value: galleryCount, icon: "camera" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-red-600/20 bg-black text-white"
    >
      <Image
        src="/logos/hero.png"
        alt="Project Manji street racing scene"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <Particles />

      <SiteContainer className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-end pb-8 pt-24">
        <FadeIn>
          <div className="max-w-3xl pb-10">
            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
              Built by racers.
              <br />
              For{" "}
              <span className="text-red-500">
                racers.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              Project Manji is a community built around Japanese car culture,
              competitive driving, night runs and unforgettable events.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/garage"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-7 py-3 text-sm font-black uppercase tracking-wide shadow-[0_0_28px_rgba(220,38,38,0.35)] transition hover:-translate-y-0.5 hover:bg-red-500"
              >
                Enter Garage
              </Link>

              <a
                href="https://discord.gg/VMFycskcWp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/40 bg-black/45 px-7 py-3 text-sm font-black uppercase tracking-wide backdrop-blur transition hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-600/15"
              >
                Join Discord
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="grid overflow-hidden rounded-lg border border-white/10 bg-zinc-950/85 shadow-2xl shadow-black/50 backdrop-blur md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 border-b border-white/10 px-6 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <HeroIcon name={stat.icon} />

              <div>
                <p className="text-2xl font-black">
                  {formatNumber(stat.value)}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function HeroIcon({ name }: { name: string }) {
  const className = "h-7 w-7 text-red-500";

  if (name === "car") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 12l2-5h10l2 5M4 12h16v6H4zM7 18v2M17 18v2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "flag") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 21V4h13l-2 4 2 4H5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "camera") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 8h4l2-3h4l2 3h4v11H4zM12 17a4 4 0 100-8 4 4 0 000 8z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
