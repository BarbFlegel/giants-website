import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VisionSection from "../components/VisionSection";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Vision | GIANTS",
  description:
    "Discover the GIANTS vision for movement, wellbeing, community and human potential.",
};

export default async function VisionPage({
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
      <VisionSection t={t} />
      <Footer t={t} />
    </main>
  );
}