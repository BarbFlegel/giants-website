"use client";

import Image from "next/image";
import { useState } from "react";
import { eventItems } from "../content/events";
import type { EventItem, Locale } from "../content/types";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function EventsSection({
  locale,
  t,
}: {
  locale: Locale;
  t: any;
}) {
  const featured: EventItem | undefined = eventItems[0];
  const pastEvents = eventItems.slice(1, 4);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  if (!featured) return null;

  return (
    <section id="events" className="scroll-mt-40 bg-black px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label={t.labels.events}
            title={t.sectionTitles.events}
            description="Current concepts, upcoming moments, and GIANTS community experiences."
          />
        </FadeUp>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeUp>
            <button
              type="button"
              onClick={() => setIsPosterOpen(true)}
              aria-label="Open birthday event poster"
              className="group block w-full overflow-hidden rounded-3xl border border-orange-500/40 bg-zinc-900 text-left transition hover:-translate-y-1 hover:border-orange-400/70 hover:shadow-[0_0_35px_rgba(249,115,22,0.18)]"
            >
              <div className="relative h-[280px] w-full overflow-hidden bg-black sm:h-[380px] md:h-[460px] lg:h-[520px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                />
              </div>
            </button>
          </FadeUp>

          <FadeUp>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
              <p className="mb-4 inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase text-black">
                {featured.status}
              </p>

              <h3 className="text-3xl font-black text-white md:text-4xl">
                {featured.title}
              </h3>

              {(featured.date || featured.time) && (
                <p className="mt-4 text-orange-300">
                  {[featured.date, featured.time].filter(Boolean).join(" • ")}
                </p>
              )}

              {featured.location && (
                <p className="mt-2 text-zinc-300">{featured.location}</p>
              )}

              <p className="mt-6 max-w-2xl leading-7 text-zinc-300">
                A premium birthday basketball experience built around games,
                teamwork, movement, music, and unforgettable GIANTS moments.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                <p>• Basketball-inspired challenges</p>
                <p>• Team wars & mini games</p>
                <p>• MVP birthday spotlight</p>
                <p>• High-energy group atmosphere</p>
              </div>

              <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
                <a
                  href={`/${locale}/contact`}
                  className="inline-flex min-h-16 w-full items-center justify-center rounded-full bg-orange-500 px-8 py-5 text-base font-black text-black transition hover:scale-105 hover:bg-orange-400"
                >
                  {t.events.askEvent}
                </a>

                <a
                  href={`/${locale}/contact`}
                  className="inline-flex min-h-16 w-full items-center justify-center rounded-full border border-orange-500 px-8 py-5 text-base font-black text-orange-300 transition hover:scale-105 hover:bg-orange-500 hover:text-black"
                >
                  {t.events.bookExperience}
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsPosterOpen(true)}
                className="mt-5 text-sm font-bold text-orange-300 underline-offset-4 transition hover:text-orange-400 hover:underline"
              >
                {t.events.viewPoster}
              </button>
            </div>
          </FadeUp>
        </div>

        {pastEvents.length > 0 && (
          <div className="mt-12 border-t border-zinc-800 pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
                  {t.events.pastMoments}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {t.events.previousExperiences}
                </h3>
              </div>

              <a
                href="#gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-orange-500 px-6 py- text-sm font-black text-orange-300 transition hover:bg-orange-500 hover:text-black"
              >
              {t.events.viewGallery}              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {pastEvents.map((event) => (
                <article
                  key={event.title}
                  className="group relative min-h-[150px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-orange-500/40 sm:min-h-[220px] md:min-h-[260px]"                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

                  <div className="relative z-10 flex min-h-[150px] flex-col justify-end p-4 sm:min-h-[220px] md:min-h-[260px] md:p-5">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
                      {event.status}
                    </p>

                    <h4 className="mt-2 text-lg font-black text-white md:text-xl">
                      {event.title}
                    </h4>

                    {(event.date || event.time) && (
                      <p className="mt-2 text-xs text-orange-300 md:text-sm">
                        {[event.date, event.time].filter(Boolean).join(" • ")}
                      </p>
                    )}

                    {event.location && (
                      <p className="mt-1 text-xs text-zinc-300 md:text-sm">
                        {event.location}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {isPosterOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Birthday event poster"
          onClick={() => setIsPosterOpen(false)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 rounded-full bg-orange-500 px-5 py-2.5 font-black text-black transition hover:scale-105 hover:bg-orange-400"
            onClick={() => setIsPosterOpen(false)}
          >
            Close
          </button>

          <div
            className="relative h-[88vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              unoptimized
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}