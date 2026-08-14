"use client";

import Link from "next/link";

import type {
  Locale,
  Translation,
} from "../content";

type VideoSectionProps = {
  locale: Locale;
  t: Translation;
};

export default function VideoSection({
  locale,
  t,
}: VideoSectionProps) {
  return (
    <section className="giants-content-section">
      <div className="giants-content-container">
        <div className="giants-content-intro">
          <p className="giants-eyebrow">
            {t.gallery.videosLabel}
          </p>

          <h1 className="giants-section-title">
            {t.gallery.videosTitle}
          </h1>

          <p className="giants-content-intro-text">
            {t.gallery.two}
          </p>
        </div>

        <div className="giants-join-actions">
          <Link
            href={`/${locale}/gallery/videos`}
            className="giants-button giants-button-primary"
          >
            {t.gallery.viewVideos}
          </Link>

          <Link
            href={`/${locale}/moments`}
            className="giants-button giants-button-secondary"
          >
            ← {t.nav.gallery}
          </Link>
        </div>
      </div>
    </section>
  );
}