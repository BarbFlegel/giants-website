"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { galleryItems } from "../../content/gallery";
import type { Locale } from "../../content";

type PhotosClientProps = {
  locale: Locale;
};

export default function PhotosClient({ locale }: PhotosClientProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    image: string;
    title: string;
  } | null>(null);

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
            {galleryItems.map((item) => (
              <button
                key={item.image}
                type="button"
                onClick={() =>
                  setSelectedPhoto({ image: item.image, title: item.title })
                }
                className="giants-photo-card"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
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
            <Image
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
