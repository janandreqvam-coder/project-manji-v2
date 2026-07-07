import CarCard from "./CarCard";
import Button from "../ui/Button";
import SiteContainer from "../ui/SiteContainer";
import SectionGrid from "../ui/SectionGrid";

type Car = React.ComponentProps<typeof CarCard>["car"];

type Props = {
  cars: Car[];
};

export default function FeaturedGarage({ cars }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-32 text-white">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)]" />

      <SiteContainer>

        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.5em] text-red-500">
          FEATURED GARAGE
        </p>

        <h2 className="text-center text-5xl font-black uppercase md:text-7xl">
          Community Builds
        </h2>

        <p className="mx-auto mt-8 mb-20 max-w-3xl text-center text-lg leading-8 text-gray-400">
          Discover some of the newest builds from the Project Manji community.
          Every car has its own story, specifications and driver.
        </p>

        <SectionGrid>

          {cars && cars.length > 0 ? (

            cars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
              />
            ))

          ) : (

            <div className="col-span-full rounded-3xl border border-red-600/20 bg-zinc-900 p-12 text-center">

              <h3 className="text-3xl font-black text-red-500">
                No Cars Yet
              </h3>

              <p className="mt-4 text-gray-400">
                The community garage is waiting for its first build.
              </p>

            </div>

          )}

        </SectionGrid>

        <div className="mt-20 flex justify-center">

          <Button href="/garage">
            🚗 View All Builds
          </Button>

        </div>

      </SiteContainer>

    </section>
  );
}
