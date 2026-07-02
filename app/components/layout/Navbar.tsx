import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-red-900/30 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/">
          <Image
            src="/logos/logo.png"
            alt="Project Manji"
            width={48}
            height={48}
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 font-semibold md:flex">

          <Link href="/" className="transition hover:text-red-500">
            Home
          </Link>

          <Link href="/garage" className="transition hover:text-red-500">
            Garage
          </Link>

          <Link href="/drivers" className="transition hover:text-red-500">
            Drivers
          </Link>

          <Link href="/events" className="transition hover:text-red-500">
            Events
          </Link>

          <Link href="/gallery" className="transition hover:text-red-500">
            Gallery
          </Link>

          <Link
            href="/join"
            className="rounded-xl bg-red-600 px-5 py-2 transition hover:bg-red-500"
          >
            Join
          </Link>

        </div>

      </div>
    </nav>
  );
}