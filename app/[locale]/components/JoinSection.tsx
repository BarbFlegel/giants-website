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
      className={`bg-black px-6 text-white ${
        compact ? "py-12" : "py-16"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="rounded-3xl border border-orange-500/25 bg-gradient-to-br from-orange-500/15 via-zinc-950 to-black p-8 text-center md:p-12">
            <SectionHeader
              label={t.labels.join}
              title={t.sectionTitles.join}
              description={t.join.text}
            />

            <div className="mt-8">
              <SocialIcons />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}