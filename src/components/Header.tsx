"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between px-5 py-2 bg-white border-b border-bhs-border">
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
      <div className="absolute left-1/2 -translate-x-1/2">
        <Image
          src="/bhs-logo.png"
          alt="Bal Harbour Shops"
          width={60}
          height={40}
          className="h-9 w-auto"
          priority
        />
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
