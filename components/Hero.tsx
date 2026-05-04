const CALENDLY_URL =
  "https://calendly.com/thesecret-sanctuary/root-cause-reset-discovery-call";
const WHATSAPP_URL = "https://wa.me/60198888986";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fallback gradient — visible while video loads */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #1E3329 0%, #2D4A3E 45%, #3A5C47 70%, #2A3D30 100%)",
        }}
        aria-hidden="true"
      />

      {/* Active waterfall video background — centered crop */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center center" }}
        src="/waterfall-hero.mp4"
        poster="/tropical_waterfall_bliss_with_serenity.png"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Even dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(15,30,22,0.55)" }}
        aria-hidden="true"
      />
      {/* Right-side darkening to anchor the headline cleanly */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to left, rgba(15,30,22,0.55) 0%, rgba(15,30,22,0.15) 55%, rgba(15,30,22,0) 80%)",
        }}
        aria-hidden="true"
      />

      {/* Right-shifted content */}
      <div className="relative w-full max-w-6xl mx-auto px-6 py-32 lg:py-40">
        <div className="lg:ml-auto lg:mr-0 lg:w-[58%] text-center lg:text-right">
          <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-12">
            Your Inner Sanctuary
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-cream text-forest px-8 py-4 rounded-full text-sm font-medium hover:bg-sand transition-colors"
            >
              Book Your Stay
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-cream/60 text-cream px-8 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Talk to Cyril Online
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Gregg Braden quote — lower left */}
      <figure className="absolute bottom-10 left-6 lg:left-12 max-w-xs lg:max-w-sm pr-6">
        <blockquote>
          <p className="font-serif text-cream/75 text-xs sm:text-sm lg:text-base italic leading-relaxed">
            &ldquo;There can only be one solution to any problem: a change in
            attitude and a change in consciousness.&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-2 text-sage-light/70 text-[0.65rem] sm:text-xs uppercase tracking-[0.22em]">
          — Gregg Braden
        </figcaption>
      </figure>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-sage-light/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="block w-px h-8 bg-sage-light/30" />
      </div>
    </section>
  );
}
