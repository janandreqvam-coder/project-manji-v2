import AppLayout from "./components/ui/AppLayout";
import { supabase } from "./lib/supabase";
import { cars as fallbackCars } from "./data/cars";
import { drivers as fallbackDrivers } from "./data/drivers";
import { events as fallbackEvents } from "./data/events";

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import FeaturedGarage from "./components/home/FeaturedGarage";
import DriverSpotlight from "./components/home/DriverSpotlight";
import FeaturedEvent from "./components/home/FeaturedEvent";
import Modes from "./components/home/Modes";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [
    carsResult,
    driversResult,
    eventsResult,
    carCountResult,
    driverCountResult,
    eventCountResult,
    galleryCountResult,
  ] = await Promise.all([
    supabase
      .from("cars")
      .select("*")
      .order("name")
      .limit(3),
    supabase
      .from("drivers")
      .select("*")
      .order("rating", { ascending: false })
      .limit(1),
    supabase
      .from("events")
      .select("*")
      .order("date", { ascending: true })
      .limit(1),
    supabase.from("cars").select("*", { count: "exact", head: true }),
    supabase.from("drivers").select("*", { count: "exact", head: true }),
    supabase.from("events").select("*", { count: "exact", head: true }),
    supabase.from("gallery").select("*", { count: "exact", head: true }),
  ]);

  const featuredCars = carsResult.error
    ? fallbackCars.slice(0, 3)
    : carsResult.data ?? [];

  const spotlightDriver = driversResult.error
    ? fallbackDrivers[0] ?? null
    : driversResult.data?.[0] ?? null;

  const featuredEvent = eventsResult.error
    ? fallbackEvents[0] ?? null
    : eventsResult.data?.[0] ?? null;

  return (
    <AppLayout contained={false} className="pt-0 pb-0">

      <Hero
        carCount={carCountResult.count ?? featuredCars.length}
        driverCount={driverCountResult.count ?? (spotlightDriver ? 1 : 0)}
        eventCount={eventCountResult.count ?? (featuredEvent ? 1 : 0)}
        galleryCount={galleryCountResult.count ?? 0}
      />

      <About />

      <FeaturedGarage cars={featuredCars} />

      <DriverSpotlight driver={spotlightDriver} />

      <FeaturedEvent event={featuredEvent} />

      <Modes />

    </AppLayout>
  );
}
