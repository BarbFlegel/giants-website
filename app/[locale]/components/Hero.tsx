"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { heroContent, type Locale } from "../content";

type HeroProps = {
  locale: Locale;
};

export default function Hero({ locale }: HeroProps) {
  const t = heroContent[locale];

  return (
    <section
      className="relative min-h-[720px] overflow-hidden bg-black text-white
                 sm:min-h-[760px] lg:min-h-[620px]"
      aria-labelledby="hero-title"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero/giants-hero.png"
          alt="GIANTS basketball community experience"
          fill
          priority
          sizes="100vw"
          className="
            giants-hero-image
            object-cover
            object-[58%_center]
            sm:object-[60%_center]
            lg:object-[68%_center]
          "
        />
      </div>

      {/* Softer overlays */}
      <div className="absolute inset-0" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/10
          via-black/10
          to-black/90
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/90
          via-black/45
          to-black/5
        "
      />

      {/* Mobile readability */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/25
          to-transparent
          lg:hidden
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto flex min-h-[720px] max-w-7xl
          items-end
          px-5 pb-16 pt-28
          sm:min-h-[760px] sm:px-8 sm:pb-20
          lg:min-h-[620px] lg:items-center lg:px-12 lg:py-24
        "
      >
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Brand line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="
              text-[11px] font-black uppercase
              tracking-[0.32em] text-orange-400
              sm:text-xs lg:text-sm
            "
          >
            {t.eyebrow}
          </motion.p>

          {/* Main title — intentionally smaller */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
            className="
              mt-4 max-w-[18ch]
              text-3xl font-black uppercase
              leading-[1.02] tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:max-w-[16ch] lg:text-6xl
            "
          >
            {t.title}
          </motion.h1>

          {/* Business-card style divider */}
          <div className="mt-6 flex max-w-lg items-center gap-3">
            <div className="h-px flex-1 bg-orange-500/60" />
            <span className="text-orange-400">★</span>
            <div className="h-px flex-1 bg-orange-500/60" />
          </div>

          {/* Pillars */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.16,
            }}
            className="
              mt-5 max-w-xl
              text-sm font-bold
              leading-6 text-orange-300
              sm:text-base
            "
          >
            {t.mantra}
          </motion.p>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.23,
            }}
            className="
              mt-4 max-w-xl
              text-sm leading-6 text-white/75
              sm:text-base sm:leading-7
              lg:text-lg
            "
          >
            {t.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.3,
            }}
            className="
              mt-8 flex flex-col gap-3
              sm:flex-row sm:flex-wrap
            "
          >
            <Link
              href={`/${locale}/contact`}
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full bg-orange-500
                px-7 py-3
                text-xs font-black uppercase tracking-wide
                text-black
                shadow-[0_10px_30px_rgba(249,115,22,0.22)]
                transition
                hover:-translate-y-0.5
                hover:bg-orange-400
                hover:shadow-[0_14px_35px_rgba(249,115,22,0.32)]
              "
            >
              {t.primaryCta}
            </Link>

            <Link
              href={`/${locale}/experiences`}
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full border border-white/30
                bg-black/25
                px-7 py-3
                text-xs font-black uppercase tracking-wide
                text-white
                backdrop-blur-md
                transition
                hover:-translate-y-0.5
                hover:border-white/60
                hover:bg-white/10
              "
            >
              {t.secondaryCta}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full border border-orange-500/60
                px-7 py-3
                text-xs font-black uppercase tracking-wide
                text-orange-300
                transition
                hover:-translate-y-0.5
                hover:border-orange-400
                hover:bg-orange-500/10
              "
            >
              {t.tertiaryCta}
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        className="
          absolute bottom-0 left-0
          h-px w-full
          bg-gradient-to-r
          from-transparent via-orange-500 to-transparent
        "
        aria-hidden="true"
      />
    </section>
  );
}