"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
  type?: "birthday" | "standard";
};

type ExperienceItem = {
  title: string;
  description: string;
  includes: string[];
  pricing: string[];
  tags?: string[];
  featured?: boolean;
};

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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

      <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
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

function ExperienceTags({ tags }: { tags?: string[] }) {
  const fallbackTags = ["Experience", "Movement", "Community"];
  const displayTags = tags?.length ? tags : fallbackTags;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {displayTags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold text-orange-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ExperienceCard({
  title,
  description,
  includes,
  pricing,
  labels,
  tags,
  featured,
  className = "",
}: ExperienceItem & {
  labels: { includes: string; pricing: string };
  className?: string;
}) {
  return (
    <FadeUp className={className}>
      <article
        className={`group flex h-full flex-col rounded-3xl border p-6 text-left transition hover:-translate-y-1 ${
          featured
            ? "border-orange-500/50 bg-gradient-to-br from-orange-500/20 via-zinc-900 to-black shadow-[0_0_35px_rgba(249,115,22,0.2)] hover:border-orange-400"
            : "border-zinc-800 bg-zinc-900 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]"
        }`}
      >
        <h3 className="text-xl font-semibold text-orange-300">{title}</h3>

        <p className="mt-4 leading-7 text-zinc-300">{description}</p>

        <ExperienceTags tags={tags} />

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
    </FadeUp>
  );
}

function SocialIcons() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-2xl">
      {socialLinks.map(({ label, href, icon: Icon, className }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-black transition hover:scale-110 sm:h-14 sm:w-14 ${className}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default function HomeClient({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const langLink = (targetLocale: Locale) => `/${targetLocale}`;

  const events: EventCard[] = [
    {
      title: t.events.birthday,
      image: "/images/luke-birthday-experience.jpg",
      date: t.events.birthdayDate,
      time: t.events.birthdayTime,
      location: t.events.birthdayLocation,
      status: "Upcoming",
      type: "birthday",
    },
    {
      title: t.events.session,
      image: "/images/giants-community-session.png",
      date: t.events.past,
      time: "13:00 – 15:00",
      location: "Sporthal Parkloods — Basketball Court 1",
      status: "Past event",
      type: "standard",
    },
    {
      title: t.events.afro,
      image: "/images/afro-bounce.png",
      status: "Coming soon",
      type: "standard",
    },
    {
      title: t.events.bbq,
      image: "/images/bbq-party.png",
      status: "Coming soon",
      type: "standard",
    },
    {
      title: t.events.workout,
      image: "/images/workout-session.png",
      status: "Coming soon",
      type: "standard",
    },
  ];

  const galleryImages = [
    { title: t.gallery.one, image: "/images/gallery-child-ball.jpg" },
    { title: t.gallery.two, image: "/images/gallery-basketball-training.jpg" },
  ];

  const experiences = experienceData as ExperienceItem[];
  const community = communityPrograms as ExperienceItem[];

  return (
    <main className="min-h-screen bg-black text-white">
      <a
        href={`/${locale}#events`}
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

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-b from-orange-950 via-black to-black px-6 py-14 text-center md:py-20"
      >
        <div className="mx-auto max-w-5xl">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-orange-300 md:text-base md:tracking-[0.45em]">
            {t.hero.eyebrow}
          </p>

          <h1 className="text-5xl font-extrabold tracking-[0.12em] text-white md:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>

          <p className="mt-4 text-xl font-semibold text-orange-300 md:text-3xl">
            {t.hero.subtitle}
          </p>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.45em] text-orange-400">
            Train • Connect • Elevate
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-300 md:text-xl">
            {t.hero.text}
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-zinc-300 md:text-lg">
            {t.hero.brandStatement}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
                href={`/${locale}#events`}
                className="rounded-full bg-orange-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-orange-400"
            >
                Join a Session
            </Link>

            <Link
                href={`/${locale}#experiences`}
                className="rounded-full border border-orange-500 px-8 py-4 font-bold text-orange-300 transition hover:bg-orange-500/10"
            >
                Book an Experience
            </Link>

            <Link
                href={`/${locale}#join`}
                className="rounded-full border border-zinc-600 px-8 py-4 font-bold text-white transition hover:border-orange-400 hover:text-orange-300"
            >
                Collaborate
            </Link>
            </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
            {[
              ["100+", "Participants"],
              ["10+", "Community events"],
              ["4", "Experience types"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-zinc-800 bg-white/5 px-5 py-4"
              >
                <p className="text-2xl font-bold text-orange-400">{number}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
            {t.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-800 bg-white/5 px-5 py-4"
              >
                <p className="text-2xl font-bold text-orange-400">
                  {stat.number}
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </motion.section>

      <FadeUp>
        <section
          id="about"
          className="scroll-mt-40 mx-auto grid max-w-6xl gap-10 px-6 py-16 text-center md:grid-cols-2 md:items-center md:text-left"
        >
          <div>
            <SectionHeader label={t.labels.about} title={t.sectionTitles.about} />

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
              className="object-cover object-top"
            />
          </div>
        </section>
      </FadeUp>

      <section
        id="experiences"
        className="scroll-mt-40 bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl text-center md:text-left">
          <FadeUp>
            <SectionHeader
              label={t.labels.experiences}
              title={t.sectionTitles.experiences}
            />

            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-zinc-300 md:mx-0">
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
          </FadeUp>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
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
        </div>
      </section>

      <section
        id="community"
        className="scroll-mt-40 bg-black px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="mb-10 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-5 text-center md:p-6 md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
                {t.community.introTitle}
              </p>

              <p className="mx-auto mt-3 max-w-5xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8 md:mx-0">
                {t.community.introText}
              </p>
            </div>

            <SectionHeader
              label={t.labels.community}
              title={t.sectionTitles.community}
            />
          </FadeUp>

          <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5">
            {community.map((program) => (
              <ExperienceCard
                key={program.title}
                {...program}
                className="min-w-[300px] snap-center sm:min-w-[380px]"
                labels={{
                  includes: t.experiences.includes,
                  pricing: t.experiences.pricing,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="events"
        className="scroll-mt-40 mx-auto max-w-6xl px-6 py-16 text-center md:py-20 md:text-left"
      >
        <FadeUp>
          <SectionHeader label={t.labels.events} title={t.sectionTitles.events} />
        </FadeUp>

        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5">
          {events.map((event) => (
            <FadeUp
              key={event.title}
              className="min-w-[300px] snap-center sm:min-w-[420px] lg:min-w-[520px]"
            >
              <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 text-left transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    event.type === "birthday"
                      ? "h-[280px] sm:h-[420px] lg:h-[560px]"
                      : "h-[240px] sm:h-[320px] lg:h-[420px]"
                  }`}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 90vw, 520px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="p-5">
                  {event.status && (
                    <p className="mb-3 inline-flex rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-300">
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
            </FadeUp>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="scroll-mt-40 bg-zinc-950 px-6 py-16 text-center md:py-20 md:text-left"
      >
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <SectionHeader
              label={t.labels.gallery}
              title={t.sectionTitles.gallery}
              description={t.gallery.text}
            />
          </FadeUp>

          <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5">
            {galleryImages.map((item) => (
              <FadeUp
                key={item.title}
                className="min-w-[300px] snap-center sm:min-w-[480px]"
              >
                <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-black text-left transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">
                  <div className="relative h-[300px] w-full sm:h-[360px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 480px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section
        id="join"
        className="scroll-mt-40 bg-gradient-to-b from-orange-500 to-orange-600 px-6 py-14 text-black sm:py-16 md:py-20"
      >
        <div className="mx-auto flex max-w-6xl justify-center">
          <FadeUp className="flex w-full max-w-3xl flex-col items-center text-center">
            <SectionHeader
              label={t.labels.join}
              title={t.sectionTitles.join}
              description={t.join.text}
              dark={false}
              align="center"
            />

            <SocialIcons />
          </FadeUp>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-black sm:h-20 sm:w-20">
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

              <p className="text-xs uppercase tracking-[0.18em] text-orange-300 sm:text-sm">
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