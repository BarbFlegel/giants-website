import type {
  HomeContent,
  Locale,
} from "./types";

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    eyebrow: "Explore GIANTS",
    title: "Experiences, community and mindset.",
    exploreCta: "Explore",
    mobileJoin: "Join",
    mobileBook: "Book",

    cards: [
      {
        label: "Mindset",
        title: "The Birth of Courage",
        text:
          "Weekly reflections and rituals focused on courage, discipline and personal growth.",
        path: "/letters",
        featured: true,
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
    title: "Expériences, communauté et mindset.",
    exploreCta: "Découvrir",
    mobileJoin: "Rejoindre",
    mobileBook: "Réserver",

    cards: [
      {
        label: "Mindset",
        title: "La naissance du courage",
        text:
          "Des réflexions et rituels hebdomadaires autour du courage, de la discipline et du développement personnel.",
        path: "/letters",
        featured: true,
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
          "Des programmes axés sur la connexion, l'inclusion, le bien-être et l'impact social.",
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
    title: "Ervaringen, community en mindset.",
    exploreCta: "Ontdek",
    mobileJoin: "Meedoen",
    mobileBook: "Boeken",

    cards: [
      {
        label: "Mindset",
        title: "De geboorte van moed",
        text:
          "Wekelijkse reflecties en rituelen rond moed, discipline en persoonlijke groei.",
        path: "/letters",
        featured: true,
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
          "Programma's rond verbinding, inclusie, welzijn en maatschappelijke impact.",
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
    title: "Erlebnisse, Community und Mindset.",
    exploreCta: "Entdecken",
    mobileJoin: "Mitmachen",
    mobileBook: "Buchen",

    cards: [
      {
        label: "Mindset",
        title: "Die Geburt des Mutes",
        text:
          "Wöchentliche Reflexionen und Rituale zu Mut, Disziplin und persönlichem Wachstum.",
        path: "/letters",
        featured: true,
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
          "Programme mit Fokus auf Verbindung, Inklusion, Wohlbefinden und soziale Wirkung.",
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