import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  translations,
  locales,
  type Locale,
} from "../content";

type EventsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function EventsPage({
  params,
}: EventsPageProps) {
  const { locale: localeParam } =
    await params;

  if (
    !locales.includes(
      localeParam as Locale
    )
  ) {
    notFound();
  }

  const locale =
    localeParam as Locale;

  const t =
    translations[locale];

  return (
    <main className="giants-content-page">
      <Header
        locale={locale}
        t={t}
      />

      <section className="giants-page-hero">
        <div className="giants-page-hero-inner">
          <p className="giants-eyebrow">
            GIANTS EVENTS
          </p>

          <h1 className="giants-page-hero-title">
            Move. Connect. Experience.
          </h1>

          <p className="giants-page-hero-copy">
            Discover upcoming GIANTS sessions,
            community gatherings and special
            experiences.
          </p>
        </div>
      </section>

      <section className="giants-content-section">
        <div className="giants-content-container">
          <div className="giants-card-grid">
            <Link
              href={`/${locale}/events/birthday`}
              className="giants-home-card"
            >
              <p className="giants-card-label">
                EXPERIENCE
              </p>

              <h2 className="giants-card-title">
                GIANTS Birthday Experience
              </h2>

              <p className="giants-card-text">
                Basketball, games, community
                energy and a personalised
                celebration.
              </p>

              <span className="giants-card-cta">
                View experience →
              </span>
            </Link>

            <Link
              href={`/${locale}/letters`}
              className="giants-home-card"
            >
              <p className="giants-card-label">
                THURSDAY
              </p>

              <h2 className="giants-card-title">
                The Birth of Courage
              </h2>

              <p className="giants-card-text">
                A recurring GIANTS mindset and
                community session in Josaphat
                Park.
              </p>

              <span className="giants-card-cta">
                View session →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}