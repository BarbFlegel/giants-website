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

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">
            Collaborate
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">
            Contact GIANTS
          </h1>

          <p className="mt-5 max-w-2xl text-zinc-300">
            Book an experience, join a community session, or collaborate with
            GIANTS on movement, wellbeing and community impact.
          </p>

          <ContactForm />
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}