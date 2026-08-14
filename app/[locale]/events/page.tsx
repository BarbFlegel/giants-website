import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

import WhatsAppButton from "../components/WhatsAppButton";

import {
  eventPageContent,
  locales,
  type Locale,
} from "../content";

type EventPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    return {};
  }

  const locale = localeParam as Locale;
  const t = eventPageContent[locale];

  return {
    title: t.seo.title,
    description: t.seo.description,

    openGraph: {
      title: t.seo.title,
      description: t.seo.description,
      type: "website",

      images: [
        {
          url: "/images/events/birthday.jpg",
          width: 1200,
          height: 630,
          alt: t.posterAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
      images: ["/images/events/birthday.jpg"],
    },
  };
}

export default async function EventPage({
  params,
}: EventPageProps) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const t = eventPageContent[locale];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/events/birthday.jpg"
          alt={t.posterAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:px-12">
          <Link
            href={`/${locale}`}
            className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-bold text-white/70 transition hover:text-orange-400"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4"
            />

            {t.back}
          </Link>

          <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
            {t.eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
            {t.title}
          </h1>

          <p className="mt-5 text-lg font-bold uppercase tracking-wide text-white/80">
            {t.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-white/75">
            <span className="inline-flex items-center gap-2">
              <CalendarDays
                aria-hidden="true"
                className="h-5 w-5 text-orange-400"
              />

              {t.date}
            </span>

            <span className="inline-flex items-center gap-2">
              <MapPin
                aria-hidden="true"
                className="h-5 w-5 text-orange-400"
              />

              {t.location}
            </span>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="max-w-3xl text-xl leading-relaxed text-white/75">
              {t.description}
            </p>

            <div className="mt-12">
              <h2 className="text-3xl font-black uppercase">
                {t.expectTitle}
              </h2>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {t.expect.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-white/80"
                  >
                    <span
                      className="mr-2 text-orange-400"
                      aria-hidden="true"
                    >
                      •
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-orange-500/20 bg-zinc-950 p-7 sm:p-8 lg:sticky lg:top-24">
            <h2 className="text-2xl font-black uppercase">
              {t.detailsTitle}
            </h2>

            <dl className="mt-7 space-y-6">
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                  {t.dateLabel}
                </dt>

                <dd className="mt-1 text-lg font-semibold">
                  {t.date}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                  {t.placeLabel}
                </dt>

                <dd className="mt-1 text-lg font-semibold">
                  {t.location}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                  {t.registrationLabel}
                </dt>

                <dd className="mt-1 text-white/65">
                  {t.registration}
                </dd>
              </div>
            </dl>

            <WhatsAppButton
              message={t.whatsappMessage}
              label={t.whatsappButton}
              className="mt-8 w-full"
            />
          </aside>
        </div>
      </section>
    </main>
  );
}