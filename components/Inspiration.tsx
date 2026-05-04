// TODO: Swap quotes for finalized attributed lines from Cyril if needed.
const quotes = [
  {
    quote:
      "The best way to predict your future is to create it from the unknown.",
    author: "Joe Dispenza",
  },
  {
    quote:
      "When we change the way we see the world, we change the world we see.",
    author: "Bruce Lipton",
  },
  {
    quote: "We are limited only by our beliefs about who we are.",
    author: "Gregg Braden",
  },
];

export default function Inspiration() {
  return (
    <section id="inspiration" className="bg-cream py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-12 text-center mx-auto">
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            Inspiration
          </p>
          <h2 className="font-serif text-bark text-3xl lg:text-4xl leading-tight">
            Voices that shape the way we hold space.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.author}
              className="bg-sand/60 rounded-2xl p-8 flex flex-col"
            >
              <blockquote className="flex-1">
                <p className="font-serif text-bark text-lg leading-relaxed italic">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="block w-6 h-px bg-sage" aria-hidden="true" />
                <span className="text-bark text-sm font-medium">
                  {q.author}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
