"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ButtonLink from "./ButtonLink";

import {
  heroContent,
  type Locale,
} from "../content";

type HeroProps = {
  locale: Locale;
};

export default function Hero({
  locale,
}: HeroProps) {
  const t = heroContent[locale];

  return (
    <section
      className="giants-hero"
      aria-labelledby="hero-title"
    >
      <div className="giants-hero-visual">
        <Image
          src="/images/hero/giants-hero.png"
          alt="GIANTS basketball community experience"
          fill
          priority
          sizes="(max-width: 1100px) 100vw, 64vw"
          className="giants-hero-image"
        />
      </div>

      <div
        className="giants-hero-gradient"
        aria-hidden="true"
      />

      <div
        className="giants-hero-bottom-gradient"
        aria-hidden="true"
      />

      <div className="giants-hero-content">
        <div className="giants-hero-copy">
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="giants-eyebrow"
          >
            {t.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.06,
            }}
            className="giants-hero-title"
          >
            {t.title}
          </motion.h1>

          <div
            className="giants-hero-divider"
            aria-hidden="true"
          >
            <span>★</span>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.13,
            }}
            className="giants-hero-mantra"
          >
            {t.mantra}
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="giants-hero-description"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.27,
            }}
            className="giants-hero-actions"
          >
            <ButtonLink
              href={`/${locale}/contact`}
              variant="primary"
            >
              {t.primaryCta}
            </ButtonLink>

            <ButtonLink
              href={`/${locale}/experiences`}
              variant="secondary"
            >
              {t.secondaryCta}
            </ButtonLink>

            <ButtonLink
              href={`/${locale}/contact`}
              variant="tertiary"
            >
              {t.tertiaryCta}
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}