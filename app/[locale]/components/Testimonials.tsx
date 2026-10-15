"use client";

import { useState } from "react";
import type { Locale, Translation } from "../content/types";

export default function ContactForm({ t, locale }: { t: Translation; locale: Locale }) {
  const [sent, setSent] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.code ?? "REQUEST_FAILED");
      }
      setSent(true);
      form.reset();
    } catch (reason) {
      const code = reason instanceof Error ? reason.message : "REQUEST_FAILED";
      setError(
        code === "EMAIL_NOT_CONFIGURED"
          ? "Email is not configured on this deployment yet. Please contact GIANTS via WhatsApp."
          : "Your message could not be sent. Please try again or contact GIANTS via WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-orange-500/40 bg-orange-500/10 p-8 text-center">
        <h3 className="text-2xl font-black text-orange-300">
          {t.contactForm.success}
        </h3>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {["🏀 Basketball", "🤝 Community", "💼 Corporate"].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-5 text-center font-black"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-green-500/30 bg-green-500/10 p-6 text-center">
        <p className="text-zinc-300">Prefer a quick conversation?</p>

        <a
          href="https://wa.me/32465545947?text=Hi%20GIANTS,%20I'd%20like%20to%20learn%20more%20about%20your%20experiences."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-full bg-green-500 px-8 py-4 font-black text-black transition hover:scale-105 hover:bg-green-400"
        >
          {t.contactForm.whatsapp}
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="giants-contact-form"
      >
        <input type="hidden" name="locale" value={locale} />
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="giants-honeypot" aria-hidden="true" />
        <div className="giants-contact-row">
          <input
            type="text"
            name="name"
            placeholder={t.contactForm.name}
            required
            className="giants-field"
          />

          <input
            type="email"
            name="email"
            placeholder={t.contactForm.email}
            required
            className="giants-field"
          />
        </div>

        <select
          id="requestType"
          name="requestType"
          aria-label="Request type"
          className="giants-field"
        >
          <option>Book an experience</option>
          <option>Birthday event</option>
          <option>Join a community session</option>
          <option>Team / corporate experience</option>
          <option>Partnership / collaboration</option>
        </select>

        <textarea
          name="message"
          placeholder={t.contactForm.message}
          rows={5}
          required
          className="giants-field"
        />

        <button
          type="button"
          onClick={() => setMoreOpen(!moreOpen)}
          className="giants-contact-more"
          aria-expanded={moreOpen}
        >
          {moreOpen ? "Hide additional details" : "+ Additional details"}
        </button>

        {moreOpen && (
          <div className="giants-contact-extra">
            <input
              type="text"
              name="preferredDate"
              placeholder="Preferred date or period"
              className="giants-field"
            />

            <input
              type="text"
              name="location"
              placeholder="Location / city"
              className="giants-field"
            />

            <input
              type="text"
              name="groupSize"
              placeholder="Group size / age group"
              className="giants-field"
            />
          </div>
        )}

        {error && <p className="giants-contact-error" role="alert">{error}</p>}
        <button type="submit" className="giants-contact-submit" disabled={submitting}>
          {submitting ? "Sending…" : t.contactForm.submit}
        </button>
      </form>
    </>
  );
}
