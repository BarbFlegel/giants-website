import Image from "next/image";
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
      <section className="bg-gradient-to-b from-orange-950 via-black to-black px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            GIANTS
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            Respect What Feeds Your Soul
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            A community-based, non-profit initiative built around movement,
            connection, and wellbeing.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#join"
              className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Join the Movement
            </a>
            <a
              href="#about"
              className="rounded-full border border-zinc-500 px-6 py-3 font-semibold text-white transition hover:border-white"
            >
              Learn More
            </a>
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

      <section className="bg-zinc-950 px-6 py-20">
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

      <section className="mx-auto max-w-6xl px-6 py-20">
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
              <div className="relative h-[380px] w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="bg-orange-500 px-6 py-20 text-black">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Join the Movement
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8">
            Connect with the community, hear about upcoming workouts,
            and join our events through our social channels.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://chat.whatsapp.com/FbHUNvazjmz91fsWDUx3Qx?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white border border-zinc-700 hover:scale-105 transition"
            >
              <FaWhatsapp className="text-green-500" size={22} />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/decult1111?igsh=YWh1ZmJjNWt5amZ5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white border border-zinc-700 hover:scale-105 transition"
            >
              <FaInstagram className="text-fuchsia-400" size={22} />
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@de.cult?_r=1&_t=ZG-95OKtugVZLM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white border border-zinc-700 hover:scale-105 transition"
            >
              <FaTiktok className="text-white" size={22} />
              TikTok
            </a>

            <a
              href="https://www.facebook.com/share/1c4oNWvWC9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white border border-zinc-700 hover:scale-105 transition"
            >
              <FaFacebook className="text-blue-500" size={22} />
              Facebook
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}