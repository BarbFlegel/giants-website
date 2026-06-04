"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryItems } from "../../content/gallery";

export default function PhotosClient() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    image: string;
    title: string;
  } | null>(null);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <a href="/en#gallery" className="text-sm font-black text-orange-300">
          ← Back to gallery
        </a>

        <p className="mt-10 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
          Photos
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase md:text-6xl">
          Community Photos
        </h1>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <button
              key={item.image}
              type="button"
              onClick={() =>
                setSelectedPhoto({
                  image: item.image,
                  title: item.title,
                })
              }
              className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-left transition hover:border-orange-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <p className="text-sm font-black text-white">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photo"
            className="absolute right-5 top-5 z-10 rounded-full bg-orange-500 px-5 py-3 text-2xl font-black text-black"
          >
            ×
          </button>

          <div className="relative h-[90vh] w-full max-w-6xl">
            <Image
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </main>
  );
}