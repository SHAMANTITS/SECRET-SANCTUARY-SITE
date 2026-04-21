import Image from "next/image";

export default function MeetCyril() {
  return (
    <section id="meet-cyril" className="bg-sand py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-72 lg:w-80">
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <Image
                src="/cyril.png"
                alt="Cyril, founder of The Secret Sanctuary"
                width={640}
                height={853}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-forest/10 border border-sage-light/30" />
          </div>
        </div>

        <div>
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            Meet Your Guide
          </p>
          <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight mb-6">
            Cyril
          </h2>
          <p className="text-bark-light leading-relaxed mb-5">
            Cyril guides people through a deeply personal, root-cause approach to
            healing. His work is grounded, intuitive, and shaped by years of direct
            experience with people facing chronic health struggles, emotional
            exhaustion, and complex life patterns.
          </p>
          <p className="text-bark-light leading-relaxed mb-5">
            He listens carefully, looks beneath the surface, and helps each person
            reconnect with a more stable, clear, and aligned state — without rushing
            to conclusions or defaulting to generic answers.
          </p>
          <p className="text-bark-light leading-relaxed mb-10">
            A Discovery Call with Cyril is not a sales conversation. It's an honest
            conversation about where you are, what you need, and whether The Secret
            Sanctuary is the right place for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/thesecret-sanctuary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-forest text-cream px-8 py-4 rounded-full text-sm font-medium hover:bg-forest-dark transition-colors"
            >
              Book a Discovery Call
            </a>
            <a
              href="https://wa.me/60198888986"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-forest text-forest px-8 py-4 rounded-full text-sm font-medium hover:bg-forest/5 transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
