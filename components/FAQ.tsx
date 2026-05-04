const faqs = [
  {
    q: "Where is The Secret Sanctuary located?",
    a: "In Sarawak, Borneo, surrounded by garden, water, and rainforest. Full directions are shared once your booking is confirmed.",
  },
  {
    q: "What is included in a staycation?",
    a: "A quiet stay, simple herbal food, garden and water access, and as much or as little contact as you'd like — from full privacy to deeper conversation.",
  },
  {
    q: "Can I come for a day visit only?",
    a: "Day visits and 1:1 sessions can sometimes be arranged. The best way to ask is on WhatsApp.",
  },
  {
    q: "Is the sanctuary suitable for couples or solo travelers?",
    a: "Both. Most guests come solo or as a pair. The space is private and intimate — not a group hotel.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable clothes, swimwear, journal or art supplies if you wish. Less is more. The sanctuary itself takes care of the rest.",
  },
  {
    q: "How long should I stay?",
    a: "Some guests come for a single quiet night. Others stay a week or longer. Two to four nights is often a good first taste.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-sand py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            Questions
          </p>
          <h2 className="font-serif text-bark text-3xl lg:text-4xl leading-tight">
            Good things to know.
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group border-b border-sage-light/50 py-5"
            >
              <summary className="cursor-pointer flex items-center justify-between gap-6 list-none">
                <span className="font-serif text-bark text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="text-forest text-xl leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-bark-light leading-relaxed pr-10">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
