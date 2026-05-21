import Image from "next/image";
import { galleryItems, type Translation } from "../content";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function GallerySection({ t }: { t: Translation }) {
  return (
    <section id="gallery" className="scroll-mt-40 bg-zinc-950 px-6 py-16 text-center md:py-20 md:text-left">
      <div className="mx-auto max-w-6xl">
        <FadeUp><SectionHeader label={t.labels.gallery} title={t.sectionTitles.gallery} description={t.gallery.text} /></FadeUp>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {galleryItems.map((item, index) => <FadeUp key={`${item.titleKey}-${index}`}><article className="overflow-hidden rounded-3xl border border-zinc-800 bg-black text-left transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]"><div className="relative h-[300px] w-full sm:h-[360px]">{item.type === "video" && item.video ? <video autoPlay muted loop playsInline poster={item.image} className="h-full w-full object-cover object-top"><source src={item.video} type="video/mp4" /></video> : <Image src={item.image} alt={t.gallery[item.titleKey]} fill sizes="(max-width: 768px) 90vw, 50vw" className="object-cover object-top" />}</div><div className="p-5"><h3 className="text-lg font-semibold text-white">{t.gallery[item.titleKey]}</h3></div></article></FadeUp>)}
        </div>
      </div>
    </section>
  );
}
