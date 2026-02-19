"use client";

import { useEffect, useState } from "react";

const cities = [
  "Austin", "San Francisco", "New York", "Chicago", "Seattle", "Denver",
  "Portland", "Nashville", "Miami", "Boston", "Los Angeles", "Atlanta",
  "Phoenix", "Dallas", "Minneapolis", "Detroit", "Philadelphia", "Charlotte",
  "Raleigh", "Salt Lake City", "Boise", "Tampa", "San Diego", "Columbus",
];

const guides = ["Cursor AI Complete Guide"];

export default function SocialProofTicker() {
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState("");
  const [guide, setGuide] = useState("");

  useEffect(() => {
    const show = () => {
      setCity(cities[Math.floor(Math.random() * cities.length)]);
      setGuide(guides[Math.floor(Math.random() * guides.length)]);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    // First show after 8-15 seconds
    const initial = setTimeout(show, 8000 + Math.random() * 7000);
    // Then every 25-45 seconds
    const interval = setInterval(show, 25000 + Math.random() * 20000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-40 max-w-xs rounded-xl p-4 shadow-lg transition-all duration-500 animate-slide-in"
      style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg">🎉</span>
        <div>
          <p className="text-sm font-medium">
            Someone in {city} just purchased
          </p>
          <p className="text-sm" style={{ color: "var(--accent)" }}>{guide}</p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            {Math.floor(Math.random() * 5) + 1} minutes ago
          </p>
        </div>
      </div>
    </div>
  );
}
