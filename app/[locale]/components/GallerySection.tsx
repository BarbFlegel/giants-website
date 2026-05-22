import Image from "next/image";
import { galleryItems } from "../content/gallery";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function GallerySection({ t }: { t: any }) {
  return (
    <section
      id="gallery"
      className="scroll-mt-40 bg-zinc-950 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label={t.labels.gallery}
            title={t.sectionTitles.gallery}
            description={t.gallery.text}
          />
        </FadeUp>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <FadeUp key={`${item.image}-${index}`}>
              <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-black transition duration-500 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">

                <div className="relative h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[380px]">
                  <Image
                    src={item.image}
                    alt={`${t.sectionTitles.gallery} ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-5">
                    <h3 className="text-lg font-semibold text-white">
                      {index === 0
                        ? "COMMUNITY NIGHT"
                        : index === 1
                        ? "YOUTH ENERGY"
                        : index === 2
                        ? "TEAM SPIRIT"
                        : "GAME TIME"}
                    </h3>
                  </div>
                </div>

              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}