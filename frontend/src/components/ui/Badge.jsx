const colors = {
  low: "#22C55E",
  medium: "#F59E0B",
  high: "#F97316",
  critical: "#EF4444",
};

export default function Badge({
  level = "low",
}) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-semibold capitalize"
      style={{
        background: `${colors[level]}20`,
        color: colors[level],
      }}
    >
      {level}
    </span>
  );
}