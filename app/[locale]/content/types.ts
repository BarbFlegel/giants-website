export const locales = ["en", "fr", "nl", "de"] as const;
export type Locale = (typeof locales)[number];

export type Stat = { number: string; label: string };
export type HeroContent = {
  eyebrow: string; title: string; subtitle: string; mantra: string;
  text: string; brandStatement: string; primaryCta: string; secondaryCta: string; tertiaryCta: string; stats: Stat[];
};
export type NavContent = { about: string; experiences: string; community: string; events: string; gallery: string; join: string };
export type SectionLabels = NavContent & { energy: string };
export type SectionTitles = NavContent & { energy: string };
export type AboutContent = { p1: string; p2: string; bullets: string[] };
export type ExperiencesIntro = {
  intro1: string;
  intro2: string;
  accessTitle: string;
  accessText: string;
  includes: string;
  packages: string;
  mottoTitle: string;
  mottoText: string;
};
export type CommunityIntro = { introTitle: string; introText: string };
export type EventTranslations = {
  birthday: string;
  birthdayDate: string;
  birthdayTime: string;
  birthdayLocation: string;
  session: string;
  past: string;
  afro: string;
  bbq: string;
  workout: string;
  upcoming: string;
  pastLabel: string;
  comingSoon: string;
  askEvent: string;
  bookExperience: string;
  viewPoster: string;
  pastMoments: string;
  previousExperiences: string;
  viewGallery: string;
};
export type GalleryContent = { text: string; one: string; two: string };
export type JoinContent = { text: string };
export type FooterContent = { copyright: string };
export type Translation = { nav: NavContent; labels: SectionLabels; sectionTitles: SectionTitles; bar: string; hero: HeroContent; about: AboutContent; experiences: ExperiencesIntro; community: CommunityIntro; events: EventTranslations; gallery: GalleryContent; join: JoinContent; footer: FooterContent };
export type Experience = {
  title: string;
  description: string;
  tags: string[];
  includes: string[];
  packages: string[];
  featured?: boolean;
};
export type CommunityProgram = Experience;
export type EventItem = {
  title: string;
  image: string;
  status: string;
  date?: string;
  time?: string;
  location?: string;
  type?: "birthday" | "standard";
};
export type GalleryItem = {
  titleKey: keyof GalleryContent;
  image: string;
  type?: "image" | "video";
  video?: string
};
