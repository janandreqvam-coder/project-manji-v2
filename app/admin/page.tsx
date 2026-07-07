import Link from "next/link";

import { supabase } from "@/app/lib/supabase";

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
      icon: "▣",
      label: "Cars",
      value: carCount ?? 0,
      href: "/admin/cars",
    },
    {
      icon: "●",
      label: "Drivers",
      value: driverCount ?? 0,
      href: "/admin/drivers",
    },
    {
      icon: "▤",
      label: "Events",
      value: eventCount ?? 0,
      href: "/admin/events",
    },
    {
      icon: "▧",
      label: "Gallery",
      value: galleryCount ?? 0,
      href: "/admin/gallery",
    },
  ];

  const modules = [
    {
      icon: "▣",
      title: "Cars",
      description: "Manage community builds.",
      href: "/admin/cars",
    },
    {
      icon: "●",
      title: "Drivers",
      description: "Manage driver profiles.",
      href: "/admin/drivers",
    },
    {
      icon: "▤",
      title: "Events",
      description: "Create and manage events.",
      href: "/admin/events",
    },
    {
      icon: "▧",
      title: "Gallery",
      description: "Upload and organize photos.",
      href: "/admin/gallery",
    },
  ];

  return (
    <div className="mx-auto max-w-[1450px]">
      <header className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
          Project Manji
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-6xl">
          Admin Dashboard
        </h1>

        <p className="mt-5 text-lg text-gray-300">
          Manage the Project Manji community from one place.
        </p>

        <div className="mx-auto mt-6 h-px w-24 bg-red-500" />
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Link
            key={metric.label}
            href={metric.href}
            className="group flex min-h-32 items-center gap-8 rounded-lg border border-red-600/40 bg-zinc-950/60 p-7 transition hover:-translate-y-1 hover:border-red-500 hover:bg-red-600/10"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-4xl text-red-500 transition group-hover:border-red-500/60">
              {metric.icon}
            </div>

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

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        {modules.slice(0, 3).map((module) => (
          <AdminModuleCard
            key={module.title}
            {...module}
          />
        ))}
      </section>

      <section className="mt-6">
        <AdminModuleCard
          {...modules[3]}
          wide
        />
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
  icon: string;
  title: string;
  description: string;
  href: string;
  wide?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex min-h-44 items-center gap-8 rounded-lg border border-red-600/40 bg-zinc-950/60 p-8 transition hover:-translate-y-1 hover:border-red-500 hover:bg-red-600/10 ${
        wide ? "xl:min-h-48" : ""
      }`}
    >
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-4xl text-red-500 transition group-hover:border-red-500/60">
        {icon}
      </div>

      <div>
        <h2 className="text-3xl font-black">
          {title}
        </h2>

        <p className="mt-5 text-gray-400">
          {description}
        </p>

        <p className="mt-8 font-bold text-red-500">
          Manage →
        </p>
      </div>
    </Link>
  );
}
