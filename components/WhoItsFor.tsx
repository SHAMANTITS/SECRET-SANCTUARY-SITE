const signals = [
  "Travelers who need real rest, not just another hotel night.",
  "Couples or friends wanting a quiet staycation away from the city.",
  "Artists and creatives looking for space to think, write, or make.",
  "People in transition — between jobs, relationships, chapters.",
  "Anyone running on empty and quietly burnt out.",
  "People seeking a private reset, not a group retreat.",
  "Travelers who want something more human than a wellness hotel.",
  "People drawn to nature, silence, and slow time.",
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            Who This Is For
          </p>
          <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight mb-6">
            Made for people who need space to breathe.
          </h2>
          <p className="text-bark-light leading-relaxed mb-6">
            The Secret Sanctuary is private and intimate. It&apos;s not a resort,
            not a program, and not for everyone — and that&apos;s the point.
          </p>
          <p className="text-bark-light leading-relaxed">
            If any of the following resonate, this place was built for you.
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
