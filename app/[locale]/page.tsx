import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const locales = ["en", "fr", "nl", "de"] as const;
type Locale = (typeof locales)[number];

const facebookUrl = "https://www.facebook.com/share/1GjwX7uSzo/";
const email = "giants.decult@gmail.com";

const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      community: "Community",
      events: "Events",
      gallery: "Gallery",
      join: "Join",
    },
    labels: {
      about: "About",
      services: "Services",
      community: "Community",
      events: "Events",
      gallery: "Gallery",
      join: "Join",
    },
    sectionTitles: {
      about: "Movement through community",
      services: "Programs & experiences",
      community: "Social impact initiatives",
      events: "Featured sessions",
      gallery: "Community moments",
      join: "Join the movement",
    },
    bar: "🔥 Recent GIANTS Community Session • 9 May 2026 • Antwerp",
    hero: {
      eyebrow: "DE CULT PRESENTS",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      text: "A community-based initiative built around movement, connection, basketball, wellbeing, and inclusive social experiences.",
      join: "Join the Movement",
      learn: "Learn More",
    },
    about: {
      p1: "GIANTS is a movement-driven initiative focused on building discipline, confidence, teamwork, and wellbeing through sport and community.",
      p2: "We use basketball, functional training, social events, and community activities as tools to connect and uplift people from all backgrounds.",
      bullets: [
        "Accessible to all levels",
        "Community-focused",
        "Inclusive and social",
        "Mental & physical wellbeing",
        "Open to all ages",
      ],
    },
    services: {
      intro1: "GIANTS combines community access with professional services.",
      intro2:
        "Paid sessions and corporate experiences help support inclusive activities for vulnerable groups.",
      accessTitle: "Community access",
      accessText:
        "Selected activities can be offered free of charge for refugees, children’s homes, and community organizations, depending on availability and partnership support.",
      includes: "Includes:",
      pricing: "Pricing:",
      mottoTitle: "GIANTS is more than training.",
      mottoText:
        "It’s a space to grow, connect, and elevate — physically and mentally.",
    },
    community: {
      introTitle: "Beyond training",
      introText:
        "These programs focus on connection, reflection, social inclusion, and wellbeing outside of traditional sport.",
    },
    events: {
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
      services: "Services",
      community: "Impact",
      events: "Events",
      gallery: "Galerie",
      join: "Contact",
    },
    labels: {
      about: "À propos",
      services: "Services",
      community: "Communauté",
      events: "Événements",
      gallery: "Galerie",
      join: "Rejoindre",
    },
    sectionTitles: {
      about: "Le mouvement par la communauté",
      services: "Programmes & expériences",
      community: "Initiatives à impact social",
      events: "Sessions en avant",
      gallery: "Moments communautaires",
      join: "Rejoindre le mouvement",
    },
    bar: "🔥 Dernière session GIANTS • 9 mai 2026 • Anvers",
    hero: {
      eyebrow: "DE CULT PRÉSENTE",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      text: "Une initiative communautaire construite autour du mouvement, de la connexion, du basketball, du bien-être et d’expériences sociales inclusives.",
      join: "Rejoindre le mouvement",
      learn: "En savoir plus",
    },
    about: {
      p1: "GIANTS est une initiative portée par le mouvement, axée sur la discipline, la confiance, l’esprit d’équipe et le bien-être à travers le sport et la communauté.",
      p2: "Nous utilisons le basketball, l’entraînement fonctionnel, les événements sociaux et les activités communautaires comme outils pour connecter et soutenir des personnes de tous horizons.",
      bullets: [
        "Accessible à tous les niveaux",
        "Axé sur la communauté",
        "Inclusif et social",
        "Bien-être mental et physique",
        "Ouvert à tous les âges",
      ],
    },
    services: {
      intro1: "GIANTS combine l’accès communautaire avec des services professionnels.",
      intro2:
        "Les sessions payantes et expériences d’entreprise aident à soutenir des activités inclusives pour les groupes vulnérables.",
      accessTitle: "Accès communautaire",
      accessText:
        "Certaines activités peuvent être proposées gratuitement aux réfugiés, foyers d’enfants et organisations communautaires, selon les disponibilités et le soutien des partenaires.",
      includes: "Inclus :",
      pricing: "Tarifs :",
      mottoTitle: "GIANTS est plus qu’un entraînement.",
      mottoText:
        "C’est un espace pour grandir, se connecter et s’élever — physiquement et mentalement.",
    },
    community: {
      introTitle: "Au-delà de l’entraînement",
      introText:
        "Ces programmes mettent l’accent sur la connexion, la réflexion, l’inclusion sociale et le bien-être au-delà du sport traditionnel.",
    },
    events: {
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
      services: "Diensten",
      community: "Community",
      events: "Events",
      gallery: "Galerij",
      join: "Meedoen",
    },
    labels: {
      about: "Over",
      services: "Diensten",
      community: "Community",
      events: "Events",
      gallery: "Galerij",
      join: "Meedoen",
    },
    sectionTitles: {
      about: "Beweging via community",
      services: "Programma’s & ervaringen",
      community: "Sociale impact initiatieven",
      events: "Uitgelichte sessies",
      gallery: "Community momenten",
      join: "Word deel van de beweging",
    },
    bar: "🔥 Recente GIANTS Community Session • 9 mei 2026 • Antwerpen",
    hero: {
      eyebrow: "DE CULT PRESENTEERT",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      text: "Een community-initiatief rond beweging, verbinding, basketbal, welzijn en inclusieve sociale ervaringen.",
      join: "Word deel van de beweging",
      learn: "Meer info",
    },
    about: {
      p1: "GIANTS is een bewegingsgericht initiatief dat discipline, zelfvertrouwen, teamwork en welzijn opbouwt via sport en community.",
      p2: "We gebruiken basketbal, functionele training, sociale events en community-activiteiten om mensen met verschillende achtergronden te verbinden en te versterken.",
      bullets: [
        "Toegankelijk voor alle niveaus",
        "Community-gericht",
        "Inclusief en sociaal",
        "Mentaal en fysiek welzijn",
        "Open voor alle leeftijden",
      ],
    },
    services: {
      intro1: "GIANTS combineert community-toegang met professionele diensten.",
      intro2:
        "Betaalde sessies en corporate ervaringen helpen inclusieve activiteiten voor kwetsbare groepen te ondersteunen.",
      accessTitle: "Community access",
      accessText:
        "Geselecteerde activiteiten kunnen gratis worden aangeboden aan vluchtelingen, kinderhuizen en community-organisaties, afhankelijk van beschikbaarheid en partnersteun.",
      includes: "Inbegrepen:",
      pricing: "Prijzen:",
      mottoTitle: "GIANTS is meer dan training.",
      mottoText:
        "Het is een ruimte om te groeien, verbinden en jezelf te verheffen — fysiek en mentaal.",
    },
    community: {
      introTitle: "Voorbij training",
      introText:
        "Deze programma’s focussen op verbinding, reflectie, sociale inclusie en welzijn buiten traditionele sport.",
    },
    events: {
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
      services: "Services",
      community: "Community",
      events: "Events",
      gallery: "Galerie",
      join: "Mitmachen",
    },
    labels: {
      about: "Über uns",
      services: "Services",
      community: "Community",
      events: "Events",
      gallery: "Galerie",
      join: "Mitmachen",
    },
    sectionTitles: {
      about: "Bewegung durch Gemeinschaft",
      services: "Programme & Erlebnisse",
      community: "Initiativen mit sozialer Wirkung",
      events: "Ausgewählte Sessions",
      gallery: "Community-Momente",
      join: "Werde Teil der Bewegung",
    },
    bar: "🔥 Letzte GIANTS Community Session • 9. Mai 2026 • Antwerpen",
    hero: {
      eyebrow: "DE CULT PRÄSENTIERT",
      title: "GIANTS",
      subtitle: "Respect What Feeds Your Soul",
      text: "Eine Community-Initiative rund um Bewegung, Verbindung, Basketball, Wohlbefinden und inklusive soziale Erlebnisse.",
      join: "Werde Teil der Bewegung",
      learn: "Mehr erfahren",
    },
    about: {
      p1: "GIANTS ist eine bewegungsorientierte Initiative, die Disziplin, Selbstvertrauen, Teamgeist und Wohlbefinden durch Sport und Community fördert.",
      p2: "Wir nutzen Basketball, funktionelles Training, soziale Events und Community-Aktivitäten, um Menschen mit unterschiedlichen Hintergründen zu verbinden und zu stärken.",
      bullets: [
        "Für alle Niveaus zugänglich",
        "Community-orientiert",
        "Inklusiv und sozial",
        "Mentales und körperliches Wohlbefinden",
        "Offen für alle Altersgruppen",
      ],
    },
    services: {
      intro1: "GIANTS verbindet Community-Zugang mit professionellen Services.",
      intro2:
        "Bezahlte Sessions und Corporate-Erlebnisse unterstützen inklusive Aktivitäten für vulnerable Gruppen.",
      accessTitle: "Community-Zugang",
      accessText:
        "Ausgewählte Aktivitäten können für Geflüchtete, Kinderheime und Community-Organisationen kostenlos angeboten werden, abhängig von Verfügbarkeit und Partnerunterstützung.",
      includes: "Enthält:",
      pricing: "Preise:",
      mottoTitle: "GIANTS ist mehr als Training.",
      mottoText:
        "Es ist ein Raum zum Wachsen, Verbinden und Weiterkommen — körperlich und mental.",
    },
    community: {
      introTitle: "Über Training hinaus",
      introText:
        "Diese Programme fördern Verbindung, Reflexion, soziale Inklusion und Wohlbefinden außerhalb des klassischen Sports.",
    },
    events: {
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

const serviceData = [
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
    title: "Basketball Skills & Conditioning",
    description:
      "Skill-focused training to improve ball handling, shooting, footwork, game IQ, and physical conditioning.",
    includes: [
      "Technical drills",
      "Game situations",
      "Speed & agility work",
      "Conditioning circuits",
    ],
    pricing: ["Group: €12–€20", "Private: €30–€90", "Team: €100–€180"],
  },
  {
    title: "Corporate Team Building",
    description:
      "Interactive team experiences using physical challenges and structured exercises to improve communication, trust, and performance.",
    includes: [
      "Team challenges",
      "Leadership exercises",
      "Communication drills",
      "Fun competitive activities",
    ],
    pricing: ["60–90 min: €600–€1200", "Half-day: €1200–€2500"],
  },
  {
    title: "Company Tournaments",
    description:
      "Medium-level competitive tournaments designed for companies to engage teams through sport, competition, and collaboration.",
    includes: [
      "Tournament setup",
      "Team coordination",
      "Game facilitation",
      "Energy-driven environment",
    ],
    pricing: ["Half-day: €1200–€2500", "Full-day: €2500–€5000"],
  },
  {
    title: "Youth Basketball Bootcamp",
    description:
      "A structured summer program for U8–U10 focused on fundamentals, confidence, and enjoyment of the game.",
    includes: [
      "Daily skill development",
      "Fun competitions",
      "Team games",
      "Discipline & teamwork",
    ],
    pricing: ["Weekly camp: €40–€150 per child"],
  },
  {
    title: "Sports & Community Events",
    description:
      "Organized events combining sport, music, food, and community engagement.",
    includes: ["Open workouts", "Basketball games", "Social experiences"],
    pricing: ["Entry: €5–€15", "Private hosting: €300–€2000"],
  },
];

