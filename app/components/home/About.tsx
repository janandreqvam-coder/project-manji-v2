import FadeIn from "../effects/FadeIn";
import Card from "../ui/Card";
import SiteContainer from "../ui/SiteContainer";

const values = [
  {
    icon: "🏁",
    title: "Passion",
    description:
      "Every member shares a passion for Japanese cars, motorsports and pushing themselves to become better drivers.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "Whether you're a beginner or an experienced racer, you'll always find people willing to help, race and improve together.",
  },
  {
    icon: "🚗",
    title: "Respect",
    description:
      "One Crew. One Passion. All Gas. No Egos. Respect on and off the track is what defines Project Manji.",
  },
];

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="relative overflow-hidden border-y border-white/10 bg-black py-10 text-white"
      >
        {/* Ambient Red Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)]" />

        <SiteContainer className="relative text-center">

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-red-500 sm:text-sm sm:tracking-[0.5em]">
          WHO WE ARE
        </p>

          <h2 className="text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
            Built by Racers.
            <br />
            For Racers.
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-gray-300 md:text-lg">
            Project Manji is more than an Assetto Corsa community.
            It&apos;s a place where drivers come together to drift, race,
            cruise, battle through mountain passes and experience
            Japanese car culture together.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {values.map((value) => (

              <Card
                key={value.title}
                className="group h-full rounded-lg border-white/10 bg-zinc-950/70 p-6 text-center"
              >

                <div className="mb-4 text-4xl transition duration-300 group-hover:scale-110">
                  {value.icon}
                </div>

                <h3 className="mb-3 text-2xl font-bold text-red-500">
                  {value.title}
                </h3>

                <p className="text-sm leading-7 text-gray-400">
                  {value.description}
                </p>

              </Card>

            ))}

          </div>

        </SiteContainer>
      </section>
    </FadeIn>
  );
}
