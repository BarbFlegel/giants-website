import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

export default function VideoSection({ t }: { t: any }) {
  return (
    <section className="bg-black px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <SectionHeader
            label="Energy"
            title="Experience GIANTS in motion"
            description="Movement, games, rhythm, teamwork, and the kind of atmosphere that makes people come back."
          />
        </FadeUp>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FadeUp>
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-[320px] w-full rounded-3xl border border-zinc-800 object-cover md:h-[420px]"
            >
              <source src="/videos/training.mp4" type="video/mp4" />
            </video>
          </FadeUp>

          <FadeUp>
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-[320px] w-full rounded-3xl border border-zinc-800 object-cover md:h-[420px]"
            >
              <source src="/videos/community.mp4" type="video/mp4" />
            </video>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}