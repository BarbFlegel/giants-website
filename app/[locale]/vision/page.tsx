import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function VisionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const currentLocale = locale as Locale;
  const t = translations[currentLocale];

  const pillars = [
    {
      title: "Experience",
      text: "Creating moments where sport, movement and community become memorable.",
    },
    {
      title: "Community",
      text: "Building connection, confidence and belonging through shared action.",
    },
    {
      title: "Growth",
      text: "Strengthening body, mindset, discipline and purpose together.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale={currentLocale} t={t} />

      <PageHero
        label={t.vision.label}
        title={t.vision.title}
        text={t.vision.text}
        image="community"
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 transition hover:border-orange-500/60"
            >
              <h2 className="text-xl font-black text-white">{item.title}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
            </article>
          ))}
        </div>
      </PageHero>

      <Footer t={t} />
    </main>
  );
}