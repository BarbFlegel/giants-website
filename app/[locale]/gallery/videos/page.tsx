import { notFound } from "next/navigation";
import VideosClient from "./VideosClient";
import { locales, type Locale } from "../../content";

type VideosPageProps = {
  params: Promise<{ locale: string }>;
};

export const metadata = {
  title: "Movement Videos | GIANTS",
  description:
    "Watch GIANTS movement, basketball, wellbeing and community experience videos.",
};

export default async function VideosPage({ params }: VideosPageProps) {
  const { locale: localeParam } = await params;
  if (!locales.includes(localeParam as Locale)) notFound();
  return <VideosClient locale={localeParam as Locale} />;
}
