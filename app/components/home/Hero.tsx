import Image from "next/image";
import Link from "next/link";
import FadeIn from "../effects/FadeIn";
import Particles from "../effects/Particles";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <Image
        src="/logos/hero.png"
        alt="Project Manji Hero"
        fill
        priority
        className="object-cover object-center scale-100 transition duration-[6000ms]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Red Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18),transparent_70%)]" />

      {/* Floating Particles */}
      <Particles />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Hero Content */}
      <FadeIn>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">

          <Image
            src="/logos/logo.png"
            alt="Project Manji Logo"
            width={650}
            height={650}
            priority
            className="mb-10 h-auto w-full max-w-2xl drop-shadow-[0_0_40px_rgba(220,38,38,0.45)]"
          />

          <h2 className="text-2xl font-light uppercase tracking-[0.35em] text-red-500 md:text-3xl">
            Tokyo Nights • Drift • Touge • Shutoko
          </h2>

          <p className="mt-8 max-w-3xl text-xl italic leading-9 text-gray-300 md:text-3xl">
            Built on Passion.
            <br />
            Driven by Purpose.
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Welcome to Project Manji — a community built around Japanese car
            culture, competitive driving, unforgettable night cruises and
            helping every driver improve behind the wheel.
          </p>

          <div className="mt-14 flex flex-col gap-5 md:flex-row">

            <Link
              href="/garage"
              className="rounded-xl bg-red-600 px-10 py-4 text-lg font-bold shadow-[0_0_30px_rgba(220,38,38,0.35)] transition duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-[0_0_50px_rgba(220,38,38,0.55)]"
            >
              🚗 ENTER GARAGE
            </Link>

            <a
              href="https://discord.gg/VMFycskcWp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-red-600 px-10 py-4 text-lg font-bold transition duration-300 hover:bg-red-600/20 hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]"
            >
              💬 JOIN DISCORD
            </a>

          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex flex-col items-center animate-bounce">

            <span className="mb-3 text-xs uppercase tracking-[0.4em] text-gray-500">
              Scroll Down
            </span>

            <div className="h-10 w-[2px] bg-red-500" />

          </div>

        </div>
      </FadeIn>
    </section>
  );
}