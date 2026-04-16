const events = [
  {
    title: "Spring Fashion Week",
    date: "April 18–20, 2026",
    description:
      "Experience exclusive runway presentations from the world's most celebrated designers.",
    tag: "Fashion",
  },
  {
    title: "Art in the Gardens",
    date: "April 25, 2026",
    description:
      "A curated outdoor exhibition featuring contemporary sculptures and installations.",
    tag: "Art",
  },
  {
    title: "Wine & Dine Evening",
    date: "May 2, 2026",
    description:
      "Fine wines paired with culinary creations from Carpaccio and Makoto.",
    tag: "Dining",
  },
  {
    title: "Summer Soirée",
    date: "May 15, 2026",
    description:
      "Live music, cocktails, and late-night shopping at select boutiques.",
    tag: "Social",
  },
  {
    title: "Jewelry Masterclass",
    date: "May 22, 2026",
    description:
      "An intimate look at exceptional gemstones with experts from Graff and Harry Winston.",
    tag: "Luxury",
  },
];

export default function EventsPage() {
  return (
    <div className="px-5 py-6">
      <h1 className="font-serif text-3xl text-bhs-black mb-1">Events</h1>
      <p className="text-bhs-muted text-sm font-light mb-6">
        Discover upcoming experiences at Bal Harbour Shops.
      </p>

      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.title}
            className="bg-bhs-gray rounded-xl p-5 cursor-pointer hover:bg-bhs-border transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-bhs-lime font-bold bg-bhs-black px-2.5 py-1 rounded-full">
                {event.tag}
              </span>
              <span className="text-[11px] text-bhs-muted">
                {event.date}
              </span>
            </div>
            <h2 className="font-serif text-lg text-bhs-black mb-1.5">
              {event.title}
            </h2>
            <p className="text-sm text-bhs-muted font-light leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
