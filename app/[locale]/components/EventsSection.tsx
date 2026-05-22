"use client";

import Image from "next/image";
import { useState } from "react";
import { eventItems } from "../content/events";
import type { EventItem } from "../content/types";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function EventsSection({ t }: { t: any }) {
  const featured: EventItem | undefined = eventItems[0];
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  if (!featured) return null;

  return (
    <section
      id="events"
      className="scroll-mt-40 bg-black px-6 py-12 md:py-16"
    >
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

              <p className="mt-4 text-orange-300">
                {featured.date} • {featured.time}
              </p>

              <p className="mt-2 text-zinc-300">{featured.location}</p>

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

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#join"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-black text-black transition hover:scale-105 hover:bg-orange-400 sm:w-auto sm:min-w-[240px]"
                >
                  Ask About This Event
                </a>

                <a
                  href="#join"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-orange-500 px-8 py-4 text-base font-black text-orange-300 transition hover:scale-105 hover:bg-orange-500 hover:text-black sm:w-auto sm:min-w-[240px]"
                >
                  Book an Experience
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsPosterOpen(true)}
                className="mt-5 text-sm font-bold text-orange-300 underline-offset-4 transition hover:text-orange-400 hover:underline"
              >
                View poster fullscreen
              </button>
            </div>
          </FadeUp>
        </div>
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
            className="absolute right-5 top-5 z-10 rounded-full bg-orange-500 px-5 py-3 font-black text-black transition hover:scale-105 hover:bg-orange-400"
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