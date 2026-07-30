import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import GlassCard from "../ui/GlassCard";
import { attackDistribution } from "../../data/dashboardData";

const COLORS = [
  "#3b82f6",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#8b5cf6",
  "#22c55e",
];

export default function AttackDistribution() {
  return (
    <GlassCard className="h-[420px]">
      <h2 className="mb-6 text-xl font-semibold">
        Attack Distribution
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={attackDistribution}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
          >
            {attackDistribution.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </GlassCard>
  );
}