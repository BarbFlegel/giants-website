import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { notFound } from "next/navigation";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhatsAppButton from "../../components/WhatsAppButton";

import {
  locales,
  translations,
  type Locale,
} from "../../content";

type BirthdayPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type BirthdayCopy = {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  expectTitle: string;
  expect: string[];
  detailsTitle: string;
  dateLabel: string;
  placeLabel: string;
  registrationLabel: string;
  registration: string;
  back: string;
  posterAlt: string;
  whatsappLabel: string;
  whatsappMessage: string;
};

const birthdayContent: Record<
  Locale,
  BirthdayCopy
> = {
  en: {
    seoTitle:
      "GIANTS Birthday Experience",
    seoDescription:
      "A GIANTS birthday experience with basketball, games, movement and community energy.",
    eyebrow:
      "GIANTS EXPERIENCE",
    title:
      "Birthday Experience",
    subtitle:
      "Basketball • Games • Community",
    date:
      "Available on request",
    location:
      "Belgium",
    description:
      "A personalised GIANTS birthday experience built around basketball, movement, games, challenges and community energy.",
    expectTitle:
      "What to expect",
    expect: [
      "Basketball activities",
      "Team games and challenges",
      "Movement and competition",
      "Music and community energy",
      "A personalised birthday flow",
    ],
    detailsTitle:
      "Experience details",
    dateLabel:
      "Date",
    placeLabel:
      "Location",
    registrationLabel:
      "Booking",
    registration:
      "Contact GIANTS to discuss date, location, group size and format.",
    back:
      "Back to events",
    posterAlt:
      "GIANTS Birthday Experience",
    whatsappLabel:
      "Book via WhatsApp",
    whatsappMessage:
      "Hello GIANTS! I would like to book a Birthday Experience. Could you send me more information?",
  },

  fr: {
    seoTitle:
      "GIANTS Birthday Experience",
    seoDescription:
      "Une expérience anniversaire GIANTS avec basketball, jeux, mouvement et énergie communautaire.",
    eyebrow:
      "EXPÉRIENCE GIANTS",
    title:
      "Birthday Experience",
    subtitle:
      "Basketball • Jeux • Communauté",
    date:
      "Sur demande",
    location:
      "Belgique",
    description:
      "Une expérience anniversaire GIANTS personnalisée autour du basketball, du mouvement, des jeux, des challenges et de l'énergie communautaire.",
    expectTitle:
      "Au programme",
    expect: [
      "Activités basketball",
      "Jeux et challenges en équipe",
      "Mouvement et compétition",
      "Musique et énergie communautaire",
      "Un programme anniversaire personnalisé",
    ],
    detailsTitle:
      "Informations",
    dateLabel:
      "Date",
    placeLabel:
      "Lieu",
    registrationLabel:
      "Réservation",
    registration:
      "Contactez GIANTS pour discuter de la date, du lieu, du groupe et du format.",
    back:
      "Retour aux événements",
    posterAlt:
      "GIANTS Birthday Experience",
    whatsappLabel:
      "Réserver via WhatsApp",
    whatsappMessage:
      "Bonjour GIANTS ! Je souhaite réserver une Birthday Experience. Pouvez-vous m'envoyer plus d'informations ?",
  },

  nl: {
    seoTitle:
      "GIANTS Birthday Experience",
    seoDescription:
      "Een GIANTS verjaardagservaring met basketbal, games, beweging en community-energie.",
    eyebrow:
      "GIANTS EXPERIENCE",
    title:
      "Birthday Experience",
    subtitle:
      "Basketbal • Games • Community",
    date:
      "Op aanvraag",
    location:
      "België",
    description:
      "Een gepersonaliseerde GIANTS verjaardagservaring rond basketbal, beweging, games, uitdagingen en community-energie.",
    expectTitle:
      "Wat kun je verwachten?",
    expect: [
      "Basketbalactiviteiten",
      "Teamgames en uitdagingen",
      "Beweging en competitie",
      "Muziek en community-energie",
      "Een gepersonaliseerd verjaardagsprogramma",
    ],
    detailsTitle:
      "Details",
    dateLabel:
      "Datum",
    placeLabel:
      "Locatie",
    registrationLabel:
      "Boeking",
    registration:
      "Neem contact op met GIANTS om datum, locatie, groepsgrootte en format te bespreken.",
    back:
      "Terug naar events",
    posterAlt:
      "GIANTS Birthday Experience",
    whatsappLabel:
      "Boek via WhatsApp",
    whatsappMessage:
      "Hallo GIANTS! Ik wil graag een Birthday Experience boeken. Kunnen jullie mij meer informatie sturen?",
  },

  de: {
    seoTitle:
      "GIANTS Birthday Experience",
    seoDescription:
      "Ein GIANTS Geburtstagserlebnis mit Basketball, Spielen, Bewegung und Community-Energie.",
    eyebrow:
      "GIANTS EXPERIENCE",
    title:
      "Birthday Experience",
    subtitle:
      "Basketball • Spiele • Community",
    date:
      "Auf Anfrage",
    location:
      "Belgien",
    description:
      "Ein personalisiertes GIANTS Geburtstagserlebnis mit Basketball, Bewegung, Spielen, Challenges und Community-Energie.",
    expectTitle:
      "Was dich erwartet",
    expect: [
      "Basketball-Aktivitäten",
      "Teamspiele und Challenges",
      "Bewegung und Wettbewerb",
      "Musik und Community-Energie",
      "Ein personalisierter Geburtstagsablauf",
    ],
    detailsTitle:
      "Details",
    dateLabel:
      "Datum",
    placeLabel:
      "Ort",
    registrationLabel:
      "Buchung",
    registration:
      "Kontaktiere GIANTS, um Datum, Ort, Gruppengröße und Format zu besprechen.",
    back:
      "Zurück zu Events",
    posterAlt:
      "GIANTS Birthday Experience",
    whatsappLabel:
      "Über WhatsApp buchen",
    whatsappMessage:
      "Hallo GIANTS! Ich möchte eine Birthday Experience buchen. Könnt ihr mir mehr Informationen schicken?",
  },
};

