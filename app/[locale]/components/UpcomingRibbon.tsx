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
        className="sticky top-[81px] z-40 w-full border-y border-orange-500/30 bg-orange-950/80 px-3 py-2 text-center text-[10px] font-black uppercase tracking-[0.2em] text-orange-100 backdrop-blur md:top-[73px] md:text-xs"
      >
        🔥 Upcoming GIANTS Birthday Experience • 20 June 2026 • Antwerp • Tap to view
      </button>

      {open && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black p-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close poster"
            className="absolute right-5 top-5 z-10 rounded-full bg-orange-500 px-5 py-3 text-2xl font-black text-black"
          >
            ×
          </button>

          <img
            src="/images/luke-birthday-experience.jpg"
            alt="Luke Slam Dunk Birthday poster"
            className="max-h-[92vh] max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
}