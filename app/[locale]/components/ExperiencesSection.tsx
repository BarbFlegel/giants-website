import { experienceData } from "../content/experiences";
import DragScroll from "./DragScroll";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function ExperiencesSection({ t }: { t: any }) {
  return (
    <section
      id="experiences"
      className="scroll-mt-40 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-16 md:py-20"
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
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#join"
            className="rounded-full bg-orange-500 px-6 py-3 font-bold text-black transition hover:scale-105"
          >
            Book an Experience
          </a>

          <a
            href="#events"
            className="rounded-full border border-orange-500 px-6 py-3 font-bold text-orange-300 transition hover:bg-orange-500 hover:text-black"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
}