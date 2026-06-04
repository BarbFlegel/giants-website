"use client";

import { type Locale } from "./content";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ImpactSection from "./components/ImpactSection";
import ExperiencesSection from "./components/ExperiencesSection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import CommunitySection from "./components/CommunitySection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import MobileExperienceTabs from "./components/MobileExperienceTabs";

export default function HomeClient({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSection locale={locale} />

      <div className="hidden md:block">
        <AboutSection locale={locale} />
        <ImpactSection locale={locale} />
        <ExperiencesSection locale={locale} />
        <EventsSection locale={locale} />
        <GallerySection locale={locale} />
        <CommunitySection locale={locale} />
      </div>

      <div className="md:hidden">
        <AboutSection locale={locale} />
        <EventsSection locale={locale} />
        <MobileExperienceTabs locale={locale} />
      </div>

      <CtaSection locale={locale} />
      <Footer locale={locale} />
    </>
  );
}