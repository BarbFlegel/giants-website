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
      label: "Mindset",
      title: "The Birth of Courage",
      text: "Weekly reflections and rituals focused on courage, discipline and personal growth.",
      href: `/${locale}/letters`,
      featured: true,
    },
    {
      label: "Experiences",
      title: "Bookable Experiences",
      text: "Birthdays, basketball, team experiences and movement sessions.",
      href: `/${locale}/experiences`,
    },
    {
      label: "Community",
      title: "Community Impact",
      text: "Programmes focused on connection, inclusion, wellbeing and social impact.",
      href: `/${locale}/impact`,
    },
    {
      label: "Events",
      title: "Upcoming Moments",
      text: "Dated GIANTS events, mindset sessions and community gatherings.",
      href: `/${locale}/events`,
    },
  ];

  return (
    <main className="min-h-screen bg-black pb-24 text-white md:pb-0">
      <Header locale={locale} t={t} />
      <UpcomingRibbon />

      <Hero locale={locale} t={t} />

      <section className="bg-black px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">
            Explore GIANTS
          </p>

          <h2 className="mt-3 text-2xl font-black uppercase md:text-5xl">
            Experiences, community and mindset.
          </h2>

          <div className="mt-6 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`min-w-[82%] rounded-3xl border bg-zinc-950 p-5 transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] md:min-w-0 md:p-7 ${
                  card.featured ? "border-orange-500/60" : "border-zinc-800"
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
                  {card.label}
                </p>

                <h3 className="mt-3 text-xl font-black leading-tight text-white md:text-2xl">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-300 md:text-base md:leading-7">
                  {card.text}
                </p>

                <p className="mt-5 text-sm font-black text-orange-300">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
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