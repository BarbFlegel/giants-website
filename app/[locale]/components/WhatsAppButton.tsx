import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi GIANTS, I’d like to book or ask about a session."
  );

  return (
    <a
      href={`https://wa.me/324XXXXXXXX?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-black text-black transition hover:scale-105 hover:bg-green-400"
    >
      <FaWhatsapp />
      Book via WhatsApp
    </a>
  );
}