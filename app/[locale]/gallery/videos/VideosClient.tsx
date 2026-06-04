"use client";

import { useState } from "react";

const videos = [
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

export default function VideosClient() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <a href="/en#gallery" className="text-sm font-black text-orange-300">
          ← Back to moments
        </a>

        <p className="mt-10 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
          Videos
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase md:text-6xl">
          Movement Videos
        </h1>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <button
              key={video.src}
              type="button"
              onClick={() => setSelectedVideo(video.src)}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-left transition hover:border-orange-500"
            >
              <video
                muted
                playsInline
                preload="metadata"
                className="aspect-video w-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>

              <p className="p-4 text-sm font-black text-white">{video.title}</p>
            </button>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="absolute right-5 top-5 rounded-full bg-orange-500 px-5 py-3 font-black text-black"
          >
            Close
          </button>

          <video
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] w-full max-w-5xl rounded-3xl bg-black"
          >
            <source src={selectedVideo} type="video/mp4" />
          </video>
        </div>
      )}
    </main>
  );
}