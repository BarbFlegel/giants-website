import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  communityPrograms,
  experienceData,
  locales,
  type Locale,
  socialLinks,
  translations,
} from "./content";

type EventCard = {
  title: string;
  image: string;
  date?: string;
  time?: string;
  location?: string;
  status?: string;
  featured?: boolean;
};

function SectionHeader({
  label,
  title,
  description,
  dark = true,
  align = "left",
}: {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "mx-auto text-center md:mx-0 md:text-left";

  return (
    <div className={`max-w-4xl ${alignment}`}>
      <p
        className={`text-sm font-black uppercase tracking-[0.3em] sm:text-base md:text-xl ${
          dark ? "text-orange-400" : "text-black/70"
        }`}
      >
        {label}
      </p>

      <h2
        className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl ${
          dark ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 ${
            dark ? "text-zinc-300" : "text-black/85"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ExperienceCard({
  title,
  description,
  includes,
  pricing,
  labels,
  featured,
}: {
  title: string;
  description: string;
  includes: string[];
  pricing: string[];
  labels: { includes: string; pricing: string };
  featured?: boolean;
}) {
  return (
    <article
      className={`group flex flex-col rounded-3xl border p-6 text-left transition hover:-translate-y-1 ${
        featured
          ? "border-orange-500/50 bg-gradient-to-br from-orange-500/20 via-zinc-900 to-black shadow-[0_0_35px_rgba(249,115,22,0.2)] hover:border-orange-400"
          : "border-zinc-800 bg-zinc-900 hover:border-orange-500/60 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]"
      }`}
    >
      <h3 className="text-xl font-semibold text-orange-300">{title}</h3>

      <p className="mt-4 leading-7 text-zinc-300">{description}</p>

      <div className="mt-5">
        <p className="font-semibold text-white">{labels.includes}</p>

        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          {includes.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-5">
        <div className="rounded-2xl bg-black/50 p-4">
          <p className="font-semibold text-white">{labels.pricing}</p>

          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {pricing.map((price) => (
              <li key={price}>{price}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function SocialIcons({ darkBackground = true }: { darkBackground?: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-2xl">
      {socialLinks.map(({ label, href, icon: Icon, className }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className={`flex h-12 w-12 items-center justify-center rounded-full transition hover:scale-110 sm:h-14 sm:w-14 ${
            darkBackground ? "bg-black" : "bg-white/10"
          } ${className}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const t = translations[locale as Locale];

  const langLink = (targetLocale: Locale) => `/${targetLocale}`;

  const events: EventCard[] = [
    {
      title: t.events.birthday,
      image: "/images/luke-birthday-experience.jpg",
      date: t.events.birthdayDate,
      time: t.events.birthdayTime,
      location: t.events.birthdayLocation,
      status: t.events.upcoming,
      featured: true,
    },
    {
      title: t.events.session,
      image: "/images/giants-community-session.png",
      date: t.events.past,
      time: "13:00 – 15:00",
      location: "Sporthal Parkloods — Basketball Court 1",
      status: t.events.pastBadge,
    },
    {
      title: t.events.afro,
      image: "/images/afro-bounce.png",
      status: t.events.comingSoon,
    },
    {
      title: t.events.bbq,
      image: "/images/bbq-party.png",
      status: t.events.comingSoon,
    },
    {
      title: t.events.workout,
      image: "/images/workout-session.png",
      status: t.events.comingSoon,
    },
  ];

  const galleryImages = [
    { title: t.gallery.one, image: "/images/gallery-child-ball.jpg" },
    { title: t.gallery.two, image: "/images/gallery-basketball-training.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <a
        href="#events"
        className="block border-b border-orange-500/20 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 px-4 py-3 text-center text-xs font-bold tracking-wide text-black transition hover:brightness-110 sm:text-sm"
      >
        {t.bar}
      </a>

      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href={`/${locale}`}
            className="flex items-center justify-center gap-4 text-center lg:justify-start lg:text-left"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-black md:h-24 md:w-24">
              <Image
                src="/images/giants-logo.png"
                alt="GIANTS logo"
                fill
                unoptimized
                sizes="96px"
                className="object-contain scale-150"
              />
            </div>

            <div>
              <p className="text-2xl font-bold tracking-[0.18em] text-white sm:text-3xl">
                GIANTS
              </p>

              <p className="max-w-xs text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:text-xs">
                Movement · Community · Wellbeing
              </p>
            </div>
          </Link>

          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-zinc-100 sm:text-base lg:text-lg">
              <Link href={`/${locale}#about`} className="transition hover:text-orange-400">
                {t.nav.about}
              </Link>

              <Link href={`/${locale}#experiences`} className="transition hover:text-orange-400">
                {t.nav.experiences}
              </Link>

              <Link href={`/${locale}#community`} className="transition hover:text-orange-400">
                {t.nav.community}
              </Link>

              <Link href={`/${locale}#events`} className="transition hover:text-orange-400">
                {t.nav.events}
              </Link>

              <Link href={`/${locale}#gallery`} className="transition hover:text-orange-400">
                {t.nav.gallery}
              </Link>

              <Link href={`/${locale}#join`} className="transition hover:text-orange-400">
                {t.nav.join}
              </Link>
            </nav>

            <details className="relative shrink-0">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-zinc-700 px-3 py-2 text-xs font-bold text-orange-300 transition hover:border-orange-400">
                🌍 {locale.toUpperCase()}
              </summary>

              <div className="absolute right-0 z-50 mt-2 flex w-[58px] flex-col gap-0.5 rounded-lg border border-orange-500/20 bg-zinc-900/70 px-2 py-1.5 text-xs font-bold shadow-lg backdrop-blur-md">
                {locales.map((item) => (
                  <Link
                    key={item}
                    href={langLink(item)}
                    className={
                      item === locale
                        ? "rounded px-1 py-0.5 text-right text-orange-400"
                        : "rounded px-1 py-0.5 text-right text-zinc-300 hover:text-orange-400"
                    }
                  >
                    {item.toUpperCase()}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-orange-950 via-black to-black px-6 py-14 text-center md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex justify-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-orange-500/60 bg-black shadow-[0_0_60px_rgba(249,115,22,0.45)] md:h-52 md:w-52">
              <Image
                src="/images/giants-logo.png"
                alt="GIANTS logo"
                fill
                unoptimized
                priority
                sizes="(max-width: 768px) 160px, 208px"
                className="object-contain scale-150"
              />
            </div>
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-orange-300 md:text-base md:tracking-[0.45em]">
            {t.hero.eyebrow}
          </p>

          <h1 className="text-5xl font-extrabold tracking-[0.12em] text-white md:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>

          <p className="mt-4 text-xl font-semibold text-orange-300 md:text-3xl">
            {t.hero.subtitle}
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-300 md:text-xl">
            {t.hero.text}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`/${locale}#join`}
              className="flex min-h-14 w-72 items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] transition hover:scale-105 hover:bg-orange-400 sm:w-64"
            >
              {t.hero.join}
            </Link>

            <Link
              href={`/${locale}#about`}
              className="flex min-h-14 w-72 items-center justify-center rounded-full border border-zinc-500 px-8 py-4 text-center font-semibold text-white transition hover:border-white sm:w-64"
            >
              {t.hero.learn}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-semibold text-zinc-400">
            {t.hero.proof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-800 bg-black/40 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-40 mx-auto grid max-w-6xl gap-10 px-6 py-16 text-center md:grid-cols-2 md:items-center md:text-left"
      >
        <div>
          <SectionHeader
            label={t.labels.about}
            title={t.sectionTitles.about}
          />

          <p className="mt-6 leading-8 text-zinc-300">{t.about.p1}</p>
          <p className="mt-4 leading-8 text-zinc-300">{t.about.p2}</p>

          <ul className="mt-8 space-y-3 text-zinc-200">
            {t.about.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>

        <div className="relative h-[360px] overflow-hidden rounded-3xl border border-zinc-800 md:h-[420px]">
          <Image
            src="/images/about-us.jpg"
            alt="About GIANTS"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section
        id="experiences"
        className="scroll-mt-40 bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl text-center md:text-left">
          <SectionHeader
            label={t.labels.experiences}
            title={t.sectionTitles.experiences}
          />

          <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-zinc-300 md:mx-0 md:text-lg">
            {t.experiences.intro1}
            <br className="hidden md:block" />
            {t.experiences.intro2}
          </p>

          <div className="mx-auto mt-6 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-5 text-orange-100 md:mx-0">
            <p className="font-semibold text-orange-300">
              {t.experiences.accessTitle}
            </p>

            <p className="mt-2 leading-7 text-zinc-300">
              {t.experiences.accessText}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceData.map((experience) => (
              <ExperienceCard
                key={experience.title}
                {...experience}
                labels={{
                  includes: t.experiences.includes,
                  pricing: t.experiences.pricing,
                }}
              />
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 via-zinc-950 to-black p-6 text-center shadow-[0_0_35px_rgba(249,115,22,0.2)] md:p-8 md:text-left">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
              {t.labels.birthday}
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              {t.sectionTitles.birthday}
            </h3>

            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
              {t.birthday.intro}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              {t.birthday.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-orange-500/30 bg-black/40 px-4 py-2 text-sm font-bold text-orange-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={`/${locale}#join`}
              className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-orange-400"
            >
              {t.birthday.cta}
            </Link>
          </div>

          <div
            id="community"
            className="scroll-mt-40 mt-16 border-t border-orange-500/30 pt-12"
          >
            <div className="mb-10 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-5 text-center md:p-6 md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
                {t.community.introTitle}
              </p>

              <p className="mx-auto mt-3 max-w-5xl text-base leading-8 text-zinc-300 md:mx-0 md:text-lg md:whitespace-nowrap">
                {t.community.introText}
              </p>
            </div>

            <SectionHeader
              label={t.labels.community}
              title={t.sectionTitles.community}
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communityPrograms.map((program) => (
                <ExperienceCard
                  key={program.title}
                  {...program}
                  labels={{
                    includes: t.experiences.includes,
                    pricing: t.experiences.pricing,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-orange-500/30 bg-orange-500 p-8 text-center text-black shadow-[0_0_35px_rgba(249,115,22,0.25)]">
            <h3 className="text-2xl font-bold">{t.experiences.mottoTitle}</h3>

            <p className="mx-auto mt-3 max-w-2xl leading-8">
              {t.experiences.mottoText}
            </p>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="scroll-mt-40 mx-auto max-w-6xl px-6 py-16 text-center md:py-20 md:text-left"
      >
        <SectionHeader
          label={t.labels.events}
          title={t.sectionTitles.events}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.title}
              className={`overflow-hidden rounded-3xl border bg-zinc-900 text-left transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] ${
                event.featured
                  ? "border-orange-500/60"
                  : "border-zinc-800 hover:border-orange-500/60"
              }`}
            >
            <div className="relative h-[260px] sm:h-[360px] md:h-[520px] w-full overflow-hidden bg-black">                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-5">
                {event.status && (
                  <p
                    className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                      event.featured
                        ? "bg-orange-500 text-black"
                        : "bg-orange-500/15 text-orange-300"
                    }`}
                  >
                    {event.status}
                  </p>
                )}

                <h3 className="text-xl font-semibold">{event.title}</h3>

                {event.date && (
                  <div className="mt-3 space-y-1 text-sm text-zinc-300">
                    <p className="text-orange-300">
                      {event.date}
                      {event.time ? ` • ${event.time}` : ""}
                    </p>

                    {event.location && <p>{event.location}</p>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="scroll-mt-40 bg-zinc-950 px-6 py-16 text-center md:py-20 md:text-left"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label={t.labels.gallery}
            title={t.sectionTitles.gallery}
            description={t.gallery.text}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {galleryImages.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-black text-left transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]"
              >
                <div className="relative h-[320px] w-full md:h-[360px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="join"
        className="scroll-mt-40 bg-gradient-to-b from-orange-500 to-orange-600 px-6 py-14 text-black sm:py-16 md:py-20"
      >
        <div className="mx-auto flex max-w-6xl justify-center">
          <div className="flex w-full max-w-3xl flex-col items-center text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-black/70 sm:text-base">
              {t.labels.join}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              {t.sectionTitles.join}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-black/90 sm:text-lg sm:leading-8">
              {t.join.text}
            </p>

            <SocialIcons />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-black sm:h-20 sm:w-20">
              <Image
                src="/images/giants-logo.png"
                alt="GIANTS logo"
                fill
                unoptimized
                sizes="80px"
                className="object-contain scale-150"
              />
            </div>

            <div>
              <p className="text-xl font-bold tracking-[0.18em] sm:text-2xl">
                GIANTS
              </p>

              <p className="text-[10px] uppercase tracking-[0.18em] text-orange-300 sm:text-sm">
                Movement · Community · Wellbeing
              </p>
            </div>
          </div>

          <p className="text-sm text-zinc-400">{t.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
