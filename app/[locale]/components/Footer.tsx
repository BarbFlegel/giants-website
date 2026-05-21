import Image from "next/image";
import { type Translation } from "../content";

export default function Footer({ t }: { t: Translation }) {
  return (
    <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-white"><div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left"><div className="flex items-center gap-4"><div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-black sm:h-16 sm:w-16"><Image src="/images/giants-logo.png" alt="GIANTS logo" fill unoptimized sizes="64px" className="object-contain scale-150" /></div><div><p className="text-xl font-bold tracking-[0.18em] sm:text-2xl">GIANTS</p><p className="text-[10px] uppercase tracking-[0.18em] text-orange-300 sm:text-xs">Movement · Community · Wellbeing</p></div></div><p className="text-sm text-zinc-400">{t.footer.copyright}</p></div></footer>
  );
}
