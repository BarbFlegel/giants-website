"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale, Translation } from "../content/types";

export default function BirthdayEventSection({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  const [openPoster, setOpenPoster] = useState<string | null>(null);

  const events = [
    {
      status: t.events.status,
      title: t.events.birthdayTitle,
      text: t.events.birthdayDescription,
      image: "/images/luke-birthday-experience.jpg",
      cta: t.events.book,
      href: `/${locale}/contact`,
    },
    {
      status: "Coming soon",
      title: "The Birth of Courage",
      text: t.letters.description,
      image: "/images/birth-of-courage.jpg",
      cta: t.letters.facebookCta,
      href: "https://www.facebook.com/share/1LU8tYc8Tt/",
      external: true,
    },
    {
      status: "Coming soon",
      title: "More GIANTS Events",
      text: "New movement, mindset and community events are being developed.",
      image: "/images/giants-logo.png",
      cta: t.events.ask,
      href: `/${locale}/contact`,
    },
  ];

  return (
    <section
      id="events"
      className="scroll-mt-40 overflow-hidden bg-black px-6 py-12 text-white md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
          {t.events.label}
        </p>

        <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
          {t.events.title}
        </h2>

        <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
          {t.events.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 md:hidden">
          <span>{t.sliderHint.swipe}</span>
          <span>{t.sliderHint.drag}</span>
        </div>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-6">
          {events.map((event) => (
            <article
              key={event.title}
              className="flex min-w-[82%] flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 sm:min-w-[55%] lg:min-w-[360px]"
            >
              <button
                type="button"
                onClick={() => setOpenPoster(event.image)}
                className="relative h-[360px] bg-black"
                aria-label={t.events.viewPoster}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 82vw, 360px"
                />
              </button>

              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-orange-500 px-4 py-2 text-xs font-black uppercase text-black">
                  {event.status}
                </span>

                <h3 className="mt-5 text-2xl font-black text-white">
                  {event.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-300">{event.text}</p>

                <a
                  href={event.href}
                  target={event.external ? "_blank" : undefined}
                  rel={event.external ? "noopener noreferrer" : undefined}
                  className="btn-primary mt-auto pt-0"
                >
                  {event.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {openPoster && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setOpenPoster(null)}
            aria-label={t.events.closePoster}
            className="absolute right-5 top-5 rounded-full bg-orange-500 px-5 py-3 text-2xl font-black text-black"
          >
            ×
          </button>

          <div className="relative h-[90vh] w-full max-w-5xl">
            <Image
              src={openPoster}
              alt={t.events.viewPoster}
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