import Link from "next/link";

const editorialCards = [
  {
    title: "In Focus: Ferragamo",
    subtitle: "Fashion",
    description:
      "Discover Ferragamo's reinvented identity—where Italian craftsmanship meets a bold, modern vision.",
  },
  {
    title: "Shine On",
    subtitle: "Jewelry",
    description:
      "You deserve a little something special. Explore exceptional pieces from Ara Vartanian, Davidor, and Maria Tash.",
  },
  {
    title: "The Big Chill",
    subtitle: "Style",
    description:
      "Statement outerwear and cozy layers designed to command attention, no matter the temperature.",
  },
  {
    title: "Chic Accents",
    subtitle: "Accessories",
    description:
      "Sometimes all it takes is one power accessory to add major volume to your look.",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-8">
      {/* Hero */}
      <section className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-bhs-lime font-semibold mb-4">
          Welcome to
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 leading-tight">
          Bal Harbour Shops
        </h1>
        <p className="text-white/50 text-sm font-light max-w-md mx-auto leading-relaxed">
          The world&apos;s finest luxury shopping destination in Miami, Florida.
          Over 100 boutiques, world-class dining, and unforgettable experiences.
        </p>
      </section>

      {/* Quick links */}
      <section className="grid grid-cols-3 gap-3 mb-12">
        <Link
          href="/directory"
          className="border border-bhs-border p-4 text-center hover:border-bhs-lime/30 transition-colors group"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-bhs-muted group-hover:text-bhs-lime transition-colors mb-1">
            Explore
          </p>
          <p className="font-serif text-lg">Directory</p>
        </Link>
        <Link
          href="/events"
          className="border border-bhs-border p-4 text-center hover:border-bhs-lime/30 transition-colors group"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-bhs-muted group-hover:text-bhs-lime transition-colors mb-1">
            Upcoming
          </p>
          <p className="font-serif text-lg">Events</p>
        </Link>
        <Link
          href="/rewards"
          className="border border-bhs-border p-4 text-center hover:border-bhs-lime/30 transition-colors group"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-bhs-muted group-hover:text-bhs-lime transition-colors mb-1">
            Members
          </p>
          <p className="font-serif text-lg">Rewards</p>
        </Link>
      </section>

      {/* Editorial */}
      <section className="mb-12">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-bhs-lime font-semibold mb-6">
          The BHS Edit
        </h2>
        <div className="space-y-4">
          {editorialCards.map((card) => (
            <div
              key={card.title}
              className="border border-bhs-border p-5 hover:border-bhs-lime/30 transition-colors group cursor-pointer"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-bhs-muted mb-2">
                {card.subtitle}
              </p>
              <h3 className="font-serif text-xl mb-2 group-hover:text-bhs-lime transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border border-bhs-lime/30 bg-bhs-lime/5 p-6 text-center mb-8">
        <h2 className="font-serif text-xl mb-2">The BHS Roundup</h2>
        <p className="text-sm text-white/50 font-light max-w-sm mx-auto">
          Subscribe to our biweekly newsletter covering the latest in fashion,
          trends, and culture.
        </p>
      </section>

      {/* Footer info */}
      <footer className="text-center pb-4">
        <p className="text-[11px] text-bhs-muted tracking-wide">
          9700 Collins Avenue, Bal Harbour, FL 33154
        </p>
        <p className="text-[11px] text-bhs-muted tracking-wide mt-1">
          Open today 11 AM – 9 PM
        </p>
      </footer>
    </div>
  );
}
