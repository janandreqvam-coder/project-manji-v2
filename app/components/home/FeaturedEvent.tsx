import EventCountdown from "./EventCountdown";

import Button from "../ui/Button";
import SiteContainer from "../ui/SiteContainer";

type Event = {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: string;
  discord: string;
};

type Props = {
  event: Event | null;
};

export default function FeaturedEvent({ event }: Props) {
  if (!event) {
    return (
      <section className="relative overflow-hidden bg-black py-12">
        <SiteContainer>
          <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-8 text-center">
            <h2 className="text-3xl font-black uppercase">
              No Upcoming Events
            </h2>

            <p className="mt-4 text-gray-400">
              Check back soon for the next Project Manji event.
            </p>
          </div>
        </SiteContainer>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-black py-12 text-white">
      <SiteContainer>
        <div className="grid overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/40 lg:grid-cols-[1fr_0.9fr]">
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                Next Event
              </p>

              <span className="rounded border border-red-500/40 px-2 py-1 text-[10px] font-bold uppercase text-red-400">
                {event.status}
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-black uppercase leading-none md:text-4xl">
              {event.name}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              {event.description}
            </p>

            <div className="mt-7 grid gap-4 text-sm text-gray-400 sm:grid-cols-4">
              <EventDetail label="Date" value={event.date} />
              <EventDetail label="Time" value={event.time} />
              <EventDetail label="Location" value={event.location} />
              <EventDetail label="Status" value={event.status} />
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                Event Starts In
              </p>

              <EventCountdown date={event.date} time={event.time} />
            </div>
          </div>

          <div className="relative flex min-h-72 items-end justify-start overflow-hidden border-t border-white/10 bg-[url('/logos/hero.png')] bg-cover bg-center p-6 lg:border-l lg:border-t-0 md:p-8">
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="relative">
              <Button href={event.discord} className="rounded-md px-7 py-3 text-sm">
                Join Event on Discord
              </Button>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

function EventDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-red-600/30 pl-4">
      <p className="font-bold text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
        {label}
      </p>
    </div>
  );
}
