import FadeUp from "./FadeUp";

export default function VisionSection() {
  return (
    <section id="vision" className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            Vision
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase md:text-6xl">
            Building stronger people, stronger communities.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            GIANTS exists to transform lives through movement, connection and
            meaningful opportunity. We envision a future where every person,
            regardless of background or circumstance, has access to experiences,
            support and opportunities that help them thrive physically,
            mentally, socially and economically.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}