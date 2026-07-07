import { notFound } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/app/lib/supabase";
import AppLayout from "@/app/components/ui/AppLayout";

type Props = {
  params: Promise<{
    car: string;
  }>;
};

export default async function CarPage({ params }: Props) {
  const { car } = await params;

  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("slug", car)
    .single();

  if (error || !data) {
    notFound();
  }

  return (
    <AppLayout>

        <div className="grid gap-12 lg:grid-cols-2">

          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-red-500">
              {data.manufacturer} • {data.year}
            </p>

            <h1 className="mt-3 text-6xl font-black">
              {data.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              {data.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <Info title="Driver" value={data.driver} />
              <Info title="Power" value={data.power} />
              <Info title="Class" value={data.class} />
              <Info title="Country" value={data.country} />
              <Info title="Weight" value={data.weight} />
              <Info title="Drive" value={data.drive} />
              <Info title="Transmission" value={data.transmission} />
              <Info title="Top Speed" value={data.topspeed} />

            </div>

          </div>

        </div>

    </AppLayout>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-red-600/20 bg-zinc-900 p-5">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold">
        {value}
      </p>
    </div>
  );
}
