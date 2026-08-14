"use client";

import Link from "next/link";

import {
  ribbonContent,
  type Locale,
} from "../content";

type UpcomingRibbonProps = {
  locale: Locale;
};

function getNextThursday(from = new Date()) {
  const date = new Date(from);

  date.setHours(0, 0, 0, 0);

  const currentDay = date.getDay();

  const daysUntilThursday =
    (4 - currentDay + 7) % 7;

  date.setDate(
    date.getDate() + daysUntilThursday
  );

  return {
    date,
    daysUntil: daysUntilThursday,
  };
}

export default function UpcomingRibbon({
  locale,
}: UpcomingRibbonProps) {
  const t = ribbonContent[locale];

  const {
    date,
    daysUntil,
  } = getNextThursday();

  const browserLocales: Record<
    Locale,
    string
  > = {
    en: "en-GB",
    fr: "fr-BE",
    nl: "nl-BE",
    de: "de-DE",
  };

  const formattedDate =
    new Intl.DateTimeFormat(
      browserLocales[locale],
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    ).format(date);

  const countdown =
    daysUntil === 0
      ? t.today
      : daysUntil === 1
        ? t.oneDay
        : t.days(daysUntil);

  return (
    <Link
      href={`/${locale}/letters`}
      className="giants-ribbon"
    >
      <div className="giants-ribbon-inner">
        <span>🔥</span>

        <span>{t.title}</span>

        <span className="giants-ribbon-accent">
          •
        </span>

        <span className="giants-ribbon-accent">
          {formattedDate}
        </span>

        <span className="giants-ribbon-accent">
          •
        </span>

        <span>
          {countdown}
        </span>

        <span className="giants-ribbon-accent">
          •
        </span>

        <span>
          {t.location}
        </span>

        <span className="giants-ribbon-accent">
          •
        </span>

        <span>
          {t.action}
        </span>
      </div>
    </Link>
  );
}