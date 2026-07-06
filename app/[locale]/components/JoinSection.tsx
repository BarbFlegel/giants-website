import Link from "next/link";
import { type Translation } from "../content";

export default function JoinSection({
  t,
  compact = false,
}: {
  t: Translation;
  compact?: boolean;
}) {
  return (
    <section
      id="join"
      className={`bg-black px-4 text-white md:px-6 ${
        compact ? "py-8 md:py-10" : "py-10 md:py-14"
      }`}
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400">
          Ready to join?
        </p>

        <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
          Build with GIANTS
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          Book an experience, join a community moment, or collaborate with GIANTS.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/en/contact" className="btn-primary">
            Book an Experience
          </Link>

          <Link href="/en/events" className="btn-secondary">
            See Events
          </Link>
        </div>
      </div>
    </section>
  );
}