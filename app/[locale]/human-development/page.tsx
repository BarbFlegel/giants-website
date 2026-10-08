import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  locales,
  translations,
  type Locale,
} from "../content";
import type { HumanDevelopmentProgramme } from "../content/types";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function ProgrammeCard({
  programme,
}: {
  programme: HumanDevelopmentProgramme;
}) {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="text-xl font-black leading-tight text-white">
        {programme.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-zinc-300">
        {programme.description}
      </p>

      <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-300">
        {programme.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden="true" className="text-orange-400">
              →
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {programme.closing && (
        <p className="mt-5 border-t border-zinc-800 pt-4 text-sm leading-6 text-zinc-400">
          {programme.closing}
        </p>
      )}
    </article>
  );
}

export default async function HumanDevelopmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const currentLocale = locale as Locale;
  const t = translations[currentLocale];
  const content = t.humanDevelopment;

  return (
    <main className="giants-content-page">
      <Header locale={currentLocale} t={t} />

      <section className="giants-content-section">
        <div className="giants-content-container">
          <div className="giants-content-intro">
            <p className="giants-eyebrow">{content.label}</p>
            <h1 className="giants-section-title">{content.title}</h1>
            <p className="giants-content-intro-text">
              {content.intro}
            </p>
          </div>

          <section
            className="giants-access-panel"
            aria-labelledby="approach-title"
          >
            <h2 id="approach-title" className="giants-access-title">
              {content.approach.title}
            </h2>

            {content.approach.paragraphs.map((paragraph) => (
              <p key={paragraph} className="giants-access-copy mt-3">
                {paragraph}
              </p>
            ))}
          </section>

          <section aria-labelledby="youth-title" className="mt-10">
            <h2 id="youth-title" className="giants-eyebrow mb-6">
              {content.youth.title}
            </h2>

            <div className="giants-card-grid">
              {content.youth.programmes.map((programme) => (
                <ProgrammeCard
                  key={programme.title}
                  programme={programme}
                />
              ))}
            </div>
          </section>

          <section aria-labelledby="adults-title" className="mt-12">
            <h2 id="adults-title" className="giants-eyebrow mb-6">
              {content.adults.title}
            </h2>

            <div className="giants-card-grid">
              {content.adults.programmes.map((programme) => (
                <ProgrammeCard
                  key={programme.title}
                  programme={programme}
                />
              ))}
            </div>
          </section>

          <section
            aria-labelledby="difference-title"
            className="giants-access-panel mt-12"
          >
            <h2 id="difference-title" className="giants-access-title">
              {content.difference.title}
            </h2>

            {content.difference.paragraphs.map((paragraph) => (
              <p key={paragraph} className="giants-access-copy mt-3">
                {paragraph}
              </p>
            ))}

            <p className="mt-6 font-bold leading-7 text-orange-400">
              {content.difference.journey}
            </p>

            <ul className="mt-5 space-y-2 text-sm leading-7 text-zinc-300">
              {content.difference.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="focus-title" className="mt-10">
            <h2 id="focus-title" className="giants-eyebrow mb-6">
              {content.focus.title}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.focus.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6"
                >
                  <h3 className="giants-eyebrow">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="important-title"
            className="giants-access-panel mt-10"
          >
            <h2 id="important-title" className="giants-access-title">
              {content.important.title}
            </h2>

            {content.important.paragraphs.map((paragraph) => (
              <p key={paragraph} className="giants-access-copy mt-3">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            aria-labelledby="programme-contact-title"
            className="mt-10"
          >
            <h2
              id="programme-contact-title"
              className="text-2xl font-black"
            >
              {content.contact.title}
            </h2>

            <a
              href={`/${currentLocale}/contact?interest=human-development`}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 font-bold text-black transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              {content.contact.button}
            </a>
          </section>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}