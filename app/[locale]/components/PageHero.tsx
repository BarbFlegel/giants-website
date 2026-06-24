import type { ReactNode } from "react";

export default function PageHero({
  label,
  title,
  text,
  image = "/images/hero-giants-community.jpg",
  children,
}: {
  label: string;
  title: string;
  text: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-12 pt-[130px] text-white md:px-6 md:pb-16 md:pt-[120px]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black" />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">
          {label}
        </p>

        <h1 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
          {text}
        </p>

        {children}
      </div>
    </section>
  );
}