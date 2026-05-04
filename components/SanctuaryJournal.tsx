import Image from "next/image";

const THUMBNAIL = "/The Secret Sanctuary Website/Home.png";

const journalEntries = [
  { src: "/The Secret Sanctuary Website/Home.png", caption: "Early homepage memory" },
  { src: "/The Secret Sanctuary Website/Contact (2).png", caption: "The first invitation" },
  { src: "/The Secret Sanctuary Website/4.png", caption: "A quiet page from the old site" },
  { src: "/The Secret Sanctuary Website/Testimonials.png", caption: "Old testimonial page" },
  { src: "/The Secret Sanctuary Website/8.png", caption: "Early visual concept" },
  { src: "/The Secret Sanctuary Website/Contact.png", caption: "Contact and connection" },
  { src: "/The Secret Sanctuary Website/12.png", caption: "What else is possible?" },
  { src: "/The Secret Sanctuary Website/9.png", caption: "A piece of the original sanctuary story" },
  { src: "/The Secret Sanctuary Website/13.png", caption: "Fragments of the early story" },
  { src: "/The Secret Sanctuary Website/Deals.png", caption: "Early offerings" },
];

export default function SanctuaryJournal() {
  return (
    <section id="journal" className="bg-cream py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <details className="group">
          {/* Single thumbnail card — acts as the open trigger */}
          <summary
            className="list-none cursor-pointer block [&::-webkit-details-marker]:hidden"
            aria-label="Open the archive of the old Secret Sanctuary website"
          >
            <div className="bg-cream border border-sand rounded-2xl overflow-hidden shadow-[0_15px_40px_-25px_rgba(45,74,62,0.3)] transition-shadow group-hover:shadow-[0_20px_50px_-20px_rgba(45,74,62,0.4)] group-open:hidden max-w-md mx-auto">
              <div className="relative w-full aspect-[4/3] bg-sand">
                <Image
                  src={THUMBNAIL}
                  alt="The original Secret Sanctuary website"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 448px"
                />
              </div>
              <div className="px-6 py-6 text-center">
                <p className="text-mist text-xs uppercase tracking-[0.2em] mb-2">
                  Archive Journal
                </p>
                <h3 className="font-serif text-bark text-xl mb-2">
                  Old Sanctuary Website Journal
                </h3>
                <p className="text-bark-light text-sm leading-relaxed mb-4">
                  A visual archive of the original Secret Sanctuary pages,
                  memories, testimonials, and early invitations.
                </p>
                <span className="inline-flex items-center gap-2 text-forest text-xs uppercase tracking-[0.2em] font-medium">
                  Open the archive
                  <span aria-hidden="true">↓</span>
                </span>
              </div>
            </div>
          </summary>

          {/* Expanded journal/gallery — all 10 screenshots, readable */}
          <div className="mt-4">
            <div className="text-center mb-12">
              <p className="text-mist text-xs uppercase tracking-[0.2em] mb-3">
                Archive Journal
              </p>
              <h2 className="font-serif text-bark text-3xl lg:text-4xl mb-3">
                Old Sanctuary Website Journal
              </h2>
              <p className="text-bark-light italic">
                A visual archive of the original Secret Sanctuary pages.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {journalEntries.map((entry) => (
                <li
                  key={entry.src}
                  className="bg-cream border border-sand rounded-2xl overflow-hidden shadow-[0_10px_30px_-20px_rgba(45,74,62,0.25)]"
                >
                  <div className="bg-sand/50 p-3">
                    <Image
                      src={entry.src}
                      alt={entry.caption}
                      width={1200}
                      height={1600}
                      className="w-full h-auto rounded-lg object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-center border-t border-sand">
                    <span className="text-bark-light text-xs uppercase tracking-[0.18em]">
                      {entry.caption}
                    </span>
                  </figcaption>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-center">
              <p className="text-mist text-xs uppercase tracking-[0.2em]">
                <span aria-hidden="true">↑ </span>
                Close archive (click the section header)
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
