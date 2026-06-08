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

  const t = translations[locale as Locale];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale={locale as Locale} t={t} />

      <section className="relative overflow-hidden bg-black px-4 py-12 md:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">
            {t.contact.label}
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            {t.contact.title}
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-300">
            {t.contact.text}
          </p>

          <div className="mt-10 max-w-4xl">
            <ContactForm t={t} />
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}