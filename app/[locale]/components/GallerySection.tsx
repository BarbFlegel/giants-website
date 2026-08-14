"use client";

import Image from "next/image";
import Link from "next/link";
import type { Locale, Translation } from "../content";

type GallerySectionProps = {
  locale: Locale;
  t: Translation;
};

export default function GallerySection({
  locale,
  t,
}: GallerySectionProps) {
  return (
    <section className="giants-content-section">
      <div className="giants-content-container">
        <div className="giants-content-intro">
          <p className="giants-eyebrow">{t.labels.gallery}</p>
          <h1 className="giants-section-title">{t.sectionTitles.gallery}</h1>
          <p className="giants-content-intro-text">{t.gallery.text}</p>
        </div>

        <div className="giants-moments-grid">
          <Link
            href={`/${locale}/gallery/photos`}
            className="giants-moment-card"
          >
            <div className="giants-moment-image">
              <Image
                src="/images/gallery-basketball-training.jpg"
                alt={t.gallery.photosTitle}
                fill
                sizes="(max-width: 680px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="giants-moment-body">
              <p className="giants-card-label">{t.gallery.photosLabel}</p>
              <h2 className="giants-moment-title">{t.gallery.photosTitle}</h2>
              <p className="giants-card-text">{t.gallery.one}</p>
              <div className="giants-moment-action">
                <span className="giants-button giants-button-tertiary">
                  {t.gallery.viewPhotos}
                </span>
              </div>
            </div>
          </Link>

          <Link
            href={`/${locale}/gallery/videos`}
            className="giants-moment-card"
          >
            <div className="giants-moment-image">
              <Image
                src="/images/workout-session.jpg"
                alt={t.gallery.videosTitle}
                fill
                sizes="(max-width: 680px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="giants-moment-body">
              <p className="giants-card-label">{t.gallery.videosLabel}</p>
              <h2 className="giants-moment-title">{t.gallery.videosTitle}</h2>
              <p className="giants-card-text">{t.gallery.two}</p>
              <div className="giants-moment-action">
                <span className="giants-button giants-button-tertiary">
                  {t.gallery.viewVideos}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
