import type {
  Locale,
  Translation,
} from "../content";

type VisionSectionProps = {
  locale: Locale;
  t: Translation;
};

export default function VisionSection({
  t,
}: VisionSectionProps) {
  const pillars = [
    {
      number: "01",
      title: "Experience",
      text:
        "Creating moments where sport, movement and community become memorable.",
    },

    {
      number: "02",
      title: "Community",
      text:
        "Building connection, confidence and belonging through shared action.",
    },

    {
      number: "03",
      title: "Growth",
      text:
        "Strengthening body, mindset, discipline and purpose together.",
    },
  ];

  return (
    <section className="giants-content-section">
      <div className="giants-content-container">
        <div className="giants-content-intro">
          <p className="giants-eyebrow">
            {t.vision.label}
          </p>

          <h1 className="giants-page-hero-title">
            {t.vision.title}
          </h1>

          <p className="giants-content-intro-text">
            {t.vision.text}
          </p>
        </div>

        <div className="giants-vision-grid">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="giants-vision-card"
            >
              <span className="giants-vision-number">
                {pillar.number}
              </span>

              <h3>{pillar.title}</h3>

              <p>{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className="giants-vision-statement">
          <p>
            Stronger individuals create stronger
            communities. GIANTS creates the space
            where both can grow.
          </p>
        </div>
      </div>
    </section>
  );
}