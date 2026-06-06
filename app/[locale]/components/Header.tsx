"use client";

import Image from "next/image";
import Link from "next/link";
import { locales, type Locale, type Translation } from "../content";

export default function Header({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  const langLink = (targetLocale: Locale) => `/${targetLocale}`;

  const navClass =
    "text-sm font-bold text-white transition hover:text-orange-300";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 lg:flex-row lg:justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center justify-center gap-3 text-center lg:text-left"
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-black">
            <Image
              src="/images/giants-logo.png"
              alt="GIANTS logo"
              fill
              unoptimized
              sizes="48px"
              className="scale-150 object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase text-white">
              {t.brand.name}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
              {t.brand.tagline}
            </p>
          </div>
        </Link>

        <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href={`/${locale}#about`} className={navClass}>
              {t.nav.about}
            </Link>
            <Link href={`/${locale}#vision`} className={navClass}>
              {t.nav.vision}
            </Link>
            <Link href={`/${locale}#community`} className={navClass}>
              {t.nav.community}
            </Link>
            <Link href={`/${locale}#experiences`} className={navClass}>
              {t.nav.experiences}
            </Link>
            <Link href={`/${locale}#events`} className={navClass}>
              {t.nav.events}
            </Link>
            <Link href={`/${locale}#events`} className="transition hover:text-orange-400">
  {t.nav.events}
</Link>

<Link href={`/${locale}/letters`} className="transition hover:text-orange-400">
  {t.nav.letters}
</Link>

<Link href={`/${locale}#gallery`} className="transition hover:text-orange-400">
  {t.nav.gallery}
</Link>
          </nav>

          <details className="relative shrink-0">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-zinc-700 px-3 py-2 text-xs font-bold text-orange-300 transition hover:border-orange-400">
              🌍 {locale.toUpperCase()}
            </summary>

            <div className="absolute right-0 z-50 mt-2 flex w-[58px] flex-col rounded-lg border border-orange-500/20 bg-zinc-900/90 px-2 py-1.5 text-xs font-bold shadow-lg backdrop-blur-md">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={langLink(item)}
                  className={
                    item === locale
                      ? "rounded px-1 py-0.5 text-right text-orange-400"
                      : "rounded px-1 py-0.5 text-right text-zinc-300 hover:text-orange-400"
                  }
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}