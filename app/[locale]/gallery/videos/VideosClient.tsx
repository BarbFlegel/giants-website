"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "../../content";

const fallbackVideos = [
  { title: "Basketball Training 1", src: "/videos/basketball-training1.mp4" },
  { title: "Basketball Training 2", src: "/videos/basketball-training2.mp4" },
  { title: "Board Games", src: "/videos/board-games.mp4" },
  { title: "Functional Training", src: "/videos/giants-community-functional-training.mp4" },
  { title: "Community Video 1", src: "/videos/giants-community-video-1.mp4" },
  { title: "Community Video 2", src: "/videos/giants-community-video-2.mp4" },
  { title: "Community Video 3", src: "/videos/giants-community-video-3.mp4" },
  { title: "Community Video 4", src: "/videos/giants-community-video-4.mp4" },
  { title: "Community Video 5", src: "/videos/giants-community-video-5.mp4" },
  { title: "Community Video 6", src: "/videos/giants-community-video-6.mp4" },
  { title: "Community Video 7", src: "/videos/giants-community-video-7.mp4" },
  { title: "Community Video 8", src: "/videos/giants-community-video-8.mp4" },
];

type VideosClientProps = {
  locale: Locale;
  cmsVideos: VideoItem[];
};

type VideoItem = {
  id: string;
  title: string;
  src: string;
  thumbnail?: string;
  external?: boolean;
};

export default function VideosClient({ locale, cmsVideos }: VideosClientProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const videos: VideoItem[] = cmsVideos.length > 0
    ? cmsVideos
    : fallbackVideos.map((video) => ({...video, id: video.src}));

  return (
    <main className="giants-content-page">
      <section className="giants-content-section">
        <div className="giants-content-container">
          <Link href={`/${locale}/moments`} className="giants-back-link">
            ← Back to moments
          </Link>
          <p className="giants-eyebrow">Videos</p>
          <h1 className="giants-section-title">Movement Videos</h1>

          <div className="giants-video-grid">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setSelectedVideo(video)}
                className="giants-video-card"
              >
                {video.thumbnail ? (
                  <img src={video.thumbnail} alt="" loading="lazy" />
                ) : (
                  <video muted playsInline preload="metadata">
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
        <div className="giants-media-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="giants-media-close"
            aria-label="Close video"
          >
            ×
          </button>
          {selectedVideo.external ? (
            <a href={selectedVideo.src} target="_blank" rel="noopener noreferrer" className="giants-button giants-button-primary">
              Open video
            </a>
          ) : (
            <video controls autoPlay playsInline className="giants-media-video">
              <source src={selectedVideo.src} />
            </video>
          )}
        </div>
      )}
    </main>
  );
}
