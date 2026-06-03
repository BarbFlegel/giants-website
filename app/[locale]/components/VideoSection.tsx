"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

type VideoItem = {
  title: string;
  src: string;
};

const videos: VideoItem[] = [
  {
    title: "Basketball Training 1",
    src: "/videos/basketball-training1.mp4",
  },
  {
    title: "Functional Training",
    src: "/videos/giants-community-functional-training.mp4",
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
    title: "GIANTS Community Video 1",
    src: "/videos/giants-community-video-1.mp4",
  },
  {
    title: "GIANTS Community Video 2",
    src: "/videos/giants-community-video-2.mp4",
  },
  {
    title: "GIANTS Community Video 3",
    src: "/videos/giants-community-video-3.mp4",
  },
  {
    title: "GIANTS Community Video 4",
    src: "/videos/giants-community-video-4.mp4",
  },
  {
    title: "GIANTS Community Video 5",
    src: "/videos/giants-community-video-5.mp4",
  },
  {
    title: "GIANTS Community Video 6",
    src: "/videos/giants-community-video-6.mp4",
  },
  {
    title: "GIANTS Community Video 7",
    src: "/videos/giants-community-video-7.mp4",
  },
  {
    title: "GIANTS Community Video 8",
    src: "/videos/giants-community-video-8.mp4",
  },
];

export default function VideoSection({ t }: { t: any }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isVideoGalleryOpen, setIsVideoGalleryOpen] = useState(false);

  const previewVideos = videos.slice(0, 3);

  return (
    <section
      id="energy"
      className="scroll-mt-40 bg-black px-6 py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label={t.labels.energy}
            title={t.sectionTitles.energy}
            description="Movement, games, rhythm, teamwork, and the kind of atmosphere that makes people come back."
          />
        </FadeUp>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {previewVideos.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Play video: ${item.title}`}
              title={`Play video: ${item.title}`}
              onClick={() => setActiveVideo(item.src)}
              className={`group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 text-left transition hover:-translate-y-1 hover:border-orange-500/50 ${
                index > 0 ? "hidden md:block" : ""
              }`}
            >
              <VideoCard video={item} />
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsVideoGalleryOpen(true)}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-orange-500 px-8 py-3 text-sm font-black text-orange-300 transition hover:bg-orange-500 hover:text-black"
          >
            See more
          </button>
        </div>
      </div>

      {isVideoGalleryOpen && (
        <div
          className="fixed inset-0 z-[998] overflow-y-auto bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Full video gallery"
        >
          <div className="mx-auto max-w-6xl py-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-3xl font-black text-white">
                {t.sectionTitles.energy}
              </h2>

              <button
                type="button"
                onClick={() => setIsVideoGalleryOpen(false)}
                className="rounded-full bg-orange-500 px-5 py-3 font-black text-black transition hover:scale-105 hover:bg-orange-400"
              >
                Close
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {videos.map((item) => (
                <button
                  key={`${item.src}-gallery`}
                  type="button"
                  aria-label={`Play video: ${item.title}`}
                  title={`Play video: ${item.title}`}
                  onClick={() => setActiveVideo(item.src)}
                  className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 text-left transition hover:-translate-y-1 hover:border-orange-500/50"
                >
                  <VideoCard video={item} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeVideo && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video fullscreen"
          onClick={() => setActiveVideo(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute right-5 top-5 z-10 rounded-full bg-orange-500 px-5 py-3 font-black text-black transition hover:scale-105 hover:bg-orange-400"
          >
            Close
          </button>

          <video
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] w-full max-w-5xl rounded-3xl border border-orange-500/30 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <source src={activeVideo} type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  );
}

function VideoCard({ video }: { video: VideoItem }) {
  return (
    <>
      <div className="relative">
        <video
          muted
          playsInline
          preload="metadata"
          className="aspect-video w-full object-cover opacity-90 transition group-hover:scale-105 group-hover:opacity-100"
        >
          <source src={video.src} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <span className="rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-black">
            Play
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-black text-white">{video.title}</h3>
      </div>
    </>
  );
}