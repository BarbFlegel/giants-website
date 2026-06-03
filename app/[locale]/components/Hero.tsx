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
              alt="GIANTS movement and community atmosphere"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center opacity-55"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/70 to-black/95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.25),transparent_55%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <p className="absolute left-[8%] top-[18%] animate-pulse text-6xl font-black uppercase tracking-[0.25em] text-white/[0.03]">
          Movement
        </p>
        <p className="absolute right-[10%] top-[30%] animate-pulse text-5xl font-black uppercase tracking-[0.25em] text-orange-500/[0.04]">
          Impact
        </p>
        <p className="absolute bottom-[18%] left-[12%] animate-pulse text-7xl font-black uppercase tracking-[0.25em] text-white/[0.02]">
          Community
        </p>
      </div>

      <div className="mx-auto flex min-h-[58vh] max-w-5xl flex-col items-center justify-center md:min-h-[72vh]">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-orange-300"
        >
          Unlock • Move • Elevate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-[0.06em] text-white sm:text-5xl md:text-7xl"        >
          Unlock Human Potential Through Movement.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg"
        >
          GIANTS creates experiences, programmes and opportunities that empower
          people to grow physically, mentally, socially and economically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
        >
          <Link
            href={`/${locale}#events`}
            className="flex min-h-14 w-72 items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] transition hover:scale-105 hover:bg-orange-400 sm:w-64"
          >
            Build with GIANTS
          </Link>

          <Link
            href={`/${locale}#experiences`}
            className="flex min-h-14 w-72 items-center justify-center rounded-full border border-orange-400 px-8 py-4 text-center font-semibold text-orange-300 transition hover:bg-orange-500/10 sm:w-64"
          >
            Explore Experiences
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="flex min-h-14 w-72 items-center justify-center rounded-full border border-zinc-500 px-8 py-4 text-center font-semibold text-white transition hover:border-white sm:w-auto"
          >
            Collaborate
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400"
        >
          <span>Movement & Wellbeing</span>
          <span>•</span>
          <span>Leadership Development</span>
          <span>•</span>
          <span>Community Impact</span>
        </motion.div>
      </div>
    </section>
  );
}