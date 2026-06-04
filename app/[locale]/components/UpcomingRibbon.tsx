export default function UpcomingRibbon({ t }: { t: any }) {
  return (
    <a
      href="#events"
      className="sticky top-[88px] z-40 block border-y border-orange-500/30 bg-orange-950/80 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.25em] text-orange-100 backdrop-blur-md"
    >
      {t.bar}
    </a>
  );
}