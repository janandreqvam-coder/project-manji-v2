import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Modes from "./components/home/Modes";
import FeaturedGarage from "./components/home/FeaturedGarage";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Modes />
      <FeaturedGarage />
    </main>
  );
}