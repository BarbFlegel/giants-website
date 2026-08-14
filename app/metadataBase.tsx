import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://giants-website.vercel.app"
  ),

  title: {
    default: "GIANTS",
    template: "%s | GIANTS",
  },

  description:
    "GIANTS creates movement, wellbeing and community experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}