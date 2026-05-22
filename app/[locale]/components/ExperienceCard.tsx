import { type Experience } from "../content";
import FadeUp from "./FadeUp";

export default function ExperienceCard({ item, labels, className = "" }: { item: Experience; labels: { includes: string; packages: string }; className?: string }) {
  return (
    <FadeUp className={className}>
      <article className="relative flex h-full flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">
        {item.featured && <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black">Featured</span>}
        <div>
          <h3 className="pr-24 text-xl font-semibold text-orange-300">
            {item.title}
          </h3>
          <p className="mt-4 leading-7 text-zinc-300">
            {item.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) =>
              <span key={tag} className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold text-orange-300">
                {tag}
              </span>)}
          </div>
          <div className="mt-6">
            <p className="font-semibold text-white">
              {labels.includes}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {item.includes.map((include) =>
                <li key={include}>
                  • {include}
                </li>)}
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-2xl bg-black/50 p-4">
          <p className="font-semibold text-white">
            {labels.packages}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {item.packages.map((package) =>
              <li key={package}>
                {package}
              </li>)}
          </ul>
        </div>
      </article>
    </FadeUp>
  );
}
