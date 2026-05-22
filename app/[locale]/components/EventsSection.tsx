import Image from "next/image";
import { eventItems, type EventItem } from "../content/events";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function EventsSection({ t }: { t: any }) {
  const featured = eventItems[0];
  const rest = eventItems.slice(1);

  if (!featured) return null;

  return (
    <section
      id="events"
      className="scroll-mt-40 bg-black px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label={t.labels.events}
            title={t.sectionTitles.events}
            description="Featured moments, upcoming concepts, and community experiences."
          />
        </FadeUp>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <FadeUp>
            <article className="group overflow-hidden rounded-3xl border border-orange-500/40 bg-zinc-900 transition hover:-translate-y-1 hover:border-orange-400/70 hover:shadow-[0_0_35px_rgba(249,115,22,0.18)]">
              <div className="relative h-[300px] w-full overflow-hidden bg-black sm:h-[420px] lg:h-[560px]">
                <Image
                  src={featured.image}
                  alt={t.events.birthday}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-3 inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase text-black">
                  {featured.status}
                </p>

                <h3 className="text-2xl font-bold text-white">
                  {t.events.birthday}
                </h3>

                <p className="mt-3 text-orange-300">
                  {t.events.birthdayDate} • {t.events.birthdayTime}
                </p>

                <p className="mt-1 text-zinc-300">
                  {t.events.birthdayLocation}
                </p>

                <a
                  href="#join"
                  className="mt-6 inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-black transition hover:scale-105 hover:bg-orange-400"
                >
                  Ask About This Event
                </a>
              </div>
            </article>
          </FadeUp>

          <div className="grid gap-6">
            {rest.slice(0, 3).map((event: EventItem) => (
              <FadeUp key={event.title}>
                <article className="group grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-orange-500/50 md:grid-cols-[180px_1fr]">
                  <div className="relative h-[220px] overflow-hidden bg-black md:h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      unoptimized
                      sizes="300px"
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <p className="mb-3 inline-flex rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold uppercase text-orange-300">
                      {event.status}
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      {event.title}
                    </h3>

                    {event.date && (
                      <p className="mt-3 text-sm text-orange-300">
                        {event.date}
                      </p>
                    )}

                    {event.location && (
                      <p className="mt-1 text-sm text-zinc-300">
                        {event.location}
                      </p>
                    )}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#join"
            className="rounded-full border border-orange-500 px-6 py-3 font-bold text-orange-300 transition hover:bg-orange-500 hover:text-black"
          >
            Plan an Experience With Us
          </a>
        </div>
      </div>
    </section>
  );
}