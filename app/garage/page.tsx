import CarCard from "../components/home/CarCard";
import { supabase } from "@/app/lib/supabase";

import Layout from "@/app/components/ui/Layout";
import PageHero from "@/app/components/ui/PageHero";
import SectionGrid from "@/app/components/ui/SectionGrid";

export default async function GaragePage() {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .order("name");

  if (error) {
    console.error(error);

    return (
      <Layout>

        <PageHero
          eyebrow="Error"
          title="Community Garage"
          description="Something went wrong while loading the garage."
        />

        <div className="text-center">

          <h2 className="text-4xl font-black text-red-500">
            Failed to load cars
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Please try again later.
          </p>

        </div>

      </Layout>
    );
  }

  return (
    <Layout>

      <PageHero
        eyebrow="Project Manji"
        title="Community Garage"
        description="Browse the community's featured drift, racing, touge and Shutoko builds. Every car has its own story, specifications and driver."
      />

      {cars && cars.length > 0 ? (
        <SectionGrid>

          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}

        </SectionGrid>
      ) : (
        <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-10 text-center">

          <h2 className="text-3xl font-bold text-yellow-400">
            No cars found
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            There are currently no cars in the database.
          </p>

        </div>
      )}

    </Layout>
  );
}