export async function generateMetadata({
  params,
}: BirthdayPageProps): Promise<Metadata> {
  const {
    locale: localeParam,
  } = await params;

  if (
    !locales.includes(
      localeParam as Locale
    )
  ) {
    return {};
  }

  const locale =
    localeParam as Locale;

  const t =
    birthdayContent[locale];

  return {
    title:
      t.seoTitle,
    description:
      t.seoDescription,

    openGraph: {
      title:
        t.seoTitle,
      description:
        t.seoDescription,
      type:
        "website",
      images: [
        {
          url:
            "/images/luke-birthday-experience.jpg",
          width:
            1200,
          height:
            630,
          alt:
            t.posterAlt,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",
      title:
        t.seoTitle,
      description:
        t.seoDescription,
      images: [
        "/images/luke-birthday-experience.jpg",
      ],
    },
  };
}

export default async function BirthdayEventPage({
  params,
}: BirthdayPageProps) {
  const {
    locale: localeParam,
  } = await params;

  if (
    !locales.includes(
      localeParam as Locale
    )
  ) {
    notFound();
  }

  const locale =
    localeParam as Locale;

  const shell =
    translations[locale];

  const t =
    birthdayContent[locale];

  return (
    <main className="giants-content-page">
      <Header
        locale={locale}
        t={shell}
      />

      <section className="giants-page-hero">
        <div className="giants-page-hero-inner">
          <Link
            href={`/${locale}/events`}
            className="giants-back-link"
          >
            <ArrowLeft size={16} />
            {t.back}
          </Link>

          <p className="giants-eyebrow">
            {t.eyebrow}
          </p>

          <h1 className="giants-page-hero-title">
            {t.title}
          </h1>

          <p className="giants-page-hero-copy">
            {t.subtitle}
          </p>

          <div className="giants-event-meta">
            <span>
              <CalendarDays size={18} />
              {t.date}
            </span>

            <span>
              <MapPin size={18} />
              {t.location}
            </span>
          </div>
        </div>
      </section>

      <section className="giants-content-section">
        <div className="giants-content-container">
          <div className="giants-event-layout">
            <div>
              <div className="giants-event-image">
                <Image
                  src="/images/luke-birthday-experience.jpg"
                  alt={t.posterAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  className="object-contain"
                />
              </div>

              <p className="giants-content-intro-text">
                {t.description}
              </p>

              <h2 className="giants-card-subtitle">
                {t.expectTitle}
              </h2>

              <ul className="giants-event-expect-grid">
                {t.expect.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <aside className="giants-event-sidebar">
              <h2>
                {t.detailsTitle}
              </h2>

              <dl>
                <div>
                  <dt>
                    {t.dateLabel}
                  </dt>
                  <dd>
                    {t.date}
                  </dd>
                </div>

                <div>
                  <dt>
                    {t.placeLabel}
                  </dt>
                  <dd>
                    {t.location}
                  </dd>
                </div>

                <div>
                  <dt>
                    {t.registrationLabel}
                  </dt>
                  <dd>
                    {t.registration}
                  </dd>
                </div>
              </dl>

              <WhatsAppButton
                message={t.whatsappMessage}
                label={t.whatsappLabel}
                className="giants-event-whatsapp"
              />
            </aside>
          </div>
        </div>
      </section>

      <Footer t={shell} />
    </main>
  );
}