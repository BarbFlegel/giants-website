"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Locale } from "../../content";

type VideoItem = {
  id: string;
  title: string;
  src: string;
  thumbnail?: string;
  external?: boolean;
};

type VideosClientProps = {
  locale: Locale;
  cmsVideos: VideoItem[];
};

const fallbackVideos = [
  {
    title: "Basketball Training 1",
    src: "/videos/basketball-training1.mp4",
  },
  {
    title: "Basketball Training 2",
    src: "/videos/basketball-training2.mp4",
  },
  {
    title: "Board Games",
    src: "/videos/board-games.mp4",
  },
  {
    title: "Functional Training",
    src: "/videos/giants-community-functional-training.mp4",
  },
  {
    title: "Community Video 1",
    src: "/videos/giants-community-video-1.mp4",
  },
  {
    title: "Community Video 2",
    src: "/videos/giants-community-video-2.mp4",
  },
  {
    title: "Community Video 3",
    src: "/videos/giants-community-video-3.mp4",
  },
  {
    title: "Community Video 4",
    src: "/videos/giants-community-video-4.mp4",
  },
  {
    title: "Community Video 5",
    src: "/videos/giants-community-video-5.mp4",
  },
  {
    title: "Community Video 6",
    src: "/videos/giants-community-video-6.mp4",
  },
  {
    title: "Community Video 7",
    src: "/videos/giants-community-video-7.mp4",
  },
  {
    title: "Community Video 8",
    src: "/videos/giants-community-video-8.mp4",
  },
];

export default function VideosClient({
  locale,
  cmsVideos,
}: VideosClientProps) {
  const [selectedVideo, setSelectedVideo] =
    useState<VideoItem | null>(null);

  const legacyVideos: VideoItem[] = fallbackVideos.map((video) => ({
    ...video,
    id: video.src,
  }));

  const videos: VideoItem[] = [...cmsVideos, ...legacyVideos].filter(
    (video, index, collection) =>
      collection.findIndex(
        (candidate) =>
          candidate.id === video.id ||
          candidate.src === video.src
      ) === index
  );

  useEffect(() => {
    if (!selectedVideo) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedVideo]);

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

          <p className="giants-eyebrow">Videos</p>
          <h1 className="giants-section-title">
            Movement Videos
          </h1>

          <div className="giants-video-grid">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setSelectedVideo(video)}
                className="giants-video-card"
                aria-label={`Play ${video.title}`}
              >
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} video thumbnail`}
                    loading="lazy"
                  />
                ) : (
                  <video
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                  >
                    <source src={video.src} />
                  </video>
                )}

                <div className="giants-video-card-body">
                  <p>{video.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div
          className="giants-media-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setSelectedVideo(null);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="giants-media-close"
            aria-label="Close video"
            autoFocus
          >
            ×
          </button>

          {selectedVideo.external ? (
            <a
              href={selectedVideo.src}
              target="_blank"
              rel="noopener noreferrer"
              className="giants-button giants-button-primary"
            >
              Open video
            </a>
          ) : (
            <video
              controls
              autoPlay
              playsInline
              className="giants-media-video"
            >
              <source src={selectedVideo.src} />
              Your browser does not support video playback.
            </video>
          )}
        </div>
      )}
    </main>
  );
}