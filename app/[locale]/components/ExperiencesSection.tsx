import { experienceData } from "../content/experiences";
import DragScroll from "./DragScroll";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";
import type { Locale } from "../content";

export default function ExperiencesSection({
  locale,
  t,
}: {
  locale: Locale;
  t: any;
}) {  return (
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
                className="min-w-[78%] sm:min-w-[55%] lg:min-w-[360px]"              >
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

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a
            href={`/${locale}/contact`}
            className="flex min-h-[64px] w-full items-center justify-center rounded-full bg-orange-500 px-8 text-lg font-black text-black transition hover:scale-[1.02] hover:bg-orange-400"
          >
            Book an Experience
          </a>

          <a
            href="#events"
            className="flex min-h-[64px] w-full items-center justify-center rounded-full border border-orange-500 bg-orange-500/10 px-8 text-lg font-black text-orange-300 transition hover:scale-[1.02] hover:bg-orange-500 hover:text-black">
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
}