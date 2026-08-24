import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  locales,
  translations,
  type Locale,
} from "../content";
import { getEvents } from "../lib/sanity";
import EventCards from "./EventCards";

export const revalidate = 60;

type EventsPageProps = {
  params: Promise<{
    locale: string;
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

export async function generateMetadata({
  params,
}: EventsPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  const locale: Locale = isSupportedLocale(localeParam)
    ? localeParam
    : "en";

  const eventsText = translations[locale].events;

  return {
    title: eventsText.title,
    description: eventsText.description,

    alternates: {
      canonical: `/${locale}/events`,
      languages: {
        en: "/en/events",
        fr: "/fr/events",
        nl: "/nl/events",
        de: "/de/events",
        "x-default": "/en/events",
      },
    },

    openGraph: {
      title: eventsText.title,
      description: eventsText.description,
      type: "website",
      url: `/${locale}/events`,
      siteName: "GIANTS",
    },
  };
}

export default async function EventsPage({
  params,
}: EventsPageProps) {
  const { locale: localeParam } = await params;

  if (!isSupportedLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;
  const t = translations[locale];
  const eventsText = t.events;
  const cmsEvents = await getEvents();

  const upcomingEvents = cmsEvents
    .filter((event) => event.status !== "past")
    .sort(
      (firstEvent, secondEvent) =>
        new Date(firstEvent.startDate).getTime() -
        new Date(secondEvent.startDate).getTime(),
    );

  const pastEvents = cmsEvents
    .filter((event) => event.status === "past")
    .sort(
      (firstEvent, secondEvent) =>
        new Date(secondEvent.startDate).getTime() -
        new Date(firstEvent.startDate).getTime(),
    );

  const hasEvents =
    upcomingEvents.length > 0 ||
    pastEvents.length > 0;

  return (
    <main className="giants-content-page">
      <Header locale={locale} t={t} />

      <section className="giants-page-hero">
        <div className="giants-page-hero-inner">
          <p className="giants-eyebrow">
            {eventsText.label}
          </p>

          <h1 className="giants-page-hero-title">
            {eventsText.title}
          </h1>

          <p className="giants-page-hero-copy">
            {eventsText.description}
          </p>
        </div>
      </section>

      <section className="giants-content-section">
        <div className="giants-content-container">
          {!hasEvents && (
            <div className="giants-empty-state">
              <p className="giants-eyebrow">
                {eventsText.emptyLabel}
              </p>

              <h2 className="giants-card-title">
                {eventsText.emptyTitle}
              </h2>

              <p className="giants-card-text">
                {eventsText.emptyDescription}
              </p>
            </div>
          )}

          {upcomingEvents.length > 0 && (
            <section
              className="giants-events-group"
              aria-labelledby="upcoming-events-title"
            >
              <h2
                id="upcoming-events-title"
                className="giants-section-title"
              >
                {eventsText.upcomingTitle}
              </h2>

              <EventCards
                events={upcomingEvents}
                locale={locale}
                dateLocale={dateLocales[locale]}
                text={eventsText}
              />
            </section>
          )}

          {pastEvents.length > 0 && (
            <section
              className="giants-events-group giants-past-events"
              aria-labelledby="past-events-title"
            >
              <h2
                id="past-events-title"
                className="giants-section-title"
              >
                {eventsText.pastTitle}
              </h2>

              <EventCards
                events={pastEvents}
                locale={locale}
                dateLocale={dateLocales[locale]}
                text={eventsText}
              />
            </section>
          )}
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}