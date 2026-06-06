import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Letters | GIANTS",
  description:
    "Weekly GIANTS reflections on mindset, courage, discipline and community growth.",
};

export default async function LettersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const t = translations[locale as Locale];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale={locale as Locale} t={t} />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            {t.letters.label}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
            {t.letters.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {t.letters.description}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.letters.items.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-orange-500/30 bg-zinc-950 p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
                  {item.label}
                </p>

                <h2 className="mt-4 text-2xl font-black text-white">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}