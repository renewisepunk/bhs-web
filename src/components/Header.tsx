"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-black border-b border-bhs-border">
      <Link href="/" className="flex items-center gap-2">
        <span className="font-serif text-lg tracking-wider text-white">
          BAL HARBOUR SHOPS
        </span>
      </Link>
      <div className="flex items-center gap-3">
        <span className="text-[11px] uppercase tracking-widest text-bhs-muted font-sans font-medium">
          Open today 11am–9pm
        </span>
      </div>
    </header>
  );
}
