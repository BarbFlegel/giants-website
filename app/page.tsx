import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const events = [
  {
    title: "Afro Beats & Bounce",
    image: "/images/afro-bounce.png",
  },
  {
    title: "Workout & BBQ Party",
    image: "/images/bbq-party.png",
  },
  {
    title: "Community Workout",
    image: "/images/workout-session.png",
  },
];

const services = [
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
    includes: ["Outdoor training", "Group activities", "Reflection & connection"],
    pricing: ["€50–€150 per participant"],
  },
];

function ServiceCard({
  title,
  description,
  includes,
  pricing,
}: {
  title: string;
  description: string;
  includes: string[];
  pricing: string[];
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold text-orange-300">{title}</h3>

      <p className="mt-4 leading-7 text-zinc-300">{description}</p>

      <div className="mt-5">
        <p className="font-semibold text-white">Includes:</p>

        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          {includes.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 rounded-2xl bg-black/50 p-4">
        <p className="font-semibold text-white">Pricing:</p>

        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          {pricing.map((price) => (
            <li key={price}>{price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-black">
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
              <p className="text-2xl font-bold tracking-[0.2em] text-white">
                GIANTS
              </p>

              <p className="text-sm tracking-[0.25em] text-orange-300">
                MOVEMENT · COMMUNITY · WELLBEING
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-lg font-medium text-zinc-200 md:flex">
            <Link href="#about" className="transition hover:text-orange-400">
              About
            </Link>

            <Link
              href="#activities"
              className="transition hover:text-orange-400"
            >
              Activities
            </Link>

            <Link
              href="#services"
              className="transition hover:text-orange-400"
            >
              Services
            </Link>

            <Link href="#events" className="transition hover:text-orange-400">
              Events
            </Link>

            <Link href="#join" className="transition hover:text-orange-400">
              Join
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-950 via-black to-black px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex justify-center">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border border-orange-500/40 bg-black shadow-lg shadow-orange-900/40 md:h-52 md:w-52">
              <Image
                src="/images/giants-logo.png"
                alt="GIANTS logo"
                fill
                unoptimized
                sizes="(max-width: 768px) 176px, 208px"
                className="object-contain scale-150"
                priority
              />
            </div>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-orange-300 md:text-base">
            DE CULT PRESENTS
          </p>

          <h1 className="text-6xl font-extrabold tracking-[0.12em] text-white md:text-7xl lg:text-8xl">
            GIANTS
          </h1>

          <p className="mt-4 text-2xl font-semibold text-orange-300 md:text-3xl">
            Respect What Feeds Your Soul
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            A community-based initiative built around movement, connection,
            basketball, wellbeing, and inclusive social experiences.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#join"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Join the Movement
            </Link>

            <Link
              href="#about"
              className="rounded-full border border-zinc-500 px-8 py-4 font-semibold text-white transition hover:border-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
      >
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">About GIANTS</h2>

          <p className="mt-6 leading-8 text-zinc-300">
            GIANTS is a movement-driven initiative focused on building
            discipline, confidence, teamwork, and wellbeing through sport and
            community.
          </p>

          <p className="mt-4 leading-8 text-zinc-300">
            We use basketball, functional training, social events, and
            community activities as tools to connect and uplift people from all
            backgrounds.
          </p>

          <ul className="mt-8 space-y-3 text-zinc-200">
            <li>• Accessible to all levels</li>
            <li>• Community-focused</li>
            <li>• Inclusive and social</li>
            <li>• Mental & physical wellbeing</li>
            <li>• Open to all ages</li>
          </ul>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-zinc-800">
          <Image
            src="/images/about-us.jpg"
            alt="About GIANTS"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="bg-zinc-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">What We Do</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-orange-300">
                Basketball
              </h3>

              <p className="mt-4 leading-7 text-zinc-300">
                Basketball sessions focused on discipline, teamwork, confidence,
                and enjoyment of the game.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-orange-300">
                Functional Training
              </h3>

              <p className="mt-4 leading-7 text-zinc-300">
                High-energy movement sessions designed to build strength,
                mobility, endurance, and consistency.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold text-orange-300">
                Community Events
              </h3>

              <p className="mt-4 leading-7 text-zinc-300">
                Sport, music, food, and social experiences bringing people
                together through movement and connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-black px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Training, events, and community programs
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-300">
            GIANTS combines community access with professional services.
            <br className="hidden md:block" />
            Paid sessions and corporate experiences help support inclusive
            activities for vulnerable groups.
          </p>

          <div className="mt-6 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-5 text-orange-100">
            <p className="font-semibold text-orange-300">Community access</p>

            <p className="mt-2 leading-7 text-zinc-300">
              Selected activities can be offered free of charge for refugees,
              children’s homes, and community organizations, depending on
              availability and partnership support.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                includes={service.includes}
                pricing={service.pricing}
              />
            ))}
          </div>

          <div className="mt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
              Community & Social Programs
            </p>

            <h3 className="mt-3 text-3xl font-bold">Connection beyond sport</h3>

            <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
              GIANTS also creates social and wellbeing-focused experiences
              designed to encourage connection, reflection, inclusion, and
              personal growth.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communityPrograms.map((program) => (
                <ServiceCard
                  key={program.title}
                  title={program.title}
                  description={program.description}
                  includes={program.includes}
                  pricing={program.pricing}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-orange-500/30 bg-orange-500 p-8 text-center text-black">
            <h3 className="text-2xl font-bold">
              GIANTS is more than training.
            </h3>

            <p className="mx-auto mt-3 max-w-2xl leading-8">
              It’s a space to grow, connect, and elevate — physically and
              mentally.
            </p>

            <a
              href="#join"
              className="mt-6 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">
          Events & Activities
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-300">
          Regular community workouts, basketball-based activities, and social
          experiences designed to bring people together.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
            >
              <div className="relative h-[380px] w-full bg-black">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN */}
      <section
        id="join"
        className="bg-orange-500 px-6 py-16 text-black md:py-20"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/70">
            Join the Community
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Train, connect, and grow with GIANTS
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/85 md:text-lg">
            Connect with the community, hear about upcoming workouts, and join
            inclusive events built around movement, energy, and wellbeing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://chat.whatsapp.com/FbHUNvazjmz91fsWDUx3Qx?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-700 bg-black px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              <FaWhatsapp className="text-green-500" size={22} />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/decult1111?igsh=YWh1ZmJjNWt5amZ5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-700 bg-black px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              <FaInstagram className="text-fuchsia-400" size={22} />
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@de.cult?_r=1&_t=ZG-95OKtugVZLM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-700 bg-black px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              <FaTiktok className="text-white" size={22} />
              TikTok
            </a>

            <a
              href="https://www.facebook.com/share/1c4oNWvWC9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-700 bg-black px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              <FaFacebook className="text-blue-500" size={22} />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-black">
                <Image
                  src="/images/giants-logo.png"
                  alt="GIANTS logo"
                  fill
                  unoptimized
                  sizes="96px"
                  className="object-contain scale-160"
                />
              </div>

              <div>
                <p className="text-xl font-bold tracking-[0.18em] text-white">
                  GIANTS
                </p>

                <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-300">
                  GIANTS is more than training. It’s a space to grow, connect,
                  and elevate — physically and mentally.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-2xl">
              <a
                href="https://chat.whatsapp.com/FbHUNvazjmz91fsWDUx3Qx?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GIANTS WhatsApp community"
                className="text-green-500 transition hover:scale-110"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/decult1111?igsh=YWh1ZmJjNWt5amZ5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GIANTS Instagram"
                className="text-fuchsia-400 transition hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@de.cult?_r=1&_t=ZG-95OKtugVZLM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GIANTS TikTok"
                className="text-white transition hover:scale-110"
              >
                <FaTiktok />
              </a>

              <a
                href="https://www.facebook.com/share/1c4oNWvWC9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GIANTS Facebook"
                className="text-blue-500 transition hover:scale-110"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-zinc-800 pt-6 text-center text-sm leading-7 text-zinc-400">
            © 2026 GIANTS. Community-based initiative focused on movement,
            connection, and wellbeing.
          </div>
        </div>
      </footer>
    </main>
  );
}