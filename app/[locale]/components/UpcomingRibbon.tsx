"use client";

import Image from "next/image";
import { useState } from "react";

export default function UpcomingRibbon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="sticky top-[88px] z-40 w-full border-y border-orange-500/30 bg-orange-950/95 px-3 py-2 text-center text-[10px] font-black uppercase tracking-[0.18em] text-orange-100 backdrop-blur md:top-[81px] md:text-xs"
      >
        🔥 UPCOMING GIANTS BIRTHDAY EXPERIENCE • 20 JUNE 2026 • ANTWERP • TAP TO VIEW
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 rounded-full bg-orange-500 px-5 py-3 text-2xl font-black text-black"
          >
            ×
          </button>

          <div className="relative h-[90vh] w-full max-w-4xl">
            <Image
              src="/images/luke-birthday-experience.jpg"
              alt="Luke Birthday"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}