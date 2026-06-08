import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BirthdayEventSection from "../components/BirthdayEventSection";
import { locales, translations, type Locale } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Events | GIANTS",
  description:
    "Discover upcoming GIANTS events, birthday experiences and community moments.",
};

export default async function EventsPage({
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
      <BirthdayEventSection locale={locale as Locale} t={t} />
      <Footer t={t} />
    </main>
  );
}d