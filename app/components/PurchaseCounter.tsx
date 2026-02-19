interface PurchaseCounterProps {
  count: number;
}

export default function PurchaseCounter({ count }: PurchaseCounterProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      {count.toLocaleString()} people bought this guide
    </span>
  );
}
