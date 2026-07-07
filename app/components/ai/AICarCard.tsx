import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  image: string;
  driver: string;
  power: string;
  carClass: string;
  slug: string;
};

export default function AICarCard({
  name,
  image,
  driver,
  power,
  carClass,
  slug,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-red-600/20 bg-zinc-900">

      <Image
        src={image}
        alt={name}
        width={700}
        height={450}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-3xl font-black">
          {name}
        </h3>

        <div className="mt-5 space-y-2 text-gray-300">

          <p>👤 {driver}</p>

          <p>⚡ {power}</p>

          <p>🏁 {carClass}</p>

        </div>

        <Link
          href={`/garage/${slug}`}
          className="mt-6 block rounded-xl bg-red-600 py-3 text-center font-bold transition hover:bg-red-500"
        >
          View Build →
        </Link>

      </div>

    </div>
  );
}