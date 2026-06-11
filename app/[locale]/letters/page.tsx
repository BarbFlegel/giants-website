import Image from "next/image";
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

  const currentLocale = locale as Locale;
  const t = translations[currentLocale];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale={currentLocale} t={t} />

      <section className="relative overflow-hidden bg-black px-4 py-12 md:px-6 md:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hero-giants-premium.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">
            {t.letters.label}
          </p>

          <h1 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
            {t.letters.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
            {t.letters.description}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
              <Image
                src="/images/birth-of-courage.jpg"
                alt="The Birth of Courage"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
                {t.letters.weeklyLabel}
              </p>

              <h2 className="mt-4 text-2xl font-black md:text-3xl">
                {t.letters.featuredTitle}
              </h2>

              <p className="mt-4 leading-7 text-zinc-300">
                {t.letters.featuredText}
              </p>

              <a
                href="https://www.facebook.com/share/1LU8tYc8Tt/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex"
              >
                {t.letters.facebookCta}
              </a>
            </article>
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}