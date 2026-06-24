import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import type { Translation } from "../content";

export default function Footer({ t }: { t: Translation }) {
  return (
    <footer className="border-t border-zinc-800 bg-black px-4 py-10 text-white md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <Link href="/en" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-black">
            <Image
              src="/images/giants-logo.png"
              alt="GIANTS logo"
              fill
              unoptimized
              sizes="48px"
              className="scale-150 object-contain"
            />
          </div>

          <div>
            <p className="text-2xl font-black uppercase tracking-[0.22em]">
              {t.brand.name}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
              {t.brand.tagline}
            </p>
          </div>
        </Link>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <SocialIcons />

          <p className="text-sm text-zinc-500">
            © 2026 GIANTS
          </p>
        </div>
      </div>
    </footer>
  );
}