import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, translations, type Locale } from "../../content";

export const metadata = {
  title: "Movement Videos | GIANTS",
  description:
    "Watch GIANTS movement, basketball, wellbeing and community experience videos.",
};

const videos = [
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
];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function VideosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const t = translations[locale as Locale];

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href={`/${locale}#gallery`}
          className="text-sm font-black text-orange-300 hover:underline"
        >
          ← Back to gallery
        </Link>

        <p className="mt-10 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
          {t.gallery.videosLabel}
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase md:text-6xl">
          {t.gallery.videosTitle}
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.src}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>

              <div className="p-5">
                <h2 className="font-black text-white">{video.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}