const pillars = [
  {
    number: "01",
    title: "A living sanctuary, not a hotel",
    description:
      "Built and tended by hand over 30 years. Every path, garden, pool, and pavilion has been shaped slowly. The place itself is the experience.",
  },
  {
    number: "02",
    title: "Garden, water, and silence",
    description:
      "Surrounded by herbs, fruit trees, water, and rainforest. Real silence, real food from the land — not curated wellness theater.",
  },
  {
    number: "03",
    title: "Private and intimate",
    description:
      "Not a mass retreat center. Small, personal, and quiet. You won't share the space with a hundred strangers — most stays are private or in very small groups.",
  },
  {
    number: "04",
    title: "Personal care, not a program",
    description:
      "No fixed timetable, no packaged protocol. Your stay is shaped around what you actually need — rest, creative space, deep guidance, or simply time off the grid.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-forest py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-sage text-xs uppercase tracking-[0.2em] mb-4">
            Why Here
          </p>
          <h2 className="font-serif text-cream text-4xl lg:text-5xl leading-tight">
            What else is possible?
          </h2>
          <p className="mt-5 text-sage-light leading-relaxed">
            Being aware that the question can change the energy of any
            situation. You begin to see that it is always a question that has
            opened up a different possibility.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="border-t border-forest-dark pt-8">
              <span className="font-serif text-sage/60 text-sm mb-4 block">
                {pillar.number}
              </span>
              <h3 className="font-serif text-cream text-xl mb-3">{pillar.title}</h3>
              <p className="text-sage-light text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
