import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export const locales = ["en", "fr", "nl", "de"] as const;
export type Locale = (typeof locales)[number];

export const facebookUrl = "https://www.facebook.com/share/1c4oNWvWC9/";
export const email = "giants.decult@gmail.com";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  className: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/FbHUNvazjmz91fsWDUx3Qx?mode=gi_t",
    icon: FaWhatsapp,
    className: "text-green-500",
  },
  {
    label: "Email",
    href: `mailto:${email}`,
    icon: FaEnvelope,
    className: "text-orange-300",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/decult1111?igsh=YWh1ZmJjNWt5amZ5",
    icon: FaInstagram,
    className: "text-fuchsia-400",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@de.cult?_r=1&_t=ZG-95OKtugVZLM",
    icon: FaTiktok,
    className: "text-white",
  },
  {
    label: "Facebook",
    href: facebookUrl,
    icon: FaFacebook,
    className: "text-blue-500",
  },
];

export type Experience = {
  title: string;
  description: string;
  includes: string[];
  pricing: string[];
  tags?: string[];
  featured?: boolean;
};

export type CommunityProgram = {
  title: string;
  description: string;
  includes: string[];
  pricing: string[];
  tags?: string[];
};

export type HeroStat = {
  number: string;
  label: string;
};

export const translations = {
  en: {
    nav: {
      about: "About",
      experiences: "Experiences",
      community: "Community",
      events: "Events",
      gallery: "Gallery",
      join: "Collaborate",
    },
    labels: {
      about: "About",
      experiences: "Experiences",
      community: "Community",
      events: "Events",
      gallery: "Gallery",
      join: "Connect",
      birthday: "Birthday Experience",
    },
    sectionTitles: {
      about: "Movement through community",
      experiences: "Sport, events & immersive experiences",
      community: "Social impact initiatives",
      events: "Upcoming & featured experiences",
      gallery: "Community moments",
      join: "Join the movement",
      birthday: "Celebrate like a GIANT",
    },
    bar: "🔥 Upcoming GIANTS Birthday Experience • 14 June 2026 • Merksem",
    hero: {
      eyebrow: "DE CULT PRESENTS",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      brandStatement:
        "More than training — GIANTS creates immersive sport and community experiences.",
      text: "A community-based movement built around basketball, movement, games, wellbeing, and unforgettable shared moments.",
      join: "Join the Movement",
      learn: "Explore Experiences",
      proof: [
        "Open to all levels",
        "Basketball experiences",
        "Movement • Games • Events",
      ],
      stats: [
        { number: "100+", label: "Participants" },
        { number: "10+", label: "Community experiences" },
        { number: "4", label: "Experience formats" },
      ],
    },
    about: {
      p1: "GIANTS is a movement-driven initiative built around discipline, confidence, teamwork, and community energy.",
      p2: "Through basketball, movement games, social events, birthday concepts, and community activities, GIANTS creates spaces where people can connect, move, celebrate, and grow together.",
      bullets: [
        "Open to all levels",
        "Community-focused",
        "Sport, games & experiences",
        "Mental & physical wellbeing",
        "Built for connection and energy",
      ],
    },
    experiences: {
      intro1:
        "GIANTS turns sport, movement, games, and community energy into memorable experiences.",
      intro2:
        "Private, group, and corporate experiences help support inclusive activities for vulnerable groups.",
      accessTitle: "Community access",
      accessText:
        "Selected activities can be offered free of charge for refugees, children’s homes, and community organizations, depending on availability and partnership support.",
      includes: "Experience includes:",
      pricing: "Offer:",
      mottoTitle: "GIANTS is more than training.",
      mottoText: "A space to train, connect, celebrate, and grow together.",
    },
    birthday: {
      intro:
        "The GIANTS birthday concept turns a celebration into a full active experience: basketball-inspired games, team challenges, music, MVP moments, and high-energy memories for kids, teens, and groups.",
      tags: ["Train", "Connect", "Celebrate", "Play like a GIANT"],
      cta: "Ask about birthday experiences",
    },
    community: {
      introTitle: "Beyond training",
      introText:
        "These experiences focus on connection, reflection, social inclusion, and wellbeing beyond traditional sport.",
    },
    events: {
      birthday: "Luke Othello’s 9th Birthday",
      birthdayDate: "Upcoming event • 14 June 2026",
      birthdayTime: "2:00 PM – 4:00 PM",
      birthdayLocation: "Merksem",
      session: "GIANTS Community Session",
      past: "Past event • 9 May 2026",
      afro: "Afro Beats & Bounce",
      bbq: "Workout & BBQ Party",
      workout: "Community Workout",
      upcoming: "Upcoming",
      pastBadge: "Past event",
      comingSoon: "Coming soon",
    },
    gallery: {
      text: "Real moments from GIANTS experiences, sessions, and community activities.",
      one: "Community basketball moments",
      two: "Training and movement energy",
    },
    join: {
      text: "Join a session, ask about a birthday or team experience, or collaborate with the GIANTS community.",
    },
    footer: {
      copyright: "© 2026 GIANTS",
    },
  },

  fr: {
    nav: {
      about: "À propos",
      experiences: "Expériences",
      community: "Impact",
      events: "Events",
      gallery: "Galerie",
      join: "Contact",
    },
    labels: {
      about: "À propos",
      experiences: "Expériences",
      community: "Communauté",
      events: "Événements",
      gallery: "Galerie",
      join: "Contact",
      birthday: "Expérience anniversaire",
    },
    sectionTitles: {
      about: "Le mouvement par la communauté",
      experiences: "Sport, événements & expériences immersives",
      community: "Initiatives à impact social",
      events: "Expériences à venir & en avant",
      gallery: "Moments communautaires",
      join: "Rejoindre le mouvement",
      birthday: "Célébrer comme un GIANT",
    },
    bar: "🔥 Prochaine expérience anniversaire GIANTS • 14 juin 2026 • Merksem",
    hero: {
      eyebrow: "DE CULT PRÉSENTE",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      brandStatement:
        "Plus qu’un entraînement — GIANTS crée des expériences sportives et communautaires immersives.",
      text: "Une initiative communautaire construite autour du basketball, du mouvement, des jeux, du bien-être et de moments partagés mémorables.",
      join: "Rejoindre le mouvement",
      learn: "Explorer les expériences",
      proof: [
        "Accessible à tous les niveaux",
        "Expériences basketball",
        "Mouvement • Jeux • Events",
      ],
      stats: [
        { number: "100+", label: "Participants" },
        { number: "10+", label: "Expériences communautaires" },
        { number: "4", label: "Formats d’expérience" },
      ],
    },
    about: {
      p1: "GIANTS est une initiative portée par le mouvement, construite autour de la discipline, de la confiance, de l’esprit d’équipe et de l’énergie communautaire.",
      p2: "À travers le basketball, les jeux de mouvement, les événements sociaux, les concepts d’anniversaire et les activités communautaires, GIANTS crée des espaces pour se connecter, bouger, célébrer et grandir ensemble.",
      bullets: [
        "Accessible à tous les niveaux",
        "Axé sur la communauté",
        "Sport, jeux & expériences",
        "Bien-être mental et physique",
        "Conçu pour la connexion et l’énergie",
      ],
    },
    experiences: {
      intro1:
        "GIANTS transforme le sport, le mouvement, les jeux et l’énergie communautaire en expériences mémorables.",
      intro2:
        "Les expériences privées, de groupe et corporate aident à soutenir des activités inclusives pour les groupes vulnérables.",
      accessTitle: "Accès communautaire",
      accessText:
        "Certaines activités peuvent être proposées gratuitement aux réfugiés, foyers d’enfants et organisations communautaires, selon les disponibilités et le soutien des partenaires.",
      includes: "L’expérience inclut :",
      pricing: "Offre :",
      mottoTitle: "GIANTS est plus qu’un entraînement.",
      mottoText: "Un espace pour s’entraîner, se connecter, célébrer et grandir ensemble.",
    },
    birthday: {
      intro:
        "Le concept anniversaire GIANTS transforme une fête en expérience active complète : jeux inspirés du basketball, défis en équipe, musique, moments MVP et souvenirs pleins d’énergie.",
      tags: ["Train", "Connect", "Celebrate", "Play like a GIANT"],
      cta: "Demander une expérience anniversaire",
    },
    community: {
      introTitle: "Au-delà de l’entraînement",
      introText:
        "Ces expériences mettent l’accent sur la connexion, la réflexion, l’inclusion sociale et le bien-être au-delà du sport traditionnel.",
    },
    events: {
      birthday: "9e anniversaire de Luke Othello",
      birthdayDate: "Événement à venir • 14 juin 2026",
      birthdayTime: "14h00 – 16h00",
      birthdayLocation: "Merksem",
      session: "Session communautaire GIANTS",
      past: "Événement passé • 9 mai 2026",
      afro: "Afro Beats & Bounce",
      bbq: "Workout & BBQ Party",
      workout: "Entraînement communautaire",
      upcoming: "À venir",
      pastBadge: "Événement passé",
      comingSoon: "Bientôt",
    },
    gallery: {
      text: "Moments réels des expériences GIANTS, sessions et activités communautaires.",
      one: "Moments de basketball communautaire",
      two: "Énergie d’entraînement et de mouvement",
    },
    join: {
      text: "Rejoignez une session, demandez une expérience anniversaire ou team building, ou collaborez avec la communauté GIANTS.",
    },
    footer: {
      copyright: "© 2026 GIANTS",
    },
  },

  nl: {
    nav: {
      about: "Over",
      experiences: "Ervaringen",
      community: "Impact",
      events: "Events",
      gallery: "Galerij",
      join: "Contact",
    },
    labels: {
      about: "Over",
      experiences: "Ervaringen",
      community: "Community",
      events: "Events",
      gallery: "Galerij",
      join: "Contact",
      birthday: "Verjaardagservaring",
    },
    sectionTitles: {
      about: "Beweging via community",
      experiences: "Sport, events & belevingen",
      community: "Sociale impact initiatieven",
      events: "Komende & uitgelichte ervaringen",
      gallery: "Community momenten",
      join: "Word deel van de beweging",
      birthday: "Vier als een GIANT",
    },
    bar: "🔥 Komende GIANTS verjaardagservaring • 14 juni 2026 • Merksem",
    hero: {
      eyebrow: "DE CULT PRESENTEERT",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      brandStatement:
        "Meer dan training — GIANTS creëert immersieve sport- en community-ervaringen.",
      text: "Een community-initiatief rond basketbal, beweging, games, welzijn en onvergetelijke gedeelde momenten.",
      join: "Word deel van de beweging",
      learn: "Ontdek ervaringen",
      proof: [
        "Open voor alle niveaus",
        "Basketbalervaringen",
        "Beweging • Games • Events",
      ],
      stats: [
        { number: "100+", label: "Deelnemers" },
        { number: "10+", label: "Community-ervaringen" },
        { number: "4", label: "Ervaringsformats" },
      ],
    },
    about: {
      p1: "GIANTS is een bewegingsgericht initiatief rond discipline, zelfvertrouwen, teamwork en community-energie.",
      p2: "Via basketbal, bewegingsgames, sociale events, verjaardagsconcepten en community-activiteiten creëert GIANTS ruimtes om te verbinden, bewegen, vieren en samen te groeien.",
      bullets: [
        "Open voor alle niveaus",
        "Community-gericht",
        "Sport, games & ervaringen",
        "Mentaal en fysiek welzijn",
        "Gebouwd voor verbinding en energie",
      ],
    },
    experiences: {
      intro1:
        "GIANTS verandert sport, beweging, games en community-energie in memorabele ervaringen.",
      intro2:
        "Privé-, groeps- en corporate ervaringen ondersteunen inclusieve activiteiten voor kwetsbare groepen.",
      accessTitle: "Community access",
      accessText:
        "Geselecteerde activiteiten kunnen gratis worden aangeboden aan vluchtelingen, kinderhuizen en community-organisaties, afhankelijk van beschikbaarheid en partnersteun.",
      includes: "Ervaring omvat:",
      pricing: "Aanbod:",
      mottoTitle: "GIANTS is meer dan training.",
      mottoText: "Een ruimte om te trainen, verbinden, vieren en samen te groeien.",
    },
    birthday: {
      intro:
        "Het GIANTS-verjaardagsconcept maakt van een feest een actieve totaalervaring: basketbalgerichte games, teamuitdagingen, muziek, MVP-momenten en onvergetelijke energie.",
      tags: ["Train", "Connect", "Celebrate", "Play like a GIANT"],
      cta: "Vraag naar verjaardagservaringen",
    },
    community: {
      introTitle: "Voorbij training",
      introText:
        "Deze ervaringen focussen op verbinding, reflectie, sociale inclusie en welzijn buiten traditionele sport.",
    },
    events: {
      birthday: "Luke Othello’s 9e verjaardag",
      birthdayDate: "Aankomend event • 14 juni 2026",
      birthdayTime: "14:00 – 16:00",
      birthdayLocation: "Merksem",
      session: "GIANTS Community Session",
      past: "Afgelopen event • 9 mei 2026",
      afro: "Afro Beats & Bounce",
      bbq: "Workout & BBQ Party",
      workout: "Community Workout",
      upcoming: "Aankomend",
      pastBadge: "Afgelopen event",
      comingSoon: "Binnenkort",
    },
    gallery: {
      text: "Echte momenten uit GIANTS-ervaringen, sessies en community-activiteiten.",
      one: "Community basketbalmomenten",
      two: "Training- en bewegingsenergie",
    },
    join: {
      text: "Word deel van de community, vraag naar een verjaardags- of teamervaring, of werk samen met GIANTS.",
    },
    footer: {
      copyright: "© 2026 GIANTS",
    },
  },

  de: {
    nav: {
      about: "Über uns",
      experiences: "Erlebnisse",
      community: "Impact",
      events: "Events",
      gallery: "Galerie",
      join: "Kontakt",
    },
    labels: {
      about: "Über uns",
      experiences: "Erlebnisse",
      community: "Community",
      events: "Events",
      gallery: "Galerie",
      join: "Kontakt",
      birthday: "Geburtstagserlebnis",
    },
    sectionTitles: {
      about: "Bewegung durch Gemeinschaft",
      experiences: "Sport, Events & Erlebnisse",
      community: "Initiativen mit sozialer Wirkung",
      events: "Kommende & ausgewählte Erlebnisse",
      gallery: "Community-Momente",
      join: "Werde Teil der Bewegung",
      birthday: "Feiere wie ein GIANT",
    },
    bar: "🔥 Kommendes GIANTS Geburtstagserlebnis • 14. Juni 2026 • Merksem",
    hero: {
      eyebrow: "DE CULT PRÄSENTIERT",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      brandStatement:
        "Mehr als Training — GIANTS schafft immersive Sport- und Community-Erlebnisse.",
      text: "Eine Community-Initiative rund um Basketball, Bewegung, Spiele, Wohlbefinden und unvergessliche gemeinsame Momente.",
      join: "Werde Teil der Bewegung",
      learn: "Erlebnisse entdecken",
      proof: [
        "Offen für alle Niveaus",
        "Basketball-Erlebnisse",
        "Bewegung • Spiele • Events",
      ],
      stats: [
        { number: "100+", label: "Teilnehmer" },
        { number: "10+", label: "Community-Erlebnisse" },
        { number: "4", label: "Erlebnisformate" },
      ],
    },
    about: {
      p1: "GIANTS ist eine bewegungsorientierte Initiative rund um Disziplin, Selbstvertrauen, Teamgeist und Community-Energie.",
      p2: "Durch Basketball, Bewegungsspiele, soziale Events, Geburtstagskonzepte und Community-Aktivitäten schafft GIANTS Räume, um sich zu verbinden, zu bewegen, zu feiern und gemeinsam zu wachsen.",
      bullets: [
        "Offen für alle Niveaus",
        "Community-orientiert",
        "Sport, Spiele & Erlebnisse",
        "Mentales und körperliches Wohlbefinden",
        "Gebaut für Verbindung und Energie",
      ],
    },
    experiences: {
      intro1:
        "GIANTS macht aus Sport, Bewegung, Spielen und Community-Energie besondere Erlebnisse.",
      intro2:
        "Private, Gruppen- und Corporate-Erlebnisse unterstützen inklusive Aktivitäten für vulnerable Gruppen.",
      accessTitle: "Community-Zugang",
      accessText:
        "Ausgewählte Aktivitäten können für Geflüchtete, Kinderheime und Community-Organisationen kostenlos angeboten werden, abhängig von Verfügbarkeit und Partnerunterstützung.",
      includes: "Erlebnis umfasst:",
      pricing: "Angebot:",
      mottoTitle: "GIANTS ist mehr als Training.",
      mottoText: "Ein Raum zum Trainieren, Verbinden, Feiern und gemeinsamen Wachsen.",
    },
    birthday: {
      intro:
        "Das GIANTS-Geburtstagskonzept macht aus einer Feier ein aktives Erlebnis: basketball-inspirierte Spiele, Team-Challenges, Musik, MVP-Momente und unvergessliche Energie.",
      tags: ["Train", "Connect", "Celebrate", "Play like a GIANT"],
      cta: "Geburtstagserlebnis anfragen",
    },
    community: {
      introTitle: "Über Training hinaus",
      introText:
        "Diese Erlebnisse fördern Verbindung, Reflexion, soziale Inklusion und Wohlbefinden außerhalb des klassischen Sports.",
    },
    events: {
      birthday: "Luke Othellos 9. Geburtstag",
      birthdayDate: "Kommendes Event • 14. Juni 2026",
      birthdayTime: "14:00 – 16:00",
      birthdayLocation: "Merksem",
      session: "GIANTS Community Session",
      past: "Vergangenes Event • 9. Mai 2026",
      afro: "Afro Beats & Bounce",
      bbq: "Workout & BBQ Party",
      workout: "Community Workout",
      upcoming: "Kommend",
      pastBadge: "Vergangenes Event",
      comingSoon: "Bald",
    },
    gallery: {
      text: "Echte Momente aus GIANTS-Erlebnissen, Sessions und Community-Aktivitäten.",
      one: "Community-Basketball-Momente",
      two: "Trainings- und Bewegungsenergie",
    },
    join: {
      text: "Werde Teil der Community, frage nach einem Geburtstags- oder Team-Erlebnis oder arbeite mit GIANTS zusammen.",
    },
    footer: {
      copyright: "© 2026 GIANTS",
    },
  },
} as const;

