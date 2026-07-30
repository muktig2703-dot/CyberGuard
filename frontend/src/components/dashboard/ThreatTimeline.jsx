import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import GlassCard from "../ui/GlassCard";
import { threatTimeline } from "../../data/dashboardData";

export default function ThreatTimeline() {
  return (
    <GlassCard className="h-[420px]">
      <h2 className="mb-6 text-xl font-semibold">
        Threat Timeline
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={threatTimeline}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="threats"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.25}
          />
        </AreaChart>
      </ResponsiveContainer>
    </GlassCard>
  );
}