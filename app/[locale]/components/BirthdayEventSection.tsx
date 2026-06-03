import Image from "next/image";
import FadeUp from "./FadeUp";
import type { Locale } from "../content/types";

const tags = ["Movement", "Connection", "Community", "Birthday Experience"];

export default function BirthdayEventSection({ locale }: { locale: Locale }) {  return (
    <section id="events" className="bg-black px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
              Upcoming Event
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              GIANTS Birthday Experience
            </h2>
          </div>
        </FadeUp>

        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <FadeUp>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">
              <div className="relative h-[260px] w-full bg-black sm:h-[380px] md:h-[520px]">
                <Image
                  src="/images/birthday-poster.jpg"
                  alt="GIANTS Birthday Experience poster"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <p className="text-orange-300 font-semibold">
                14 June • Merksem • Sport, games & community energy
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase">
                A celebration of movement, connection and community impact.
              </h3>

              <p className="mt-4 text-white/70">
                Join GIANTS for a birthday experience built around movement, team games, basketball-inspired challenges, connection and shared community energy.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`/${locale}/contact`}
                  className="rounded-full bg-orange-500 px-6 py-3 font-bold text-black"
                >
                  Join the Event
                </a>

                <a
                  href="#gallery"
                  className="rounded-full border border-white/20 px-6 py-3 font-bold text-white"
                >
                  View Community Moments
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}