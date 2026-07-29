import GlassCard from "../ui/GlassCard";

export default function MetricCard({
  title,
  value,
  icon,
  trend,
}) {
  return (
    <GlassCard className="min-h-[180px]">

      <div className="flex items-start justify-between">

        <div>

          <p
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {title}
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            {value}
          </h2>

          <p
            className="mt-6 text-sm text-green-400"
          >
            {trend}
          </p>

        </div>

        <div className="rounded-xl bg-blue-500/10 p-3">
          {icon}
        </div>

      </div>

    </GlassCard>
  );
}