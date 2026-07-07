"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale, type Translation } from "../content";

export default function Header({ locale, t }: { locale: Locale; t: Translation }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const desktopNav = [
    { label: "Home", href: `/${locale}`, match: `/${locale}` },
    { label: t.nav.vision, href: `/${locale}/vision`, match: "/vision" },
    { label: "Mindset", href: `/${locale}/letters`, match: "/letters" },
    { label: t.nav.experiences, href: `/${locale}/experiences`, match: "/experiences" },
    { label: t.nav.community, href: `/${locale}/impact`, match: "/impact" },
    { label: t.nav.events, href: `/${locale}/events`, match: "/events" },
    { label: t.nav.gallery, href: `/${locale}/moments`, match: "/moments" },
    { label: t.nav.join, href: `/${locale}/contact`, match: "/contact" },
  ];

  const mobileNav = [
    { label: "Home", href: `/${locale}`, match: `/${locale}` },
    { label: "Mindset", href: `/${locale}/letters`, match: "/letters" },
    { label: t.nav.experiences, href: `/${locale}/experiences`, match: "/experiences" },
    { label: t.nav.events, href: `/${locale}/events`, match: "/events" },
    { label: t.nav.join, href: `/${locale}/contact`, match: "/contact" },
  ];

  const isActive = (match: string) => {
    if (match === `/${locale}`) return pathname === `/${locale}`;
    return pathname.includes(match);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-black">
              <Image
                src="/images/giants-logo.png"
                alt="GIANTS logo"
                fill
                unoptimized
                sizes="44px"
                className="scale-150 object-contain"
              />
            </div>

            <div>
              <p className="text-base font-black uppercase tracking-wide text-white">
                {t.brand.name}
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-orange-300">
                {t.brand.tagline}
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full border border-orange-500/40 px-5 py-2.5 text-sm font-black uppercase tracking-[0.24em] text-orange-300 md:hidden"
          >
            Menu
          </button>

          <div className="hidden items-center gap-5 md:flex">
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {desktopNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive(item.match)
                      ? "text-sm font-black text-orange-400"
                      : "text-sm font-black text-white transition hover:text-orange-300"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[99999] h-dvh w-screen overflow-y-auto bg-black px-6 py-6 text-white md:hidden">
          <div className="flex items-center justify-between">
            <p className="text-xl font-black uppercase tracking-[0.22em] text-orange-300">
              Menu
            </p>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-full bg-orange-500 px-5 py-3 text-xl font-black text-black"
            >
              ×
            </button>
          </div>

          <nav className="mt-7 grid gap-2">
            {mobileNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  isActive(item.match)
                    ? "rounded-xl bg-orange-500 px-4 py-3 text-sm font-black text-black"
                    : "rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm font-black text-white"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 border-t border-zinc-800 pt-5">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
              More
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link href={`/${locale}/vision`} onClick={() => setOpen(false)} className="text-sm text-zinc-300">
                Vision
              </Link>
              <Link href={`/${locale}/impact`} onClick={() => setOpen(false)} className="text-sm text-zinc-300">
                Impact
              </Link>
              <Link href={`/${locale}/moments`} onClick={() => setOpen(false)} className="text-sm text-zinc-300">
                Moments
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}