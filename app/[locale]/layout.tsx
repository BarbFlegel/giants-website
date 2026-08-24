import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import {
  locales,
  translations,
  type Locale,
} from "./content";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_BE",
  fr: "fr_BE",
  nl: "nl_BE",
  de: "de_DE",
};

function isSupportedLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  const locale: Locale = isSupportedLocale(localeParam)
    ? localeParam
    : "en";

  const t = translations[locale];

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
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        nl: "/nl",
        de: "/de",
        "x-default": "/en",
      },
    },

    openGraph: {
      title: t.seo.siteTitle,
      description: t.seo.description,
      type: "website",
      siteName: "GIANTS",
      locale: openGraphLocales[locale],
      url: `/${locale}`,
      images: [
        {
          url: "/images/hero/giants-hero.png",
          width: 1200,
          height: 630,
          alt: "GIANTS community movement",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t.seo.siteTitle,
      description: t.seo.description,
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
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <>{children}</>;
}