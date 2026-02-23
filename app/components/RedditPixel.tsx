"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    rdt?: (action: string, eventType: string, data?: Record<string, any>) => void;
  }
}

export default function RedditPixel({ pixelId }: { pixelId?: string }) {
  const pathname = usePathname();

  useEffect(() => {
    // Skip if no pixel ID configured
    if (!pixelId || pixelId === "YOUR_PIXEL_ID_HERE") return;

    // Initialize Reddit Pixel if not already loaded
    if (!window.rdt) {
      const script = document.createElement("script");
      script.innerHTML = `
        !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
        rdt('init','${pixelId}', {"optOut":false,"useDecimalCurrencyValues":true});
      `;
      document.head.appendChild(script);
    }

    // Track PageVisit on route changes
    if (window.rdt) {
      window.rdt("track", "PageVisit");
    }
  }, [pathname, pixelId]);

  return null;
}
