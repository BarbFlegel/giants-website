"use client";

import { type Locale, translations } from "./content";

import CommunitySection from "./components/CommunitySection";
import CommunityStats from "./components/CommunityStats";
import EventsSection from "./components/EventsSection";
import ExperiencesSection from "./components/ExperiencesSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinSection from "./components/JoinSection";

export default function HomeClient({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-black pb-20 text-white md:pb-0">
      <Header locale={locale} t={t} />
      <Hero locale={locale} t={t} />

      <ExperiencesSection locale={locale} t={t} />
      <CommunityStats />
      <EventsSection locale={locale} t={t} />
      <CommunitySection locale={locale} t={t} />

      <GallerySection locale={locale} t={t} />
      <JoinSection t={t} />
      <Footer t={t} />

      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-zinc-800 bg-black/90 p-2 backdrop-blur-md md:hidden">
        <a
          href="#events"
          className="flex-1 rounded-full bg-orange-500 py-3 text-center text-sm font-black text-black"
        >
          Join
        </a>

        <a
          href={`/${locale}/contact`}
          className="flex-1 rounded-full border border-orange-500 py-3 text-center text-sm font-black text-orange-300"
        >
          Book
        </a>
      </div>
    </main>
  );
}