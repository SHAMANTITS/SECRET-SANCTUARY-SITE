import Image from "next/image";

const CALENDLY_URL =
  "https://calendly.com/thesecret-sanctuary/root-cause-reset-discovery-call";

export default function MeetCyril() {
  return (
    <section id="meet-cyril" className="bg-cream py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[5fr_6fr] gap-12 lg:gap-20 items-center">
        {/* Portrait */}
        <div>
          <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(45,74,62,0.35)]">
              <Image
                src="/cyrilmeet.png"
                alt="Cyril Lim, founder and caretaker of The Secret Sanctuary"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 384px, 480px"
              />
            </div>
            <div
              aria-hidden="true"
              className="hidden lg:block absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl border border-sage-light/50 -z-0"
            />
          </div>
          <p className="mt-6 text-mist text-xs uppercase tracking-[0.22em] text-center lg:text-left">
            Cyril Lim
          </p>
        </div>

        {/* Bio */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-sage" aria-hidden="true" />
            <p className="text-mist text-xs uppercase tracking-[0.22em]">
              Your Host
            </p>
          </div>

          <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight mb-3">
            Meet Cyril
          </h2>
          <p className="text-bark-light italic mb-8">
            Founder &amp; Caretaker of The Secret Sanctuary
          </p>

          <p className="text-bark-light text-lg leading-relaxed mb-5">
            Cyril Lim is the founder and living caretaker of The Secret
            Sanctuary, a quiet sanctuary in Sarawak where nature, ancestral
            wisdom, and a modern understanding of wellbeing meet.
          </p>
          <p className="text-bark-light leading-relaxed mb-5">
            What began over 30 years ago as a personal garden, created out of
            devotion to care for his mother, has slowly become a living
            sanctuary. Today, people come here not only to rest, but to
            reconnect with something deeper within themselves.
          </p>
          <p className="text-bark-light leading-relaxed mb-5">
            Cyril does not position himself as a conventional healer or
            teacher. His role is to hold space, listen deeply, and guide
            guests back toward their own inner intelligence.
          </p>
          <p className="text-bark-light leading-relaxed mb-5">
            Through herbal food, intuitive conversation, Qi-based healing,
            Access Bars, and shared stillness, Cyril supports what he calls a
            root-cause reset: a return to balance in body, mind, and spirit.
          </p>
          <p className="text-bark-light leading-relaxed">
            Surrounded by medicinal herbs, fruit trees, water, and rainforest
            energy, the sanctuary naturally slows the mind and softens the
            body. Many guests describe it as 世外桃源 — a hidden paradise.
          </p>

          <blockquote className="mt-10 pl-6 border-l-2 border-sage">
            <p className="font-serif text-bark text-xl lg:text-2xl leading-relaxed italic">
              &ldquo;The sanctuary is not outside. It is something you remember
              within.&rdquo;
            </p>
          </blockquote>

          <div className="mt-10">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-forest text-cream px-8 py-4 rounded-full text-sm font-medium hover:bg-forest-dark transition-colors"
            >
              Talk to Cyril Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
