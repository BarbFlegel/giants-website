import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GIANTS | Respect What Feeds Your Soul",
  description:
    "GIANTS is a community-based, non-profit initiative built around movement, connection, and wellbeing.",
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