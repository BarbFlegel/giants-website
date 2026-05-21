"use client";

import { FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "../content";

const iconMap = { whatsapp: FaWhatsapp, email: FaEnvelope, instagram: FaInstagram, tiktok: FaTiktok, facebook: FaFacebook };

export default function SocialIcons() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-2xl">
      {socialLinks.map(({ label, href, iconName, className }) => {
        const Icon = iconMap[iconName];
        return (
          <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} aria-label={label} className={`flex h-12 w-12 items-center justify-center rounded-full bg-black transition hover:scale-110 sm:h-14 sm:w-14 ${className}`}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
