"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "../content";
import FadeUp from "./FadeUp";

const tags = ["Movement", "Connection", "Community", "Experience"];

export default function EventsSection({
  locale,
  t,
}: {
  locale: Locale;
  t: any;
}) {
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  return (
    <section
      id="events"
      className="scroll-mt-40 bg-black px-6 py-12 text-white md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            {t.events.label}
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            {t.events.title}
          </h2>

          <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-300">
            {t.events.description}
          </p>
        </FadeUp>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <button
            type="button"
            onClick={() => setIsPosterOpen(true)}
            aria-label={t.events.viewPoster}
            className="group relative min-h-[560px] overflow-hidden rounded-3xl border border-orange-500/30 bg-zinc-950"
          >
            <Image
              src="/images/luke-birthday-experience.jpg"
              alt={t.events.birthdayTitle}
              fill
              priority
              className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </button>

          <article className="flex min-h-[560px] flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <span className="w-fit rounded-full bg-orange-500 px-4 py-2 text-xs font-black uppercase text-black">
              {t.events.status}
            </span>

            <h3 className="mt-6 text-3xl font-black leading-tight md:text-4xl">
              {t.events.birthdayTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              {t.events.birthdayDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
              <a href={`/${locale}/contact`} className="btn-primary">
                {t.events.ask}
              </a>

              <a href={`/${locale}/contact`} className="btn-secondary">
                {t.events.book}
              </a>
            </div>
          </article>
        </div>
      </div>

      {isPosterOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setIsPosterOpen(false)}
            aria-label={t.events.closePoster}
            className="absolute right-5 top-5 rounded-full bg-orange-500 px-5 py-3 text-2xl font-black text-black"
          >
            ×
          </button>

          <div className="relative h-[90vh] w-full max-w-5xl">
            <Image
              src="/images/luke-birthday-experience.jpg"
              alt={t.events.birthdayTitle}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}