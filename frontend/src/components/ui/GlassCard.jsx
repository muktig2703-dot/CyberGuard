export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      rounded-3xl
      border
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-2xl
      ${className}
      `}
      style={{
        background: "rgba(18,26,42,.70)",
        backdropFilter: "blur(18px)",
        borderColor: "var(--border)",
      }}
    >
      {children}
    </div>
  );
}