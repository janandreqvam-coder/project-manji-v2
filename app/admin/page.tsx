import Link from "next/link";

import { supabase } from "@/app/lib/supabase";

type DashboardIcon = "calendar" | "car" | "grid" | "image" | "user";

export default async function AdminPage() {
  const [
    { count: carCount },
    { count: driverCount },
    { count: eventCount },
    { count: galleryCount },
  ] = await Promise.all([
    supabase.from("cars").select("*", { count: "exact", head: true }),
    supabase.from("drivers").select("*", { count: "exact", head: true }),
    supabase.from("events").select("*", { count: "exact", head: true }),
    supabase.from("gallery").select("*", { count: "exact", head: true }),
  ]);

  const metrics = [
    {
      icon: "car" as const,
      label: "Cars",
      value: carCount ?? 0,
      href: "/admin/cars",
    },
    {
      icon: "user" as const,
      label: "Drivers",
      value: driverCount ?? 0,
      href: "/admin/drivers",
    },
    {
      icon: "calendar" as const,
      label: "Events",
      value: eventCount ?? 0,
      href: "/admin/events",
    },
    {
      icon: "image" as const,
      label: "Gallery",
      value: galleryCount ?? 0,
      href: "/admin/gallery",
    },
  ];

  const modules = [
    {
      icon: "car" as const,
      title: "Cars",
      description: "Manage community builds.",
      href: "/admin/cars",
    },
    {
      icon: "user" as const,
      title: "Drivers",
      description: "Manage driver profiles.",
      href: "/admin/drivers",
    },
    {
      icon: "calendar" as const,
      title: "Events",
      description: "Create and manage events.",
      href: "/admin/events",
    },
    {
      icon: "image" as const,
      title: "Gallery",
      description: "Upload and organize photos.",
      href: "/admin/gallery",
    },
  ];

  return (
    <div>
      <header className="mx-auto max-w-4xl pb-2 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
          Project Manji
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl xl:text-6xl">
          Admin Dashboard
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          Manage the Project Manji community from one place.
        </p>

        <div className="mx-auto mt-6 h-px w-24 bg-red-500" />
      </header>

      <section className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Link
            key={metric.label}
            href={metric.href}
            className="group flex min-h-32 items-center gap-6 rounded-lg border border-red-600/40 bg-zinc-950/70 p-6 transition hover:-translate-y-1 hover:border-red-500 hover:bg-red-600/10"
          >
            <DashboardIcon name={metric.icon} />

            <div>
              <p className="text-5xl font-black text-red-500">
                {metric.value}
              </p>

              <p className="mt-2 text-sm font-bold uppercase tracking-wider text-white">
                {metric.label}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-3">
        {modules.slice(0, 3).map((module) => (
          <AdminModuleCard key={module.title} {...module} />
        ))}
      </section>

      <section className="mt-5">
        <AdminModuleCard {...modules[3]} wide />
      </section>
    </div>
  );
}

function AdminModuleCard({
  icon,
  title,
  description,
  href,
  wide = false,
}: {
  icon: DashboardIcon;
  title: string;
  description: string;
  href: string;
  wide?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex min-h-44 items-center gap-6 rounded-lg border border-red-600/40 bg-zinc-950/70 p-7 transition hover:-translate-y-1 hover:border-red-500 hover:bg-red-600/10 ${
        wide ? "xl:min-h-48" : ""
      }`}
    >
      <DashboardIcon name={icon} />

      <div>
        <h2 className="text-3xl font-black">{title}</h2>

        <p className="mt-4 text-gray-400">{description}</p>

        <p className="mt-7 font-bold text-red-500">Manage -&gt;</p>
      </div>
    </Link>
  );
}

function DashboardIcon({ name }: { name: DashboardIcon }) {
  const common =
    "h-20 w-20 shrink-0 rounded-full border border-zinc-800 bg-zinc-900 p-5 text-red-500 transition group-hover:border-red-500/60";

  if (name === "car") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 11l2-5h10l2 5M4 11h16v7H4zM7 18v2M17 18v2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
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

  if (name === "calendar") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 3v4M17 3v4M4 9h16M5 5h14v16H5z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "image") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 5h16v14H4zM8 13l3-3 3 4 2-2 4 5"
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
    <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
