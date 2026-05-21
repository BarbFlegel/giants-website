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
          <SectionHeader label={t.labels.events} title={t.sectionTitles.events} />
        </FadeUp>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <FadeUp>
            <article className="overflow-hidden rounded-3xl border border-orange-500/50 bg-zinc-900">
              <div className="relative h-[320px] w-full bg-black sm:h-[420px] lg:h-[560px]">
                <Image
                  src={featured.image}
                  alt={t.events.birthday}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top"
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
              </div>
            </article>
          </FadeUp>

          <div className="grid gap-6">
            {rest.slice(0, 3).map((event) => (
              <FadeUp key={event.title}>
                <article className="grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 md:grid-cols-[180px_1fr]">
                  <div className="relative h-[220px] bg-black md:h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      unoptimized
                      sizes="300px"
                      className="object-cover object-top"
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
      </div>
    </section>
  );
}