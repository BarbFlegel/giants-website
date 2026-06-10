"use client";

import { useState } from "react";
import Image from "next/image";
import type { Translation } from "../content/types";

export default function UpcomingRibbon({ t }: { t: Translation }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="sticky top-[81px] z-40 w-full border-y border-orange-500/30 bg-orange-950/70 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.28em] text-orange-100 backdrop-blur md:top-[73px]"
      >
        🔥 Upcoming GIANTS Birthday Experience • 20 June 2026 • Antwerp
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 rounded-full bg-orange-500 px-5 py-3 text-xl font-black text-black"
          >
            ×
          </button>

          <div className="relative h-[90vh] w-full max-w-4xl">
            <Image
              src="/images/luke-slam-dunk-birthday.jpg"
              alt="Luke Slam Dunk Birthday poster"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}