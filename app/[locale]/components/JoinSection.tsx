import { type Translation } from "../content";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";
import SocialIcons from "./SocialIcons";

export default function JoinSection({
  t,
  compact = false,
}: {
  t: Translation;
  compact?: boolean;
}) {
  return (
    <section
      id="join"
      className={`bg-black px-4 text-white md:px-6 ${
        compact ? "py-8 md:py-10" : "py-10 md:py-14"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="rounded-3xl border border-orange-500/25 bg-gradient-to-br from-orange-500/15 via-zinc-950 to-black p-5 text-center md:p-12">
            <div className="hidden md:block">
              <SectionHeader
                label={t.labels.join}
                title={t.sectionTitles.join}
                description={t.join.text}
              />
            </div>

            <div className="flex items-center justify-center md:mt-8">
              <SocialIcons />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}