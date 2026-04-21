const offerings = [
  {
    icon: "◈",
    title: "Deep Reset Intensives",
    description:
      "Structured multi-day programs designed to interrupt chronic patterns — physical, mental, and energetic — and restore baseline function.",
  },
  {
    icon: "◎",
    title: "Nervous System Repair",
    description:
      "Evidence-informed support for a dysregulated nervous system. Practical tools to move out of fight-flight-freeze and into genuine regulation.",
  },
  {
    icon: "○",
    title: "Breathwork & Meditation",
    description:
      "Daily practices tailored to your state and goals. Not performative wellness — applied techniques that shift your physiology in real time.",
  },
  {
    icon: "◇",
    title: "Detox Programs",
    description:
      "Guided detoxification that addresses root causes of inflammation and toxic load. Supervised, personalized, and grounded in physiology.",
  },
  {
    icon: "◉",
    title: "Personalized Guidance",
    description:
      "One-on-one sessions with Cyril to identify what is truly driving your symptoms and co-create a path forward that fits your life.",
  },
  {
    icon: "△",
    title: "Rest & Restoration",
    description:
      "Unstructured time in a quiet, natural environment. Sometimes the most healing thing is simply to stop — fully and without guilt.",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="offerings" className="bg-sand py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight">
            Support that goes to the root.
          </h2>
          <p className="mt-5 text-bark-light leading-relaxed">
            Each offering is designed to address underlying causes, not manage
            symptoms. Together, they form a complete environment for deep healing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-cream rounded-2xl p-8 border border-sand hover:border-sage-light transition-colors"
            >
              <span className="text-2xl text-sage mb-5 block">{item.icon}</span>
              <h3 className="font-serif text-bark text-xl mb-3">{item.title}</h3>
              <p className="text-bark-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
