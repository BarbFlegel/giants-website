"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Locale, Translation } from "../content/types";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

const featured = {
  title: "Luke Othello’s 9th Birthday",
  image: "/images/luke-birthday-experience.jpg",
  posterAlt: "Luke Othello’s 9th Birthday GIANTS Birthday Experience poster",
};

const pastEvents = [
  {
    title: "GIANTS Community Session",
    date: "9 May 2026",
    location: "Sporthal Parkloods - Basketball Court 1",
    image: "/images/giants-community-session.png",
  },
  {
    title: "Afro Beats & Bounce",
    date: "Past event",
    location: "Leuven",
    image: "/images/afro-bounce.png",
  },
  {
    title: "Workout & BBQ Party",
    date: "Past event",
    location: "Community moment",
    image: "/images/bbq-party.png",
  },
];

export default function EventsSection({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  return (
    <section
      id="events"
      className="scroll-mt-36 bg-black px-6 py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label="Events"
            title="Upcoming & featured experiences"
            description="Current concepts, upcoming moments, and GIANTS community experiences."
          />
        </FadeUp>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <FadeUp>
            <button
              type="button"
              aria-label="Open birthday event poster fullscreen"
              title="Open birthday event poster fullscreen"
              onClick={() => setIsPosterOpen(true)}
              className="group h-full w-full overflow-hidden rounded-3xl border border-orange-500/30 bg-black text-left transition hover:border-orange-400"
            >
              <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:h-full lg:min-h-[520px]">
                <Image
                  src={featured.image}
                  alt={featured.posterAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>
            </button>
          </FadeUp>

          <FadeUp>
            <article className="flex h-full rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
              <div className="flex flex-col justify-center">
                <span className="w-fit rounded-full bg-orange-500 px-4 py-2 text-xs font-black uppercase text-black">
                  Upcoming
                </span>

                <h3 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  {featured.title}
                </h3>

                <p className="mt-6 max-w-2xl leading-7 text-zinc-300">
                  GIANTS Birthday Experience brings movement, connection and
                  community together through playful challenges, shared moments
                  and high-energy experiences.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Movement", "Connection", "Community", "Experience"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-300"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-6 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                  <p>• Movement & wellbeing activities</p>
                  <p>• Team challenges & experiences</p>
                  <p>• Community connection</p>
                  <p>• Positive energy & celebration</p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <Link
                    href={`/${locale}/contact`}
                    className="flex min-h-14 items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-center font-black text-black transition hover:scale-[1.02] hover:bg-orange-400"
                  >
                    Ask About This Event
                  </Link>

                  <Link
                    href={`/${locale}/contact`}
                    className="flex min-h-14 items-center justify-center rounded-full border border-orange-500 px-6 py-3 text-center font-black text-orange-300 transition hover:bg-orange-500 hover:text-black"
                  >
                    Book Experience
                  </Link>
                </div>
              </div>
            </article>
          </FadeUp>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-10">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
                Past Moments
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">
                Previous GIANTS experiences
              </h3>
            </div>

            <a
              href="#gallery"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-orange-500 px-6 py-3 text-sm font-black text-orange-300 transition hover:bg-orange-500 hover:text-black"
            >
              View Gallery
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <FadeUp key={event.title}>
                <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition hover:border-orange-500/40">
                  <div className="relative h-[230px] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
                        Past Event
                      </p>
                      <h4 className="mt-2 text-xl font-black text-white">
                        {event.title}
                      </h4>
                      <p className="mt-2 text-sm text-zinc-300">
                        {event.date}
                      </p>
                      <p className="text-sm text-zinc-400">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {isPosterOpen && (
        <div
          className="fixed inset-0 z-[999] overflow-y-auto bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Birthday poster fullscreen"
        >
          <div className="mx-auto max-w-4xl py-8">
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={() => setIsPosterOpen(false)}
                className="rounded-full bg-orange-500 px-5 py-3 font-black text-black transition hover:bg-orange-400"
              >
                Close
              </button>
            </div>

            <div className="relative min-h-[80vh] overflow-hidden rounded-3xl border border-orange-500/30 bg-black">
              <Image
                src={featured.image}
                alt={featured.posterAlt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}