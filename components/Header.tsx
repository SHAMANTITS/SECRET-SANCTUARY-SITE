"use client";

import { useState, useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/thesecret-sanctuary/root-cause-reset-discovery-call";
const WHATSAPP_URL = "https://wa.me/60198888986";

const navLinks = [
  { label: "Stay", href: "#offerings" },
  { label: "The Sanctuary", href: "#sanctuary" },
  { label: "Shrine", href: "#shrine" },
  { label: "Book", href: "#book" },
  { label: "About", href: "#meet-cyril" },
];

function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 text-bark"
      aria-label="The Secret Sanctuary — Home"
    >
      <span
        className="text-sage text-xl leading-none font-serif"
        aria-hidden="true"
      >
        念
      </span>
      <span className="font-serif text-base font-semibold tracking-wide leading-none">
        The Secret Sanctuary
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-bark-light hover:text-bark"
                  : "text-cream/80 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition-colors ${
              scrolled
                ? "text-bark-light hover:text-bark"
                : "text-cream/80 hover:text-cream"
            }`}
          >
            WhatsApp
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-forest text-cream px-4 py-2 rounded-full hover:bg-forest-dark transition-colors"
          >
            Book a Call
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-bark" : "text-cream"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px bg-current mb-1.5"></span>
          <span className="block w-6 h-px bg-current mb-1.5"></span>
          <span className="block w-4 h-px bg-current"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-sand px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-bark-light hover:text-bark transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bark-light hover:text-bark transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-forest text-cream px-6 py-3 rounded-full hover:bg-forest-dark transition-colors"
          >
            Book a Discovery Call
          </a>
        </div>
      )}
    </header>
  );
}
