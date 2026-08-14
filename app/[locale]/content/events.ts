import type { Locale } from "./types";

export type EventPageContent = {
  seo: {
    title: string;
    description: string;
  };

  posterAlt: string;
  back: string;
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

  whatsappMessage: string;
  whatsappButton: string;
};

export const eventPageContent: Record<Locale, EventPageContent> = {
  en: {
    seo: {
      title: "GIANTS Birthday Experience | Merksem",
      description:
        "Discover the GIANTS Birthday Experience in Merksem with basketball, games, movement and community.",
    },

    posterAlt: "GIANTS Birthday Experience event poster",
    back: "Back to GIANTS",
    eyebrow: "GIANTS EXPERIENCE",
    title: "Birthday Experience",
    subtitle: "Basketball • Games • Community",

    date: "14 June",
    location: "Merksem",

    description:
      "A special GIANTS experience bringing people together through basketball, games, challenges and community energy.",

    expectTitle: "What to expect",

    expect: [
      "Basketball activities",
      "Team games and challenges",
      "Movement and competition",
      "Music and community energy",
      "A welcoming GIANTS atmosphere",
    ],

    detailsTitle: "Event details",
    dateLabel: "Date",
    placeLabel: "Place",
    registrationLabel: "Registration",
    registration: "Contact GIANTS to reserve your place",

    whatsappMessage:
      "Hi GIANTS 👋 I'd like to know more about this GIANTS event. Could you send me the details?",

    whatsappButton: "Contact via WhatsApp",
  },

  fr: {
    seo: {
      title: "GIANTS Birthday Experience | Merksem",
      description:
        "Découvrez la GIANTS Birthday Experience à Merksem avec du basketball, des jeux, du mouvement et de la communauté.",
    },

    posterAlt: "Affiche de la GIANTS Birthday Experience",
    back: "Retour à GIANTS",
    eyebrow: "EXPÉRIENCE GIANTS",
    title: "Birthday Experience",
    subtitle: "Basketball • Jeux • Communauté",

    date: "14 juin",
    location: "Merksem",

    description:
      "Une expérience spéciale GIANTS qui rassemble autour du basketball, des jeux, des challenges et de l'énergie communautaire.",

    expectTitle: "Au programme",

    expect: [
      "Activités basketball",
      "Jeux et challenges en équipe",
      "Mouvement et compétition",
      "Musique et énergie communautaire",
      "L'atmosphère accueillante de GIANTS",
    ],

    detailsTitle: "Informations",
    dateLabel: "Date",
    placeLabel: "Lieu",
    registrationLabel: "Inscription",
    registration: "Contactez GIANTS pour réserver votre place",

    whatsappMessage:
      "Bonjour GIANTS 👋 J'aimerais en savoir plus sur cet événement GIANTS. Pouvez-vous m'envoyer les informations ?",

    whatsappButton: "Contacter via WhatsApp",
  },

  nl: {
    seo: {
      title: "GIANTS Birthday Experience | Merksem",
      description:
        "Ontdek de GIANTS Birthday Experience in Merksem met basketbal, games, beweging en community.",
    },

    posterAlt: "GIANTS Birthday Experience eventposter",
    back: "Terug naar GIANTS",
    eyebrow: "GIANTS EXPERIENCE",
    title: "Birthday Experience",
    subtitle: "Basketbal • Games • Community",

    date: "14 juni",
    location: "Merksem",

    description:
      "Een speciale GIANTS-ervaring die mensen samenbrengt via basketbal, games, uitdagingen en community-energie.",

    expectTitle: "Wat kun je verwachten?",

    expect: [
      "Basketbalactiviteiten",
      "Teamgames en uitdagingen",
      "Beweging en competitie",
      "Muziek en community-energie",
      "Een gastvrije GIANTS-sfeer",
    ],

    detailsTitle: "Eventinformatie",
    dateLabel: "Datum",
    placeLabel: "Plaats",
    registrationLabel: "Inschrijving",
    registration: "Neem contact op met GIANTS om je plaats te reserveren",

    whatsappMessage:
      "Hallo GIANTS 👋 Ik wil graag meer weten over dit GIANTS-event. Kunnen jullie mij de details sturen?",

    whatsappButton: "Contact via WhatsApp",
  },

  de: {
    seo: {
      title: "GIANTS Birthday Experience | Merksem",
      description:
        "Entdecke die GIANTS Birthday Experience in Merksem mit Basketball, Spielen, Bewegung und Community.",
    },

    posterAlt: "GIANTS Birthday Experience Veranstaltungsplakat",
    back: "Zurück zu GIANTS",
    eyebrow: "GIANTS EXPERIENCE",
    title: "Birthday Experience",
    subtitle: "Basketball • Spiele • Community",

    date: "14. Juni",
    location: "Merksem",

    description:
      "Ein besonderes GIANTS-Erlebnis, das Menschen durch Basketball, Spiele, Challenges und Community-Energie zusammenbringt.",

    expectTitle: "Was dich erwartet",

    expect: [
      "Basketball-Aktivitäten",
      "Teamspiele und Challenges",
      "Bewegung und Wettbewerb",
      "Musik und Community-Energie",
      "Eine offene GIANTS-Atmosphäre",
    ],

    detailsTitle: "Eventdetails",
    dateLabel: "Datum",
    placeLabel: "Ort",
    registrationLabel: "Anmeldung",
    registration: "Kontaktiere GIANTS, um deinen Platz zu reservieren",

    whatsappMessage:
      "Hallo GIANTS 👋 Ich möchte gerne mehr über dieses GIANTS-Event erfahren. Könnt ihr mir die Details schicken?",

    whatsappButton: "Über WhatsApp kontaktieren",
  },
};