import Link from "next/link";

export default function UpcomingRibbon() {
  return (
    <Link
      href="#events"
      className="block bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-700 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-black hover:opacity-90"
    >
      🔥 Upcoming Birthday Experience • 14 June • Merksem
    </Link>
  );
}