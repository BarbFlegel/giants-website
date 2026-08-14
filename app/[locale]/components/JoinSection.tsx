import ButtonLink from "./ButtonLink";

import type {
  Locale,
  Translation,
} from "../content";

type JoinSectionProps = {
  locale: Locale;
  t: Translation;
  compact?: boolean;
};

export default function JoinSection({
  locale,
  t,
}: JoinSectionProps) {
  return (
    <section className="giants-join">
      <div className="giants-join-inner">
        <p className="giants-eyebrow">
          Ready to connect?
        </p>

        <h2 className="giants-join-title">
          {t.sectionTitles.join}
        </h2>

        <p className="giants-join-copy">
          {t.join.text}
        </p>

        <div className="giants-join-actions">
          <ButtonLink
            href={`/${locale}/contact`}
            variant="primary"
          >
            {t.mobileBar.book} →
          </ButtonLink>

          <ButtonLink
            href={`/${locale}/events`}
            variant="secondary"
          >
            {t.nav.events}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}