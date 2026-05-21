"use client";

import Link from "next/link";
import { type Locale, type Translation } from "../content";
import FadeUp from "./FadeUp";

export default function Hero({ locale, t }: { locale: Locale; t: Translation }) {
  return (
    <section className="relative overflow-hidden border-b border-orange-500/20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.18),transparent_60%)]" />
      <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center md:py-24">
        <FadeUp><span className="mb-6 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-300">{t.hero.eyebrow}</span></FadeUp>
        <FadeUp delay={0.1}><h1 className="text-5xl font-black uppercase tracking-[0.12em] text-white sm:text-6xl md:text-8xl">{t.hero.title}</h1></FadeUp>
        <FadeUp delay={0.2}><p className="mt-5 text-2xl font-bold text-orange-300 md:text-4xl">{t.hero.subtitle}</p></FadeUp>
        <FadeUp delay={0.3}><p className="mt-4 text-xs font-bold uppercase tracking-[0.45em] text-orange-400 sm:text-sm">{t.hero.mantra}</p></FadeUp>
        <FadeUp delay={0.4}><div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-zinc-300 md:text-xl"><p>{t.hero.text}</p><p className="text-white">{t.hero.brandStatement}</p></div></FadeUp>
        <FadeUp delay={0.5}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link href={`/${locale}#events`} className="flex min-h-14 w-72 items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] transition hover:scale-105 hover:bg-orange-400 sm:w-64">{t.hero.primaryCta}</Link>
            <Link href={`/${locale}#experiences`} className="flex min-h-14 w-72 items-center justify-center rounded-full border border-orange-400 px-8 py-4 text-center font-semibold text-orange-300 transition hover:bg-orange-500/10 sm:w-64">{t.hero.secondaryCta}</Link>
            <Link href={`/${locale}#join`} className="flex min-h-14 w-72 items-center justify-center rounded-full border border-zinc-500 px-8 py-4 text-center font-semibold text-white transition hover:border-white sm:w-64">{t.hero.tertiaryCta}</Link>
          </div>
        </FadeUp>
        <FadeUp delay={0.6}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3 md:gap-6">
            {t.hero.stats.map((stat) => <div key={stat.label} className="rounded-3xl border border-zinc-800 bg-zinc-950/80 px-8 py-6"><p className="text-3xl font-black text-orange-400">{stat.number}</p><p className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-400 sm:text-xs">{stat.label}</p></div>)}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
