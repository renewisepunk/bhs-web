"use client";

import { useState, useCallback } from "react";

let externalToggle: (() => void) | null = null;

export function openConiqWidget(): void {
  externalToggle?.();
}

export default function ConiqAgent() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  externalToggle = toggle;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-bhs-border bg-white">
        <span className="font-serif text-sm text-bhs-black">
          AI Concierge
        </span>
        <button
          onClick={toggle}
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-bhs-gray transition-colors"
          aria-label="Close concierge"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-bhs-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Iframe */}
      <iframe
        src="https://agent.coniq.com/embed/08d85ef3-4acd-4297-9ca2-5bac98d4bb47/fullscreen"
        className="flex-1 w-full border-none"
        title="ConIQ AI Chat"
        allow="microphone"
      />
    </div>
  );
}
