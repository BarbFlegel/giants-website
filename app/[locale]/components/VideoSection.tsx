import { type Translation } from "../content";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function VideoSection({ t }: { t: Translation }) {
  return (
    <section className="border-t border-zinc-900 bg-black px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeUp><SectionHeader label={t.labels.energy} title={t.sectionTitles.energy} description="Movement, games, rhythm, teamwork, and the kind of atmosphere that makes people come back." /></FadeUp>
        <div className="mt-10 grid gap-6 md:grid-cols-2">{[{ src: "/videos/training.mp4", poster: "/images/gallery-basketball-training.jpg" }, { src: "/videos/community.mp4", poster: "/images/gallery-child-ball.jpg" }].map((video) => <FadeUp key={video.src}><video autoPlay muted loop playsInline poster={video.poster} className="h-[360px] w-full rounded-3xl border border-zinc-800 object-cover object-top shadow-[0_0_40px_rgba(249,115,22,0.12)] md:h-[420px]"><source src={video.src} type="video/mp4" /></video></FadeUp>)}</div>
      </div>
    </section>
  );
}
