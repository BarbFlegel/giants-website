import FadeUp from "./FadeUp";

const stats = [
  { value: "Movement", label: "Physical wellbeing" },
  { value: "Connection", label: "Community belonging" },
  { value: "Impact", label: "Social opportunity" },
];

export default function CommunityStats() {
  return (
    <section className="bg-zinc-950 px-6 py-12 text-white">
  <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <FadeUp key={stat.value}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <p className="text-3xl font-black text-orange-400 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wide text-white/60">
                {stat.label}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}