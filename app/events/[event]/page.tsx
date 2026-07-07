import Link from "next/link";

export default function EventPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="rounded-4xl border border-red-600/20 bg-zinc-900 p-10">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
            Project Manji
          </p>

          <h1 className="text-5xl font-black uppercase md:text-6xl">
            Event Details
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            This event page is currently under construction.
            Soon you&apos;ll be able to view:
          </p>

          <ul className="mt-8 space-y-4 text-lg text-gray-300">
            <li>🏁 Event Information</li>
            <li>📅 Date & Time</li>
            <li>📍 Track Location</li>
            <li>👥 Registered Drivers</li>
            <li>🏆 Rules & Prizes</li>
            <li>📸 Event Gallery</li>
            <li>💬 Discord Registration</li>
          </ul>

          <Link
            href="/events"
            className="mt-10 inline-block rounded-xl bg-red-600 px-8 py-4 font-bold transition hover:bg-red-500"
          >
            ← Back to Events
          </Link>

        </div>

      </section>
    </main>
  );
}
