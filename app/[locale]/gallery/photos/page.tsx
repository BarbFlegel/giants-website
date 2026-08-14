import { notFound } from "next/navigation";
import PhotosClient from "./PhotosClient";
import { locales, type Locale } from "../../content";

type PhotosPageProps = {
  params: Promise<{ locale: string }>;
};

export const metadata = {
  title: "Community Photos | GIANTS",
  description:
    "Explore real moments from GIANTS experiences, events and community sessions.",
};

export default async function PhotosPage({ params }: PhotosPageProps) {
  const { locale: localeParam } = await params;
  if (!locales.includes(localeParam as Locale)) notFound();
  return <PhotosClient locale={localeParam as Locale} />;
}
