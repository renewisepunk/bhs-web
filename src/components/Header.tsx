"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-white border-b border-bhs-border">
      {/* Hamburger menu */}
      <button className="p-1" aria-label="Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-6 h-6 text-bhs-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
          />
        </svg>
      </button>

      {/* Centered BHS logo */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none">
        <span className="text-[11px] font-serif tracking-wide text-bhs-black">
          Bal
        </span>
        <span className="text-[9px] tracking-[0.15em] text-bhs-black font-light">
          Harbour
        </span>
        <span className="text-[9px] tracking-[0.15em] text-bhs-black font-light">
          Shops
        </span>
      </div>

      {/* Profile icon */}
      <button className="p-1 relative" aria-label="Profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-bhs-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-bhs-lime rounded-full" />
      </button>
    </header>
  );
}
