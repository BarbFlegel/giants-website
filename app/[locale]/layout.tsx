import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  getTranslations,
  isLocale,
  locales,
  type Locale,
} from "./lib/i18n";

type LocaleLayoutProps = {
  children: ReactNode;

  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  const locale: Locale = isLocale(localeParam)
    ? localeParam
    : "en";

  const t = getTranslations(locale);

  return {
    title: {
      default: t.seo.siteTitle,
      template: "%s | GIANTS",
    },

    description: t.seo.description,

    keywords: [
      "GIANTS",
      "basketball Belgium",
      "basketball Brussels",
      "community sport",
      "functional training",
      "wellbeing",
      "basketball training",
      "community events",
      "sports experiences",
    ],

    alternates: {
      languages: {
        en: "/en",
        fr: "/fr",
        nl: "/nl",
        de: "/de",
      },
    },

    openGraph: {
      title: t.seo.siteTitle,
      description: t.seo.description,
      type: "website",
      siteName: "GIANTS",

      locale:
        locale === "fr"
          ? "fr_BE"
          : locale === "nl"
            ? "nl_BE"
            : locale === "de"
              ? "de_DE"
              : "en_BE",

      images: [
        {
          url: "/images/hero/giants-hero.png",
          width: 1200,
          height: 630,
          alt: "GIANTS",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t.seo.siteTitle,
      description: t.seo.description,

      // Keep the same real image extension as Open Graph.
      images: ["/images/hero/giants-hero.png"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  /*
   * We validate the locale here but DO NOT create
   * another <html> or <body>.
   *
   * Those belong only in app/layout.tsx.
   */
  const locale: Locale = isLocale(localeParam)
    ? localeParam
    : "en";

  void locale;

  return <>{children}</>;
}