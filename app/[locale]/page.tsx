export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    title: "GIANTS | Movement, Community & Wellbeing",
    description:
      "GIANTS creates movement experiences, community programmes, events and social impact initiatives through sport, wellbeing and connection.",
    openGraph: {
      title: "GIANTS | Movement, Community & Wellbeing",
      description:
        "Unlock human potential through movement, community, wellbeing and social impact.",
      images: ["/images/hero-giants-premium.jpg"],
    },
  };
}