export const experienceData: Experience[] = [
  {
    title: "GIANTS Birthday Experience",
    description:
      "A high-energy birthday concept combining basketball, movement games, team challenges, music, and unforgettable GIANTS moments.",
    includes: [
      "Birthday game flow",
      "Basketball-inspired challenges",
      "Team wars & mini competitions",
      "MVP moment / birthday spotlight",
      "Optional flyer and theme concept",
    ],
    pricing: [
      "Custom offer based on duration, location, theme, and group size",
      "Trial birthday experience available",
    ],
    tags: ["Birthday", "Basketball", "Team Games"],
    featured: true,
  },
  {
    title: "Functional Movement Experience",
    description:
      "High-energy movement experiences focused on strength, conditioning, mobility, rhythm, and confidence.",
    includes: [
      "Full-body movement",
      "Mobility & endurance",
      "Group energy",
      "Team-based challenges",
    ],
    pricing: [
      "Group experiences: from €10–€15 per person",
      "Private coaching: from €30",
      "Monthly access: available on request",
    ],
    tags: ["Movement", "Energy", "Wellbeing"],
  },
  {
    title: "Basketball Experience",
    description:
      "Skill-focused basketball experiences built around ball handling, shooting, game situations, confidence, and team energy.",
    includes: [
      "Technical drills",
      "Game situations",
      "Speed & agility work",
      "Confidence-building challenges",
    ],
    pricing: [
      "Group experiences: from €12–€20 per person",
      "Private training: from €30",
      "Team experiences: custom offer",
    ],
    tags: ["Basketball", "Skills", "Teamwork"],
  },
  {
    title: "Team Experience Events",
    description:
      "Interactive group experiences using movement challenges, competition, and teamwork to build communication, trust, and shared energy.",
    includes: [
      "Team challenges",
      "Leadership games",
      "Communication drills",
      "Competitive activities",
    ],
    pricing: [
      "Corporate and group packages available on request",
      "Pricing depends on duration, format, and group size",
    ],
    tags: ["Corporate", "Teams", "Challenges"],
  },
  {
    title: "Youth Basketball Bootcamp",
    description:
      "A structured youth basketball experience focused on fundamentals, confidence, discipline, teamwork, and joy of the game.",
    includes: [
      "Daily skill development",
      "Fun competitions",
      "Team games",
      "Discipline & teamwork",
    ],
    pricing: [
      "Weekly camp: from €40–€150 per child",
      "Final offer depends on duration and program format",
    ],
    tags: ["Youth", "Basketball", "Confidence"],
  },
  {
    title: "Community Sport Events",
    description:
      "Community experiences combining sport, music, food, movement, and social connection.",
    includes: ["Open workouts", "Basketball games", "Music & social moments"],
    pricing: [
      "Community entry: from €5–€15",
      "Private event hosting: custom offer",
    ],
    tags: ["Community", "Music", "Events"],
  },
];

