import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  locales,
  translations,
  type Locale,
} from "../../content";
import {
  getEventBySlug,
  type CmsEvent,
} from "../../lib/sanity";

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
  de: "de-DE",
};

function isSupportedLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function formatEventDate(
  dateValue: string,
  locale: Locale,
  fallback: string,
) {
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  return new Intl.DateTimeFormat(dateLocales[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function resolveInternalUrl(
  url: string,
  locale: Locale,
) {
  if (
    url.startsWith("http://") ||
    url.startsWith("https://")
  ) {
    return url;
  }

  if (url.startsWith(`/${locale}/`)) {
    return url;
  }

  const normalizedUrl = url.startsWith("/")
    ? url
    : `/${url}`;

  return `/${locale}${normalizedUrl}`;
}

function isExternalUrl(url: string) {
  return (
    url.startsWith("http://") ||
    url.startsWith("https://")
  );
}

function getEventAction(
  event: CmsEvent,
  locale: Locale,
) {
  const text = translations[locale].events;

  if (event.status === "past") {
    return {
      href: `/${locale}/moments`,
      label: text.viewMoments,
    };
  }

  if (event.registrationUrl) {
    return {
      href: event.registrationUrl,
      label: event.ctaLabel || text.bookNow,
    };
  }

  if (event.detailsUrl) {
    return {
      href: resolveInternalUrl(
        event.detailsUrl,
        locale,
      ),
      label: event.ctaLabel || text.viewDetails,
    };
  }

  return {
    href: `/${locale}/contact`,
    label: text.askBook,
  };
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

  const text = translations[localeParam].events;

  const description =
    event.description || text.description;

  return {
    title: event.title,
    description,

    alternates: {
      canonical: `/${localeParam}/events/${slug}`,
      languages: {
        en: `/en/events/${slug}`,
        fr: `/fr/events/${slug}`,
        nl: `/nl/events/${slug}`,
        de: `/de/events/${slug}`,
        "x-default": `/en/events/${slug}`,
      },
    },

    openGraph: {
      title: `${event.title} | GIANTS`,
      description,
      type: "article",
      url: `/${localeParam}/events/${slug}`,
      siteName: "GIANTS",
      images: event.posterUrl
        ? [
            {
              url: event.posterUrl,
              alt: `${event.title} poster`,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: `${event.title} | GIANTS`,
      description,
      images: event.posterUrl
        ? [event.posterUrl]
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
  const text = t.events;

  const eventDate =
    event.status === "comingSoon"
      ? text.datePending
      : formatEventDate(
          event.startDate,
          locale,
          text.datePending,
        );

  const eventEndDate = event.endDate
    ? formatEventDate(
        event.endDate,
        locale,
        text.datePending,
      )
    : null;

  const action = getEventAction(event, locale);
  const externalAction = isExternalUrl(action.href);

  return (
    <main className="giants-content-page">
      <Header locale={locale} t={t} />

      <section className="giants-content-section">
        <div className="giants-content-container giants-cms-event-detail">
          <Link
            href={`/${locale}/events`}
            className="giants-back-link"
          >
            ← {text.backToEvents}
          </Link>

          <div className="giants-cms-event-detail-grid">
            {event.posterUrl && (
              <a
                href={event.posterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="giants-cms-event-poster-link"
                aria-label={`${text.viewPoster}: ${event.title}`}
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
                {text.statusLabels[event.status]}
              </p>

              <h1 className="giants-section-title">
                {event.title}
              </h1>

              {event.description && (
                <p className="giants-card-text">
                  {event.description}
                </p>
              )}

              <dl className="giants-cms-event-details-list">
                <div>
                  <dt>{text.dateLabel}</dt>
                  <dd>{eventDate}</dd>
                </div>

                {eventEndDate && (
                  <div>
                    <dt>{text.endDateLabel}</dt>
                    <dd>{eventEndDate}</dd>
                  </div>
                )}

                {event.location && (
                  <div>
                    <dt>{text.locationLabel}</dt>
                    <dd>{event.location}</dd>
                  </div>
                )}

                {event.price && (
                  <div>
                    <dt>{text.priceLabel}</dt>
                    <dd>{event.price}</dd>
                  </div>
                )}
              </dl>

              <Link
                href={action.href}
                className="giants-button giants-button-primary"
                target={
                  externalAction ? "_blank" : undefined
                }
                rel={
                  externalAction
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {action.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}