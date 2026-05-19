import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export const locales = ["en", "fr", "nl", "de"] as const;
export type Locale = (typeof locales)[number];

export const facebookUrl = "https://www.facebook.com/share/1GjwX7uSzo/";
export const email = "giants.decult@gmail.com";

export const socialLinks = [
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

export const translations = {
  en: {
    nav: {
      about: "About",
      experiences: "Experiences",
      community: "Community",
      events: "Events",
      gallery: "Gallery",
      join: "Join",
    },
    labels: {
      about: "About",
      experiences: "Experiences",
      community: "Community",
      events: "Events",
      gallery: "Gallery",
      join: "Join",
    },
    sectionTitles: {
      about: "Movement through community",
      experiences: "Sport, events & immersive experiences",
      community: "Social impact initiatives",
      events: "Upcoming & featured sessions",
      gallery: "Community moments",
      join: "Join the movement",
    },
    bar: "🔥 Upcoming GIANTS Birthday Experience • 14 June 2026 • Merksem",
    hero: {
      eyebrow: "DE CULT PRESENTS",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      text: "A community-based initiative built around movement, connection, basketball, wellbeing, and immersive social experiences.",
      join: "Join the Movement",
      learn: "Learn More",
    },
    about: {
      p1: "GIANTS is a movement-driven initiative focused on building discipline, confidence, teamwork, and wellbeing through sport and community.",
      p2: "We use basketball, functional training, social events, birthdays, and community activities as tools to connect and uplift people from all backgrounds.",
      bullets: [
        "Accessible to all levels",
        "Community-focused",
        "Sport, games & experiences",
        "Mental & physical wellbeing",
        "Open to all ages",
      ],
    },
    experiences: {
      intro1: "GIANTS combines sport, movement, games, and community energy into memorable experiences.",
      intro2:
        "Paid sessions and private/corporate experiences help support inclusive activities for vulnerable groups.",
      accessTitle: "Community access",
      accessText:
        "Selected activities can be offered free of charge for refugees, children’s homes, and community organizations, depending on availability and partnership support.",
      includes: "Includes:",
      pricing: "Pricing:",
      mottoTitle: "GIANTS is more than training.",
      mottoText:
        "It’s a space to grow, connect, celebrate, and elevate — physically and mentally.",
    },
    community: {
      introTitle: "Beyond training",
      introText:
        "These programs focus on connection, reflection, social inclusion, and wellbeing outside of traditional sport.",
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
    },
    gallery: {
      text: "Real photos from GIANTS sessions and community activities.",
      one: "Community basketball moments",
      two: "Training and movement session",
    },
    join: {
      text: "Join the community, ask about sessions, or collaborate with us.",
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
      join: "Rejoindre",
    },
    sectionTitles: {
      about: "Le mouvement par la communauté",
      experiences: "Sport, événements & expériences immersives",
      community: "Initiatives à impact social",
      events: "Sessions à venir & en avant",
      gallery: "Moments communautaires",
      join: "Rejoindre le mouvement",
    },
    bar: "🔥 Prochaine expérience anniversaire GIANTS • 14 juin 2026 • Merksem",
    hero: {
      eyebrow: "DE CULT PRÉSENTE",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      text: "Une initiative communautaire construite autour du mouvement, de la connexion, du basketball, du bien-être et d’expériences sociales immersives.",
      join: "Rejoindre le mouvement",
      learn: "En savoir plus",
    },
    about: {
      p1: "GIANTS est une initiative portée par le mouvement, axée sur la discipline, la confiance, l’esprit d’équipe et le bien-être à travers le sport et la communauté.",
      p2: "Nous utilisons le basketball, l’entraînement fonctionnel, les événements sociaux, les anniversaires et les activités communautaires comme outils pour connecter et soutenir des personnes de tous horizons.",
      bullets: [
        "Accessible à tous les niveaux",
        "Axé sur la communauté",
        "Sport, jeux & expériences",
        "Bien-être mental et physique",
        "Ouvert à tous les âges",
      ],
    },
    experiences: {
      intro1:
        "GIANTS combine sport, mouvement, jeux et énergie communautaire dans des expériences mémorables.",
      intro2:
        "Les sessions payantes et expériences privées/corporate aident à soutenir des activités inclusives pour les groupes vulnérables.",
      accessTitle: "Accès communautaire",
      accessText:
        "Certaines activités peuvent être proposées gratuitement aux réfugiés, foyers d’enfants et organisations communautaires, selon les disponibilités et le soutien des partenaires.",
      includes: "Inclus :",
      pricing: "Tarifs :",
      mottoTitle: "GIANTS est plus qu’un entraînement.",
      mottoText:
        "C’est un espace pour grandir, se connecter, célébrer et s’élever — physiquement et mentalement.",
    },
    community: {
      introTitle: "Au-delà de l’entraînement",
      introText:
        "Ces programmes mettent l’accent sur la connexion, la réflexion, l’inclusion sociale et le bien-être au-delà du sport traditionnel.",
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
    },
    gallery: {
      text: "Photos réelles des sessions GIANTS et des activités communautaires.",
      one: "Moments de basketball communautaire",
      two: "Session d’entraînement et de mouvement",
    },
    join: {
      text: "Rejoignez la communauté, posez vos questions sur les sessions ou collaborez avec nous.",
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
      join: "Meedoen",
    },
    sectionTitles: {
      about: "Beweging via community",
      experiences: "Sport, events & belevingen",
      community: "Sociale impact initiatieven",
      events: "Komende & uitgelichte sessies",
      gallery: "Community momenten",
      join: "Word deel van de beweging",
    },
    bar: "🔥 Komende GIANTS verjaardagservaring • 14 juni 2026 • Merksem",
    hero: {
      eyebrow: "DE CULT PRESENTEERT",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      text: "Een community-initiatief rond beweging, verbinding, basketbal, welzijn en immersieve sociale ervaringen.",
      join: "Word deel van de beweging",
      learn: "Meer info",
    },
    about: {
      p1: "GIANTS is een bewegingsgericht initiatief dat discipline, zelfvertrouwen, teamwork en welzijn opbouwt via sport en community.",
      p2: "We gebruiken basketbal, functionele training, sociale events, verjaardagen en community-activiteiten om mensen te verbinden en te versterken.",
      bullets: [
        "Toegankelijk voor alle niveaus",
        "Community-gericht",
        "Sport, games & ervaringen",
        "Mentaal en fysiek welzijn",
        "Open voor alle leeftijden",
      ],
    },
    experiences: {
      intro1:
        "GIANTS combineert sport, beweging, games en community-energie in memorabele ervaringen.",
      intro2:
        "Betaalde sessies en privé/corporate ervaringen helpen inclusieve activiteiten voor kwetsbare groepen te ondersteunen.",
      accessTitle: "Community access",
      accessText:
        "Geselecteerde activiteiten kunnen gratis worden aangeboden aan vluchtelingen, kinderhuizen en community-organisaties, afhankelijk van beschikbaarheid en partnersteun.",
      includes: "Inbegrepen:",
      pricing: "Prijzen:",
      mottoTitle: "GIANTS is meer dan training.",
      mottoText:
        "Het is een ruimte om te groeien, verbinden, vieren en jezelf te verheffen — fysiek en mentaal.",
    },
    community: {
      introTitle: "Voorbij training",
      introText:
        "Deze programma’s focussen op verbinding, reflectie, sociale inclusie en welzijn buiten traditionele sport.",
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
    },
    gallery: {
      text: "Echte foto’s van GIANTS-sessies en community-activiteiten.",
      one: "Community basketbalmomenten",
      two: "Training en bewegingssessie",
    },
    join: {
      text: "Word deel van de community, vraag naar sessies of werk met ons samen.",
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
      join: "Mitmachen",
    },
    sectionTitles: {
      about: "Bewegung durch Gemeinschaft",
      experiences: "Sport, Events & Erlebnisse",
      community: "Initiativen mit sozialer Wirkung",
      events: "Kommende & ausgewählte Sessions",
      gallery: "Community-Momente",
      join: "Werde Teil der Bewegung",
    },
    bar: "🔥 Kommendes GIANTS Geburtstagserlebnis • 14. Juni 2026 • Merksem",
    hero: {
      eyebrow: "DE CULT PRÄSENTIERT",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      text: "Eine Community-Initiative rund um Bewegung, Verbindung, Basketball, Wohlbefinden und immersive soziale Erlebnisse.",
      join: "Werde Teil der Bewegung",
      learn: "Mehr erfahren",
    },
    about: {
      p1: "GIANTS ist eine bewegungsorientierte Initiative, die Disziplin, Selbstvertrauen, Teamgeist und Wohlbefinden durch Sport und Community fördert.",
      p2: "Wir nutzen Basketball, funktionelles Training, soziale Events, Geburtstage und Community-Aktivitäten, um Menschen zu verbinden und zu stärken.",
      bullets: [
        "Für alle Niveaus zugänglich",
        "Community-orientiert",
        "Sport, Spiele & Erlebnisse",
        "Mentales und körperliches Wohlbefinden",
        "Offen für alle Altersgruppen",
      ],
    },
    experiences: {
      intro1:
        "GIANTS verbindet Sport, Bewegung, Spiele und Community-Energie zu besonderen Erlebnissen.",
      intro2:
        "Bezahlte Sessions und private/corporate Erlebnisse unterstützen inklusive Aktivitäten für vulnerable Gruppen.",
      accessTitle: "Community-Zugang",
      accessText:
        "Ausgewählte Aktivitäten können für Geflüchtete, Kinderheime und Community-Organisationen kostenlos angeboten werden, abhängig von Verfügbarkeit und Partnerunterstützung.",
      includes: "Enthält:",
      pricing: "Preise:",
      mottoTitle: "GIANTS ist mehr als Training.",
      mottoText:
        "Es ist ein Raum zum Wachsen, Verbinden, Feiern und Weiterkommen — körperlich und mental.",
    },
    community: {
      introTitle: "Über Training hinaus",
      introText:
        "Diese Programme fördern Verbindung, Reflexion, soziale Inklusion und Wohlbefinden außerhalb des klassischen Sports.",
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
    },
    gallery: {
      text: "Echte Fotos aus GIANTS-Sessions und Community-Aktivitäten.",
      one: "Community-Basketball-Momente",
      two: "Training und Bewegungssession",
    },
    join: {
      text: "Werde Teil der Community, frage nach Sessions oder arbeite mit uns zusammen.",
    },
    footer: {
      copyright: "© 2026 GIANTS",
    },
  },
};

export const experienceData = [
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
      "Custom pricing based on duration, location, and group size",
      "Trial session available",
    ],
  },
  {
    title: "Functional Training",
    description:
      "High-energy sessions focused on strength, conditioning, mobility, and discipline. Designed for all levels, from beginners to athletes.",
    includes: [
      "Full-body workouts",
      "Mobility & endurance training",
      "Personalized coaching",
      "Team-based challenges",
    ],
    pricing: ["Group: €10–€15", "1-on-1: €20–€80", "Monthly pass: €30–€50"],
  },
  {
    title: "Basketball Experience",
    description:
      "Skill-focused basketball experiences to improve ball handling, shooting, footwork, game IQ, and confidence.",
    includes: [
      "Technical drills",
      "Game situations",
      "Speed & agility work",
      "Conditioning circuits",
    ],
    pricing: ["Group: €12–€20", "Private: €30–€90", "Team: €100–€180"],
  },
  {
    title: "Team Building Experience",
    description:
      "Interactive team experiences using movement challenges and structured exercises to improve communication, trust, and performance.",
    includes: [
      "Team challenges",
      "Leadership exercises",
      "Communication drills",
      "Fun competitive activities",
    ],
    pricing: ["Custom pricing based on format, duration, and group size"],
  },
  {
    title: "Youth Basketball Bootcamp",
    description:
      "A structured summer program for U8–U10 focused on fundamentals, confidence, discipline, and enjoyment of the game.",
    includes: [
      "Daily skill development",
      "Fun competitions",
      "Team games",
      "Discipline & teamwork",
    ],
    pricing: ["Weekly camp: €40–€150 per child"],
  },
  {
    title: "Community Sport Events",
    description:
      "Organized events combining sport, music, food, and community engagement.",
    includes: ["Open workouts", "Basketball games", "Social experiences"],
    pricing: ["Entry: €5–€15", "Private hosting: custom pricing"],
  },
];

