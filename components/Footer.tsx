const navLinks = [
  { label: "Offerings", href: "#offerings" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "Why Us", href: "#why-us" },
  { label: "Meet Cyril", href: "#meet-cyril" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="bg-bark py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-bark-light/30">
          <div>
            <p className="font-serif text-cream text-lg mb-3">
              The Secret Sanctuary
            </p>
            <p className="text-mist text-sm leading-relaxed">
              Root-cause healing in a place built for deep reset.
              <br />
              Sarawak, Borneo.
            </p>
          </div>

          <div>
            <p className="text-mist text-xs uppercase tracking-widest mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
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
                href="https://calendly.com/thesecret-sanctuary"
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
                href="https://calendly.com/thesecret-sanctuary"
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
