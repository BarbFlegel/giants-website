import Link from "next/link";
import type { Locale, Translation } from "../content/types";

export default function LandingPreviews({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  const cards = [
    {
      label: t.nav.vision,
      title: "Vision",
      text: "The mission, philosophy and long-term purpose behind GIANTS.",
      href: `/${locale}/vision`,
    },
    {
      label: t.nav.letters,
      title: t.letters.title,
      text: "Weekly mindset reflections around courage, discipline and growth.",
      href: `/${locale}/letters`,
    },
    {
      label: t.nav.experiences,
      title: t.sectionTitles.experiences,
      text: "Bookable formats: basketball, movement, team building and birthdays.",
      href: `/${locale}/experiences`,
    },
    {
      label: t.nav.events,
      title: t.events.title,
      text: "Current and upcoming dated GIANTS moments.",
      href: `/${locale}/events`,
    },
  ];

  return (
    <section className="bg-black px-4 py-12 text-white md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-orange-500"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
                {card.label}
              </p>

              <h2 className="mt-4 text-2xl font-black text-white">
                {card.title}
              </h2>

              <p className="mt-4 leading-7 text-zinc-300">
                {card.text}
              </p>

              <p className="mt-6 font-black text-orange-300">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}