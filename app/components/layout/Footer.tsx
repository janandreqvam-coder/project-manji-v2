import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-red-600/90 bg-black text-white">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(220,38,38,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-4">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-black uppercase text-red-500">
              Project Manji
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Built on Passion.
              <br />
              Driven by Purpose.
            </p>

            <p className="mt-6 text-gray-500">
              Japanese Car Culture
              <br />
              Drift • Touge • Shutoko • Racing
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Navigation
            </h3>

            <div className="space-y-3 text-gray-400">

              <Link href="/" className="block hover:text-red-500">
                Home
              </Link>

              <Link href="/garage" className="block hover:text-red-500">
                Garage
              </Link>

              <Link href="/drivers" className="block hover:text-red-500">
                Drivers
              </Link>

              <Link href="/events" className="block hover:text-red-500">
                Events
              </Link>

              <Link href="/gallery" className="block hover:text-red-500">
                Gallery
              </Link>

            </div>

          </div>

          {/* Community */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Community
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Assetto Corsa</p>

              <p>Discord Community</p>

              <p>Weekly Events</p>

              <p>Drift Championships</p>

            </div>

          </div>

          {/* Join */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Join Us
            </h3>

            <a
              href="https://discord.gg/VMFycskcWp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-red-600 px-8 py-4 font-bold transition duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.45)]"
            >
              Join Discord
            </a>

          </div>

        </div>

        <div className="mt-20 border-t border-red-600/20 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Project Manji

          <br />

          Built with ❤️ for the community.

        </div>

      </div>

    </footer>
  );
}