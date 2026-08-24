"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type {
  EventTranslations,
  Locale,
} from "../content";
import type { CmsEvent } from "../lib/sanity";

type EventCardsProps = {
  events: CmsEvent[];
  locale: Locale;
  dateLocale: string;
  text: EventTranslations;
};

export default function EventCards({
  events,
  locale,
  dateLocale,
  text,
}: EventCardsProps) {
  const [openPoster, setOpenPoster] =
    useState<CmsEvent | null>(null);

  useEffect(() => {
    if (!openPoster) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPoster(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener(
        "keydown",
        closeOnEscape,
      );
    };
  }, [openPoster]);

  function formatEventDate(event: CmsEvent) {
    if (!event.startDate) {
      return text.comingSoon;
    }

    const date = new Date(event.startDate);

    if (Number.isNaN(date.getTime())) {
      return text.comingSoon;
    }

    return new Intl.DateTimeFormat(dateLocale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  function getDetailsHref(event: CmsEvent) {
    if (!event.detailsUrl) {
      return `/${locale}/events/${event.slug}`;
    }

    if (
      event.detailsUrl.startsWith("http://") ||
      event.detailsUrl.startsWith("https://")
    ) {
      return event.detailsUrl;
    }

    if (
      event.detailsUrl.startsWith(`/${locale}/`)
    ) {
      return event.detailsUrl;
    }

    const normalizedPath = event.detailsUrl.startsWith("/")
      ? event.detailsUrl
      : `/${event.detailsUrl}`;

    return `/${locale}${normalizedPath}`;
  }

  return (
    <>
      <div className="giants-card-grid">
        {events.map((event) => {
          const detailsHref = getDetailsHref(event);

          const detailsAreExternal =
            detailsHref.startsWith("http://") ||
            detailsHref.startsWith("https://");

          return (
            <article
              key={event._id}
              className="giants-home-card giants-cms-event-card"
            >
              {event.posterUrl && (
                <button
                  type="button"
                  className="giants-cms-event-poster-button"
                  onClick={() => setOpenPoster(event)}
                  aria-label={`${text.viewPoster}: ${event.title}`}
                >
                  <img
                    src={event.posterUrl}
                    alt={`${event.title} poster`}
                    className="giants-cms-event-poster"
                    loading="lazy"
                  />

                  <span className="giants-cms-poster-hint">
                    {text.viewPoster}
                  </span>
                </button>
              )}

              <p className="giants-card-label">
                {event.status === "comingSoon"
                  ? text.comingSoon
                  : formatEventDate(event)}
              </p>

              <h3 className="giants-card-title">
                {event.title}
              </h3>

              {event.description && (
                <p className="giants-card-text">
                  {event.description}
                </p>
              )}

              {(event.location || event.price) && (
                <p className="giants-cms-event-meta">
                  {[event.location, event.price]
                    .filter(Boolean)
                    .join(" • ")}
                </p>
              )}

              <div className="giants-cms-event-actions">
                <Link
                  href={detailsHref}
                  className="giants-button giants-button-primary"
                  target={
                    detailsAreExternal
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    detailsAreExternal
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {text.viewDetails}
                </Link>

                {event.registrationUrl && (
                  <a
                    href={event.registrationUrl}
                    className="giants-button giants-button-tertiary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.ctaLabel || text.bookNow}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {openPoster?.posterUrl && (
        <div
          className="giants-media-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${text.viewPoster}: ${openPoster.title}`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setOpenPoster(null);
            }
          }}
        >
          <button
            type="button"
            className="giants-media-close"
            onClick={() => setOpenPoster(null)}
            aria-label={text.closePoster}
            autoFocus
          >
            ×
          </button>

          <div className="giants-media-modal-inner">
            <img
              src={openPoster.posterUrl}
              alt={`${openPoster.title} poster`}
            />
          </div>
        </div>
      )}
    </>
  );
}