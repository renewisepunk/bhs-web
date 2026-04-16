"use client";

import { useEffect, useState } from "react";

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

let initialized = false;

export function openConiqWidget(): void {
  const container = document.getElementById("coniq-direct-widget-container");
  if (!container) return;

  const toggleBtn =
    container.querySelector<HTMLButtonElement>("button") ??
    container.querySelector<HTMLElement>("[role='button']") ??
    container.querySelector<HTMLElement>("div[class*='toggle']") ??
    container.querySelector<HTMLElement>("div[class*='button']");

  if (toggleBtn) {
    toggleBtn.click();
  }
}

export default function ConiqAgent() {
  const [loaded, setLoaded] = useState(initialized);

  useEffect(() => {
    if (initialized) return;

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
      initialized = true;
      setLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  return loaded ? null : null;
}
