import FadeIn from "../effects/FadeIn";
import Card from "../ui/Card";

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
        className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-32 text-white"
      >
        {/* Ambient Red Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.5em] text-red-500">
            WHO WE ARE
          </p>

          <h2 className="text-5xl font-black uppercase md:text-7xl">
            Built by Racers.
            <br />
            For Racers.
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-gray-300">
            Project Manji is more than an Assetto Corsa community.
            It's a place where drivers come together to drift, race,
            cruise, battle through mountain passes and experience
            Japanese car culture together.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            {values.map((value) => (

              <Card
                key={value.title}
                className="group h-full p-8 text-center"
              >

                <div className="mb-6 text-6xl transition duration-300 group-hover:scale-110">
                  {value.icon}
                </div>

                <h3 className="mb-4 text-3xl font-bold text-red-500">
                  {value.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {value.description}
                </p>

              </Card>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}