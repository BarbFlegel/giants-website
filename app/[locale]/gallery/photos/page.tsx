import { notFound } from "next/navigation";
import PhotosClient from "./PhotosClient";
import { locales, type Locale } from "../../content";
import { getMedia } from "../../lib/sanity";

export const revalidate = 60;

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
  const cmsPhotos = (await getMedia("photo"))
    .filter((item) => item.mediaUrl)
    .map((item) => ({ id: item._id, image: item.mediaUrl!, title: item.title }));
  return <PhotosClient locale={localeParam as Locale} cmsPhotos={cmsPhotos} />;
}
