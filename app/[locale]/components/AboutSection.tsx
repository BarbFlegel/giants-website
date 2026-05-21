import Image from "next/image";
import { type Translation } from "../content";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function AboutSection({ t }: { t: Translation }) {
  return (
    <section id="about" className="scroll-mt-40 mx-auto grid max-w-6xl gap-10 px-6 py-16 text-center md:grid-cols-2 md:items-center md:py-20 md:text-left">
      <FadeUp><div><SectionHeader label={t.labels.about} title={t.sectionTitles.about} /><p className="mt-6 leading-8 text-zinc-300">{t.about.p1}</p><p className="mt-4 leading-8 text-zinc-300">{t.about.p2}</p><ul className="mt-8 space-y-3 text-zinc-200">{t.about.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul></div></FadeUp>
      <FadeUp delay={0.1}><div className="relative h-[360px] overflow-hidden rounded-3xl border border-zinc-800 md:h-[420px]"><Image src="/images/about-us.jpg" alt="About GIANTS" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" /></div></FadeUp>
    </section>
  );
}
