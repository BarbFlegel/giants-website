import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/32465545947",
    icon: <FaWhatsapp />,
    className: "text-green-400",
  },
  {
    label: "Email",
    href: "mailto:giants.community@gmail.com",
    icon: <FaEnvelope />,
    className: "text-orange-300",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/decult1111",
    icon: <FaInstagram />,
    className: "text-pink-400",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@de.cult",
    icon: <FaTiktok />,
    className: "text-white",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1LU8tYc8Tt/",
    icon: <FaFacebook />,
    className: "text-blue-400",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socials.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-2xl transition hover:scale-110 hover:bg-orange-500/10 md:h-12 md:w-12"
        >
          <span className={item.className}>{item.icon}</span>
        </a>
      ))}
    </div>
  );
}