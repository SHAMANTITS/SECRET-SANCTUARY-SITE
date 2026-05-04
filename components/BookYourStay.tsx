const WHATSAPP_URL = "https://wa.me/60198888986";
// TODO: Replace with real listing URLs once received
const BOOKING_COM_URL = "#TODO-booking-com";
const AGODA_URL = "#TODO-agoda";
const AIRBNB_URL = "#TODO-airbnb";

const channels = [
  {
    label: "WhatsApp Direct",
    href: WHATSAPP_URL,
    primary: true,
    note: "Fastest reply",
    external: true,
  },
  {
    label: "Booking.com",
    href: BOOKING_COM_URL,
    primary: false,
    note: "Coming soon",
    external: true,
  },
  {
    label: "Agoda",
    href: AGODA_URL,
    primary: false,
    note: "Coming soon",
    external: true,
  },
  {
    label: "Airbnb",
    href: AIRBNB_URL,
    primary: false,
    note: "Coming soon",
    external: true,
  },
];

export default function BookYourStay() {
  return (
    <section id="book" className="bg-sand py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-mist text-xs uppercase tracking-[0.2em] mb-4">
          Reservations
        </p>
        <h2 className="font-serif text-bark text-4xl lg:text-5xl leading-tight mb-6">
          Book Your Stay
        </h2>
        <p className="text-bark-light text-lg leading-relaxed mb-10">
          For simple staycation bookings, reserve through our listing partners
          or message us directly for availability.
        </p>
        <p className="text-forest font-medium mb-10">From RM150 / night</p>

        <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
          {channels.map((c) => {
            const isTodo = c.href.startsWith("#TODO");
            const baseClass = `flex flex-col items-center justify-center px-6 py-4 rounded-2xl text-sm font-medium transition-colors ${
              c.primary
                ? "bg-forest text-cream hover:bg-forest-dark"
                : isTodo
                ? "border border-bark-light/30 text-bark-light/70 cursor-not-allowed"
                : "border border-forest text-forest hover:bg-forest/5"
            }`;
            const noteClass = `mt-1 text-xs font-normal ${
              c.primary
                ? "text-cream/70"
                : isTodo
                ? "text-bark-light/50"
                : "text-forest/70"
            }`;
            const inner = (
              <>
                <span>{c.label}</span>
                {c.note && <span className={noteClass}>{c.note}</span>}
              </>
            );
            if (isTodo) {
              return (
                <span
                  key={c.label}
                  className={baseClass}
                  aria-disabled="true"
                  role="link"
                >
                  {inner}
                </span>
              );
            }
            return (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClass}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
