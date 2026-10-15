"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Locale, Translation } from "../content/types";

const bookingCopy = {
  en: {
    request: "Request type",
    experience: "Book an experience",
    birthday: "Birthday event",
    community: "Join a community session",
    corporate: "Team / corporate experience",
    partnership: "Partnership / collaboration",
    development: "Discuss a personal development programme",
    training: "1-on-1 Training",
    movement: "Movement & Reflection Session",
    talking: "Talk & Reflection Session",
    movementHelp:
      "A guided session combining gentle movement, conversation and reflection to explore emotions, ease everyday tension and develop self-awareness. Non-clinical support.",
    date: "Preferred date",
    time: "Preferred time",
    availability:
      "This is a booking request. We will confirm availability and session details with you.",
    quick: "Prefer a quick conversation?",
    more: "+ Additional details",
    less: "Hide additional details",
    location: "Location / city",
    group: "Group size / age group",
    sending: "Sending…",
    error:
      "Your message could not be sent. Please try again or contact GIANTS via WhatsApp.",
    notConfigured:
      "Email is not configured on this deployment yet. Please contact GIANTS via WhatsApp.",
  },
  fr: {
    request: "Type de demande",
    experience: "Réserver une expérience",
    birthday: "Anniversaire",
    community: "Rejoindre une séance communautaire",
    corporate: "Expérience d’équipe / entreprise",
    partnership: "Partenariat / collaboration",
    development: "Discuter d’un programme de développement personnel",
    training: "Entraînement individuel",
    movement: "Séance Mouvement & Réflexion",
    talking: "Séance Échange & Réflexion",
    movementHelp:
      "Une séance guidée associant mouvement doux, échange et réflexion pour explorer ses émotions, apaiser les tensions du quotidien et développer la connaissance de soi. Accompagnement non clinique.",
    date: "Date souhaitée",
    time: "Heure souhaitée",
    availability:
      "Il s’agit d’une demande de réservation. Nous confirmerons les disponibilités et les modalités avec vous.",
    quick: "Vous préférez un échange rapide ?",
    more: "+ Informations complémentaires",
    less: "Masquer les informations complémentaires",
    location: "Lieu / ville",
    group: "Taille du groupe / tranche d’âge",
    sending: "Envoi…",
    error:
      "Votre message n’a pas pu être envoyé. Réessayez ou contactez GIANTS sur WhatsApp.",
    notConfigured:
      "L’envoi d’e-mails n’est pas encore configuré. Contactez GIANTS sur WhatsApp.",
  },
  nl: {
    request: "Type aanvraag",
    experience: "Boek een ervaring",
    birthday: "Verjaardagsevenement",
    community: "Deelnemen aan een communitysessie",
    corporate: "Team- / bedrijfservaring",
    partnership: "Partnerschap / samenwerking",
    development: "Een persoonlijk ontwikkelingsprogramma bespreken",
    training: "Individuele training",
    movement: "Bewegings- & reflectiesessie",
    talking: "Gespreks- & reflectiesessie",
    movementHelp:
      "Een begeleide sessie met rustige beweging, gesprek en reflectie om emoties te verkennen, dagelijkse spanning te verminderen en zelfbewustzijn te ontwikkelen. Niet-klinische begeleiding.",
    date: "Voorkeursdatum",
    time: "Voorkeurstijd",
    availability:
      "Dit is een boekingsaanvraag. We bevestigen de beschikbaarheid en sessiedetails met je.",
    quick: "Liever een kort gesprek?",
    more: "+ Aanvullende informatie",
    less: "Aanvullende informatie verbergen",
    location: "Locatie / stad",
    group: "Groepsgrootte / leeftijdsgroep",
    sending: "Versturen…",
    error:
      "Je bericht kon niet worden verzonden. Probeer opnieuw of neem contact op via WhatsApp.",
    notConfigured:
      "E-mail is nog niet ingesteld. Neem contact op met GIANTS via WhatsApp.",
  },
  de: {
    request: "Art der Anfrage",
    experience: "Ein Erlebnis buchen",
    birthday: "Geburtstagsveranstaltung",
    community: "An einer Community-Einheit teilnehmen",
    corporate: "Team- / Firmenerlebnis",
    partnership: "Partnerschaft / Zusammenarbeit",
    development: "Ein Programm zur persönlichen Entwicklung besprechen",
    training: "Einzeltraining",
    movement: "Bewegungs- & Reflexionseinheit",
    talking: "Gesprächs- & Reflexionseinheit",
    movementHelp:
      "Eine begleitete Einheit mit sanfter Bewegung, Gespräch und Reflexion, um Emotionen zu erkunden, Alltagsspannungen abzubauen und Selbstwahrnehmung zu entwickeln. Nicht-klinische Begleitung.",
    date: "Wunschtermin",
    time: "Gewünschte Uhrzeit",
    availability:
      "Dies ist eine Buchungsanfrage. Wir bestätigen die Verfügbarkeit und die Einzelheiten mit dir.",
    quick: "Lieber ein kurzes Gespräch?",
    more: "+ Weitere Angaben",
    less: "Weitere Angaben ausblenden",
    location: "Ort / Stadt",
    group: "Gruppengröße / Altersgruppe",
    sending: "Wird gesendet…",
    error:
      "Deine Nachricht konnte nicht gesendet werden. Versuche es erneut oder kontaktiere GIANTS per WhatsApp.",
    notConfigured:
      "E-Mail ist noch nicht eingerichtet. Kontaktiere GIANTS per WhatsApp.",
  },
} satisfies Record<Locale, Record<string, string>>;

