import { experienceData } from "../content/experiences";
import DragScroll from "./DragScroll";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function ExperiencesSection({ t }: { t: any }) {
  return (
    <section
      id="experiences"
      className="scroll-mt-40 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-10 md:py-14"
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

        <div className="mx-auto mt-10 grid w-full max-w-4xl gap-4 sm:grid-cols-2">
          <a
            href="#join"
            className="inline-flex min-h-16 w-full items-center justify-center rounded-full border border-orange-500 px-10 py-5 text-lg font-black text-orange-300 transition hover:scale-105 hover:bg-orange-500 hover:text-black"          >
            Book an Experience
          </a>

          <a
            href="#events"
            className="inline-flex min-h-16 w-full items-center justify-center rounded-full border border-orange-500 px-10 py-5 text-lg font-black text-orange-300 transition hover:scale-105 hover:bg-orange-500 hover:text-black"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
}