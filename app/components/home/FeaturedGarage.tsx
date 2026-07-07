import CarCard from "./CarCard";
import Button from "../ui/Button";
import SiteContainer from "../ui/SiteContainer";

type Car = React.ComponentProps<typeof CarCard>["car"];

type Props = {
  cars: Car[];
};

export default function FeaturedGarage({ cars }: Props) {
  return (
    <section className="relative overflow-hidden bg-black py-12 text-white">
      <SiteContainer>
        <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/40 md:p-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                Featured Garage
              </p>

              <h2 className="mt-2 text-3xl font-black uppercase leading-none md:text-4xl">
                Community Builds
              </h2>
            </div>

            <Button href="/garage" variant="secondary" className="rounded-md px-5 py-2 text-xs">
              View All Builds
            </Button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {cars && cars.length > 0 ? (
              cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))
            ) : (
              <div className="col-span-full rounded-lg border border-red-600/20 bg-black/50 p-10 text-center">
                <h3 className="text-2xl font-black text-red-500">
                  No Cars Yet
                </h3>

                <p className="mt-3 text-gray-400">
                  The community garage is waiting for its first build.
                </p>
              </div>
            )}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
