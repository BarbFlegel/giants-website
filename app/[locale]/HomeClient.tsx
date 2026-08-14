"use client";

import Link from "next/link";

import {
  homeContent,
  translations,
  type Locale,
} from "./content";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinSection from "./components/JoinSection";
import UpcomingRibbon from "./components/UpcomingRibbon";

type HomeClientProps = {
  locale: Locale;
};

export default function HomeClient({
  locale,
}: HomeClientProps) {
  const t = translations[locale];
  const home = homeContent[locale];

  return (
    <main className="giants-page">
      <Header
        locale={locale}
        t={t}
      />

      <UpcomingRibbon locale={locale} />

      <Hero locale={locale} />

      <section className="giants-explore-section">
        <div className="giants-container">
          <p className="giants-eyebrow">
            {home.eyebrow}
          </p>

          <h2 className="giants-section-title">
            {home.title}
          </h2>

          <div className="giants-home-grid">
            {home.cards.map((card) => {
              const href =
                `/${locale}${card.path}`;

              return (
                <Link
                  key={href}
                  href={href}
                  className="giants-home-card"
                >
                  <p className="giants-card-label">
                    {card.label}
                  </p>

                  <h3 className="giants-card-title">
                    {card.title}
                  </h3>

                  <p className="giants-card-text">
                    {card.text}
                  </p>

                  <span className="giants-card-cta">
                    {home.explore} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <JoinSection
        locale={locale}
        t={t}
        compact
      />

      <Footer t={t} />

      <div className="giants-mobile-bar">
        <Link
          href={`/${locale}/contact`}
          className="giants-button giants-button-primary"
        >
          {t.mobileBar.join}
        </Link>

        <Link
          href={`/${locale}/contact`}
          className="giants-button giants-button-secondary"
        >
          {t.mobileBar.book}
        </Link>
      </div>
    </main>
  );
}