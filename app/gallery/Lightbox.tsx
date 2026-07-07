"use client";

import Image from "next/image";

type Props = {
  image: string;
  onClose: () => void;
};

export default function Lightbox({ image, onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-lg"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] max-w-[90vw]"
      >
        <Image
          src={image}
          alt="Gallery"
          width={1400}
          height={900}
          className="rounded-2xl object-contain"
        />

        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-2xl transition hover:bg-red-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
}