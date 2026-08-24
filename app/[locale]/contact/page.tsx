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
    <main className="giants-content-page">
      <Header locale={currentLocale} t={t} />

      <section className="giants-contact-page">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hero-giants-premium.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black" />

        <div className="giants-content-container relative">
          <p className="giants-eyebrow">
            {t.contact.label}
          </p>

          <h1 className="giants-page-hero-title">
            {t.contact.title}
          </h1>

          <p className="giants-page-hero-copy">
            {t.contact.text}
          </p>

          <div className="giants-contact-container">
            <ContactForm t={t} locale={currentLocale} />
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
