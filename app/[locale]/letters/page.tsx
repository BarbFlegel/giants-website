import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LettersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const t = translations[locale as Locale];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale={locale as Locale} t={t} />

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">

          <p className="mt-10 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            {t.letters.label}
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            {t.letters.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {t.letters.description}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
              <Image
                src="/images/birth-of-courage.jpg"
                alt="The Birth of Courage"
                width={1200}
                height={1600}
                className="h-auto w-full"
                priority
              />
            </div>

            <div className="space-y-6">
              {t.letters.items.map((letter) => (
                <article
                  key={letter.title}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 md:p-8"
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

              <a
                href="https://www.facebook.com/share/1LU8tYc8Tt/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-full"
              >
                {t.letters.facebookCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}