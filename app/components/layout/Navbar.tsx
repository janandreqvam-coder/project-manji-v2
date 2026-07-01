import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-red-900/30 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Image
          src="/logos/logo.png"
          alt="Project Manji"
          width={48}
          height={48}
          priority
        />

        <div className="hidden items-center gap-8 font-semibold md:flex">

          <a href="#home" className="transition hover:text-red-500">
            Home
          </a>

          <a href="#garage" className="transition hover:text-red-500">
            Garage
          </a>

          <a href="#drivers" className="transition hover:text-red-500">
            Drivers
          </a>

          <a href="#events" className="transition hover:text-red-500">
            Events
          </a>

          <a href="#gallery" className="transition hover:text-red-500">
            Gallery
          </a>

          <a
            href="#"
            className="rounded-xl bg-red-600 px-5 py-2 transition hover:bg-red-500"
          >
            Join
          </a>

        </div>

      </div>
    </nav>
  );
}