"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale, Translation } from "../content/types";

const heroImages = [
  "/images/hero-giants-premium.jpg",
  "/images/hero-giants-action.jpg",
  "/images/hero-giants-community.jpg",
];

export default function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-orange-500/20 bg-black px-4 py-12 text-center md:px-6 md:py-24">
      {/* Animated background images */}
      <div className="absolute inset-0 -z-20">
        {heroImages.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: index === 0 ? 1 : 0, scale: 1.04 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [1.04, 1.08, 1.1, 1.04],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: index * 4,
              ease: "easeInOut",
            }}
          >
            <Image
              src={src}
              alt="GIANTS community basketball atmosphere"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center opacity-55"
            />
          </motion.div>
        ))}
      </div>

      {/* Premium dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/65 to-black/90" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <p className="absolute left-[8%] top-[18%] text-6xl font-black uppercase tracking-[0.25em] text-white/[0.03] animate-pulse">
          Movement
        </p>

        <p className="absolute right-[10%] top-[30%] text-5xl font-black uppercase tracking-[0.25em] text-orange-500/[0.04] animate-pulse">
          Energy
        </p>

        <p className="absolute bottom-[18%] left-[12%] text-7xl font-black uppercase tracking-[0.25em] text-white/[0.02] animate-pulse">
          Community
        </p>

        <p className="absolute bottom-[12%] right-[12%] text-5xl font-black uppercase tracking-[0.25em] text-orange-400/[0.03] animate-pulse">
          Experience
        </p>
</div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.25),transparent_55%)]" />

      <div className="mx-auto flexmin-h-[58vh] md:min-h-[72vh] max-w-5xl flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-orange-300"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-4 max-w-2xl text-xs font-bold uppercase tracking-[0.18em] text-orange-300 md:text-base md:tracking-[0.25em]"        >
          Built for movement, connection, and unforgettable community energy.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-black uppercase tracking-[0.1em] text-white sm:text-6xl md:text-8xl"        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 text-xl font-bold text-orange-300 md:text-3xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-xs font-bold uppercase tracking-[0.45em] text-orange-400 sm:text-sm"
        >
          Train • Connect • Elevate
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg"
        >
          {t.hero.text}
        </motion.p>

        {t.hero.brandStatement && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-8 text-white md:text-lg"
          >
            {t.hero.brandStatement}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
        >
          <Link
            href={`/${locale}#events`}
            className="flex min-h-14 w-72 items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] transition hover:scale-105 hover:bg-orange-400 sm:w-64"
          >
            Join a Session
          </Link>

          <Link
            href={`/${locale}#experiences`}
            className="flex min-h-14 w-72 items-center justify-center rounded-full border border-orange-400 px-8 py-4 text-center font-semibold text-orange-300 transition hover:bg-orange-500/10 sm:w-64"
          >
            Book an Experience
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="flex min-h-14 w-72 items-center justify-center rounded-full border border-zinc-500 px-8 py-4 text-center font-semibold text-white transition hover:border-white sm:w-64"
          >
            Collaborate
          </Link>
        </motion.div>

        {t.hero.stats && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {t.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-800 bg-black/50 px-5 py-4 backdrop-blur"
              >
                <p className="text-2xl font-black text-orange-400">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}