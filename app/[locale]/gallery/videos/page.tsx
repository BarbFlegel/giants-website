import { notFound } from "next/navigation";
import VideosClient from "./VideosClient";
import { locales, type Locale } from "../../content";
import { getMedia } from "../../lib/sanity";

export const revalidate = 60;

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
  const cmsVideos = (await getMedia("video"))
    .filter((item) => item.mediaUrl)
    .map((item) => ({
      id: item._id,
      title: item.title,
      src: item.mediaUrl!,
      thumbnail: item.thumbnailUrl,
      external: item.mediaType === "externalVideo",
    }));
  return <VideosClient locale={localeParam as Locale} cmsVideos={cmsVideos} />;
}
