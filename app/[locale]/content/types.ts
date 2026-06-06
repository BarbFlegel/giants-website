export const locales = ["en", "fr", "nl", "de"] as const;
export type Locale = (typeof locales)[number];

export type Stat = {
  number: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  mantra: string;
  text: string;
  brandStatement: string;
  primaryCta: string;
  secondaryCta: string;
  tertiaryCta: string;
  stats: Stat[];
};

export type NavContent = {
  about: string;
  vision: string;
  community: string;
  experiences: string;
  events: string;
  letters: string;
  gallery: string;
  join: string;
};

export type SectionLabels = NavContent & {
  energy: string;
};

export type SectionTitles = NavContent & {
  energy: string;
};

export type AboutContent = {
  p1: string;
  p2: string;
  bullets: string[];
};

export type EventTranslations = {
  label: string;
  title: string;
  description: string;
  status: string;
  birthdayTitle: string;
  birthdayDescription: string;
  ask: string;
  book: string;
  viewPoster: string;
  closePoster: string;
};

export type GalleryContent = {
  text: string;
  one: string;
  two: string;
  photosLabel: string;
  videosLabel: string;
  photosTitle: string;
  videosTitle: string;
  viewPhotos: string;
  viewVideos: string;
};

export type JoinContent = {
  text: string;
};

export type FooterContent = {
  copyright: string;
};

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
  title: string;
  image: string;
  type?: "image" | "video";
  video?: string;
};

export type VisionContent = {
  label: string;
  title: string;
  text: string;
};

export type MobileBarContent = {
  join: string;
  book: string;
};

export type ContactContent = {
  label: string;
  title: string;
  text: string;
};

export type SliderHintContent = {
  swipe: string;
  drag: string;
};

export type ComingSoonCard = {
  label: string;
  title: string;
  text: string;
  cta: string;
  items?: string[];
};

export type ExperiencesIntro = {
  intro1: string;
  intro2: string;
  accessTitle: string;
  accessText: string;
  includes: string;
  packages: string;
  featured: string;
  discoverMore: string;
  mottoTitle: string;
  mottoText: string;
  moreText: string;
  comingSoon: ComingSoonCard;
};

export type CommunityIntro = {
  introTitle: string;
  introText: string;
  accessTitle?: string;
  accessText?: string;
  moreText: string;
  comingSoon: ComingSoonCard;
};

export type BrandContent = {
  name: string;
  tagline: string;
};

export type Translation = {
  brand: BrandContent;
  nav: NavContent;
  mobileBar: MobileBarContent;
  contact: ContactContent;
  sliderHint: SliderHintContent;
  labels: SectionLabels;
  sectionTitles: SectionTitles;
  bar: string;
  hero: HeroContent;
  vision: VisionContent;
  about: AboutContent;
  experiences: ExperiencesIntro;
  community: CommunityIntro;
  events: EventTranslations;
letters: LettersContent;
gallery: GalleryContent;
join: JoinContent;
footer: FooterContent;
};

export type LettersContent = {
  label: string;
  title: string;
  description: string;
  items: {
    label: string;
    title: string;
    text: string;
  }[];
};

