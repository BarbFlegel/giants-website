"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Translation } from "../content";

type JoinSectionProps = {
  t: Translation;
  compact?: boolean;
};

export default function JoinSection({
  t,
  compact = false,
}: JoinSectionProps) {
  return (
    <section
      className={`relative overflow-hidden border-y border-zinc-800 bg-zinc-950 ${
        compact ? "px-4 py-16 md:py-20" : "px-4 py-24"
      }`}
    >
      <div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400">
          Ready to connect?
        </p>

        <h2 className="mt-4 text-4xl font-black uppercase leading-none text-white md:text-6xl">
          {t.sectionTitles.join}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
          {t.join.text}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-sm font-black uppercase tracking-wide text-black shadow-[0_10px_35px_rgba(249,115,22,0.25)] transition hover:-translate-y-0.5 hover:bg-orange-400"
          >
            {t.mobileBar.book}
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/events"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] px-8 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.08]"
          >
            {t.nav.events}
          </Link>
        </div>
      </div>
    </section>
  );
}  