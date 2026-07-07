export const theme = {
  layout: {
    width: "max-w-7xl",
    top: "pt-12",
    bottom: "pb-32",
    sides: "px-6 sm:px-8 lg:px-10",

    heroGap: "mb-24",
    sectionGap: "mt-20",
    cardGap: "gap-8",
  },

  navbar: {
    width: "max-w-7xl",
    height: "h-20",
    padding: "px-6 sm:px-8 lg:px-10",
  },

  sidebar: {
    width: "w-72",
    top: "top-28",
  },

  card: {
    radius: "rounded-3xl",
    border: "border border-red-600/20",
    background: "bg-zinc-800/80",
    hover:
      "hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.35)]",
  },

  button: {
    primary:
      "rounded-xl bg-red-600 px-6 py-3 font-bold transition hover:bg-red-500",

    secondary:
      "rounded-xl border border-red-600/20 bg-zinc-900 px-6 py-3 font-bold transition hover:border-red-500",
  },

  input: {
    base:
      "w-full rounded-xl border border-red-600/20 bg-black p-4 outline-none transition focus:border-red-500",
  },

  hero: {
    eyebrow:
      "text-sm font-bold uppercase tracking-[0.5em] text-red-500",

    title:
      "mt-6 text-5xl font-black uppercase md:text-7xl",

    description:
      "mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400",
  },

  section: {
    spacing: "space-y-12",
  },
};
