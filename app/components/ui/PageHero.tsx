type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <header className="mx-auto mb-14 max-w-4xl pt-4 text-center md:mb-20">

      <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500 sm:text-sm sm:tracking-[0.5em]">
        {eyebrow}
      </p>

      <h1 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
        {title}
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
        {description}
      </p>

    </header>
  );
}
