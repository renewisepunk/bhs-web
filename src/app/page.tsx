import Image from "next/image";
import Link from "next/link";

const editorialCards = [
  {
    title: "In Focus: Ferragamo",
    subtitle: "Fashion",
    description:
      "Discover Ferragamo's reinvented identity—where Italian craftsmanship meets a bold, modern vision.",
    image:
      "https://www.balharbourshops.com/wp-content/uploads/2026/04/1284-Ferragamo-collage-hero-runway-models-portrait.jpg",
  },
  {
    title: "Shine On",
    subtitle: "Jewelry",
    description:
      "You deserve a little something special. Explore exceptional pieces from Ara Vartanian, Davidor, and Maria Tash.",
    image:
      "https://www.balharbourshops.com/wp-content/uploads/2023/08/shine-on-edit-1240-1-600x600.jpg",
  },
  {
    title: "The Big Chill",
    subtitle: "Style",
    description:
      "Statement outerwear and cozy layers designed to command attention, no matter the temperature.",
    image:
      "https://www.balharbourshops.com/wp-content/uploads/2025/12/the-big-chill-franchi-2-600x600.jpg",
  },
  {
    title: "Chic Accents",
    subtitle: "Accessories",
    description:
      "Sometimes all it takes is one power accessory to add major volume to your look.",
    image:
      "https://www.balharbourshops.com/wp-content/uploads/2024/03/chic-accents-edit-600x600.jpg",
  },
];

const shopCards = [
  {
    title: "Haute Nesting",
    image:
      "https://www.balharbourshops.com/wp-content/uploads/2023/08/haute-nesting-lalique-2-450x450.jpg",
  },
  {
    title: "It's a Guy Thing",
    image:
      "https://www.balharbourshops.com/wp-content/uploads/2023/07/its-a-guy-thing-collection-450x450.jpg",
  },
  {
    title: "Young at Heart",
    image:
      "https://www.balharbourshops.com/wp-content/uploads/2025/03/1240-young-at-heart-2025.jpg",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-52 overflow-hidden">
        <Image
          src="https://www.balharbourshops.com/wp-content/uploads/2026/04/1284-Dania-Baru-aerial-view-yacht-mountains-hero.jpg"
          alt="Bon Voyage — Bal Harbour Shops"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-bhs-lime font-bold mb-1">
            Travel
          </p>
          <h1 className="font-serif text-2xl text-white leading-tight">
            Bon Voyage
          </h1>
        </div>
      </section>

      <div className="px-5 py-6">
        {/* Welcome */}
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="font-serif text-2xl text-bhs-black">
              Welcome to Luxury
            </h2>
            <span className="bg-bhs-lime text-bhs-black text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full">
              Discover
            </span>
          </div>
          <p className="text-bhs-muted text-sm font-light leading-relaxed">
            Over 100 boutiques, world-class dining, and unforgettable
            experiences at Bal Harbour Shops.
          </p>
        </section>

        {/* Quick links */}
        <section className="grid grid-cols-3 gap-3 mb-8">
          <Link
            href="/directory"
            className="bg-bhs-gray rounded-xl p-4 text-center hover:bg-bhs-border transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-7 h-7 mx-auto mb-2 text-bhs-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0 0 20.25 9.35m-16.5 0a3.001 3.001 0 0 1 3.75.615m12.75-.615a3.001 3.001 0 0 1-3.75.615m-9 0a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3m-9 0h6" />
            </svg>
            <p className="text-xs font-medium text-bhs-black">Directory</p>
          </Link>
          <Link
            href="/events"
            className="bg-bhs-gray rounded-xl p-4 text-center hover:bg-bhs-border transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-7 h-7 mx-auto mb-2 text-bhs-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <p className="text-xs font-medium text-bhs-black">Events</p>
          </Link>
          <Link
            href="/rewards"
            className="bg-bhs-gray rounded-xl p-4 text-center hover:bg-bhs-border transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-7 h-7 mx-auto mb-2 text-bhs-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
            <p className="text-xs font-medium text-bhs-black">Rewards</p>
          </Link>
        </section>

        {/* Editorial */}
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-bhs-muted mb-4">
            The BHS Edit
          </h2>
          <div className="space-y-4">
            {editorialCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-bhs-lime font-bold mb-1">
                      {card.subtitle}
                    </p>
                    <h3 className="font-serif text-lg text-white leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="bg-bhs-gray p-4">
                  <p className="text-sm text-bhs-muted font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shop Now */}
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-bhs-muted mb-4">
            Shop Now
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5">
            {shopCards.map((card) => (
              <div
                key={card.title}
                className="relative flex-shrink-0 w-36 h-36 rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-2 left-3 right-3 font-serif text-sm text-white leading-tight">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-bhs-lime rounded-xl p-5 text-center mb-4">
          <h2 className="font-serif text-lg text-bhs-black mb-1">
            The BHS Roundup
          </h2>
          <p className="text-xs text-bhs-black/60 font-light">
            Subscribe to our biweekly newsletter covering the latest in fashion,
            trends, and culture.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center py-4">
          <p className="text-[11px] text-bhs-muted tracking-wide">
            9700 Collins Avenue, Bal Harbour, FL 33154
          </p>
          <p className="text-[11px] text-bhs-muted tracking-wide mt-1">
            Open today 11 AM – 9 PM
          </p>
        </footer>
      </div>
    </div>
  );
}
