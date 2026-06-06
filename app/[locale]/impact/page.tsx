import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommunitySection from "../components/CommunitySection";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Impact | GIANTS",
  description:
    "Explore GIANTS social impact, community programmes and wellbeing initiatives.",
};

export default async function ImpactPage({
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
      <CommunitySection locale={locale as Locale} t={t} />
      <Footer t={t} />
    </main>
  );
}