import Link from "next/link";
import Image from "next/image";

import { supabase } from "@/app/lib/supabase";

import AppLayout from "@/app/components/ui/AppLayout";
import PageHero from "@/app/components/ui/PageHero";
import SectionGrid from "@/app/components/ui/SectionGrid";

export default async function DriversPage() {
  const { data: drivers, error } = await supabase
    .from("drivers")
    .select("*")
    .order("rating", { ascending: false });

  if (error) {
    console.error(error);

    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold text-red-500">
          Failed to load drivers
        </h1>
      </main>
    );
  }

  return (
    <AppLayout>

      <PageHero
        eyebrow="Project Manji"
        title="Meet Our Drivers"
        description="Every driver brings their own style, experience and passion to Project Manji."
      />

      <SectionGrid>

        {drivers?.map((driver) => (

          <Link
            key={driver.id}
            href={`/drivers/${driver.slug}`}
            className="group overflow-hidden rounded-3xl border border-red-600/20 bg-zinc-900 transition duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]"
          >

            <div className="relative h-80 overflow-hidden">

              <Image
                src={driver.image}
                alt={driver.name}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

            </div>

            <div className="p-6">

              <p className="mb-2 text-sm uppercase tracking-[0.35em] text-red-500">
                {driver.role}
              </p>

              <h2 className="text-3xl font-black">
                {driver.name}
              </h2>

              <p className="mt-4 line-clamp-3 text-gray-400">
                {driver.bio}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-gray-500">
                  ⭐ {driver.rating}
                </span>

                <span className="font-bold text-red-500">
                  View Profile →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </SectionGrid>

    </AppLayout>
  );
}
