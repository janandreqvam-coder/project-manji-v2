import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/logos/hero.png"
        alt="Project Manji Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        <Image
          src="/logos/logo.png"
          alt="Project Manji Logo"
          width={650}
          height={650}
          priority
          className="mb-8 w-full max-w-2xl"
        />

        <p className="max-w-3xl text-xl italic text-gray-300 md:text-3xl">
          Built on Passion.
          <br />
          Driven by Purpose.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">

          <button className="rounded-xl bg-red-600 px-8 py-4 text-xl font-bold transition hover:bg-red-500">
            ENTER GARAGE
          </button>

          <button className="rounded-xl border border-red-600 px-8 py-4 text-xl font-bold transition hover:bg-red-600/20">
            JOIN DISCORD
          </button>

        </div>

      </div>
    </section>
  );
}