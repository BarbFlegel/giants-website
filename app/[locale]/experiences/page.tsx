import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExperiencesSection from "../components/ExperiencesSection";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Experiences | GIANTS",
  description:
    "Explore GIANTS sport, movement, community and wellbeing experiences.",
};

export default async function ExperiencesPage({
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
      <ExperiencesSection locale={locale as Locale} t={t} />
      <Footer t={t} />
    </main>
  );
}