export default function ContactForm({
  t,
  locale,
}: {
  t: Translation;
  locale: Locale;
}) {
  const copy = bookingCopy[locale];

  const [sent, setSent] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [requestType, setRequestType] = useState("experience");
  const [minimumDate, setMinimumDate] = useState("");

  const options = [
    { value: "experience", label: copy.experience },
    { value: "birthday", label: copy.birthday },
    { value: "community", label: copy.community },
    { value: "corporate", label: copy.corporate },
    { value: "partnership", label: copy.partnership },
    { value: "human-development", label: copy.development },
    { value: "training-1on1", label: copy.training },
    { value: "movement-reflection", label: copy.movement },
    { value: "talk-reflection", label: copy.talking },
  ];

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interest");

    const allowed = [
      "experience",
      "birthday",
      "community",
      "corporate",
      "partnership",
      "human-development",
      "training-1on1",
      "movement-reflection",
      "talk-reflection",
    ];

    if (interest && allowed.includes(interest)) {
      setRequestType(interest);
    }

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    setMinimumDate(`${year}-${month}-${day}`);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const selectedLabel =
      options.find((option) => option.value === requestType)?.label ??
      copy.experience;

    const date = String(formData.get("preferredDate") ?? "");
    const time = String(formData.get("preferredTime") ?? "");
    const message = String(formData.get("message") ?? "");

    // Keep readable request labels for the existing contact API.
    formData.set("requestType", selectedLabel);

    // Include booking details even if the API does not yet read the new fields.
    formData.set(
      "message",
      [
        message,
        "",
        `${copy.request}: ${selectedLabel}`,
        date ? `${copy.date}: ${date}` : "",
        time ? `${copy.time}: ${time}` : "",
      ]
        .filter((line, index) => line !== "" || index === 1)
        .join("\n")
    );

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.code ?? "REQUEST_FAILED");
      }

      setSent(true);
      form.reset();
    } catch (reason) {
      const code =
        reason instanceof Error ? reason.message : "REQUEST_FAILED";

      setError(
        code === "EMAIL_NOT_CONFIGURED"
          ? copy.notConfigured
          : copy.error
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-orange-500/40 bg-orange-500/10 p-8 text-center"
      >
        <h3 className="text-2xl font-black text-orange-300">
          {t.contactForm.success}
        </h3>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { value: "training-1on1", label: copy.training },
          { value: "movement-reflection", label: copy.movement },
          { value: "talk-reflection", label: copy.talking },
        ].map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setRequestType(item.value)}
            aria-pressed={requestType === item.value}
            className={`rounded-3xl border p-5 text-center font-black transition ${
              requestType === item.value
                ? "border-orange-400 bg-orange-500/20"
                : "border-orange-500/20 bg-orange-500/10 hover:border-orange-400"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-green-500/30 bg-green-500/10 p-6 text-center">
        <p className="text-zinc-300">{copy.quick}</p>

        <a
          href="https://wa.me/32465545947"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-full bg-green-500 px-8 py-4 font-black text-black transition hover:bg-green-400"
        >
          {t.contactForm.whatsapp}
        </a>
      </div>

      <form onSubmit={handleSubmit} className="giants-contact-form">
        <input type="hidden" name="locale" value={locale} />

        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="giants-honeypot"
          aria-hidden="true"
        />

        <div className="giants-contact-row">
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder={t.contactForm.name}
            aria-label={t.contactForm.name}
            required
            className="giants-field"
          />

          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder={t.contactForm.email}
            aria-label={t.contactForm.email}
            required
            className="giants-field"
          />
        </div>

        <label htmlFor="requestType" className="block text-sm text-zinc-300">
          {copy.request}
        </label>

        <select
          id="requestType"
          name="requestType"
          value={requestType}
          onChange={(event) => setRequestType(event.target.value)}
          className="giants-field"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {requestType === "movement-reflection" && (
          <p className="text-sm leading-6 text-zinc-300">
            {copy.movementHelp}
          </p>
        )}

        <div className="giants-contact-row">
          <div className="min-w-0">
            <label
              htmlFor="preferredDate"
              className="mb-2 block text-sm text-zinc-300"
            >
              {copy.date}
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              min={minimumDate || undefined}
              className="giants-field w-full"
              style={{ colorScheme: "dark" }}
            />
          </div>

          <div className="min-w-0">
            <label
              htmlFor="preferredTime"
              className="mb-2 block text-sm text-zinc-300"
            >
              {copy.time}
            </label>
            <input
              id="preferredTime"
              name="preferredTime"
              type="time"
              className="giants-field w-full"
              style={{ colorScheme: "dark" }}
            />
          </div>
        </div>

        <p className="text-sm leading-6 text-zinc-400">
          {copy.availability}
        </p>

        <textarea
          name="message"
          placeholder={t.contactForm.message}
          aria-label={t.contactForm.message}
          rows={5}
          required
          className="giants-field"
        />

        <button
          type="button"
          onClick={() => setMoreOpen((current) => !current)}
          className="giants-contact-more"
          aria-expanded={moreOpen}
          aria-controls="contact-extra"
        >
          {moreOpen ? copy.less : copy.more}
        </button>

        <div id="contact-extra" hidden={!moreOpen}>
          <div className="giants-contact-extra">
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder={t.contactForm.phone}
              aria-label={t.contactForm.phone}
              className="giants-field"
            />

            <input
              type="text"
              name="location"
              placeholder={copy.location}
              aria-label={copy.location}
              className="giants-field"
            />

            <input
              type="text"
              name="groupSize"
              placeholder={copy.group}
              aria-label={copy.group}
              className="giants-field"
            />
          </div>
        </div>

        {error && (
          <p className="giants-contact-error" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="giants-contact-submit"
          disabled={submitting}
        >
          {submitting ? copy.sending : t.contactForm.submit}
        </button>
      </form>
    </>
  );
}