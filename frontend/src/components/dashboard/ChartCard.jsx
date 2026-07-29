import GlassCard from "../ui/GlassCard";

export default function ChartCard({
  title,
  children,
}) {
  return (
    <GlassCard>

      <h3 className="mb-6 text-xl font-semibold">
        {title}
      </h3>

      <div className="h-[320px]">

        {children}

      </div>

    </GlassCard>
  );
}