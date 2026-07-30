import {
  Activity,
  ShieldAlert,
  Ban,
  BrainCircuit,
} from "lucide-react";

import AppLayout from "../../layouts/AppLayout";

import MetricCard from "../../components/dashboard/MetricCard";
import SectionHeader from "../../components/ui/SectionHeader";
import PacketTable from "../../components/dashboard/PacketTable";
import AttackDistribution from "../../components/dashboard/AttackDistribution";
import ThreatTimeline from "../../components/dashboard/ThreatTimeline";
import RecentEvents from "../../components/dashboard/RecentEvents";
import AIStatus from "../../components/dashboard/AIStatus";
export default function Dashboard() {
  return (
    <AppLayout>

      <SectionHeader />

<div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">

        <MetricCard
          title="Packets"
          value="12,483"
          trend="+14% today"
          icon={<Activity size={28} />}
        />

        <MetricCard
          title="Threats"
          value="156"
          trend="8 Critical"
          icon={<ShieldAlert size={28} />}
        />

        <MetricCard
          title="Blocked IPs"
          value="48"
          trend="Auto Response Active"
          icon={<Ban size={28} />}
        />

        <MetricCard
          title="Accuracy"
          value="99.2%"
          trend="Random Forest"
          icon={<BrainCircuit size={28} />}
        />

      </div>

      {/* ROW 2 */}

<div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
  <PacketTable />
  <AttackDistribution />
</div>

      {/* ROW 3 */}

<div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
  <ThreatTimeline />
  <AIStatus />
</div>

{/* ROW 4 */}

<div className="mt-8">
  <RecentEvents />
</div>

    </AppLayout>
  );
}