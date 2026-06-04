import type { Translation } from "../content/types";

export default function UpcomingRibbon({ t }: { t: Translation }) {
  return (
    <a
      href="#events"
      className="sticky top-[82px] z-40 block border-y border-orange-500/30 bg-orange-950/70 px-4 py-2.5 text-center text-[0.7rem] font-black uppercase tracking-[0.22em] text-orange-100 backdrop-blur-md transition hover:bg-orange-900/80"
    >
      {t.bar}
    </a>
  );
}