import AppLayout from "./components/ui/AppLayout";

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import CommunityStats from "./components/home/CommunityStats";
import FeaturedGarage from "./components/home/FeaturedGarage";
import DriverSpotlight from "./components/home/DriverSpotlight";
import FeaturedEvent from "./components/home/FeaturedEvent";
import Modes from "./components/home/Modes";

export default function Home() {
  return (
    <AppLayout>

      <Hero />

      <About />

      <CommunityStats />

      <FeaturedGarage />

      <DriverSpotlight />

      <FeaturedEvent />

      <Modes />

    </AppLayout>
  );
}