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
    <main className="min-h-screen bg-black pb-28 text-white md:pb-0">
      <Header locale={locale as Locale} t={t} />

      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-black px-4 py-12 md:px-6 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_60%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-180px)] max-w-6xl flex-col justify-center">
          <div className="mx-auto max-w-4xl text-left md:text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">
              {t.contact.label}
            </p>

            <h1 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
              {t.contact.title}
            </h1>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-zinc-300">
              {t.contact.text}
            </p>
          </div>

          <div className="mx-auto mt-10 w-full max-w-4xl">
            <ContactForm t={t} />
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}