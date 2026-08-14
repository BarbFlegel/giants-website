import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import { Mail } from "lucide-react";

import type { Translation } from "../content";

type FooterProps = {
  t: Translation;
};

const WHATSAPP_NUMBER = "32465545947";

const WHATSAPP_MESSAGE =
  "Hello GIANTS! I would like to get involved with the community. Could you please provide me with more information?";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

export default function Footer({
  t,
}: FooterProps) {
  return (
    <footer className="giants-footer">
      <div className="giants-footer-main">
        <div className="giants-footer-brand">
          <Image
            src="/images/giants-logo.png"
            alt="GIANTS"
            width={64}
            height={64}
            priority
            className="giants-footer-logo"
          />

          <div>
            <p className="giants-footer-name">
              GIANTS
            </p>

            <p className="giants-footer-tagline">
              Movement · Community · Wellbeing
            </p>
          </div>
        </div>

        <div
          className="giants-footer-socials"
          aria-label="GIANTS social media"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact GIANTS on WhatsApp"
            className="giants-social-link"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:giants.decult@gmail.com"
            aria-label="Email GIANTS"
            className="giants-social-link"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://instagram.com/decult1111"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GIANTS on Instagram"
            className="giants-social-link"
          >
            <FaInstagram />
          </a>

          <a
            href="https://tiktok.com/@de.cult"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GIANTS on TikTok"
            className="giants-social-link"
          >
            <FaTiktok />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GIANTS on Facebook"
            className="giants-social-link"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="giants-footer-bottom">
        <span>
          {t.footer.copyright}
        </span>

        <span className="giants-footer-motto">
          Train · Connect · Elevate
        </span>
      </div>
    </footer>
  );
}