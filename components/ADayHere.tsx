const moments = [
  {
    time: "Morning",
    title: "Quiet light",
    description:
      "Wake slowly. Tea on the verandah. Birdsong, water, and the garden beginning its day. No alarms, no schedule.",
  },
  {
    time: "Midday",
    title: "Garden & water",
    description:
      "A slow walk through the garden. Fresh herbs and fruit. Time by the pool. A long, simple meal made from the land.",
  },
  {
    time: "Afternoon",
    title: "Rest, art, conversation",
    description:
      "Read. Write. Make something. Talk to Cyril if you wish. Or simply nap — the sanctuary supports whatever you need most.",
  },
  {
    time: "Evening",
    title: "Lanterns & stillness",
    description:
      "Lanterns warm the path. Slow food, slow company. The forest settles. You settle. Sleep comes easily.",
  },
];

export default function ADayHere() {
  return (
    <section id="a-day-here" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            A Day Here
          </p>
          <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight">
            The rhythm is slow on purpose.
          </h2>
          <p className="mt-5 text-bark-light leading-relaxed">
            There is no fixed timetable. This is one shape a day might take —
            yours can take any shape you need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {moments.map((m) => (
            <div key={m.time} className="border-t border-sage-light/60 pt-6">
              <p className="text-mist text-xs uppercase tracking-[0.18em] mb-3">
                {m.time}
              </p>
              <h3 className="font-serif text-bark text-xl mb-3">{m.title}</h3>
              <p className="text-bark-light text-sm leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
