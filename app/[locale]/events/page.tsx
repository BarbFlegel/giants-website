import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const currentLocale = locale as Locale;
  const t = translations[currentLocale];

  const events = [
    {
      status: "Coming Soon",
      title: "The Birth of Courage",
      date: "9 July 2026",
      image: "/images/birth-of-courage-july.jpg",
      text: "Thursday morning mindset, sweat, discipline and community at Josaphat Park.",
      href: `/${currentLocale}/letters`,
    },
    {
      status: "Past Experience",
      title: "Luke’s Slam Dunk Birthday",
      date: "20 June 2026",
      image: "/images/luke-birthday-experience.jpg",
      text: "A basketball birthday experience with movement, play, energy and community.",
      href: `/${currentLocale}/contact`,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale={currentLocale} t={t} />

      <PageHero
        label="Events"
        title="Upcoming & featured experiences"
        text="Current and upcoming GIANTS moments: mindset sessions, birthdays, movement events and community experiences."
        image="action"
      >
        <div className="mt-6 flex items-center justify-between text-xs font-black uppercase tracking-[0.28em] text-zinc-500">
          <span>Swipe</span>
          <span>Drag →</span>
        </div>

        <div className="mt-6 flex snap-x gap-5 overflow-x-auto pb-5">
          {events.map((event) => (
            <article
              key={event.title}
              className="min-w-[86%] snap-start overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 md:min-w-[420px]"
            >
              <div className="relative h-[360px] bg-black md:h-[440px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-contain p-3"
                  sizes="420px"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-black uppercase text-black">
                  {event.status}
                </span>

                <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-orange-400">
                  {event.date}
                </p>

                <h2 className="mt-3 text-2xl font-black">{event.title}</h2>

                <p className="mt-4 leading-7 text-zinc-300">{event.text}</p>

                <a href={event.href} className="btn-primary mt-8 inline-flex">
                  Explore
                </a>
              </div>
            </article>
          ))}
        </div>
      </PageHero>

      <Footer t={t} />
    </main>
  );
}