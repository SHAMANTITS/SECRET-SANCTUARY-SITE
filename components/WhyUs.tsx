const pillars = [
  {
    number: "01",
    title: "Root-cause, not symptom management",
    description:
      "We don't mask what's happening in your body. Every element of your stay is oriented toward understanding and addressing underlying causes — not temporary relief.",
  },
  {
    number: "02",
    title: "Truly personalized",
    description:
      "No group retreats, no generic protocols. Your program is built around your specific history, physiology, and goals — and adjusted as you respond.",
  },
  {
    number: "03",
    title: "Set in nature, away from noise",
    description:
      "Sarawak, Borneo is one of the oldest rainforests on Earth. The environment itself is part of the medicine — genuinely quiet, genuinely clean, genuinely alive.",
  },
  {
    number: "04",
    title: "Sustained support",
    description:
      "The work doesn't end when you leave. Guidance, integration support, and clear next steps ensure that what you gain here continues to work for you at home.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-forest py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-sage text-xs uppercase tracking-[0.2em] mb-4">
            Why The Secret Sanctuary
          </p>
          <h2 className="font-serif text-cream text-4xl lg:text-5xl leading-tight">
            A different kind of healing.
          </h2>
          <p className="mt-5 text-sage-light leading-relaxed">
            There are many retreats. Very few offer this level of depth,
            personalization, and genuine commitment to lasting change.
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
