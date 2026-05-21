import { notFound } from "next/navigation";
import HomeClient from "./HomeClient";
import { locales, type Locale } from "./content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <HomeClient locale={locale as Locale} />;
}