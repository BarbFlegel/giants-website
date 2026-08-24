"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Locale } from "../../content";
import { galleryItems } from "../../content/gallery";

type PhotoItem = {
  id: string;
  image: string;
  title: string;
};

type PhotosClientProps = {
  locale: Locale;
  cmsPhotos: PhotoItem[];
};

export default function PhotosClient({
  locale,
  cmsPhotos,
}: PhotosClientProps) {
  const [selectedPhoto, setSelectedPhoto] =
    useState<PhotoItem | null>(null);

  const legacyPhotos: PhotoItem[] = galleryItems.map((item) => ({
    id: item.image,
    image: item.image,
    title: item.title,
  }));

  // Sanity photos are displayed first, followed by legacy photos.
  const photos: PhotoItem[] = [...cmsPhotos, ...legacyPhotos].filter(
    (photo, index, collection) =>
      collection.findIndex(
        (candidate) =>
          candidate.id === photo.id ||
          candidate.image === photo.image
      ) === index
  );

  useEffect(() => {
    if (!selectedPhoto) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedPhoto]);

  return (
    <main className="giants-content-page">
      <section className="giants-content-section">
        <div className="giants-content-container">
          <Link
            href={`/${locale}/moments`}
            className="giants-back-link"
          >
            ← Back to moments
          </Link>

          <p className="giants-eyebrow">Photos</p>

          <h1 className="giants-section-title">
            Community Photos
          </h1>

          <div className="giants-photo-grid">
            {photos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="giants-photo-card"
                aria-label={`Open ${photo.title}`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="object-cover"
                  loading="lazy"
                />

                <div className="giants-photo-overlay">
                  <p>{photo.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="giants-media-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setSelectedPhoto(null);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="giants-media-close"
            aria-label="Close photo"
            autoFocus
          >
            ×
          </button>

          <div className="giants-media-modal-inner">
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}