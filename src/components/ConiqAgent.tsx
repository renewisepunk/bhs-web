"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    ConiqDirectWidget?: {
      init: (config: {
        chatbotId: string;
        apiBaseUrl: string;
        width?: number;
        height?: number;
      }) => void;
    };
  }
}

export default function ConiqAgent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;

    const script = document.createElement("script");
    script.src = "https://agent.coniq.com/direct-widget.iife.js";
    script.async = true;
    script.onload = () => {
      window.ConiqDirectWidget?.init({
        chatbotId: "08d85ef3-4acd-4297-9ca2-5bac98d4bb47",
        apiBaseUrl: "https://agent.coniq.com",
        width: 800,
        height: 1000,
      });
      setLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [loaded]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      {!loaded && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-bhs-lime/30 border-t-bhs-lime rounded-full animate-spin" />
          <p className="text-sm text-bhs-muted tracking-wide">
            Loading your concierge...
          </p>
        </div>
      )}
    </div>
  );
}
