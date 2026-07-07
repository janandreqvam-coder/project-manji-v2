type Props = {
  icon: string;
  value: number | string;
  label: string;
};

export default function StatCard({
  icon,
  value,
  label,
}: Props) {
  return (
    <div className="rounded-3xl border border-red-600/20 bg-zinc-900 p-8 text-center transition duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.25)]">

      <div className="text-5xl">
        {icon}
      </div>

      <h2 className="mt-5 text-5xl font-black text-red-500">
        {value}
      </h2>

      <p className="mt-3 uppercase tracking-[0.4em] text-gray-500">
        {label}
      </p>

    </div>
  );
}