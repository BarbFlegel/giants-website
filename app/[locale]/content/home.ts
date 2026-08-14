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
    title:
      "Experiences, community and mindset.",
    explore: "Explore",

    cards: [
      {
        label: "Mindset",
        title: "The Birth of Courage",
        text:
          "Weekly reflections and rituals focused on courage, discipline and personal growth.",
        path: "/letters",
      },
      {
        label: "Experiences",
        title: "Bookable Experiences",
        text:
          "Birthdays, basketball, team experiences and movement sessions.",
        path: "/experiences",
      },
      {
        label: "Community",
        title: "Community Impact",
        text:
          "Programmes focused on connection, inclusion, wellbeing and social impact.",
        path: "/impact",
      },
      {
        label: "Events",
        title: "Upcoming Moments",
        text:
          "Dated GIANTS events, mindset sessions and community gatherings.",
        path: "/events",
      },
    ],
  },

  fr: {
    eyebrow: "Explorer GIANTS",
    title:
      "Expériences, communauté et mindset.",
    explore: "Découvrir",

    cards: [
      {
        label: "Mindset",
        title: "La naissance du courage",
        text:
          "Réflexions et rituels autour du courage, de la discipline et du développement personnel.",
        path: "/letters",
      },
      {
        label: "Expériences",
        title: "Expériences à réserver",
        text:
          "Anniversaires, basketball, expériences en équipe et sessions de mouvement.",
        path: "/experiences",
      },
      {
        label: "Communauté",
        title: "Impact communautaire",
        text:
          "Programmes autour de la connexion, de l’inclusion, du bien-être et de l’impact social.",
        path: "/impact",
      },
      {
        label: "Événements",
        title: "Moments à venir",
        text:
          "Événements GIANTS, sessions mindset et rencontres communautaires.",
        path: "/events",
      },
    ],
  },

  nl: {
    eyebrow: "Ontdek GIANTS",
    title:
      "Ervaringen, community en mindset.",
    explore: "Ontdek",

    cards: [
      {
        label: "Mindset",
        title: "De geboorte van moed",
        text:
          "Wekelijkse reflecties rond moed, discipline en persoonlijke groei.",
        path: "/letters",
      },
      {
        label: "Ervaringen",
        title: "Boekbare ervaringen",
        text:
          "Verjaardagen, basketbal, teamervaringen en bewegingssessies.",
        path: "/experiences",
      },
      {
        label: "Community",
        title: "Community-impact",
        text:
          "Programma’s rond verbinding, inclusie, welzijn en maatschappelijke impact.",
        path: "/impact",
      },
      {
        label: "Events",
        title: "Komende momenten",
        text:
          "GIANTS-events, mindset-sessies en communitybijeenkomsten.",
        path: "/events",
      },
    ],
  },

  de: {
    eyebrow: "GIANTS entdecken",
    title:
      "Erlebnisse, Community und Mindset.",
    explore: "Entdecken",

    cards: [
      {
        label: "Mindset",
        title: "Die Geburt des Mutes",
        text:
          "Wöchentliche Reflexionen zu Mut, Disziplin und persönlichem Wachstum.",
        path: "/letters",
      },
      {
        label: "Erlebnisse",
        title: "Buchbare Erlebnisse",
        text:
          "Geburtstage, Basketball, Teamerlebnisse und Bewegungssessions.",
        path: "/experiences",
      },
      {
        label: "Community",
        title: "Community Impact",
        text:
          "Programme zu Verbindung, Inklusion, Wohlbefinden und sozialer Wirkung.",
        path: "/impact",
      },
      {
        label: "Events",
        title: "Kommende Momente",
        text:
          "GIANTS-Events, Mindset-Sessions und Community-Treffen.",
        path: "/events",
      },
    ],
  },
};