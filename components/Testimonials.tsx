export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-mist text-xs uppercase tracking-[0.2em] mb-16 text-center">
          A client's experience
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <span
              className="absolute -top-6 -left-2 text-sage/30 font-serif leading-none select-none"
              style={{ fontSize: "8rem", lineHeight: 1 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="relative z-10 pt-8">
              <p className="font-serif text-bark text-2xl lg:text-3xl leading-relaxed mb-10">
                After more than 20 years of depression, medication, and psychiatric
                care, Cyril was the first person who truly listened and helped me
                understand the deeper root of what I was going through. Within weeks
                I noticed change. Today I feel calmer, more stable, and more at
                peace.
              </p>

              <footer className="flex items-center gap-4">
                <div className="w-8 h-px bg-sage" />
                <div>
                  <p className="text-bark font-medium text-sm">Pat</p>
                  <p className="text-mist text-xs mt-0.5">
                    20+ years of depression & psychiatric care
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
