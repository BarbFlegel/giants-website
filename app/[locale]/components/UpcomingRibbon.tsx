"use client";

import Link from "next/link";
import type { Locale } from "../content";

type UpcomingRibbonProps = {
  locale: Locale;
};

function getNextThursday(from = new Date()) {
  const date = new Date(from);
  date.setHours(0, 0, 0, 0);

  const currentDay = date.getDay();
  const thursday = 4;

  const daysUntilThursday =
    (thursday - currentDay + 7) % 7;

  date.setDate(date.getDate() + daysUntilThursday);

  return {
    date,
    daysUntil: daysUntilThursday,
  };
}

const ribbonCopy: Record<
  Locale,
  {
    title: string;
    location: string;
    action: string;
    today: string;
    inOneDay: string;
    inDays: (days: number) => string;
  }
> = {
  en: {
    title: "The Birth of Courage",
    location: "Josaphat Park",
    action: "Tap to view",
    today: "Today",
    inOneDay: "In 1 day",
    inDays: (days) => `In ${days} days`,
  },

  fr: {
    title: "La naissance du courage",
    location: "Parc Josaphat",
    action: "Voir",
    today: "Aujourd’hui",
    inOneDay: "Dans 1 jour",
    inDays: (days) => `Dans ${days} jours`,
  },

  nl: {
    title: "De geboorte van moed",
    location: "Josaphatpark",
    action: "Bekijk",
    today: "Vandaag",
    inOneDay: "Over 1 dag",
    inDays: (days) => `Over ${days} dagen`,
  },

  de: {
    title: "Die Geburt des Mutes",
    location: "Josaphat-Park",
    action: "Ansehen",
    today: "Heute",
    inOneDay: "In 1 Tag",
    inDays: (days) => `In ${days} Tagen`,
  },
};

export default function UpcomingRibbon({
  locale,
}: UpcomingRibbonProps) {
  const copy = ribbonCopy[locale] ?? ribbonCopy.en;

  const { date, daysUntil } = getNextThursday();

  const localeMap: Record<Locale, string> = {
    en: "en-GB",
    fr: "fr-BE",
    nl: "nl-BE",
    de: "de-DE",
  };

  const formattedDate = new Intl.DateTimeFormat(
    localeMap[locale] ?? "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  ).format(date);

  const countdown =
    daysUntil === 0
      ? copy.today
      : daysUntil === 1
        ? copy.inOneDay
        : copy.inDays(daysUntil);

  return (
    <Link
      href={`/${locale}/letters`}
      className="
        relative z-40 block
        border-y border-orange-500/40
        bg-[#541b08]
        px-3 py-2.5
        text-center
        transition-colors
        hover:bg-[#67220b]
      "
    >
      <div
        className="
          mx-auto flex max-w-7xl
          flex-wrap items-center justify-center
          gap-x-2 gap-y-1
          text-[9px] font-black uppercase
          tracking-[0.14em]
          text-orange-50
          sm:text-[10px]
          md:text-xs
        "
      >
        <span>🔥</span>

        <span>{copy.title}</span>

        <span className="text-orange-400">•</span>

        <span className="text-orange-300">
          {formattedDate}
        </span>

        <span className="text-orange-400">•</span>

        <span className="text-orange-300">
          {countdown}
        </span>

        <span className="hidden text-orange-400 sm:inline">
          •
        </span>

        <span className="hidden sm:inline">
          {copy.location}
        </span>

        <span className="hidden text-orange-400 lg:inline">
          •
        </span>

        <span className="hidden lg:inline">
          {copy.action}
        </span>
      </div>
    </Link>
  );
}