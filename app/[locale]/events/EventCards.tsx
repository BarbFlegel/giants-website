"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { CmsEvent } from "../lib/sanity";

type EventCardsProps = {
  events: CmsEvent[];
  locale: string;
  dateLocale: string;
};

export default function EventCards({ events, locale, dateLocale }: EventCardsProps) {
  const [openPoster, setOpenPoster] = useState<CmsEvent | null>(null);

  useEffect(() => {
    if (!openPoster) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPoster(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [openPoster]);

  const formatEventDate = (event: CmsEvent) =>
    new Intl.DateTimeFormat(dateLocale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(event.startDate));

  return (
    <>
      <div className="giants-card-grid">
        {events.map((event) => {
          const detailsHref = event.detailsUrl
            ? `/${locale}${event.detailsUrl.startsWith("/") ? event.detailsUrl : `/${event.detailsUrl}`}`
            : `/${locale}/events/${event.slug}`;

          return (
            <article key={event._id} className="giants-home-card giants-cms-event-card">
              {event.posterUrl && (
                <button
                  type="button"
                  className="giants-cms-event-poster-button"
                  onClick={() => setOpenPoster(event)}
                  aria-label={`Open ${event.title} poster`}
                >
                  <img
                    src={event.posterUrl}
                    alt={`${event.title} poster`}
                    className="giants-cms-event-poster"
                    loading="lazy"
                  />
                  <span className="giants-cms-poster-hint">View poster</span>
                </button>
              )}

              <p className="giants-card-label">
                {event.status === "comingSoon" ? "COMING SOON" : formatEventDate(event)}
              </p>
              <h2 className="giants-card-title">{event.title}</h2>
              <p className="giants-card-text">{event.description}</p>
              {(event.location || event.price) && (
                <p className="giants-cms-event-meta">
                  {[event.location, event.price].filter(Boolean).join(" • ")}
                </p>
              )}

              <div className="giants-cms-event-actions">
                <Link href={detailsHref} className="giants-button giants-button-primary">
                  View details
                </Link>
                {event.registrationUrl && (
                  <a
                    href={event.registrationUrl}
                    className="giants-button giants-button-tertiary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.ctaLabel || "Book now"}
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
          aria-label={`${openPoster.title} poster`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpenPoster(null);
          }}
        >
          <button
            type="button"
            className="giants-media-close"
            onClick={() => setOpenPoster(null)}
            aria-label="Close poster"
            autoFocus
          >
            ×
          </button>
          <div className="giants-media-modal-inner">
            <img src={openPoster.posterUrl} alt={`${openPoster.title} poster`} />
          </div>
        </div>
      )}
    </>
  );
}
