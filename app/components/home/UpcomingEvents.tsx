import Link from "next/link";
import { events } from "../../data/events";

export default function UpcomingEvents() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.5em] text-red-500">
          COMMUNITY
        </p>

        <h2 className="text-center text-5xl font-black uppercase md:text-6xl">
          Upcoming Events
        </h2>

        <p className="mx-auto mt-6 mb-16 max-w-3xl text-center text-gray-400">
          Join our weekly drift nights, Shutoko runs and community races.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl border border-red-600/20 bg-zinc-900/80 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]"
            >
              <h3 className="text-3xl font-bold">
                {event.name}
              </h3>

              <p className="mt-5 text-gray-400">
                📅 {event.date}
              </p>

              <p className="mt-2 text-gray-400">
                📍 {event.location}
              </p>

              <div className="mt-6 inline-block rounded-lg bg-red-600 px-4 py-2 font-bold">
                {event.status}
              </div>

              <Link
                href={`/events/${event.slug}`}
                className="mt-8 block rounded-xl bg-red-600 py-3 text-center font-bold transition hover:bg-red-500"
              >
                View Event
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}