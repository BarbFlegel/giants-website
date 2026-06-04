import Link from "next/link";
import { type Translation } from "../content";
import FadeUp from "./FadeUp";
import SocialIcons from "./SocialIcons";

export default function JoinSection({ t }: { t: Translation }) {
  return (
    <section
      id="join"
      className="scroll-mt-52 bg-black px-6 py-10 text-white md:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/30 bg-gradient-to-br from-orange-500/20 via-zinc-950 to-black px-6 py-10 text-center shadow-[0_0_45px_rgba(249,115,22,0.12)] md:px-12 md:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_55%)]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-300 md:text-sm">
                {t.labels.join}
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white md:text-5xl">
                {t.sectionTitles.join}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                {t.join.text}
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/en/contact" className="btn-primary w-full sm:w-auto">
                  Book an Experience
                </Link>

                <a
                  href="https://wa.me/32465545947?text=Hi%20GIANTS,%20I'd%20like%20to%20learn%20more%20about%20your%20experiences."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto"
                >
                  WhatsApp GIANTS
                </a>
              </div>

              <div className="mt-7 flex justify-center">
                <SocialIcons />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}