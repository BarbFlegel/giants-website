"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale, Translation } from "../content/types";

const heroImages = [
  "/images/hero-giants-action.jpg",
  "/images/hero-giants-community.jpg",
  "/images/hero-giants-premium.jpg",
];

export default function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-140px)] overflow-hidden border-b border-orange-500/20 bg-black text-white">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === activeImage ? "opacity-45" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black" />

      <div className="relative mx-auto flex min-h-[calc(100svh-140px)] max-w-6xl flex-col items-center justify-center px-4 py-14 text-center md:px-6">
        <p className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-[11px] font-black uppercase tracking-[0.28em] text-orange-200 md:text-xs">
          {t.hero.eyebrow}
        </p>

        <h1 className="mt-7 max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
          {t.hero.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200 md:text-xl">
          {t.hero.text}
        </p>

        <div className="mt-8 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
          <Link href={`/${locale}/contact`} className="btn-primary">
            {t.hero.primaryCta}
          </Link>

          <Link href={`/${locale}/experiences`} className="btn-secondary">
            {t.hero.secondaryCta}
          </Link>

          <Link href={`/${locale}/contact`} className="btn-secondary">
            {t.hero.tertiaryCta}
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-zinc-400">
          <span>Movement & Wellbeing</span>
          <span>•</span>
          <span>Leadership Development</span>
          <span>•</span>
          <span>Community Impact</span>
        </div>
      </div>
    </section>
  );
}