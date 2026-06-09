"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale, type Translation } from "../content";

export default function Header({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const langLink = (targetLocale: Locale) => `/${targetLocale}`;

  const navItems = [
    { label: "Home", href: `/${locale}`, match: `/${locale}` },
    { label: t.nav.vision, href: `/${locale}/vision`, match: "/vision" },
    { label: t.nav.letters, href: `/${locale}/letters`, match: "/letters" },
    {
      label: t.nav.experiences,
      href: `/${locale}/experiences`,
      match: "/experiences",
    },
    { label: t.nav.community, href: `/${locale}/impact`, match: "/impact" },
    { label: t.nav.events, href: `/${locale}/events`, match: "/events" },
    { label: t.nav.gallery, href: `/${locale}/moments`, match: "/moments" },
    { label: t.nav.join, href: `/${locale}/contact`, match: "/contact" },
  ];

  const isActive = (match: string) => {
    if (match === `/${locale}`) return pathname === `/${locale}`;
    return pathname.includes(match);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-black">
            <Image
              src="/images/giants-logo.png"
              alt="GIANTS logo"
              fill
              unoptimized
              sizes="56px"
              className="scale-150 object-contain"
            />
          </div>

          <div>
            <p className="text-lg font-black uppercase tracking-wide text-white">
              {t.brand.name}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
              {t.brand.tagline}
            </p>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-orange-500/40 px-6 py-3 text-lg font-black uppercase tracking-[0.25em] text-orange-300 md:hidden"
        >
          Menu
        </button>

        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.match)
                    ? "text-base font-black text-orange-400"
                    : "text-base font-black text-white transition hover:text-orange-300"
                }
              >
                {item.label}
              </Link>
            ))}
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

      {open && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black px-6 py-6 text-white md:hidden">
          <div className="flex items-center justify-between">
            <p className="text-4xl font-black uppercase tracking-[0.25em] text-orange-300">
              Menu
            </p>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full bg-orange-500 px-6 py-4 text-2xl font-black text-black"
            >
              ×
            </button>
          </div>

          <nav className="mt-8 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  isActive(item.match)
                    ? "rounded-2xl bg-orange-500 px-6 py-5 text-2xl font-black text-black"
                    : "rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-5 text-2xl font-black text-white"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-wrap gap-2 pb-10">
            {locales.map((item) => (
              <Link
                key={item}
                href={langLink(item)}
                onClick={() => setOpen(false)}
                className={
                  item === locale
                    ? "rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-black"
                    : "rounded-full border border-orange-500/40 px-5 py-3 text-sm font-black text-orange-300"
                }
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}