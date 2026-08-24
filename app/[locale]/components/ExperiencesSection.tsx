import { experienceData } from "../content/experiences";
import type { Locale, Translation } from "../content/types";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencesSection({
  locale,
  t,
}: {
  locale: Locale;
  t: Translation;
}) {
  return (
    <section id="experiences" className="giants-content-section">
      <div className="giants-content-container">
        <div className="giants-content-intro">
          <p className="giants-eyebrow">{t.labels.experiences}</p>
          <h1 className="giants-section-title">
            {t.sectionTitles.experiences}
          </h1>
          <p className="giants-content-intro-text">{t.experiences.intro1}</p>
        </div>

        <div className="giants-access-panel">
          <p className="giants-access-title">{t.experiences.accessTitle}</p>
          <p className="giants-access-copy">{t.experiences.accessText}</p>
        </div>

        <div className="giants-card-grid">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.title}
              item={experience}
              labels={{
                includes: t.experiences.includes,
                packages: t.experiences.packages,
                featured: t.experiences.featured,
                discoverMore: t.experiences.discoverMore,
              }}
              ctaHref={`/${locale}/contact`}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
