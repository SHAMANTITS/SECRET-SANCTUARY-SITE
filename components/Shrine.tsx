import Image from "next/image";

export default function Shrine() {
  return (
    <section id="shrine" className="bg-sand py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            The Shrine
          </p>
          <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight">
            念 — Mindfulness
          </h2>
          <p className="mt-5 text-bark-light leading-relaxed">
            The character 念 is made of two parts: 今 (now) and 心 (heart/mind).
            It reminds us to bring our heart fully into this present moment.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-[6fr_5fr] gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden order-1">
            <Image
              src="/lantern_lit_teahouse_in_the_woods.png"
              alt="The shrine at night — lantern-lit teahouse in the woods"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Oversized 念 character watermark */}
            <div
              aria-hidden="true"
              className="absolute top-4 right-6 font-serif text-cream/30 select-none"
              style={{ fontSize: "clamp(80px, 12vw, 160px)", lineHeight: 1 }}
            >
              念
            </div>
          </div>

          {/* Text */}
          <div className="order-2">
            <p className="text-bark-light leading-relaxed mb-5">
              This humble hut marks the entrance to The Secret Sanctuary
              Shrine, where we honour the spirit of 念 — mindfulness.
            </p>

            <blockquote className="my-8 pl-5 border-l-2 border-sage">
              <p className="font-serif text-bark text-lg lg:text-xl leading-relaxed italic">
                &ldquo;Mindfulness is the quality of mind that is aware of
                what&rsquo;s happening — without judgment or interference.&rdquo;
              </p>
            </blockquote>

            <p className="text-bark-light leading-relaxed mb-5">
              It is like a mirror, simply reflecting whatever comes before it
              — brushing your teeth, sipping tea, walking in silence, or
              sharing a moment with another. In the rush of modern life,
              mindfulness gently brings us back — to ourselves, to each other,
              to now.
            </p>

            {/* Centered breath stanza */}
            <div className="my-10 py-8 border-t border-b border-sage-light/40 text-center">
              <p className="font-serif text-bark text-lg leading-loose italic">
                We begin by breathing.
                <br />
                Breathing in, we know we are breathing in.
                <br />
                Breathing out, we know we are breathing out.
              </p>
              <p className="mt-6 text-bark-light text-sm leading-relaxed">
                Simple, yet powerful.
                <br />
                Again and again, we return to this moment.
                <br />
                To this breath. To this heart.
              </p>
            </div>

            {/* Read more — native HTML accordion, no JS needed */}
            <details className="group">
              <summary className="cursor-pointer text-forest text-sm font-medium uppercase tracking-[0.18em] hover:text-forest-dark transition-colors list-none flex items-center gap-2">
                <span className="group-open:hidden">Read more</span>
                <span className="hidden group-open:inline">Read less</span>
                <span aria-hidden="true" className="transition-transform group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-6 space-y-5 text-bark-light leading-relaxed">
                <p>
                  As the mind settles, we begin to glimpse a quiet stillness
                  within — a space where thoughts and emotions soften, and we
                  can see their true nature. Thoughts, once overwhelming,
                  begin to lose their grip. We wake up from their stories —
                  like stepping out of a dream.
                </p>
                <p className="font-serif italic text-bark">
                  As Joseph Goldstein reminds us:
                </p>
                <blockquote className="pl-5 border-l-2 border-sage">
                  <p className="font-serif text-bark italic leading-relaxed">
                    &ldquo;Some of the worst things in my life never
                    happened.&rdquo;
                  </p>
                  <p className="font-serif text-bark italic leading-relaxed mt-3">
                    &ldquo;Notice the difference between being lost in a
                    thought and being mindful that we&rsquo;re thinking.
                    Through mindfulness, we gradually awaken from the movies
                    of our minds.&rdquo;
                  </p>
                </blockquote>
                <p className="text-center pt-4 italic">
                  Here at The Secret Sanctuary Shrine, may you find a moment
                  of stillness.
                  <br />
                  A breath. A remembering. A return to now.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
