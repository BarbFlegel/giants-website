import { ArrowRight } from "lucide-react";

export default function ExperienceCard({
  item,
  labels,
  ctaHref = "#join",
}: {
  item: any;
  labels: {
    includes: string;
    packages: string;
    featured: string;
    discoverMore: string;
  };
  className?: string;
  ctaHref?: string;
}) {
  return (
    <article className="flex h-full min-h-[520px] flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-left">
      {item.featured && (
        <div className="-mx-6 -mt-6 mb-5 rounded-t-3xl bg-orange-500 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.3em] text-black">
          {labels.featured}
        </div>
      )}

      <div className="flex h-full flex-col">
        {item.tags?.length > 0 && (
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

        <p className="mt-4 leading-7 text-zinc-300">{item.description}</p>

        {item.includes?.length > 0 && (
          <div className="mt-5">
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

        {item.packages?.length > 0 && (
          <div className="mt-5 hidden md:block">
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

        <div className="mt-auto pt-6">
          <a href={ctaHref} className="btn-secondary btn-small inline-flex gap-2">
            {labels.discoverMore}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}