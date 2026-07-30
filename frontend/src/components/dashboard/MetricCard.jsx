import GlassCard from "../ui/GlassCard";
import { TrendingUp } from "lucide-react";

export default function MetricCard({
  title,
  value,
  trend,
  icon,
}) {
  return (
    <GlassCard>

      <div className="flex items-start justify-between">

        <div>

          <p
            className="text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            {value}
          </h2>

          <div className="mt-6 flex items-center gap-2 text-green-400">

            <TrendingUp size={16} />

            <span>{trend}</span>

          </div>

          <p
            className="mt-2 text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Updated just now
          </p>

        </div>

        <div
          className="rounded-2xl p-4"
          style={{
            background: "rgba(59,130,246,.12)",
          }}
        >
          {icon}
        </div>

      </div>

    </GlassCard>
  );
}