import type { Locale } from "../content";
import { communityPrograms } from "../content/community";
import DragScroll from "./DragScroll";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function CommunitySection({
  locale,
  t,
}: {
  locale: Locale;
  t: any;
}) {
  return (
    <section
      id="community"
      className="scroll-mt-40 overflow-hidden bg-black px-6 py-10 md:py-14"
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
          <div className="mt-6 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-5 text-left">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              {t.experiences.accessTitle}
            </p>

            <p className="mt-3 leading-7 text-zinc-300">
              {t.experiences.accessText}
            </p>
          </div>
        </FadeUp>

        <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 md:hidden">
          <span>{t.sliderHint.swipe}</span>
          <span>{t.sliderHint.drag}</span>
        </div>

        <DragScroll className="mt-6 pb-4">
          <div className="flex gap-6">
            {communityPrograms.map((program) => (
              <div
                key={program.title}
                className="min-w-[78%] sm:min-w-[55%] lg:min-w-[360px]"
              >
                <ExperienceCard
                  item={program}
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
                    {t.community.comingSoon.label}
                  </p>

                  <h3 className="mt-4 text-2xl font-black text-white">
                    {t.community.comingSoon.title}
                  </h3>

                  <ul className="mt-4 space-y-3 text-zinc-300">
                    {t.community.comingSoon.items?.map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/${locale}/contact`}
                  className="btn-secondary btn-small mt-6"
                >
                  {t.community.comingSoon.cta}
                </a>
              </article>
            </div>
          </div>
        </DragScroll>
      </div>
    </section>
  );
}