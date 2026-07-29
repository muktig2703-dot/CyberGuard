export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(59,130,246,.12), transparent 35%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(34,197,94,.08), transparent 35%)",
        }}
      />

    </div>
  );
}