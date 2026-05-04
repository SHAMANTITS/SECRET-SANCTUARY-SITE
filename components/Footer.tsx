const navLinks = [
  { label: "Stay", href: "#offerings" },
  { label: "The Sanctuary", href: "#sanctuary" },
  { label: "Shrine", href: "#shrine" },
  { label: "A Day Here", href: "#a-day-here" },
  { label: "Why Here", href: "#why-us" },
  { label: "Book", href: "#book" },
  { label: "Meet Cyril", href: "#meet-cyril" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-bark py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-bark-light/30">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="text-sage text-xl leading-none font-serif"
                aria-hidden="true"
              >
                念
              </span>
              <p className="font-serif text-cream text-lg leading-none">
                The Secret Sanctuary
              </p>
            </div>
            <p className="text-mist text-sm leading-relaxed">
              A private garden sanctuary in Sarawak, Borneo.
              <br />
              Built and tended over 30 years.
            </p>
          </div>

          <div>
            <p className="text-mist text-xs uppercase tracking-widest mb-5">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-mist/70 text-sm hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-mist text-xs uppercase tracking-widest mb-5">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://calendly.com/thesecret-sanctuary/root-cause-reset-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist/70 text-sm hover:text-cream transition-colors"
              >
                Book a Discovery Call
              </a>
              <a
                href="https://wa.me/60198888986"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist/70 text-sm hover:text-cream transition-colors"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-8">
              <a
                href="https://calendly.com/thesecret-sanctuary/root-cause-reset-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-forest text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-forest-dark transition-colors"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-mist/50 text-xs">
            © {new Date().getFullYear()} The Secret Sanctuary. All rights reserved.
          </p>
          <p className="text-mist/50 text-xs">Sarawak, Borneo, Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
