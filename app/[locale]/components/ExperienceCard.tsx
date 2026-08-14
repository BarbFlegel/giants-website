import Link from "next/link";
import type { Experience } from "../content";

type ExperienceCardProps = {
  item: Experience;
  labels?: {
    includes?: string;
    packages?: string;
    featured?: string;
    discoverMore?: string;
  };
  ctaHref?: string;
};

export default function ExperienceCard({
  item,
  labels,
  ctaHref,
}: ExperienceCardProps) {
  return (
    <article
      className={`giants-content-card ${
        item.featured ? "giants-content-card-featured" : ""
      }`}
    >
      {item.tags.length > 0 && (
        <div className="giants-card-tags">
          {item.tags.map((tag) => (
            <span key={tag} className="giants-card-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {item.featured && labels?.featured && (
        <p className="giants-card-label">{labels.featured}</p>
      )}

      <h2 className="giants-content-card-title">{item.title}</h2>

      <p className="giants-content-card-description">{item.description}</p>

      {item.includes.length > 0 && (
        <>
          <p className="giants-card-subtitle">
            {labels?.includes ?? "Includes"}
          </p>
          <ul className="giants-card-list">
            {item.includes.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </>
      )}

      {item.packages.length > 0 && (
        <>
          <p className="giants-card-subtitle">
            {labels?.packages ?? "Packages"}
          </p>
          <ul className="giants-card-list">
            {item.packages.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </>
      )}

      {ctaHref && (
        <div className="giants-moment-action">
          <Link
            href={ctaHref}
            className="giants-button giants-button-tertiary"
          >
            {labels?.discoverMore ?? "Discover more"}
          </Link>
        </div>
      )}
    </article>
  );
}
