"use client";

type Props = {
  manufacturers: string[];
  selected: string;
  onChange: (value: string) => void;
};

export default function GarageFilters({
  manufacturers,
  selected,
  onChange,
}: Props) {
  return (
    <div className="mb-12 flex flex-wrap gap-4">
      <button
        onClick={() => onChange("All")}
        className={`rounded-xl px-5 py-2 font-bold transition ${
          selected === "All"
            ? "bg-red-600"
            : "bg-zinc-900 hover:bg-red-600/20"
        }`}
      >
        All
      </button>

      {manufacturers.map((manufacturer) => (
        <button
          key={manufacturer}
          onClick={() => onChange(manufacturer)}
          className={`rounded-xl px-5 py-2 font-bold transition ${
            selected === manufacturer
              ? "bg-red-600"
              : "bg-zinc-900 hover:bg-red-600/20"
          }`}
        >
          {manufacturer}
        </button>
      ))}
    </div>
  );
}