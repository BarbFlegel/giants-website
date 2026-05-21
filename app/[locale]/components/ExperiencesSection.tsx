import { experienceData, type Translation } from "../content";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function ExperiencesSection({ t }: { t: Translation }) {
  return (
    <section id="experiences" className="scroll-mt-40 bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl text-center md:text-left">
        <FadeUp>
          <SectionHeader label={t.labels.experiences} title={t.sectionTitles.experiences} />
          <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-zinc-300 md:mx-0">{t.experiences.intro1}<br className="hidden md:block" />{t.experiences.intro2}</p>
          <div className="mx-auto mt-6 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-5 text-orange-100 md:mx-0"><p className="font-semibold text-orange-300">{t.experiences.accessTitle}</p><p className="mt-2 leading-7 text-zinc-300">{t.experiences.accessText}</p></div>
        </FadeUp>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{experienceData.map((item) => <ExperienceCard key={item.title} item={item} labels={{ includes: t.experiences.includes, offer: t.experiences.offer }} />)}</div>
        <FadeUp><div className="mt-12 rounded-3xl border border-orange-500/30 bg-orange-500 p-8 text-center text-black shadow-[0_0_35px_rgba(249,115,22,0.25)]"><h3 className="text-2xl font-bold">{t.experiences.mottoTitle}</h3><p className="mx-auto mt-3 max-w-2xl leading-8">{t.experiences.mottoText}</p></div></FadeUp>
      </div>
    </section>
  );
}
