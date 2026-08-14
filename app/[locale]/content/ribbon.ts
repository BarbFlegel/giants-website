import type {
  Locale,
  RibbonContent,
} from "./types";

export const ribbonContent: Record<
  Locale,
  RibbonContent
> = {
  en: {
    title: "The Birth of Courage",
    location: "Josaphat Park",
    action: "View session",
    today: "Today",
    oneDay: "In 1 day",
    days: (count) => `In ${count} days`,
  },

  fr: {
    title: "La naissance du courage",
    location: "Parc Josaphat",
    action: "Voir la session",
    today: "Aujourd’hui",
    oneDay: "Dans 1 jour",
    days: (count) => `Dans ${count} jours`,
  },

  nl: {
    title: "De geboorte van moed",
    location: "Josaphatpark",
    action: "Bekijk sessie",
    today: "Vandaag",
    oneDay: "Over 1 dag",
    days: (count) => `Over ${count} dagen`,
  },

  de: {
    title: "Die Geburt des Mutes",
    location: "Josaphat-Park",
    action: "Session ansehen",
    today: "Heute",
    oneDay: "In 1 Tag",
    days: (count) => `In ${count} Tagen`,
  },
};