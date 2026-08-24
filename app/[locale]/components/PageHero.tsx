import type { CSSProperties, ReactNode } from "react";

type PageHeroImage = "community" | "premium" | "action";

const backgroundImages: Record<PageHeroImage, string> = {
  community: "/images/hero-giants-community.jpg",
  premium: "/images/hero-giants-premium.jpg",
  action: "/images/hero-giants-action.jpg",
};

type PageHeroProps = {
  label: string;
  title: string;
  text: string;
  image?: PageHeroImage;
  children?: ReactNode;
};

export default function PageHero({
  label,
  title,
  text,
  image = "community",
  children,
}: PageHeroProps) {
  const backgroundStyle: CSSProperties = {
    backgroundImage: `url("${backgroundImages[image]}")`,
  };

  return (
    <section className="relative overflow-hidden bg-black px-4 pb-10 pt-[112px] text-white md:px-6 md:pb-14 md:pt-[120px]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={backgroundStyle}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
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