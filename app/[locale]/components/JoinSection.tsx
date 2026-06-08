import { type Translation } from "../content";
import SocialIcons from "./SocialIcons";

export default function JoinSection({ t }: { t: Translation }) {
  return (
    <section
      id="join"
      className="scroll-mt-40 bg-black px-4 py-12 text-white md:px-6 md:py-16"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-orange-500/30 bg-gradient-to-br from-orange-500/20 via-zinc-950 to-black px-6 py-12 text-center md:px-10">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
          {t.labels.join}
        </p>

        <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
          {t.sectionTitles.join}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-300">
          {t.join.text}
        </p>

        <div className="mt-8 flex justify-center">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}