import { notFound } from "next/navigation";

import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCards from "./EventCards";
import { getEvents } from "../lib/sanity";

export const revalidate = 60;

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
  const cmsEvents = await getEvents();
  const activeEvents = cmsEvents.filter((event) => event.status !== "past");

  const dateLocale: Record<Locale, string> = {
    en: "en-BE",
    fr: "fr-BE",
    nl: "nl-BE",
    de: "de-BE",
  };

  const pageCopy: Record<Locale, { eyebrow: string; title: string; intro: string; empty: string; preparing: string; guidance: string }> = {
    en: {
      eyebrow: "GIANTS EVENTS",
      title: "Confirmed dates. One clear calendar.",
      intro: "Find what is scheduled, where it happens and how to register.",
      empty: "NO DATED EVENTS PUBLISHED",
      preparing: "New dates are being prepared.",
      guidance: "Bookable services are under Experiences. Weekly reflections are under Mindset.",
    },
    fr: {
      eyebrow: "ÉVÉNEMENTS GIANTS",
      title: "Les dates confirmées, au même endroit.",
      intro: "Découvrez le programme, le lieu et les modalités d’inscription.",
      empty: "AUCUN ÉVÉNEMENT DATÉ PUBLIÉ",
      preparing: "De nouvelles dates sont en préparation.",
      guidance: "Les services à réserver sont dans Expériences. Les réflexions hebdomadaires sont dans Mindset.",
    },
    nl: {
      eyebrow: "GIANTS EVENTS",
      title: "Bevestigde data in één kalender.",
      intro: "Bekijk wat gepland staat, waar het plaatsvindt en hoe je inschrijft.",
      empty: "GEEN EVENTS MET DATUM GEPUBLICEERD",
      preparing: "Nieuwe data worden voorbereid.",
      guidance: "Boekbare diensten staan onder Ervaringen. Wekelijkse reflecties staan onder Mindset.",
    },
    de: {
      eyebrow: "GIANTS EVENTS",
      title: "Bestätigte Termine in einem Kalender.",
      intro: "Sieh, was geplant ist, wo es stattfindet und wie du dich anmeldest.",
      empty: "KEINE TERMINIERTEN EVENTS VERÖFFENTLICHT",
      preparing: "Neue Termine werden vorbereitet.",
      guidance: "Buchbare Angebote stehen unter Erlebnisse. Wöchentliche Impulse stehen unter Mindset.",
    },
  };
  const copy = pageCopy[locale];

  return (
    <main className="giants-content-page">
      <Header
        locale={locale}
        t={t}
      />

      <section className="giants-page-hero">
        <div className="giants-page-hero-inner">
          <p className="giants-eyebrow">
            {copy.eyebrow}
          </p>

          <h1 className="giants-page-hero-title">
            {copy.title}
          </h1>

          <p className="giants-page-hero-copy">
            {copy.intro}
          </p>
        </div>
      </section>

      <section className="giants-content-section">
        <div className="giants-content-container">
          {activeEvents.length > 0 ? (
            <EventCards
              events={activeEvents}
              locale={locale}
              dateLocale={dateLocale[locale]}
            />
          ) : (
            <div className="giants-empty-state">
              <p className="giants-eyebrow">{copy.empty}</p>
              <h2 className="giants-card-title">{copy.preparing}</h2>
              <p className="giants-card-text">
                {copy.guidance}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
