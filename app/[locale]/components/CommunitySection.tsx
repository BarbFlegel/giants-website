import { communityPrograms, type Translation } from "../content";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function CommunitySection({ t }: { t: Translation }) {
  return (
    <section id="community" className="scroll-mt-40 border-t border-zinc-900 bg-black px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-10 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-5 text-center md:p-6 md:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
              {t.community.introTitle}
            </p>
            <p className="mx-auto mt-3 max-w-5xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8 md:mx-0">
              {t.community.introText}
            </p>
          </div><SectionHeader label={t.labels.community} title={t.sectionTitles.community} />
        </FadeUp>
        <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-3">
          {communityPrograms.map((item) =>
            <ExperienceCard key={item.title} item={item} labels={{ includes: t.experiences.includes, offer: t.experiences.offer }} />)}
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 lg:hidden">
          {communityPrograms.map((item) =>
            <ExperienceCard key={item.title} item={item} className="h-full"
              labels={{ includes: t.experiences.includes, offer: t.experiences.offer }} />)}
        </div>
      </div>
    </section>
  );
}
