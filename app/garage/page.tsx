import FeaturedGarage from "../components/home/FeaturedGarage";

export default function GaragePage() {
  return (
    <main className="min-h-screen bg-black pt-24 text-white">

      <section className="mx-auto max-w-5xl px-6 py-20">

        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.4em] text-red-500">
          Community
        </p>

        <h1 className="mb-16 text-center text-6xl font-black uppercase">
          Garage
        </h1>

        <FeaturedGarage />

      </section>

    </main>
  );
}