export const communityPrograms: CommunityProgram[] = [
  {
    title: "Old Age Home Workshops",
    description:
      "Gentle adapted experiences focused on mobility, coordination, memory, and social interaction for elderly participants.",
    includes: [
      "Light movement exercises",
      "Coordination activities",
      "Social engagement",
    ],
    pricing: ["From €20–€60 per session", "Partnership options available"],
    tags: ["Care", "Mobility", "Connection"],
  },
  {
    title: "Board Games Tournaments",
    description:
      "Relaxed competitive experiences encouraging strategy, connection, and fun.",
    includes: ["Strategy games", "Social tournaments", "Private events"],
    pricing: ["Entry from €5–€10", "Private event: custom offer"],
    tags: ["Games", "Social", "Strategy"],
  },
  {
    title: "Philosophy Talks & Sit-ins",
    description:
      "Open community conversations exploring mindset, discipline, purpose, identity, and personal growth.",
    includes: [
      "Mindset discussions",
      "Open conversations",
      "Community reflection",
    ],
    pricing: ["Entry from €5–€10", "Private group session: custom offer"],
    tags: ["Mindset", "Reflection", "Growth"],
  },
  {
    title: "Debates & Discussion Events",
    description:
      "Structured discussion experiences encouraging communication, critical thinking, confidence, and perspective sharing.",
    includes: [
      "Debate sessions",
      "Group discussions",
      "Hosted community events",
    ],
    pricing: ["Entry from €5–€10", "Hosted event: custom offer"],
    tags: ["Debate", "Voice", "Perspective"],
  },
  {
    title: "Camping & Outdoor Experiences",
    description:
      "Outdoor experiences combining nature, movement, reflection, and group bonding.",
    includes: [
      "Outdoor training",
      "Group activities",
      "Reflection & connection",
    ],
    pricing: ["From €50–€150 per participant", "Depends on duration and format"],
    tags: ["Outdoors", "Bonding", "Nature"],
  },
];
