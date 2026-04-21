const steps = [
  {
    number: "1",
    title: "Reach Out",
    description:
      "Book a free Discovery Call or send a message on WhatsApp. Tell us a little about where you are and what you're looking for. No commitment, no pressure.",
  },
  {
    number: "2",
    title: "Arrive",
    description:
      "Come to the sanctuary with nothing but yourself. Your program, your space, and your support are already prepared. You just need to show up.",
  },
  {
    number: "3",
    title: "Return Changed",
    description:
      "Leave with clarity, practical tools, and a reset that continues working. Not a memory of a good week — a genuine shift in how you feel and function.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight">
            Three steps. Real change.
          </h2>
          <p className="mt-5 text-bark-light leading-relaxed">
            We've kept the process simple because simplicity is part of the healing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-sand -translate-x-6 z-0" />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-sage flex items-center justify-center mb-6">
                  <span className="font-serif text-forest">{step.number}</span>
                </div>
                <h3 className="font-serif text-bark text-xl mb-3">{step.title}</h3>
                <p className="text-bark-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
