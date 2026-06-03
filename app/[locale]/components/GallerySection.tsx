"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "../content/gallery";
import type { Locale } from "../content/types";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function GallerySection({
  locale,
  t,
}: {
  locale: Locale;
  t: any;
}) {
  const previewPhoto = galleryItems[0];

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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FadeUp>
            <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-black">
              <div className="relative h-[260px] overflow-hidden md:h-[340px]">
                <Image
                  src={previewPhoto.image}
                  alt={previewPhoto.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
                    {t.gallery.photosLabel}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {t.gallery.photosTitle}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <Link
                  href={`/${locale}/gallery/photos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-black text-black transition hover:bg-orange-400"
                >
                  {t.gallery.viewPhotos}
                </Link>
              </div>
            </article>
          </FadeUp>

          <FadeUp>
            <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-black">
              <div className="relative h-[260px] overflow-hidden bg-black md:h-[340px]">
                <video
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover opacity-75"
                >
                  <source src="/videos/basketball-training1.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full bg-orange-500 px-6 py-4 font-black text-black">
                    ▶
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
                    {t.gallery.videosLabel}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {t.gallery.videosTitle}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <Link
                  href={`/${locale}/gallery/videos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 w-full items-center justify-center rounded-full border border-orange-500 px-6 py-3 font-black text-orange-300 transition hover:bg-orange-500 hover:text-black"
                >
                  {t.gallery.viewVideos}
                </Link>
              </div>
            </article>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}