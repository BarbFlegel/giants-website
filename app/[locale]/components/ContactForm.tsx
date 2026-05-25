"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-10 rounded-3xl border border-orange-500/30 bg-black/60 p-8 text-center">
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
    <form
      onSubmit={handleSubmit}
      className="mt-10 grid gap-4 rounded-3xl border border-zinc-800 bg-black/40 p-6 text-left"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label htmlFor="requestType" className="sr-only">
          Request type
        </label>

        <select
          id="requestType"
          name="requestType"
          aria-label="Request type"
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
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
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="location"
          placeholder="Location / city"
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        />

        <input
          type="text"
          name="groupSize"
          placeholder="Group size / age group"
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell us what you have in mind"
        rows={5}
        className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
      />

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-black px-8 py-4 text-base font-black text-orange-300 transition hover:scale-[1.02] hover:bg-zinc-900 md:w-auto md:self-start"
      >
        Send Request
      </button>
    </form>
  );
}