import type { Translation } from "../content/types";
import FadeUp from "./FadeUp";

export default function VisionSection({ t }: { t: Translation }) {
  return (
    <section id="vision" className="section-spacing">
      <div className="section-shell">
        <FadeUp>
          <div className="border-b border-orange-500/20 pb-10">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
              {t.vision.label}
            </p>

            <h2 className="mt-4 max-w-5xl text-3xl font-black uppercase leading-tight md:text-4xl lg:text-[46px]">
              {t.vision.title}
            </h2>

            <p className="mt-5 max-w-5xl text-base leading-8 text-zinc-300">
              {t.vision.text}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}