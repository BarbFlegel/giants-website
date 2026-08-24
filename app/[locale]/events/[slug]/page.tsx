import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { locales, translations, type Locale } from "../../content";
import { getEventBySlug } from "../../lib/sanity";

export const revalidate = 60;

type EventDetailsPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function EventDetailsPage({ params }: EventDetailsPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!locales.includes(localeParam as Locale)) notFound();

  const locale = localeParam as Locale;
  const event = await getEventBySlug(slug);
  if (!event) notFound();

  const t = translations[locale];
  const dateLocale: Record<Locale, string> = {
    en: "en-BE",
    fr: "fr-BE",
    nl: "nl-BE",
    de: "de-BE",
  };

  const eventDate = new Intl.DateTimeFormat(dateLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(event.startDate));

  const bookingHref = event.registrationUrl || `/${locale}/contact`;

  return (
    <main className="giants-content-page">
      <Header locale={locale} t={t} />

      <section className="giants-content-section">
        <div className="giants-content-container giants-cms-event-detail">
          <Link href={`/${locale}/events`} className="giants-back-link">
            ← Back to events
          </Link>

          <div className="giants-cms-event-detail-grid">
            {event.posterUrl && (
              <img
                src={event.posterUrl}
                alt={`${event.title} poster`}
                className="giants-cms-event-detail-poster"
              />
            )}

            <div className="giants-cms-event-detail-copy">
              <p className="giants-eyebrow">
                {event.status === "comingSoon" ? "COMING SOON" : "GIANTS EVENT"}
              </p>
              <h1 className="giants-section-title">{event.title}</h1>
              <p className="giants-card-text">{event.description}</p>

              <dl className="giants-cms-event-details-list">
                <div><dt>Date</dt><dd>{event.status === "comingSoon" ? "To be confirmed" : eventDate}</dd></div>
                {event.location && <div><dt>Location</dt><dd>{event.location}</dd></div>}
                {event.price && <div><dt>Price</dt><dd>{event.price}</dd></div>}
              </dl>

              <Link
                href={bookingHref}
                className="giants-button giants-button-primary"
                target={bookingHref.startsWith("http") ? "_blank" : undefined}
                rel={bookingHref.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {event.registrationUrl ? event.ctaLabel || "Book now" : "Ask / Book"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
