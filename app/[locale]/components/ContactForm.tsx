"use client";

export default function ContactForm() {
  return (
    <form className="mt-10 grid gap-4 rounded-3xl border border-zinc-800 bg-black/40 p-6 text-left">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Name"
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        />

        <input
          type="email"
          placeholder="Email"
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
          placeholder="Preferred date or period"
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Location / city"
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        />

        <input
          type="text"
          placeholder="Group size / age group"
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
        />
      </div>

      <textarea
        placeholder="Tell us what you have in mind"
        rows={5}
        className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
      />

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-black px-6 py-4 font-bold text-orange-300 transition hover:scale-[1.02] hover:bg-zinc-900 md:w-auto md:self-start"
      >
        Send Request
      </button>
    </form>
  );
}