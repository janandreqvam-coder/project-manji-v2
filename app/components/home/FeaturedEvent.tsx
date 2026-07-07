import EventCountdown from "./EventCountdown";

import Button from "../ui/Button";
import Card from "../ui/Card";
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
      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)]" />

        <SiteContainer>

          <h2 className="text-center text-5xl font-black uppercase">
            No Upcoming Events
          </h2>

          <p className="mt-6 text-center text-gray-400">
            Check back soon for the next Project Manji event.
          </p>

        </SiteContainer>

      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-24">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)]" />

      <SiteContainer>

        <p className="text-center text-sm font-bold uppercase tracking-[0.45em] text-red-500">
          NEXT EVENT
        </p>

        <h2 className="mt-4 text-center text-5xl font-black uppercase md:text-6xl">
          {event.name}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400">
          {event.description}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-4">

          <Card className="p-6 text-center">
            <div className="text-4xl">📅</div>

            <p className="mt-4 text-lg font-bold">
              {event.date}
            </p>

            <p className="text-gray-400">
              Date
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-4xl">🕗</div>

            <p className="mt-4 text-lg font-bold">
              {event.time}
            </p>

            <p className="text-gray-400">
              Time
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-4xl">📍</div>

            <p className="mt-4 text-lg font-bold">
              {event.location}
            </p>

            <p className="text-gray-400">
              Location
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-4xl">🏁</div>

            <p className="mt-4 text-lg font-bold">
              {event.status}
            </p>

            <p className="text-gray-400">
              Status
            </p>
          </Card>

        </div>

        <div className="mt-16">

          <p className="mb-6 text-center text-sm font-bold uppercase tracking-[0.4em] text-red-500">
            Event Starts In
          </p>

          <EventCountdown
            date={event.date}
            time={event.time}
          />

        </div>

        <div className="mt-16 flex justify-center">

          <Button href={event.discord}>
            🚗 Join Event
          </Button>

        </div>

      </SiteContainer>

    </section>
  );
}
