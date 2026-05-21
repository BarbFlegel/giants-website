import { type Translation } from "../content";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";
import SocialIcons from "./SocialIcons";

export default function JoinSection({ t }: { t: Translation }) {
  return (
    <section id="join" className="scroll-mt-40 bg-gradient-to-b from-orange-500 to-orange-600 px-6 py-14 text-black sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl justify-center"><FadeUp className="flex w-full max-w-3xl flex-col items-center text-center"><SectionHeader label={t.labels.join} title={t.sectionTitles.join} description={t.join.text} dark={false} align="center" /><SocialIcons /></FadeUp></div>
    </section>
  );
}
