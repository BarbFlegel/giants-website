import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommunitySection from "../components/CommunitySection";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ImpactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const currentLocale = locale as Locale;
  const t = translations[currentLocale];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale={currentLocale} t={t} />

      <div className="pt-[72px]">
        <CommunitySection locale={currentLocale} t={t} />
      </div>

      <Footer t={t} />
    </main>
  );
}