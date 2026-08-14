"use client";

import { FaWhatsapp } from "react-icons/fa";

type WhatsAppButtonProps = {
  message: string;
  label: string;

  variant?: "solid" | "outline";
  className?: string;
};

const WHATSAPP_NUMBER = "32465545947";

export default function WhatsAppButton({
  message,
  label,
  variant = "solid",
  className = "",
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  const baseClasses =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide transition";

  const variantClasses =
    variant === "solid"
      ? "bg-[#25D366] text-black hover:brightness-110"
      : "border border-white/30 bg-black/20 text-white backdrop-blur-sm hover:border-[#25D366] hover:text-[#25D366]";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <FaWhatsapp
        aria-hidden="true"
        className="text-lg"
      />

      {label}
    </a>
  );
}