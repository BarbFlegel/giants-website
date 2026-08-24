import type {
  HomeContent,
  Locale,
} from "./types";

export const homeContent: Record<
  Locale,
  HomeContent
> = {
  en: {
    eyebrow: "Explore GIANTS",
    title: "Choose your GIANTS path.",
    explore: "Explore",

    cards: [
      {
        label: "Mindset",
        title: "The Birth of Courage",
        text:
          "Read the weekly reflection and join its movement ritual.",
        path: "/letters",
      },
      {
        label: "Experiences",
        title: "Bookable Experiences",
        text:
          "Book a birthday, basketball session or team programme.",
        path: "/experiences",
      },
      {
        label: "Community",
        title: "Community Impact",
        text:
          "See who GIANTS supports and how community outcomes are measured.",
        path: "/impact",
      },
      {
        label: "Events",
        title: "Upcoming Moments",
        text:
          "View confirmed dates, venues and registration details.",
        path: "/events",
      },
    ],
  },

  fr: {
    eyebrow: "Explorer GIANTS",
    title: "Choisissez votre parcours GIANTS.",
    explore: "Découvrir",

    cards: [
      {
        label: "Mindset",
        title: "La naissance du courage",
        text:
          "Lisez la réflexion de la semaine et rejoignez son rituel de mouvement.",
        path: "/letters",
      },
      {
        label: "Expériences",
        title: "Expériences à réserver",
        text:
          "Réservez un anniversaire, une session de basket ou un programme d’équipe.",
        path: "/experiences",
      },
      {
        label: "Communauté",
        title: "Impact communautaire",
        text:
          "Découvrez les publics soutenus et la manière dont l’impact est mesuré.",
        path: "/impact",
      },
      {
        label: "Événements",
        title: "Moments à venir",
        text:
          "Consultez les dates, lieux et informations d’inscription confirmés.",
        path: "/events",
      },
    ],
  },

  nl: {
    eyebrow: "Ontdek GIANTS",
    title: "Kies jouw GIANTS-pad.",
    explore: "Ontdek",

    cards: [
      {
        label: "Mindset",
        title: "De geboorte van moed",
        text:
          "Lees de wekelijkse reflectie en doe mee met het bewegingsritueel.",
        path: "/letters",
      },
      {
        label: "Ervaringen",
        title: "Boekbare ervaringen",
        text:
          "Boek een verjaardag, basketbalsessie of teamprogramma.",
        path: "/experiences",
      },
      {
        label: "Community",
        title: "Community-impact",
        text:
          "Ontdek wie GIANTS ondersteunt en hoe de impact wordt gemeten.",
        path: "/impact",
      },
      {
        label: "Events",
        title: "Komende momenten",
        text:
          "Bekijk bevestigde data, locaties en inschrijvingsinformatie.",
        path: "/events",
      },
    ],
  },

  de: {
    eyebrow: "GIANTS entdecken",
    title: "Wähle deinen GIANTS-Weg.",
    explore: "Entdecken",

    cards: [
      {
        label: "Mindset",
        title: "Die Geburt des Mutes",
        text:
          "Lies den wöchentlichen Impuls und nimm am Bewegungsritual teil.",
        path: "/letters",
      },
      {
        label: "Erlebnisse",
        title: "Buchbare Erlebnisse",
        text:
          "Buche einen Geburtstag, eine Basketball-Session oder ein Teamprogramm.",
        path: "/experiences",
      },
      {
        label: "Community",
        title: "Community Impact",
        text:
          "Sieh, wen GIANTS unterstützt und wie Wirkung messbar gemacht wird.",
        path: "/impact",
      },
      {
        label: "Events",
        title: "Kommende Momente",
        text:
          "Finde bestätigte Termine, Orte und Anmeldeinformationen.",
        path: "/events",
      },
    ],
  },
};
