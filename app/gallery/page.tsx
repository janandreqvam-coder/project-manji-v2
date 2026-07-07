"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "../gallery/Lightbox";

const galleryImages = [
  "/logos/Nissan Silvia S15.png",
  "/logos/Nissan Skyline R32.png",
  "/logos/Toyota Supra MK4.png",
  "/logos/Nissan Silvia S15.png",
  "/logos/Nissan Skyline R32.png",
  "/logos/Toyota Supra MK4.png",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen text-white">

      <section className="relative overflow-hidden py-24">

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.5em] text-red-500">
            PROJECT MANJI
          </p>

          <h1 className="text-center text-6xl font-black uppercase md:text-7xl">
            Gallery
          </h1>

          <p className="mx-auto mb-20 mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400">
            A collection of our favorite moments from drifting,
            Shutoko runs, racing events and community cruises.
          </p>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-red-600/20 bg-zinc-900/80 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_45px_rgba(220,38,38,0.35)]"
              >

                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  {/* Hover Text */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/30">

                    <span className="rounded-full border border-white/30 bg-black/40 px-5 py-2 text-sm font-bold tracking-widest opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                      🔍 VIEW IMAGE
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Lightbox */}

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

    </main>
  );
}