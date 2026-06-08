import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Moments | GIANTS",
  description:
    "Explore GIANTS community photos, movement videos and shared moments.",
};

export default async function MomentsPage({
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
      <GallerySection locale={locale as Locale} t={t} />
      <Footer t={t} />
    </main>
  );
}