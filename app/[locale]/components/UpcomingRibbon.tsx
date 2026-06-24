"use client";

import Image from "next/image";
import { useState } from "react";

export default function UpcomingRibbon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-0 right-0 top-[72px] z-[60] border-y border-orange-500/30 bg-orange-950/95 px-3 py-2 text-center text-[10px] font-black uppercase tracking-[0.14em] text-orange-100 backdrop-blur md:top-[68px] md:text-xs"
      >
        <span className="md:hidden">🔥 Birth of Courage • 9 July • Tap</span>
        <span className="hidden md:inline">
          🔥 The Birth of Courage • 9 July 2026 • Josaphat Park • Tap to View
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close poster"
            className="absolute right-5 top-5 z-10 rounded-full bg-orange-500 px-5 py-3 text-2xl font-black text-black"
          >
            ×
          </button>

          <div className="relative h-[90vh] w-full max-w-4xl">
            <Image
              src="/images/birth-of-courage-july.jpg"
              alt="The Birth of Courage poster"
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