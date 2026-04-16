const events = [
  {
    title: "Spring Fashion Week",
    date: "April 18–20, 2026",
    description:
      "Experience exclusive runway presentations from the world's most celebrated designers, featuring new Spring/Summer collections.",
    tag: "Fashion",
  },
  {
    title: "Art in the Gardens",
    date: "April 25, 2026",
    description:
      "A curated outdoor exhibition featuring contemporary sculptures and installations throughout the shops' tropical gardens.",
    tag: "Art",
  },
  {
    title: "Wine & Dine Evening",
    date: "May 2, 2026",
    description:
      "An exclusive evening of fine wines paired with culinary creations from Carpaccio and Makoto.",
    tag: "Dining",
  },
  {
    title: "Summer Soirée",
    date: "May 15, 2026",
    description:
      "Celebrate the start of summer with live music, cocktails, and late-night shopping at select boutiques.",
    tag: "Social",
  },
  {
    title: "Jewelry Masterclass",
    date: "May 22, 2026",
    description:
      "Join experts from Graff and Harry Winston for an intimate look at exceptional gemstones and the art of fine jewelry.",
    tag: "Luxury",
  },
];

export default function EventsPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-8">
      <h1 className="font-serif text-3xl mb-2">Events</h1>
      <p className="text-bhs-muted text-sm mb-8 font-light">
        Discover upcoming experiences at Bal Harbour Shops.
      </p>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.title}
            className="border border-bhs-border p-5 hover:border-bhs-lime/30 transition-colors group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-bhs-lime font-semibold px-2 py-0.5 border border-bhs-lime/30">
                {event.tag}
              </span>
              <span className="text-[11px] text-bhs-muted tracking-wide">
                {event.date}
              </span>
            </div>
            <h2 className="font-serif text-xl mb-2 group-hover:text-bhs-lime transition-colors">
              {event.title}
            </h2>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
