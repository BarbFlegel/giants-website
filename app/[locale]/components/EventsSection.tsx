import Image from "next/image";
import { eventsData, type Translation } from "../content";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function EventsSection({ t }: { t: Translation }) {
  const events = eventsData.map((event) => ({ ...event, title: t.events[event.titleKey], date: event.dateKey ? t.events[event.dateKey] : undefined, time: event.timeKey ? t.events[event.timeKey] : undefined, location: event.locationKey ? t.events[event.locationKey] : undefined, status: t.events[event.statusKey] }));
  return (
    <section id="events" className="scroll-mt-40 mx-auto max-w-6xl px-6 py-16 text-center md:py-20 md:text-left">
      <FadeUp><SectionHeader label={t.labels.events} title={t.sectionTitles.events} /></FadeUp>
      <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-2">{events.map((event) => <EventCard key={event.title} event={event} />)}</div>
      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 lg:hidden">{events.map((event) => <EventCard key={event.title} event={event} className="min-w-[300px] snap-center sm:min-w-[430px]" />)}</div>
    </section>
  );
}

function EventCard({ event, className = "" }: { event: { title: string; image: string; date?: string; time?: string; location?: string; status: string; type?: "birthday" | "standard" }; className?: string }) {
  return (
    <FadeUp className={className}>
      <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 text-left transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">
        <div className={`relative w-full overflow-hidden bg-black ${event.type === "birthday" ? "h-[300px] sm:h-[430px] lg:h-[560px]" : "h-[260px] sm:h-[340px] lg:h-[420px]"}`}>
          <Image src={event.image} alt={event.title} fill unoptimized sizes="(max-width: 768px) 90vw, 520px" className="object-cover object-top" />
        </div>
        <div className="p-5"><p className="mb-3 inline-flex rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-300">{event.status}</p><h3 className="text-xl font-semibold">{event.title}</h3>{event.date && <div className="mt-3 space-y-1 text-sm text-zinc-300"><p className="text-orange-300">{event.date}{event.time ? ` • ${event.time}` : ""}</p>{event.location && <p>{event.location}</p>}</div>}</div>
      </article>
    </FadeUp>
  );
}
