import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
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

      <PageHero
        label="Mindset Letters"
        title="Letters from GIANTS"
        text="Weekly reflections focused on mindset, courage, discipline, wellbeing and personal growth."
        image="/images/hero-giants-premium.jpg"
      >
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-orange-500/25 bg-zinc-950">
            <Image
              src="/images/birth-of-courage-july.jpg"
              alt="The Birth of Courage"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
              Weekly Mindset
            </p>

            <h2 className="mt-4 text-2xl font-black md:text-3xl">
              The Birth of Courage
            </h2>

            <p className="mt-4 leading-7 text-zinc-300">
              Tan and sweat. Thursday mornings. A new GIANTS mindset and movement ritual focused on discipline, focus, courage and community.
            </p>

            <a
              href="https://www.facebook.com/share/1LU8tYc8Tt/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              Join the Facebook Community
            </a>
          </article>
        </div>
      </PageHero>

      <Footer t={t} />
    </main>
  );
}