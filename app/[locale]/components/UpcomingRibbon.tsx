"use client";

import Image from "next/image";
import { useState } from "react";
import type { Translation } from "../content/types";

export default function UpcomingRibbon({ t }: { t?: Translation }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="sticky top-[81px] z-40 w-full border-y border-orange-500/30 bg-orange-950/80 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.24em] text-orange-100 backdrop-blur transition hover:bg-orange-900 md:top-[73px]"
      >
        🔥 UPCOMING GIANTS BIRTHDAY EXPERIENCE • 20 JUNE 2026 • ANTWERP • TAP
        TO VIEW
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close poster"
            className="absolute right-5 top-5 rounded-full bg-orange-500 px-5 py-3 text-2xl font-black text-black"
          >
            ×
          </button>

          <div className="relative h-[90vh] w-full max-w-4xl">
            <Image
              src="/images/luke-birthday-experience.jpg"
              alt="GIANTS Birthday Experience poster"
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}