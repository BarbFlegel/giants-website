import Link from "next/link";
import type { Locale, Translation } from "../content/types";

export default function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  return (
    <section className="relative min-h-[calc(100svh-140px)] overflow-hidden border-b border-orange-500/20 bg-black text-white">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black" />

      <div className="relative mx-auto flex min-h-[calc(100svh-140px)] max-w-6xl flex-col items-center justify-center px-4 py-14 text-center md:px-6">
        <p className="rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-3 text-xs font-black uppercase tracking-[0.32em] text-orange-200">
          {t.hero.eyebrow}
        </p>

        <h1 className="mt-8 max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
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