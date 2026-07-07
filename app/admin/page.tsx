import Link from "next/link";

import { supabase } from "@/app/lib/supabase";
import Button from "@/app/components/ui/Button";

type CarRow = {
  id: number;
  name: string;
  driver: string | null;
  class: string | null;
  power: string | null;
};

type DriverRow = {
  id: number;
  name: string;
  role: string | null;
  country: string | null;
};

type EventRow = {
  id: number;
  slug: string;
  name: string;
  date: string;
  status: string | null;
};

export default async function AdminPage() {
  const [
    { count: carCount },
    { count: driverCount },
    { count: eventCount },
    { count: galleryCount },
    { data: recentCars },
    { data: recentDrivers },
    { data: upcomingEvents },
  ] = await Promise.all([
    supabase.from("cars").select("*", { count: "exact", head: true }),
    supabase.from("drivers").select("*", { count: "exact", head: true }),
    supabase.from("events").select("*", { count: "exact", head: true }),
    supabase.from("gallery").select("*", { count: "exact", head: true }),
    supabase
      .from("cars")
      .select("id,name,driver,class,power")
      .order("name")
      .limit(5),
    supabase
      .from("drivers")
      .select("id,name,role,country")
      .order("name")
      .limit(5),
    supabase
      .from("events")
      .select("id,slug,name,date,status")
      .order("date", { ascending: true })
      .limit(4),
  ]);

  const metrics = [
    {
      label: "Cars",
      value: carCount ?? 0,
      detail: "Garage entries",
      href: "/admin/cars",
    },
    {
      label: "Drivers",
      value: driverCount ?? 0,
      detail: "Community profiles",
      href: "/admin/drivers",
    },
    {
      label: "Events",
      value: eventCount ?? 0,
      detail: "Calendar records",
      href: "/admin/events",
    },
    {
      label: "Media",
      value: galleryCount ?? 0,
      detail: "Gallery assets",
      href: "/admin/gallery",
    },
  ];

  const modules = [
    {
      title: "Garage CMS",
      description: "Add builds, update specs, and manage featured cars.",
      href: "/admin/cars",
      action: "Manage cars",
    },
    {
      title: "Driver Directory",
      description: "Maintain driver profiles, roles, experience, and links.",
      href: "/admin/drivers",
      action: "Manage drivers",
    },
    {
      title: "Events Calendar",
      description: "Publish sessions, update status, and review event details.",
      href: "/admin/events",
      action: "Manage events",
    },
    {
      title: "Gallery Library",
      description: "Curate media used across the public community pages.",
      href: "/admin/gallery",
      action: "Manage media",
    },
  ];

  return (
    <div className="space-y-8">
      <header className="rounded-2xl border border-red-600/20 bg-zinc-950/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] md:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">
              Content management
            </p>

            <h1 className="mt-4 text-4xl font-black uppercase md:text-5xl">
              Admin Dashboard
            </h1>

            <p className="mt-4 max-w-3xl leading-8 text-gray-400">
              Manage Project Manji content from one focused workspace. Review
              live records, jump into publishing tools, and keep the community
              pages current.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/admin/cars/new">
              Add car
            </Button>

            <Button href="/" variant="secondary">
              View site
            </Button>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Link
            key={metric.label}
            href={metric.href}
            className="rounded-2xl border border-red-600/20 bg-zinc-950/80 p-5 transition hover:-translate-y-1 hover:border-red-500/60 hover:bg-zinc-900"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              {metric.label}
            </p>

            <p className="mt-4 text-4xl font-black text-red-500">
              {metric.value}
            </p>

            <p className="mt-2 text-sm text-gray-400">
              {metric.detail}
            </p>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-red-600/20 bg-zinc-950/80 p-6">
          <div className="flex flex-col gap-3 border-b border-red-600/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Content Modules
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Primary areas for publishing and maintenance.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {modules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="rounded-xl border border-red-600/10 bg-black/30 p-5 transition hover:border-red-500/50 hover:bg-red-600/10"
              >
                <h3 className="text-xl font-black">
                  {module.title}
                </h3>

                <p className="mt-3 min-h-14 text-sm leading-6 text-gray-400">
                  {module.description}
                </p>

                <p className="mt-5 text-sm font-bold text-red-500">
                  {module.action}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-red-600/20 bg-zinc-950/80 p-6">
          <h2 className="text-2xl font-black">
            Publishing Health
          </h2>

          <div className="mt-6 space-y-4">
            <HealthRow
              label="Garage content"
              value={carCount ? "Active" : "Needs entries"}
              healthy={Boolean(carCount)}
            />

            <HealthRow
              label="Driver directory"
              value={driverCount ? "Active" : "Needs profiles"}
              healthy={Boolean(driverCount)}
            />

            <HealthRow
              label="Event calendar"
              value={eventCount ? "Scheduled" : "Needs events"}
              healthy={Boolean(eventCount)}
            />

            <HealthRow
              label="Gallery"
              value={galleryCount ? "Has media" : "Needs media"}
              healthy={Boolean(galleryCount)}
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <RecentPanel title="Recent Cars" href="/admin/cars">
          {(recentCars as CarRow[] | null)?.map((car) => (
            <RecordRow
              key={car.id}
              title={car.name}
              meta={`${car.driver ?? "No driver"} / ${car.class ?? "No class"}`}
              badge={car.power ?? "No power"}
            />
          ))}
        </RecentPanel>

        <RecentPanel title="Drivers" href="/admin/drivers">
          {(recentDrivers as DriverRow[] | null)?.map((driver) => (
            <RecordRow
              key={driver.id}
              title={driver.name}
              meta={driver.role ?? "No role"}
              badge={driver.country ?? "No country"}
            />
          ))}
        </RecentPanel>

        <RecentPanel title="Upcoming Events" href="/admin/events">
          {(upcomingEvents as EventRow[] | null)?.map((event) => (
            <RecordRow
              key={event.id}
              title={event.name}
              meta={event.date}
              badge={event.status ?? "Draft"}
            />
          ))}
        </RecentPanel>
      </section>
    </div>
  );
}

function HealthRow({
  label,
  value,
  healthy,
}: {
  label: string;
  value: string;
  healthy: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-red-600/10 bg-black/30 p-4">
      <div>
        <p className="font-bold">
          {label}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          {value}
        </p>
      </div>

      <span
        className={`h-3 w-3 rounded-full ${
          healthy ? "bg-green-400" : "bg-yellow-400"
        }`}
      />
    </div>
  );
}

function RecentPanel({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-red-600/20 bg-zinc-950/80 p-6">
      <div className="flex items-center justify-between gap-4 border-b border-red-600/20 pb-4">
        <h2 className="text-xl font-black">
          {title}
        </h2>

        <Link
          href={href}
          className="text-sm font-bold text-red-500 hover:text-red-400"
        >
          Open
        </Link>
      </div>

      <div className="mt-4 space-y-3">
        {children || (
          <p className="rounded-xl border border-red-600/10 bg-black/30 p-4 text-sm text-gray-500">
            No records found.
          </p>
        )}
      </div>
    </div>
  );
}

function RecordRow({
  title,
  meta,
  badge,
}: {
  title: string;
  meta: string;
  badge: string;
}) {
  return (
    <div className="rounded-xl border border-red-600/10 bg-black/30 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-bold">
            {title}
          </p>

          <p className="mt-1 truncate text-sm text-gray-500">
            {meta}
          </p>
        </div>

        <span className="shrink-0 rounded-lg border border-red-600/20 bg-red-600/10 px-3 py-1 text-xs font-bold text-red-400">
          {badge}
        </span>
      </div>
    </div>
  );
}
