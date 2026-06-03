import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryItems } from "../../content/gallery";
import { locales, translations, type Locale } from "../../content";

export const metadata = {
  title: "Community Photos | GIANTS",
  description:
    "Explore real moments from GIANTS experiences, events and community sessions.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PhotosPage({
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
          {t.gallery.photosLabel}
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase md:text-6xl">
          {t.gallery.photosTitle}
        </h1>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.image}-${index}`}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
            >
              <div className="relative h-[260px] overflow-hidden md:h-[340px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-4">
                  <h2 className="text-base font-bold text-white">
                    {item.title}
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}