const communityPrograms = [
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

function SectionHeader({
  label,
  title,
  description,
  dark = true,
}: {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center md:mx-0 md:text-left">
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

function ServiceCard({
  title,
  description,
  includes,
  pricing,
  labels,
}: {
  title: string;
  description: string;
  includes: string[];
  pricing: string[];
  labels: { includes: string; pricing: string };
}) {
  return (
    <div className="group flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]">
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

      <div className="mt-5 rounded-2xl bg-black/50 p-4">
        <p className="font-semibold text-white">{labels.pricing}</p>

        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          {pricing.map((price) => (
            <li key={price}>{price}</li>
          ))}
        </ul>
      </div>
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

  const events = [
    {
      title: t.events.session,
      image: "/images/giants-community-session.png",
      date: t.events.past,
      time: "13:00 – 15:00",
      location: "Sporthal Parkloods — Basketball Court 1",
    },
    { title: t.events.afro, image: "/images/afro-bounce.png" },
    { title: t.events.bbq, image: "/images/bbq-party.png" },
    { title: t.events.workout, image: "/images/workout-session.png" },
  ];

  const galleryImages = [
    { title: t.gallery.one, image: "/images/gallery-child-ball.jpg" },
    { title: t.gallery.two, image: "/images/gallery-basketball-training.jpg" },
  ];

  const langLink = (targetLocale: Locale) => `/${targetLocale}`;

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

          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-zinc-100 sm:text-base lg:text-lg">
              <Link href={`/${locale}#about`} className="transition hover:text-orange-400">
                {t.nav.about}
              </Link>

              <Link href={`/${locale}#services`} className="transition hover:text-orange-400">
                {t.nav.services}
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

      <section className="relative overflow-hidden bg-gradient-to-b from-orange-950 via-black to-black px-6 py-16 text-center md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex justify-center">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border border-orange-500/60 bg-black shadow-[0_0_60px_rgba(249,115,22,0.45)] md:h-52 md:w-52">
              <Image
                src="/images/giants-logo.png"
                alt="GIANTS logo"
                fill
                unoptimized
                priority
                sizes="(max-width: 768px) 176px, 208px"
                className="object-contain scale-150"
              />
            </div>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-orange-300 md:text-base">
            {t.hero.eyebrow}
          </p>

          <h1 className="text-6xl font-extrabold tracking-[0.12em] text-white md:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-orange-300 md:text-3xl">
            {t.hero.subtitle}
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            {t.hero.text}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`/${locale}#join`}
              className="flex min-h-14 w-72 items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] transition hover:scale-105 hover:bg-orange-400 sm:w-64">
              {t.hero.join}
            </Link>

            <Link
              href={`/${locale}#about`}
              className="flex min-h-14 w-72 items-center justify-center rounded-full border border-zinc-500 px-8 py-4 text-center font-semibold text-white transition hover:border-white sm:w-64">
              {t.hero.learn}
            </Link>
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

        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-zinc-800">
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
        id="services"
        className="scroll-mt-40 bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-20"
      >
        <div className="mx-auto max-w-6xl text-center md:text-left">
          <SectionHeader
            label={t.labels.services}
            title={t.sectionTitles.services}
          />

          <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-zinc-300 md:mx-0">
            {t.services.intro1}
            <br className="hidden md:block" />
            {t.services.intro2}
          </p>

          <div className="mx-auto mt-6 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-5 text-orange-100 md:mx-0">
            <p className="font-semibold text-orange-300">
              {t.services.accessTitle}
            </p>

            <p className="mt-2 leading-7 text-zinc-300">
              {t.services.accessText}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                labels={{
                  includes: t.services.includes,
                  pricing: t.services.pricing,
                }}
              />
            ))}
          </div>

          <div
            id="community"
            className="scroll-mt-40 mt-24 border-t border-orange-500/30 pt-16"
          >
            <div className="mb-10 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-6 text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
                {t.community.introTitle}
              </p>

              <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-zinc-300 md:mx-0">
                {t.community.introText}
              </p>
            </div>

            <SectionHeader
              label={t.labels.community}
              title={t.sectionTitles.community}
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communityPrograms.map((program) => (
                <ServiceCard
                  key={program.title}
                  {...program}
                  labels={{
                    includes: t.services.includes,
                    pricing: t.services.pricing,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-orange-500/30 bg-orange-500 p-8 text-center text-black shadow-[0_0_35px_rgba(249,115,22,0.25)]">
            <h3 className="text-2xl font-bold">{t.services.mottoTitle}</h3>

            <p className="mx-auto mt-3 max-w-2xl leading-8">
              {t.services.mottoText}
            </p>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="scroll-mt-40 mx-auto max-w-6xl px-6 py-20 text-center md:text-left"
      >
        <SectionHeader
          label={t.labels.events}
          title={t.sectionTitles.events}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 text-left transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]"
            >
              <div className="relative h-[520px] w-full bg-black">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{event.title}</h3>

                {"date" in event && event.date && (
                  <div className="mt-3 space-y-1 text-sm text-zinc-300">
                    <p className="text-orange-300">
                      {event.date}
                      {"time" in event && event.time ? ` • ${event.time}` : ""}
                    </p>

                    {"location" in event && event.location && (
                      <p>{event.location}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="scroll-mt-40 bg-zinc-950 px-6 py-20 text-center md:text-left"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label={t.labels.gallery}
            title={t.sectionTitles.gallery}
            description={t.gallery.text}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {galleryImages.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-black text-left transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]"
              >
                <div className="relative h-[360px] w-full">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="join"
        className="scroll-mt-40 bg-gradient-to-b from-orange-500 to-orange-600 px-6 py-14 text-black sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl text-center md:text-left">
            <SectionHeader
              label={t.labels.join}
              title={t.sectionTitles.join}
              description={t.join.text}
              dark={false}
            />

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xl sm:text-2xl md:justify-start">              <a
                href="https://chat.whatsapp.com/FbHUNvazjmz91fsWDUx3Qx?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-black p-3 sm:p-4 text-green-500 transition hover:scale-110"
              >
                <FaWhatsapp />
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="rounded-full bg-black p-4 text-orange-300 transition hover:scale-110"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://www.instagram.com/decult1111?igsh=YWh1ZmJjNWt5amZ5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-black p-3 sm:p-4 text-fuchsia-400 transition hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@de.cult?_r=1&_t=ZG-95OKtugVZLM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="rounded-full bg-black p-3 sm:p-4 text-white transition hover:scale-110"
              >
                <FaTiktok />
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-black p-3 sm:p-4 text-blue-500 transition hover:scale-110"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-black">
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
              <p className="text-2xl font-bold tracking-[0.2em]">GIANTS</p>

              <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
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