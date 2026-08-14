import Link from "next/link";
import type { Locale, Translation } from "../content/types";
import { communityPrograms } from "../content/community";
import ExperienceCard from "./ExperienceCard";

export default function CommunitySection({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  return (
    <section id="community" className="giants-content-section">
      <div className="giants-content-container">
        <div className="giants-content-intro">
          <p className="giants-eyebrow">{t.labels.community}</p>
          <h1 className="giants-section-title">
            {t.sectionTitles.community}
          </h1>
          <p className="giants-content-intro-text">{t.community.introText}</p>
        </div>

        <div className="giants-access-panel">
          <p className="giants-access-title">{t.experiences.accessTitle}</p>
          <p className="giants-access-copy">{t.experiences.accessText}</p>
        </div>

        <div className="giants-card-grid">
          {communityPrograms.map((program) => (
            <ExperienceCard
              key={program.title}
              item={program}
              labels={{
                includes: t.experiences.includes,
                packages: t.experiences.packages,
                featured: t.experiences.featured,
                discoverMore: t.experiences.discoverMore,
              }}
              ctaHref={`/${locale}/contact`}
            />
          ))}

          <article className="giants-content-card">
            <p className="giants-card-label">{t.community.comingSoon.label}</p>
            <h2 className="giants-content-card-title">
              {t.community.comingSoon.title}
            </h2>
            <p className="giants-content-card-description">
              {t.community.comingSoon.text}
            </p>
            {t.community.comingSoon.items && (
              <ul className="giants-card-list">
                {t.community.comingSoon.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <div className="giants-moment-action">
              <Link
                href={`/${locale}/contact`}
                className="giants-button giants-button-tertiary"
              >
                {t.community.comingSoon.cta}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
