import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { locales, type Locale } from "../content/types";
import { translations } from "../content/translations";

export default async function LettersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const t = translations[locale as Locale];

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href={`/${locale}`}
          className="text-sm font-black text-orange-400"
        >
          ← GIANTS
        </Link>

        <p className="mt-10 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
          {t.letters.label}
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">
          {t.letters.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          {t.letters.description}
        </p>

        <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-800">
          <Image
            src="/images/birth-of-courage.jpg"
            alt="The Birth of Courage"
            width={1200}
            height={1600}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="mt-12 space-y-6">
          {t.letters.items.map((letter) => (
            <article
              key={letter.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">
                {letter.label}
              </p>

              <h2 className="mt-3 text-3xl font-black">
                {letter.title}
              </h2>

              <p className="mt-4 leading-8 text-zinc-300">
                {letter.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://www.facebook.com/share/1LU8tYc8Tt/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.letters.facebookCta}
          </a>
        </div>
      </div>
    </main>
  );
}