import type { Translation } from "../content/types";
import FadeUp from "./FadeUp";

export default function VisionSection({
  t,
  compact = false,
}: {
  t: Translation;
  compact?: boolean;
}) {
  return (
    <section
      id="vision"
      className={`bg-black px-6 text-white ${
        compact ? "py-14" : "min-h-[calc(100vh-96px)] py-20"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="border-b border-orange-500/20 pb-10">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
              {t.vision.label}
            </p>

            <h1
              className={`mt-4 max-w-5xl font-black uppercase leading-tight ${
                compact
                  ? "text-3xl md:text-5xl"
                  : "text-4xl md:text-6xl"
              }`}
            >
              {t.vision.title}
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-300 md:text-lg">
              {t.vision.text}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}