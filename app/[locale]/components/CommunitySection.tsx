import Link from "next/link";
import type { Locale, Translation } from "../content/types";
import { impactPillars } from "../content/community";

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

        <div className="giants-card-grid">
          {impactPillars.map((pillar) => (
            <article key={pillar.title} className="giants-content-card">
              <p className="giants-card-label">{pillar.label}</p>
              <h2 className="giants-content-card-title">{pillar.title}</h2>
              <p className="giants-content-card-description">{pillar.description}</p>
              <ul className="giants-card-list">
                {pillar.evidence.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="giants-moment-action">
          <Link href={`/${locale}/contact`} className="giants-button giants-button-primary">
            Become a community partner
          </Link>
        </div>
      </div>
    </section>
  );
}
