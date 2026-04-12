import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

const features = [
  "Accessible to all levels",
  "Focused on mental and physical wellbeing",
  "Social and inclusive",
  "Open to all ages",
  "Community-driven and non-profit",
];

const activities = [
  {
    title: "Basketball Drills",
    text: "We use basketball as a tool for discipline, teamwork, confidence, and fun.",
  },
  {
    title: "Functional Workouts",
    text: "Movement sessions designed to build strength, energy, and consistency for all levels.",
  },
  {
    title: "Community Events",
    text: "Twice-monthly events that bring people together through sport, connection, and wellbeing.",
  },
];

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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-zinc-700 bg-black">
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
            <Link href="#activities" className="transition hover:text-orange-400">
              Activities
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
      
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-950 via-black to-black px-6 py-24 text-center md:py-32">
        <div className="mb-8 flex justify-center">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border border-orange-500/40 bg-black shadow-lg shadow-orange-900/40 md:h-52 md:w-52">
            <Image
              src="/images/giants-logo.png"
              alt="GIANTS logo"
              fill
              unoptimized
              sizes="(max-width: 768px) 176px, 208px"
              className="object-contain scale-125"
              priority
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl">

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
            A community-based, non-profit initiative built around movement,
            connection, and wellbeing through basketball, functional workouts,
            and inclusive community events.
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

      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
      >
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">About GIANTS</h2>
          <p className="mt-6 leading-8 text-zinc-300">
            GIANTS is a community-based, non-profit initiative built around
            movement, connection, and wellbeing.
          </p>
          <p className="mt-4 leading-8 text-zinc-300">
            We use basketball, functional workouts, and social games as tools —
            not for competition, but for discipline, confidence, teamwork, and
            mental strength.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((item) => (
              <li key={item} className="text-zinc-200">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-zinc-800">
          <Image
            src="/images/about-us.jpg"
            alt="GIANTS community"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section id="activities"className="bg-zinc-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">What We Do</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <h3 className="text-xl font-semibold text-orange-300">
                  {activity.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-300">{activity.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Events & Activities</h2>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Regular community workouts, basketball-based activities, and
          twice-monthly events designed to bring people together.
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

      <section id="join" className="bg-orange-500 px-6 py-16 text-black md:py-20">
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
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white border border-zinc-700 transition hover:scale-105"
            >
              <FaWhatsapp className="text-green-500" size={22} />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/decult1111?igsh=YWh1ZmJjNWt5amZ5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white border border-zinc-700 transition hover:scale-105"
            >
              <FaInstagram className="text-fuchsia-400" size={22} />
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@de.cult?_r=1&_t=ZG-95OKtugVZLM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white border border-zinc-700 transition hover:scale-105"
            >
              <FaTiktok className="text-white" size={22} />
              TikTok
            </a>

            <a
              href="https://www.facebook.com/share/1c4oNWvWC9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white border border-zinc-700 transition hover:scale-105"
            >
              <FaFacebook className="text-blue-500" size={22} />
              Facebook
            </a>
          </div>
        </div>
      </section>
      
      <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-black">
                <Image
                  src="/images/giants-logo.png"
                  alt="GIANTS logo"
                  fill
                  unoptimized
                  sizes="80px"
                  className="object-contain scale-160"
                />
              </div>

              <div>
                <p className="text-xl font-bold tracking-[0.18em] text-white">
                  GIANTS
                </p>

                <p className="text-sm text-zinc-300">
                  Respect What Feeds Your Soul
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-2xl">
              <a
                href="https://chat.whatsapp.com/FbHUNvazjmz91fsWDUx3Qx?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 transition hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/decult1111?igsh=YWh1ZmJjNWt5amZ5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 transition hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@de.cult?_r=1&_t=ZG-95OKtugVZLM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>

              <a
                href="https://www.facebook.com/share/1c4oNWvWC9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 transition hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-zinc-800 pt-6 text-center text-sm leading-7 text-zinc-400">
            © 2026 GIANTS. Community-based non-profit initiative focused on movement,
            connection, and wellbeing.
          </div>
        </div>
      </footer>
      
    </main>
  );
}