import { notFound } from "next/navigation";

import HomeClient from "./HomeClient";
import { locales, type Locale } from "./content";
import { getFeaturedEvent } from "./lib/sanity";

export const revalidate = 60;

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

  const validLocale = locale as Locale;
  const featuredEvent = await getFeaturedEvent();

  return <HomeClient locale={validLocale} featuredEvent={featuredEvent} />;
}
