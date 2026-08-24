import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { locales, translations, type Locale } from "../../content";
import { getEventBySlug } from "../../lib/sanity";

export const revalidate = 60;

type EventDetailsPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const dateLocales: Record<Locale, string> = {
  en: "en-BE",
  fr: "fr-BE",
  nl: "nl-BE",
  de: "de-BE",
};

const eventStatusLabels: Record<
  Locale,
  Record<"upcoming" | "comingSoon" | "past", string>
> = {
  en: {
    upcoming: "Upcoming event",
    comingSoon: "Coming soon",
    past: "Past event",
  },
  fr: {
    upcoming: "Événement à venir",
    comingSoon: "Bientôt disponible",
    past: "Événement passé",
  },
  nl: {
    upcoming: "Aankomend evenement",
    comingSoon: "Binnenkort",
    past: "Afgelopen evenement",
  },
  de: {
    upcoming: "Bevorstehende Veranstaltung",
    comingSoon: "Demnächst",
    past: "Vergangene Veranstaltung",
  },
};

const pageLabels: Record<
  Locale,
  {
    back: string;
    date: string;
    endDate: string;
    location: string;
    price: string;
    datePending: string;
    bookNow: string;
    askBook: string;
    viewMoments: string;
  }
> = {
  en: {
    back: "Back to events",
    date: "Date",
    endDate: "End",
    location: "Location",
    price: "Price",
    datePending: "To be confirmed",
    bookNow: "Book now",
    askBook: "Ask / Book",
    viewMoments: "View moments",
  },
  fr: {
    back: "Retour aux événements",
    date: "Date",
    endDate: "Fin",
    location: "Lieu",
    price: "Prix",
    datePending: "À confirmer",
    bookNow: "Réserver",
    askBook: "Demander / Réserver",
    viewMoments: "Voir les moments",
  },
  nl: {
    back: "Terug naar evenementen",
    date: "Datum",
    endDate: "Einde",
    location: "Locatie",
    price: "Prijs",
    datePending: "Nog te bevestigen",
    bookNow: "Nu boeken",
    askBook: "Vraag / Boek",
    viewMoments: "Bekijk momenten",
  },
  de: {
    back: "Zurück zu Veranstaltungen",
    date: "Datum",
    endDate: "Ende",
    location: "Ort",
    price: "Preis",
    datePending: "Noch zu bestätigen",
    bookNow: "Jetzt buchen",
    askBook: "Anfragen / Buchen",
    viewMoments: "Momente ansehen",
  },
};

function isSupportedLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

function formatEventDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(dateLocales[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export async function generateMetadata({
  params,
}: EventDetailsPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isSupportedLocale(localeParam)) {
    return {};
  }

  const event = await getEventBySlug(slug);

  if (!event) {
    return {};
  }

  const description =
    event.description ||
    `Discover ${event.title}, a GIANTS community event.`;

  return {
    title: `${event.title} | GIANTS`,
    description,
    alternates: {
      canonical: `/${localeParam}/events/${slug}`,
      languages: {
        en: `/en/events/${slug}`,
        fr: `/fr/events/${slug}`,
        nl: `/nl/events/${slug}`,
        de: `/de/events/${slug}`,
      },
    },
    openGraph: {
      title: `${event.title} | GIANTS`,
      description,
      type: "article",
      images: event.posterUrl
        ? [
            {
              url: event.posterUrl,
              alt: `${event.title} poster`,
            },
          ]
        : undefined,
    },
  };
}

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isSupportedLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const t = translations[locale];
  const labels = pageLabels[locale];

  const eventDate =
    event.status === "comingSoon"
      ? labels.datePending
      : formatEventDate(event.startDate, locale);

  const eventEndDate = event.endDate
    ? formatEventDate(event.endDate, locale)
    : null;

  const actionHref =
    event.status === "past"
      ? `/${locale}/moments`
      : event.registrationUrl ||
        event.detailsUrl ||
        `/${locale}/contact`;

  const actionLabel =
    event.status === "past"
      ? labels.viewMoments
      : event.registrationUrl
        ? event.ctaLabel || labels.bookNow
        : event.detailsUrl
          ? event.ctaLabel || labels.bookNow
          : labels.askBook;

  const isExternalAction =
    actionHref.startsWith("http://") ||
    actionHref.startsWith("https://");

  return (
    <main className="giants-content-page">
      <Header locale={locale} t={t} />

      <section className="giants-content-section">
        <div className="giants-content-container giants-cms-event-detail">
          <Link href={`/${locale}/events`} className="giants-back-link">
            ← {labels.back}
          </Link>

          <div className="giants-cms-event-detail-grid">
            {event.posterUrl && (
              <a
                href={event.posterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="giants-cms-event-poster-link"
                aria-label={`Open the ${event.title} poster`}
              >
                <img
                  src={event.posterUrl}
                  alt={`${event.title} poster`}
                  className="giants-cms-event-detail-poster"
                />
              </a>
            )}

            <div className="giants-cms-event-detail-copy">
              <p className="giants-eyebrow">
                {eventStatusLabels[locale][event.status]}
              </p>

              <h1 className="giants-section-title">{event.title}</h1>

              {event.description && (
                <p className="giants-card-text">{event.description}</p>
              )}

              <dl className="giants-cms-event-details-list">
                <div>
                  <dt>{labels.date}</dt>
                  <dd>{eventDate}</dd>
                </div>

                {eventEndDate && (
                  <div>
                    <dt>{labels.endDate}</dt>
                    <dd>{eventEndDate}</dd>
                  </div>
                )}

                {event.location && (
                  <div>
                    <dt>{labels.location}</dt>
                    <dd>{event.location}</dd>
                  </div>
                )}

                {event.price && (
                  <div>
                    <dt>{labels.price}</dt>
                    <dd>{event.price}</dd>
                  </div>
                )}
              </dl>

              <Link
                href={actionHref}
                className="giants-button giants-button-primary"
                target={isExternalAction ? "_blank" : undefined}
                rel={isExternalAction ? "noopener noreferrer" : undefined}
              >
                {actionLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}