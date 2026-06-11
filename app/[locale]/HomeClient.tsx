"use client";

import Link from "next/link";
import { type Locale, translations } from "./content";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinSection from "./components/JoinSection";
import UpcomingRibbon from "./components/UpcomingRibbon";

export default function HomeClient({ locale }: { locale: Locale }) {
  const t = translations[locale];

  const cards = [
    {
      label: t.nav.vision,
      title: "Vision",
      text: "The mission, philosophy and long-term purpose behind GIANTS.",
      href: `/${locale}/vision`,
    },
    {
      label: t.nav.letters,
      title: t.letters.title,
      text: "Weekly mindset reflections around courage, discipline and growth.",
      href: `/${locale}/letters`,
    },
    {
      label: t.nav.experiences,
      title: t.sectionTitles.experiences,
      text: "Bookable formats: basketball, movement, team building and birthdays.",
      href: `/${locale}/experiences`,
    },
    {
      label: t.nav.events,
      title: t.events.title,
      text: "Current and upcoming dated GIANTS moments.",
      href: `/${locale}/events`,
    },
  ];

  return (
    <main className="min-h-screen bg-black pb-20 text-white md:pb-0">
      <Header locale={locale} t={t} />
      <UpcomingRibbon />

      <Hero locale={locale} t={t} />

      <section className="bg-black px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-orange-500 md:p-7"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
                {card.label}
              </p>

              <h2 className="mt-3 text-xl font-black leading-tight text-white md:text-2xl">
                {card.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-300 md:text-base md:leading-7">
                {card.text}
              </p>

              <p className="mt-5 text-sm font-black text-orange-300">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <JoinSection t={t} compact />
      <Footer t={t} />

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-zinc-800 bg-black/90 p-2 backdrop-blur-md md:hidden">
        <a href={`/${locale}/contact`} className="btn-primary btn-mobile">
          Join
        </a>

        <a href={`/${locale}/contact`} className="btn-secondary btn-mobile">
          Book
        </a>
      </div>
    </main>
  );
}