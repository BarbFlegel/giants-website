import { communityPrograms } from "../content/community";
import DragScroll from "./DragScroll";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function CommunitySection({ t }: { t: any }) {
  return (
    <section
      id="community"
      className="scroll-mt-40 overflow-hidden bg-black px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label={t.labels.community}
            title={t.sectionTitles.community}
            description={t.community.introText}
          />
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
                    offer: t.experiences.offer,
                  }}
                />
              </div>
            ))}
          </div>
        </DragScroll>
      </div>
    </section>
  );
}