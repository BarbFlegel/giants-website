"use client";

import { type Locale, translations } from "./content";

import BirthdayEventSection from "./components/BirthdayEventSection";
import CommunitySection from "./components/CommunitySection";
import ExperiencesSection from "./components/ExperiencesSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinSection from "./components/JoinSection";
import UpcomingRibbon from "./components/UpcomingRibbon";
import VisionSection from "./components/VisionSection";

export default function HomeClient({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-black pb-20 text-white md:pb-0">
      <Header locale={locale} t={t} />
      <UpcomingRibbon t={t} />

      <Hero locale={locale} t={t} />
      <VisionSection t={t} />
      <CommunitySection locale={locale} t={t} />
      <ExperiencesSection locale={locale} t={t} />
      <BirthdayEventSection locale={locale} t={t} />
      <GallerySection locale={locale} t={t} />
      <JoinSection t={t} />
      <Footer t={t} />

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-zinc-800 bg-black/90 p-2 backdrop-blur-md md:hidden">
        <a href="#events" className="btn-primary btn-mobile">
          {t.mobileBar.join}
        </a>

        <a href={`/${locale}/contact`} className="btn-secondary btn-mobile">
          {t.mobileBar.book}
        </a>
      </div>
    </main>
  );
}