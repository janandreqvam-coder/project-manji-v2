import Particles from "./Particles";
import Rain from "./Rain";
import Skyline from "./Skyline";
import MouseGlow from "./MouseGlow";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Top Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.10),transparent_70%)]" />

      {/* Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-0 h-96 w-full bg-[radial-gradient(circle_at_bottom,rgba(220,38,38,0.08),transparent_70%)]" />

        {/* Skyline */}
      <Skyline />

      {/* Rain */}
      <Rain />

      {/* Floating Particles */}
      <Particles />

        {/* Mouse Glow */}
      <MouseGlow />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

    </div>
  );
}