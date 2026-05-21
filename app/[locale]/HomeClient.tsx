"use client";

import { type Locale, translations } from "./content";

import AboutSection from "./components/AboutSection";
import CommunitySection from "./components/CommunitySection";
import EventsSection from "./components/EventsSection";
import ExperiencesSection from "./components/ExperiencesSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinSection from "./components/JoinSection";
import VideoSection from "./components/VideoSection";

export default function HomeClient({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale={locale} t={t} />
      <Hero locale={locale} t={t} />
      <AboutSection t={t} />
      <ExperiencesSection t={t} />
      <CommunitySection t={t} />
      <EventsSection t={t} />
      <VideoSection t={t} />
      <GallerySection t={t} />
      <JoinSection t={t} />
      <Footer t={t} />
    </main>
  );
}