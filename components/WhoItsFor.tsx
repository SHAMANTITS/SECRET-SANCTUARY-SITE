const signals = [
  "You've been chronically exhausted — for months or years — and nothing seems to fix it.",
  "You've tried the supplements, the protocols, the specialists. You're still stuck.",
  "Your body feels inflamed, reactive, or simply not right, and you don't know why.",
  "Conventional medicine has offered diagnoses but not solutions.",
  "You feel disconnected — from your energy, your clarity, your sense of self.",
  "You're burned out and know you need more than a holiday.",
  "You're ready for a real shift, not another temporary fix.",
  "You sense that healing will require a different kind of environment and support.",
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            Who It's For
          </p>
          <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight mb-6">
            You've been trying to push through.
          </h2>
          <p className="text-bark-light leading-relaxed mb-6">
            The Secret Sanctuary is not for everyone. It's for people who are
            genuinely ready to step away from their environment, slow down, and
            receive real support — physically, mentally, and systemically.
          </p>
          <p className="text-bark-light leading-relaxed">
            If any of the following resonate, you may be exactly who this place
            was built for.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {signals.map((signal, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sage" />
              <span className="text-bark-light leading-relaxed">{signal}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
