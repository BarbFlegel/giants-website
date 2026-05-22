import { communityPrograms } from "../content/community";
import DragScroll from "./DragScroll";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function CommunitySection({ t }: { t: any }) {
  return (
    <section
      id="community"
      className="scroll-mt-40 overflow-hidden bg-black px-6 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label={t.labels.community}
            title={t.sectionTitles.community}
            description={t.community.introText}
          />
        </FadeUp>

        <FadeUp>
          <div className="mt-8 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-5 text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              Community access
            </p>

            <p className="mt-3 leading-7 text-zinc-300">
              Community sport events are free. Social impact initiatives can be
              offered through partnerships, availability, and community support.
            </p>
          </div>
        </FadeUp>

        <DragScroll className="mt-10 pb-4">
          <div className="flex gap-6">
            {communityPrograms.map((program) => (
              <div
                key={program.title}
                className="min-w-[85%] sm:min-w-[55%] lg:min-w-[360px]"
              >
                <ExperienceCard
                  item={program}
                  labels={{
                    includes: t.experiences.includes,
                    packages: t.experiences.packages,
                  }}
                />
              </div>
            ))}
          </div>
        </DragScroll>

        <div className="mt-10 flex justify-center">
          <a
            href="#join"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-orange-500 px-8 py-4 text-base font-black text-orange-300 transition hover:scale-105 hover:bg-orange-500 hover:text-black sm:w-auto sm:min-w-[240px]"
          >
            Partner With GIANTS
          </a>
        </div>
      </div>
    </section>
  );
}