"use client";

import Link from "next/link";
import { useState } from "react";
import { galleryItems } from "../../content/gallery";
import type { Locale } from "../../content";

type PhotosClientProps = {
  locale: Locale;
  cmsPhotos: Array<{ id: string; image: string; title: string }>;
};

export default function PhotosClient({ locale, cmsPhotos }: PhotosClientProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    image: string;
    title: string;
  } | null>(null);
  const photos = cmsPhotos.length > 0
    ? cmsPhotos
    : galleryItems.map((item) => ({ id: item.image, image: item.image, title: item.title }));

  return (
    <main className="giants-content-page">
      <section className="giants-content-section">
        <div className="giants-content-container">
          <Link href={`/${locale}/moments`} className="giants-back-link">
            ← Back to moments
          </Link>
          <p className="giants-eyebrow">Photos</p>
          <h1 className="giants-section-title">Community Photos</h1>

          <div className="giants-photo-grid">
            {photos.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setSelectedPhoto({ image: item.image, title: item.title })
                }
                className="giants-photo-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover"
                  loading="lazy"
                />
                <div className="giants-photo-overlay">
                  <p>{item.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div className="giants-media-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="giants-media-close"
            aria-label="Close photo"
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
