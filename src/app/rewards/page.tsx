import Link from "next/link";

const perks = [
  {
    title: "Complimentary Valet",
    description: "Enjoy complimentary valet parking during every visit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
      </svg>
    ),
  },
  {
    title: "VIP Lounge Access",
    description: "Relax in the exclusive members-only lounge with refreshments.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Exclusive Invitations",
    description: "Priority access to private sales and members-only events.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Personal Shopper",
    description: "A dedicated shopper to curate bespoke experiences for you.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
];

export default function RewardsPage() {
  return (
    <div className="px-5 py-6">
      <div className="flex items-center gap-3 mb-1">
        <h1 className="font-serif text-3xl text-bhs-black">Rewards</h1>
        <span className="bg-bhs-lime text-bhs-black text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full">
          Discovery
        </span>
      </div>
      <p className="text-bhs-muted text-sm font-light mb-6">
        Exclusive benefits for Bal Harbour Shops members.
      </p>

      {/* Tier progress */}
      <section className="bg-bhs-gray rounded-xl p-5 mb-6">
        <p className="font-semibold text-sm text-bhs-black mb-3">
          Your Spend This Year
        </p>
        <div className="relative h-1 bg-bhs-border rounded-full mb-3">
          <div className="absolute left-0 top-0 h-1 w-1 bg-bhs-lime rounded-full" />
          <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-bhs-border rounded-full" />
          <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-bhs-border rounded-full" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-bhs-border rounded-full" />
        </div>
        <div className="flex justify-between text-[11px]">
          <span className="text-bhs-lime font-bold">Discovery</span>
          <span className="text-bhs-muted">Insider</span>
          <span className="text-bhs-muted">Prestige</span>
          <span className="text-bhs-muted">Elite</span>
        </div>
      </section>

      {/* Perks */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {perks.map((perk) => (
          <div
            key={perk.title}
            className="bg-bhs-gray rounded-xl p-4 hover:bg-bhs-border transition-colors"
          >
            <div className="text-bhs-black mb-3">{perk.icon}</div>
            <h3 className="font-semibold text-sm text-bhs-black mb-1">
              {perk.title}
            </h3>
            <p className="text-xs text-bhs-muted font-light leading-relaxed">
              {perk.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-bhs-lime rounded-xl p-5 text-center">
        <h2 className="font-serif text-lg text-bhs-black mb-1">
          Talk to our Concierge
        </h2>
        <p className="text-xs text-bhs-black/60 font-light mb-4">
          Ask our AI Concierge to learn more about your rewards and benefits.
        </p>
        <Link
          href="/"
          className="inline-block bg-bhs-black text-white text-xs font-semibold uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-bhs-dark transition-colors"
        >
          Open Concierge
        </Link>
      </div>
    </div>
  );
}
