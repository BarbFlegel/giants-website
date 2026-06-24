import { notFound } from "next/navigation";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const currentLocale = locale as Locale;
  const t = translations[currentLocale];

  return (
    <main className="min-h-screen bg-black pb-24 text-white md:pb-0">
      <Header locale={currentLocale} t={t} />

      <section className="relative overflow-hidden bg-black px-4 py-10 md:px-6 md:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hero-giants-premium.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">
            {t.contact.label}
          </p>

          <h1 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-6xl">
            {t.contact.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
            {t.contact.text}
          </p>

          <div className="mt-8 max-w-4xl">
            <ContactForm t={t} />
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}