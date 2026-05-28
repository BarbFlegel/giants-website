"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryItems } from "../content/gallery";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function GallerySection({ t }: { t: any }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const previewItems = galleryItems.slice(0, 2);

  return (
    <section
      id="gallery"
      className="scroll-mt-40 bg-zinc-950 px-6 py-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label={t.labels.gallery}
            title={t.sectionTitles.gallery}
            description={t.gallery.text}
          />
        </FadeUp>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {previewItems.map((item, index) => (
            <FadeUp key={`${item.image}-${index}`}>
              <article
                className={`group overflow-hidden rounded-3xl border border-zinc-800 bg-black transition duration-500 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] ${
                  index === 1 ? "hidden sm:block" : ""
                }`}
              >
                <div className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[360px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4">
                    <h3 className="text-base font-bold text-white md:text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsGalleryOpen(true)}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-orange-500 px-8 py-3 text-sm font-black text-orange-300 transition hover:bg-orange-500 hover:text-black"
          >
            See more
          </button>
        </div>
      </div>

      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-[999] overflow-y-auto bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Full gallery"
        >
          <div className="mx-auto max-w-6xl py-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-3xl font-black text-white">
                {t.sectionTitles.gallery}
              </h2>

              <button
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="rounded-full bg-orange-500 px-5 py-3 font-black text-black transition hover:scale-105 hover:bg-orange-400"
              >
                Close
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <article
                  key={`${item.image}-modal-${index}`}
                  className="group overflow-hidden rounded-3xl border border-zinc-800 bg-black"
                >
                  <div className="relative h-[240px] overflow-hidden md:h-[320px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4">
                      <h3 className="text-base font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}