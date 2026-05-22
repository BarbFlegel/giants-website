import { experienceData } from "../content/experiences";
import DragScroll from "./DragScroll";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function ExperiencesSection({ t }: { t: any }) {
  return (
    <section
      id="experiences"
      className="scroll-mt-40 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label={t.labels.experiences}
            title={t.sectionTitles.experiences}
            description={`${t.experiences.intro1} ${t.experiences.intro2}`}
          />
        </FadeUp>

        <DragScroll className="mt-10 pb-4">
          <div className="flex gap-6">
            {experienceData.map((experience) => (
              <div
                key={experience.title}
                className="min-w-[85%] sm:min-w-[55%] lg:min-w-[360px]"
              >
                <ExperienceCard
                  item={experience}
                  labels={{
                    includes: t.experiences.includes,
                    packages: t.experiences.packages,
                  }}
                />
              </div>
            ))}
          </div>
        </DragScroll>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="#join"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-black text-black transition hover:scale-105 hover:bg-orange-400 sm:w-auto sm:min-w-[240px]"
          >
            Book an Experience
          </a>

          <a
            href="#events"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-orange-500 px-8 py-4 text-base font-black text-orange-300 transition hover:scale-105 hover:bg-orange-500 hover:text-black sm:w-auto sm:min-w-[240px]"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
}