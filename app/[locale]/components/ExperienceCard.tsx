import { ArrowRight } from "lucide-react";

export default function ExperienceCard({
  item,
  labels,
  className = "",
  ctaHref = "#join",
}: {
  item: any;
  labels: {
    includes: string;
    packages: string;
  };
  className?: string;
  ctaHref?: string;
}) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] ${className}`}
    >
      {item.featured && (
        <div className="bg-orange-500 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.3em] text-black">
          Upcoming Experience
        </div>
      )}

      <div className="flex h-full flex-col p-5 md:p-6">
        {item.tags && item.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {item.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-xl font-black leading-tight text-white md:text-2xl">
          {item.title}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-zinc-300">
          {item.description}
        </p>

        {item.includes && item.includes.length > 0 && (
          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
              {labels.includes}
            </p>

            <ul className="mt-3 space-y-3 text-sm text-zinc-300">
              {item.includes.map((includeItem: string) => (
                <li key={includeItem} className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                  <span>{includeItem}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.packages && item.packages.length > 0 && (
          <div className="mt-6 hidden md:block">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
              {labels.packages}
            </p>

            <ul className="mt-3 space-y-3 text-sm text-zinc-300">
              {item.packages.map((packageItem: string) => (
                <li key={packageItem} className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                  <span>{packageItem}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-8">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-5 py-3 text-sm font-bold text-orange-300 transition hover:bg-orange-500 hover:text-black"
          >
            Discover More
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}