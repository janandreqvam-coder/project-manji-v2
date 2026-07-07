import Link from "next/link";
import { events } from "../data/events";
import AppLayout from "../components/ui/AppLayout";
import PageHero from "../components/ui/PageHero";

export default function EventsPage() {
  return (
    <AppLayout>
      <PageHero
        eyebrow="Community"
        title="Upcoming Events"
        description="Join Project Manji at upcoming races, drift events, championships and community meets."
      />

        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-4xl border border-red-600/20 bg-zinc-900 p-8 transition duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div>
                  <h2 className="text-3xl font-bold">
                    {event.name}
                  </h2>

                  <p className="mt-4 text-gray-400">
                    📅 {event.date}
                  </p>

                  <p className="mt-2 text-gray-400">
                    📍 {event.location}
                  </p>

                  <span className="mt-5 inline-block rounded-lg bg-red-600 px-4 py-2 font-bold">
                    {event.status}
                  </span>
                </div>

                <Link
                  href={`/events/${event.slug}`}
                  className="rounded-xl bg-red-600 px-8 py-4 text-lg font-bold transition hover:bg-red-500"
                >
                  View Event →
                </Link>

              </div>
            </div>
          ))}
        </div>

    </AppLayout>
  );
}
