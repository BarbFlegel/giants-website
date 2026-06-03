"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const inputClass =
    "rounded-2xl border border-orange-500/25 bg-black px-5 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSent(true);
      form.reset();
    } else {
      alert(
        "Something went wrong. Please try again or contact GIANTS via WhatsApp."
      );
    }
  }

  if (sent) {
    return (
      <div className="mt-10 rounded-3xl border border-orange-500/40 bg-orange-500/10 p-8 text-center">
        <h3 className="text-2xl font-black text-orange-300">
          Request sent successfully.
        </h3>
        <p className="mt-3 text-zinc-300">
          Thank you — GIANTS will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 mt-10 flex flex-col items-center gap-4 rounded-3xl border border-green-500/30 bg-green-500/10 p-6 text-center">
        <p className="text-zinc-300">Prefer a quick conversation?</p>

        <a
          href="https://wa.me/324XXXXXXXX?text=Hi%20GIANTS%2C%20I%27d%20like%20to%20book%20or%20ask%20about%20an%20experience."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-8 py-4 font-black text-black transition hover:scale-105 hover:bg-green-400"
        >
          Book via WhatsApp
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid gap-5 rounded-[2rem] border border-orange-500/30 bg-gradient-to-br from-orange-500/15 via-zinc-950 to-black p-6 shadow-[0_0_40px_rgba(249,115,22,0.12)] md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={inputClass}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <select
            id="requestType"
            name="requestType"
            aria-label="Request type"
            className={inputClass}
          >
            <option>Book an experience</option>
            <option>Birthday event</option>
            <option>Join a community session</option>
            <option>Team / corporate experience</option>
            <option>Partnership / collaboration</option>
          </select>

          <input
            type="text"
            name="preferredDate"
            placeholder="Preferred date or period"
            className={inputClass}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="location"
            placeholder="Location / city"
            className={inputClass}
          />
          <input
            type="text"
            name="groupSize"
            placeholder="Group size / age group"
            className={inputClass}
          />
        </div>

        <textarea
          name="message"
          placeholder="Tell us what you have in mind"
          rows={5}
          className={inputClass}
        />

        <button
          type="submit"
          className="mt-2 flex min-h-[64px] w-full items-center justify-center rounded-full bg-orange-500 px-8 text-lg font-black text-black transition hover:scale-[1.02] hover:bg-orange-400"
        >
          Send Request
        </button>
      </form>
    </>
  );
}