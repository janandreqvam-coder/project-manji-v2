import Image from "next/image";

export default function Skyline() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-20">
      <Image
        src="/backgrounds/tokyo-skyline.png"
        alt="Tokyo Skyline"
        width={1920}
        height={350}
        priority
        className="h-auto w-full object-cover"
      />
    </div>
  );
}