export const communityPrograms = [
  {
    title: "Old Age Home Workshops",
    description:
      "Gentle adapted sessions focused on mobility, coordination, and social interaction for elderly participants.",
    includes: [
      "Light movement exercises",
      "Coordination activities",
      "Social engagement",
    ],
    pricing: ["Session: €20–€60"],
  },
  {
    title: "Board Games Tournaments",
    description:
      "Relaxed competitive events encouraging strategy, connection, and fun.",
    includes: ["Strategy games", "Social tournaments", "Private events"],
    pricing: ["Entry: €5–€10", "Private event: €150–€300"],
  },
  {
    title: "Philosophy Talks & Sit-ins",
    description:
      "Open discussions exploring mindset, discipline, purpose, and personal growth.",
    includes: [
      "Mindset discussions",
      "Open conversations",
      "Community reflection",
    ],
    pricing: ["Entry: €5–€10", "Private group session: €100–€200"],
  },
  {
    title: "Debates & Discussion Events",
    description:
      "Structured debates encouraging communication, critical thinking, and perspective sharing.",
    includes: [
      "Debate sessions",
      "Group discussions",
      "Hosted community events",
    ],
    pricing: ["Entry: €5–€10", "Hosted event: €100–€250"],
  },
  {
    title: "Camping & Outdoor Experiences",
    description:
      "Immersive experiences combining nature, movement, reflection, and group bonding.",
    includes: [
      "Outdoor training",
      "Group activities",
      "Reflection & connection",
    ],
    pricing: ["€50–€150 per participant"],
  },
];