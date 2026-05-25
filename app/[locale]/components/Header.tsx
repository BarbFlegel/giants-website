"use client";

import Image from "next/image";
import Link from "next/link";
import { locales, type Locale, type Translation } from "../content";

export default function Header({ locale, t }: { locale: Locale; t: Translation }) {
  const langLink = (targetLocale: Locale) => `/${targetLocale}`;
  return (
    <>
      <a href={`/${locale}#events`} className="block border-b border-orange-500/20 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 px-4 py-3 text-center text-xs font-bold tracking-wide text-black transition hover:brightness-110 sm:text-sm">{t.bar}</a>
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
          <Link href={`/${locale}`} className="flex items-center justify-center gap-4 text-center lg:justify-start lg:text-left">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-black md:h-20 md:w-20">
              <Image src="/images/giants-logo.png" alt="GIANTS logo" fill unoptimized sizes="80px" className="object-contain scale-150" />
            </div>
            <div>
              <p className="text-2xl font-bold tracking-[0.18em] text-white sm:text-3xl">GIANTS</p>
              <p className="max-w-xs text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">Movement · Community · Wellbeing</p>
            </div>
          </Link>
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-zinc-100 sm:text-base lg:text-lg">
              <Link href={`/${locale}#about`} className="transition hover:text-orange-400">{t.nav.about}</Link>
              <Link href={`/${locale}#experiences`} className="transition hover:text-orange-400">{t.nav.experiences}</Link>
              <Link href={`/${locale}#community`} className="transition hover:text-orange-400">{t.nav.community}</Link>
              <Link href={`/${locale}#events`} className="transition hover:text-orange-400">{t.nav.events}</Link>
              <Link href={`/${locale}#gallery`} className="transition hover:text-orange-400">{t.nav.gallery}</Link>
              <Link href={`/${locale}/contact`} className="transition hover:text-orange-400">
                {t.nav.join}
              </Link>            </nav>
            <details className="relative shrink-0">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-zinc-700 px-3 py-2 text-xs font-bold text-orange-300 transition hover:border-orange-400">🌍 {locale.toUpperCase()}</summary>
              <div className="absolute right-0 z-50 mt-2 flex w-[58px] flex-col gap-0.5 rounded-lg border border-orange-500/20 bg-zinc-900/80 px-2 py-1.5 text-xs font-bold shadow-lg backdrop-blur-md">
                {locales.map((item) => <Link key={item} href={langLink(item)} className={item === locale ? "rounded px-1 py-0.5 text-right text-orange-400" : "rounded px-1 py-0.5 text-right text-zinc-300 hover:text-orange-400"}>{item.toUpperCase()}</Link>)}
              </div>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
