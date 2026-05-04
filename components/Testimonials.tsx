export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-mist text-xs uppercase tracking-[0.2em] mb-16 text-center">
          A guest&apos;s reflection
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
                Thirty years of care can be felt the moment you arrive. The
                Secret Sanctuary is not just a place to stay — it is a place
                that has been lived, grown, and held with heart.
              </p>

              <footer className="flex items-center gap-4">
                <div className="w-8 h-px bg-sage" />
                <div>
                  <p className="text-bark font-medium text-sm">Pat</p>
                  <p className="text-mist text-xs mt-0.5">
                    Long-time guest
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
