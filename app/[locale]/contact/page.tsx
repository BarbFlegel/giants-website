import ContactForm from "../components/ContactForm";
import { translations, type Locale } from "../content";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = translations[locale];

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
          Contact
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Build with GIANTS
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          Book an experience, ask about an event, or start a collaboration.
        </p>

        <ContactForm />
      </div>
    </main>
  );
}