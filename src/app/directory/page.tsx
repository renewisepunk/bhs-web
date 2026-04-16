const stores = [
  { name: "Chanel", category: "Fashion", level: "Level 1" },
  { name: "Gucci", category: "Fashion", level: "Level 1" },
  { name: "Louis Vuitton", category: "Fashion", level: "Level 1" },
  { name: "Prada", category: "Fashion", level: "Level 1" },
  { name: "Balenciaga", category: "Fashion", level: "Level 1" },
  { name: "Valentino", category: "Fashion", level: "Level 2" },
  { name: "Fendi", category: "Fashion", level: "Level 2" },
  { name: "Bottega Veneta", category: "Fashion", level: "Level 2" },
  { name: "Saint Laurent", category: "Fashion", level: "Level 2" },
  { name: "Dior", category: "Fashion", level: "Level 1" },
  { name: "Tiffany & Co.", category: "Jewelry", level: "Level 1" },
  { name: "Cartier", category: "Jewelry", level: "Level 1" },
  { name: "Harry Winston", category: "Jewelry", level: "Level 1" },
  { name: "Graff", category: "Jewelry", level: "Level 2" },
  { name: "Saks Fifth Avenue", category: "Department Store", level: "Level 1" },
  { name: "Neiman Marcus", category: "Department Store", level: "Level 1" },
  { name: "Carpaccio", category: "Dining", level: "Level 1" },
  { name: "Makoto", category: "Dining", level: "Level 1" },
  { name: "Le Zoo", category: "Dining", level: "Level 2" },
];

export default function DirectoryPage() {
  const categories = [...new Set(stores.map((s) => s.category))];

  return (
    <div className="px-5 py-6">
      <h1 className="font-serif text-3xl text-bhs-black mb-1">
        Store Directory
      </h1>
      <p className="text-bhs-muted text-sm font-light mb-6">
        Over 100 luxury boutiques, restaurants, and world-class experiences.
      </p>

      {categories.map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-bhs-lime font-bold mb-2 bg-bhs-gray rounded-lg px-3 py-2">
            {category}
          </h2>
          <div>
            {stores
              .filter((s) => s.category === category)
              .map((store) => (
                <div
                  key={store.name}
                  className="flex items-center justify-between py-3.5 border-b border-bhs-border cursor-pointer hover:bg-bhs-gray transition-colors px-3 -mx-3 rounded"
                >
                  <span className="font-light text-sm text-bhs-black">
                    {store.name}
                  </span>
                  <span className="text-[11px] text-bhs-muted">
                    {store.level}
                  </span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
