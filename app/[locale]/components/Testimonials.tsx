"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import {
  getTranslations,
  type Locale,
} from "../lib/i18n";

type TestimonialsProps = {
  locale: Locale;
};

export default function Testimonials({
  locale,
}: TestimonialsProps) {
  const t = getTranslations(locale);

  return (
    <section
      className="relative overflow-hidden bg-zinc-950 px-5 py-20 text-white sm:px-8 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.55,
          }}
          className="max-w-3xl"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
            {t.testimonials.eyebrow}
          </p>

          <h2
            id="testimonials-heading"
            className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl"
          >
            {t.testimonials.title}

            <span className="block text-orange-400">
              {t.testimonials.titleAccent}
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {t.testimonials.description}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.testimonials.items.map(
            (testimonial, index) => (
              <motion.article
                key={`${testimonial.name}-${index}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.055]"
              >
                <Quote
                  aria-hidden="true"
                  className="mb-6 h-8 w-8 text-orange-400"
                />

                <blockquote className="text-lg font-medium leading-relaxed text-white/85">
                  “{testimonial.quote}”
                </blockquote>

                <footer className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-bold text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-white/45">
                    {testimonial.role}
                  </p>
                </footer>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}