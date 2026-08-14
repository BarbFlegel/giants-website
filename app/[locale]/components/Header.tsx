"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type {
  Locale,
  Translation,
} from "../content";

type HeaderProps = {
  locale: Locale;
  t: Translation;
};

type NavItem = {
  label: string;
  path: string;
};

export default function Header({
  locale,
  t,
}: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      label: "Home",
      path: "",
    },
    {
      label: t.nav.vision,
      path: "/vision",
    },
    {
      label: "Mindset",
      path: "/letters",
    },
    {
      label: t.nav.experiences,
      path: "/experiences",
    },
    {
      label: t.nav.community,
      path: "/impact",
    },
    {
      label: t.nav.events,
      path: "/events",
    },
    {
      label: t.nav.gallery,
      path: "/moments",
    },
    {
      label: t.nav.join,
      path: "/contact",
    },
  ];

  function getHref(path: string) {
    return `/${locale}${path}`;
  }

  function isActive(path: string) {
    if (!path) {
      return pathname === `/${locale}`;
    }

    return pathname.startsWith(getHref(path));
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="giants-header">
        <div className="giants-header-inner">
          <Link
            href={`/${locale}`}
            className="giants-brand"
            aria-label="GIANTS home"
          >
            <Image
              src="/images/giants-logo.png"
              alt="GIANTS"
              width={64}
              height={64}
              priority
              className="giants-brand-logo"
            />

            <span className="giants-brand-copy">
              <span className="giants-brand-name">
                GIANTS
              </span>

              <span className="giants-brand-tagline">
                Movement · Community · Wellbeing
              </span>
            </span>
          </Link>

          <nav
            className="giants-nav"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const href = getHref(item.path);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`giants-nav-link ${
                    isActive(item.path)
                      ? "active"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="giants-menu-trigger"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-expanded={menuOpen}
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="giants-mobile-menu">
          <div className="giants-mobile-menu-top">
            <div>
              <p className="giants-mobile-menu-title">
                Menu
              </p>

              <p className="giants-mobile-menu-subtitle">
                Train · Connect · Elevate
              </p>
            </div>

            <button
              type="button"
              className="giants-mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>

          <nav
            className="giants-mobile-nav"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const href = getHref(item.path);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`giants-mobile-nav-link ${
                    isActive(item.path)
                      ? "active"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}