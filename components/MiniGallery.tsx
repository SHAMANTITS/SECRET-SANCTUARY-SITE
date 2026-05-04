import Image from "next/image";

const photos = [
  {
    src: "/tropical_evening_retreat_by_the_pool.png",
    alt: "Evening at the sanctuary pool",
  },
  {
    src: "/rustic_izakaya_atmosphere_with_lanterns.png",
    alt: "Lantern-lit gathering space",
  },
  {
    src: "/cozy_courtyard_with_water_and_vines.png",
    alt: "Cozy courtyard with water and vines",
  },
];

export default function MiniGallery() {
  return (
    <section id="gallery" className="bg-cream py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
          {photos.map((p) => (
            <div
              key={p.src}
              className="relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
