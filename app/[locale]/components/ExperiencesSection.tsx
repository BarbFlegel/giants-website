import { experienceData } from "../content/experiences";
import type { Locale } from "../content";
import DragScroll from "./DragScroll";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function ExperiencesSection({
  locale,
  t,
}: {
  locale: Locale;
  t: any;
}) {
  return (
    <section
      id="experiences"
      className="scroll-mt-40 overflow-hidden bg-black px-6 py-12 text-white md:py-16"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <FadeUp>
          <SectionHeader
            label={t.labels.experiences}
            title={t.sectionTitles.experiences}
            description={`${t.experiences.intro1} ${t.experiences.intro2}`}
          />
        </FadeUp>

        <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 md:hidden">
          <span>{t.sliderHint.swipe}</span>
          <span>{t.sliderHint.drag}</span>
        </div>

        <DragScroll className="mt-10 pb-8">
          <div className="flex gap-6 pb-2">
            {experienceData.map((experience) => (
              <div
                key={experience.title}
                className="min-w-[78%] sm:min-w-[55%] lg:min-w-[360px]"
              >
                <ExperienceCard
                  item={experience}
                  labels={{
                    includes: t.experiences.includes,
                    packages: t.experiences.packages,
                    featured: t.experiences.featured,
                    discoverMore: t.experiences.discoverMore,
                  }}
                  ctaHref={`/${locale}/contact`}
                />
              </div>
            ))}

            <div className="min-w-[78%] sm:min-w-[55%] lg:min-w-[360px]">
              <article className="card-coming-soon">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">
                    {t.experiences.comingSoon.label}
                  </p>

                  <h3 className="mt-4 text-2xl font-black text-white">
                    {t.experiences.comingSoon.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-300">
                    {t.experiences.comingSoon.text}
                  </p>
                </div>

                <a
                  href={`/${locale}/contact`}
                  className="btn-secondary btn-small mt-6"
                >
                  {t.experiences.comingSoon.cta}
                </a>
              </article>
            </div>
          </div>
        </DragScroll>
      </div>
    </section>
  );
}