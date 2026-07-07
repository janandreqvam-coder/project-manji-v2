import { theme } from "./theme";
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
    <header className={`mx-auto max-w-4xl ${theme.layout.heroGap} text-center`}>

      <p className="text-sm font-bold uppercase tracking-[0.5em] text-red-500">
        {eyebrow}
      </p>

      <h1 className="mt-6 text-5xl font-black uppercase md:text-7xl">
        {title}
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        {description}
      </p>

    </header>
  );
}