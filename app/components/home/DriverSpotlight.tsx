import Image from "next/image";

import { supabase } from "@/app/lib/supabase";

import Button from "../ui/Button";
import Card from "../ui/Card";

export default async function DriverSpotlight() {
  const { data: driver } = await supabase
    .from("drivers")
    .select("*")
    .limit(1)
    .single();

  if (!driver) return null;

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-32 text-white">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.5em] text-red-500">
          COMMUNITY
        </p>

        <h2 className="mb-16 text-center text-5xl font-black uppercase md:text-6xl">
          Driver Spotlight
        </h2>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <Image
            src={driver.image}
            alt={driver.name}
            width={700}
            height={700}
            className="rounded-3xl border border-red-600/20 object-cover"
          />

          <div>

            <p className="uppercase tracking-[0.4em] text-red-500">
              {driver.role}
            </p>

            <h3 className="mt-3 text-6xl font-black">
              {driver.name}
            </h3>

            <p className="mt-8 text-xl leading-9 text-gray-400">
              {driver.bio}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <Card className="p-5">
                🏁 {driver.discipline}
              </Card>

              <Card className="p-5">
                🌍 {driver.country}
              </Card>

              <Card className="p-5">
                🚗 {driver.favoriteCar}
              </Card>

              <Card className="p-5">
                ⭐ {driver.experience}
              </Card>

            </div>

            <div className="mt-10">

              <Button href={`/drivers/${driver.slug}`}>
                View Driver →
              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}