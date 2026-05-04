import Image from "next/image";

const CALENDLY_URL =
  "https://calendly.com/thesecret-sanctuary/root-cause-reset-discovery-call";
const WHATSAPP_URL = "https://wa.me/60198888986";

const pathways = [
  {
    title: "Staycation",
    image: "/cozy_tropical_inspired_villa_interior.png",
    imageAlt: "Cozy tropical-inspired villa interior",
    description:
      "A quiet nature-based stay for travelers, couples, friends, or locals who want rest, privacy, simple food, water, garden atmosphere, and a break from the noise.",
    price: "From RM150 / night",
    cta: { label: "Book Your Stay", href: WHATSAPP_URL, primary: true },
  },
  {
    title: "1:1 Online",
    image: "/rustic_retreat_entrance_with_wooden_signs.png",
    imageAlt: "Welcoming retreat entrance with wooden signs",
    description:
      "Start with a private online conversation with Cyril to explore what you need, whether it is clarity, emotional reset, nervous system support, or a personalized retreat plan.",
    price: null,
    cta: { label: "Talk to Cyril Online", href: CALENDLY_URL, primary: false },
  },
  {
    title: "Art + Nervous System Reset",
    image: "/tropical_waterfall_bliss_with_serenity.png",
    imageAlt: "Waterfall and water at the sanctuary",
    description:
      "A private or small-group retreat for writing, music, art, movement, rest, regulation, and reconnecting with your authentic expression.",
    price: null,
    cta: { label: "Plan Your Retreat", href: WHATSAPP_URL, primary: false },
  },
];

export default function WhatWeOffer() {
  return (
    <section id="offerings" className="bg-sand py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
            Three Ways To Come
          </p>
          <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight">
            Choose your sanctuary experience.
          </h2>
          <p className="mt-5 text-bark-light leading-relaxed">
            Pick what fits where you are now — or message us and we&apos;ll help
            you decide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathways.map((p) => (
            <div
              key={p.title}
              className="bg-cream rounded-2xl overflow-hidden border border-sand hover:border-sage-light transition-colors flex flex-col"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-bark text-2xl mb-2">
                  {p.title}
                </h3>
                {p.price && (
                  <p className="text-forest text-sm font-medium mb-4">
                    {p.price}
                  </p>
                )}
                <p className="text-bark-light text-sm leading-relaxed flex-1 mt-2">
                  {p.description}
                </p>
                <a
                  href={p.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    p.cta.primary
                      ? "bg-forest text-cream hover:bg-forest-dark"
                      : "border border-forest text-forest hover:bg-forest/5"
                  }`}
                >
                  {p.cta.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
